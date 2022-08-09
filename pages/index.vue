<template>
  <main class="container">
    <b-jumbotron header="EpicData" lead="Epic Games Store data tracker. Created by Kysune, relaunched by SrDraBx." style="margin:2rem 0">
      <b-button variant="primary" to="/items">Items</b-button>
      <b-button variant="primary" to="/offers">Offers</b-button>
      <b-button variant="primary" to="/offers?category=games&sortBy=5">New Games</b-button>
      <b-button variant="primary" to="/promotions">Promotions</b-button>
      <b-button variant="primary" href="https://discord.gg/Y2pymKn" target="_blank">Discord</b-button>
      <b-button href="https://github.com/EpicData-info" target="_blank">Source Code</b-button>
    </b-jumbotron>
    <b-container>
      <h2>Tracking Repositories</h2>
      <p>
        <b-link href="https://github.com/nachoaldamav/offers-tracker" target="_blank">https://github.com/nachoaldamav/offers-tracker</b-link><br />
        <b-link href="https://github.com/nachoaldamav/items-tracker" target="_blank">https://github.com/nachoaldamav/items-tracker</b-link><br />
        <b-link href="https://github.com/nachoaldamav/prices-tracker-egs" target="_blank">https://github.com/nachoaldamav/prices-tracker-egs</b-link><br />
      </p>
      <br />
      <h2>Quick guide with github raw data</h2>
      <b-form-group
        label="Get offer details"
        description="Replace {OFFER_ID}. Sample id: 9064fdd49de04718abe631788ad5a759"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/offers-tracker/main/database/offers/{OFFER_ID}.json"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Get item details"
        description="Replace {OFFER_ID}. Sample id: 9064fdd49de04718abe631788ad5a759"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/items-tracker/main/database/items/{OFFER_ID}.json"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Get current price for country"
        description="Replace {COUNTRY} and {OFFER_ID}. Sample values: US, 9064fdd49de04718abe631788ad5a759"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/prices-tracker-egs/main/database/prices/{COUNTRY}/{OFFER_ID}.json"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Get prices history for country"
        description="Replace {COUNTRY} and {OFFER_ID}. Sample values: US, 9064fdd49de04718abe631788ad5a759"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/prices-tracker-egs/main/database/prices-history/{COUNTRY}/{OFFER_ID}.json"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Get all namespaces with their offers"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/offers-tracker/main/database/namespaces.json"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Get all namespaces with their items"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/items-tracker/main/database/namespaces.json"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Get tracking statistics"
        description="Replace {REPOSITORY}. Currently available are three repositories: offers-tracker, items-tracker, prices-tracker-egs"
      >
        <b-form-input readonly value="https://raw.githubusercontent.com/nachoaldamav/{REPOSITORY}/main/database/tracking-stats.json"></b-form-input>
      </b-form-group>
      <br />
    </b-container>
  </main>
</template>

<script>

export default {
  components: {
    
  }
}
</script>
