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
            <h2 class="title text-capitalize heading-6">Fundraising:</h2>
            <div class="concern-text">
              <p class="concern-paragraph">
                Shanta Equity Limited can help your firm to finance its projects
                through the optimal combination of Debt and Equity Adviory in
                both local and foreign currency.
              </p>
              <p>
                Debt financing includes Structured Financing, Syndicated Loans,
                Foreign Loans, Concessional Loans, both listed and non-listed
                Bonds, Redeemable Preference Shares and Securitization of
                receivables.
              </p>
              <p>
                Equity financing options include listing through an Initial
                Public Offering, Rights Share Issuance, Repeat Public Offering,
                Private Equity or Venture Capital Financing from both local and
                foreign funds.
              </p>
              <p>
                Our highly experienced team will analyze the existing financials
                and condition of your firm before structuring and arranging the
                optimal financing transaction to meet your unique needs. We
                leverage our team's vast experience and relationships to
                approach the best institutions, both locally and
                internationally, that can meet your needs.
              </p>
              <p>
                Our team remains highly engaged with your firm and provide close
                assistance during the entire process of the transaction until
                closure.
              </p>
              <h5 class="concern-text-title mb-3">
                To contact us please
                <a href="mailto:info@shantaequity.net" class="text-theme-primary">click here</a>
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
