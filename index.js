import express from 'express'

// express app
const app = express()

const PORT = 4000;



app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
    
})

