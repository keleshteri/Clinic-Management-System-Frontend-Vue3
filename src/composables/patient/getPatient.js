import { reactive, toRefs } from 'vue'

const state = reactive({
    error: null,
    patient: null,
    loaded: false,
    loading: false,
})

export default function (id) {
    const load = async () => {
        if (!state.loaded) {
            try {
                const patientResponse = await fetch('/api/v1/patient/' + id)
                //check if patientResponse ok
                if (!patientResponse.ok) {
                    throw Error('some thing not ok')
                }
                state.patient = await patientResponse.json()
            } catch (error) {
                error.value = error.message
            }
        }
    }
    return { ...toRefs(state), load }
}
