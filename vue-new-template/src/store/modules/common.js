import db from "@/utils/localstorage";

const state = {
  test: db.get("test") || 8888
}

const mutations = {
  SET_TEST(state, val) {
    state.test = val
    db.save("test", val)
  }
}

const actions = {
  setTest: ({ commit }, arg) => {
    commit("SET_TEST", arg)
  }
}

export default {
  state,
  mutations,
  actions
}