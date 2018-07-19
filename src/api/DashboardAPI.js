import axios from 'axios'
export default class DashboardAPI {
    static loadDashboardData () {
        return axios.get('./assets/dashboard-data.json')
    }
}