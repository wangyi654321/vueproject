<template>
    <div id="tmpMar">
        <!--顶部轮播  -->
        <div id="silder">
            <silder :imgs="list"></silder>
        </div>
        <div v-for="item in detail" :key="item.id">
            <div id="buy">
                <h4>{{item.title}}</h4>
                <hr>
                <ul>
                    <li>
                        市场价:
                        <s class="market_price">${{item.market_price}}</s>
                        销售价:
                        <span class="sell">${{item.sell_price}}</span>
                    </li>
                    <li>
                        购买数量:
                    </li>
                    <li>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </li>
                </ul>
            </div>
            <div id="params">
                <h4>商品参数</h4>
                <hr>
                <ul>
                    <li>商品货号:{{item.goods_no}}</li>
                    <li>库存情况:{{item.stock_quantity}}</li>
                    <li>上架时间:{{item.add_time | datafmt("YYYY-MM-DD HH:mm:ss")}}</li>
                </ul>
            </div>
        </div>
        <div id="other">
            <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
                <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodscomment/'+id}">
                <mt-button type="danger" size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>
</template>
<script>
import common from '../../kits/common.js';//导入域名文件便于修改域名
import silder from "../silider/silder.vue";
export default {
    components: {
        silder
    },
    data() {
        return {
            id: 0,
            list: [],
            detail: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getinfo();
        this.getdetail()
    },
    methods: {
        getinfo() {
            var url = 'http://182.254.146.100:8899/api/getthumimages/' + this.id;
            this.$http.get(url).then(function (res) {
                var data = res.body
                if (data.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.list = data.message
            })
        },
        getdetail() {
            var url = 'http://182.254.146.100:8899/api/goods/getinfo/' + this.id;
            this.$http.get(url).then(function (res) {
                var data = res.body
                if (data.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.detail = data.message;
            })
        }
    }

}
</script>
<style scoped>
#tmpMar {
    margin: 45px 0 50px 0;
}

#silder {
    border: 1px solid rgba(0, 0, 0, .3);
    box-sizing: border-box;
    border-radius: 5px;
    margin: 0px 5px;
}

#buy,
#params,
#other {
    margin: 5px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 5px;
}

#buy .market_price {
    margin-right: 10px;
}

#buy .sell {
    color: red
}

#buy h4 {
    color: #007aff
}

#buy ul {
    padding-left: 5px;
}

#buy ul li {
    list-style: none;
    line-height: 35px
}

#params ul {
    padding-left: 5px;
}

#params ul li {
    list-style: none;
    line-height: 35px
}

.imgdesc {
    margin-bottom: 20px
}
</style>


