import { reactive } from 'vue'

export const store = reactive({
    breweriesAPI: "https://api.openbrewerydb.org/v1/breweries?by_country=scotland&by_postal",
    breweries: [],
    searchString: ''
});