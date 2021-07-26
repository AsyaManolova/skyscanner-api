<template>
  <nav class="navbar justify-content-between p-3">
    <span class="navbar-brand">{{ title }}</span>
    <span>
<!--      <span>-->
<!--        <input type="text" placeholder="Search" v-model="keyword">-->
<!--        <input type="image" class="search-button" :src="require('@/assets/icon-search.svg')"-->
<!--               alt="Search" @click="search">-->
<!--      </span>-->
    </span>
  </nav>
</template>

<script>
export default {
  name: 'TopNavigation',
  data() {
    return {
      title: 'Places',
    };
  },
  methods: {
    search() {
      if (this.keyword) {
        // Redirect to search results page
        this.$router.push({
          name: 'search',
          query: { query: this.keyword },
        });
      }
    },
  },
};
</script>

<style>
.navbar {
  background-color: darkcyan;
  color: #fff;
}

.search-button {
  margin-left: 0.3rem;
}
</style>
