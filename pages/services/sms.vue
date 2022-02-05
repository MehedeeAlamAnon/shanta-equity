<template>
  <div class="concern">
    <transition
      name="slide"
      enter-active-class="slideInDown"
      leave-active-class="slideOutUp"
    >
      <div class="mega-menu-wrapper" v-if='megaMenuShow' style="animation-duration: 0.5s">
        <MegaMenu />
      </div>
    </transition>

    <div class='hamburger-toggle'>
      <Hamburger/>
    </div>

    <main class="main concern-main">
      <LeftSidebar />
      <!-- sidebar end -->
      <div class="main-content vh-100">
        <div class='concern-content'>
          <div class="concern-content-overlay text-white px-30">
            <h2 class='title text-capitalize heading-6'>
              SMS:
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph'>
                Shanta Securities Limited provides the following SMS services:
              </p>
              <ul class='list-group concern-text-features '>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Investors can place buy/sell order through SMS</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Daily trade confirmation sent through SMS</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>SMS Alerts - BO account opening information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ConcernSmFooter />
      </div>
      <!-- main-content end -->
    </main>
  </div>
</template>

<script>
import MegaMenu from '~/components/MegaMenu'
import Logo from '~/components/Logo'

import {mapState} from 'vuex'
import Hamburger from '~/components/Hamburger'
import ConcernSidebarFooter from '../../components/ConcernSidebarFooter'
import ConcernSmFooter from '../../components/ConcernSmFooter'
import LeftSidebar from '../../components/services/LeftSidebar'

export default {
  name: 'SMS',
  components: {
    LeftSidebar,
    ConcernSmFooter,
    ConcernSidebarFooter,
    Hamburger,
    Logo,
    MegaMenu
  },
  computed: {
    ...mapState({ megaMenuShow: state => state.megaMenuOpen })
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped></style>
