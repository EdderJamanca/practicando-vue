<template>
    <div class="container">
        <h1 class="text-center text-warning"> Veterinaria de Perros</h1>
        <div class="row">
            <div class="col-6">
                <From 
                :paciente="paciente"
                @onclick="onsubmit"
                />
            </div>
            <div class="col-6">
                <!-- {{ pacientes }} -->
                <List 
                    @OnDelete="eliminar"
                    @onselect="OnSelect"
                    v-for="pacien of OnLoadPaciente"
                    :key="pacien.idcita"
                    :paciente="pacien"
                />
            </div>
        </div>
    </div>
</template>

<script>

import {  defineAsyncComponent } from 'vue';

import {mapActions,mapGetters} from 'vuex'
// error,confirm,
import { loading,success,confirm } from '../helpers/mensajeAccion';

 export default {

    components:{
        From:defineAsyncComponent( ()=>import('../components/From.vue') ),
        List:defineAsyncComponent( ()=>import('../components/listPaciente.vue') ),
    },
    data(){
        return {
            idcita:'',
            paciente:[]
        }
    },
    methods:{
        ...mapActions('paciente',['savePaciente','getPaciente','deletePaciente','updatePaciente']),
       async onsubmit(valorForm){
            loading();

            const {isEditar,idcita,...data}=valorForm;
            let mensaje;
            if(isEditar){
                mensaje=await this.updatePaciente({idcita,...data})
            }else{

                 mensaje=await this.savePaciente(data);
            }

            if(typeof mensaje!=='string'){
                success();
                this.getPaciente();
            }


        },
       eliminar(id){
            this.idcita=id;
            if(!id){return}
        
            confirm().then(async(res)=>{
                if(res.isConfirmed){
                   const mensaje= await this.deletePaciente(id)
                
                   this.getPaciente(); 
                   success(mensaje)
                }
            });

        },
       OnSelect(id){
            console.log('this.getUnPaciente(id)',this.getUnPaciente(id))
            this.paciente=this.getUnPaciente(id);
       }
    },
    computed:{
            ...mapGetters('paciente',['getactualPacientes','getUnPaciente']),
            OnLoadPaciente(){
                // this.getPaciente();
                console.log('paciente......',this.getactualPacientes(this.idcita))
                return this.getactualPacientes(this.idcita)
            }
    },
    created(){
        this.getPaciente();
    }

 }

</script>