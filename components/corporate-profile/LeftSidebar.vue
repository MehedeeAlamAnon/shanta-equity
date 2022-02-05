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
          <h4 class='title text-capitalize mb-0 heading-6'>Corporate Profile</h4>
        </NuxtLink>
        <!-- breadcrumb end -->
        <ul class='sidebar-menu list-group mt-5'>
          <NuxtLink to='/corporate-profile/background' class='list-group-item list-group-item-action text-capitalize'>Background</NuxtLink>
          <NuxtLink to='/corporate-profile/who-we-are' class='list-group-item list-group-item-action text-capitalize'>Who we are</NuxtLink>
          <NuxtLink to='/corporate-profile/vision-mission' class='list-group-item list-group-item-action text-capitalize'>The vision & mission</NuxtLink>
          <NuxtLink to='/corporate-profile/our-core-values' class='list-group-item list-group-item-action text-capitalize'>our core values</NuxtLink>
          <NuxtLink to='/corporate-profile/board-of-directors' class='list-group-item list-group-item-action text-capitalize'>board of directors</NuxtLink>
          <NuxtLink to='/corporate-profile/our-logo' class='list-group-item list-group-item-action text-capitalize'>our logo</NuxtLink>
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
