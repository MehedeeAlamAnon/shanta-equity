// state
export const state = () => ({
  megaMenuOpen: false
})

// actions
export const actions = {
  changeMegaMenu({commit}) {
    commit('setMegaMenu')
  },
}

// mutations
export const mutations = {
  setMegaMenu(state) {
    state.megaMenuOpen = !state.megaMenuOpen
  },
}
