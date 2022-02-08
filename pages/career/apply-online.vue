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
              Apply Online
            </h2>
            <div class='concern-text'>
              <form action='' class='concern-text-form'>
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Your Name">
                  <small class='error-text' v-if='error.errorName'>Name can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Your Address">
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="email" class="form-control mb-1" placeholder="Your Email">
                  <small class='error-text' v-if='error.errorEmail'>Email can not be blank</small>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <select v-model="selectedDepartment" class='form-control'>
                    <option v-for="option in departments" v-bind:value="option.value">
                      {{ option.name }}
                    </option>
                  </select>
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Qualification">
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input type="text" class="form-control mb-1" placeholder="Application for the job">
                </div>
                <!-- form group end -->
                <div class='form-group'>
                  <input id="fileUpload" type="file" hidden>
                  <button @click="chooseFiles()" class='btn btn-upload px-4'>Upload CV</button>
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
import ConcernSidebarFooter from '../../components/ConcernSidebarFooter'
import ConcernSmFooter from '../../components/ConcernSmFooter'
import LeftSidebar from '../../components/career/LeftSidebar'

export default {
  name: 'ApplyOnline',
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
        errorQualification: false,
      },
      departments: [
        { value: 'accounts & finance', name: 'Accounts & Finance'},
        { value: 'compliance', name: 'Compliance'},
        { value: 'customer services', name: 'Customer Services'},
        { value: 'hr & administration', name: 'HR & Administration'},
        { value: 'information technology', name: 'Information Technology'},
        { value: 'marketing', name: 'Marketing'},
        { value: 'research', name: 'Research'},
        { value: 'trade', name: 'Trade'},
      ],
      selectedDepartment: 'accounts & finance',
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
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
