<template>
  <div class="mega-menu">
    <div class="mega-menu-content">
      <div class="mega-menu-overlay">
        <header class="d-flex justify-content-between">
          <Logo />
          <button class="hamburger-menu hamburger-menu-close text-uppercase text-bold" @click="changeMegaMenu">
            <span class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </button>
        </header>
        <slide-y-down-transition :duration="500">
          <main class="main mega-menu-main text-white" v-if="elementVisible">
            <div class="main-top d-flex">
              <aside class="sidebar sidebar-left">
                <p class="sidebar-text">
                  Shanta Equity Limited is an innovative investment bank
                  offering a range of corporate advisory and portfolio
                  management solutions.
                </p>
                <p class="sidebar-text">
                  We believe in going the extra mile for our clients and
                  utilizing our seasoned professionals to advise clients to take
                  decisions that maximize value.
                </p>
              </aside>
              <div class="main-content">
                <div class="mega-menu-list">
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink to="/corporate-profile/background" class="mega-menu-item-link">
                      <h5 class="mega-menu-item-title mb-3 text-white">
                        Corporate Profile
                      </h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to="/corporate-profile/background" class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)">Background |</NuxtLink>
                        <NuxtLink to="/corporate-profile/who-we-are" class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)">Who We Are</NuxtLink>
                        <!-- <NuxtLink
                          to="/corporate-profile/vision-mission"
                          class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)"
                          >Our Vision & Mission |</NuxtLink
                        >
                        <NuxtLink
                          to="/corporate-profile/our-core-values"
                          class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)"
                          >Our Core Values |</NuxtLink
                        >
                        <NuxtLink
                          to="/corporate-profile/board-of-directors"
                          class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)"
                          >Our Board of Directors |</NuxtLink
                        >
                        <NuxtLink
                          to="/corporate-profile/board-of-directors"
                          class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)"
                          >Our Team |</NuxtLink
                        >
                        <NuxtLink
                          to="/corporate-profile/our-logo"
                          class="mega-menu-nested-link"
                          @click="closeMegaMenu($event)"
                          >Our Logo</NuxtLink
                        > -->
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink to="/services/ipo" class="mega-menu-item-link">
                      <h5 class="mega-menu-item-title mb-3 text-white">
                        Services
                      </h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to="/services/fund_raising" class="mega-menu-nested-link">Fund Raising |</NuxtLink>
                        <NuxtLink to="/services/issue_management" class="mega-menu-nested-link">Issue Management |
                        </NuxtLink>
                        <NuxtLink to="/services/managed_portfolio" class="mega-menu-nested-link">Managed Portfolio |
                        </NuxtLink>
                        <NuxtLink to="/services/corporate_advisory" class="mega-menu-nested-link">Corporate Advisory
                        </NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->

                  <!-- <div
                    @mouseenter="bgHoverTrue($event)"
                    @mouseleave="bgHoverFalse($event)"
                    class="mega-menu-item"
                  >
                    <NuxtLink class="mega-menu-item-link" to="/career/hr-philosophy">
                      <h5 class="mega-menu-item-title mb-3 text-white">
                        Career
                      </h5>
                      <p
                        class="mb-0"
                        @mouseenter="removeParentBgHover($event)"
                        @mouseleave="addParentBgHover($event)"
                      >
                        <NuxtLink to="/career/hr-philosophy" class="mega-menu-nested-link"
                          >HR Philosophy |</NuxtLink
                        >
                        <NuxtLink to="/career/job-opening" class="mega-menu-nested-link"
                          >Job Opening |</NuxtLink
                        >
                        <NuxtLink to="/career/apply-online" class="mega-menu-nested-link"
                          >Apply Online</NuxtLink
                        >
                      </p>
                    </NuxtLink>
                  </div> -->
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="/">
                      <h5 class="mega-menu-item-title mb-3 text-white">
                        Prospectus
                      </h5>
                        <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                          <a href="/bhl_rh_prospectus.pdf" download="" class="mega-menu-nested-link">Best Holdings Limited Red Herring Prospectus</a>
                        </p>
                    </NuxtLink>

                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="/contact-us/address">
                      <h5 class="mega-menu-item-title mb-3 text-white">
                        Contact us
                      </h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to="/contact-us/address" class="mega-menu-nested-link">Address |</NuxtLink>
                        <NuxtLink to="/contact-us/location-map" class="mega-menu-nested-link">Location map |</NuxtLink>
                        <NuxtLink to="/contact-us/feedback" class="mega-menu-nested-link">Feedback</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <footer class="footer d-flex align-items-center">
              <div class="footer-left">
                <p class="footer-text mb-0">
                  &copy; 2022 Shanta Equity Ltd. <br />
                </p>
              </div>
              <div class="footer-menu d-flex justify-content-start">
                <NuxtLink to="" class="footer-menu-item">Home</NuxtLink>
                <NuxtLink to="" class="footer-menu-item">News & Update</NuxtLink>
              </div>
            </footer>
          </main>
          <!-- main content end -->
        </slide-y-down-transition>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import { mapActions } from 'vuex'
import { SlideYDownTransition } from 'vue2-transitions'
export default {
  name: 'MegaMenu',
  data() {
    return {
      bgHover: false,
      elementVisible: false,
    }
  },
  components: { Logo, SlideYDownTransition },
  methods: {
    ...mapActions(['changeMegaMenu', 'closeMegaMenu']),
    bgHoverTrue(e) {
      if (e.target.className === 'mega-menu-item') {
        e.target.classList.add('bg-hover')
      }
    },
    bgHoverFalse(e) {
      e.target.classList.remove('bg-hover')
    },
    removeParentBgHover(e) {
      e.target.parentElement.parentElement.classList.remove('bg-hover')
    },
    addParentBgHover(e) {
      e.target.parentElement.parentElement.classList.add('bg-hover')
    },
    toggleBtn() {
      this.showEl = true
    },
  },
  created() {
    setTimeout(() => (this.elementVisible = true), 1000)
  },
  watch: {
    $route() {
      this.$store.dispatch('closeMegaMenu')
    },
  },
}
</script>

<style scoped>

</style>
