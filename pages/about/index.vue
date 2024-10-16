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
                        <!-- <h2 class="about-heading">We Help To Get Solutions</h2> -->
                        <p class="my-4" style="color:#666666 ; font-size: 16px;">At Inhouse.codes, we turn your ideas into powerful software solutions. From understanding your needs to building a tailored demo, we form a dedicated team to develop and launch your project seamlessly. Beyond delivery, we offer up to 3 years of support, handling updates and ensuring smooth performance. Whether you're a startup or enterprise, we build custom software, mobile apps, and cloud platforms with expert care to drive your success.
                        <br><br>Our projects have a lasting impact, driving innovation, sharpening our skills, and building solutions that push industry boundaries. By developing our own software products, we’re able to experiment with new technologies, streamline processes, and deliver value both internally and externally. These projects not only enhance our expertise but also allow us to offer you cutting-edge solutions based on real-world experience.

                        </p>


                        <h2 class="about-heading " style="font-size: medium; margin-bottom: 16px;">Our Top 3 Principles That Guide These Projects Are</h2>
                        
                        <div class="d-flex ">
                            <div>
                                <span >
                                    <!-- <SvgIconsAeroplane class="icons" style="max-width: 120px;"/> -->
                                    <SvgIconsBulb class="icons" style="max-width: 130px;"/>
                                </span>
                            </div>
                            <div class="mx-md-14 mx-6">
                                <h5 class="sub-header" style="font-size: 30px;">Ownership</h5>
                                <p class="sub-p"    style="color: #666666;">
                                    We take full responsibility for every project, treating it as if it’s our own, ensuring dedication and excellence in every detail.

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
                                <h5 class="sub-header"  style="font-size: 30px;">Innovation</h5>
                                <p class="sub-p"  style="color: #666666;">
                                    We constantly push ourselves to explore new ideas and technologies, delivering products that are forward-thinking and impactful.

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
                                <h5 class="sub-header"  style="font-size: 30px;">Collaboration</h5>
                                <p class="sub-p"  style="color: #666666;">
                                    We believe in teamwork and transparency, working closely together and with stakeholders to ensure the best possible results.
                                </p>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="md-6" sm="12" lg="6" style="margin-top:32px;">
                        <v-img class="rounded-lg" src="/about-img/who.png"/>
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
    background: linear-gradient(to top, rgba(2, 117, 178, 0.4), rgba(2, 117, 178, 0.5)),url('/about-img/aboutHero.png');
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