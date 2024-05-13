const getFecha =()=>{

    const date=new Date()
    const anio=date.getFullYear();
    let mes=date.getMonth() + 1;
    const dia=date.getDate();

    if(mes<10){
        mes=`0${mes}`
    }

    return `${anio}-${mes}-${dia}`;
}

export default getFecha;