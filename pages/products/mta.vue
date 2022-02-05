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
              MTA (Margin Trading Account):
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph'>
                Investors have the option of trading with margin loan. Margin trading account allows investors to
                buy more stock than they would be able to normally. This is different from a regular cash
                account, in which investor trade using the money in the account. The margin loan and interest rate will
                differ as per management decision.  The margin account may be part of your standard account opening
                agreement or may be a completely separate agreement.
              </p>
              <h5 class='concern-text-title mb-3'>
                Features
              </h5>
              <ul class='list-group concern-text-features '>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Orders can be received through email & telephone.</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Trade execution confirmation is provided to client by mail & SMS.</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <font-awesome-icon :icon="['fas', 'angle-right']"/>
                  <span class='ml-2'>Portfolio statement sent regularly through email</span>
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
import LeftSidebar from '../../components/products/LeftSidebar'

export default {
  name: 'MTA',
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
