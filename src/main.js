function Main({activeNote, onUpdateNote}){
    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now() ,
        })
    };

    if(!activeNote) 
    return <div className="no-active-note">no note selected</div>
return(
    <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" placeholder="Note Title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autofocus />
            {/* autofocus makes the input the first thing selected on page load */}
            <textarea id="body" placeholder="Write Your Note Here" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}/>
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <div className="markdown-preview">{activeNote.body}
            </div>
        </div>
    </div>
)
}
export default Main;