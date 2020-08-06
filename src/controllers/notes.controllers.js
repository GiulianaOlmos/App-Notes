const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCtrl.createNewNote = (req, res) => {
    console.log(req.body);
    res.send('notes add');
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