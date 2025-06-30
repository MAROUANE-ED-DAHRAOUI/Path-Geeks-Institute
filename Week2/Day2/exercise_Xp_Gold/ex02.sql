SELECT * FROM students;

UPDATE students
SET birth_date = '1998-11-02'
WHERE
    id_student IN (1, 3);


UPDATE students
SET last_name = 'Guez'
WHERE
    id_student = 5;


DELETE FROM students
WHERE
    id_student = 3;


SELECT  COUNT(*) AS total_students
FROM
    students;



SELECT  COUNT(*) AS total_students
FROM
    students
WHERE
    birth_date > '2000-01-01';



ALTER TABLE students
ADD COLUMN math_grade INT;



UPDATE students
SET math_grade = 80
WHERE
    id_student = 1;

UPDATE students
SET math_grade = 90
WHERE
    id_student IN (2, 4);


UPDATE students
SET math_grade = 40
WHERE
    id_student = 6;



SELECT COUNT(*) AS BIGGER_Grade
FROM
    students
WHERE
    math_grade > 83;


INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES
    ('Omer', 'Simpson', '1980-10-03', 70);