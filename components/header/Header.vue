<template>
  <div class="" id="bg-header-navbar">
    <b-navbar toggleable="lg" type="dark">
      <Logo />
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <NuxtLink to="/opportunity" class="menu-link">Opportunity</NuxtLink>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/impact" class="menu-link">Impact</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/calculator" class="menu-link">Calculator</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/news" class="menu-link">News</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/about" class="menu-link">About</nuxt-link>
              </b-nav-item>
              <b-nav-item>
                <nuxt-link to="/contact" class="menu-link">Contact</nuxt-link>
              </b-nav-item>
              <Search />
            </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '~/components/header/Logo.vue';
import Menu from '~/components/header/Menu.vue';

export default Vue.extend({
  components: {
    Logo,
    Menu,
  },
});
</script>

<style scoped>
.header {
  display: flex;
  height: 78px;
  justify-content: center;
  background-color: #062155;
}
#bg-header-navbar {
    background-color: #062155 !important;
}
#navbar-brand {
  width: 60%;
}
@media screen and (min-width: 420px){
  #bg-header-navbar nav {
    margin: 0 150px 0 150px !important;
  }
}
.header-container {
  width: 80%;
  display: flex;
}
.menu-link {
  color: #fff;
  font-size: .975rem;
  text-decoration: none;
  font-weight: 700;
}
.nav-item {
  margin-right: 50px;
}
</style>
