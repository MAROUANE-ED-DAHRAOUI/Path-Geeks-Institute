-- CREATE TABLE Customer (
--     id_customer SERIAL PRIMARY KEY,
--     name_customer VARCHAR(50),
--     lastname_customer VARCHAR(50) NOT NULL
-- )

-- CREATE TABLE Customer_profile(
--     customer_id INTEGER NOT NULL,
--     FOREIGN KEY (customer_id) REFERENCES Customer(id_customer),
--     -- Ensure that the customer_id in Customer_profile exists in Customer table
--     -- and is not null.
--     -- This creates a foreign key relationship between Customer_profile and Customer.
--     id_customer_profile SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN NOT NULL DEFAULT FALSE
-- );


-- INSERT INTO Customer (name_customer, lastname_customer)
-- VALUES ('John', 'Doe'),
--        ('Jerome', 'Lalu'),
--        ('Lea', 'Rive');

-- INSERT INTO Customer_profile (customer_id, isLoggedIn)
-- VALUES (1, TRUE),
--         (2, FALSE);

-- SELECT Customer.name_customer
-- FROM Customer
-- JOIN Customer_profile ON Customer.id_customer = Customer_profile.customer_id;


-- SELECT Customer.name_customer, Customer_profile.isLoggedIn
-- FROM Customer
-- JOIN Customer_profile ON Customer.id_customer = Customer_profile.customer_id;

-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- );



-- INSERT INTO Book(
--     title,
--     author
-- )
-- VALUES ('Alice In Wonderland', 'Lewis Carroll'),
--        ('Harry Potter', 'J.K Rowling'),
--        ('To kill a mockingbird', 'Harper Lee');



-- CREATE TABLE Student (
--      student_id SERIAL PRIMARY KEY,
--      name VARCHAR(100) NOT NULL UNIQUE,
--      age INTEGER NOT NULL
-- );


-- INSERT INTO Student (
--     name,
--     age
-- )
-- VALUES ('John', 12),
--        ('Lera', 11),
--        ('Patrick', 10),
--        ('Bob', 14);


-- CREATE TABLE Library (
--     book_fk_id INTEGER NOT NULL,
--     student_id INTEGER NOT NULL,
--     borrowed_date DATE NOT NULL,
--     FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- INSERT INTO Library (book_fk_id, student_id, borrowed_date)
--  VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
--  (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
--  ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), 
--  (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
--  ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
--  (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
--  ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
--  (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');


-- SELECT * FROM library;


-- SELECT Student.name, Book.title
-- FROM Library
-- JOIN Student ON Library.student_id = Student.student_id
-- JOIN Book ON Library.book_fk_id = Book.book_id;


-- SELECT AVG(Student.age) AS average_age
-- FROM Library
-- JOIN Student ON Library.student_id = Student.student_id
-- JOIN Book ON Library.book_fk_id = Book.book_id
-- WHERE Book.title = 'Alice In Wonderland';


-- DELETE FROM Student WHERE name = 'John';