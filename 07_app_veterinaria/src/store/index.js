import { createStore } from "vuex";

import paciente from '@/modules/veterianria/store';

const store=createStore({
    modules:{
        paciente
    }
})

export default store;