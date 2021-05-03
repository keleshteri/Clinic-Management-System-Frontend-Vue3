<template>
    <div>
        <div class="card">
            <form @submit="onSubmit">
                <h5>Advanced</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="firstname6">Firstname</label>
                        <InputText id="firstname6" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname6">Lastname</label>
                        <InputText id="lastname6" type="text" />
                    </div>
                    <div class="p-field p-col-12">
                        <label for="address">Address</label>
                        <Textarea id="address" rows="4" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="state">State</label>
                        <Dropdown
                            inputId="state"
                            v-model="selectedState"
                            :options="states"
                            optionLabel="name"
                            placeholder="Select"
                        />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="zip">Zip</label>
                        <InputText id="zip" type="text" />
                    </div>
                </div>
                <button type="submit" :disabled="isSubmitting">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
// import { Form, Field } from 'vee-validate';
// import * as Yup from 'yup';
export default {
    name: 'create',
    components: { InputText },
    setup() {
        
 
        //
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fileNumber: 45433344433,
                firstName: 'dffff',
                lastName: 'lasnameeee',
                middleName: 'midel',
                nationalId: 123456889,
                birthDate: '',
                homeAddress: 'dffdfffd',
                phoneNumber: '33333',
                personalImage: '',
            }),
        }

        let data = fetch('/api/v1/patient/', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))

        console.log(data)

        const selectedState = ref(null)
        const states = ref([
            { name: 'Arizona', code: 'Arizona' },
            { name: 'California', value: 'California' },
            { name: 'Florida', code: 'Florida' },
            { name: 'Ohio', code: 'Ohio' },
            { name: 'Washington', code: 'Washington' },
        ])
        const cities1 = ref([])
        const cities2 = ref([])
        const city1 = ref(null)
        const city2 = ref(null)

        return {
 
            selectedState,
            states,
            cities1,
            cities2,
            city1,
            city2,
        }
    },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 489px) {
    .p-formgroup-inline {
        .p-field {
            margin-bottom: 1em !important;
        }
    }
}

.layout-content .content-section.implementation > h3 {
    font-weight: 600;
}

textarea {
    resize: none;
}
</style>
