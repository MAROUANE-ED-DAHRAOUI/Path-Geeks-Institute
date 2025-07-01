-- UPDATE film
-- SET language_id = 2
-- WHERE film_id IN (1, 2);


-- DROP TABLE customer_review;

-- SELECT COUNT(*) AS  outstanding_COUNT
-- FROM rental
-- WHERE returned = 0;


-- SELECT film.title, film.rental_rate
-- FROM film
-- JOIN rental ON film.film_id = rental.film_id
-- WHERE rental.returned = 0


-- SELECT title
-- FROM film
-- WHERE description LIKE '%sumo wrestler%';



-- SELECT title, rating, length
-- FROM film
-- WHERE length < 60 AND rating = 'R';

-- SELECT title
-- FROM film
-- WHERE (description LIKE '%boat%' OR title LIKE '%boat%')
-- AND film_id IN(
--     SELECT DISTINCT film_id
--     FROM film_category
--     WHERE category_id IN (
--         SELECT category_id
--         FROM category
--         WHERE name = 'Matthew Mahan'
--     )
-- );
