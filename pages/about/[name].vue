<template>
    
    <div class="main-hero" >
            <v-container>
                <div class="mt-14 hero" style="min-height: 450px; color: white; 
                display: flex; justify-content: center; align-items: center; font-weight: 700;">
                    About Us Details
                </div>
                
            </v-container>
        </div>
      

        <div class="breadcrumb">

            <v-col class="d-flex align-items justify-center">
                <v-card>
    
                    <v-breadcrumbs color=" #0275b2" :items="['Home','About-Us','About-Us details']">
                        <template v-slot:divider>
                            <v-icon icon="mdi-chevron-right"></v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-card>
            </v-col>
        </div>


        <v-container >

            <v-row class="mb-6 py-4">
                <v-col cols="md-6" sm="12" lg="6">
                    <v-img src="/about-img/Rectangle1.png"/>
                </v-col>
                <v-col cols="md-6" sm="12" lg="6">
                    <h1>Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quis reprehenderit quisquam quia. Est blanditiis molestiae repudiandae tempore iusto? Velit eum porro magnam, ad, minima est quisquam, repudiandae quia ullam quaerat culpa cupiditate vel aut. 
                        Quam tempore deserunt assumenda, numquam neque recusandae ea alias sequi quis cupiditate facere aut eos? <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, excepturi doloribus, officia adipisci temporibus consequuntur harum maxime aliquam iste vitae ex? Est ducimus ex, nulla debitis ab asperiores exercitationem eos eligendi quod earum amet fuga a. Rerum repudiandae eos at et voluptatibus commodi 
                        qui dignissimos fugiat vero, aliquam fuga vitae!
                    </p>
                </v-col>
            </v-row>

            <v-divider></v-divider>

        </v-container>

</template>


<style scoped>
.hero{
   font-size: 60px;
}

.main-hero{
    background: linear-gradient(to top, rgba(2, 89, 69, .7), rgba(2, 89, 69, .6)),url('/about-img/about-img.jpeg');
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
</style>