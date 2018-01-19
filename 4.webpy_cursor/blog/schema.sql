CREATE DATABASE blog default charset 'utf8';

use blog;

CREATE TABLE entries (
    id INT AUTO_INCREMENT,
    title TEXT,
    content TEXT,
    posted_on DATETIME,
    primary key (id)
);