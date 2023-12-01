<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    name: 'AppSearchEvent',
    data() {
        return {
            store
        }
    },

    methods: {
        search() {
            console.log('Search: ', this.store.searchString);
            this.$emit('search');
        },
    }
}

</script>


<template>
    <div>
        <input placeholder="Browse by Postal Code" v-model="store.searchString" @keyup.enter="search">
    </div>
</template>


<style scoped></style>
