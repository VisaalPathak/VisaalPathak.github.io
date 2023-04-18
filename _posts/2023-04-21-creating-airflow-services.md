---
title: "Creating Airflow Services to run airflow as a daemon using systemd in Ubuntu"
date: 2023-04-21T01:45:00+05:450
categories:
  - Systemd service for airflow webserver and scheduler

tags:
  - Airflow
---

## About
A tutorial about how to create Airflow daemon using systemd in Ubuntu 22.04. To know the basics of airflow and how to install it, please go through the blog <a href = 'https://visaalpathak.github.io/getting-started-with-apache-airflow/'>Getting Started With Airflow</a>.

Airflow is an amazing tool to author, schedule and monitor workflows. It's one of the most used platforms by Data Engineers. I mostly use it to create and schedule data pipelines. One thing I always wanted to do was to start airflow as soon as my system boots without activating the virtual environment where airflow is installed and type <code>airflow webserver</code> and <code>airflow scheduler</code> manually.

 I am not saying you shouldn't do that. I just feel like you should always try to automate the boring stuff. My first step to do it was creating alias in ~/.bashrc to activate the airlfow environment and run those two commands, but, it turns out linux has a built-in mechanism to create custom services, enabling them to get started at system boot time and start/stop them as a service. I will be sharing a simple way to create a service for your apache-airflow webserver and scheduler, so that you can run it as a service in this blog.