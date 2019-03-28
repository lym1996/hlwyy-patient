<template>
    <div>
        <ul class="lineheight45 width1210 marginXauto">    
            <li v-for="(list,index) in dataList" :key="index" class="marginleft50 floatLeft">
                <a v-if="list.IsNewWindow == true" target="_blank" :href="list.url" :class="['navLink', {'active' : list.isCur}]"></a>
                <a :href="list.url" :class="['navLink', {'active' : list.isCur}]">{{list.content}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataList:[
                {
                    url:'#/home',
                    content:'首页',
                    isCur:false
                },{
                    url:'#/findDept',
                    content:'找科室',
                    isCur:false
                },{
                    url:'#/findDoc',
                    content:'找医生',
                    isCur:false
                },{
                    url:'#/helpnavlist',
                    content:'帮助中心',
                    isCur:false
                },{
                    url:'#/personCenter/menRecord',
                    content:'个人中心',
                    isCur:false
                }
            ]
        }
    },
}
</script>