import React from 'react';
import { useState,useEffect } from 'react';
import { nanoid } from "nanoid";
import NoteList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';


function App() {
  const [notes,setNotes]=useState([]);
const [searchText,setSearchText]=useState('');

const [darkMode,setDarkMode] = useState(false);

useEffect(()=>{
  const savedNotes =JSON.parse(localStorage.getItem("react-notes-app-data"));
  if(savedNotes){
    setNotes(savedNotes);
  }
},[]);

useEffect(()=>{
  localStorage.setItem("react-notes-app-data",JSON.stringify(notes));
},[notes]);

const addNote=(text)=>{
  const date= new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);
}
const deleteNote = (id) => {
    
		const newNotes = notes.filter((note) => note.id !== id );
    // console.log(note.id)    note.id !== id;
		setNotes(newNotes);
	};

  return (
   <div className={`${darkMode && 'dark-mode'}`}>
     <div className="container">
     <Header handleDarkMode={setDarkMode}/>
		<Search handleSearchNote={setSearchText} />
     <NoteList 
     notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
     handleAddNote={addNote}
     deleteN={deleteNote}/>
     
   </div>
   </div>
  );
}

export default App;
