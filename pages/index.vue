<template>
  <div class="home">
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
    <header class="header">
      <Logo />
      <div class="header-right">
        <div class="text-white font-weight-bold header-sidebar header-slogan">
          Your Trusted Financial Advisor
        </div>
        <Hamburger />
      </div>
    </header>
    <main class="main">
      <div class="main-content vh-100">
        <div class="main-content-home banner-slider">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="cus-slide slide-1">
              <div class="cus-slide-content">
                <h1 class="cus-slide-title text-capitalize mb-3">
                  An innovative financial <br />services company
                </h1>
                <div class="cus-slide-desc">
                  Offering a range of investment banking and corporate advisory
                  solutions. We believe in going the extra mile for our clients
                  and offering them the best possible service to maximize value.
                </div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <swiper-slide class="cus-slide slide-2">
              <div class="cus-slide-content">
                <div class="cus-slide-quote mb-3">
                  <q> Buy not on optimism, but on arithmetic </q>
                </div>
                <div class="cus-slide-author">Benjamin Graham</div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <swiper-slide class="cus-slide slide-3">
              <div class="cus-slide-content">
                <div class="cus-slide-quote mb-3">
                  <q>
                    The stock market is a device for transferring money from the
                    impatient to the patient
                  </q>
                </div>
                <div class="cus-slide-author">Warren Buffett</div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <swiper-slide class="cus-slide slide-4">
              <div class="cus-slide-content">
                <div class="cus-slide-quote mb-3">
                  <q>
                    An important key to investing is to remember that stocks are
                    not lottery tickets.
                  </q>
                </div>
                <div class="cus-slide-author">Peter Lynch</div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <swiper-slide class="cus-slide slide-5">
              <div class="cus-slide-content">
                <div class="cus-slide-quote mb-3">
                  <q>
                    The stock market is filled with individuals who know the
                    price of everything, but the value of nothing
                  </q>
                </div>
                <div class="cus-slide-author">Phillip Fisher</div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <div
              class="swiper-button-prev swiper-button-white"
              slot="button-prev"
            ></div>
            <div
              class="swiper-button-next swiper-button-white"
              slot="button-next"
            ></div>
          </swiper>
          <div
            class="banner-slider-footer d-flex align-items-center justify-content-center text-white"
          >
            <!-- <NuxtLink to="" class="btn btn-theme-primary">Update</NuxtLink> -->
            <span>
              Call us today at +88 01713 086 712 or email us at
              info@shantaequity.net
            </span>
          </div>
        </div>
      </div>
      <!-- main-content end -->
      <aside class="sidebar right-sidebar bg-theme-secondary vh-100">
        <div
          class="header-sidebar d-flex align-items-center justify-content-between"
        >
          <div class="text-white font-weight-bold pr-3 header-slogan">
            Your Trusted Financial Advisor
          </div>
          <button
            id="hamburger-menu"
            class="hamburger-menu text-uppercase text-bold"
            @click="changeMegaMenu"
          >
            <span class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </button>
        </div>
        <div class="sidebar-inner sidebar-body">
          <NuxtLink
            to="/corporate-profile/background"
            class="btn btn-block btn-theme-primary font-weight-bold"
            >Learn More</NuxtLink
          >
          <NuxtLink
            to="/contact-us/address"
            class="btn btn-block btn-theme-primary font-weight-bold mt-4"
            >Contact Us</NuxtLink
          >
          <div class="products">
            <h3 class="heading-3 text-white mt-4 mb-2 pt-1">Our Services</h3>
            <p class="text-muted pb-2">
              Welcome to Shanta Equity Ltd. We draw on the expertise of the best
              minds in the country to provide our clients with customized
              investment banking and corporate advisory services
            </p>
            <div class="investment-info">
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-2">
                  Fund Raising
                </h3>
                <p class="investment-info-text text-muted">
                  We use a wide array of strategies to raise funds for your next
                  big project and optimize your cost of capital
                </p>
              </NuxtLink>
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-2">
                  Issue Management
                </h3>
                <p class="investment-info-text text-muted">
                  If you need to raise funds through an IPO or Bond issuance,
                  our experienced team is here to handle the entire process from
                  start to finish
                </p>
              </NuxtLink>
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-2">
                  Managed Portfolio
                </h3>
                <p class="investment-info-text text-muted">
                  We ensure the best return on your capital with our
                  industry-leading research, portfolio management and execution
                  services
                </p>
              </NuxtLink>
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-2">
                  Corporate Advisory
                </h3>
                <p class="investment-info-text text-muted">
                  With our team of experts, we help maximize the value of your
                  company
                </p>
              </NuxtLink>
            </div>
          </div>
          <div class="sidebar-footer pb-2">
            <ul class="nav social">
              <li class="nav-item">
                <a href="" target="_blank" class="nav-link"
                  ><font-awesome-icon :icon="['fas', 'envelope']"
                /></a>
              </li>
              <li class="nav-item">
                <a href="" target="_blank" class="nav-link"
                  ><font-awesome-icon :icon="['fab', 'facebook-f']"
                /></a>
              </li>
              <li class="nav-item">
                <a href="" target="_blank" class="nav-link"
                  ><font-awesome-icon :icon="['fab', 'linkedin-in']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <!-- sidebar end -->
    </main>
  </div>
</template>

<script>
import MegaMenu from '../components/MegaMenu'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Logo from '~/components/Logo'
import Hamburger from '~/components/Hamburger'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    Hamburger,
    Swiper,
    SwiperSlide,
    Logo,
    MegaMenu,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    ...mapState({ megaMenuShow: (state) => state.megaMenuOpen }),
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: false,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  methods: {
    ...mapActions(['changeMegaMenu']),
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 100%;

  .swiper-slide {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &.slide-1 {
      background-image: url('~assets/images/banner/banner1.jpeg');
    }
    &.slide-2 {
      background-image: url('~assets/images/banner/banner2.jpeg');
    }
    &.slide-3 {
      background-image: url('~assets/images/banner/banner3.jpeg');
    }
    &.slide-4 {
      background-image: url('~assets/images/banner/banner4.jpeg');
    }
    &.slide-5 {
      background-image: url('~assets/images/banner/banner5.jpeg');
    }
  }
}
</style>
