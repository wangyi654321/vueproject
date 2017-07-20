<template>
    <div id="tmpMar">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/new/newlist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callme">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import common from '../kits/common.js';
export default {
    data() {
        return {
            list: [

            ]
        }
    },
    created() {
        this.getimags()
    },
    methods: {
        getimags() {
            var url = common.apidomain + "/api/getlunbo"
            this.$http.get(url).then(function (res) {
                var data = res.body
                if (data.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.list = data.message
            })
        }
    }
}
</script>

<style scoped>
.mint-swipe {
    width: 100%;
    height: 300px;
}


.mint-swipe-item img {
    width: 100%;
    height: 100%;
    display: block
}

.mint-swipe-item {
    width: 100%;
    height: 100%;
    background: skyblue;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: 0px;
    border-bottom: 0px;
}

.mui-grid-view.mui-grid-9 {
    border-top: 0px;
    border-left: 0px;
    background-color: #fff;
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
}

.mui-icon-home:before {
    background: url(../statics/imgs/1.png) 0 0 no-repeat;
}

.mui-icon-email:before {
    background: url(../statics/imgs/2.png) 0 0 no-repeat;
}

.mui-icon-chatbubble:before {
    background: url(../statics/imgs/3.png) 0 0 no-repeat;
}

.mui-icon-location:before {
    background: url(../statics/imgs/4.png) 0 0 no-repeat;
}

.mui-icon-search:before {
    background: url(../statics/imgs/5.png) 0 0 no-repeat;
}

.mui-icon-phone:before {
    background: url(../statics/imgs/6.png) 0 0 no-repeat;
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    background-repeat: round
}
</style>

