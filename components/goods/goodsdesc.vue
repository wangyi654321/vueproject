<template>
    <div id="tmpMar">
        <h4 v-text="info.title"></h4>
        <p class="line"></p>
        <p v-html="info.content"></p>
    </div>
</template>
<script>
import common from '../../kits/common.js';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            id: 0,
            info: []
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getinfo()
    },
    methods: {
        getinfo() {
            var url = 'http://182.254.146.100:8899/api/goods/getdesc/' + this.id
            this.$http.get(url).then(function (red) {
                this.$http.get(url).then(function (res) {
                    var data = res.body
                    if (data.status != 0) {
                        Toast('Upload Complete');
                        return;
                    }
                    this.info = data.message[0]
                })
            })
        }
    },
}
</script>
<style scoped>
#tmpMar img {
    max-width: 375px;
}

#tmpMar {
    padding: 5px;
}

#tmpMar h4 {
    color: #0094ff;
}

#tmpMar .line {
    height: 1px;
    border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>


