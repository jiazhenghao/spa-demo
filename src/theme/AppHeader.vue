<template>
  <nav class="nav has-shaddow">
    <div class="container">
      <router-link to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link to="/category/front-end" class="nav-item is-tab">
        Front-end
      </router-link>
      <router-link
        :to="{ name: 'category', params: { id: 'mobile' } }"
        class="nav-item is-tab"
      >
        Mobile
      </router-link>
      <router-link to="/login" class="nav-item is-tab">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
// import eventBus from "../event-bus";
import { mapGetters } from "vuex";
export default {
  // data() {
  //   return {
  //     isAuthenticated: false
  //   };
  // },
  // created() {
  //   eventBus.$on("authStatusUpdate", isAuthenticated => {
  //     this.isAuthenticated = isAuthenticated;
  //   });
  // }
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>

<style lang="scss" scoped></style>
