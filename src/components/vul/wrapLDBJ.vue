<template>
  <div style="padding: 0 10%">
    <!--<a href="#dengdeng">填充</a>-->
    <div style="position: relative" class="LDBJwrap">
      <div
        class="ldBJbg"
        style="display: none; text-align: center; z-index: 99999999999999999999"
      >
        <img
          src="/static/image/common/prohibit.png"
          style="margin-top: 50%; width: 60px; height: auto"
          alt=""
        />
      </div>
      <el-form label-width="100%" class="demo-dynamic">
        <el-form-item prop="" :label="$t('message.vulTitle')">
          <el-input
            :placeholder="$t('message.please_input_title')"
            v-model="vulTitle"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item prop="" :label="$t('message.targetType')">
          <el-select
            v-model="value1"
            clearable
            :placeholder="$t('message.select_target_type')"
            disabled
          >
            <el-option
              v-for="(item, index) in cate"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="" :label="$t('message.attackType')">
          <el-select
            v-model="value2"
            clearable
            :placeholder="$t('message.select_attack_type')"
            disabled
          >
            <el-option
              v-for="(item, index) in cates"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="" :label="$t('message.vulnerability_level')">
          <el-select
            v-model="value3"
            clearable
            :placeholder="$t('message.PleaseSelectSeverityLoophole')"
            disabled
          >
            <el-option
              v-for="(item, index) in level"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="" :label="$t('message.vulvendor')">
          <el-select
            v-model="value4"
            clearable
            :placeholder="$t('message.PleaseSelectVendor')"
            disabled
          >
            <el-option
              v-for="(item, index) in company"
              :key="item.id"
              :label="item.company_name"
              :value="item.id"
            >
            </el-option>
            <el-option
              :key="vulOther"
              :value="vulOther"
              :label="vulOthercon"
            ></el-option>
          </el-select>
          <div style="margin-top: 20px" v-show="ComOther">
            <el-autocomplete
              class="inpwidth"
              v-model="companyName"
              :placeholder="$t('message.PleaseEnterKeywords')"
              disabled
            ></el-autocomplete>
            <!--<el-select
							    v-model="companyName"
							    multiple
							    filterable
							    remote
							    reserve-keyword
							    placeholder="请输入关键词"
							    :remote-method="remoteMethod"
							    :loading="loading">
							    <el-option
							      v-for="item in arr"
							      :key="item.id"
							      :label="item.value"
							      :value="item.id">
							    </el-option>
							  </el-select>-->
          </div>
        </el-form-item>

        <el-form-item prop="" :label="$t('message.VendorType')">
          <el-select
            v-model="value5"
            clearable
            :placeholder="$t('message.PleaseSelectVender')"
            disabled
          >
            <el-option
              v-for="(item, index) in compType"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="" :label="$t('message.ContactInfo')">
          <el-input
            :placeholder="
              $t('message.PleaseEnterContactInformationVendorOptional')
            "
            v-model="telcons"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <div style="clear: both"></div>
        <el-form-item
          prop=""
          :label="$t('message.vulnerabilityDescription')"
          class="sim_box"
        >
          <!--漏洞描述-->
          <div
            v-html="EditorContentBJ"
            style="
              background: #f5f7fa;
              padding: 20px;
              text-align: left !important;
            "
          ></div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import VueTrix from './vue-trix/src'
import VueTrix from "vue-trix";

