import * as types from './types'
export const actions = {
  //list代表要添加的内容
  [types.ADD_PLAN]({commit},list){
    let plan = {
      avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=958555937,293602035&fm=27&gp=0.jpg',
      name: 'handsome boy',
      ...list
    };
    commit(types.ADD_PLAN,plan)
  },
  [types.ADD_TIME]({commit},n){
    commit(types.ADD_TIME,n)
  },
  //减少总时间
  [types.DECRMENT_TOTALTIME]({commit},n){
    commit(types.DECRMENT_TOTALTIME,n)
  },
  //删除计划
  [types.REMOVE_PLAN]({commit},list){
    commit(types.REMOVE_PLAN,list)
  }
};
