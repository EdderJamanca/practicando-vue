

<template>
    <template  v-if="entry">
        <div class="entry-title justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>

            <div>
                <button
                  @click="eliminarEntry()"
                  class="btn btn-danger mx-2"
                >Borrar
                </button>

                <button
                  class="btn btn-primary"
                >
                    Subir foto
                </button>
            </div>
        </div>

        <hr>

        <div class="d-flex flex-column px-3 h-75">
            <textarea
             v-model="entry.text"
             placeholder="¿Qué sucedio hoy?"
            ></textarea>
        </div>

        <img 
            src="https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg" 
            alt="entry-picture"
            class="img-thumbnail">

    </template>

    <Fab
       @on:click="saveEntry" 
       icon="fa-floppy-disk"/>
</template>

<script>

import { defineAsyncComponent } from 'vue';
import { mapGetters,mapActions } from 'vuex';
import getMonthYear from '../helpers/getDayMonthYear';

export default {

    props:{
        id:{
            type:String,
            required:true
        }
    },
    components:{
        Fab:defineAsyncComponent( ()=>import('../components/Fab.vue') )
    },
    data(){
        return {
            entry:null
        }
    },
    computed:{
        ...mapGetters('journal',['getEntryById']),
        day(){
            const { day } =getMonthYear(this.entry.date);
            return day;
        },
        month(){
            const { month }=getMonthYear(this.entry.date);

            return month;
        },
        yearDay(){
            const { yearDay }=getMonthYear(this.entry.date);
            return yearDay
        }
    },
    methods:{
        ...mapActions('journal',['updateEntries','createEntries','deleteEntry01']),
        loadEntry(){
            let entry;
            if(this.id=='new'){

                 entry={
                    date: new Date().getTime(),
                    text:''
                }

            }else{
                 entry=this.getEntryById(this.id)
                if(!entry) return this.$router.push({name:'no-entry'})
            }
            
            this.entry=entry
        },
        async saveEntry(){
            // console.log('ingresado dato en data table',this.entry)
            if(this.entry.id){
                this.updateEntries(this.entry)
            }else{
               const id=await this.createEntries(this.entry);
               
               this.$router.push({name:'entry',params:{id}})
               
            }
        },
        async eliminarEntry(){
            await this.deleteEntry01(this.entry.id);
            this.$router.push({name:'no-entry'})
        }
    },
    created(){
        this.loadEntry();
    },
    watch:{
        id(){
            this.loadEntry();
        }
    }
}

</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>
