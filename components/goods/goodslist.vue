<template>
    <div id="tmpMar">
        <div class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list" :key="item.id">
                    <router-link v-bind='{to:"/goods/goodsinfo/"+item.id}'>
                        <img class="mui-media-object" :src='item.img_url'>
                        <div class="mui-media-body" v-text="item.title"></div>
                        <div class="desc">
                            <p>
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_price}}</s>
                            </p>
                            <p>
                                <h6 class="left">热卖中</h6>
                                <h6 class="right">剩余{{item.stock_quantity}}件</h6>
                            </p>
                        </div>
                     </router-link>
                </li>
            </ul>
        </div>   
    </div>
</template>

<script>
import common from '../../kits/common.js';//导入域名文件便于修改域名
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getlist();
    },
    methods: {
        getlist() {
            var url = common.apidomain + '/api/getgoods?pageindex=1';
            console.log(url)
            this.$http.get(url).then(function (res) {
                if (res.body.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.list = res.body.message
            })
        }
    }
}
</script>

<style scoped>
.mui-table-view-cell {
    border: 1px solid rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 0 4px #000;
    -moz-box-shadow: 0 0 4px #000;
    box-shadow: 0 0 4px #000;
    margin-left: 4px;
    padding: 5px;
}

.mui-media {
    color: #0094ff;
}

.mui-content .desc {
    height: 60px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    padding: 5px;
    text-align: left;
}

.mui-table-view-cell>a:not(.mui-btn) {
    padding: 5px 5px;
    box-sizing: border-box;
}

.mui-content .desc span {
    color: red;
    margin-right: 15px;
}

.mui-content .desc .right {
    position: absolute;
    right: 10px;
    bottom: 5px;
}

.mui-content .desc .left {
    position: absolute;
    left: 10px;
    bottom: 5px;
}












/* 9宫格缩略图的样式*/

.mui-content img {
    width: 100px;
    height: 100px;
}
</style>


