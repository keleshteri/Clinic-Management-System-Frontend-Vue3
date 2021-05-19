import { reactive, toRefs } from 'vue'

const state = reactive({
    error: null,
    patients: null,
    loaded: false,
    loading: false,
})

export default function getPatients() {
    const load = async () => {
        if (!state.loaded) {
            try {
                const patientsResponse = await fetch('/api/v1/patient')
                //check if patientsResponse ok
                if (!patientsResponse.ok) {
                    throw Error('some thing not ok')
                }
                state.patients = await patientsResponse.json()
            } catch (e) {
                state.error = e
            }
        }
    }

    return { ...toRefs(state), load }
}
