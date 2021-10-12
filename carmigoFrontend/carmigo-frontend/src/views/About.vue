<template>
  <div class="card text-center m-3">
    <h5 class="card-header">GET Request with Async/Await</h5>
    <div class="card-body">Total vue packages: {{vehicles}}</div>
    <div class="card-body">Total vue packages: {{vehiclesOne}}</div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th id="make">
              make
            </th>
            <th id="model">
              model
            </th>
            <th id="color">
              color
            </th>
            <th id="year">
              year
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="vehicle in vehicles"
            :key="vehicle.id"
          >
            <td>{{ vehicle.make }}</td>
            <td>{{ vehicle.model }}</td>
            <td>{{ vehicle.color }}</td>
            <td>{{ vehicle.year }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<style>
#make, #model, #color, #year{
  text-align: center;
}
</style>
<script>
import axios from 'axios';

export default {
  name: "get-request-async-await",
  data() {
    return {
      vehicles: null,
    };
  },
  async created() {
    // GET request using axios with async/await
    const response = await axios.get("http://localhost:3000");
    this.vehicles = response.data;
    console.log(this.vehicles.length);  
    for(var i = 0; i < this.vehicles.length; i++){
      console.log(this.vehicles[i]);
      console.log(this.vehicles[i].color);

    }  
  }
};
</script>
