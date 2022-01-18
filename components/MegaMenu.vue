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
        <main class="main text-white py-5">
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
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Corporate Profile</h5>
                <p class="mb-0">
                  <NuxtLink to='' class='mega-menu-nested-link'>Background,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>who we are,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>the vision & mission,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>our core values,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>board of directors,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>our logo</NuxtLink>
                </p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Products</h5>
                <p class="mb-0">
                  <NuxtLink to='' class='mega-menu-nested-link'>IPO,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>CTA,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>MTA,</NuxtLink>
                </p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Services</h5>
                <p class="mb-0">
                  <NuxtLink to='' class='mega-menu-nested-link'>SMS,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>BEFTN,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>DP,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>Internet trading,</NuxtLink>
                </p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Research & Investment</h5>
                <p class="mb-0">
                  <NuxtLink to='' class='mega-menu-nested-link'>IPO Review,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>Daily Market Recap,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>Morning news flash,</NuxtLink>
                </p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Career</h5>
                <p class="mb-0">
                  <NuxtLink to='' class='mega-menu-nested-link'>HR Philosophy,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>Job Opening,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>Apply Online,</NuxtLink>
                </p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Downloads</h5>
                <p class="mb-0"></p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white">Contact us</h5>
                <p class="mb-0">
                  <NuxtLink to='' class='mega-menu-nested-link'>Address,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>Location map,</NuxtLink>
                  <NuxtLink to='' class='mega-menu-nested-link'>feedback,</NuxtLink>
                </p>
              </NuxtLink>
              <NuxtLink class="mega-menu-item" to="">
                <h5 class="mega-menu-item-title mb-3 text-white"></h5>
                <p class="mb-0"></p>
              </NuxtLink>
            </div>
          </div>
        </main>
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
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import {mapActions} from 'vuex'
export default {
  name: 'MegaMenu',
  components: { Logo },
  methods: {
    ...mapActions(['changeMegaMenu'])
  }
}
</script>

<style scoped>

</style>
