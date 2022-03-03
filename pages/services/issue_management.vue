<template>
  <div class="concern">
    <transition
      name="slide"
      enter-active-class="slideInDown"
      leave-active-class="slideOutUp"
    >
      <div
        class="mega-menu-wrapper"
        v-if="megaMenuShow"
        style="animation-duration: 0.5s"
      >
        <MegaMenu />
      </div>
    </transition>

    <div class="hamburger-toggle">
      <Hamburger />
    </div>

    <main class="main concern-main">
      <LeftSidebar />
      <!-- sidebar end -->
      <div class="main-content vh-100">
        <div class="concern-content">
          <div class="concern-content-overlay text-white px-30">
            <h2 class="title text-capitalize heading-6">Issue Management:</h2>
            <div class="concern-text">
              <p class="concern-paragraph">
                Our highly experienced team has a long track record in managing
                the entire issue management process for our clients. No matter
                whether your firm wants to raise funds through a listed bond,
                get listed through an Initial Public Offering, or raise
                additional capital through a Rights Share Offer, we will take
                care of the process from start to finish.
              </p>
              <h5 class="concern-text-title mb-3">
                To contact us please
                <a
                  href="mailto:info@shantaequity.net"
                  class="text-theme-primary"
                  >click here</a
                >
              </h5>
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

import { mapState } from 'vuex'
import Hamburger from '~/components/Hamburger'
import ConcernSidebarFooter from '../../components/ConcernSidebarFooter'
import ConcernSmFooter from '../../components/ConcernSmFooter'
import LeftSidebar from '../../components/products/LeftSidebar'

export default {
  name: 'IPO',
  components: {
    LeftSidebar,
    ConcernSmFooter,
    ConcernSidebarFooter,
    Hamburger,
    Logo,
    MegaMenu,
  },
  computed: {
    ...mapState({ megaMenuShow: (state) => state.megaMenuOpen }),
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
