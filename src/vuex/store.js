import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({})

store.registerModule('vux', {
    state: {
        hospitalInfo: "",
        frindUrl: "",
        helpList: "",
        slideShow: "",
        text: '确定要删除么？',
        ifNav: true
    },
    mutations: {
        updateHospitalInfo(state, payload) {
            state.hospitalInfo = payload.hospitalInfo
        },
        updateFrindUrl(state, payload) {
            state.frindUrl = payload.frindUrl
        },
        updateHelpList(state, payload) {
            state.helpList = payload.helpList
        },
        updateSlideShow(state, payload) {
            state.slideShow = payload.slideShow
        },
        updatemodal(state, payload) {
            state.text = payload.text
        },
        updateifNav(state, payload) {
            state.ifNav = payload
        },
    }
})

export default store