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
              Address
            </h2>
            <div class='concern-text mt-5'>
              <h5 class='concern-text-title mb-3'>Corporate Office:</h5>
              <address class='concern-address'>
                <span>The Glass House (Level 4), S.E (B)-2, 38 Gulshan Avenue, Gulshan -1, Dhaka -1212</span> <br>
                <span>Phone: +88-02-48814118, FAX: +88-02-48814119</span>
              </address>
            </div>
            <!-- concern text end -->
            <div class='concern-text mt-5'>
              <h5 class='concern-text-title mb-3'>Registered Office:</h5>
              <address class='concern-address'>
                <span>Shanta Western Tower (Level-10), 186 Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka-1208</span> <br>
                <!-- <span>Phone: +88-02-9551407, PABX: 9564601, Ext-603</span> -->
              </address>
            </div>
            <!-- concern text end -->

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
import ConcernSidebarFooter from '~/components/ConcernSidebarFooter'
import ConcernSmFooter from '~/components/ConcernSmFooter'
import LeftSidebar from '~/components/contact-us/LeftSidebar'

export default {
  name: 'Address',
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
