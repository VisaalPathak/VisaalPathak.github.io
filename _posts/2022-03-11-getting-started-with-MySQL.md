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
Then you will be prompted to validate the password component, enter 'y' and then selecet the password level digit '0' for low, '1' for medimn and '2' for strong password. Then enter the password that satisfies the chosen level of password and additionally, you will be prompted to remove the anonymous users, test databases, and reload the privileges table. Press’ y or n’ according to your choice, and the configuration will be performed successfully.

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


