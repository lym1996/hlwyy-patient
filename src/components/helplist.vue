<template>
    <div class="homehelplist clear fontsize2">
        <div v-for="(type,index) in typeList" :key="index" @click="goHelpCenter(type.id)" class="helpLi">
            <div :class="['margin25X', 'padding10X', 'paddingX10', {'borderright-dotted' : index%2===0}]">
                <i :class="type.icon" class="theme-color-40c7c3" style="font-size:36px;"></i>
                <p v-html="type.name" :title="type.name" class="margintop25 lineEllipsis color-959595"></p>
            </div>
            <div v-if="index !== 4" class="marginX10 borderbottom-dashed"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            typeList:[
                {
                    id:0,
                    icon:'icon-appoint',
                    name:'预约挂号问题'
                },{
                    id:1,
                    icon:'icon-guide',
                    name:'使用指南'
                },{
                    id:2,
                    icon:'icon-visited',
                    name:'服务条款'
                },{
                    id:3,
                    icon:'icon-account',
                    name:'账号相关问题'
                },{
                    id:4,
                    icon:'icon-andSoOn',
                    name:'其他问题'
                },
            ]
        }
    },
    methods: {
        goHelpCenter(id){
            this.$router.push({path:'helpnavlist' , query: {id:id}})
        }
    },
}
</script>