import express from 'express'

// express app
const app = express()

const PORT = 4000;

// routes
app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
    
})

