<template>
     <div class="navbar shadow-lg" transition="scroll-y-transition">
       <v-container :class="$vuetify.display.smAndDown ?'px-2':''" style="min-height: 50px; ">
          <v-row
            no-gutters
            class="d-flex py-0 justify-space-between align-center"
            style="height: "
          >
   
                   <div style="font-family: Permanent Marker !important; font-size:30px;" 
                   class="logo  pa-2 d-flex justify-center  font-weight-bold" >
                       InHouse
                   </div>
   
                   <v-col
                   v-if="$vuetify.display.mdAndUp"
                   class="d-flex align-center justify-end"
                   cols="" >
                   <v-btn-toggle
                       rounded="0"
                       text
                       color="deep-green-accent-3"
                       group theme="dark" variant="text"
                      >
                   
                       <!-- <v-btn value="shop"  to="/shop" class="rounded-xl  text-capitalize font-weight-bold">
                       <span style="font-family: Permanent Marker !important;font-size: 20px;"> Home</span>
                       </v-btn> -->
                       <v-btn value="home"  to="/" class="rounded  text-capitalize font-weight-bold"  
                       style="font-size:14px !important;">
                         Home
                       </v-btn>
                       <v-btn  to="/about" class=" rounded text-capitalize font-weight-bold" value="left">
                       About us
                       </v-btn>
   
                       <v-btn to="/project" class="rounded text-capitalize font-weight-bold" value="center">
                       Project
                       </v-btn>
   
                       <v-btn  to="/services" class="rounded text-capitalize font-weight-bold" value="right">
                       Services
                       </v-btn>
   
                       <v-btn  href="#contactus" class="rounded text-capitalize font-weight-bold" value="justify">
                       Contact Us
                       </v-btn>
   
                       <v-btn style="background: white; color:black"  href="#contact" 
                       class="rounded ml-3 text-capitalize font-weight-bold" value="justify">
                       Get Started
                       </v-btn>
                       
   
                       
   
                   </v-btn-toggle>
                   </v-col>
   
                   <div class="show">
   
                       <drawer >
                           <slot></slot>
                       </drawer>
   
                   </div>
   
          
          </v-row>
       </v-container>
     </div>
     
</template>

<script>
export default {


 data(){

   return {
     drawer: null,
     open: false,
   }

 },

 methods:{
   toggleDrawer(){
     this.open = !this.open
   }
 }
 
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.logo{
    font-size:40px;
    color:white;
    font-weight:700;
}

.navbar{
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #025945;
    z-index: 99;
}

.show{
    display:none !important;
}
@media only screen and (max-width: 960px) {

 .logoTexta {
   font-size: 23px !important;
   line-height: 30px !important;
 }

  
 .show{
    display:flex !important;
 }
}


</style>