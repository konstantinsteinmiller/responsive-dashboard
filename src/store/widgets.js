import DashboardAPI from '../api/DashboardAPI'
const types = {
    SET_LOADING_STATE: 'SET_LOADING_STATE',
    SET_DASHBOARD_DATA: 'SET_DASHBOARD_DATA',
};

export default {
    namespaced: true,
    state: {
        loading: true,
        widgets: {
            transactions: {
                value: null
            },
            weather: {
                value: null,
            },
            responsiveness: {
                value: null,
            },
            events: {
                value: null
            },
            hits: {
                value: null
            },
            convertion: {
                value: null
            },
            jsFrameworks: {
                range: null,
                values: null,
                labels: null
            },
            topWines: {
                range: null,
                values: null,
                labels: null
            },
            map3D: {
                // not needed in this tutorial
            }
        }
    },
    getters: {
        isLoading: state => state.loading,
        transactions: state => state.widgets.transactions,
        convertion: state => state.widgets.convertion,
        hits: state => state.widgets.hits,
        events: state => state.widgets.events,
        responsiveness: state => state.widgets.responsiveness,
        weather: state => state.widgets.weather,
        jsFrameworks: state => state.widgets.jsFrameworks,
        topWines: state => state.widgets.topWines,
    },
    actions: {
        loadDashboardData: ({ commit }) => {
            commit(types.SET_LOADING_STATE, true);
            DashboardAPI.loadDashboardData().then(response => {
                const {data} = response;
                commit(types.SET_DASHBOARD_DATA, data);
                commit(types.SET_LOADING_STATE, false)
            })
        }
    },
    mutations: {
        [types.SET_LOADING_STATE] (state, value) {
            state.loading = value
        },
        [types.SET_DASHBOARD_DATA] (state, {widgets}) {
            // Metrics
            state.widgets.transactions.value = widgets.transactions
            state.widgets.weather.value = widgets.weather
            state.widgets.responsiveness.value = widgets.responsiveness
            state.widgets.events.value = widgets.events
            state.widgets.hits.value = widgets.hits
            state.widgets.convertion.value = widgets.convertion
            // SVG Charts
            state.widgets.jsFrameworks.range = widgets.jsFrameworks.range
            state.widgets.jsFrameworks.values = widgets.jsFrameworks.values
            state.widgets.jsFrameworks.labels = widgets.jsFrameworks.labels
            state.widgets.topWines.range = widgets.topWines.range
            state.widgets.topWines.values = widgets.topWines.values
            state.widgets.topWines.labels = widgets.topWines.labels
        }
    }
}