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
              HR Philosophy
            </h2>
            <div class='concern-text'>
              <h5 class='concern-text-title mb-4'>
                We believe in cherishing the capabilities of our team members and rewarding them for making a difference.
              </h5>
              <p class='concern-paragraph'>
                At Shanta, our people are our most valuable resource. We foster a culture of growth, equality and diversity,
                where team members can communicate openly across all levels of the organization.
              </p>
              <p class='concern-paragraph'>
                We are committed to maintaining an environment where our employees feel empowered to develop themselves and nurture their careers. We believe in honesty in every aspect of our business and endow every individual to do their job in an ethical manner.
              </p>
              <p class='concern-paragraph'>
                Do you have the spirit to work with a team of committed professionals to create a solid impact in an organization like Shanta? With us, your voice and ideas are valued and your work applauded regardless of your tenure.
              </p>
              <p class='concern-paragraph'>
                Achieving sustainable organizational growth demands that we attract the most exceptional people. Dynamic and passionate individuals who are willing to leave a mark in what they do are welcome.
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
import LeftSidebar from '../../components/career/LeftSidebar'

export default {
  name: 'HRPhilosophy',
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
