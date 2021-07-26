<template>
  <ul v-for="place in places" :key="place.PlaceId">
    <li>
      <h3>{{place.PlaceName}}</h3>
      <h5>{{place.CountryName}}</h5>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PlacesWrapper',
  computed: {
    places() {
      return this.$store.getters.getPlaces;
    },
  },
  created() {
    this.$store.dispatch('fetchPlaces');
  },
};
</script>
