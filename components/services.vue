
<template>

    <v-container class="my-10">
        <v-row class="">
             
            <v-col cols="md-6" sm="12" lg="6">
                <h1  style="font-size:60px; line-height: 1.2;" class="text-capitalize">Services</h1>
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
                {id:1, title:'UI/UX Design', text:'UI/UX design is essential for creating engaging digital experiences. Our UI design focuses on visual aesthetics, including layout, color schemes, typography, and interactive elements, ensuring consistency and brand alignment. While our UX design involves user research, creating user personas, wireframing, and prototyping to understand user needs and behaviors. This process emphasizes usability testing and user feedback to refine the interface and enhance the overall user journey.'},
                {id:2, title:'Web Development', text:'Our Front-end developers create the visual components of a website that users interact with, utilizing HTML, CSS, and JavaScript frameworks like React or Angular. While our Back-end developers focus on server-side logic, database management, and API integration, often using languages such as Python, Ruby, or Node.js. This ensures that the platform is responsive, fast, and capable of handling user requests efficiently.'},
                {id:3, title:'Software Development', text:'This encompasses our entire software development lifecycle (SDLC), including requirements analysis, design, coding, testing, and deployment. Our team may use methods such as Agile or Scrum to ensure iterative progress and collaboration. We develop custom applications tailored to specific business needs, leveraging various programming languages and frameworks to deliver scalable, maintainable, and robust software solutions.'},
                // {id:4, title:'Graphics Design', text:'Our Graphic Design services focus on crafting visually striking and cohesive brand identities. From logos to marketing materials, we create compelling designs that communicate your message effectively and resonate with your audience.'},
                // {id:5, title:'Digital Marketing', text:'Our Digital Marketing services are designed to elevate your online presence and drive engagement. We employ a mix of SEO, content marketing, social media, and targeted campaigns to connect with your audience, increase visibility, and achieve your business goals.'},
                // {id:6, title:'Seo', text:"Our SEO services are focused on enhancing your website's visibility on search engines. We implement strategic techniques to optimize your content, improve site performance, and increase organic traffic, helping you reach your target audience effectively."}
            ]
        }
    }
}
</script>