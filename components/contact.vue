
<template>

    <div class="contact" style="width: 100%;background:  #0275b2;">

            <v-img class="contact-img"  src="/contact-img/contact11.png"/>
            <div class="img2-container">
                <v-img class="img" max-width="147px" src="/contact-img/text.png"/>
                    <span class="svg" style="background: white;">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M24 1C24 0.447717 23.5523 2.00952e-06 23 4.07935e-07L14 1.20872e-06C13.4477 8.7155e-07 13 0.447716 13 1C13 1.55229 13.4477 2 14 2L22 2L22 10C22 10.5523 22.4477 11 23 11C23.5523 11 24 10.5523 24 10L24 1ZM1.70711 23.7071L23.7071 1.70711L22.2929 0.292894L0.292893 22.2929L1.70711 23.7071Z" fill=" #0275b2"/>
                        </svg>

                    </span>
            </div>
            <h3 class="text-center contact-text">Let’s Discuss Your Project</h3>

            
            
        </div>

       


</template>

<script>
import { gsap } from "gsap";
export default{
    data(){
        return{

        }
    },

    mounted(){
        gsap.fromTo(".img2-container .img", { 
             rotation: '-100%' ,
            }, 
        { scrollTrigger: {trigger: ".inner-hero-img .img", scrub: 1, start: "20% bottom", end: "80% top"},
          rotation: '100%' , perspective: 500, duration: 5,repeat:-1,yoyo:true,});


    }
}
</script>



<style>

.contact{
    position: relative;
    margin-top: 10rem;
    min-height: 350px !important;
}

.contact-img{
    position: relative;
    top: -150px;
    left: 0px;
    min-height: 300px !important;
    max-width: 1000px;
    margin: 0 auto;

}
.img2-container{
    position: absolute;
    width: 150px;
    top: 7rem;
    left: 45%;
}

.svg{
    position: relative;
    top: -7.1rem;
    left: 2rem;
    display: inline-flex;
    width: 82px;
    height: 82px;
    padding: 30px;
    border-radius: 9999px;
}

.svg svg{
    flex-shrink: 0;
    /* transform: rotate(-45deg); */
}
.contact-text{
    position: relative;
    top: -70px;
    font-size: 80px;
    font-weight: 600;
    color: white;
}

@media (max-width: 960px) { /* md breakpoint */
    .contact{
        min-height: 200px !important;
        margin-top: 5rem;
    }

     .contact-img{
            max-width: 100% !important;
            margin: 0 10px !important;
            min-height: 120px !important;
            top: -70px;
     }
     .img2-container{
        width: 75px;
        top: 1rem;
        left: 40%;
    }

    .svg{
        top: -3.6rem;
        left: 1rem;
        width: 42px;
        height: 42px;
        padding: 0px;
        justify-content: center;
        align-items: center;
    }
    .svg svg{
        width: 15px !important;
        height: 15px !important;
        flex-shrink: 0;
    /* transform: rotate(-45deg); */
}

     .contact-text{
        font-size: 45px;
        top: -30px;
     }
}

</style>