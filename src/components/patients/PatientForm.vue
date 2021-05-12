<template>
    <Dialog
        v-model:visible="showMessage"
        :breakpoints="{ '960px': '80vw' }"
        :style="{ width: '30vw' }"
        position="top"
    >
        <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
            <i
                class="pi pi-check-circle"
                :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
            ></i>
            <h5>Registration Successful!</h5>
            <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
                Your account is registered under name
                <b>{{ state.name }}</b> ; it'll be valid next 30 days without
                activation. Please check <b>{{ state.email }}</b> for activation
                instructions.
            </p>
        </div>
        <template #footer>
            <div class="p-d-flex p-jc-center">
                <Button
                    label="OK"
                    @click="toggleDialog"
                    class="p-button-text"
                />
            </div>
        </template>
    </Dialog>

    <Dialog
        v-model:visible="showErrorMessage"
        :breakpoints="{ '960px': '80vw' }"
        :style="{ width: '30vw' }"
        position="top"
    >
        <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
            <h5>Error</h5>
            <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
                {{ error }}
            </p>
        </div>
        <template #footer>
            <div class="p-d-flex p-jc-center">
                <Button
                    label="OK"
                    @click="toggleErrorDialog"
                    class="p-button-text"
                />
            </div>
        </template>
    </Dialog>
    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div
            v-for="cols in fieldRows"
            :key="cols.id"
            class="p-fluid p-formgrid p-grid"
        >
            <div v-for="col in cols" :key="col.id" class="p-field p-col">
                <label
                    :for="col.field"
                    :class="{
                        'p-error': v$[col.field].$invalid && submitted,
                    }"
                    >{{ col.header }}*</label
                >
                <InputText
                    :id="col.field"
                    v-model="v$[col.field].$model"
                    :class="{
                        'p-invalid': v$[col.field].$invalid && submitted,
                    }"
                    v-if="col.fieldType == 'text'"
                />
                <Dropdown
                    :id="col.field"
                    v-model="v$[col.field].$model"
                    :options="col.options"
                    optionValue="name"
                    optionLabel="name"
                    :class="{
                        'p-invalid': v$[col.field].$invalid && submitted,
                    }"
                    v-if="col.fieldType == 'dropdown'"
                />
                <Calendar
                    :id="col.field"
                    v-model="v$[col.field].$model"
                    :showIcon="true"
                    :class="{
                        'p-invalid': v$[col.field].$invalid && submitted,
                    }"
                    v-if="col.fieldType == 'calendar'"
                />
                <Textarea
                    :id="col.field"
                    :autoResize="true"
                    rows="5"
                    cols="30"
                    v-model="v$[col.field].$model"
                    :class="{
                        'p-invalid': v$[col.field].$invalid && submitted,
                    }"
                    v-if="col.fieldType == 'textarea'"
                />
            </div>
        </div>

        <Button type="submit" label="Submit" class="p-mt-2" />
    </form>
</template>
<script>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
export default {
    name: 'PatientForm',
    props: {
        patient: { type: Object, required: true },
        fields: { type: Object, required: true },
        rows: { type: Array, required: true },
    },
    computed: {
        fieldRows() {
            return this.rows.map((row) => row.map((i) => this.fields[i]))
        },
    },
    setup(props) {
        const state = reactive({})
        const rules = {}
        //generate data
        Object.keys(props.fields).forEach((key) => {
            //
            state[props.fields[key].field] =
                props.patient[props.fields[key].field]
            // rules
            rules[props.fields[key].field] = props.fields[key].rules
        })

        const resetForm = () => {
            state.fileNumber = null
            state.gender = null
            state.firstName = ''
            state.lastName = ''
            state.middleName = ''
            state.nationalId = null
            state.birthDate = ''
            state.homeAddress = ''
            state.landlineNumberHome = ''
            state.landlineNumberOffice = ''
            state.cellphoneNumber = ''
            state.email = ''
            submitted.value = false
        }

        const submitted = ref(false)
        // const genders = ref()
        const showMessage = ref(false)
        const showErrorMessage = ref(false)
        const error = ref(null)

        const v$ = useVuelidate(rules, state)

        console.log('v$', v$)

        const handleSubmit = (isFormValid) => {
            submitted.value = true

            if (!isFormValid) {
                return
            }
            savePatient()
        }

        console.log(state)

        const savePatient = async () => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(state),
            }

            try {
                let res = await fetch('/api/v1/patient/', requestOptions)
                const json = await res.json()
                if (!res.ok) {
                    console.log('error: ', json.message)
                    throw Error(json.message)
                }
                console.log(res)
                toggleDialog()
            } catch (errors) {
                console.log('log error')
                error.value = errors
                console.log(errors)
                toggleErrorDialog()
            }
        }
        const toggleErrorDialog = () => {
            showErrorMessage.value = !showErrorMessage.value
        }
        const toggleDialog = () => {
            showMessage.value = !showMessage.value

            if (!showMessage.value) {
                resetForm()
            }
        }

        return {
            state,
            v$,
            handleSubmit,
            toggleDialog,
            toggleErrorDialog,
            submitted,
            showMessage,
            showErrorMessage,
            error,
        }
    },
}
</script>
