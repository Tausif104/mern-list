import mongoose from 'mongoose'

const ItemScehma = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Item = mongoose.model('Item', ItemScehma)

export default Item
