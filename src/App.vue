<script>
import axios from 'axios';
import { store } from './store.js'
import BreweryCard from './components/BreweryCard.vue';

export default {
  components: {
    BreweryCard
  },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>
  <main>
    <h1>Scotland's Best Breweries</h1>
    <div id="wrapper">
      <BreweryCard />
    </div>
  </main>
</template>

<style scoped></style>
