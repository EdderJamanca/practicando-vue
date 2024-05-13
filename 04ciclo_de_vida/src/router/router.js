import { createRouter,createWebHashHistory } from "vue-router";

import isAuthenticatedGuard from "./auth-guard";
// import { compileToFunction } from "vue";

const routes=[
    {
        path:'/',
        redirect:'/pokemon'
    },
    {
        path:'/pokemon',
        nema:'pokemon',
        component:() =>import('@/modules/pokemons/layouts/PokemonLayout'),
        children:[
            {
                path:'home',
                name:'pokemon-home',
                component:()=>import('@/modules/pokemons/pages/ListPage')
            },
            {
                path:'about',
                name:'pokemon-about',
                component:()=>import('@/modules/pokemons/pages/AboutPage')
            },
            {
                path:'pokemonid/:id',
                name:'pokemon-id',
                component:()=>import('@/modules/pokemons/pages/PokemonPage'),
                props:(router)=>{
                    const id =Number(router.params.id);
                    return isNaN(id) ? {id:1}:{id}
                }
            },
            {
                path:'',
                redirect:{name:'pokemon-about'}
            }
        ]
    },
    {
        path:'/dbz',
        name:'dbz',
        beforeEnter:[isAuthenticatedGuard],
        component:()=>import('@/modules/dbz/Layouts/DragonBallLayout'),
        children:[
            {
                path:'characters',
                name:'dbz-characters',
                component:()=>import('@/modules/dbz/page/Characters')
            },
            {
                path:'about',
                name:'dbz-about',
                component:()=>import('@/modules/dbz/page/About')
            },
            {
                path:'',
                redirect:{name:'dbz-characters'}
            }
        ]
    },
    {
        path:'/:pathMatch(.*)*',
        component:()=>import('@/modules/shared/page/NotPageFunt')
    }
];

const router=createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router;