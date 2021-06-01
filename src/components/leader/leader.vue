<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <!--left-->
        <div class="span3">
          <div id="toc1"></div>
        </div>
        <!--right-->
        <div class="span9 rule13">
          <div class="hero-unit">
            <h1 style="margin-bottom: 20px">DVP国际社区领袖计划</h1>
            <p
              class="update-time"
              style="position: relative; top: -10px; left: 261px"
            >
              更新日期2019.11.14
            </p>
            <h2>概要</h2>
            <p class="small-margin-p">
              白帽子作为平台最核心的力量，决定着DVP的未来。为进一步鼓励DVP国际社区白帽子的积极贡献，DVP基金会于11月14日正式试行“国际社区领袖计划”，将与各位国际白帽精英与平台建立更紧密的关系，共同参与DVP生态运营治理，助力平台发展，从而获取最丰厚的奖励，分享平台发展成果。
            </p>
            <p class="small-margin-p">
              白帽社区领袖的贡献形式包括但不限于：漏洞挖掘，漏洞分析，漏洞审核，研究报告，社区管理，平台推广，商务合作等内容。
            </p>

            <h2>邀请、录用规则</h2>
            <p class="small-margin-p">
              有意成为社区领袖的白帽子，需要先在DVP平台上注册，并按照规则提交社区领袖申请表。竞选成功的白帽子，将与DVP完成领袖签约，并接受邀请进入DVP核心社群，进一步与DVP运营团队深入合作。
            </p>

            <p class="small-margin-p">
              同时，DVP平台设立推荐邀请机制，如被推荐的白帽子成功入选社区领袖，录用者/引荐人均可获得1000个DVP的奖励。
            </p>

            <h2>权责内容</h2>

            <p class="small-margin-p">
              加入DVP国际领袖计划，您的特殊权利包括但不限于：
            </p>
            <p class="small-margin-p">1. DVP内测赏金项目优先权</p>
            <p class="small-margin-p">2. 内部不定时的情报、技术共享分享</p>
            <p class="small-margin-p">3. DVP生态社区治理的投票权、决策权</p>
            <p class="small-margin-p">
              4. DVP Discord国际白帽社区的领袖特殊权限
            </p>
            <p class="small-margin-p">
              5. 代表DVP平台白帽领袖的特殊名誉（官方签约文件+荣誉证书一份）
            </p>
            <p class="small-margin-p">6. 其他积极参与DVP生态的丰厚奖励和荣誉</p>

            <p class="small-margin-p">您的责任包括但不限于：</p>
            <p class="small-margin-p">1. 积极参与DVP社区的管理、建设</p>
            <p class="small-margin-p">
              2. 持续的社区活跃度，以各自专长的形式为社区做出贡献
            </p>
            <p class="small-margin-p">3. 良好的声誉，言行代表DVP社区</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/jquery-ui-1.9.1.custom.min.js";
import "@/assets/jquery.tocify.js";

export default {
  name: "leader",
  data() {
    return {
      lang: "zh",
    };
  },
  mounted() {
    this.lang = localStorage.getItem("locale");
    if (this.lang == "zh") {
      this.$router.push({ path: "/leader" });
    } else if (this.lang == "en" || this.lang == null || this.lang == "") {
      this.$router.push({ path: "/leader_en" });
    } else if (this.lang == "ko") {
      this.$router.push({ path: "/leader_ko" });
    }
    var toc = $("#toc1")
      .tocify({
        selectors: "h2,h3,h4,h5",
      })
      .data("toc-tocify");
  },
  destroyed() {
    $(".rule13").html(" ");
  },
};
</script>

<style lang="scss" scoped>
.hero-unit {
  margin-bottom: 50px;
}
</style>
