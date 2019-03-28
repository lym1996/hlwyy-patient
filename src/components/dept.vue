<template>
    <div class="paddingX30 clear">
        <div class="textAlignCenter dept cursorPointer" v-if="!deptlist || deptlist.length == 0">
            <img class="margintop25 nodept" :src="nodept" width="200" alt="">
        </div>
        <div v-for="(dept,index) in deptlist" :key="index" style="width:16.6%" :class="['floatLeft', 'padding20X', 'textAlignCenter', 'cursorPointer', {'borderbottom-dotted': index < 6}, {'borderleft-dotted': index !==0 && index !== 6}]"
        @click="gofindDept(dept.deptName)">
            <img :src="dept.departmentLogo==''?ebyhk:dept.departmentLogo" width="45" height="45">
            <p v-html="dept.deptName" class="margintop10 lineEllipsis width100pct"></p>
        </div>
    </div>
</template>
<script>
import nodept from '../assets/img/nodept.png'
import ebyhk from '../assets/img/dept/icon-ebyhk.png'
export default {
    data() {
        return {
            nodept:nodept
        }
    },
    methods: {
        gofindDept(name){
            this.$router.push({ path:'findDept' , query:{deptName:name}})
        }
    },
    props:["deptlist"]
}
</script>