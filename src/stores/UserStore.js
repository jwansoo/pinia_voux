import {defineStore} from 'pinia'
export const useUserStore=defineStore('UserStore', {
  state:()=>({
    user:'wansoo jang'
  }),
  getters:{
    firstName:state=>state.user.split(' ')[0]
  }
  
  
})