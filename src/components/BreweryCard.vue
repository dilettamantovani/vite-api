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
        <div>
            <h4>Country</h4>
            <span>{{ brewery.country }}</span>
        </div>

        <div>
            <h4>City</h4>
            <span>{{ brewery.city }}</span>
        </div>

        <div>
            <h4>Postal Code</h4>
            <span>{{ brewery.postal_code }}</span>
        </div>


        <div>
            <h4>Phone Number</h4>
            <span>{{ brewery.phone }}</span>
        </div>

        <div>
            <h4>Website</h4>
            <span>{{ brewery.website_url }}</span>
        </div>
    </div>
</template>


<style scoped>
.card {
    width: calc(100% / 5 - 6rem);
    /* background-color: rgb(215, 191, 145); */
    background-color: #FFFBEB;
    border-radius: 8px;
    margin: 2rem;
    padding: 0.7rem;
}

h2 {
    margin: 0.6rem 0;
    line-height: 1.1em;
    color: #ba7f00;
}

h4 {
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
    color: #ba7f00;
}

span {
    font-size: 0.8rem;
    word-break: break-all;
    color: #B45309;
}
</style>
