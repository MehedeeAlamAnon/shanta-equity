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
              Board of Directors
            </h2>
            <div class='concern-text'>
              <div class='concern-text-card'>
                <div class='concern-text-card-img'>
                  <img src='~/assets/images/md.jpeg' alt='managing director' class='img-fluid'>
                </div>
                <h5 class='concern-text-card-name'>Khondokar Monir Uddin</h5>
                <p class='concern-text-card-designation'>Managing Director</p>
                <p class='concern-paragraph'>
                  A passionate entrepreneur and a perceptive businessman, Mr. Khondoker Monir Uddin,
                  the founder promoter of Shanta Group, opts to do business by providing world-class products
                  and services in our country.With his visionary leadership and keen business knowledge,
                  Shanta drives forward to not only provide superior quality products, but to demonstrate
                  unparalleled foresight by developing projects which are the epitome of modern architecture and
                  comfortable living.
                </p>
                <p class='concern-paragraph'>
                  Over the past three decades he has established Shanta as one of the leading corporate
                  houses in the country, with investments in diversified sectors. He is also the Managing Director
                  of the
                  <a href='' target='_blank' class='text-theme-primary font-weight-bold'>STS Group</a>,
                  as well as a founder Director and former Chairman of
                  <a href='' target='_blank' class='text-theme-primary font-weight-bold'>Dhaka Bank Limited.</a>
                </p>
              </div>
              <!-- card end -->
              <div class='concern-text-card'>
                <div class='concern-text-card-img'>
                  <img src='~/assets/images/director.jpg' alt='managing director' class='img-fluid'>
                </div>
                <h5 class='concern-text-card-name'>Mr. M. Anisul Haque</h5>
                <p class='concern-text-card-designation'>Director</p>
                <p class='concern-paragraph'>
                  An MBA in Finance from University of Dhaka, Mr. M. Anisul Haque has over 18 years of practical
                  experience in renowned local and multinational organizations by serving in different capacitities
                  such as Chief Accountant, General Manager, Group CFO and Finance Controller.
                </p>
                <p class='concern-paragraph'>
                  Mr. Haque is currently practicing as a Cost and Management Accountant and Consultant and is a
                  Fellow Member (FCMA) of The Institute of Cost and Management Accountants of Bangladesh (ICMAB).
                </p>
              </div>
              <!-- card end -->
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
  name: 'BoardOfDirectors',
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
