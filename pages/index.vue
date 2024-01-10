<template>

    <div transition="slide-x-transition">
        
        <div id="home" class="main" style=" min-height: 100vh;">
    
            <div class="hero" style=" height: 98vh;">
    
                
                 
                <!-- start of hero section -->
                <v-container  style="color: white; padding-top: 5.8rem;">
                 
                     
                         <div class="hero-content">
                             <div class="hero-title mt-md-4">
                                 <h3 class="my-text stagger" style=" z-index: 10; line-height: 1.0;">We Are <br> Creative <br> Design Agency</h3>
                                  <p  class="my-10 hero-p stagger" style="color: #fffff; font-size: 14px;">Lorem Ipsum is simply dummy text of the printing and 
                                     typesetting industry. Lorem Ipsum issimply dummy text of the printing and typesetting.
                                 </p>
     
    
                                <v-btn  class="text-capitalize stagger" style="color: #025945; min-height: 50px; font-size: 15px; font-weight: 500;">
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
        
        
        <div class="  mt-md-14 border py-4">
              <div class="slides">
                  <span class="span">SEO</span>
                  <div class="span" style="height: 5px; width: 10px; background: #025945;"></div>
                  <span class="span">GRAPHIC DESIGN</span>
                  <div class="span" style="height: 5px; width: 10px; background: #025945;"></div>
                  <span class="span">UI DESIGN</span>
                  <div class="span" style="height: 5px; width: 10px; background: #025945;"></div>
                  <span class="span">DIGITAL MARKETING</span>
                  <!-- <div class="span" style="height: 5px; width: 10px; background: #025945;"></div> -->
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
    </div>
     

        

       
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
export default {
//     pageTransition: {
//     name: 'fade', // Choose a transition name
//     mode: 'out-in',   // Specify transition mode
//   },
   
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
        // hero section animations
        const textElements = document.querySelectorAll('.hero-title .stagger');
        gsap.fromTo(textElements, {
            duration: 3,
            opacity: 0,
            x: -200, // Adjust initial offset as needed
            // stagger: 0.1, // Stagger each animation by 0.2 seconds
            ease: 'linear', // Use a natural easing function
        }, {
            opacity: 1,
            x: 0,
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



        gsap.utils.toArray('.slides').forEach((line, i) => {
  
            const speed = 50 // (in pixels per second)
            
            const links = line.querySelectorAll(".span"),
                    tl = this.verticalLoop(links, i ? -speed : speed)
                
            links.forEach(link => {
                link.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
                link.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: 1, overwrite: true}));
            });
            
        });

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
           
     
    },


    destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
     },

    methods:{
        verticalLoop(elements, speed) {
            elements = gsap.utils.toArray(elements);
            let firstBounds = elements[0].getBoundingClientRect(),
                lastBounds = elements[elements.length - 1].getBoundingClientRect(),
                left = firstBounds.left - firstBounds.right - Math.abs(elements[1].getBoundingClientRect().left - firstBounds.right),
                right = lastBounds.right,
                distance = right - left,
                duration = Math.abs(distance / speed),
                tl = gsap.timeline({repeat: -1}),
                plus = speed < 0 ? "-=" : "+=",
                minus = speed < 0 ? "+=" : "-=";
            elements.forEach(el => {
                let bounds = el.getBoundingClientRect(),
                    ratio = Math.abs((right - bounds.left) / distance);
                if (speed < 1) {
                ratio = 1 - ratio;
                }
                tl.to(el, {
                x: plus + distance * ratio,
                duration: duration * ratio,
                ease: "none"
                }, 0);
                tl.fromTo(el, {
                x: minus + distance
                }, {
                x: plus + (1 - ratio) * distance,
                ease: "none",
                duration: (1 - ratio) * duration,
                immediateRender: false
                }, duration * ratio)
            });
            return tl;
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
    min-width: 653px;
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
    width: 100%;
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

 .slides{
    overflow-x: hidden; /* Enable horizontal scrolling */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
    font-size: larger;
    max-width: none;
    margin: 0;
    padding: 0;
    will-change: transform;



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



.back-to-top-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: #025945;
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
  background-color: #025945 hover shade;
}

.back-to-top-button svg {
  width: 100%;
  height: 100%;
}

</style>