<template>
    <v-container class="my-md-14 my-6">

        <h1 class="about-heading">How our Design Process Works</h1>
        <p  class="about-p my-4" Style="color: #666666;">
            Our approach to design is simple yet thorough. We combine creativity with strategy to deliver impactful results. Explore our process below to see how we bring your ideas to life, step by step.        </p>

        <div class="d-flex flex-row flex-wrap ga-5">

            <div v-for="item in card_lists" >
                <v-card elevation="2" class="mx-auto pt-4 pb-8 px-6 my-4 rounded-lg" max-width="570">
                        <div class="pb-2" style="font-size: 32px; font-weight:600; color:gray">
                           {{ item.id }}
                        </div>
    
                        <v-img loading eager
                        class="align-end text-white rounded-lg"
                        max-height="330px"
                        max-width="510px"
                        :src="item.img"
                        cover
                        >
                       </v-img>
    
                       <div class="py-2" style="font-size: 40px; font-weight:600;">
                           {{ item.title }}
                        </div>
    
                        <div class="d-flex  align-center flex-wrap flex-md-nowrap  ga-6">
                       
                                <div style="font-size:13px; color: #666666">
                                    {{ item.text }}
                                </div>
    
                                <v-btn :to="`about/${item.title}`" height="45px" class="btn text-capitalize px-6" elevation="1" color="#0275b2">
                                    See More
                                </v-btn>
                        </div>
    
    
                </v-card>
            </div>
        </div>

    </v-container>
</template>

<script>

export default{
    data(){
        return{
            card_lists:[
                {id:'01', img:'/about-img/Rectangle1.png', title:'Discovery', text:' We take the time to understand your business, audience, and goals. Through in-depth research and discussions, we gather the insights needed to create a design that truly reflects your brand’s vision.'},

                {id:'02', img:'/about-img/Rectangle2.png', title:'Strategy', text:'In the Strategy phase, we turn insights into a clear plan of action. We define the design direction, setting goals and outlining how the visuals and functionality will align with your brand’s objectives to ensure impactful results.'},

                {id:'03', img:'/about-img/Rectangle3.png', title:'Design', text:'The Design phase is where creativity takes center stage. We bring the vision to life with thoughtful layouts, striking visuals, and user-friendly interfaces that not only look great but also deliver a seamless experience.'},

                {id:'04', img:'/about-img/Rectangle4.png', title:'Development',text:'In the Development phase, our ideas become reality. We translate the designs into fully functional, responsive, and optimized digital solutions, ensuring everything works smoothly across all devices and platforms.'},
            ],
        }
    }
}

</script>

<style scoped>

.about-heading{
    max-width:60%;
    font-size: 60px;
    line-height:1.2;
    letter-spacing:2px;
}
.about-p{
    max-width:50%;
    font-size:14px;
    color:#666666 !important,
}

/* .btn{
    max-height:53px;
    padding: 15px 35px 15px 35px !important;
} */

@media (max-width: 768px) { /* md breakpoint */
    .about-heading{
        max-width:100%;
        font-size: 41px;
        font-weight: 700px;
    } 
    .about-p{
    max-width:100%;
}
}
</style>