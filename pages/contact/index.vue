<template>

    <div transition="slide-x-transition">
        
        <v-container>
            <div class="mt-14" style="height: 200px; 
            display: flex; flex-direction: column; justify-content: center; align-items: center; ">
                <div style="font-size: 40px; font-weight: 700;color:  #0275b2; ">
                    Contact Us
                </div>
                <p style="font-size: 16px; color: #666666;">Any question or remarks? Just write us a message!</p>
            </div>
            <v-card elevation="0" class="">

                <v-row>
    
                    <v-col cols="md-4" sm="12" lg="4">
                        <v-card  elevation="0" class="px-4 pt-6" style="background:  #0275b2;color:white; min-height: 500px;">
                            <div class="d-flex flex-column justify-space-between">
                                <div>
                                    <h2 style="font-size: 28px; font-weight: 600;">Contact Information</h2>
                                    <p style="font-size: 14px; color: #d5d3d3">Say something to start a live chat!</p>
                                </div>
                                <div class="my-14 " >
                                   <div class="my-4 d-flex" v-for="i in contacts">
                                        <div class="d-flex justify-center ">
    
                                            <span>
                                                <v-icon>mdi-{{ i.icon }}</v-icon>
                                            </span>
                                            <span class="mx-6" style="font-size: 16px;">{{ i.value }}</span>
                                        </div>
                                   </div>
                                </div>
                                <div class="d-flex flex-column justify-end ">
                                    <div class="d-flex justify-space-between align-center  mx-6 mt-8">
                                     


                                    <a href="https://www.linkedin.com/company/inhouse-codes-llc/" target="_blank">
                                            <v-btn size="40" elevation="0" class="rounded-lg"  style=" background: white;" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill=" #0275b2" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
    
                                            </v-btn>
                                    </a>

                                    <a href="https://www.facebook.com/profile.php?id=61566931382177&mibextid=ZbWKwL" target="_blank">
                                        <v-btn elevation="0" class="rounded-lg" size="40" style=" background: white;" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill=" #0275b2" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
    
                                        </v-btn>
                                    </a>

                                    <!-- <v-btn elevation="0" class="rounded-lg"  style="width: 50px; height: 50px; background: #1c1c1c;" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="white" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"/></svg>
                                        
                                    </v-btn> -->
                                    
                                    <a href="https://x.com/inhouse_codesHQ" target="_blank">
                                        
                                        <v-btn elevation="0" class="rounded-lg"  size="40" style=" background: white;" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill=" #0275b2" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                                        </v-btn>
                                    </a>

                                    <a href="https://www.instagram.com/inhouse.codes/" target="_blank">

                                        <v-btn elevation="0" class="rounded-lg"  size="40" style=" background: white;" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill=" #0275b2" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
                                        </v-btn>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
    
    
                    <v-col >
                           <contact-form/>
                    </v-col>

                   
    
    
                </v-row>
            </v-card>


            <v-divider class="mt-6"></v-divider>
        </v-container>
    </div>
</template>


<script>

export default{
    data(){
        return{
            contacts:[
                {
                    id:1, 
                    value:'+234 704 210 0733',
                    icon:'phone'

                },

                {
                    id:2, 
                    value:'inhouse2023.codes@gmail.com',
                     icon: 'email',

                },
                {
                    id:3, 
                    value:`Holyghost junction,Okpuno Awka,Anambra State`,
                    icon: 'map-marker',
                },
            ]
        }
    }
}
</script>


<style></style>