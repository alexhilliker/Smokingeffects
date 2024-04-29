const Post = require('../models/post')

exports.getPosts = async (req, res,) => {
    try { 
        const posts = await Post.find({}).lean();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Error fetching posts' });
    }
};

exports.createPost =(req, res, next) => {

    const title  = req.body.title; 
    const content = req.body.content; 

    const post = new Post({ 
        title: title, 
        content: content,
    }); 

    post.save()
    .then(postSaved => {
        res.status(500).json({
            message: 'Post created successfully!',
            post:postSaved
        });
    })  
    .catch(err => console.log('err', err));
};


