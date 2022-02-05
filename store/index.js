// state
export const state = () => ({
  megaMenuOpen: false
})

// actions
export const actions = {
  changeMegaMenu({commit}) {
    commit('setMegaMenu')
  },
  closeMegaMenu({commit}) {
    commit('closeMenu')
  },
}

// mutations
export const mutations = {
  setMegaMenu(state) {
    state.megaMenuOpen = !state.megaMenuOpen
  },
  closeMenu(state) {
    state.megaMenuOpen = false
  }
}
