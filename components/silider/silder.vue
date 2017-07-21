<template>
    <div id="tmpMar">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgs" :key="item.id">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {    
    props: ["imgs"],
    data() {
        return {
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
</style>


