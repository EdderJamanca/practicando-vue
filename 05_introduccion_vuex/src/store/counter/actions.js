import getRandomInt from "@/helpers/getRandomInt";

export const incrementRandomInt =async ({commit})=>{

    console.log('commit',commit);

    commit('setLoading',true)

    const randomInt= await getRandomInt();

    console.log('commit randomInt',randomInt);

    commit('incrementBy',randomInt);
    
    commit('setLoading',false);
}