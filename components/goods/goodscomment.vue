<template>
    <div id="tmpMar">
        <comment :id="id">{{id}}</comment>
    </div>
</template>
<script>
import comment from "../subcom/comment.vue"
export default {
    components: {
        comment: comment
    },
    data() {
        return {
            id: 0
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    methods: {

    }
}
</script>
<style scoped>
/* 实现原理  因为评论组件是一个单独的模块且所有评论域名相同只是根据id值获取对应的评论内容
  所以可以使用父组件向子组件传值的功能来实现该功能
1\首先在a标签设置链接地址并加入传入id值  改变url中的值 ;
2\需要在main.js中引入goodscomment设置路由 当页面中url值为path: '/goods/goodscomment/:id',的时候 展现出该组件goodscomment;
3\然后建立评论页面接收url栏中的id值  此时并引入评论组件将该id值传给评论组件*/
</style>


