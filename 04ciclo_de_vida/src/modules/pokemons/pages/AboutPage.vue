<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button
       @click="onChangeName"
      >
        Cambiar nombre
    </button>
</template>

<script>
export default {

    data(){
        return {
            name:'Fernando'
        }
    },
    methods:{
        onChangeName(){
            this.name='Melissa'
        }
    },
    //  Se ejecuta justo antes de que se inicialice la instancia de Vue. En este punto, las opciones del componente aún no se han evaluado y los eventos y las observaciones aún no se han configurado.
    beforeCreate(){
        console.log('beforeCreate')
    },
    // Se llama después de que la instancia de Vue ha sido inicializada, justo después de beforeCreate. Aquí es donde puedes configurar datos, observadores de datos y eventos, pero la plantilla del componente aún no se ha compilado ni montado en el DOM.
    created(){
        this.name='Juan Carlos';
        console.log('created')
    },
    // Se llama justo antes de que el componente se adjunte al DOM. En este punto, la plantilla del componente ha sido compilada en renderizar funciones y está a punto de ser montada en el DOM.
    beforeMount(){
        console.log('beforeMount')
    },
    // Se llama después de que el componente ha sido montado en el DOM. En este punto, puedes acceder al DOM del componente y realizar operaciones que necesiten la presencia del DOM.
    mounted(){
        console.log('mounted')
    },
    beforeUpdated(){
        console.log('beforeUpdated');
    },
    // Se llama después de que una instancia de Vue ha finalizado una actualización, lo que significa que los datos han cambiado y la vista ha sido actualizada.
    updated(){
        console.log('update');
    },
    // Este hook se llama cuando un componente se activa. Por ejemplo, cuando se navega a una ruta que contiene el componente.
    activated(){
        console.log('activitred')
    },
    // Se llama cuando un componente se desactiva. Por ejemplo, cuando se navega lejos de una ruta que contiene el componente.
    deactivated(){
        console.log('desactived')
    },
    // Se ejecuta justo antes de que se desmonte un componente.
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    // e llama después de que un componente se ha desmontado y destruido.
    unmounted(){
        console.log('unmounted')
    },
    // Este hook captura errores lanzados por los hijos durante la ejecución de su método render() o durante la actualización del componente. Puedes usarlo para manejar errores de manera centralizada.
    errorCaptured(){
        console.log('errorCaptured')
    },
    //  Se llama cuando una propiedad reactiva se accede durante la renderización. Es útil para depurar el seguimiento de las dependencias reactivas.
    renderTracked(){
        console.log('rederTraked')
    },
    // Se llama cuando se activa una renderización reactiva. Esto significa que algún valor dependiente ha cambiado y se está volviendo a renderizar la vista.
    renderTriggered(){
        console.log('renderTriggered')
    }
}

</script>