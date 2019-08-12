const getters = {
    sidebar: state => state.app.sidebar,
    demo: state =>{                     // 修改值state的值
       let name = state.app.demo;
       name.demo='杨辉真帅'
       return  name
    }, // 异步获取 store的值
    user:state =>{
       let token = state.user.token;
       if(token === ""){
          console.warn('没有token请登录')
       }else{
         // console.warn('不用登录',token)
         return token;
       }
      
    }
  }
  export default getters