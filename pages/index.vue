<template>
        
        <div id="home" class="main" style=" min-height: 100vh;">
    
            <div class="hero" style=" min-height: 720px;">
    
                <v-container>
                    <!-- start of hero section -->
                    <div  style="color: white; padding-top: 5.8rem;">
                     
                            
                             <div class="hero-content">
                                 <div class="hero-title mt-md-4">
                                     <h3 class="my-text stagger" style=" z-index: 10; line-height: 1.0;">We Are <br> Creative <br> Design Agency</h3>
                                      <p  class="my-10 hero-p stagger" style="color: #fffff; font-size: 14px;">
                                        We are a passionate team of designers and innovators, crafting unique digital experiences that inspire and engage. Our mission is to transform your ideas into visually stunning, user-friendly designs that elevate your brand.
                                     </p>
         
        
                                    <v-btn  class="text-capitalize stagger" style="color: #3290f3; min-height: 50px; font-size: 15px; font-weight: 500;">
                                         let's Talk
                                    </v-btn>
        
                                 </div>
        
                                <div class="hero-img">
                                    <v-img   class="img1" src="/hero-images/img.png" />
                                    <div class="inner-hero-img">
                                        <v-img  class="img" src="/hero-images/arc-button.png"/>
                                    </div>
                                </div>
                             </div>
                             
                    
                
                            </div>
                     <!-- end of hero section -->
                </v-container>
                 
     
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
        
        
       


        <div class="position-relative marquee-container  d-block border mt-sm-14">
                <div class="marquee d-flex justify-space-around align-center ">
                    <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                               <span class="span">SEO</span>
                                <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                                <span class="span">GRAPHIC DESIGN</span>
                                <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                                <span class="span">UI DESIGN</span>
                                <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                                <span class="span">DIGITAL MARKETING</span>
                </div>
                <div class="marquee marquee2 d-flex justify-space-around align-center">
                    <span class="span">SEO</span>
                            <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                            <span class="span">GRAPHIC DESIGN</span>
                            <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                            <span class="span">UI DESIGN</span>
                            <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>
                            <span class="span">DIGITAL MARKETING</span>
                            <div class="span" style="height: 5px; width: 10px; background:  #0275b2;"></div>

                </div>
        </div>
        
    
            
            
            
            <div id="aboutus" >
                <about-us/>
            </div>
    
            <div id="services">
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

            <v-container>
                <div class=" mb-14" >
                    <div class="" style="height: 200px; 
                        display: flex; flex-direction: column; justify-content: center; align-items: center; ">
                            <div style="font-size: 40px; font-weight: 700;color:  #0275b2; ">
                                Contact Us
                            </div>
                            <p style="font-size: 16px; color: #666666;">Just write us a message!</p>
                    </div>
                    <contact-form/>
                </div>
            </v-container>
     

        

       
        <!-- back-to-the-top button -->
        <div>
            <button elevation="2" ref="backButton" class="back-to-top-button" @click="scrollToTop">
            <!-- <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 12l-2-2v11H5v-11l2 2 7-7-7-7V11z" fill="white" />
            </svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                <path fill="white" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m1-8v4h-2v-4H8l4-4l4 4z"/></svg>

            </button>
        </div>

        
        
    </template>


<script>

import { gsap } from "gsap";
import { useStore } from '@/stores/index'; 

