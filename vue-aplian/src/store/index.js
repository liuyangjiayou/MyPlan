import Vue from 'vue'
import Vuex from 'vuex'
import {getStorage} from './local';
Vue.use(Vuex);
//默认应该将storage的数据赋予state
const state = getStorage() || {
  totalTime : 0, //总时间
  lists : [], //每个计划的数据
};
import {actions} from './actions'
import {mutations} from './mutations'
import {getters} from './getters'
export const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
