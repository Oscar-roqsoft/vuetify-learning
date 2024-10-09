<template>

    <v-row>
        <v-col cols="md-6" sm="12" lg="6">
            <v-label>First Name</v-label>
            <v-text-field clearable type="input" placeholder="Enter first name"  variant="underlined"></v-text-field>
        </v-col>
        <v-col  cols="md-6" sm="12" lg="6">
            <v-label>Last Name</v-label>
            <v-text-field clearable type="input" placeholder="Enter last name"  variant="underlined"></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col  cols="md-6" sm="12" lg="6">
            <v-label>Email</v-label>
            <v-text-field clearable type="email" placeholder="Enter email" variant="underlined"></v-text-field>
        </v-col>
        <v-col  cols="md-6" sm="12" lg="6">
            <v-label>Phone Number</v-label>
            <v-text-field clearable type="number" placeholder="Enter phone number "  variant="underlined"></v-text-field>
        </v-col>
    </v-row>
                         
    <div class="mt-4">
        <v-label>Message</v-label>
        <v-text-field clearable type="text"  placeholder="write a message" variant="underlined"></v-text-field>
    </div>

    <v-btn class="mt-4" color="#0275b2" size="large" style="min-height: 50px;">Send Message</v-btn>

</template>