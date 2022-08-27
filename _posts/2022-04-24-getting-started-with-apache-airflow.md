### Getting Started with Apache Airflow in Linux
Apache Airflow is an open-source workflow management platform for data engineering pipelines. Airflow uses directed acyclic graphs (DAGs) to manage workflow orchestration. Tasks and dependencies are defined in Python and then Airflow manages the scheduling and execution. DAGs can be run either on a defined schedule (e.g. hourly or daily) or based on external event triggers.

### Installation 

You can install it after you install the python pip and virtual env tool to create virtual environment in which we can install airflow.
First you need to check if any updates are available for your system by using: <br/>
<code>sudo apt update</code><br/>
If any updates are available you need to upgrade it by entering:<br/>
<code>sudo apt upgrade</code><br/>
By default there exists python pip in latest linux distributions for python. However, if you want to install python pip  then you can use following command in terminal:<br/>
<code>sudo apt-get install python3-pip</code><br/>
Then you need to create a virtual environment in which we can install airflow.
To install virtual environment tool, enter following commands in terminal;<br/>
<code>sudo apt install python3-virtualenv</code><br/>
Then create a virtual environment named airflow_venv in your home directory using:<br/>
<code> virtualenv airflow_venv</code><br/>
Activate the newly created environment and then apache-airflow using following commands:<br/>
<code>source ~/airflow_venv/bin/activate
pip install apache-airflow
</code><br/>
Check the version of the installed airflow using:<br/>
<code>airflow info</code><br/>
This creates a new folder named airflow in home directory. That has following files and folders: airflow.cfg, logs,webserver_config.py
To start using airflow, you should first intialize the database using command:
```terminal
airflow db init
```
First create a airflow user using following command in terminal:
```terminal
airflow users create -e <email> -f <first_name> -l <last_name> -u <user> -p <password> -r <role>
```
Take for an example:
```terminal
airflow users create -e visaalpathak@abc.com -f visaal -l pathak -u visaal -p airflow_p -r Admin
```
Above command creates user called visaal.
After creating an airflow user, start the airflow server using:<code>airflow webserver</code> in one terminal and <code>airflow scheduler</code> in another after activating the airflow environment.<br/>
After staring scheduler, you can go to the local host http://0.0.0.0:8080 as shown in the terminal where u hit command <code>airflow webserver</code>. You will be directed to following login page:<br/>
![loginpage.png](../assets/images/airflow/loginpage.png)

After entering the username and password of the newly created user in airflow in terminal. You will finally be able to enter the homepage of the airflow UI.
It will be something like this:
![first_ui.png](../assets/images/airflow/first_ui.png)
#### Notes
* You will probably get a warning about executor i.e. about not using the sequential executor in the production environment in the UI page, that is not shown in the above screenshot. If you want to execute tasks sequentially, then it's not really that important. However, if you are really annoyed by that warning or maybe you want some tasks to run parallely you will need to change the executor to either "Local Executor" or "Celery Executor". Local executor maximizes the use of your local system where as, celery executor utilizes the resources of the workers systems. More on this <a href="https://www.astronomer.io/guides/airflow-executors-explained/">here</a>.
* AIrflow uses SQLite as its database by default, Hence, in Sequential Executor mode(i.e. default mode), SQLite is used as database facility. However, to be able to execute tasks parallely, you not only need to change the executor to "Local Executor", You also need to change the database to either mysql or postgres in the airflow.cfg file.
* To change the default database from SQLite to MYSQL, first create a database "airflow_db" that should be utilized by airflow in MySQL. Create a new mysql user and grant all the privileges of the airflow_db to this newly created user. You can do this by entering following commands in mysql:

```python
-- To create a new database
create database airflow_db;

-- To create a new user and grant it all privileges
create user "airflow_user"@"%" identified by "strong-password";

-- granting privileges to newlly created user
GRANT ALL PRIVILEGES ON airflow_db.* TO 'airflow_user';
FLUSH PRIVILEGES;

```
Now, go to the airflow.cfg file and comment or replace the sqlite config to mysql config as:
 ```python
 sql_alchemy_conn = 'sqlite:////Users/KLoGic/airflow/airflow.db'
```
to
```python
sql_alchemy_conn = mysql://airflow_user:[password]@localhost:3306/airflow_db
```
Every time you change the .cfg file, you should set the habit of restarting the airflow webserver and scheduler.<br/>
Then initialize the database using <code>airflow db init</code>. Then run webserver and scheduler again, then you will get rid of sequential executor warning and be able to run tasks parallely.
You are now good to go.

* Note: If you have '@' in your password then you will have to insert "%%40" in place of @, because system will confuse it for @ before the hostname.

### <b>Creating our first DAG</b>
We have now set up our database and ready for writing our first dag. What is dag?<br>
It referes to Directed Acyclic Graph. It is simply a graph of tasks according to their dependencies among each other.<br>
Let's write our first dag in airflow. Below is an example of a simple dag that creates a database and creates a table inside the database after which we will create a table and then insert some data to the table. Let's start with basic imports for writing our DAG.
```python
from airflow.models import DAG
from airflow.providers.mysql.operators.mysql import MySqlOperator

```
Note that, for using Mysql operator, you have to first install it using:
```terminal
pip install apache-airflow-providers-mysql
```
After successfully installing mysql operators, you will have to make a mysql connection id that will be used in tasks of dag. You can do this using UI or command line as well. As command line makes this faster, let's make a mysql connection id using following command:<br>
<code>airflow connections add [connection_name] --conn-type [connection_type] --conn-login [username] --con-password [password] --conn-host [host_name] --conn-port [port]</code><br>
In my case:
```
airflow connections add 'mysq_default' --conn-type 'mysql' --conn-login 'root' --con-password 'Password' --conn-host 'localhost' --conn-port '3306'
```
Now let's create our dag:
![simple_mysql_ops.png](../assets/images/airflow/simple_mysql_op.png)

Above code is <a href = 'https://github.com/VisaalPathak/Blog_codes/blob/main/airflow/dags/simple_mysql_dag.py'>here</a>.<br>
We have written a dag, now let's see it in action. After activating aiflow environment, hit <code>airflow webserver</code> and on another window hit <code>airlfow scheduler</code><br>
Go to: <link>http://0.0.0.0:8080/home<br>
You will now be redirected to airflow home page which will be something like this:
![dag_home.png](../assets/images/airflow/simple_mysql_dag_home.png)
Click on the dag name then trigger the dag:
![trigger.png](../assets/images/airflow/trigger.png)
After triggering the dag, let's see it in graph view.
![success.png](../assets/images/airflow/graph_view.png)
We can see that all the tasks are successfully completed as they are outlined green in above image.<br>
We can further verify this from database side.
![workbench.png](../assets/images/airflow/database_check.png)
We can see that, what we tried to do has now  been successfully completed.
We just wrote a dag that creates a database, creates table and then inserts data to the table.<br>
This is all for an introductory blog. I will keep on writing about airflow and what more can we do with it in upcoming blogs. 

### References:
* https://en.wikipedia.org/wiki/Apache_Airflow
* https://airflow.apache.org/docs/apache-airflow/stable/
* Udemy course by Marc Lamberti: https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/

