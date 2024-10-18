<template>
    <v-row>
      <v-col cols="md-6" sm="12" lg="6">
        <v-label>First Name</v-label>
        <v-text-field
          v-model="firstName"
          clearable
          type="input"
          placeholder="Enter first name"
          variant="underlined"
          :rules="[rules.required]"
        ></v-text-field>
      </v-col>
      <v-col cols="md-6" sm="12" lg="6">
        <v-label>Last Name</v-label>
        <v-text-field
          v-model="lastName"
          clearable
          type="input"
          placeholder="Enter last name"
          variant="underlined"
          :rules="[rules.required]"
        ></v-text-field>
      </v-col>
    </v-row>
  
    <v-row>
      <v-col cols="md-6" sm="12" lg="6">
        <v-label>Email</v-label>
        <v-text-field
          v-model="email"
          clearable
          type="email"
          placeholder="Enter email"
          variant="underlined"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
      </v-col>
      <v-col cols="md-6" sm="12" lg="6">
        <v-label>Phone Number</v-label>
        <v-text-field
          v-model="phone"
          clearable
          type="number"
          placeholder="Enter phone number"
          variant="underlined"
          :rules="[rules.required, rules.phone]"
        ></v-text-field>
      </v-col>
    </v-row>
  
    <div class="mt-4">
      <v-label>Message</v-label>
      <v-text-field
        v-model="message"
        clearable
        type="text"
        placeholder="Write a message"
        variant="underlined"
        :rules="[rules.required]"
      ></v-text-field>
    </div>
  
    <v-btn
      :loading="isloading"
      :disabled="!isFormValid"
      @click.prevent="contact"
      class="mt-4"
      color="#0275b2"
      size="large"
      style="min-height: 50px;"
    >
      Send Message
    </v-btn>
</template>
  


<script setup>

// https://pma.inhouse.codes/api/contacts

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref(null)
const message = ref('')

const isDisabled = ref(false)
const isloading = ref(false)


  watchEffect(()=>{
    if(firstName.value.length && lastName.value.length && email.value.length && phone.value != null && message.value.length){
        isDisabled.value = true
    }
  })


//   / Validation rules
const rules = {
  required: value => !!value || 'Field is required.',
  email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
  phone: value => /^\d+$/.test(value) || 'Phone number must be valid.'
};

// Check if the form is valid
const isFormValid = computed(() => {
  return (
    firstName.value &&
    lastName.value &&
    email.value &&
    phone.value &&
    message.value &&
    rules.email(email.value) === true &&
    rules.phone(phone.value) === true
  );
});


const contact = async()=>{
    const payload ={
        first_name:firstName.value,
        last_name:lastName.value,
        phone_number:phone.value,
        email:email.value,
        message:message.value

    }
    isloading.value = true
    console.log(payload)
    try{
        const data = await fetch('https://pma.inhouse.codes/api/contacts',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(payload)

        }).then(res => res.json());

        console.log('data',data.data)

        push.success('Message sent successfully!');

        if(data.data){
            // this.pinia.setProjects(data.data)
        }

        isloading.value = false


    }catch(e){
        console.log('error:',e)
        isloading.value = false

    }
}




</script>