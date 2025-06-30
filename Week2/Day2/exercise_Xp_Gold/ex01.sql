SELECT 
    rating,
    COUNT(*) AS rating_films
FROM film
GROUP BY
    rating

SELECT
        title,
        length,
        rental_rate,
        rating
FROM film
WHERE rating IN ('G', 'PG-13')
      AND length < 120
      AND rental_rate < 3.00
ORDER BY
        title ASC

UPDATE customer
SET first_name = 'MAROUANE',
    last_name = 'tazzz',
    email = 'marouane_tazz@gmail.com'
WHERE
    customer_id = 1



SELECT 
    address_id
FROM 
    customer
WHERE
    customer_id = 1;
UPDATE
    address
SET
    address = 'RUE DE PIRATES SALE',
    address2 = 'lbahja',
    district = 'salé',
    postal_code = '11111',
    phone = '066999272734'
WHERE
    address_id = 1;



-- just teste in order show the result of the update
-- SELECT *
-- FROM
--     customer
-- WHERE
--     customer_id = 1;

    