export default {
//     pageTransition: {
//     name: 'fade', // Choose a transition name
//     mode: 'out-in',   // Specify transition mode
//   },
   
    data(){
        return{
            pinia:null,

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

    async mounted(){
        // hero section animations
        const textElements = document.querySelectorAll('.hero-title .stagger');
        gsap.fromTo(textElements, {
            duration: 10,
            opacity: 0,
            x: -200, // Adjust initial offset as needed
            // stagger: 0.1, // Stagger each animation by 0.2 seconds
            blur:10,
            ease: 'linear', // Use a natural easing function
        }, {
            opacity: 1,
            x: 0,
            blur:0,
        });

        const heroImage = document.querySelector('.img1');
        gsap.fromTo(heroImage, {
            duration: 1.5,
            opacity: 0,
            y: 50, // Adjust initial offset as needed
            blur: 10, // Start with motion blur
            }, {
            opacity: 1,
            y: 0,
            blur: 0, // Remove blur at the end
        });
        // end of hero  animation section

    

        gsap.fromTo(".inner-hero-img .img", { 
             rotation: '-100%' ,
            }, 
        { scrollTrigger: {trigger: ".inner-hero-img .img", scrub: 1, start: "20% bottom", end: "80% top"},
          rotation: '100%' , perspective: 500, duration: 5,repeat:-1,yoyo:true,});


    //   back-to-the-top button 
            const { backButton } = this.$refs;
            window.addEventListener('scroll', this.handleScroll);

            gsap.to(backButton, {
            opacity: 0,
            y: 20,
            display: 'none',
            });


            await this.fetchProject()
           
     
    },
    
    created() {
            this.pinia = useStore();
    },


    destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
     },

    methods:{

        async fetchProject(){

            try{
                const data = await fetch('https://pma.inhouse.codes/api/projects',{
                    method:'GET',
                    headers: { 'Content-Type': 'application/json' },

                }).then(res => res.json());

                if(data.data){
                    this.pinia.setProjects(data.data)
                    console.log('data',data.data)
                }


            }catch(e){
                console.log('error:',e)

            }

        },
      
        
        handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (scrollTop >= 2200) {
                gsap.to(this.$refs.backButton, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                display: 'block',
                ease: 'power2.out',
                });
            } else {
                gsap.to(this.$refs.backButton, {
                opacity: 0,
                y: 20,
                duration: 0.2,
                display: 'none',
                ease: 'power2.in',
                });
            }
        },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      
    }
}

</script>



<style scoped>
.stagger{
    opacity:0
}
.hero{
    background:  #0275b2;
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
    min-width: 640px;
    max-height: 853px;
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



@media (max-width: 960px) { /* xs breakpoint */
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
    top: 20px;
    left: 0;
    max-width: 460px;
    min-height: 500px;
    min-width: 0;
}
.hero-img .img1{
    /* max-width: 472px; */
    width: 100%;
    height: 100%;
    top: 20px;
    left: -38px;
}
.inner-hero-img{
    top: -40px;
    left: 30px ;
    width: 65px;
    height: 65px;
}

 .social-icons{
    display:none;
 }

 .hero-title p{
    margin: 14px 0px !important;
 }

 .marquee-container {
  min-height: 20px;

  .marquee {
    margin-top: 10px;
    font-size: 18px !important;
  }

 
  .span {
    padding-left: 10px;
  }
}

}

@media (max-width: 500px) {
    .marquee-container {
  min-height: 50px !important;
  display: flex;
  margin-top: 20px;

  .marquee {
    margin-top: 10px !important;
    font-size: 22px !important;
   
  }

 
  .marquee div{
    /* display: none; */
    margin-left: 10px !important;
}
 
}

    
}

@media (min-width: 960px) { /* md breakpoint */
  .my-text {
    font-size: 120px;
    font-weight: 700;
    letter-spacing: 3px;
  }
}



.back-to-top-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color:  #0275b2;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  display: none;
  height: 50px;
  width: 50px;
  align-items: center;
  z-index: 99;

}

.back-to-top-button:hover {
  background-color:  #0275b2 hover shade;
}

.back-to-top-button svg {
  width: 100%;
  height: 100%;
}



.marquee-container {
  overflow: hidden;
  line-height: 30px;
  min-height: 100px;

  .marquee {
    margin-top: 30px;
    top: 0;
    left: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    animation: marquee 30s linear infinite;
    font-size: 40px;
        color: #0275b2;
        font-weight: 700;
  }

  .marquee2 {
    animation-delay: 15s;
  }
  b {
    padding-left: 10px;
  }
}

@keyframes marquee {
  0% {
    left: -100%;
  }
  100% {
    left: 100%
  }
}
</style>