DROP TABLE IF EXISTS cities;

CREATE TABLE cities
(
    id SERIAL primary key,
    city VARCHAR(255) NOT NULL,
    population INT,
    country VARCHAR
);

INSERT INTO cities
    (city, country, population)
VALUES
    ('Berlin', 'Germany', 376900);


INSERT INTO cities
    (city, country, population)
VALUES
    ('Tokyo', 'Japan', 927300);


INSERT INTO cities
    (city, country, population)
VALUES
    ('Montreal', 'Canada', 1750000);

UPDATE cities SET population=3769000 WHERE id=1;
UPDATE cities SET population=9273000 WHERE id=2;
UPDATE cities SET city='Hamburg' WHERE id=1;
--obviously this adds falsy information to our db
DELETE FROM cities WHERE id=1;

INSERT INTO cities
    (city, country, population)
VALUES
    ('Berlin', 'Germany', 3769000);