<template>
    <div class="marginleft35 marginright35 padding15X flex-align-spacebetween">
        <div v-for="(item, index) in stepList" :key="index" class="flex-align">
            <div v-if="index !== 0" class="crossLineno"></div>
            <div :class="['stepDiv', {'cur': step === index + 1}]">
                <i :class="`icon fontsize50 icon-${item.class}`"></i>
                <p class="text margintop10">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            stepList: [
                {class: 'dept', title: '选择医生'},
                {class: 'writeTxt', title: '填写挂号信息'},
                {class: 'payed', title: '支付挂号费用'},
                {class: 'wait', title: '等待医院叫号'},
                {class: 'ended', title: '就诊结束'},
            ]
        }
    },
    props: {
        step: {
            type:Number,
            default:1,
            required:false
        }
    }
}
</script>
<style lang="scss" scoped>
    .stepDiv {
        text-align: center;
        .icon,
        .text {
            color: #c5c5c5;
        }
        &.cur {
            .icon,
            .text {
                color: #40c7c3;
            }
        }
    }
</style>