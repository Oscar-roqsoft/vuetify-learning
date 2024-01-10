
<template>

    <v-container class="my-10">
        <v-row class="">
             
            <v-col cols="md-6" sm="12" lg="6">
                <h1  style="font-size:60px; line-height: 1.2;" class="text-capitalize">Service We provide</h1>
                <v-expansion-panels    variant="accordion">
                    <v-expansion-panel
                        v-for="i in our_services"
                        style="font-size:16px;"
                        elevation="0"
                        class="py-3"
                        :key="i.id"
                        :title="i.title"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    ></v-expansion-panel>
                </v-expansion-panels>

                <v-btn style="color:white; background: #025945; height:50px" class="my-3 text-capitalize">view all services</v-btn>
            </v-col>

            <v-col cols="md-6" sm="12" lg="6">
                <div class="d-flex justify-md-end">
                    <v-img eager
                       max-width="470px"
                       src="/services-img/img1.png"
                    />
                </div>
            </v-col>

        </v-row>

    </v-container>

</template>



<script>

export default{
    data(){
        return{
            our_services :[
                {id:1, title:'UI/UX Design', text:''},
                {id:2, title:'Web Development', text:''},
                {id:3, title:'Software Development', text:''},
                {id:4, title:'Graphics Design', text:''},
                {id:5, title:'Digital Marketing', text:''},
                {id:6, title:'Seo', text:''}
            ]
        }
    }
}
</script>