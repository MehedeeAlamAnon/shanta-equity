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
              Who We Are
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph'>
                Shanta Securities Limited is an innovative financial services company offering a range of brokerage and investing solutions.
              </p>
              <p class='concern-paragraph'>
                We believe in being committed to going the extra mile for our customers and using our intuitive research to help clients take informed investing decisions.
                To continuously improve our clients’ trading and investing experiences, we rely on their input, integrating what they need into our trading tools and services.
              </p>
              <p class='concern-paragraph'>
                We aim at deepening clients’ relationship by striving to help clients take control of their investments and finances, while providing relentless services and
                maintaining high ethical standards. We have a clear purpose, and we have adapted our business practices to commensurate with such.
              </p>
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
import LeftSidebar from '../../components/corporate-profile/LeftSidebar'

export default {
  name: 'WhoWeAre',
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
