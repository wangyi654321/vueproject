<template>
    <div id="tmpMar">
        <!-- 提交评论页面 -->
        <div id="postcomment">
            <h3>提交评论</h3>
            <hr>
            <textarea placeholder="请输入评论的内容" v-model="cont"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
        </div>
        <!-- 评论列表页面 -->
        <div id="list">
            <h3>评论列表</h3>
            <hr>
            <div v-for="(item,index) in list" :key="item.id">
                <div class="title">
                    <span>第{{index+1}}楼:</span>
                    <span>用户:{{item.user_name}}</span>
                    <span>发表时间:{{item.add_time |datafmt("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
        <!--3.0 实现获取更多按钮-->
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
import common from '../../kits/common.js';//导入域名文件便于修改域名
import { Toast } from "mint-ui"
export default {
    data() {
        return {
            cont: '',
            list: [],
            pageindex: 1
        }
    },
    props: ["id"],//作用用来接收父组件传入过来的id值
    created() {

        // 获取当前资讯数据的评论列表
        this.getcommentlist(this.pageindex)
    },
    methods: {

        //点击更多
        getmore() {
            this.pageindex++;
            this.getcommentlist(this.pageindex)
        },

        // 获取评论数据
        getcommentlist(pageindex) {
            pageindex = pageindex || 1;
            var url = common.apidomain + "/api/getcomments/" + this.id + "?pageindex=" + pageindex;
            console.log(url)
            this.$http.get(url).then(function (res) {
                if (res.body.status != 0) {
                    Toast(res.body.message);
                    return;
                }
                this.list = this.list.concat(res.body.message)
            })
        },

        // 提交评论数据
        postcomment() {
            if (this.cont.length <= 0) {
                Toast("请输入内容后提交")
                return;
            }
            var url = common.apidomain + "/api/postcomment/" + this.id;
            this.$http.post(url, { content: this.cont }, { emulateJSON: true }).then(function (res) {
                Toast(res.body.message);
                // 增加一个数组使用户每次评论的内容置于第一个
                this.list = [{
                    "user_name": "匿名用户",
                    "add_time": new Date(),
                    "content": this.cont
                }].concat(this.list)
                this.cont = ''
            })
        }
    }
}
</script>
<style scoped>
.title{
    padding-left: 3px;
    font-size: 13px;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.2);
}
.mui-table-view li{
    padding: 8px 15px;
    font-size: 15px;
}
#postcomment,
#list {
    padding: 5px;
}
</style>


