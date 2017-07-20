<template>
	<div id="tmpMar">
		<ul class="mui-table-view mui-table-view-chevron">
			<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
				<router-link class="mui-navigate-right" v-bind="{to:'/new/newinfo/'+item.id}">
					<img class="mui-media-object mui-pull-left" :src=item.img_url>
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
						<div class="footer">
							<span>发表时间:</span>{{item.add_time | datafmt(" YYYY-MM-DD")}}
							<span class="click">点击数:</span>{{item.click}}
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
import common from '../../kits/common.js';//导入域名文件
export default {
	data() {
		return {
			list: []
		}
	},
	created() {
		this.getmsg()
	},
	methods: {
		getmsg() {
			var url = common.apidomain+"/api/getnewslist"
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
.mui-navigate-right img {
	width: 80px;
	height: 80px;
	max-width: 80px;
}

.footer {
	color: #0094ff;
	font-size: 13px;
	margin-top: 1.3em
}

.footer .click {
	margin-left: 8px;
}
</style>
