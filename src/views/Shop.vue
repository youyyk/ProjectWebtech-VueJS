<template>
  <div class="shop">
    <h1>Shopping</h1>
    <div v-for="(item, index) in itemsDummy" :key="index">
      <item-card :itemInput="item"></item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard.vue'
export default {
  components: { 
    ItemCard 
  },
  data() {
      return {
          itemsDummy:[
            {
              name: "A",
              price: 100,
              explain: "explain01"
            },
            {
              name: "B",
              price: 200,
              explain: "explain02"
            },
            {
              name: "C",
              price: 500,
              explain: "explain03"
            },
            {
              name: "D",
              price: 50,
              explain: "explain04"
            },
            {
              name: "E",
              price: 250,
              explain: "explain05"
            },
          ]
      }
  }
}
</script>

<style>

</style>
