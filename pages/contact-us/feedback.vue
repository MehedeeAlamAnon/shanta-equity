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
              Feedback
            </h2>
            <div class='concern-text'>
              <h5 class='concern-text-title font-weight-bold mb-5'>
                Interested in us? <br>
                Contact us for your requirement
              </h5>
              <form action='' class='concern-text-form'>
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Your Name">
                  <small class='error-text' v-if='error.errorName'>Name can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="email" class="form-control mb-1" placeholder="Your Email">
                  <small class='error-text' v-if='error.errorEmail'>Email can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Your Phone">
                  <small class='error-text' v-if='error.errorPhone'>Phone can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Your Subject">
                  <small class='error-text' v-if='error.errorSubject'>Subject can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="A brief about your query">
                  <small class='error-text' v-if='error.errorBrief'>Comment can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='mt-5'>
                  <button type='submit' class='btn btn-light'>Submit</button>
                </div>
                <!-- form group end -->
              </form>
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
import LeftSidebar from '~/components/contact-us/LeftSidebar'

export default {
  name: 'Feedback',
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
      error: {
        errorName: false,
        errorEmail: false,
        errorPhone: false,
        errorSubject: false,
        errorBrief: false,
      },
    }
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click()
    },
  }
}
</script>

<style lang="scss" scoped></style>
