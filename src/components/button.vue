<template>
  <div>数量：
    <i @click="updata({index,operation:-1})">-</i>
    <span>{{ num }}</span>
    <i @click="updata({index,operation:1})">+</i>
  </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
  data() {
    return {};
  },
  props: {
    num: Number,
    index:Number,
  },
  methods: {
    ...mapMutations({
        updata:"updata",
    })
  },
  components: {},
};
</script>
