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
              Stock Exchange News
            </h2>
            <div class='concern-text'>
              <ul class='list-group concern-text-list'>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>1. MPETROLEUM: Appointment of Chairman and Managing Director</span>
                  <div class='action pl-2'>
                    <NuxtLink to='/news-details/news-slug' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>2. SALVOCHEM: Dividend Disbursement</span>
                  <div class='action pl-2'>
                    <NuxtLink to='' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>3. DSENEWS: Withdrawal of Authorized Representative</span>
                  <div class='action pl-2'>
                    <NuxtLink to='' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>4. DSENEWS: Withdrawal of Authorized Representative</span>
                  <div class='action pl-2'>
                    <NuxtLink to='' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>5. DSENEWS: Withdrawal of Authorized Representative</span>
                  <div class='action pl-2'>
                    <NuxtLink to='' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>6. DSENEWS: Withdrawal of Authorized Representative</span>
                  <div class='action pl-2'>
                    <NuxtLink to='' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
                <li class='list-group-item text-capitalize d-flex justify-content-between align-items-center'>
                  <span>7. DSENEWS: Withdrawal of Authorized Representatives</span>
                  <div class='action pl-2'>
                    <NuxtLink to='' class='btn btn-action'>
                      <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                    </NuxtLink>
                  </div>
                </li>
              </ul>
              <!-- pagination start -->
<!--              <ul class='nav pagination text-center justify-content-center align-items-center mt-5'>-->
<!--                <NuxtLink to='' class='btn btn-action mr-3 disabled-class'>-->
<!--                  <font-awesome-icon :icon="['fas', 'arrow-left']"/>-->
<!--                </NuxtLink>-->
<!--                <NuxtLink to='' class='nav-link pagination-item'>1</NuxtLink>-->
<!--                <NuxtLink to='' class='nav-link pagination-item'>2</NuxtLink>-->
<!--                <NuxtLink to='' class='nav-link pagination-item'>3</NuxtLink>-->
<!--                <NuxtLink to='' class='nav-link pagination-item'>4</NuxtLink>-->
<!--                <NuxtLink to='' class='nav-link pagination-item'>5</NuxtLink>-->
<!--                <NuxtLink to='' class='btn btn-action ml-3'>-->
<!--                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>-->
<!--                </NuxtLink>-->
<!--              </ul>-->
              <!-- pagination end -->
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
import ConcernSidebarFooter from '~/components/ConcernSidebarFooter'
import ConcernSmFooter from '~/components/ConcernSmFooter'
import LeftSidebar from '~/components/news-updates/LeftSidebar'

export default {
  name: 'StockExchangeNews',
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
