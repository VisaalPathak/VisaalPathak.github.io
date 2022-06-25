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
![loginpage.png](../assets/images/loginpage.png)

After entering the username and password of the newly created user in airflow in terminal. You will finally be able to enter the homepage of the airflow UI.
It will be something like this:
![first_ui.png](../assets/images/first_ui.png)
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
Now, go to the airflow.cfg file and replace:
 <code>sql_alchemy_conn = 'sqlite:////Users/KLoGic/airflow/airflow.db'</code><br/>
to <code>sql_alchemy_conn = mysql://airflow_user:[password]@localhost:3306/airflow_db</code>
<br/>
Every time you change the .cfg file, you should set the habit of restarting the airflow webserver and scheduler.<br/>
Then initialize the database using <code>airflow db init</code>. Then run webserver and scheduler again, then you will get rid of sequential executor warning and be able to run tasks parallely.
You are now good to go.

<i><b> To be updated Soon</b></i>

