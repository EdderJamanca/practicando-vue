export const setPaciente=()=>{}
export const upPaciente=()=>{}

export const addPaciente=(state,pacientes)=>{
    console.log('pacientes.data',pacientes.data)
    state.pacientes=pacientes.data;
    state.isLoading=false;

    // console.log('state.pacientes',pacientes)
}