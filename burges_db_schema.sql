CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name, devoured) VALUES ('hamburger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('cheese_burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('bacon_cheese_burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('double_bacon_cheese_burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('veggie_burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('turkey_burger',false);
INSERT INTO burgers (burger_name, devoured) VALUES ('mushroom_swiss_burger',false);