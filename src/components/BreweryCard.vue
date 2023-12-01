<script>
export default {
    name: 'BreweryCard',
    props: {
        brewery: Object
    }
}
</script>


<template>
    <div class="card">
        <h2>{{ brewery.name }}</h2>
        <h4>Country</h4>
        <span>{{ brewery.country }}</span>
        <h4>City</h4>
        <span>{{ brewery.city }}</span>
        <h4>Postal Code</h4>
        <span>{{ brewery.postal_code }}</span>
        <h4>Phone Number</h4>
        <span>{{ brewery.phone }}</span>
        <h4>Website</h4>
        <span>{{ brewery.website_url }}</span>
    </div>
</template>


<style scoped>
.card {
    width: calc(100% / 5 - 6rem);
    background-color: rgb(215, 191, 145);
    border-radius: 8px;
    margin: 2rem;
    padding: 3rem;
}

h4 {
    margin: 0.4rem 0 0 0;
}
</style>
