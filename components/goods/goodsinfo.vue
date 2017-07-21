<template>
    <div id="tmpMar">
        <!-- {{id}} -->
        <silder :imgs="list"></silder>
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
            list: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getinfo()
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
                console.log(this.list)
            })
        }
    }

}
</script>
<style scoped>

</style>


