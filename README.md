# angularjs-laravel-testapp
application to test messing around with a angularjs front-end and laravel back-end codebase

Personal Notes for running on my local WSL subsystem:

setup mysql server using the following docs:
https://pen-y-fan.github.io/2021/08/08/How-to-install-MySQL-on-WSL-2-Ubuntu/

* start SQL server `sudo service mysql start`
* stop SQL server `sudo service mysql stop`





## Trouble shooting

* If getting driver error when running migrations or trying to make a request to an endpoint the following command may resolve this: `sudo apt-get install php-mysql`



## Todo

- [ ] Create random generated seeders, or pull from a online API to populate the database tables for future ease of access
