CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int not null auto_increment primary key,
  name varchar(255)
);

CREATE TABLE rooms (
  id int not null auto_increment primary key,
  name varchar(255)
);

CREATE TABLE messages (
  id int not null auto_increment primary key,
  content varchar(255),
  room_id int NOT NULL,
  user_id int NOT NULL,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
); 


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

