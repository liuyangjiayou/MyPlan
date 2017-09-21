import * as types from './types'
import {setStorage} from './local'
export const mutations = {
  //state代表当前容器中的状态
  [types.ADD_PLAN](state,plan){
    state.lists.push(plan);
    setStorage(state);
  },
  //增减总时间
  [types.ADD_TIME](state,n){
    state.totalTime += n;
    setStorage(state);
  },
  //删除总时间
  [types.REMOVE_PLAN](state,list){
    state.lists = state.lists.filter(item=>{
      return item != list;
    });
    setStorage(state);
  },
  //减少总时间
  [types.DECRMENT_TOTALTIME](state,n){
    state.totalTime -= n;
    setStorage(state);
  }
};
