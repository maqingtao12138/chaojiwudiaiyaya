import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //data
  state: {
    commodityList: [{
      id:"1",
      name: "窝窝头一块钱四个",
      Price: 0.25,
      num: 0
    }, {
      id:"2",
      name: "谁TM买小米",
      Price: 2.0,
      num: 0
    }, {
      id:"3",
      name: "妈妈我想吃烤山药",
      Price: 10.0,
      num: 0
    }, {
      id:"4",
      name: "苹果贱卖",
      Price: 3.0,
      num: 0
    }, {
      id:"5",
      name: "枸杞炒韭菜",
      Price: 29.9,
      num: 0
    }, {
      id:"6",
      name: "你的半壁江山",
      Price: 59.9,
      num: 0
    }, ]
  },
  getters: {
    selectedItemss(state){
      return state.commodityList.filter((e) => e.num > 0);
    }
  },
  //方法
  mutations: {
    updata(state, e) {
      const {
        index,
        operation
      } = e;
      if (operation == -1 && state.commodityList[index].num == 0) {
        return;
      } else {
        state.commodityList[index].num += operation;
        console.log(state.commodityList[e.index].num)
      }
    },
    cleat(state, e){
      state.commodityList.forEach((item)=>{
        if(item.id==e) item.num=0;
      })
    }
  },
  //异步方法
  actions: {},
  //模块
  modules: {}
})
