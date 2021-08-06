<template>
  <div class="home">
    <ads-slide></ads-slide>
    <div v-for="(item, index) in itemsDummy" :key="index">
      <item-card :itemInput="item"></item-card>
    </div>
  </div>
  
</template>

<script>
import ItemApiStore from '@/store/ItemApi'
import AdsSlide from '../components/AdsSlide.vue'
import ItemCard from '../components/ItemCard.vue'
export default {
  components: { 
    ItemCard,
    AdsSlide
  },
  data() {
      return {
          itemsDummy: []
      }
  },
  created(){
    this.fetchItems()
  },
  methods:{
    async fetchItems(){
      await ItemApiStore.dispatch('fetchItems')
      this.itemsDummy = ItemApiStore.getters.items
    }
  }
}
</script>

<style lang="scss">

</style>
