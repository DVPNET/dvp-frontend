<template>
  <el-row :gutter="20">
    <el-col :span="24" style="padding: 0 !important ; float: inherit">
      <div class="container-fluid">
        <div class="row-fluid">
          <!--left-->
          <div class="span3">
            <div id="toc2"></div>
          </div>
          <!--right-->
          <div class="span9 faq2">
            <div class="hero-unit">
              <h1>Common problem</h1>

              <h2>Related to vendors</h2>

              <h3>1.&nbsp;Why select DVP?</h3>

              <p>
                &nbsp;Traditional security service products are mainly used for
                automatically check security issues, and have limited
                applicability. In DVP community, white hats and security
                engineers from all over the world, following attackers’ own
                logic, test and detect vendors’ security problems, improve the
                loophole warning and urgent response mechanism, and improve the
                blockchain industry’s overall security.
              </p>

              <h3>2.&nbsp;How to use DVP?</h3>

              <p>&nbsp;First, register an account, and pass identity check;</p>

              <p>
                &nbsp;Second, pay a security deposit, and publish a loophole
                reward plan;
              </p>

              <p>&nbsp;Third, you are on DVP platform.</p>

              <h3>
                3.&nbsp;Do I need a company email to register DVP account?
              </h3>

              <p>
                &nbsp;Yes, it's used for identity confirmation and future
                loophole publication. This email is not displayed publicly.
              </p>

              <h3>
                4.&nbsp;Am I on the DVP platform after registering an account?
              </h3>

              <p>
                &nbsp;No, two more steps are needed: Pay a security deposit and
                publish a loophole reward plan. After completing these two
                steps, you are on the DVP platform.
              </p>

              <h3>5.&nbsp;What is security deposit?</h3>

              <p>
                &nbsp;Please deposit into your account no less than the amount
                of a single severe loophole reward. The security deposit can be
                returned any time.
              </p>

              <h3>6.&nbsp;What is white hat?</h3>

              <p>
                &nbsp;White hats are security experts who can identify security
                loopholes in computer or network systems, but unlike black hats,
                they do not exploit the loopholes, instead contact the vendors
                or third party loophole reporting platforms, to help vendors
                fixing the loopholes, and improve the overall system security.
              </p>

              <h3>7.&nbsp;Who decides the amount of loophole reward?</h3>

              <p>
                &nbsp;Currently it’s decided by professional loophole auditors
                according to the severity of the loopholes. Please refer to
                <a href="#" class="Vul_rewardReference"
                  >[Community reward standard]</a
                >
              </p>

              <h3>8.&nbsp;Who pays the loophole reward?</h3>

              <p>
                &nbsp;There are two types of loopholes, one belongs to vendors
                on the DVP platform, and one to vendors not on DVP platform. For
                the vendors on the DVP platform, they pay the reward and own the
                intellectual property and decide to publish the info about the
                loophole or not. For vendors not on the DVP platform, DVP will
                give seven days for the vendor to claim the loophole, after
                seven days, Foundation will pay the reward, the DVP community
                may process the loophole publicly, and if they are fixed, may
                publish the detailed information ( but obscure anything
                sensitive)
              </p>

              <!-- <h3>9.&nbsp;Is DVP free?</h3>
						
						<p> &nbsp;DVP is totally free, all rewards from vendors go to white hats</p>			 -->

              <h3>9.&nbsp;How to claim loophole?</h3>

              <p>
                &nbsp;Vendors need to first register, then they can check and
                process loopholes.
              </p>

              <div class="jl_div">
                <p>Enterprise claims loophole operation process:</p>
                <p>
                  1) Register using an company mailbox (Regular mailbox is ok if
                  you don’t have a company mailbox)
                </p>
                <p>
                  2) Identity check (typically can be done in one to three days)
                </p>
                <p>3) Log in DVP</p>
                <p>4) Check loopholes in vendor’s account</p>
                <p>
                  5) After checking the loophole details, you can click to claim
                  a loophole
                </p>
              </div>

              <h3>10.&nbsp;How to put up a reward?</h3>

              <p>
                &nbsp;After paying the security deposit, vendors can see the
                reward management page and edit reward plan. The plan includes:
              </p>

              <div class="jl_div">
                <p>1）Reward plan</p>
                <p>2）Test range</p>
                <p>3）Loophole risk levels</p>
                <p>4）Notes</p>
              </div>

              <h3>11.&nbsp;Is the loophole detail open to public?</h3>

              <p>
                &nbsp;After loopholes are fixed, DVP may selectively publish
                some typical loopholes, but will obscure any sensitive details
              </p>

              <h3>12.&nbsp;Is DVP responsible to fix loopholes?</h3>

              <p>
                &nbsp;DVP is not responsible for fixing loopholes, but you can
                contact us for help.
              </p>

              <h3>
                13.&nbsp;Why vendors need to confirm on DVP for fixed loopholes?
              </h3>

              <p>
                &nbsp;To improve the overall security of the blockchain eco
                system, vendors need to email and notify DVP after loopholes are
                fixed, or register a DVP account and change the status of
                loopholes to ‘fixed’ in the loophole management page.
              </p>

              <h3>14.&nbsp;What are risky vendors?</h3>

              <p>
                &nbsp;To call on the industry to pay more attention to
                blockchain security, DVP publishes risky vendors ranking, which
                lists vendors that don’t fix high risk loopholes.
              </p>

              <p>
                &nbsp;DVP has a quantitative analysis model to rank blockchain
                industry and vendors, and has detailed explanation about
                loophole risk levels, to help investors to understand the health
                status of blockchain eco system.
              </p>

              <h3>15.&nbsp;What if I forget my password?</h3>

              <p>
                &nbsp;Please save your password in a safe place. DVP is a
                decentralized platform and follows blockchain rules, so we
                cannot recover lost account/password (private key).
              </p>

              <!--白帽子相关-->

              <h2>Related to white hats</h2>

              <h3>
                1.&nbsp;What are the timeline and procedure of loophole audit?
              </h3>

              <p>
                1 &nbsp;After white hats submit a loophole, DVP professional
                auditors will audit and confirm the loophole information, and
                give it a price tag. Due to the difficulty of audit and analysis
                procedure, audit time may be between three to seven days, and
                could be longer for some cases.
              </p>

              <h3>
                2.&nbsp;How to improve the pass rate of loophole submission?
              </h3>

              <p>
                &nbsp;Please use DVP template to submit loopholes, don’t delete
                the template, or the submission will be rejected. Related texts
                and graphs should be complete, with consequence and proof of the
                loophole, so the submission can pass the audit the first time,
                and you get better reward.
              </p>

              <h3>
                3.&nbsp;How long is the waiting period for a loophole reward
                request?
              </h3>

              <p>
                &nbsp;DVP pays reward with crypto currency, within seven days
                after the loophole is claimed, and your wallet address must be
                valid.
              </p>

              <h3>4.&nbsp;Why it says reward paid, but I didn’t receive it?</h3>

              <p>
                &nbsp;Currently all rewards are paid through Ethereum network.
                Sometimes the ethereum network may have traffic jam to slow down
                transactions, or broadcast failure. If that happens, please
                email us with your transaction record and amount.
              </p>

              <h3>5.&nbsp;What if a loophole is submitted twice?</h3>

              <p>
                &nbsp;When the repeated submissions are received, DVP selects
                the first one submitted.
              </p>

              <h3>6.&nbsp;How to check if a loophole is repeated?</h3>

              <p>
                &nbsp;Currently DVP doesn’t support checking of repeated
                submissions. If there are repeated submissions, auditors will
                put the repeated ID in the loophole information, and white hats
                can use the loophole ID to check on the loophole status page.
              </p>

              <h3>7.&nbsp;How to check the status of my submission?</h3>

              <p>
                &nbsp;Please log in the DVP loophole info page to check the
                status of loophole processing.
              </p>

              <h3>8.&nbsp;Is there any role for punishment?</h3>

              <p>
                &nbsp;If there is violation of community rules, the violator
                account could be disabled.
              </p>

              <h3>9.&nbsp;How to resolve disagreement?</h3>

              <p>
                &nbsp;During the loophole processing, if white hats disagree
                with the procedure, loophole severity, or reward, please email
                DVP online member service. DVP will coordinate with vendors and
                submitters, and priority goes to loophole submitters. DVP may
                introduce independent security professionals if needed.
              </p>

              <h3>10.&nbsp;How to contact DVP?</h3>

              <p>&nbsp;DVP feedback mailbox: service@dvpnet.io</p>

              <p>&nbsp;DVP wetchat account: dvpnet</p>

              <h3>11.&nbsp;What if I forget my password?</h3>

              <p>
                &nbsp;Please save your password in a safe place. DVP is a
                decentralized platform and follows blockchain rules, so we
                cannot recover lost account/password (private key).
              </p>

              <h3>
                12.&nbsp;Any limitation on the number of loophole submissions?
              </h3>

              <p>&nbsp;No</p>

              <!-- <h3>13.&nbsp;What are the benefits of teamwork at DVP?</h3>

						<p><strong>1）Team Register Reward</strong></p>

						<p>5,000 DVP for Elite Team Registration</p>

						<p><strong>2）Monthly Leaderboard Reward</strong></p>

						<p>
							50,000 DVP for Champion Team <br>
							30,000 DVP for Runner-up Team <br>
							10,000 DVP for Third Place Team
						</p>

						<p><strong>3）Star of the Month Reward</strong></p>

						<p>20,000 DVP for the Team with the Highest Number of Qualified Vulnerability Reports Per Member (in Average)</p>

						<p><strong>4）Monthly Participation Reward</strong></p>

						<p>5,000 DVP for Teams Two or More Qualified Vulnerability Reports</p>

						<p><strong>Remarks:</strong></p>	

						<div  class="jl_div">				
							<p>▪ Each team should have at least 3 people, and no more than 10 people.</p>
							<p>▪ Monthly leaderboard is ranked by team reputation score which is earned by submitting qualified vulnerability reports.</p>
							<p>▪ Except registering an elite team, "gold level" is required to register a new team.</p>
							<p>▪ A team needs to have 6 or more qualified vulnerability reports per member (in average) in the month to earn the monthly leaderboard reward or the star of the month reward.</p>
							<p>▪ All monthly rewards are counted and sent out by every month.</p>
						</div> -->

              <!--DVP相关-->

              <h2 class="rule-item-title">Related to DVP</h2>

              <h3>1.&nbsp;DVP introduction</h3>

              <p>
                1 &nbsp;DVP stands for Decentralized Vulnerability Platform, and
                it’s the first decentralized loophole platform in the world. DVP
                community is a decentralized autonomous organization, publish
                loophole information responsibly, coordinate between blockchain
                vendors and white hats, and improve the overall security of
                blockchain eco system.
              </p>

              <h3>2.&nbsp;About decentralization</h3>

              <p>
                &nbsp;DVP doesn’t save or publish white hats personal
                information, only ID and specialities. At the same time, DVP
                doesn’t publish vendors’ contact info, only vendor ID and reward
                plan etc. In the first phase, DVP is still centralized, but its
                operation will become decentralized later, and eventually will
                have its own public blockchain. For details please refer to
                official <a href="https://dvpnet.io/doc">[white paper]</a>.
              </p>

              <h3>3.&nbsp;DVP community introduction</h3>

              <p>
                &nbsp;To coordinate blockchain vendors and white hats
                efficiently, and build a better blockchain system, DVP
                foundation plans to build DVP into an autonomous community, and
                the plan is as follows:
              </p>

              <div class="jl_div">
                <p>First phase: member recruitment</p>
                <p>Second phase: release management power to members</p>
                <p>Third phase: Community self-management</p>
                <p>
                  For details please see
                  <a
                    href="https://github.com/DVPNET/Community/blob/master/README.md"
                    >[DVP autonomous community plan 1.0]</a
                  >
                </p>
              </div>

              <h3>4.&nbsp;How to become a DVP community member?</h3>

              <p>
                &nbsp;DVP foundation uses Github (github.com/DVPNET) to assign
                community tasks, and give task rewords (i.e., contribution
                value). Completing tasks in the DVP eco system (including but
                not limited to, white hats, security vendors, DVP platform
                vendors) will get contribution points, and when you contribution
                value is greater than zero, you become a DVP community member.
              </p>

              <!--DVP Token相关-->

              <h2 class="rule-item-title">Related to DVP Token</h2>

              <h3>1.&nbsp;DVP token definition</h3>

              <p>
                1 &nbsp;DVP token is the only acceptable currency in the DVP eco
                system, and its total amount is fixed. All payment, reward,
                security deposit on the DVP network, must be paid using DVP
                token. DVP token can be used to reward community members also,
                or provide liquidity to them.
              </p>

              <p>&nbsp;Total amount: 5 billion</p>

              <p>&nbsp;Symbol: DVP</p>

              <h3>2.&nbsp;DVP token usage</h3>

              <p>&nbsp;Can be used for the security deposit of vendor reward</p>

              <p>&nbsp;Can be used to pay for loophole reward</p>

              <p>
                &nbsp;Can be used for reward of community maintenance, such as
                community development or publicity events
              </p>

              <h3>3 .&nbsp;ERC20 design explanation</h3>

              <p>
                &nbsp;Support token locking: Part of the DVP tokens can be
                locked according to dVP white paper, and to be released
                quarterly.
              </p>

              <p>
                &nbsp;Weakened privilege: DVP token can have owner account, but
                it only have transaction suspension privilege, cannot affect
                users’ asset, so no single point failure.
              </p>

              <p>
                &nbsp;Highly secure: DVP token contracts have been hardened and
                passed audit from several professional blockchain security
                companies, and they are highly secure.
                <a
                  href="https://github.com/DVPNET/DVP-TOKEN/blob/master/DVPToken_contract_audit_report.pdf"
                  >[DVPToken intelligent contract audit report]</a
                >
              </p>

              <p>
                &nbsp;Fixed amount: The total amount of DVP tokens are fixed,
                and they don’t have token destroy/re-issue functions.
              </p>

              <!-- <h3>4.&nbsp;Community reward</h3>

              <p>
                &nbsp;Loophole is mining mechanism. Every reward projects need
                to put $50000 DVP platform security deposit. 10% of every
                loophole reward goes to Foundation. On the last day of every
                month, among the Foundation income in that month, 80% go to all
                DVP token holders, and 20% go to the top loophole submitters of
                that month.
              </p> -->
            </div>
            <!--/span-->
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import "@/assets/jquery-ui-1.9.1.custom.min.js";
import "@/assets/jquery.tocify.js";

export default {
  name: "faq",
  data() {
    return {
      lang: "zh",
    };
  },
  mounted() {
    this.lang = localStorage.getItem("locale");
    if (this.lang == "zh") {
      this.$router.push({ path: "/faq" });
    } else if (this.lang == "en" || this.lang == null || this.lang == "") {
      this.$router.push({ path: "/faq_en" });
    } else if (this.lang == "ko") {
      this.$router.push({ path: "/faq_ko" });
    }
    $("#toc2")
      .tocify({
        selectors: "h2,h3,h4,h5",
      })
      .data("toc-tocify");
  },
  destroyed() {
    $(".faq2").html(" ");
  },
};
</script>

<style>
</style>
