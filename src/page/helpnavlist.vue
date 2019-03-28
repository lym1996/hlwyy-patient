<template>
    <div>
        <div class="height200">
            <b-img :src="bzzxImg" class="height200" style="width:100%;margin-top:-1px;"/>
        </div>
        <div class="width100pct bgcolor-f4f4f4 margintop20" style="margin-bottom:92px;">
            <div class="clear marginXauto width1210">
                <div class="floatLeft bgcolor-white border-color">
                    <p class="width140 height45 theme-color-40c7c3 fontsize18 bold marginleft40 lineheight45">帮助中心</p>
                    <ul>
                        <li @click="helplist(type,index)" v-for="(type,index) in typeList" :key="index" 
                            :class="['personlist', 'bgcolor-white', 'width180', 'height45', 'lineheight45', 'fontsize16', 'bordertop', 'cursorPointer', {'selected': type.classflag}]">
                            <span :class="['inlinBlock', 'marginleft40', 'color-333', 'personlistcon', {'selected-text': type.classflag}]" style="width:100%;height:100%">
                                <span>{{type.typeName}}</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="floatLeft marginleft15 marginbottom55  width1010 clear">
                    <div class="bgcolor-white border-color paddingbottom40">
                        <p class="borderbottom width950 height45 lineheight45  marginleft30 marginright30 fontsize18 bold">{{title}}</p>
                        <div class="marginleft30 marginright30 margintop30 fontsize14">
                            <p class="marginbottom20 color-333"></p>
                            <div class="color-666" v-html="content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bzzxImg from '../assets/img/configImg/bzzxbanner40c7c3.png'
export default {
    data() {
        return {
            classflag:false,
            bzzxImg:bzzxImg,
            id:null,
            title:'预约挂号问题',
            content:'覅偶威锋网聚隆科技管理会计过来看看路公交。',
            typeList:[
                {
                    id:0,
                    classflag:true,
                    typeName:'预约挂号问题',
                    content:'覅偶威锋网聚隆科技管理会计过来看看路公交。'
                },{
                    id:1,
                    classflag:false,
                    typeName:'使用指南',
                    content:'进来看手机GV快乐时间来感受就是快乐。'
                },{
                    id:2,
                    classflag:false,
                    typeName:'服务条款',
                    content:'就hisVB工会干部二红白歌会如何变革然后。'
                },{
                    id:3,
                    classflag:false,
                    typeName:'账号相关问题',
                    content:'妇女客户个人工一我服个我一个女孩好久开始的更换会计师给。'
                },{
                    id:4,
                    classflag:false,
                    typeName:'其他问题',
                    content:'发你空间是否回款计划就开个会看见了'
                }
            ]
        }
    },
    mounted() {
        if(this.$route.query.id == undefined){
            this.id = 0
        }else{
            this.id = this.$route.query.id
        }
        
        for(let i = 0; i<this.typeList.length; i++) {
            if(this.typeList[i].id == this.id){
                this.title = this.typeList[i].typeName
                this.content = this.typeList[i].content
                this.typeList[i].classflag = true
            }else {
                this.typeList[i].classflag = false
            }
        }
    },
    methods: {
        helplist(type,index){
            this.typeList[index].classflag = true
            for(let i=0; i<this.typeList.length; i++) {
                if(i != index) {
                    this.typeList[i].classflag = false
                }
            }
            this.title = type.typeName
            this.content = type.content
        }
    },
}
</script>
<style scoped>
	.selected{
		background: #40c7c3;
	}
    .selected-text{
        color: #FFF;
    }
</style>