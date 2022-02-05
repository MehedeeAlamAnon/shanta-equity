<template>
  <div class='mega-menu'>
    <div class='mega-menu-content'>
      <div class='mega-menu-overlay'>
        <header class='d-flex justify-content-between'>
          <Logo />
          <button
            class="hamburger-menu hamburger-menu-close text-uppercase text-bold"
            @click="changeMegaMenu"
          >
            <span class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </button>
        </header>
        <slide-y-down-transition :duration="500">
          <main class="main mega-menu-main text-white" v-if="elementVisible">
            <div class='main-top d-flex'>
              <aside class="sidebar sidebar-left">
                <p class="sidebar-text">Shanta Securities Limited is an innovative financial services company
                  offering a range of brokerage and investing solutions.
                </p>
                <p class="sidebar-text">
                  We believe in being committed to going the extra mile for our customers and
                  using our intuitive research to help clients take informed investing decisions.
                </p>
              </aside>
              <div class="main-content">
                <div class="mega-menu-list">
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink to="/corporate-profile/background" class="mega-menu-item-link">
                      <h5 class="mega-menu-item-title mb-3 text-white">Corporate Profile</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to='/corporate-profile/background' class='mega-menu-nested-link' @click="closeMegaMenu($event)">Background,</NuxtLink>
                        <NuxtLink to='/corporate-profile/who-we-are' class='mega-menu-nested-link' @click="closeMegaMenu($event)">who we are,</NuxtLink>
                        <NuxtLink to='/corporate-profile/vision-mission' class='mega-menu-nested-link' @click="closeMegaMenu($event)">the vision & mission,</NuxtLink>
                        <NuxtLink to='/corporate-profile/our-core-values' class='mega-menu-nested-link' @click="closeMegaMenu($event)">our core values,</NuxtLink>
                        <NuxtLink to='/corporate-profile/board-of-directors' class='mega-menu-nested-link' @click="closeMegaMenu($event)">board of directors,</NuxtLink>
                        <NuxtLink to='/corporate-profile/our-logo' class='mega-menu-nested-link' @click="closeMegaMenu($event)">our logo</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink to="" class="mega-menu-item-link">
                      <h5 class="mega-menu-item-title mb-3 text-white">Products</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to='' class='mega-menu-nested-link'>IPO,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>CTA,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>MTA,</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink to="" class="mega-menu-item-link">
                      <h5 class="mega-menu-item-title mb-3 text-white">Services</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to='' class='mega-menu-nested-link'>SMS,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>BEFTN,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>DP,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>Internet trading,</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="">
                      <h5 class="mega-menu-item-title mb-3 text-white">Research & Investment</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to='' class='mega-menu-nested-link'>IPO Review,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>Daily Market Recap,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>Morning news flash,</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="">
                      <h5 class="mega-menu-item-title mb-3 text-white">Career</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to='' class='mega-menu-nested-link'>HR Philosophy,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>Job Opening,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>Apply Online,</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="">
                      <h5 class="mega-menu-item-title mb-3 text-white">Downloads</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)"></p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="">
                      <h5 class="mega-menu-item-title mb-3 text-white">Contact us</h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)">
                        <NuxtLink to='' class='mega-menu-nested-link'>Address,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>Location map,</NuxtLink>
                        <NuxtLink to='' class='mega-menu-nested-link'>feedback,</NuxtLink>
                      </p>
                    </NuxtLink>
                  </div>
                  <!-- mega menu item end -->
                  <div @mouseenter="bgHoverTrue($event)" @mouseleave="bgHoverFalse($event)" class="mega-menu-item">
                    <NuxtLink class="mega-menu-item-link" to="">
                      <h5 class="mega-menu-item-title mb-3 text-white"></h5>
                      <p class="mb-0" @mouseenter="removeParentBgHover($event)" @mouseleave="addParentBgHover($event)"></p>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <footer class='footer d-flex align-items-center'>
              <div class="footer-left">
                <p class="footer-text mb-0">
                  &copy; 2022 Shanta Equity. <br> Designed by Name
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
import {mapActions} from 'vuex'
import {SlideYDownTransition } from 'vue2-transitions'
export default {
  name: 'MegaMenu',
  data() {
    return {
      bgHover: false,
      elementVisible: false,
    }
  },
  components: { Logo, SlideYDownTransition  },
  methods: {
    ...mapActions(['changeMegaMenu', 'closeMegaMenu']),
    bgHoverTrue(e) {
      if(e.target.className === 'mega-menu-item'){
        e.target.classList.add('bg-hover')
      }
    },
    bgHoverFalse(e) {
      e.target.classList.remove('bg-hover')
    },
    removeParentBgHover(e){
      e.target.parentElement.parentElement.classList.remove('bg-hover')
    },
    addParentBgHover(e){
      e.target.parentElement.parentElement.classList.add('bg-hover')
    },
    toggleBtn(){
      this.showEl = true
    },
  },
  created() {
    setTimeout(() => this.elementVisible = true, 1000)
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
