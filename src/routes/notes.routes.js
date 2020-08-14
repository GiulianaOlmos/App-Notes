const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNotes, 
    deleteNote
} = require('../controllers/notes.controllers');

const {isAuthenticated} = require('../helpers/auth')

//New note
router.get('/notes/add', isAuthenticated, renderNoteForm);

router.post('/notes/new-note', isAuthenticated, createNewNote);

//Get All Note
router.get('/notes', isAuthenticated, renderNotes);

//Edit Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)

router.put('/notes/edit/:id', isAuthenticated, updateNotes)

//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)


module.exports = router; //Se usa en server.js. 