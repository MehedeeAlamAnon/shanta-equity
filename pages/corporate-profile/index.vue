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

    <main class="main">
      <aside class="sidebar right-sidebar bg-theme-secondary vh-100">
        <div class="sidebar-inner sidebar-body d-flex flex-wrap">
          <div class="header">
            <Logo />
          </div>
          <!-- header end -->
          <div class='sidebar-inner-body align-self-start'>
            <NuxtLink to="" class='sidebar-concern-title d-flex align-items-center'>
              <img src='~/assets/images/arrow.svg' alt='arrow' class='arrow-icon img-fluid'>
              <h4 class='title text-capitalize mb-0 heading-6'>Corporate Profile</h4>
            </NuxtLink>
            <!-- breadcrumb end -->
            <ul class='sidebar-menu list-group mt-5'>
              <NuxtLink to='' class='list-group-item list-group-item-action text-capitalize active'>Background</NuxtLink>
              <NuxtLink to='' class='list-group-item list-group-item-action text-capitalize'>Who we are</NuxtLink>
              <NuxtLink to='' class='list-group-item list-group-item-action text-capitalize'>The vision & mission</NuxtLink>
              <NuxtLink to='' class='list-group-item list-group-item-action text-capitalize'>our core values</NuxtLink>
              <NuxtLink to='' class='list-group-item list-group-item-action text-capitalize'>board of directors</NuxtLink>
              <NuxtLink to='' class='list-group-item list-group-item-action text-capitalize'>our logo</NuxtLink>
            </ul>
            <!-- sidebar menu end -->
          </div>
          <!-- sidebar menu end -->
          <div class="sidebar-footer align-self-end text-muted pb-3">
            <span class='copyright'>© 2022 Shanta Equity Ltd. <br>
            Designed by Name</span>
          </div>
          <!-- sidebar footer end -->
        </div>
      </aside>
      <!-- sidebar end -->
      <div class="main-content vh-100">
        <div class='concern-content'>
          <div class="concern-content-overlay text-white py-5 px-30">
            <h2 class='title text-capitalize mb-4 heading-6'>
              Background
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph mb-3'>
                Shanta Group started its journey in 1988, and had since become one of the forerunners in ready-made garment (RMG) export, earning a reputation as an important vendor for some of the most renowned apparel brands of USA and Europe.
              </p>
              <p class='concern-paragraph mb-3'>
                Shanta Group is also one of the key members of the
                <a href='' target='_blank' class='text-theme-primary'>STS Group</a> - the promoter of the world class
                <a href='' target='_blank' class='text-theme-primary'>Apollo Hospitals Dhaka, International School Dhaka (ISD)</a> , the only International Baccalaureate (IB) School of the country, and the
                <a href='' target='_blank' class='text-theme-primary'>Delhi Public School</a>, Dhaka.
              </p>
              <p class='concern-paragraph mb-3'>
                Shanta has a long track record of construction since 1991, having been involved in various projects of its own and of the STS Group. It has built the iconic Safura Tower - the 16 storied commercial landmark at Banani, the 200,000 sft multi-facility centrally air conditioned International School Dhaka (ISD) at Bashundhara, the 125,000 sft Delhi Public School at Uttara, state-of-the-art RMG factories such as its 150,000 sft Shanta Industries Ltd, the 150,000 sft Shanta Denims Ltd and the 35,000 sft Shanta Wash Works Ltd at Dhaka EPZ.
              </p>
              <p class='concern-paragraph mb-3'>
                Furthermore, the team was also involved in the construction of Apollo Hospitals Dhaka - the 550,000 sft first multi-disciplinary super-specialty hospital of the country.
              </p>
            </div>
          </div>
        </div>
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

export default {
  name: 'IndexPage',
  components: {
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
