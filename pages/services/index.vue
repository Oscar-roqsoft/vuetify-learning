<template>
    <div transition="slide-x-transition">

        
        <div class="main-hero">


            <v-container>

                <div class="mt-14 hero" style="min-height: 70vh; color: white; 
                display: flex; justify-content: center; align-items: center; font-weight: 700;">
                    Our Services
                </div>
                
            </v-container>

            
        </div>



        <div class="bg"></div>



        <div class="breadcrumb">

            <v-col class="d-flex align-items justify-center">
                <v-card>

                    <v-breadcrumbs color=" #0275b2" :items="items">
                        <template v-slot:divider>
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>
            </v-col>
        </div>


        <services/>

        <Testimonials/>

        <Contact/>

    </div>
</template>


<script>

export default{
    data(){
        return{
            items: [
        {
          title: 'Home',
          disabled: false,
          href: '/',
        },
       
        {
          title: 'Our Services',
          disabled: true,
          href: 'project',
        },
      ],
        }
    }
}
</script>

<style scoped >


.hero{
   font-size: 60px;
}

.main-hero{
    background: linear-gradient(to top, rgba(2, 117, 178, 0.4), rgba(2, 117, 178, 0.5)),url('/services-img/services-2.jpeg');
    background-size: cover;
    background-position: left center;
    background-repeat: no-repeat, no-repeat;
    /* background-color:  #0275b2; */


}


.breadcrumb{
    position: relative;
    top: -2rem;
}




</style>