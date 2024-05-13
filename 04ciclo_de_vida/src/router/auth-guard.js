const isAuthenticatedGuard = async( to, from,next)=>{

    return new Promise(()=>{
        const random=Math.random()*100;

        if(radom > 50){
            console.log('está autenticado')
            next();
        }else{
            console.log('bloqueado por el isAuthenticateGuard',random);
            next({name:'pokemon-home'})
        }
    })
}

export default isAuthenticatedGuard;