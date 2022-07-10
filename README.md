# angularjs-laravel-testapp
application to test messing around with a angularjs front-end and laravel back-end codebase

Personal Notes for running on my local WSL subsystem:

setup mysql server using the following docs:
https://pen-y-fan.github.io/2021/08/08/How-to-install-MySQL-on-WSL-2-Ubuntu/

* start SQL server `sudo service mysql start`
* stop SQL server `sudo service mysql stop`





## Trouble shooting

* If getting driver error when running migrations or trying to make a request to an endpoint the following command may resolve this: `sudo apt-get install php-mysql`

* changing up some of the typescript syntaxs I'm used too since version 3.9.5, TypeScript enforces strictNullChecks on numbers and strings


## Todo

- [ ] Create random generated seeders, or pull from a online API to populate the database tables for future ease of access
- [ ] Create test database connection before connections can be established
- [ ] Create unit tests for UserController
