const connection = require('../config/connection');
const { Post, Tags } = require('../models');
// Import functions for seed data
const { getRandomColor, getRandomPost, genRandomIndex } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the collections if they exist
  let postCheck = await connection.db.listCollections({ name: 'posts' }).toArray();
  if (postCheck.length) {
    await connection.dropCollection('posts');
  }

  let tagCheck = await connection.db.listCollections({ name: 'tags' }).toArray();
  if (tagCheck.length) {
    await connection.dropCollection('tags');
  }

 
  const tags = [];
  const posts = [];


  const makePost = (text) => {
    posts.push({
      published: Math.random() < 0.5,
      text,
      tags: [tags[genRandomIndex(tags)]._id],
    });
  };


  for (let i = 0; i < 20; i++) {
    const tagname = getRandomColor();

    tags.push({
      tagname,
      color: tagname,
    });
  }


  await Tags.collection.insertMany(tags);

  
  tags.forEach(() => makePost(getRandomPost(50)));

  await Post.collection.insertMany(posts);

  
  console.table(tags);
  console.table(posts, ['published', 'tags', '_id']);
  console.timeEnd('seeding');
  process.exit(0);
});
