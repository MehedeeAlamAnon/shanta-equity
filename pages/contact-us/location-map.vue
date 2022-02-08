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
              Location Map
            </h2>
            <div class='concern-text mt-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7305.192449285323!2d90.420701!3d23.726109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x377f5a6bb801783!2sShanta%20Securities%20Limited!5e0!3m2!1sen!2sbd!4v1644058944623!5m2!1sen!2sbd" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
