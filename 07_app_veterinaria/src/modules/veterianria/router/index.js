export default {
    name:'app',
    component:()=>import('@/modules/veterianria/layouts/MainVeterinaria.vue'),
    children:[
        {
            path:'',
            name:'no-veterinaria',
            component:()=>import('@/modules/veterianria/view/NoVeterinaria.vue')
        },
        {
            path:':id',
            name:'paciente',
            component:()=>import('@/modules/veterianria/view/Veterinaria.vue')
        }
    ]
}