SELECT * FROM language;

SELECT
    film.title AS film_title,
    film.description AS film_description,
    language.name AS language_name
FROM
    film
JOIN
    language ON film.film_id = language.language_id;

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM
    language
LEFT JOIN
    film ON language.language_id = film.language_id;


CREATE TABLE new_film(
    id_new SERIAL PRIMARY KEY,
    new_FilmName VARCHAR(100) NOT NULL
);

INSERT INTO new_film (new_FilmName)
VALUES('DADAS_FILM'),
        ('SAID_NASIRI');



CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT films
        FOREIGN KEY (film_id)
        REFERENCES new_film (id_new)
        ON DELETE CASCADE,

    CONSTRAINT language
        FOREIGN KEY (language_id)
        REFERENCES language (language_id)
);


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Great Film', 9, 'This film was amazing!'),
    (2, 2, 'Not Bad', 7, 'good watch movies.');

DELETE FROM new_film
WHERE id_new = 2;

