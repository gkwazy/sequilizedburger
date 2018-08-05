create database burger_db;
use burger_db;

create table burgers
(
    id int not null
    AUTO_INCREMENT,
    burger_name
    varchar
    (50) not null,
    devoured
    BIT not null,
    primary key
    (id);
);

