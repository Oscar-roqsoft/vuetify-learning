<template>
    <v-container class="my-md-14 my-6">

        <h1 class="about-heading"> PROJECT ROADMAP</h1>
        <p  class="about-p my-4" Style="color: #666666;">
            Discover our process below and see how we transform your ideas into reality, one step at a time.       
         </p>

        <div class="d-flex flex-row flex-wrap ga-5">

            <div v-for="item in card_lists" >
                <v-card elevation="2" class="mx-auto pt-4 pb-8 px-6 my-4 rounded-lg" max-width="570" height="100%">
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
    
                       <div class="py-4" style="font-size: 40px; font-weight:600; line-height: 54px;">
                           {{ item.title }}
                        </div>
    
                        <!-- <div class="d-block  align-center flex-wrap flex-md-nowrap  gap-4">
                       
                        </div> -->
                        <div style="font-size:13px; color: #666666; text-align: left;">
                            {{ item.text }}
                        </div>

                        <v-btn :to="`about/${item.title}`" height="45px" class="btn text-capitalize mt-6 px-6" elevation="1" color="#0275b2">
                            See More
                        </v-btn>
    
    
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
                {id:'01', img:'/about-img/frame10.png', title:'Product Demo', text:' At Inhouse.codes, we create a functional, small-scale version of the software to give you a clear idea of what the final product will look like. This demo includes basic features and user interfaces, allowing you to test it, provide feedback, and ensure it aligns with your vision. This process helps minimize risks, improves collaboration, and ensures smooth development moving forward'},

                {id:'02', img:'/about-img/frame20.png', title:' Product Design & Development', text:'We bring your product vision to life with our end-to-end product development capabilities, including front-end and back-end development, database design, API integration, and infrastructure setup. We work with a wide range of programming languages and technologies, depending on the nature of the projects we undertake.'},

                {id:'03', img:'/about-img/frame30.png', title:'Quality Assurance & Software Testing', text:'We also ensure the software is functional, bug-free, and optimized for performance through rigorous testing. '},

                {id:'04', img:'/about-img/frame40.png', title:' Maintenance and Support',text:'At Inhouse.codes, we offer ongoing support, updates, and maintenance to ensure your software runs smoothly over time. We also provide comprehensive maintenance, bug fixing, performance optimization, feature enhancements, and technical support. '},
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