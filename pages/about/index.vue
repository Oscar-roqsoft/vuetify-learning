<template>

    <div transition="slide-x-transition">

        <div class="main-hero" >
            <v-container>
                <div class="mt-14 hero" style="min-height: 70vh; color: white; 
                display: flex; justify-content: center; align-items: center; font-weight: 700;">
                    About Us
                </div>
                
            </v-container>
        </div>
      

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
        
        <v-container>
                <v-row> 
                    <v-col cols="md-6" sm="12" lg="6">
                        <h3 style="color:  #0275b2;"><span class="mr-4" >~</span>WHO WE ARE</h3>
                        <h2 class="about-heading">We Help To Get Solutions</h2>
                        <p class="my-4" style="color:#666666 ; font-size: 16px;">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </p>
                        
                        <div class="d-flex ">
                            <div>
                                <span >
                                    <SvgIconsAeroplane class="icons" style="max-width: 120px;"/>
                                </span>
                            </div>
                            <div class="mx-md-14 mx-6">
                                <h5 class="sub-header" style="font-size: 30px;">Lorem Ipsum</h5>
                                <p class="sub-p"    style="color: #666666;">Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div class="d-flex my-4">
                            <div>
                                <span >
                                    <SvgIconsBulb class="icons" style="max-width: 130px;"/>
                                </span>
                            </div>
                            <div class="mx-md-14 mx-6">
                                <h5 class="sub-header"  style="font-size: 30px;">Lorem Ipsum</h5>
                                <p class="sub-p"  style="color: #666666;">Lorem Ipsum is simply dummy
                                    text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="md-6" sm="12" lg="6">
                        <v-img class="rounded-lg" src="/about-img/unsplash.png"/>
                    </v-col>
                </v-row>
        </v-container>

        <AboutUs/>

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
          title: 'About-Us',
          disabled: true,
          href: 'breadcrumbs_link_2',
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
    background: linear-gradient(to top, rgba(2, 89, 69, .7), rgba(2, 89, 69, .6)),url('/about-img/about-img.jpeg');
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat, no-repeat;
    /* background-color:  #0275b2; */

}


.breadcrumb{
    position: relative;
    top: -2rem;
}
.about-heading{
    font-size: 60px;
    line-height: 1.2;
    font-weight: 700;
}

@media (max-width: 768px) { /* md breakpoint */
    .about-heading{
        font-size: 45px;
    }
    .icons{
        max-width: 75px !important;
    }
    .sub-header{
        font-size: 16px;
    }
    .sub-p{
        font-size: 14px;
    }
}
</style>