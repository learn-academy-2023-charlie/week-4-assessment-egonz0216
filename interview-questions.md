# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP is a way that computers understand data through objects, rather than functions or logic such as javascript

Researched answer: There are four main ideas behind OOP: encapuslation, abstraction, inheritance, and polymorphism. Encapsulation is the idea of grouping related variables and the functions that operate on them into objects. Abstraction is the way that we reduce the impact of change, by hiding everything but the relevant data - it reduces complexity and increases efficiency. Inheritance is the idea that child classes inherit properties from the parent classes, and as such allows us to eliminate redundant code. Polymorphism allows a specific routine to use variables of different types at different times.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: An interger is a whole number. A float is a fraction of a number

Researched answer: Ruby will consider any number without decimals as an integer, and any number with a decimal as a float. 10 = integer. 10.0 = float.

3. Ruby has an implicit return. What does that mean?

Your answer: The "return" keyword is not necessary. Ruby executes the last line of the code block.

Researched answer: Using return explicitly can lead to errors, and in certain cases can stop the method prematurely. 

4. What is a block in Ruby?

Your answer: A code statement that is grouped together.

Researched answer: starting keyword is "do" and the terminating keyword is "end". Parameters are passed through pipes. Blocks can be grouped inside curly braces if writing an in-line block.

5. How do you extract a value in a Ruby hash?

Your answer: If by extracting a value you mean "read" the specific value, we would write 'p' or 'puts' and then the name of the hash, followed by square brackets, with a symbol and the key value inside the brackets. EX: p example_hash[:key1]

Researched answer: A hash is a collection of unique keys and values, similar to an array but instead of referencing the index, we reference the unique key, 

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a unit test framework used to describe the behavior of objects in the Ruby programming language. Analagous to yarn testing in javascript, with a key difference that RSpec uses behavior driven development, and that tests if the code will behave for the user as expected.

2. Test-driven development: The goal is checking the input and output of code. Yarn testing.

3. PostgreSQL: Referred to as Postgres, it is a specific type of Structured Query Language that is used to communicate with relational databases, and does so through the lens of OOP

4. CRUD: Create, Read, Update, Delete - ways we can modify hashes.

5. HTTP:hypertext transfer protocol. The way webpages load.
