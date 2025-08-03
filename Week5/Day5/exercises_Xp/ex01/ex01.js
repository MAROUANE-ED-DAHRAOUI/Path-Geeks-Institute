/*Instructions

You’re tasked with building a RESTful API for a blog platform.
Users should be able to create, read, update, and delete blog posts using different endpoints.

    Create a directory named blog-api.

    Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

    Install the express package by running npm install express in the terminal.

    Create a file named server.js.

    In server.js, require the express package and set up an Express app.

    Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

    Implement the following routes using Express:
    GET /posts: Return a list of all blog posts.
    GET /posts/:id: Return a specific blog post based on its id.
    POST /posts: Create a new blog post.
    PUT /posts/:id: Update an existing blog post.
    DELETE /posts/:id: Delete a blog post.

    Implement error handling for invalid routes and server errors.

    Start the Express app and listen on a specified port (e.g., 3000).*/


const express = require('express');
const app = express();
app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post!' },
  { id: 2, title: 'Second Post', content: 'Another interesting post.' }
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

app.post('/posts', (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(post);
  res.status(201).json(post);
});

app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');

  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});

app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send('Post not found');

  const deletedPost = posts.splice(postIndex, 1);
  res.json(deletedPost);
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
