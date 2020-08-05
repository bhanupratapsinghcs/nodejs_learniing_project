const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');
// connect to mongodb
const dbURI = 'mongodb+srv://bhanu:test123@cluster0.qw3nk.mongodb.net/nodetuts?retryWrites=true&w=majority';
const root = __dirname;
// Express app
const app = express();

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { app.listen(3000) })
    .catch((err) => console.log('error'));
// register view engine
// app.set('view engine', 'ejs'); default 
app.set('views', 'myviews');

// middle where
app.use(express.urlencoded({ extended: true }));

// mongoose and mongo andbox routes

// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog2',
//         snippet: 'about my new Blog',
//         body: 'this is body text'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// Listening for request

// app.listen(3000, () => {
//     console.log('Listening');
// });

app.get('/', (req, res) => {
    res.redirect('/blogs');
});
//  blogs routes
app.get('/blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index.ejs', { title: 'Home', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
});



app.get('/about', (req, res) => {
    res.render('about.ejs');
});

// redirecting
app.get('/about-me', (req, res) => {
    res.status(201).redirect('/about');
});


// post request for create blogs
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});
//  create route
app.get('/blogs/create', (req, res) => {
    res.render('create.ejs');
});


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Blog.findById(id)
        .then((result) => {
            res.render('details.ejs', { blog: result, title: 'details' });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});



// 404 page

app.use((req, res) => {
    res.status(404).render('404.ejs');
});
