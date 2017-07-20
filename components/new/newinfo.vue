<template>
    <div id="tmpMar">
        <!--1.0 实现新闻详情-->
        <div class="title">
            <h4 v-text="msg.title"></h4>
            <p>{{msg.add_time | datafmt("YYYY-MM--DD")}} {{msg.click}}次浏览</p>
        </div>
        <div id="content" v-html="msg.content"></div>
        <!-- 使用评论组件 -->
        <comment :id="id"></comment>//白色的id为当前页面的id;第一个id是传给comment的id
    </div>
</template>
<script>
import common from '../../kits/common.js'; //导入域名文件
import comment from "../subcom/comment.vue"//导入评论组件
export default {
    components: {
        comment: comment//注册评论组件 第二个comment为引过来的子组件
    },
    data() {
        return {
            id: 0,//这个id是url中的id
            msg: {}
        }
    },
    created() {
        this.id = this.$route.params.id;//获取url中的传过来的id值
        this.getinfo()
    },
    methods: {
        getinfo() {
            var url = common.apidomain + "/api/getnew/" + this.id
            this.$http.get(url).then(function (res) {
                var data = res.body
                if (data.status != 0) {
                    Toast('Upload Complete');
                    return;
                }
                this.msg = data.message[0]
            })
        }
    }
}
</script>
<style scoped>
.title h4 {
    color: #0094ff;
}

.title p {
    color: rgba(0, 0, 0, 0.5);
}

.title,
#content {
    padding: 5px;
}

;
#content p img {
    width: 50px;
    height: 200px;
}
</style>


