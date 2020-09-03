DROP TABLE IF EXISTS actors;

CREATE TABLE actors
(
    id SERIAL primary key,
    fname VARCHAR(255) NOT NULL,
    age INT,
    oscars INT
);

INSERT INTO actors
    (fname, age, oscars)
VALUES('Leonardo DiCaprio', 41, 1);
INSERT INTO actors
    (fname, age, oscars)
VALUES('Jennifer Lawrence', 25, 1);
INSERT INTO actors
    (fname, age, oscars)
VALUES('Samuel L. Jackson', 67, 0);
INSERT INTO actors
    (fname, age, oscars)
VALUES('Meryl Streep', 66, 3);
INSERT INTO actors
    (fname, age, oscars)
VALUES('John Cho', 43, 0);


select fname as name
from actors
where age > 30;

select fname as name
from actors
where oscars > 1;