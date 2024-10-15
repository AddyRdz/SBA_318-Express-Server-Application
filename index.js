import express from 'express'
import morgan from 'morgan';

// express app
const app = express()
const PORT = 4000;

// setup
app.set('view engine', 'pug');
app.set('views', './views');


// middleware
app.use(express.static('public'));
// app.use(morgan('dev')); //logger

// routes
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/users', (req,res) => {
    res.send('Getting users')
})

app.get('/posts', (req,res) => {
    res.send('Getting posts')
})

app.get('/comments', (req,res) => {
    res.send('Getting comments')
})

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
    
})

