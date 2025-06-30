CREATE TABLE purchases (
    id_purchase SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity_purchased INT NOT NULL
)


INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES 
(
    (SELECT id_customer FROM customers WHERE name_customer = 'Scott' AND lastname_customer = 'Scott'),
    (SELECT id_item FROM items WHERE name_item = 'Fan'),
    1
),
(
    (SELECT id_customer FROM customers WHERE name_customer = 'Melanie' AND lastname_customer = 'Johnson'),
    (SELECT id_item FROM items WHERE name_item = 'Large desk'),
    10
),
(
    (SELECT id_customer FROM customers WHERE name_customer = 'Greg' AND lastname_customer = 'Jones'),
    (SELECT id_item FROM items WHERE name_item = 'Small Desk'),
    2
);



SELECT
        purchases.id_purchase,
        customers.id_customer,
        customers.name_customer,
        customers.lastname_customer,
        purchases.item_id,
        purchases.quantity_purchased
FROM 
    purchases
JOIN
    customers ON purchases.customer_id = customers.id_customer;


SELECT
        purchases.id_purchase,
        customers.id_customer,
        customers.name_customer,
        customers.lastname_customer,
        purchases.item_id,
        purchases.quantity_purchased
FROM 
    purchases
JOIN
    customers ON purchases.customer_id = customers.id_customer
WHERE
    customers.id_customer = 5;


SELECT
        purchases.id_purchase,
        customers.id_customer,
        customers.name_customer,
        customers.lastname_customer,
        purchases.item_id,
        purchases.quantity_purchased
FROM 
    purchases
JOIN
    customers ON purchases.customer_id = customers.id_customer
JOIN
    items ON purchases.item_id = items.id_item
WHERE
    items.name_item IN ('Large Desk', 'Small Desk');


SELECT
        customers.name_customer AS FirstName,
        customers.lastname_customer AS LastName,
        items.name_item AS ItemName
FROM 
    purchases
JOIN
    customers ON purchases.customer_id = customers.id_customer
JOIN
    items ON purchases.item_id = items.id_item;

ALTER TABLE purchases
ALTER COLUMN item_id DROP NOT NULL;

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES 
(6, NULL, 1);

