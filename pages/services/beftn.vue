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
              BEFTN (Bangladesh Electronic Funds Transfer Network):
            </h2>
            <div class='concern-text'>
              <h5 class='concern-text-title mb-4'>Fund Deposit</h5>
              <p class='concern-paragraph'>
                Our banking transaction process is fully automated. It allows you to deposit fund in your portfolio  account(s) maintained with Shanta Securities Limited through BEFTN.
              </p>
              <p class='concern-paragraph'>
                All you need is the following:
              </p>
              <ul class='list-group concern-text-features '>
                <li class='list-group-item d-flex align-items-baseline'>
                  <div class='list-group-item-left'>
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                    <span>Bank</span>
                  </div>
                  <span class='ml-2'>The City Bank Limited</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <div class='list-group-item-left'>
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                    <span>A/C Name</span>
                  </div>
                  <span class='ml-2'>Shanta Equity Limited</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <div class='list-group-item-left'>
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                    <span>A/C No</span>
                  </div>
                  <span class='ml-2'> 310&nbsp;121&nbsp;522&nbsp;4002</span>
                </li>
                <li class='list-group-item d-flex align-items-baseline'>
                  <div class='list-group-item-left'>
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                    <span>Routing No.</span>
                  </div>
                  <span class='ml-2'> 22&nbsp;52&nbsp;75&nbsp;357</span>
                </li>
              </ul>
            </div>
            <!-- concern text end -->
            <div class='concern-text mt-4'>
              <h5 class='concern-text-title mb-4'>Fund Withdrawal</h5>
              <p class='concern-paragraph'>
                We are also offering fund withdrawal from your portfolio account(s)
                maintained with Shanta  Securities Limited through BEFTN.
              </p>
              <p class='concern-paragraph'>
                For BEFTN undertaking please <a href='' class='text-theme-primary'>download</a> and fill up the form accordingly and
                send it to your  nearest convenient branch.
              </p>
            </div>
            <!-- concern text end -->
            <div class='concern-text mt-4'>
              <h5 class='concern-text-title mb-4'>Contact Persons:</h5>
              <address class='concern-address'>
                <span class='font-weight-bold'>Zobayer Ahmed</span> <br>
                <span>Head of Accounts</span> <br>
                <span>Email: info@shantasecurities.com</span> <br>
                <span>Cell No: 01730-376631</span>
              </address>
              <address class='concern-address'>
                <span class='font-weight-bold'>Imran Hossain</span> <br>
                <span>Sr. Executive Accounts</span> <br>
                <span>Email: info@shantasecurities.com</span> <br>
                <span>Cell No: 01704-166880</span>
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
import ConcernSidebarFooter from '../../components/ConcernSidebarFooter'
import ConcernSmFooter from '../../components/ConcernSmFooter'
import LeftSidebar from '../../components/services/LeftSidebar'

export default {
  name: 'BEFTN',
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
