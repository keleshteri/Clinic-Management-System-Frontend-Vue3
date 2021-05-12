<template>
    <div>
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
                    <b>{{ state.name }}</b> ; it'll be valid next 30 days
                    without activation. Please check
                    <b>{{ state.email }}</b> for activation instructions.
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

        <div>
            <div class="card">
                <h5 class="p-text-center">Register</h5>
                <form
                    @submit.prevent="handleSubmit(!v$.$invalid)"
                    class="p-fluid"
                >
                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col">
                            <label
                                for="fileNumber"
                                :class="{
                                    'p-error':
                                        v$.fileNumber.$invalid && submitted,
                                }"
                                >fileNumber*</label
                            >
                            <InputText
                                id="fileNumber"
                                v-model="v$.fileNumber.$model"
                                :class="{
                                    'p-invalid':
                                        v$.fileNumber.$invalid && submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="nationalId"
                                :class="{
                                    'p-error':
                                        v$.nationalId.$invalid && submitted,
                                }"
                                >NationalId*</label
                            >
                            <InputText
                                id="nationalId"
                                v-model="v$.nationalId.$model"
                                :class="{
                                    'p-invalid':
                                        v$.nationalId.$invalid && submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="gender"
                                :class="{
                                    'p-error': v$.gender.$invalid && submitted,
                                }"
                                >Gender*</label
                            >
                            <Dropdown
                                id="gender"
                                v-model="v$.gender.$model"
                                :options="genders"
                                optionValue="name"
                                optionLabel="name"
                                :class="{
                                    'p-invalid':
                                        v$.gender.$invalid && submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="birthDate"
                                :class="{
                                    'p-error':
                                        v$.birthDate.$invalid && submitted,
                                }"
                                >Birthday</label
                            >
                            <Calendar
                                id="birthDate"
                                v-model="v$.birthDate.$model"
                                :showIcon="true"
                                :class="{
                                    'p-invalid':
                                        v$.birthDate.$invalid && submitted,
                                }"
                            />
                        </div>
                    </div>

                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col">
                            <label
                                for="firstName"
                                :class="{
                                    'p-error':
                                        v$.firstName.$invalid && submitted,
                                }"
                                >Firstname*</label
                            >
                            <InputText
                                id="firstName"
                                v-model="v$.firstName.$model"
                                :class="{
                                    'p-invalid':
                                        v$.firstName.$invalid && submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="middleName"
                                :class="{
                                    'p-error':
                                        v$.middleName.$invalid && submitted,
                                }"
                                >MiddleName</label
                            >
                            <InputText
                                id="middleName"
                                v-model="v$.middleName.$model"
                                :class="{
                                    'p-invalid':
                                        v$.middleName.$invalid && submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="lastName"
                                :class="{
                                    'p-error':
                                        v$.lastName.$invalid && submitted,
                                }"
                                >Lastname*</label
                            >
                            <InputText
                                id="lastName"
                                v-model="v$.lastName.$model"
                                :class="{
                                    'p-invalid':
                                        v$.lastName.$invalid && submitted,
                                }"
                            />
                        </div>
                    </div>

                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col">
                            <label
                                for="landlineNumberHome"
                                :class="{
                                    'p-error':
                                        v$.landlineNumberHome.$invalid &&
                                        submitted,
                                }"
                                >landlineNumberHome*</label
                            >
                            <InputText
                                id="landlineNumberHome"
                                v-model="v$.landlineNumberHome.$model"
                                :class="{
                                    'p-invalid':
                                        v$.landlineNumberHome.$invalid &&
                                        submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="landlineNumberOffice"
                                :class="{
                                    'p-error':
                                        v$.landlineNumberOffice.$invalid &&
                                        submitted,
                                }"
                                >landlineNumberOffice*</label
                            >
                            <InputText
                                id="landlineNumberOffice"
                                v-model="v$.landlineNumberOffice.$model"
                                :class="{
                                    'p-invalid':
                                        v$.landlineNumberOffice.$invalid &&
                                        submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <label
                                for="cellphoneNumber"
                                :class="{
                                    'p-error':
                                        v$.cellphoneNumber.$invalid &&
                                        submitted,
                                }"
                                >cellphoneNumber*</label
                            >
                            <InputText
                                id="cellphoneNumber"
                                v-model="v$.cellphoneNumber.$model"
                                :class="{
                                    'p-invalid':
                                        v$.cellphoneNumber.$invalid &&
                                        submitted,
                                }"
                            />
                        </div>
                        <div class="p-field p-col">
                            <div class="p-float-label p-input-icon-right">
                                <i class="pi pi-envelope" />
                                <InputText
                                    id="email"
                                    v-model="v$.email.$model"
                                    :class="{
                                        'p-invalid':
                                            v$.email.$invalid && submitted,
                                    }"
                                    aria-describedby="email-error"
                                />
                                <label
                                    for="email"
                                    :class="{
                                        'p-error':
                                            v$.email.$invalid && submitted,
                                    }"
                                    >Email*</label
                                >
                            </div>
                            <span v-if="v$.email.$error && submitted">
                                <span
                                    id="email-error"
                                    v-for="(error, index) of v$.email.$errors"
                                    :key="index"
                                >
                                    <small class="p-error">{{
                                        error.$message
                                    }}</small>
                                </span>
                            </span>
                            <small
                                v-else-if="
                                    (v$.email.$invalid && submitted) ||
                                    v$.email.$pending.$response
                                "
                                class="p-error"
                                >{{
                                    v$.email.required.$message.replace(
                                        'Value',
                                        'Email'
                                    )
                                }}</small
                            >
                        </div>
                    </div>

                    <div class="p-fluid p-formgrid p-grid">
                        <div class="p-field p-col">
                            <label
                                for="homeAddress"
                                :class="{
                                    'p-error':
                                        v$.homeAddress.$invalid && submitted,
                                }"
                                >homeAddress*</label
                            >
                            <Textarea
                                id="homeAddress"
                                :autoResize="true"
                                rows="5"
                                cols="30"
                                v-model="v$.homeAddress.$model"
                                :class="{
                                    'p-invalid':
                                        v$.homeAddress.$invalid && submitted,
                                }"
                            />
                        </div>
                    </div>

                    <Button type="submit" label="Submit" class="p-mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
    name: 'PatientCreate',
    setup() {
        onMounted(() => {
            fetch('/api/v1/gender/')
                .then((response) => response.json())
                .then((data) => {
                    genders.value = data
                })
        })

        const state = reactive({
            fileNumber: null,
            gender: null,
            firstName: '',
            lastName: '',
            middleName: '',
            nationalId: null,
            birthDate: '',
            homeAddress: '',
            landlineNumberHome: '',
            landlineNumberOffice: '',
            cellphoneNumber: '',
            email: '',
        })

        const rules = {
            fileNumber: { required },
            nationalId: { required },
            gender: { required },
            firstName: { required },
            lastName: { required },
            middleName: {},
            email: { required, email },
            landlineNumberHome: { required },
            landlineNumberOffice: { required },
            cellphoneNumber: { required },
            homeAddress: { required },
            birthDate: { required },
        }

        const submitted = ref(false)
        const genders = ref()
        const showMessage = ref(false)
        const showErrorMessage = ref(false)
        const error = ref(null)

        const v$ = useVuelidate(rules, state)

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
                // .then((response) => response.json())
                // .then((res ) => console.log(res ))
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

        return {
            state,
            v$,
            handleSubmit,
            toggleDialog,
            toggleErrorDialog,
            submitted,
            genders,
            showMessage,
            showErrorMessage,
            error,
        }
    },
}
</script>

<style lang="scss" scoped></style>
