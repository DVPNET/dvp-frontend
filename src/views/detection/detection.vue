<template>
    <div class="detection">
        <detection-title></detection-title>
        <div class="search">
            <el-input :placeholder="$t('Detection.AddressPlace')"
                      v-model="address" class="" style="width: 520px;">
                <el-select class="__el-select" v-model="chain"
                           slot="prepend" :placeholder="$t('Detection.PleaseChoose')">
                    <el-option v-for="item in tokenList"
                               :key="item.token"
                               :label="item.token"
                               :value="item.chain">

                    </el-option>
                </el-select>
            </el-input>

            <el-button class="__btn button"
                       :loading="loading"
                       :disabled="disabled"
                       @click="sendCode"
                       type="primary">
                {{ $t('Detection.DetectNow') }}
            </el-button>
        </div>
        <div class="content">

            <div class="title">{{ $t('Detection.SolidityCode') }}</div>
            <div class="solidity">
                <!--                <el-input-->
                <!--                    class="__el-textarea__inner"-->
                <!--                    type="textarea"-->
                <!--                    placeholder="Code"-->
                <!--                    style="height: 100%"-->
                <!--                    v-model="code">-->
                <!--                </el-input>-->

                <textarea
                    ref="mycode"
                    class="codesql"
                    v-model="code"
                    style="height:404px;width:100%"></textarea>

            </div>
            <div class="vulnerability">
                {{ $t('Detection.Vulnerability') }}
            </div>
            <div class="loopholes">
                <template v-if="!list.length">
                    {{ text }}
                </template>
                <template v-else>
                    <div class="list" v-for="(data, index) in list" :key="index">
                        <div class="row">
                            <div class="left">{{ $t('Detection.VulnerabilityLocation') }}</div>
                            <div class="right">{{ data.line }}</div>
                        </div>
                        <div class="row">
                            <div class="left">{{ $t('Detection.VulnerabilityDescription') }}</div>
                            <div class="right">{{ data.description }}</div>
                        </div>
                        <div class="row">
                            <div class="left">{{ $t('Detection.VulnerabilityType') }}</div>
                            <div class="right">{{ data.vulnerabilityType }}</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import DetectionTitle from './detection-title';
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";

let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");
export default {
    components: {
        DetectionTitle
    },
    data() {
        return {
            address: '',
            chain: 'ETH',
            code: '',
            tokenList: [
                {token: 'BSC', chain: 'bsc'},
                {token: 'ETH', chain: 'ethereum'},
            ],
            loading: false,
            disabled: '',
            text: '',
            list: [],
            editor: null
        }
    },
    name: "detection",
    computed: {},
    watch: {
        address: {
            handler(val) {
                this.init();
            },
            immediate: true
        },
        code: {
            handler(val) {
                this.init();
            },
            immediate: true
        }
    },
    methods: {
        sendCode() {
            this.loading = true;
            this.list = [];
            this.text = '';
            this.code = this.editor.getValue();
            this.$store.dispatch('detectionStore/sendCode', {
                    "chain": this.code ? null : this.chain,
                    "contractAddress": this.code ? null : this.address,
                    "type": this.code ? 1 : 2, // 1-code,2-address
                    "code": this.code ? this.code : null
                }
            ).then(res => {
                this.loading = false;
                if (res.errcode === 0) {
                    if (this.code) {
                        this.text = this.$t('Detection.CorrectCode');
                    } else {
                        this.text = this.$t('Detection.UnavailableCode');
                    }
                }
                if (res.errcode === 1) {
                    this.text = this.$t('Detection.GeneralSafety');
                }
                if (res.errcode === 2) {
                    this.list = res.data.data;
                    if (res.data.code && this.editor) {
                        this.code = res.data.code;
                        this.editor.setValue(res.data.code);
                    }
                }
            })
        },
        init() {
            if (!this.address && !this.code) {
                this.disabled = true
            } else {
                this.disabled = false
            }
        },
    },
    mounted() {
        let mime = 'text/x-mariadb'
        this.editor = CodeMirror.fromTextArea(this.$refs.mycode, {
            mode: mime,
            indentWithTabs: true,
            smartIndent: true,
            lineNumbers: true,
            matchBrackets: true,
            autofocus: true,
            extraKeys: {'Ctrl': 'autocomplete'},//自定义快捷键
            hintOptions: {
                tables: {
                    users: ['name', 'score', 'birthDate'],
                    countries: ['name', 'population', 'size']
                }
            }
        })
        this.editor.on('cursorActivity', function () {
            this.editor.showHint()
        });
    }
}
</script>

<style scoped lang="scss">
.detection {
    width: 1200px;
    margin: 0 auto;
    padding-top: 60px;
    min-height: calc(100vh - 372px);

    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 50px 0 10px 0;

        .button {
            height: 48px;
            width: 150px;
        }
    }

    .content {
        width: 100%;
        min-height: 830px;
        margin-bottom: 100px;
        padding: 20px;
        background: #ffffff;

        .title {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 14px;
            color: #1E2D31;
            padding: 40px 0 20px 0;
        }

        .solidity {
            width: 100%;
            height: 404px;
            background: rgba(163, 172, 195, 0.1);
            //border: 1px solid rgba(163, 172, 195, 0.2);
            //box-sizing: border-box;
            border-radius: 8px;
        }

        .vulnerability {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 14px;
            color: #1E2D31;
            padding: 74px 0 21px 0;
        }

        .loopholes {
            width: 100%;
            min-height: 185px;
            padding: 20px;
            background: rgba(163, 172, 195, 0.1);
            border: 1px solid rgba(163, 172, 195, 0.2);
            box-sizing: border-box;
            border-radius: 8px;


            .list {
                .row {
                    color: rgba(0, 0, 0, 1);
                    font-size: 14px;
                    display: flex;
                    margin-top: 5px;

                    .left {

                    }

                    .right {
                        margin-left: 2px;
                    }
                }
            }

            .list:nth-of-type(n+1) {
                margin-top: 30px;
            }
        }
    }
}
</style>
