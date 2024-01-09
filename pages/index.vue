<template>
     
    <div class="main" style=" min-height: 100vh;">

        <div class="hero" style=" height: 98vh;">

            <Header />
             
            <!-- start of hero section -->
            <v-container style="color: white; padding-top: 5.8rem;">
             
                 
                     <div class="hero-content">
                         <div class="hero-title mt-md-4">
                             <h3 class="my-text" style=" z-index: 10; line-height: 1.0;">We Are <br> Creative <br> Design Agency</h3>
                              <p  class="my-10 hero-p" style="color: #fffff; font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and 
                                 typesetting industry. Lorem Ipsum issimply dummy text of the printing and typesetting.
                             </p>
 

                            <v-btn  class="text-capitalize" style="color: #025945; min-height: 50px; font-size: 15px; font-weight: 500;">
                                 let's Talk
                            </v-btn>

                         </div>

                        <div class="hero-img">
                            <v-img class="" src="/hero-images/img.png" />
                            <div class="inner-hero-img">
                                <v-img src="/hero-images/arc-button.png"/>
                            </div>
                        </div>
                     </div>
                     
            
        
            </v-container>
             <!-- end of hero section -->
 
        </div>
        
        <div class="social-icons">
            <v-container>
                <v-row class="py-10">
                    <span class="text-decoration-underline">LinkedIn</span>
    
                    <div class="hero-vector mx-6">
                        <v-img src="/hero-images/Vector.png"/>
                    </div>
                    <span class="text-decoration-underline">Facebook</span>
    
                    <div class="hero-vector mx-6">
                        <v-img src="/hero-images/Vector.png"/>
                    </div>
                    <span class="text-decoration-underline">Instagram</span>
    
                    <div class="hero-vector mx-6">
                        <v-img src="/hero-images/Vector.png"/>
                    </div>
                    <span class="text-decoration-underline">Dribble</span>
    
                    <div class="hero-vector mx-6">
                        <v-img src="/hero-images/Vector.png"/>
                    </div>

                    <span class="text-decoration-underline">twitter</span>
    
                </v-row>

            </v-container>
        </div>

        
    </div>
    
    
    <div class=" mt-5 mt-md-14 border py-4">
          <div class="slides">
              <span class="span">SEO</span>
              <div class="span" style="height: 5px; width: 10px; background: #025945;"></div>
              <span class="span">GRAPHIC DESIGN</span>
              <div class="span" style="height: 5px; width: 10px; background: #025945;"></div>
              <span class="span">UI DESIGN</span>
              <div class="span" style="height: 5px; width: 10px; background: #025945;"></div>
              <span class="span">DIGITAL MARKETING</span>
          </div>
    </div>

        
        
        
        <div>
            <about-us/>
        </div>

        <div>
            <services />
        </div>

        <div>
            <work />
        </div>

        <div>
            <testimonials />
        </div>

        <div>
            <contact />
        </div>

        <div>
            <footerMenu />
        </div>


        
    </template>


<script>

import { gsap } from "gsap";
export default {
    data(){
        return{

        }
    },
    computed:{
        displ() {
        return this.$vuetify.display;
      },
      cols() {
        const { lg, sm, md } = this.$vuetify.display;
        return lg
          ? [4, 12, 6, 4, 8, 4, 3, 7,5]
          : md
          ? [4, 12, 12, 6, 8, 4, 3, 12, 12, 12]
          : sm
          ? [6, 12, 12, 12, 12, 12, 12, 12, 12]
          : [6, 12, 12, 12, 12, 12, 12, 12, 12];
      },
    },

    mounted(){
        var tl = gsap.timeline();
        tl.fromTo('.slides .span', 
        { 
            x:400,
           
        }, 

        { 
            duration: 10, 
            x: -400,
            ease: 'linear',
            repeat: -1,
            delay: (el, i) => i * 0.5,
        });
    }
}
</script>



<style scoped>

.hero{
    background: #025945;
}

.hero-vector{
    height: 20px;
    width:20px
}

.hero-content{
    position: relative;
}

.hero-title{
    position: relative;
    z-index: 10;
}
.hero-p{
    width: 50%;
}

.hero-img{
    position: absolute;
    width: 653px;
    height: 853px;
    top: 3px;
    left: 33em;
}
.inner-hero-img{
    width: 100px;
    height: 100px;
    position: relative;
    top: -92px;
    left: 115px;

}

.position-relative{
    position: absolute;
    right:0;
    top:0;
}

.slides{
    max-width: 1300px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 4px;
    font-size: 40px;
    color:#025945;
    font-weight: 700;
}

@media (max-width: 768px) { /* xs breakpoint */
    .hero{
        height: 90vh !important;
   }

    .main{
      min-height: 910px !important;
   }
  .my-text {
    font-size: 45px;
    line-height: 1.2 !important;
  }
  .hero-p{
    width: 100%;
}

  .hero-img{
    position: relative;
    /* min-width: 420px; */
    width: 427px;
    top: 20px;
    left: -5em;
}
.inner-hero-img{
    top: -95px;
    left: 68px ;
}
 .social-icons{
    display:none;
 }

 .hero-title p{
    margin: 14px 0px !important;
 }

 .slides{
    overflow-x: hidden; /* Enable horizontal scrolling */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
    font-size: larger;
    max-width: none;
    margin: 0;


 }

 .slides span {
    white-space: nowrap; /* Keep elements on the same line */
    padding: 0px 10px;
    border-right: 1px solid #025945; /* Adjust color and width */
  }


.slides span:last-child {
  border-right: none; /* Remove border from the last item */
}

}

@media (min-width: 960px) { /* md breakpoint */
  .my-text {
    font-size: 120px;
    font-weight: 700;
    letter-spacing: 3px;
  }
}

</style>