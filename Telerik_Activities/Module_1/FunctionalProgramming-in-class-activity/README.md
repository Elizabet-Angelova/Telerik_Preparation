<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Functional Programming - Tasks

## Filter, map, reduce

- Note: Use the object `people.js`
- Use: `map(), filter(), reduce(), every(), some(), forEach()`
- Note: Use immutability and pure functions

1. `console.log` every person's full name but do not use loops as you know them
1. Filter all the people who are younger than 30 years
1. Add `createdAt` property to each person in the array - use `new Date()` as value - make new object each time you modify the person
1. Find the total age of all the people older than 30 years (exclusive)
   - answer: 852
1. Find out if all the people are older than 18
1. Find if any person's first name is Terry
1. Try to filter all the people under 30 years and add `createdAt` property with method chaining

   ```js
   people
       .filter(...)
       .map(...)
   ```

1. Make the same but this time with `reduce`

## Functions

1. Create a function `createPerson`, which accepts 3 parameters

   - `firstName`, `lastName`, `age`
   - It must return a new object with the three values set (immutability)

1. Create a function `fullName()` which accepts a person object

   - The `fullName()` function must return concatenated firstName and lastName of the person object

1. Create a function `modifyPerson`, which accepts a person object and an object with properties to modify
   - If the properties are not passed return the same object
   - Otherwise return the **newly created** modified object
   - Hint: use spread operator to merge the two objects [https://davidwalsh.name/merge-objects](https://davidwalsh.name/merge-objects)
