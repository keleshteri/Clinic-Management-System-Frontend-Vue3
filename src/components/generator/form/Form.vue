<template>
    <Dialog
        v-model:visible="showMessage"
        :breakpoints="{ '960px': '80vw' }"
        :style="{ width: '30vw' }"
        position="top"
    >
        <div class="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
            <fa :icon="['fas', dialogIcon]" size="6x" :style="dialogStyle"/>
            <h5>{{dialogTitle}}</h5>
            <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
                {{dialogMessage}}
            </p>
        </div>
        <template #footer>
            <div class="p-d-flex p-jc-center">
                <Button
                    label="OK"
                    @click="toggleDialog"
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
                    :disabled="col.disabled"
                    v-if="col.fieldType == 'text'"
                />
                <Dropdown
                    :id="col.field"
                    v-model="v$[col.field].$model"
                    :options="col.options"
                    :optionValue="col.optionsValue"
                    :optionLabel="col.optionsLabel"
                    :class="{
                        'p-invalid': v$[col.field].$invalid && submitted,
                    }"
                    v-if="col.fieldType == 'dropdown'"
                />
                <Calendar
                    :id="col.field"
                    v-model="v$[col.field].$model"
                    :showIcon="true"
                    dateFormat="yy-mm-dd"
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
                <Checkbox 
                    :id="col.field"
                    :name="col.field"
                    :binary="true"
                    v-model="v$[col.field].$model" 
                    :class="{'p-invalid':v$[col.field].$invalid && submitted}" 
                    v-if="col.fieldType == 'checkbox'"
                    />
            </div>
        </div>

        <Button type="submit" label="Submit" class="p-mt-2" />
    </form>
</template>
<script>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
export default {
    name: 'Form',
    props: {
        data: { type: Object, required: true },
        fields: { type: Object, required: true },
        rows: { type: Array, required: true },
        edit: { type: Boolean, default: false },
        url: { type: String, required: true },
    },
    computed: {
        fieldRows() {
            return this.rows.map((row) => row.map((i) => this.fields[i]))
        },
    },
    setup(props) {
        const state = reactive({})
        const stateReset = reactive({})
        const rules = {}

        const dialogMessage = ref('')
        const dialogTitle = ref('')
        const dialogStyle = ref('')
        const dialogIcon = ref('')

        //generate data
        Object.keys(props.fields).forEach((key) => {
            //
            state[props.fields[key].field] =
                props.data[props.fields[key].field]
            //stateReset
            stateReset[props.fields[key].field] = null
            // rules
            rules[props.fields[key].field] = props.fields[key].rules
        })

        const resetForm = () => {
            //
            // state = stateReset;
            submitted.value = false
        }

        const submitted = ref(false)
        // const genders = ref()
        const showMessage = ref(false)
        const showErrorMessage = ref(false)
        const error = ref(null)

        const v$ = useVuelidate(rules, state)

        const handleSubmit = (isFormValid) => {
            submitted.value = true
            if (!isFormValid) {
                dialogStyle.value = { color: 'red' }
                dialogMessage.value = 'We cant validate the form !'
                dialogTitle.value = 'OPSSSS!'
                dialogIcon.value = 'times-circle'
                toggleDialog()
                return
            }

            save()
        }
 
        const save = async () => {
            const requestOptions = {
                method: props.edit ? 'PUT' : 'POST',
                // headers: { 'Content-Type': 'application/json' },
                data: state,//JSON.stringify(state),
                url: props.url
            }
             

            try {
                // let res = await fetch(props.url, requestOptions)
                const res = await axios(requestOptions)
                // console.log(res);
                // const json = await res.json()
                // if (!res.ok) {
                //     console.log('error: ', json.message)
                //     throw Error(json.message)
                // }
                dialogStyle.value = { color: 'green' }
                dialogMessage.value = 'Action has been done Successfuly!'
                dialogTitle.value = 'Successful!'
                dialogIcon.value = 'check-circle'
                toggleDialog()
                return res;
            } catch (errors) {
                dialogStyle.value = { color: 'red' }
                dialogMessage.value = errors.response.data.error
                dialogTitle.value = errors.response.data.message
                dialogIcon.value = 'times-circle'
                toggleDialog()
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
            dialogMessage,
            dialogTitle,
            dialogStyle,
            dialogIcon,
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
