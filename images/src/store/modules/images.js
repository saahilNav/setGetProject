import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []

};
const getters = {
    allImages: state => state.images

};

const actions = {

    async  fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        let response = await api.fetchImages(token);

        commit('setImages', response.data.data);
        console.log("fetch response", response)
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await api.uploadImages(images, token);
        router.push('/');
    }
};
const mutations = {
    setImages: (state, images) => {
        state.images = images
    }

};
export default {
    state,
    getters,
    actions,
    mutations
};