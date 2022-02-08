<template>
  <aside class="sidebar left-sidebar bg-theme-secondary vh-100">
    <div class="sidebar-inner sidebar-body d-flex flex-wrap">
      <div class="header">
        <Logo />
      </div>
      <!-- header end -->
      <div class='sidebar-inner-body align-self-start'>
        <a href="javascript:void(0)" class='sidebar-concern-title d-flex align-items-center' @click='openMegaMenu'>
          <img src='~/assets/images/arrow.svg' alt='arrow' class='arrow-icon img-fluid'>
          <h4 class='title text-capitalize mb-0 heading-6'>Products</h4>
        </a>
        <!-- breadcrumb end -->
        <ul class='sidebar-menu list-group mt-5'>
          <NuxtLink to='/products/ipo' class='list-group-item list-group-item-action text-capitalize'>IPO</NuxtLink>
          <NuxtLink to='/products/cta' class='list-group-item list-group-item-action text-capitalize'>CTA</NuxtLink>
          <NuxtLink to='/products/mta' class='list-group-item list-group-item-action text-capitalize'>MTA</NuxtLink>
        </ul>
        <!-- sidebar menu end -->
      </div>
      <!-- sidebar menu end -->
      <ConcernSidebarFooter />
      <!-- sidebar footer end -->
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LeftSidebar',
  methods: {
    ...mapActions(['openMegaMenu'])
  }
}
</script>

<style scoped>

</style>
