<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <!--left-->
        <div class="span3">
          <div id="toc3"></div>
        </div>
        <!--right-->
        <div class="span9 rule11">
          <div class="hero-unit">
            <h1 style="margin-bottom: 20px">
              DVP Global Community Leader Program
            </h1>
            <p
              class="update-time"
              style="position: relative; top: -10px; left: 261px"
            >
              Updated 2019.11.14
            </p>
            <h2>Overview</h2>
            <p class="small-margin-p">
              DVP's future success depends on the platform's core contributors -
              the white hats. In order to encourage white hats around the world
              to actively participate, DVP foundation will officially launch
              "Global Community Leader Program" on November 14th. With this new
              initiative, DVP aims to build closer relationship with global
              white hate elites, where leaders will play key roles in community
              governance, promote platform development, and earn rewards based
              on their contribution.
            </p>
            <p class="small-margin-p">
              The forms of contribution include but are not limited to:
              vulnerability mining, vulnerability analysis, vulnerability
              review, research report, community management, platform promotion,
              business development and more.
            </p>

            <h2>Invitation & Acceptance Rules</h2>
            <p class="small-margin-p">
              Any white hats interested to apply and join the program needs to
              first register on DVP platform and submit an application form.
              White hats successfully accepted will need to sign an agreement
              with DVP foundation, once the agreement is signed by both parties,
              white hats will be invited to DVP's core leader group and work
              closely with DVP's operational team.
            </p>

            <p class="small-margin-p">
              DVP will also run a referral program, if the white hats are
              successfully accepted into the Global Community Leader Program,
              the individual who made the referral will be rewarded 1000 DVP.
            </p>

            <h2>Responsibilities</h2>

            <p class="small-margin-p">
              The rights of white hats in the DVP Global Leadership Program
              include but are not limited to:
            </p>
            <p class="small-margin-p">
              1. Priority access/qualifications to bounties in testing phase,
              which are not published publicly on DVP platform
            </p>
            <p class="small-margin-p">
              2. Security related technical training sessions and educational
              materials shared internally
            </p>
            <p class="small-margin-p">3. Vote on governance issues</p>
            <p class="small-margin-p">
              4. Invitation to DVP's Discord global leader group
            </p>
            <p class="small-margin-p">
              5. Official contract + honors certificate
            </p>
            <p class="small-margin-p">
              6. Other rewards/honors for active participation in DVP community
            </p>

            <p class="small-margin-p">
              The responsibilities of white hats in the DVP Global Leadership
              Program include but are not limited to:
            </p>
            <p class="small-margin-p">
              1. Actively participate in building and management of DVP
              community
            </p>
            <p class="small-margin-p">
              2. Continuous contribution to DVP community based on each member's
              respective expertise/skill
            </p>
            <p class="small-margin-p">
              3. Positively promote and represent DVP's brand/reputation
            </p>
          </div>
          <!--/span-->
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
    var toc = $("#toc3")
      .tocify({
        selectors: "h2,h3,h4,h5",
      })
      .data("toc-tocify");
  },
  destroyed() {
    $(".rule11").html(" ");
  },
};
</script>

<style lang="scss" scoped>
.hero-unit {
  margin-bottom: 50px;
}
</style>