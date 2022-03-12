---
title: "SQLAlchemy Basics"
date: 2022-03-12T01:45:00+05:450
categories:
  - Blog about SQLAlchemy
tags:
  - SQLAlchemy
  - ORM with SQLALchemy in Python
---
### INTRODUCTION
SQLAlchemy is the Python SQL toolkit and Object Relational Mapper that gives application developers the full power and flexibility of SQL.

It provides a full suite of well known enterprise-level persistence patterns, designed for efficient and high-performing database access, adapted into a simple and Pythonic domain language.

To get started with SQLAlchemy, you first need to install it. To do that you need to install it using pip:
```python
pip install SQLAlchemy
```
Further for ORM and to access databases properly you also need to install mysql-client or pymysql to avoid MySQLdb not found error. You can do that using:
```python
pip install PyMySQL
```
Then at first you need to import it and install it as MySQLdb to avoid <br/><code>MySQLdb not found error</code> using following code at the top of your code.
```python
import pymysql
pymysql.install_as_MySQLdb()
```
### Main Steps to follow for Object-Relational Mapping:
1. Create Engine
2. Create Session
3. Create Table
4. Migrate


* To create engine you need to use following code:
```python
from sqlalchemy import create_engine
url = "mysql://user:password@localhost:3306/db"
engine = create_engine(url, echo = False)
```

I have used <code>create_engine</code> to connect the engine to the <code>MySQL</code> database. To get started with MySQL, you can see my <a href='https://visaalpathak.github.io/blog%20about%20mysql/getting-started-with-MySQL/'> MySQL</a> blog. You can use alos SQLAlchemy with other databases like SQLite, Postgresql, Oracle, MS-SQL, Firebird, Sybase and others. 
* To create a session, you need to use following code:


```python
import pymysql
pymysql.install_as_MySQLdb()

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

url = "mysql://user:password@localhost:3306/db"
engine = create_engine(url, echo = False)
Session = sessionmaker(bind = engine)
session = Session()
```

### Creating Table
To first create table in sqlalchemy you need to import <code>declarative_base</code> to make a class to instantiate the object table, and for that you also need to import <code>Column</code>, <code>Integer</code> and <code>String</code> to define columns and the data they hold. You can do this using following python code:


```python
import pymysql
pymysql.install_as_MySQLdb()

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
# Creating engine
url = "mysql://username:password@localhost:3306/db"
engine = create_engine(url, echo = False)
# Creating session
Session = sessionmaker(bind = engine)
session = Session()

Base = declarative_base()

# table inheriting Base
class Employee(Base):
  __tablename__ = "Employee"
  employee_id = Column(Integer, primary_key = True)
  name = Column(String(100))
  address = Column(String(100))
# migrating table
Base.metadata.create_all(engine)
```


You have just created a table named Employee inside the database you have used to create the engine. Once the migrating process is done, this will create the table in the provided database.
Above code has all the codes and concepts from the topics I discussed earlier above. You can now build the engine, create a session, create a table and migrate it to the database. For verification you can open the terminal, log in to your mysql version and then select the database and see the list of tables. You will see the table named Employee that you just created using python.



### REFERENCES
1. https://www.sqlalchemy.org/
2. https://docs.sqlalchemy.org/en/14/core/engines.html