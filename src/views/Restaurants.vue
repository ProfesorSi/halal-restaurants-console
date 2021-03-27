<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>Naziv</md-table-head>
        <md-table-head>Opis</md-table-head>
        <md-table-head>Grad</md-table-head>
        <md-table-head>Mjesto</md-table-head>
        <md-table-head>Lokacija</md-table-head>
        <md-table-head>Telefon</md-table-head>
        <md-table-head>Muzika</md-table-head>
        <md-table-head>Crveno meso</md-table-head>
        <md-table-head>Janjetina</md-table-head>
        <md-table-head>Piletina</md-table-head>
      </md-table-row>

      <md-table-row v-for="(restaurant, index) in restaurants" :key="index">
        <md-table-cell>{{ restaurant.naziv }}</md-table-cell>
        <md-table-cell>{{ restaurant.opis }}</md-table-cell>
        <md-table-cell>{{ restaurant.grad }}</md-table-cell>
        <md-table-cell>{{ restaurant.mjesto }}</md-table-cell>
        <md-table-cell>{{ restaurant.lokacija }}</md-table-cell>
        <md-table-cell>{{ restaurant.telefon }}</md-table-cell>
        <md-table-cell>{{ restaurant.muzika }}</md-table-cell>
        <md-table-cell>{{ restaurant.crveno_meso }}</md-table-cell>
        <md-table-cell>{{ restaurant.janjetina }}</md-table-cell>
        <md-table-cell>{{ restaurant.piletina }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/restorani").then((response) => {
      console.log(response.data);
      this.restaurants = response.data;
    });
  },
};
</script>
<style scoped>
.md-table-head,
.md-table-cell {
  text-align: center;
}
</style>