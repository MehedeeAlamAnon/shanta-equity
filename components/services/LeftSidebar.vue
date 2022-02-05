<template>
  <aside class="sidebar left-sidebar bg-theme-secondary vh-100">
    <div class="sidebar-inner sidebar-body d-flex flex-wrap">
      <div class="header">
        <Logo />
      </div>
      <!-- header end -->
      <div class='sidebar-inner-body align-self-start'>
        <NuxtLink to="" class='sidebar-concern-title d-flex align-items-center'>
          <img src='~/assets/images/arrow.svg' alt='arrow' class='arrow-icon img-fluid'>
          <h4 class='title text-capitalize mb-0 heading-6'>Products</h4>
        </NuxtLink>
        <!-- breadcrumb end -->
        <ul class='sidebar-menu list-group mt-5'>
          <NuxtLink to='/services/sms' class='list-group-item list-group-item-action text-capitalize'>SMS</NuxtLink>
          <NuxtLink to='/services/beftn' class='list-group-item list-group-item-action text-capitalize'>BEFTN</NuxtLink>
          <NuxtLink to='/services/dp' class='list-group-item list-group-item-action text-capitalize'>DP</NuxtLink>
          <NuxtLink to='/services/internet-trading' class='list-group-item list-group-item-action text-capitalize'>Internet Trading</NuxtLink>
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
export default {
  name: 'LeftSidebar'
}
</script>

<style scoped>

</style>
