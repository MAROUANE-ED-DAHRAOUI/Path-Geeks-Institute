SELECT name_customer, lastname_customer
FROM customers
ORDER BY name_customer ASC, lastname_customer ASC
LIMIT 2 OFFSET(
    SELECT COUNT(*) - 2 FROM customers
);


DELETE FROM purchases
WHERE customer_id = (
    SELECT
        customer_id 
    FROM 
        customers
    WHERE 
        name_customer = 'Scott' AND lastname_customer = 'Scott'
);


SELECT * FROM customers
WHERE name_customer = 'Scott' AND lastname_customer = 'Scott';

SELECT 
    COALESCE(customers.name_customer, '') AS first_name,
    COALESCE(customers.lastname_customer, '') AS last_name,
    purchases.item_id,
    purchases.quantity_purchased
FROM
    purchases
LEFT JOIN
    customers ON purchases.customer_id = customers.id_customer;


SELECT 
    customers.name_customer,
    customers.lastname_customer,
    purchases.item_id,
    purchases.quantity_purchased
FROM 
    purchases
INNER JOIN 
    customers ON purchases.customer_id = customers.id_customer;
