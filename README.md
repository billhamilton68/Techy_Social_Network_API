# Techy_Social_Network_API

* Techy_Social_Network_API is a back-end API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```



## Installation
* Clone the repo to your local machine using https://github.com/billhamilton68/Techy_Social_Network_API.git.

* Ensure that Node.js and MongoDB are installed in your environment.

* Then follow these steps:

* Run npm install in the root directory to install the project dependencies.

* Run node utils/seed.js to populate test data

* In the root directory, run node server.js.

## Usage
Test using Insomnia.
Demo video: https://drive.google.com/file/d/1sI4DkdiFWfvhST9BQUwYuU08FeGiSuyK/view?usp=drive_link



## Features of the API include:

* API Routes
* User Routes
* GET /api/users - Retrieve all users.
* GET /api/users/:id - Retrieve a single user by its _id.
* * POST /api/users - Create a new user.
* PUT /api/users/:id - Update a user by its _id.
* DELETE /api/users/:id - Delete a user by its _id.
* Friend Routes
* POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list.
* DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list.
* Thought Routes
* GET /api/thoughts - Retrieve all thoughts.
* GET /api/thoughts/:id - Retrieve a single thought by its _id.
* POST /api/thoughts - Create a new thought.
* PUT /api/thoughts/:id - Update a thought by its _id.
* DELETE /api/thoughts/:id - Delete a thought by its _id.
* Reaction Routes
* POST /api/thoughts/:thoughtId/reactions - Create a reaction for a thought.
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought



## GitHub Repository
https://github.com/billhamilton68/Techy_Social_Network_API.git


## Main Components:
Node.js 
Express
MongoDB


* Contribution
Please feel free to make any pull requests or suggest any improvements. All contributions are welcomed!

Questions
If you have any questions or issues, please contact me via email.


## Designed and created by:
Bill Hamilton