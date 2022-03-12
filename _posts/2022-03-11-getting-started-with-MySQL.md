---
title: "Getting Started with MySQL in Linux"
date: 2022-03-10T01:45:00+05:450
categories:
  - Blog about MySQL
tags:
  - MySQL
---
## About
To be a good Data Scientist you first need to understand about databases because to handle mostly structured data, you need to learn about relational database management systems as structured data are stored in a table inside RDBMS. Every organization maintains their data in a Database and they manage and retrieve data using DBMS. So, to be able to analyse these data, you first need to be able to handle data using DBMS.<br/><br/>
SQL is the most widely used programming language while working with databases and supported by various relational database systems, like MySQL, SQL Server, and Oracle. However, the SQL standard has some features that are implemented differently in different database systems. Thus, SQL becomes one of the most important concepts to be learned in this field of Data Science.<br/><br/>
MySQL is an open source RDBMS.  A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.<br/>

## Installation in Linux
I currently use Linux mint and here I have mentioned how to install MySQL in Linux mint, you can pretty much use the same method to install mysql in Ubuntu as well. For windows users, you can find many links and documentations to install and setup your system with MySQL online, I have mentioned some in references, you can refer it to setup your system.<br/>
To install MySQL into your linux system, first you need to open your terminal and update your apt repository cache before installing MySQL. To do that just enter the command below in your terminal:
```terminal
$ sudo apt update
```
Then enter the following command to install MySQL-server:
```terminal
$ sudo apt install mysql-server
```
The terminal should prompt you to choose whether to install MySQL server or not, Enter 'Y' and then after some time you will have it installed in your system.<br/>
To verify whether it was installed or not properly in your system enter:
```terminal
$ mysql --version
```
If you see something like image below then you are good to go.
![installation complete](/assets/images/version_check.png)

### Configuring MySQL installation using secure installation script
The mysql_secure_installation script comes by default with the MySQL installation. It allows us to secure our MySQL installation.
Run  following script to make it more secure:
```terminal
$ sudo mysql_secure_installation
```
Then you will be prompted to validate the password component, enter 'y' and then select the password level digit '0' for low, '1' for medimn and '2' for strong password. Then enter the password that satisfies the chosen level of password and additionally, you will be prompted to remove the anonymous users, test databases, and reload the privileges table. Press’ y or n’ according to your choice, and the configuration will be performed successfully.

### Creating a new MySQL user
After you are done with installing the MySQL you need to enter following SQL commands to be able to create users:
```terminal
$ sudo mysql
```
After hitting the password for the root user and you will enter the MySQL CLI as a root user that can perform various administrative tasks.<br/>
To create another user you need to enter following command:
```terminal
mysql> CREATE USER user_name@'localhost' IDENTIFIED BY 'password_satisfying_set_level';
```
After successfully creating a user, you need to grant privileges to the user using following commands:
```terminal
mysql> GRANT ALL PRIVILEGES ON *. * TO user_name@'localhost';
```
Then it is a good practice to flush the privileges once you do some changes to free up some extra spaces. You can do this by entering following command:
```terminal
mysql> FLUSH PRIVILEGES;
```
You are now done creating a user.
### Logging in to MySQL user and creating a database
Once you are done creating a user, you can now login using following command in terminal:
```terminal
$ mysql -u username -p password;
```
Once you are logged in to MySQL, you can create a database using:
```terminal
mysql> CREATE DATABASE db_name;
```
To create tables inside the database, first you need to make sure that you are inside the database. To do that you need to use that database first by:
```terminal
mysql> USE db_name;
```
Now you will be able to create, update and delete tables inside the database.

#### Creating table
To be able to store data in table first you need to be able to create table. In MySQL to create table you have to use following syntax:<code> CREATE TABLE table_name (column_1 datatype_and_definition, column_2 datatype_and_definition, column_3 datatype_ ....);</code><br/>
```terminal
mysql>  CREATE TABLE new_table (id INT NOT NULL AUTO INCREMENT, name VARCHAR(60) NOT NULL, address VARCHAR, PRIMARY KEY(id));
```
#### Adding a new column to the table
To add a new column to an existing table you can do it using:<code>ALTER TABLE table_name ADD new_column_1 datatype_and_definition;</code>
```terminal
mysql> ALTER TABLE new_table ADD contact_details VARCHAR(15);
```
Similary, to add a new column after a certain column say column_2, you can use:
```terminal
mysql> ALTER TABLE table_name ADD new_column_1 datatype_and_definiton AFTER column_2;
```
You can use keywords <code>FIRST</code> and <code>LAST</code> in the similary manner like keyword AFTER to add a new column at the first column or the last column of the table respectively.
Example of using keyword: FIRST:
```terminal
mysql> ALTER TABLE new_table ADD employee_id VARCHAR(15) FIRST;
```
To see informations about columns use <code>DESCRIBE column_name;</code><br/>
For more detailed information about column use:
```terminal
mysql> SHOW CREATE table_name;
```
You need to remember the naming conventions to make column name standard. Some naming conventions used are:
* CakeShop
* cakeshop
* cake_shop
* CAKESHOP
<br/>You can use any kind of naming conventions that you want, however mostly above conventions are used worldwide to define columns.

