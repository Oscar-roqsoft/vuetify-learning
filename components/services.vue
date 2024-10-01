
<template>

    <v-container class="my-10">
        <v-row class="">
             
            <v-col cols="md-6" sm="12" lg="6">
                <h1  style="font-size:60px; line-height: 1.2;" class="text-capitalize">Service We provide</h1>
                <v-expansion-panels    variant="accordion">
                    <v-expansion-panel
                        v-for="i in our_services"
                        style="font-size:16px;"
                        elevation="0"
                        class="py-3"
                        :key="i.id"
                        :title="i.title"
                        :text="i.text"
                    ></v-expansion-panel>
                </v-expansion-panels>

                <v-btn style="color:white; background:  #0275b2; height:50px" class="my-3 text-capitalize">view all services</v-btn>
            </v-col>

            <v-col cols="md-6" sm="12" lg="6">
                <div class="d-flex justify-md-end">
                    <v-img eager
                       max-width="470px"
                       src="/services-img/img1.png"
                    />
                </div>
            </v-col>

        </v-row>

    </v-container>

</template>



<script>

export default{
    data(){
        return{
            our_services :[
                {id:1, title:'UI/UX Design', text:'Our UI/UX Design services focus on creating intuitive and engaging user experiences. We blend aesthetics with functionality to design interfaces that are not only visually appealing but also easy to navigate, ensuring users enjoy a seamless interaction with your brand.'},
                {id:2, title:'Web Development', text:'Our Web Development services bring your vision to life with robust, scalable, and high-performing websites. We leverage the latest technologies and best practices to create custom solutions tailored to your business needs, ensuring a smooth user experience across all devices.'},
                {id:3, title:'Software Development', text:'Our Software Development services provide tailored solutions that meet your unique business requirements. We specialize in creating scalable, efficient, and user-friendly software applications, harnessing the latest technologies to enhance productivity and streamline operations.'},
                {id:4, title:'Graphics Design', text:'Our Graphic Design services focus on crafting visually striking and cohesive brand identities. From logos to marketing materials, we create compelling designs that communicate your message effectively and resonate with your audience.'},
                {id:5, title:'Digital Marketing', text:'Our Digital Marketing services are designed to elevate your online presence and drive engagement. We employ a mix of SEO, content marketing, social media, and targeted campaigns to connect with your audience, increase visibility, and achieve your business goals.'},
                {id:6, title:'Seo', text:"Our SEO services are focused on enhancing your website's visibility on search engines. We implement strategic techniques to optimize your content, improve site performance, and increase organic traffic, helping you reach your target audience effectively."}
            ]
        }
    }
}
</script>