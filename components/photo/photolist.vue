<template>
    <div id="tmpMar">
        <!--1.0 图片分类-->
        <div id="cate">
            <ul v-bind="{style:'width:'+ulWidth+'px'}">
                <li @click="getimgs(0)">全部</li>
                <li v-for="item in cates" :key="item.id" @click="getimgs(item.id)">{{item.title}}</li>
            </ul>
        </div>
    
        <!--2.0 图片列表-->
        <div id="imglist">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                        <img v-lazy="item.img_url">
                    </router-link>
                    <div id="desc">
                        <h5 v-text="item.title"></h5>
                        <p v-text="item.zhaiyao"></p>
                    </div>
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
            ulWidth: 0,
            cates: [],
            id: 1,
            list: []
        }
    },
    created() {
        this.getcates();
        this.getimgs()
    },
    methods: {
        getcates() {
            var url = common.apidomain + '/api/getimgcategory';
            this.$http.get(url).then(function (res) {
                if (res.body.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.cates = res.body.message;
                var liWidth = 62;
                this.ulWidth = liWidth * (res.body.message.length + 1)
            })
        },
        // http://182.254.146.100:8899/api/getimages/:cateid
        getimgs(cateid) {
            cateid=cateid || 0
            var url = 'http://182.254.146.100:8899/api/getimages/'+cateid
            this.$http.get(url).then(function (res) {
                if (res.body.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.list = res.body.message;
            })
        },
    }
}
</script>
<style scoped>
#cate {
    width: 375px;
    max-width: 375px;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
}





/* 取消移动端滚动条*/

 ::-webkit-scrollbar {
    width: 4px;
}

 ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 211, 0);
    border-radius: 10px;
}

 ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0);
    -webkit-box-shadow: inset 0 0 6px rgba(255, 125, 232, 0);
}

#cate ul {
    margin: 0px;
    padding-left: 10px;
}

#cate li {
    list-style: none;
    display: inline-block;
    color: #0094ff;
    font-size: 14px;
    padding-left: 6px;
}

#imglist ul {
    padding: 0;
    margin: 0;
}

#imglist li {
    width: 100%;
    list-style: none;
    height: 300px;
    position: relative;
}

#imglist li img {
    width: 100%;
    height: 300px;
}

#desc {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 2px;
    left: 0px;
}

#desc h5 {
    color: #ffffff;
    font-weight: bold;
}

#desc p {
    color: #fff;
}

image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>
