import axios from 'axios';


const journalApi=axios.create({
    baseURL:'https://proyect-journal-default-rtdb.firebaseio.com'
})

export default journalApi;