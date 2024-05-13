

export const getEntriesByIerm=(state)=>(term='')=>{

    console.log('state ',state)
    console.log('state term',term)

    if(term.length ===0) return state.entries;
    return state.entries.filter(entry=>entry.text.toLowerCase().includes(term.toLocaleLowerCase()));
    
}

export const getEntryById=(state)=>(id='')=>{

    const entry =state.entries.find(entry=>entry.id===id);

    if(!entry) return;

    return {...entry}

}