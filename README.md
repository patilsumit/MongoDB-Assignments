# MongoDB-Assignments
My MongoDB Assignments With Differnent Operator....

Assignment: Use mongodb query operator and mongoose functions to implement query logic as described below.

Initial Steps:
==============
+ Import the data collection into mongodb database
> Run the command given in import-command.txt
This will populated the courses collection in a new database called mongo-exercises
After you run the command check the db collection in compass. There should be 18 documents.

Requirements:-
==============
Implement the following queries/functions:

1. Get all the courses. But print only name, author and price
2. Get total number of courses
3. Get total courses that are published
4. Get courses whose price is less than 20. Sort by price in ascending order. Display only name and price.
5. Get courses whose price is between 10 and 20. Sort by price in descending order. Display only name and price.
6. Get top 5 cheapest courses. Sort by  price in ascending order. Display name, author, price.
7. Get top 5 expensive courses. Sort by  price in descending order. Display name, author, price.
8. Get courses published by author name. Author name should be a parameter to function. Display name, author, isPublished.
9. Get all courses with tag embedded. Display name, tags
10. Get all courses that does not contain embedded. Display name, tags.
11. Get courses either created by "Jayakumar", or by "Adil". Sort by name.
12. Get all the published backend courses (tags), sort them by name. Display name and au     thor.
13. Get all the published frontend and backend courses, sort by price in descending order. Display name and author.
14. Get all the published courses with price more than 15, or have the word "by" in their title.
15. Get courses which does not have property price
