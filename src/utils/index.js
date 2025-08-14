import { getAllNotes } from "./local-data";

function generateNoteId() {

  const notes = getAllNotes()
  if (notes.length === 0) return 'notes-1';

  const ids = notes.map((note) => {
    const parts = note.id.split('-');
    const number = parseInt(parts[1]);
    return isNaN(number) ? 0 : number;
  });

  const maxId = Math.max(...ids);
  return `notes-${maxId + 1}`;
}

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { showFormattedDate, generateNoteId };

