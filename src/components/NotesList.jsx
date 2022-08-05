import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList=({notes,handleAddNote ,deleteN})=>{
    
    return(
        <div className="notes-list">
            {notes.map((note , idx)=>(
            // <h2>{note.id}{note.date}{note.text}</h2>
                <Note 
                id={note.id} 
                text={note.text} 
                date={note.date}
                deleteN={deleteN}
                key={idx}/>
            ))
            }
            
          <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}

export default NoteList;