
import journalApi from '@/api/journalApi';

export const loadEntries= async ({commit})=>{

    const { data }=await journalApi.get('/entrys.json');
    // console.log('data11111111',data)
    const entries=[];

    for(let id of  Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries',entries)
    
}

export const updateEntries= async ({commit},entry)=>{

    const { date, Nombre,text} =entry;
    const dataToSave={date,Nombre,text}

     await journalApi.put(`/entrys/${entry.id}.json`,dataToSave);

    commit('updateEntry',{...entry})
}

export const createEntries= async({commit},entry)=>{

   const {date,text}=entry;

   const newEntry={date,text};

   let re= await journalApi.post('/entrys.json',newEntry);

   const {name}=re.data;
//    console.log('ingresar dato para registrar',re.data)
   entry.id=name;
   
   commit("addEntry",entry);

  return name;

}


export const deleteEntry01= async({commit},id)=>{
   
    await journalApi.delete(`/entrys/${id}.json`);

    commit('deleteEntry',id);

}