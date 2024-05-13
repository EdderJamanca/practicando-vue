
export const getUnPaciente=(state)=>(id='')=>{
    let newPaciente=state.pacientes.find(item=>item.idcita==id)
    if(!newPaciente){return}
    // console.log('newPaciente',newPaciente)
    return {...newPaciente}
}

export const getactualPacientes=(state)=>(id='')=>{
    console.log('states......',state.pacientes)
    if(!id) return state.pacientes;
    return state.pacientes.filter(item=>item.idcita!==id);
}