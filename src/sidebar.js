const Sidebar = ({ notes, onAddClick, onDeleteNote, activeNote, setActiveNote }) =>{
    // need to review the definition of destructuring. 
    // this takes the sidebar and allows us to only pull the props we need out of it to be referenced as we need it
    //
    // allows it to be passed through as a variable to be used here
    const sortedNotes = notes.sort((a,b) => b.lastModified-a.lastModified);
    // checks the notes object and sorts them based on the last modified property
return(
//     <div className="app-sidebar">
//     <div className="app-sidebar-header">
//       <h1>Notes</h1>
//       <button onClick={onAddClick}>Add</button>
//     </div>
//     <div className="app-sidebar-notes">
//       {sortedNotes.map(({ id, title, body, lastModified }, i) => (
//         <div
//           className={`app-sidebar-note ${id === activeNote && "active"}`}
//           onClick={() => setActiveNote(id)}
//         >
//           <div className="sidebar-note-title">
//             <strong>{title}</strong>
//             <button onClick={(e) => onDeleteNote(id)}>Delete</button>
//           </div>

//           <p>{body && body.substr(0, 100) + "..."}</p>
//           <small className="note-meta">
//             Last Modified{" "}
//             {new Date(lastModified).toLocaleDateString("en-GB", {
//               hour: "2-digit",
//               minute: "2-digit",
//             })}
//           </small>
//         </div>
//       ))}
//     </div>
//   </div>
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddClick}>Add</button>
            {/* on add click is passed as a prop in sidebar component and defined in parent. */}
        </div>
        <div className="app-sidebar-notes">
            {sortedNotes.map((note) => (
        // have to be super careful about mapping with the brackets. IT NEEDS ROUND BRACKETS
                // output the below each time a note is created
                 <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                //  they call this a dynamic something. because its based off the if shortcut condition. 
                  onClick={() => setActiveNote(note.id)}>
                    {/* having it bound as () only makes it occur when it is clicked */}
                 <div className="sidebar-note-title">
                     <strong>{note.title}</strong>
                     <button onClick={(e) => onDeleteNote(note.id)}>Delete</button>
                     {/* needed an id so it knows which one to delete (used mathround. math random. not robust lol) */}
                 </div>
                 <p>{note.body && note.body.substr(0,100) + "..."}</p>
                 <small className="note-meta">{new Date(note.lastModified).toLocaleDateString("en-AU", {
                    // toLocaleDateString is a super useful tool 
                    hour: "2-digit",
                    minute: "2-digit",

                 })}</small>
             </div>
            ))}
        
        </div>
    </div>
)
}
export default Sidebar;