const state = {
    name:'yh',
    age:18
}

const actions ={
    changeName({commit},data){
        commit('setNmae',data.data)
    }
}
const mutations ={
    getName:state=>{
        console.log(`myname is ${state,name}`)
    },
    setNmae:(state,name)=>{
        state.name = name;
        console.log(`updata name is ${state.name}`)
    }
}   
export default {
    namespaced: true,
    state,
    actions,
    mutations
}