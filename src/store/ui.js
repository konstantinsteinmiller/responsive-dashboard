const types = {
    WINDOW_UPDATE_SIZE: 'WINDOW_UPDATE_SIZE',
};

export default {
    namespaced: true,
    state: {
        window: {
            width: 1,
            height: 1
        },
        colors: {
            a: {
                bg: '#011e2b', // '#ff36a2',
                fg: '#ffffff'
            },
            b: {
                bg: '#ff36a2', // '#ffe803',
                fg: '#030303'
            }
        }
    },
    getters: {
        windowWidth: state => state.window.width,
        windowHeight: state => state.window.height,
        colorA: state => state.colors.a,
        colorB: state => state.colors.b
    },
    actions: {
        windowUpdateSize: ({ commit }, size) => {
            commit(types.WINDOW_UPDATE_SIZE, { size })
        }
    },
    mutations: {
        [types.WINDOW_UPDATE_SIZE] (state, { size }) {
            state.window.width = size.width || state.window.width
            state.window.height = size.height || state.window.height
        }
    }
}