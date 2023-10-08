const express = require ('express');
const Note = require('../../models/notesSchema/NoteModel'); // Corrected path and require statement
const { validationResult } = require("express-validator");

const createNotesController = async(req, res) => {
    // main logic
    // if user send empty text in req, save it in errors variable
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // if user fill input
    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
        });
        await note.save(); // command to save in mongo db
        return res.status(201).json(note);
    } catch (error) {
        // if failure
    }
}
// es5 export syntax
module.exports = createNotesController;