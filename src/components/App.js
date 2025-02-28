import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
// function createNote(singleNote) {
//   return (
//     <Note
//       key={singleNote.key}
//       title={singleNote.title}
//       content={singleNote.content}
//     />
//   );
// }  Implemented using arrow funtion
function App() {
  return (
    <div>
      <Header />
      {notes.map((singleNote) => (
        <Note
          key={singleNote.key}
          title={singleNote.title}
          content={singleNote.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
