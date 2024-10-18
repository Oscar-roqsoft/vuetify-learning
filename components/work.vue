
<template>

   <v-container class="my-6">
        <h1 class="work-heading">Our Work</h1>
        <p class="work-p">We create world-class software solutions to your needs and offer long-term support.
        </p>

        <div class="work-lists mb-2">
            <v-col v-for="item in filteredProjects.slice(0,2)">
                <v-row class="border-b py-6  work">

                    <v-col cols="md-6" sm="12" lg="6" :class=" item.id === 2? 'order-md-2':''" >
                        <v-img class="w-100 h-100" eager :src="item.featured_img" style="min-height: 250px;"/>
                    </v-col>

                    <v-col class="mt-4" cols="md-6" sm="12" lg="6">
                        <div class="work-subtitle mb-2">
                            <div  v-for="(i,index) in item.tags" :key="i" class="d-flex align-center">
 
                                <span>{{ i }}</span>
                                <div class="mx-3"  :class="index === 2 ? 'd-none':'d-block'"
                                style="height:2px; width:4px; background:  #0275b2;"></div>
                                
                                <!-- <span>Web Design</span>
                                <div class="mx-3" style="height:2px; width:4px; background:  #0275b2;"></div>
                                <span>Web Development</span> -->
                            </div>
                        </div>

                        <h6 class="work-title " style="font-size: 60px;">{{item.title}}</h6>
                        <p class="my-6 work-text" style="color: #666666; font-size: 14px;">
                            {{ item.description }}
                        </p>
                        <v-btn color="#0275b2" style="height:45px">Read More</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </div>

   </v-container>

</template>


<script>
import { gsap } from "gsap";
import {
  Notivue,
  Notification
} from 'notivue'


export default{
    data(){
        return{
            pinia:null,
            work_lists:[
                {
                    id:1, 
                    img:'/work-img/work1.png', 
                    tags:['Real Estate','Web Design','Web Development'], 
                    title:'Real Estate Web Site Design',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing.'
                },
                {
                    id:2, 
                    img:'/work-img/work2.png', 
                    tags:['NFT Website','Web Design','Web Development'], 
                    title:'NFT - For Digial Art Web Design',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing.'
                },
                {
                    id:3, 
                    img:'/work-img/work3.png', 
                    tags:['SAAS Website','Web Design','Web Development'], 
                    title:'SaaS - Landing Page Design',
                    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum dummy text of the printing.'
                },
            ]
        }
    },

    created() {
            // Access the pin value from the Pinia store and assign it to the local data property
            this.pinia = useStore();
    },

    computed: {
        filteredProjects() {
        return this.pinia.state.projects.filter((project) => project.featured_img !== null);
        },
    },

    mounted(){

        console.log(this.filteredProjects)

        const tl = gsap.timeline()

        tl.from('.work-lists .work',{
            scrollTrigger: {trigger: ".work-lists .work", start: "20% bottom", end: "80% top"},
            y: 100,
            delay:0.5,
            duration:3,
            autoAlpha: 0,
            stagger: 0.25,
            ease:'back.out(1.7)'
        })
    }
}

</script>


<style>

.work-heading{
    font-size: 60px;
    line-height: 1.2;
}
.work-p{
    margin-left:6px;
    width:50%;
    font-size: 13px;
    color: #666666;
}

.work-subtitle{
    display:flex;
    align-items: center;
    color: #666666;
    font-style: italic;
}
.work-title{
    line-height: 1.2;
}

@media (max-width: 768px) { /* md breakpoint */
    .work-heading{
    font-size: 50px;
    }
    .work-p{
    width:100%;
    margin-left:0px;
  }
  .work-title{
    font-size: 40px !important;
  }
}

</style>