
<template>

    <div class="contact" style="width: 100%;background: #025945;">

            <v-img class="contact-img"  src="/contact-img/contact1.png"/>
            <h3 class="text-center contact-text">Let’s Discuss Your Project</h3>
    </div>


</template>



<style>

.contact{
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

     .contact-text{
        font-size: 50px;
        top: -50px;
     }
}

</style>