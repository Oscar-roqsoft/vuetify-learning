
<template>
    <div transition="slide-x-transition">

        <div class="main-hero" >
            <v-container>
                <div class="mt-14 hero" style="min-height: 70vh; color: white; 
                display: flex; justify-content: center; align-items: center; font-weight: 700;">
                    Our Projects
                </div>
                
            </v-container>
        </div>
      

        <div class="breadcrumb">

            <v-col class="d-flex align-items justify-center">
                <v-card>
    
                    <v-breadcrumbs eager color=" #0275b2" :items="['Home','Our Project']">
                        <template v-slot:divider>
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>
            </v-col>
        </div>


        <work/>

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
          title: 'Our Project',
          disabled: true,
          href: 'project',
        },
      ],
        }
    }
}
</script>

<style scoped>

.hero{
   font-size: 60px;
}

.main-hero{
    background: linear-gradient(to top, rgba(2, 117, 178, 0.4), rgba(2, 117, 178, 0.5)),url('/work-img/about-home.jpeg');
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat, no-repeat;
    /* background-color:  #0275b2; */

}


.breadcrumb{
    position: relative;
    top: -2rem;
}

</style>