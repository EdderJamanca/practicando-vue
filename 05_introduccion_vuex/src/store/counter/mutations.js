
export const increment = (state)=>{
    state.count ++
    state.lastMutation ='incremet'
}

export const incrementBy = (state,val)=>{
    state.count +=val;
    state.lastMutation ='incrementBy'+val;
    state.lastRandomInt=val;
}

export const setLoading=(state,val)=>{
    state.setLoading = val;
    state.lastMutation = 'setLoading' + val;
}