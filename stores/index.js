// import { defineStore } from 'pinia'


// export const useStore = defineStore('inhouse', () => {
//     const state = {
//         projects:[],
//     }


//     const setProjects = (payload)=>{
//         state.projects = payload
//     }

//     return { state,setProjects }
//   }, 
//   {persist: true},
// )


//   if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
//   }





  import { defineStore } from 'pinia'

export const useStore = defineStore('inhouse', () => {

  const state = reactive({
    projects:[],
    testimonial:[],
    current_page:'home',
    user: null,
    isAuthenticated: false,
    statistics:null,
    banners:[],
    selected_dispute_status:'all',
  });

    const setProjects = (payload)=>{
        state.projects = payload
    }
    const setTestimonial = (payload)=>{
        state.testimonial = payload
    }

  const setUser = (payload) => {
    state.user = payload
    state.isAuthenticated = true
  }

  const setStatistics = (payload) => {
    state.statistics = payload
  }

  const setBannersItem = (payload) => {
    state.banners = payload
  }
  const setCountries = (payload) => {
    state.countries = payload
  }
  const setFAQs = (payload) => {
    state.FAQs = payload
  }
 
 

  const clearUser =()=>{


  }

  return {
    setProjects,
    setTestimonial,
    state,
    
  }

}, {persist: {
    storage: persistedState.localStorage,
  }},
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}