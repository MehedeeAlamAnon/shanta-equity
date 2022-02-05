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
              DP (Depository Participant):
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph'>
                As a full service Depository Participant of CDBL (Central Depository of Bangladesh
                Limited), Shanta Securities Limited provides the following services:
              </p>
              <ul class='list-group concern-text-features '>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Account Opening</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Dematerialization</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Rematerialization</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Transfer & Transmission</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Change of Ownership</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Pledge & unpledge</span>
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
  name: 'DP',
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
