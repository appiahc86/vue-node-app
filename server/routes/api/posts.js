import Router from 'express';
const router = Router();

import Post from "../../models/Post.js";

router.get('/', async (req, res) => {
   await Post.find({}).sort({'date': 'desc'}).lean().then(posts => {
       return res.send(JSON.stringify(posts))
   });

});

//create post
router.post('/', async (req, res)=>{

    const newPost = new Post({
        title: req.body.title
    })

    await newPost.save().then(post => {
        res.status(200).send(post)
    }).catch(err => console.log(err))

})

//delete post
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(post => {
            res.status(200).send('post Deleted');
        })
        .catch(err => console.log(err));
})


export default router;