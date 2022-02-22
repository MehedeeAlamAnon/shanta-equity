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
              The Vision & Mission
            </h2>
            <div class='concern-text'>
              <h5 class='concern-text-title'>Vision</h5>
              <p class='concern-paragraph'>
                To set SEL as an icon for both clients and competitors in the fields of innovation,
                product quality, service standard, profitability and community work.
              </p>
              <h5 class='concern-text-title'>Mission For Our Clients:</h5>
              <p class='concern-paragraph'>
                To become a partner in our clients’ financial success, while providing unwavering
                services and maintaining high moral conduct
              </p>
              <h5 class='concern-text-title'>For Our Investors:</h5>
              <p class='concern-paragraph'>
                To continuously enhance business capabilities in order to deliver sustainable return on
                investment
              </p>
              <h5 class='concern-text-title'>For Our regulators:</h5>
              <p class='concern-paragraph'>
                To be a model of compliance and conformity to established laws and regulations
              </p>
              <h5 class='concern-text-title'>For Our Employees:</h5>
              <p class='concern-paragraph'>
                To make employees feel nurtured and cherished by cultivating a culture of caliber,
                diversity, development and open communication and bring out their best potential
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
  name: 'VisionMission',
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
