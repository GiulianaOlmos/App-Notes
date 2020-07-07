const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('notes add')
};

notesCtrl.createNewNote = (req, res) => {
    res.send('notes add')
};

notesCtrl.renderNotes = (req, res) => {
    res.send('Render Notes')
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