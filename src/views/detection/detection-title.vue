<template>
    <div class="detection-title">
        <div class="title">
            DVP智能合约自动检测工具
        </div>
        <div class="explanation">
            常规漏洞自动检测工具，协助白帽子快速、准确的查找智能合约常规安全问题
        </div>
    </div>

</template>

<script>
export default {
    name: "detection-title"
}
</script>

<style scoped lang="scss">
.detection-title{
    .title {
        text-align: center;
        font-size: 24px;
        line-height: 18px;
        color: #000000;
        padding-top: 80px;
        font-weight: bold;
    }
    .explanation {
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        color: #000000;
        padding-top: 10px;
    }
}

</style>
