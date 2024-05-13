<template>
        <div class="card mb-2">
            <div class="card-body">
                <h5>Cita N° {{paciente.idcita}}</h5>
                <ul>
                    <li><span class="font-bold">Nombre Propietario:</span>{{ paciente.nom_propietario }}</li>
                    <li><span class="font-bold">Nombre Mascota:</span>{{ paciente.nom_mascota }}</li>
                    <li><span class="font-bold">Fecha de Registro:</span>{{ paciente.fecha_registro }}</li>
                    <li><span class="font-bold">Diagnostico:</span>{{ paciente.diagnostico }}</li>
                </ul>
                <div class="d-flex justify-content-center gap-3">
                    <button 
                    @click="Ondelete"
                    class="btn btn-danger col-4 ">Eliminar</button>
                    <button 
                    @click="$emit('onselect',paciente.idcita)"
                    class="btn btn-info col-4">Actualizar</button>
                </div>
            </div>
        </div>
</template>

<script>
// import {mapActions,mapState} from 'vuex'

 export default {
    props:{
        paciente:{
            type:Object
        }
    },
    methods:{
        // ...mapActions('paciente',['deletePaciente']),
        Ondelete(){
                const id=this.paciente.idcita;
                // this.deletePaciente(id);
                this.$emit('OnDelete',id)
        }
    }
 }

</script>