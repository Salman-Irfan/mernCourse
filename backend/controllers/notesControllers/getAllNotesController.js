const express = require('express');
const Note = require('../../models/notesSchema/NoteModel')

const getAllNotesController = async (req, res) => {
    console.log('get notes func call')
    // fetch all notes
    try {
        
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
module.exports = getAllNotesController