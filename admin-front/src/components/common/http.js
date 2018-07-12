import Vue from 'vue';
import qs from 'qs';
import Config from '../projects/';
export default {
    getData(url, data, suc, fail, type) {
        var axios = Vue.prototype.$axios;
        type === 'get' ? (axios = axios.get(url, qs.stringify(data))) : (axios = axios.post(url, qs.stringify(data)));
        if (typeof suc === 'function') {
            axios = axios.then(msg => {
                suc({
                    status: msg.status,
                    data: msg.data
                })
            })
        } else {
            axios = axios.then(msg => {
                console.log('get data succ:', msg);
            })
        }
        if (typeof fail === 'function') {
            axios.catch(fail(error))
        } else {
            axios.catch((err) => {
                console.log('get data error', err);
            })
        }
    },
    proSetting: Config
}
