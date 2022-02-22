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
              Issue Management:
            </h2>
            <div class='concern-text'>
              <p class='concern-paragraph'>
                Investment in IPO is very easy now with Shanta Securities Limited. You can come physically in our office or download softcopy from our website and fill the IPO application form and we will do the rest for you.
              </p>
              <h5 class='concern-text-title mb-3'>
                For IPO application form please <a href='' class='text-theme-primary'>click here</a>
              </h5>
              <p class='concern-paragraph'>
                This month's IPOs/ IPOs - August 2018
              </p>
              <div class='concern-text-table'>
                <table class='table table-bordered'>
                  <tr>
                    <th>Company</th>
                    <th>Subscription Open</th>
                    <th>Subscription Close</th>
                    <th>Offer Price</th>
                    <th>Prospectus</th>
                    <th>IPO Summary</th>
                  </tr>
                  <tr>
                    <td>Kattali Textile Limited	</td>
                    <td>August 28, 2018	</td>
                    <td>September 13, 2018	</td>
                    <td>10</td>
                    <td><a href='' class='text-theme-primary font-weight-bold'>View</a></td>
                    <td><a href='' class='text-theme-primary font-weight-bold'>View</a></td>
                  </tr>
                </table>
              </div>
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
  name: 'IPO',
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
