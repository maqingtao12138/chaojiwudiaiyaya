<template>
  <div>
    <ul>
      <li v-for="item in selectedItemss" :key="item.name">
        <p>名称：{{item.name}}</p>
        <p>价格：{{item.Price}}/份</p>
        <p>数量：{{item.num}}</p>
        <p class="cleat" @click="cleat(item.id)">×</p>
      </li>
    </ul>
    <button @click="()=>{$router.push('/commodity')}">商品列表</button>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from "vuex";
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      selectedItemss: "selectedItemss",
    }),
  },
  methods: {
    ...mapMutations({
      cleat:"cleat",
    })
  },
  components: {

  }
}
</script>

<style>

</style>

