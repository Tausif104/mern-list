import express from 'express'
import mongoose from 'mongoose'
import db from './config/db.js'
import itemRoute from './routes/api/items.js'

const app = express()

app.use(express.json())

mongoose
    .connect(db.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB Connected`))
    .catch((err) => console.log(err))

app.use('/api/items', itemRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
