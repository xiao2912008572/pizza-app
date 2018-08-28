<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <!-- 遍历菜单列表 -->
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <!-- 遍历pizza的相关参数 -->
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button @click="addToBasket(item,option)" class="btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 购物车 -->
    <div class="col-md-4 col-sm-12">
      <div v-if="baskets.length > 0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets">
            <tr>
              <td>
                <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
              </td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价 : {{total + "RMB"}} </p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{basketText}}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "",
  data() {
    return {
      baskets: [],
      basketText: "购物车没有任何商品",
      getMenuItems: {
        1: {
          name: "榴莲pizza",
          description: "这是喜欢吃榴莲朋友的最佳选择",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        2: {
          name: "芝士pizza",
          description: "芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        3: {
          name: "夏威夷pizza",
          description: "众多人的默认选择",
          options: [
            {
              size: 9,
              price: 36
            },
            {
              size: 12,
              price: 46
            }
          ]
        }
      }
    };
  },
  computed: {
    total() {
      let totalCost = 0;

      // 遍历haskets数组，这个数组存放的是购物车对象
      for (let index in this.baskets) {
        // 拿到每个对象
        let individualItem = this.baskets[index];
        totalCost += individualItem.quantity * individualItem.price;
      }
      return totalCost;
    }
  },
  methods: {
    addToBasket(item, option) {
      // 用一个对象来接收相关值
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };

      if (this.baskets.length > 0) {
        // 过滤，ES6语法，遍历baskets中的每一个basket，然后判断basket的name是否等于新增时候传进来的item的name，
        // 判断basket的price是否等于新增时传进来的item的price，这里的basket是作为一个位置参数
        let result = this.baskets.filter(basket => {
          return basket.name === item.name && basket.price === option.price;
        });
        // 如果找到的结果不为空并且长度>0 ,那么就把结果中的第一条的数据数量自加
        if (result != null && result.length > 0) {
          console.log("result", result);
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        // 直接push添加到baskets
        this.baskets.push(basket);
      }
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        // console.log("item", item);
        // console.log("baskets", this.baskets);
        // console.log("index", this.baskets.indexOf(item));
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
      // console.log("incresabaskets", this.baskets);
    },
    removeFromBasket(item) {
      // splice拿掉数组某个下标的数据，删除的数为1
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>
<style scoped>
</style>
