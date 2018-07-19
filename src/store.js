import Vue from 'vue'
import Vuex from 'vuex'
import widgets from './store/widgets'
import ui from './store/ui'
import {throttle} from 'lodash'

Vue.use(Vuex)
let store = new Vuex.Store({
    namespaced: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        ui,
        widgets
    }
})

const handleResize = throttle(() => {
    let size = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    store.dispatch('ui/windowUpdateSize', size)
    // store.commit('ui/WINDOW_UPDATE_SIZE', {size})
}, 150)

handleResize()
window.addEventListener('resize', handleResize)

export default store;