const router = require('express').Router();
const Todo = require('../models/todoModal');

//API to get all the notes
router.get('/', async(req, res) => {
    const todo = await Todo.find();
    res.send(todo);
});

//API to create a note
router.post('/', async(req, res) => {

    if (!req.body.Title || !req.body.Status) {
        return res.status(400).send('Please provide title and status.');
    }

    const todo = await Todo.create(req.body);

    res.status(200).send(todo);
   
});

//API to update a note
router.put('/:id', async(req, res) => {
    const id = req.params.id;

    const todo = await Todo.findById(id);

    if (!todo){
        return res.status(404).send('Data is not found.');
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true});

    res.send("Todo updated successfully." );
});



//API to get notes related to a specific user
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if (!todo){
        return res.status(404).send('Todo is not found.');
    }

    res.send(todo );
});



//API to delete a note
router.delete('/:id', async(req, res) => {
   const id = req.params.id;

   const todo = await Todo.findByIdAndDelete(id);


    return res.status(200).send('successfully deleted.');

});

module.exports = router;