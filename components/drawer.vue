
<template>
        <v-navigation-drawer  
          v-model="drawer"
          temporary
        >
                <div style="font-family: Permanent Marker !important; font-size:30px; color:#025945;" 
                class="logo ma-4 pa-2 d-flex justify-center  font-weight-bold" >
                    InHouse
                </div>
  
          <v-divider></v-divider>
  

            <v-list nav dense>
                 
            
                <v-list-item   v-for="item in navigationItems" :key="item.title" :to="item.link">


                       <div class="nav-links my-2">
                           <v-list-item-icon >
                           <v-icon>{{ item.icon }}</v-icon>
                           </v-list-item-icon>
       
                           <div class=" mx-4 " >
                               <v-list-item-content >
                               <v-list-item-title style="font-size:16px !important;">{{ item.title }}</v-list-item-title>
                               </v-list-item-content>
                           </div>

                       </div>


                </v-list-item>

             </v-list>


             <div >
                 <v-btn class=" rounded d-flex justify-center align-items-center pa-7  ma-4" style="background: #025945; color:white"   href="#contact" 
                  >
                         Get Started
                 </v-btn>
             </div>


        </v-navigation-drawer>

          <div >
             <v-toolbar-side-icon   @click="drawer = !drawer">
                <v-icon color="white"  size="40" v-if="!drawer">mdi-menu</v-icon>
                <v-icon color="white"  size="40" v-else>mdi-close</v-icon>
            </v-toolbar-side-icon>

          </div>
  </template>



<script>
  export default {
    data () {
      return {
        drawer: null,
        navigationItems: [
        { title: 'Home', link: '/', icon: 'mdi-home' },
        { title: 'About Us', link: '/about', icon: 'mdi-information' },
        { title: 'Projects', link: '/projects', icon: 'mdi-briefcase' },
        { title: 'Services', link: '/services', icon: 'mdi-cogs' },
        { title: 'Contact Us', link: '/contact', icon: 'mdi-phone' },
      ],

      }
    },
  }
</script>


<style scoped>
.v-list-item-title {
  font-size: 160px; /* Adjust for better readability */
}

.v-toolbar-side-icon.v-icon--is-active {
  transition: transform 0.4s ease-in-out;
  transform: rotate(180deg) scale(1.1);
}

.icon-anim{
  transition: transform 0.4s ease-in-out;
  transform: rotate(180deg) scale(1.1);
}



.nav-links{
    display: flex !important;
    align-items: center;
    padding: 4px;
}
</style>