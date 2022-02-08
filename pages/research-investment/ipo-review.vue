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
              IPO Review
            </h2>
            <div class='concern-text'>
              <ul class='list-group concern-text-list'>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>1. Pacific Denims Limited - IPO Review</span>
                  <div class='action pl-2'>
                    <a href="" class='btn btn-action' download>
                      <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    </a>
                    <a href='' target="_blank" class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </a>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>2. Doreen Power Generations and Systems Limited - IPO Review</span>
                  <div class='action pl-2'>
                    <a href="" class='btn btn-action' download>
                      <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    </a>
                    <a href='' target="_blank" class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </a>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>3. Dragon Sweater and Spinning Limited - IPO Review</span>
                  <div class='action pl-2'>
                    <a href="" class='btn btn-action' download>
                      <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    </a>
                    <a href='' target="_blank" class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </a>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>4. The ACME Laboratories Ltd - IPO Review</span>
                  <div class='action pl-2'>
                    <a href="" class='btn btn-action' download>
                      <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    </a>
                    <a href='' target="_blank" class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </a>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>5. Evince Textiles Limited - IPO Review</span>
                  <div class='action pl-2'>
                    <a href="" class='btn btn-action' download>
                      <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    </a>
                    <a href='' target="_blank" class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </a>
                  </div>
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
import LeftSidebar from '../../components/research-invest/LeftSidebar'

export default {
  name: 'IPOReview',
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
