import express from 'express'
import Item from '../../models/items.js'
const router = express.Router()

// get all items
router.get('/', (req, res) => {
    try {
        Item.find()
            .sort({ date: -1 })
            .then((items) => res.json(items))
    } catch (err) {
        console.error(err)
    }
})

// post an item
router.post('/', (req, res) => {
    try {
        const newItem = new Item({
            title: req.body.title,
        })

        newItem.save().then((item) => res.json(item))
    } catch (err) {
        console.log(err)
    }
})

// delete an item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => item.remove().then(() => res.json({ success: true })))
        .catch((err) => res.status(404).json({ success: false }))
})

export default router
