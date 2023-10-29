const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
// mongoose model
const Note = require("../../models/notesSchema/NoteModel"); 
// controllers
const createNotesController = require("../../controllers/notesControllers/createNotesController");
const getAllNotesController = require("../../controllers/notesControllers/getAllNotesController");
const updateNoteController = require("../../controllers/notesControllers/updateNoteController");
const deleteNoteController = require("../../controllers/notesControllers/deleteNoteController");
const getNoteByIdController = require("../../controllers/notesControllers/getNoteByIdController");
const requireSignIn = require("../../middlewares/authMiddleware");
// taking input from user
// create note route
router.post(
    "/notes",
    [
        body("title").isLength({ min: 1 }),
        body("description").isLength({ min: 1 }),
    ],
    createNotesController
);
// read note

// requireSignIn
router.get("/notes", requireSignIn,  getAllNotesController);

// update note route
router.put('/notes/:id', updateNoteController);

// delete note route
router.delete("/notes/:id", deleteNoteController);

// get note by id
router.get("/note/:id", getNoteByIdController);

module.exports = router;
