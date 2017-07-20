// 以后项目的根组件
// 主要用来存放html元素(页面结构)
<template>
    <div>
        <!-- 头部 -->
        <mt-header fixed title="vue商城"></mt-header>
        <!-- 中间 -->
        <router-view></router-view>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">消息</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-contact">
                <span class="mui-icon mui-icon-contact">
                      <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">通讯录</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
// 负责导出.Vue这个组件对象(本质上是一个vue的对象,所以vue中该定义的元素都可以使用)
export default {
    data() {  //es5中的写法data;function()
        return {

        }
    },
    created() {

    }
}
</script>
/*当前页面的css样式写到这里,其中scoped表示这个里边写的css代码只是在当前组件组件页面有效*/
<style>
.red {
    color: red
}
</style>

