<template>
  <div>
    <ul>
      <li v-for="(item, index) in eatList" :key="item.name">
        <p>名称：{{ item.name }}</p>
        <p>价格：{{ item.Price }}/份</p>
        <p><Button :num="item.num" :index="index"></Button></p>
      </li>
    </ul>
    <button
      @click="
        () => {
          $router.push('/');
        }
      "
    >
      购物车
    </button>
  </div>
</template>

<script>
import Button from "../components/button";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      eatList: "commodityList",
    }),
  },
  methods: {},
  mounted() {

  },
  components: {
    Button,
  },
};
</script>

// <style lang="scss" scope>
// ul {
//   li {
//     position: relative;
//     margin-top: 20px;
//     width: 250px;
//     overflow: hidden;
//     text-align: center;
//     list-style: none;
//     float: left;
//     margin-left: 10px;
//     box-shadow: 2px 2px 5px 3px #e1e1e1;
//     .cleat {
//       position: absolute;
//       right: 5px;
//       top :5px;
//       width: 25px;
//       height: 25px;
//       border: 1px solid red;
//       color:#f00;
//       border-radius: 50%;
//       cursor: pointer;
//     }
//   }
// }
// </style>

