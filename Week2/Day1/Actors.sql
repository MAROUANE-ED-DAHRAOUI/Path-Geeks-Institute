CREATE TABLE actors (
	first_name VARCHAR(20),
	last_name  VARCHAR(30),
	Num_Phone INT NOT NULL
)

SELECT COUNT(*) FROM actors;


INSERT INTO actors(first_name, last_name, num_phone) 
VALUES('', '', 0006557);

SELECT * FROM actors;