export default {
  name: "wrapLdBJ",
  components: { VueTrix },
  data() {
    return {
      dialogMyVulBj_data: [],
      checked: false,
      vulTitle: "",
      EditorContentBJ: "", // 富文本内容
      companyName: "",
      message: false,
      EditorContent: "",
      telcons: "",
      vulOther: 0,
      vulOthercon: "Other",
      timeout: null,
      cate: [],
      ComOther: false,
      cates: [],
      company: [],
      companys: [],
      level: [
        { id: "0", name: "低危" },
        { id: "1", name: "中危" },
        { id: "2", name: "高危" },
        { id: "3", name: "严重" },
      ],
      compType: [
        { id: "0", name: "交易平台" },
        { id: "1", name: "矿池" },
        { id: "2", name: "公链" },
        { id: "3", name: "钱包" },
        { id: "4", name: "项目方" },
        { id: "5", name: "智能合约" },
        { id: "6", name: "其它" },
      ],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      loading: false,
      arr: [],
      id: "",
      lang: "zh",
    };
  },
  methods: {
    initData() {
      var _this = this;
      this.lang = localStorage.getItem("locale");
      //目标类型
      if (this.lang == "zh") {
        this.$ajax.BMZvulCate({ id: 0, language: "zh_CN" }).then((res) => {
          if (res.errcode === 1) {
            _this.cate = res.data.cate;
          }
        });
        this.level = [
          { id: "0", name: "低危" },
          { id: "1", name: "中危" },
          { id: "2", name: "高危" },
          { id: "3", name: "严重" },
        ];
        this.compType = [
          { id: "0", name: "交易平台" },
          { id: "1", name: "矿池" },
          { id: "2", name: "公链" },
          { id: "3", name: "钱包" },
          { id: "4", name: "项目方" },
          { id: "5", name: "智能合约" },
          { id: "6", name: "其它" },
        ];
      } else if (this.lang == "en" || this.lang == null || this.lang == "") {
        this.$ajax.BMZvulCate({ id: 0, language: "en_US" }).then((res) => {
          if (res.errcode === 1) {
            _this.cate = res.data.cate;
          }
        });
        this.level = [
          { id: "0", name: "Low" },
          { id: "1", name: "Mid" },
          { id: "2", name: "High" },
          { id: "3", name: "Serious" },
        ];
        this.compType = [
          { id: "0", name: "Exchange" },
          { id: "1", name: "Mine pool" },
          { id: "2", name: "Public chain" },
          { id: "3", name: "Wallets" },
          { id: "4", name: "Vendor" },
          { id: "5", name: "Smart contracts" },
          { id: "6", name: "Other" },
        ];
      } else if (this.lang == "ko") {
        this.$ajax.BMZvulCate({ id: 0, language: "en_US" }).then((res) => {
          if (res.errcode === 1) {
            _this.cate = res.data.cate;
          }
        });
        this.level = [
          { id: "0", name: "낮은 위험" },
          { id: "1", name: "중간 위험" },
          { id: "2", name: "높은 위험" },
          { id: "3", name: "심한 위험" },
        ];
        this.compType = [
          { id: "0", name: "거래소" },
          { id: "1", name: "마이닝 풀" },
          { id: "2", name: "퍼블릭체인" },
          { id: "3", name: "지갑" },
          { id: "4", name: "블록체인 프로젝트" },
          { id: "5", name: "스마트컨트랙트" },
          { id: "6", name: "Other" },
        ];
      }

      //厂商
      this.$ajax.BMZcompany().then((res) => {
        if (res.errcode === 1) {
          _this.company = res.data.company;
        }
      });
      /*编辑信息展现*/
      let id = this.$route.query.id;
      if (this.lang == "zh") {
        this.$ajax.BMZvulInfo({ id: id, language: "zh_CN" }).then((res) => {
          if (res.errcode === 1) {
            _this.dialogMyVulBj_data = res.data.info;
            _this.id = _this.dialogMyVulBj_data.id;
            _this.vulTitle = this.dialogMyVulBj_data.title;
            _this.value1 = this.dialogMyVulBj_data.target_type;
            _this.value2 = this.dialogMyVulBj_data.attack_type;
            //_this.value4= this.dialogMyVulBj_data.company_id
            _this.telcons = this.dialogMyVulBj_data.company_contact;
            _this.companyName = this.dialogMyVulBj_data.company;
            _this.EditorContentBJ = this.dialogMyVulBj_data.description;

            this.$ajax
              .BMZvulCate({ id: this.value1, language: "zh_CN" })
              .then((res) => {
                if (res.errcode === 1) {
                  _this.cates = res.data.cate;
                }
              });

            console.log(this.company);
            /*归属厂商*/
            for (var i = 0; i < this.company.length; i++) {
              if (this.company[i].id == this.dialogMyVulBj_data.company_id) {
                this.value4 = this.company[i].id;
              }
            }
            if (this.dialogMyVulBj_data.company_id == 0) {
              this.ComOther = true;
              this.value4 = 0;
            } else {
              this.ComOther = false;
            }
            /*等级*/
            for (var i = 0; i < this.level.length; i++) {
              if (this.level[i].id == this.dialogMyVulBj_data.level) {
                this.value3 = this.level[i].id;
              }
            }
            /*厂商类型*/
            for (var i = 0; i < this.compType.length; i++) {
              if (this.compType[i].id == this.dialogMyVulBj_data.company_type) {
                this.value5 = this.compType[i].id;
              }
            }
          }
        });
      } else if (
        this.lang == "en" ||
        this.lang == null ||
        this.lang == "" ||
        this.lang == "ko"
      ) {
        this.$ajax.BMZvulInfo({ id: id, language: "en_US" }).then((res) => {
          if (res.errcode === 1) {
            _this.dialogMyVulBj_data = res.data.info;
            _this.id = _this.dialogMyVulBj_data.id;
            _this.vulTitle = this.dialogMyVulBj_data.title;
            _this.value1 = this.dialogMyVulBj_data.target_type;
            _this.value2 = this.dialogMyVulBj_data.attack_type;
            //_this.value4= this.dialogMyVulBj_data.company_id
            _this.telcons = this.dialogMyVulBj_data.company_contact;
            _this.companyName = this.dialogMyVulBj_data.company;
            _this.EditorContentBJ = this.dialogMyVulBj_data.description;

            this.$ajax
              .BMZvulCate({ id: this.value1, language: "en_US" })
              .then((res) => {
                if (res.errcode === 1) {
                  _this.cates = res.data.cate;
                }
              });

            console.log(this.company);
            /*归属厂商*/
            for (var i = 0; i < this.company.length; i++) {
              if (this.company[i].id == this.dialogMyVulBj_data.company_id) {
                this.value4 = this.company[i].id;
              }
            }
            if (this.dialogMyVulBj_data.company_id == 0) {
              this.ComOther = true;
              this.value4 = 0;
            } else {
              this.ComOther = false;
            }
            /*等级*/
            for (var i = 0; i < this.level.length; i++) {
              if (this.level[i].id == this.dialogMyVulBj_data.level) {
                this.value3 = this.level[i].id;
              }
            }
            /*厂商类型*/
            for (var i = 0; i < this.compType.length; i++) {
              if (this.compType[i].id == this.dialogMyVulBj_data.company_type) {
                this.value5 = this.compType[i].id;
              }
            }
          }
        });
      }
    },
    addEditorContent(EditorContent) {
      this.EditorContent = EditorContent;
    },
    goLook() {
      this.$router.push({ path: "/membox/member/vuls" });
    },
    refresh() {
      window.location.reload();
    },
  },
  created: function () {
    this.initData();
  },
};
</script>

<style scoped>
.LDBJwrap:hover .ldBJbg {
  display: block !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(225, 225, 225, 0.1);
  z-index: 99999999999999999999999999999999999999;
}
.dia_vul {
  z-index: 999999999999999999999999999999999 !important;
}
.demo-dynamic {
  min-width: 856px;
}
.simditor-body h1 {
  width: 100%;
  text-align: left !important;
  font-size: 14px !important;
  margin: 0 !important;
  padding: 0;
}
.simditor-body p {
  width: 100%;
  text-align: left !important;
  font-size: 14px;
}
.simditor-body {
  width: 100%;
}
.simditor-body img {
  max-width: 100%;
}
.inpwidth {
  width: 100%;
}
.showcen {
  display: block;
  text-align: center !important;
}
.showcen .el-button:nth-of-type(1) {
  color: #ffffff !important;
  background: #409eff;
}
.showcen .el-button:hover {
  background: #409eff !important;
  border-color: #409eff !important;
  color: #ffffff !important;
}
.demo-dynamic .el-form-item__content {
  width: 100%;
  display: inline-block;
  line-height: none;
}
</style>