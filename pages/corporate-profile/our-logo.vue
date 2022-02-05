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
            <div class='concern-content-img text-center'>
              <img src='~/assets/images/logo-icon.png' alt='our logo' class='img-fluid'>
            </div>
            <h2 class='title text-capitalize heading-6'>
              Our Logo
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph'>
                The concept for our logo is derived from the shape of human hands, the shape they make when held
                with the palms facing each other.
              </p>
              <p class='concern-paragraph'>
                Usually when we hold an object in our palms, it is something we care about, something valuable to us.
                Like when a blow of air attempts to put off a candle that gives us light, we protect it with our palms.
                When a tiny bird falls from its nest, we hold it up and protect it in our palms. When a
                sculptor sculpts a masterpiece, he shapes it using his fingers and palms
              </p>
              <p class='concern-paragraph'>
                Hence, our logo depicts the amount of care and emotion we put into our work. Moreover,
                it is a symbol that inspires us on a daily basis to be caring towards our clients, and protect
                their interests by providing an uncompromising level of service and superior products.
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
  name: 'OurLogo',
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