#### Basic SQL Statements
1. SELECT statement:<br/>
SELECT statement is used to select data from the database. syntax: <code>SELECT col1, col2,... FROM table_name;</code>
example:
```terminal
mysql> SELECT * FROM new_table;
```
The * is used to select all contents of the table in SQL.
2. INSERT statement:<br/>
INSERT statement is used to insert data as rows in the table. You can insert data using syntax: <code>INSERT INTO ... VALUES (....)</code><br/>
Data can be inserted in following ways
```terminal
mysql> INSERT INTO new_table VALUES(1357, Bishal, Dhulikhel);#if you remember the order of the column
```
OR,
```terminal
mysql> INSERT INTO new_table(employee_id, name, address) VALUES(1357, Bishal, Dhulikhel);#if you want to insert values according to the order provided here.
```
You can define the order of the column and insert values accordingly like this:
```terminal
mysql> INSERT INTO new_table(name, employee_id, address) VALUES(Bishal, 1357, Dhulikhel);
```
3. UPDATE statement:<br/>
UPDATE statement is used to update the values of the existing data. <br/>
syntax: <code>UPDATE table_name<br/>
SET col1 = new_value, col2 = new_value, ...<br/>
WHERE condition</code>
example:
```terminal
mysql>UPDATE new_table SET address = 'Kathmandu', name= 'Visaal' WHERE employee_id = 1357;
```
4. DELETE statement:<br/>
This statement is used to delete data from the existing table. syntax: <code>DELETE FROM table_name WHERE condition</code>
example:
```terminal
mysql>DELETE FROM new_table WHERE employee_id = 1357;
```
Above SQL statement deletes the row whose empoyment_id = 1357 from the table new_table.

5. TRUNCATE statement:<br/>
The TRUNCATE statement is used to delete the contents of the table. It basically empties the table. You can use it to clear a table using syntax: <code>TRUNCATE TABLE table_name;</code><br/>

6. DROP statement:<br/>
The DROP statement is used to drop schema or tables. To drop a table you can use the syntax: <code>DROP TABLE table_name;</code>

#### Sakilla Database
For further SQL demonstration lets use a popular database 'sakila'. The 'sakila' sample database is designed to represent a DVD rental store, and it borrows film and actor names from the Dell sample database. You can use the following commands to import the sakila database to your MySQL instance:
```terminal
# wget https://downloads.mysql.com/docs/sakila-db.tar.gz
# tar -xvf sakila-db.tar.gz
# mysql -uroot -pmsandbox < sakila-db/sakila-schema.sql
# mysql -uroot -pmsandbox < sakila-db/sakila-data.sql
```
#### Sub Queries
SQL is not limited to simple one line statements. You can put queries inside queries and in real world database you have to be able to write such queries because real world data are huge. Above Queries were just a foundation of SQL that makes you understand the basics. To tackle with the real world data you have to be able to write sub queries. It's not that hard but it's not that simple as well, you have to be able to understand and write queries properly before diving into sub queries. Don't worry, with proper effort you'll get here. 
Let's see an example of sub query:
first get inside the sakila database inside the mysql CLI:
```
USE sakila;
```
Now, let's see an example of sub query:
```
select * FROM sakila.actor
where actor_id in
    (select actor_id
    from sakila.film_actor where film_id = 2);
```
Not that hard right? I know you might be little confused by looking at this but you will be able to understand this once you look at the statements carefully and try to visualise and break down what is happening by simply putting these statements apart.<br/>
You can put as many queries inside your query as per your requirement. Let's see another example of sub query:
```
select * FROM actor
    where actor_id in(select actor_id from film_actor
					where film_id in
                    (select film_id from film
                    where title = 'ACE GOLDFINGER'));
```
#### Joins
Join is another important concept in SQL. While working with data you don't always have all the data stored in a single table. Mostly you'll have to join tables and retrieve the data. Joining two or more tables and retrieving important data is mostly what you'll be doing while tackling with data.
For the demonstration of joins lets download another popular database 'world'. Use following commands in the terminal to download the database world:
```terminal
# wget https://downloads.mysql.com/docs/world-db.tar.gz
# tar -xvf world-db.tar.gz
# mysql -uroot -plearning_mysql < world-db/world.sql
```
Types of joins:
1. Inner join:<br/>
* Used to return data from multiple tables.
* The participating table must have atleast one  identical column.
* At least one row in both table must match the join condition.
<br/>Example:<br/>
First get inside the world database and then
```
SELECT city, country
 FROM city INNER JOIN country ON
 city.country_id = country.country_id;
```
2. Left join:<br/>
* Used to return data from multiple tables
* All the rows from left table are returned (even when there's no matching rows in right table)
* Can return NULL if there's no matching rows in right table
<br/>Example in sakilla database:
```
SELECT c.customer_id,
		c.first_name,
        c.last_name,
        a.actor_id,
        a.first_name,
        a.last_name
FROM customer c LEFT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```
3. Right join:
* Used to return data from multiple tables
* All rows from the right table are returned ...
* Will return NULL if there's no matching rows in left table
<br/> Example:
```
SELECT c.customer_id,
		c.first_name,
        c.last_name,
        a.actor_id,
        a.first_name,
        a.last_name
FROM customer c RIGHT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;
```












### References
1. Tahaghoghi, Saied MM, and Hugh E. Williams. Learning MySQL: Get a Handle on Your Data. " O'Reilly Media, Inc.", 2006.
2. https://www.analyticsvidhya.com/blog/2021/06/sql-for-data-science-a-beginners-guide/
3. https://linuxhint.com/install-mysql-linux-mint-ubuntu/
4. https://www.w3schools.com/sql/


