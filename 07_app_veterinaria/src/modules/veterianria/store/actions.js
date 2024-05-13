import apiPaciente from "@/api/apiPaciente";

export const getPaciente = async ({commit})=>{
    
    const pacientes= await apiPaciente.get('listCita');
    
    console.log('get paciente....')

    commit('addPaciente',pacientes)
}

export const updatePaciente = async (_,data)=>{
    console.log('dato xxxx',data);

    // const {idcita,...dato}=paciente;
    const {mensaje}= await apiPaciente.put(`actualizarCita/${data.idcita}`,data)
  
    return mensaje;
}
export const savePaciente = async (_,paciente)=>{

   const {mensaje}= await apiPaciente.post('regitrarCita',paciente)
  
   return mensaje;
}
export const deletePaciente = async(_,id)=>{

    const {mensaje}= await apiPaciente.delete(`eliminarCita/${id}`)

    return mensaje;
}