<template>
  <top-navigation />
  <div class="container">
    <places-wrapper />
  </div>
</template>

<script>
import TopNavigation from './TopNavigation.vue';
import PlacesWrapper from './PlacesWrapper.vue';

export default {
  name: 'Home',
  components: { TopNavigation, PlacesWrapper },
};
</script>
