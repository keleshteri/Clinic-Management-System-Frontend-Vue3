import { ref } from 'vue'

const getPatient = (id) => {
    const patient = ref(null)
    const  error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:8080/api/v1/patient/' + id)
            //check if data ok
            if(!data.ok){
                throw Error('some thing not ok')
            }
            patient.value = await data.json()            
        } catch (error) {
            error.value = error.message
        }
    }

    return { patient, error, load }
}


export default getPatient