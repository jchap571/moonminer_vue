// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'


</script>


// HTML
<template>
<div class="container">
  <!-- Title -->
<section class="row">
  <div class="d-flex text-center mt-3">
    <div class="col-12 fs-3">
    Moon Miner
    </div>
  </div>
</section>


<!-- Hero picture and clickable resource -->
<section class="row">
  <div id="moon-img" class="container-fluid">
  </div>
</section>


<!-- Resource counter, click stats and autostats -->
<section class="row">
<div class="d-flex align-items-end">
  <div class="col-4  align-items-end">
    Click Upgrade Bonus
  </div>

  <div class="col-4">
    Moon Ore Count
    <span>1000000</span>
  </div>

  <div class="col-4">
    Autoupgrade Bonus Timer
  </div>
</div>
</section>


<!-- Click upgrade/auto upgrade buttons and stats -->
<section class="row">
<div class="col-3">
Click Upgrades
  <button>Knife</button>
  <button>Drill</button>
</div>

<div class="col-3">
Automatic Upgrades
  <button>Mousetronaut</button>
  <button>Space Station</button>
</div>

<div class="col-3">
Click stats
  <span># of Knives = to x bonus</span>
  <span># of drills = to x bonus</span>
</div>

<div class="col-3">
  <span># of Mousetronauts = to x bonus</span>
  <span># of Space Stations = to x bonus</span>
</div>



</section>







   







</div>





</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
