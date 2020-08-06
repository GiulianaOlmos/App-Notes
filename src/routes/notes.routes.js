const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNotes, 
    deleteNotes
} = require('../controllers/notes.controllers');

//New note
router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

//Get All Note
router.get('/notes', renderNotes);

//Edit Notes
router.get('/notes/edit/:id', renderEditForm)

router.put('/notes/edit/:id', updateNotes)

//Delete Notes
router.delete('/notes/delete/:id', deleteNotes)


module.exports = router; //Se usa en server.js. 