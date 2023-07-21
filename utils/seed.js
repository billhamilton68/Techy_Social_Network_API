const mongoose = require('mongoose');
const db = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

// Connect to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Delete all data from database
const seedDatabase = async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(users);
    // Loop through thoughts and assign a random username to each thought
    for (let i = 0; i < thoughts.length; i++) {
        thoughts[i].username = createdUsers[i % createdUsers.length].username;
    }
    // Then insert all thoughts into the database
    await Thought.insertMany(thoughts);

    console.log('Database seeded!');
    process.exit(0);
};

seedDatabase();