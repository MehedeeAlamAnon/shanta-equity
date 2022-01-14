<template>
  <div class="home">
    <main class="main">
      <div class="main-content vh-100">
        <div class="main-content-home banner-slider">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="cus-slide slide-1">
              <div class="cus-slide-content">
                <h1 class="cus-slide-title text-capitalize mb-3">
                  An innovative financial <br>services company
                </h1>
                <div class="cus-slide-desc">
                  Offering a range of brokerage and investing solutions.
                  We believe in being committed to going the extra mile for our customers and using our intuit
                </div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <swiper-slide class="cus-slide slide-2">
              <div class="cus-slide-content">
                <div class="cus-slide-quote mb-3">
                  <q>
                    Buy not on optimism, but on arithmetic
                  </q>
                </div>
                <div class="cus-slide-author">Benjamin Graham</div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <swiper-slide class="cus-slide slide-3">
              <div class="cus-slide-content">
                <div class="cus-slide-quote mb-3">
                  <q>
                    The stock market is a device for transferring money from the impatient to the patient
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
                    An important key to investing is to remember that stocks are not lottery tickets.
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
                    The stock market is filled with individuals who know the price of everything, but the value of nothing
                  </q>
                </div>
                <div class="cus-slide-author">Phillip Fisher</div>
              </div>
            </swiper-slide>
            <!-- slide item end -->
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>
          <div class="banner-slider-overlay">
            <div class="header">
              <div class="navbar-brand">
                <NuxtLink to="/">
                  <img src="../assets/images/shanta_equity.svg" alt="shanta-equity-logo">
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="banner-slider-footer d-flex align-items-center">
            <NuxtLink to="" class="btn btn-theme-primary">Update</NuxtLink>
            <div class="update-news ml-3">DSENEWS: Awareness Message for Investors</div>
          </div>
        </div>
      </div>
      <!-- main-content end -->
      <aside class="sidebar right-sidebar bg-theme-secondary vh-100">
        <div class="header header-sidebar justify-content-between">
          <div class="text-white font-weight-bold">Settings Standards</div>
          <button id="hamburger-menu" class="hamburger-menu text-uppercase text-bold">
            <span class="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </span>
          </button>
        </div>
        <div class="sidebar-inner sidebar-body">
          <NuxtLink to="/login" class="btn btn-block btn-theme-primary font-weight-bold">Update</NuxtLink>
          <NuxtLink to="/open-account" class="btn btn-block btn-theme-primary font-weight-bold mt-4">Open an Account</NuxtLink>
          <div class="products">
            <h3 class="heading-3 text-muted font-weight-bold mt-5 mb-4">Products</h3>
            <div class="investment-info">
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-1">IPO</h3>
                <p class="investment-info-text text-muted">
                  Investment in IPO is very easy now with Shanta Securities Limited.
                </p>
              </NuxtLink>
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-1">CTA</h3>
                <p class="investment-info-text text-muted">Investors can buy or sell securities by providing the capital needed
                  to fund the transaction without relying on the use of margin.
                </p>
              </NuxtLink>
              <NuxtLink to="/" class="investment-info-item mb-4 d-block">
                <h3 class="heading-4 text-uppercase text-white mb-1">MTA</h3>
                <p class="investment-info-text text-muted">
                  Investors have the option of trading with margin loan.
                </p>
              </NuxtLink>
            </div>
          </div>
          <div class="sidebar-footer">
            <ul class="nav social">
              <li class="nav-item">
                <a href="" target="_blank" class="nav-link"><font-awesome-icon :icon="['fas', 'envelope']"/></a>
              </li>
              <li class="nav-item">
                <a href="" target="_blank" class="nav-link"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
              </li>
              <li class="nav-item">
                <a href="" target="_blank" class="nav-link"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a>
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
export default {
  name: 'IndexPage',
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
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
      background-image:url('./assets/images/banner/banner1.jpeg')
    }
    &.slide-2 {
      background-image:url('./assets/images/banner/banner2.jpeg')
    }
    &.slide-3 {
      background-image:url('./assets/images/banner/banner3.jpeg')
    }
    &.slide-4 {
      background-image:url('./assets/images/banner/banner4.jpeg')
    }
    &.slide-5 {
      background-image:url('./assets/images/banner/banner5.jpeg')
    }
  }
}
</style>
