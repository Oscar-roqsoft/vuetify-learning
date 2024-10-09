import { defineStore } from 'pinia'


export const useStore = defineStore('inhouse', () => {
    const state = {
        projects:[],
    }


    const setProjects = (payload)=>{
        state.projects = payload
    }

    return { state,setProjects }
  }, 
  {persist: true},
)


  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  }