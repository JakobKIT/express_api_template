const postsArray = [
  {
    id: 1,
    title: 'React from scratch',
    content: 'In this article we will create a ToDo App in React from scratch.... etc.etc.etc.',
    author: 'Jakob Klamser'
  },
  {
    id: 2,
    title: 'Vanilla JavaScript Basics',
    content: 'Today we will discuss some basic JavaScript fundamentals like array manipulation, currying etc.',
    author: 'Jakob Klamser'
  },
  {
    id: 3,
    title: 'VS Code Extensions',
    content: 'I wanted to show you some of my favorite VS Code Extensions.... Bracket Pair Colorizer etc.etc.',
    author: 'Jakob Klamser'
  },
  {
    id: 4,
    title: 'ExpressJS REST API',
    content: 'Is this the current article?',
    author: 'Jakob Klamser'
  },
];


// @route   GET api/posts
// @desc    Get All Posts
// @access  Public
exports.getPosts = (req, res) => {
  const posts = postsArray;
  return res.status(200).json({
    success: true,
    count: posts.length,
    data: posts,
  });
};

// @route   GET api/posts/:id
// @desc    Gets a post by ID
// @access  Private
exports.getPostById = (req, res) => {
  const post = postsArray.filter(post => post.id === Number(req.params.id));
  console.log(post);
  if (post[0] !== undefined) {
    return res.status(200).json({
      success: true,
      data: post[0],
    });
  }
  return res.status(404).json({
    success: false,
    error: 'No post found',
  })
};