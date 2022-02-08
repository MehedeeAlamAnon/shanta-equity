// state
export const state = () => ({
  megaMenuOpen: false
})

// actions
export const actions = {
  changeMegaMenu({commit}) {
    commit('setMegaMenu')
  },
  openMegaMenu({commit}) {
    commit('openMenu')
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
  openMenu(state) {
    state.megaMenuOpen = true
  },
  closeMenu(state) {
    state.megaMenuOpen = false
  }
}
