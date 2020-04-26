import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'

export default {
  namespaced: false,
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions,
  mutations
}
