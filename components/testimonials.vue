<template>

    <v-container class="my-6" >
        <v-row>
            <v-col cols="md-6" sm="12" style="min-height: 600px;overflow: hidden;">

                <h1 class="test-title"> Our Client Says</h1>
                <p class="test-subtitle">What our clients have to say about working with us

                </p>
                
                <div v-for="i in testimonial_images"   style="position: relative; "
                >
                    <div :style="`position:absolute; top: ${i.top}px; left: ${i.left}px ; width: 110px; height:98px `">
                        <v-img class="absolute" width="100%"  :src="i.img"/>
                    </div>
                </div>
                
            </v-col>


            <v-col class="ga-5" cols="md-6" sm="12">
                <div>
                    <v-img eager max-width="183px" class="img-vector" src="/testimonial-img/Vector1.png"/>
                </div>
                
                <div>
                   
                    <Carousel ref="carousel" v-model="currentSlide" :autoplay="3000" :wrap-around="true">

                            <Slide v-for="slide in 3" :key="slide">
                            <!-- <div class="carousel__item">{{ slide }}</div> -->
                                   <v-col class="text-start">

                                       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="38" viewBox="0 0 24 24"><path fill="#0275b2" 
                                           d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10"/>
                                       </svg>
                                       <h3 class="test-heading" style="font-size: 24px; width: 60%">Save Time Managing Social Media For Your Business</h3>
                                       <p class="my-4" style="font-size: 14px; color: #666666;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       </p>

                                        <div class="d-flex">
                                           <div v-for="i in 5" class="mr-2 mb-4" style="height: 20px; width: 20px; ">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                                <path fill="#0275b2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                                           </div>
                                        </div>

                                        <h4 style="font-size: 20px;">Alfonzo Block</h4>
                                        <span style="font-size: 14px; color: rgb(87, 86, 86);">Head of Digital at UX Sola</span>

                                   </v-col>
    
                            </Slide>

                     </Carousel>
                        <v-col>
                            <div>
                                <v-btn icon class="rounded" elevation="1" @click="prev">
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn class="mx-2 rounded" icon @click="next" color="#0275b2">
                                        <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </div>
                        </v-col>

                    


                </div>

            </v-col>

        </v-row>
    </v-container>

</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


export default{
    components: {
    Carousel,
    Slide,
    Navigation,
    },
    data(){
        return{
            currentSlide:0,
            testimonial_images:[
                {id:1, img:'/testimonial-img/Group1.png', top:0, left: 0},
                {id:2, img:'/testimonial-img/Group2.png', top:10, left: 190},
                {id:3, img:'/testimonial-img/Group3.png', top:2, left: 450},
                {id:4, img:'/testimonial-img/Group4.png', top:72, left: 400},
                {id:5, img:'/testimonial-img/Group5.png', top:110, left: 285},
                {id:6, img:'/testimonial-img/Group6.png', top:90, left: 15},
                {id:7, img:'/testimonial-img/Group7.png', top:210, left: 0},
                {id:8, img:'/testimonial-img/Group8.png', top:150, left: 120},
                {id:9, img:'/testimonial-img/Group9.png', top:214, left: 220},
                {id:10, img:'/testimonial-img/Group10.png', top:243, left: 460},
            ]
        }
    },

    methods:{
        prev(){
          this.currentSlide --
        },
        next(){
          this.currentSlide ++
        },
    }
}
</script>



<style scoped>

.test-title{
    font-size:60px;
    line-height:1.2;
}

.test-subtitle{
    font-size: 14px;
    color: #666666;
}

@media (max-width: 960px) { /* md breakpoint */

   .test-title{
    font-size:50px;
   }
   .img-vector{
    max-width: 60% !important;
   }
   .test-heading{
    width: 100% !important;
   }
}

</style>