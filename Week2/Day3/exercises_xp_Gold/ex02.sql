-- SELECT store.store_id, city.city, country.country
-- FROM store
-- JOIN address ON store.address_id = address.address_id
-- JOIN city ON address.city_id = city.city_id
-- JOIN country ON city.country_id = country.country_id;


-- SELECT store.store_id,
--        SUM(film.length) AS total_minutes,
--        ROUND(SUM(film.length)/60.0, 2) AS total_hours,
--        ROUND(SUM(film.length)/60.0/24.0, 2) AS total_days
-- FROM store
-- JOIN inventory ON store.store_id = inventory.store_id
-- JOIN film ON inventory.film_id = film.film_id
-- LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id
-- WHERE rental.return_date IS NOT NULL OR rental.rental_id IS NULL
-- GROUP BY store.store_id;


-- SELECT DISTINCT customer.customer_id, customer.first_name, customer.last_name, city.city
-- FROM customer
-- JOIN address ON customer.address_id = address.address_id
-- JOIN city ON address.city_id = city.city_id
-- WHERE city.city_id IN (
--     SELECT address.city_id
--     FROM store
--     JOIN address ON store.address_id = address.address_id
-- );



-- SELECT DISTINCT customer.customer_id, customer.first_name, customer.last_name, country.country
-- FROM customer
-- JOIN address ON customer.address_id = address.address_id
-- JOIN city ON address.city_id = city.city_id
-- JOIN country ON city.country_id = country.country_id
-- WHERE country.country_id IN (
--     SELECT country.country_id
--     FROM store
--     JOIN address ON store.address_id = address.address_id
--     JOIN city ON address.city_id = city.city_id
--     JOIN country ON city.country_id = country.country_id
-- );




-- SELECT SUM(film.length) AS safe_total_minutes,
--        ROUND(SUM(film.length)/60.0, 2) AS safe_total_hours,
--        ROUND(SUM(film.length)/60.0/24.0, 2) AS safe_total_days
-- FROM film
-- LEFT JOIN film_category ON film.film_id = film_category.film_id
-- LEFT JOIN category ON film_category.category_id = category.category_id
-- WHERE (category.name IS NULL OR category.name != 'Horror')
--   AND LOWER(film.title) NOT LIKE '%beast%'
--   AND LOWER(film.title) NOT LIKE '%monster%'
--   AND LOWER(film.title) NOT LIKE '%ghost%'
--   AND LOWER(film.title) NOT LIKE '%dead%'
--   AND LOWER(film.title) NOT LIKE '%zombie%'
--   AND LOWER(film.title) NOT LIKE '%undead%'
--   AND LOWER(film.description) NOT LIKE '%beast%'
--   AND LOWER(film.description) NOT LIKE '%monster%'
--   AND LOWER(film.description) NOT LIKE '%ghost%'
--   AND LOWER(film.description) NOT LIKE '%dead%'
--   AND LOWER(film.description) NOT LIKE '%zombie%'
--   AND LOWER(film.description) NOT LIKE '%undead%';


-- SELECT SUM(length) AS total_minutes,
--        ROUND(SUM(length)/60.0, 2) AS total_hours,
--        ROUND(SUM(length)/60.0/24.0, 2) AS total_days
-- FROM film;