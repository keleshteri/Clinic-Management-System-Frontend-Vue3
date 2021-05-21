import { reactive, toRefs } from 'vue'
import axios from 'axios'

const state = reactive({
    error: null,
    bigData: null,
    loaded: false,
    loading: false,
})

export default function (options) {
    const load = async () => {
        if (!state.loaded) {
            try {
                const response = await axios(options)
                state.bigData = await response.data;
                
            } catch (e) {
                state.error = e.message
            }
        }
    }
    return { ...toRefs(state), load }
}
