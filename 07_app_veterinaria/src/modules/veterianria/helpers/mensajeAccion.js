import Swal from 'sweetalert2'

export const error=(mensaje='error en el servidor')=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${mensaje}`
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
}
export const loading=(mensaje='Procesando.....')=>{

        Swal.fire({
        title: `${mensaje}`,
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        })

}
export const confirm=(mensaje='¿Estas seguro de eliminar?')=>{
    return Swal.fire({
        title:`${mensaje}`,
        showDenyButton: true,
        confirmButtonText: "Continuar",
        denyButtonText: `Cancelar`
      })
}
export const success=(mensaje='Operecion Exitosa!')=>{
    Swal.fire({
        position: "center",
        icon: "success",
        title:`${mensaje}`,
        showConfirmButton: false,
        timer: 2000
      });
}