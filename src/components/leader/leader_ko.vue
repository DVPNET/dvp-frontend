<template>
  <div>
    <div class="container-fluid">
      <div class="row-fluid">
        <!--left-->
        <div class="span3">
          <div id="toc2"></div>
        </div>
        <!--right-->
        <div class="span9 rule12">
          <div class="hero-unit">
            <h1 style="margin-bottom: 20px">
              DVP 글로벌 커뮤니티 리더 프로젝트
            </h1>
            <p
              class="update-time"
              style="position: relative; top: -10px; left: 261px"
            >
              발표날짜 :2019.11.14
            </p>
            <h2>요약</h2>
            <p class="small-margin-p">
              화이트해커는 DVP 플랫폼의 가장 핵심적인 구성원으로써 DVP 의 미래를
              결정하는 중요한 역할을 합니다. DVP 글로벌 화이트 해커 커뮤니티의
              발전을 촉진하기 위하여 DVP 재단에서는 11월14일부로 “글로벌
              커뮤니티 리더 프로젝트”를 실행하기로 결정하였습니다. DVP는
              전세계의 화이트해커들과 친밀한 관계를 유지하는 동시에 DVP 운영과
              발전에 함께 힘쓰며 성과에 따른 보상을 드리고자 합니다.
            </p>
            <p class="small-margin-p">
              화이트해커 커뮤니티 리더의 역할은 취약점 제출, 취약점 분석, 취약점
              심사, 취약점 연구 보고서, 커뮤니티 관리, DVP 플랫폼 홍보, 비즈니스
              협력 등 내용이 포함될 수 있으나 이에 국한되지 않습니다.
            </p>

            <h2>가입 & 추천 규칙</h2>
            <p class="small-margin-p">
              DVP커뮤니티 리더가 될 의향이 있는 화이트해커는 DVP 사이트에서
              화이트해커로 가입해야 하며 가입 신청서를 제출해야 합니다. 신청서가
              통과된 화이트해커는 DVP 와 화이트해커 리더 협약을 맺고 DVP 글로벌
              리더 커뮤니티에 가입하여 활동하실 수 있습니다
            </p>

            <p class="small-margin-p">
              또한 DVP에서는 추천 이벤트를 통하여 추천한 화이트해커가 커뮤니티
              리더 신청서를 제출하고 통과된 경우, 신청자 및 추천인에게 모두
              1000dvp의 토큰 보상을 지급합니다.
            </p>

            <h2>책임과 권한</h2>

            <p class="small-margin-p">
              DVP 글로벌 화이트해커 리더 프로젝트에 참여할 경우 :
            </p>
            <p class="small-margin-p">
              1. DVP 플랫폼 입주 프로젝트의 버그 바운티 우선 체험 권한
            </p>
            <p class="small-margin-p">
              2. DVP 내부 정보 및 해킹기술 공유 커뮤니티 참여
            </p>
            <p class="small-margin-p">
              3. DVP 생태계 발전을 위한 투표권, 결정권 부여
            </p>
            <p class="small-margin-p">4. DVP Discord 그룹에서의 특별 권한</p>
            <p class="small-margin-p">
              5. DVP 버그 바운티 플랫폼의 화이트해커 리더의 명예 (가입 인증서
            </p>
            <p class="small-margin-p">
              6. DVP 커뮤니티내의 기타 바운티 포상금을 획득할 수 있는 기회
            </p>

            <p class="small-margin-p">화이트해커 커뮤니티 리더로써의 의무:</p>
            <p class="small-margin-p">
              1. DVP 커뮤니티 관리에 적극적으로 참여합니다.
            </p>
            <p class="small-margin-p">
              2. 본인이 능숙한 분야에서 지속적으로 활동합니다.
            </p>
            <p class="small-margin-p">
              3. DVP커뮤니티의 브랜드 이미지를 대표합니다.
            </p>
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
    var toc = $("#toc2")
      .tocify({
        selectors: "h2,h3,h4,h5",
      })
      .data("toc-tocify");
  },
  destroyed() {
    $(".rule12").html(" ");
  },
};
</script>

<style lang="scss" scoped>
.hero-unit {
  margin-bottom: 50px;
}
</style>
