const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    await newNote.save();
    res.send('notes add');
};

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm  = (req, res) => {
    res.send('Render Edit Form')
};

notesCtrl.updateNotes = (req, res) => {
    res.send('Update Notes')
};

notesCtrl.deleteNotes = (req, res) => {
    res.send('Deleting notes')
};

module.exports = notesCtrl; //Se importa en el notes.routes.js