<template>
  <div id="app" class="my-default-layout" :class="classSidebar +' '+ classSlideNavMobile+' '+classOpendOverflow">
    <section class="main-wrapper" :class="classSlideNavMobile">
      <Header/>
      <Sidebar/>
      <main class="page-wrapper">
        <section class="content">
          <router-view></router-view>
        </section>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  computed: {
    classSidebar() {
      return this.$store.state.header.classSidebar;
    },
    classSlideNavMobile() {
      return this.$store.state.header.classMobile.slideNav;
    },
    classOpendOverflow() {
      return this.$store.state.header.classMobile.opendOverflow;
    }
  }
};
</script>
