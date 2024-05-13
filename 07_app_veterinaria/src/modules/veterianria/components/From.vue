<template>
     
     <form class="border p-2">

        <div class="mb-3">
            <label for="nom_propietario" class="form-label">Nombre Propietario</label>
            <input 
                type="text" 
                class="form-control"
                placeholder="Nombre del Propietario"
                v-model="nom_propietario" 
                >
            <div
            v-show="showerror_propietario" 
            class="alert alert-danger py-2 mt-1">El nombre del propietario es Requerido</div>
        </div>
        <div class="mb-3">
            <label for="nom_mascota" class="form-label">Nombre Mascota</label>
            <input 
                type="text" 
                class="form-control"
                placeholder="Nombre de la Mascota"
                v-model="nom_mascota" 
                >
            <div v-show="showerror_mascota"
            class="alert alert-danger py-2 mt-1">El nombre de la mascota es Requerido</div>
        </div>
        <div class="mb-3">
            <label for="fecha_atencion" class="form-label">Fecha de Atencion</label>
            <input 
                type="date" 
                class="form-control"
                placeholder="dd/mm/yyyy"
                v-model="fecha_registro" 
                >
            <div
            v-show="showerror_fecharegistro" 
            class="alert alert-danger py-2 mt-1">La fecha de atencion es Requerido</div>
        </div>
        <div class="mb-3">
            <label for="sintomas" class="form-label">Sintomas</label>
            <textarea
            v-model="diagnostico"
              class="form-control" 
             rows="5"></textarea>
            <div
            v-show="showerror_diagnostico" 
            class="alert alert-danger py-2 mt-1">La fecha de atencion es Requerido</div>
        </div>

        <div class="mb-3 d-grid">
            <button
               @click="onsubmit"
              class="btn block btn-primary">Registrar</button>
        </div>

     </form>

</template>

<script>

import getFecha from './../helpers/getFecha';
export default {
    props:{
        paciente:{
            type:Object
        }
    },
    methods:{

        onsubmit(e){
            e.preventDefault();
            this.validarCampo();
            let value={
                 isEditar:this.paciente ? true:false,
                idcita: this.idcita,
                nom_propietario:this.nom_propietario,
                nom_mascota:this.nom_mascota,
                fecha_registro:this.fecha_registro,
                diagnostico:this.diagnostico
            }
            this.$emit('onclick',value);
            // console.log('nombre',this.diagnostico.length)
        },

        validarCampo(){
            this.showerror_propietario=this.nom_propietario.length==0?true:false;
            this.showerror_mascota=this.nom_mascota.length==0?true:false;
            this.showerror_fecharegistro=this.fecha_registro.length==0?true:false;
            this.showerror_diagnostico=this.diagnostico.length==0?true:false;
        },
        onloadForm(){
            this.idcita=this.paciente.idcita,
            this.nom_propietario=this.paciente.nom_propietario,
            this.nom_mascota=this.paciente.nom_mascota,
            this.fecha_registro=this.paciente.fecha_registro.split(' ')[0],
            this.diagnostico=this.paciente.diagnostico
        }
    },
    data(){
        return {
            idcita:'',
            nom_propietario:'',
            nom_mascota:'',
            fecha_registro:getFecha(),
            diagnostico:'',
            showerror_propietario:false,
            showerror_mascota:false,
            showerror_fecharegistro:false,
            showerror_diagnostico:false,
        }
    },

    watch:{
        paciente(){
            this.onloadForm();
        }
    }

}

</script>