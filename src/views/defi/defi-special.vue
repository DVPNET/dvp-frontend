<template>
    <div class="defi-special">
        <div class="round">
            <div class="top">
                <img src="../../../static/image/defi/logo.svg" alt="">
                <div class="one">
                    <div class="one-content">
                        <div class="left">
                            <div class="content">
                                <div class="text">{{ $t('DeFi.DeFiProjectSettled') }}</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="content">
                                <div class="text">{{ $t('DeFi.VulnerabilityDetection') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="two">
                    <div class="two-content">
                        <div class="left">
                            <div class="content">
                                <div class="text">{{ $t('DeFi.ContractPage') }}</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="content">
                                <div class="text">{{ $t('DeFi.RiskWarning') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="defi-text">
                    {{ $t('DeFi.DeFiZone') }}
                </div>
            </div>
        </div>

        <div class="list-box">
            <div class="row">
                <div class="item">
                    <p class="project">{{ $t('DeFi.Project') }}</p>
                    <p class="escort">{{ $t('DeFi.AddBounty') }}</p>
                    <div class="bottom">
                        <div class="left" @click="regist">
                            {{ $t('DeFi.ProjectSettled') }}
                            <img class="arrow" src="../../../static/image/defi/arrow.svg" alt="">
                        </div>
                        <div class="right" @click="iddt">
                            {{ $t('DeFi.ClaimLoopholes') }}
                            <img class="arrow" src="../../../static/image/defi/arrow-right.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <p class="project">{{ $t('DeFi.WhiteHat') }}</p>
                    <p class="escort">{{ $t('DeFi.EarnCommission') }}</p>
                    <div class="bottom">
                        <div class="left" @click="go">
                            {{ $t('DeFi.ContractDetection') }}
                            <img class="arrow" src="../../../static/image/defi/arrow.svg" alt="">
                        </div>
                        <div class="right" @click="submit">
                            {{ $t('DeFi.VulnerabilitySubmission') }}
                            <img class="arrow" src="../../../static/image/defi/arrow-right.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 20px">
                <div class="item">
                    <p class="project">{{ $t('DeFi.Absenteeism') }}</p>
                    <p class="escort">{{ $t('DeFi.Prospecting') }}</p>
                    <div class="bottom">
                        <div class="left not">
                            {{ $t('DeFi.SmartContract') }}
                            <img class="arrow" src="../../../static/image/defi/arrow.svg" alt="">
                        </div>
                    </div>
                </div>

                <div class="item last">
                    <p class="project">{{ $t('DeFi.LightningLoanAlert') }}</p>
                    <el-carousel direction="vertical" :autoplay="true" :interval="3000" :loop="true">
                        <el-carousel-item key="1">
                            <div class="alarm" id="container1"></div>
                        </el-carousel-item>
                        <el-carousel-item key="2">
                            <div class="alarm" id="container2"></div>
                        </el-carousel-item>
                        <el-carousel-item key="3">
                            <div class="alarm" id="container3"></div>
                        </el-carousel-item>
                        <el-carousel-item key="4">
                            <div class="alarm" id="container4"></div>
                        </el-carousel-item>
                        <el-carousel-item key="5">
                            <div class="alarm" id="container5"></div>
                        </el-carousel-item>
                        <el-carousel-item key="6">
                            <div class="alarm" id="container6"></div>
                        </el-carousel-item>
                    </el-carousel>
<!--                    <div class="swiper-container swiper" id="swiper">-->
<!--                        <div class="swiper-wrapper">-->
<!--                            <div class="swiper-slide">-->
<!--                                <div class="alarm" id="container1"></div>-->
<!--                            </div>-->
<!--                            <div class="swiper-slide">-->
<!--                                <div class="alarm" id="container2"></div>-->
<!--                            </div>-->
<!--                            <div class="swiper-slide">-->
<!--                                <div class="alarm" id="container3"></div>-->
<!--                            </div>-->
<!--                            <div class="swiper-slide">-->
<!--                                <div class="alarm" id="container4"></div>-->
<!--                            </div>-->
<!--                            <div class="swiper-slide">-->
<!--                                <div class="alarm" id="container5"></div>-->
<!--                            </div>-->
<!--                            <div class="swiper-slide">-->
<!--                                <div class="alarm" id="container6"></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="swiper-pagination"></div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    name: "defi-special",
    data() {
        return {}
    },
    mounted() {
        const mySwiper = new Swiper('#swiper', {
            mousewheel: true,
            loop: true,
            autoplay: 13000,
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            paginationClickable: true,
        });
        twttr.widgets.createTweet(
            '1396118798218956803',
            document.getElementById('container1'),
            {theme: 'light'})
            .then(function (el) {
            });
        twttr.widgets.createTweet(
            '1396950958664466434',
            document.getElementById('container2'),
            {theme: 'light'})
            .then(function (el) {
            });
        twttr.widgets.createTweet(
            '1397442309931810819',
            document.getElementById('container3'),
            {theme: 'light'})
            .then(function (el) {
            });
        twttr.widgets.createTweet(
            '1398025307223851009',
            document.getElementById('container4'),
            {theme: 'light'})
            .then(function (el) {
            });
        twttr.widgets.createTweet(
            '1398466110761078784',
            document.getElementById('container5'),
            {theme: 'light'})
            .then(function (el) {
            });
        twttr.widgets.createTweet(
            '1398757685714108418',
            document.getElementById('container6'),
            {theme: 'light'})
            .then(function (el) {
            });
    },
    methods: {
        go() {
            this.$router.push({name: 'detection'})
        },
        regist() {
            this.$router.push({path: '/register'})
        },
        iddt() {
            this.$router.push({path: '/lddt'})
        },
        submit() {
            const token = localStorage.getItem('token');
            if (token) {
                this.$router.push({path: '/membox/vul'})
            } else {
                this.$router.push({path: '/login'})
            }
        }
    }
}
</script>
<style scoped lang="scss">
.defi-special {
    width: 1340px;
    overflow: hidden;
    margin: 0 auto 100px auto;
    padding-top: 60px;
    min-height: calc(100vh - 372px);

    .round {
        height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top {
        width: 254px;
        height: 242px;
        border-radius: 50%;
        background: #070707;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &::before, &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "";
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }
        &::before {
            width: 950px;
            height: 950px;
        }
        &::after {
            width: 1170px;
            height: 1170px;
        }
        .one, .two {
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            position: absolute;
        }
        .defi-text {
            position: absolute;
            font-family: Noto Sans S Chinese;
            font-style: normal;
            font-weight: bold;
            font-size: 50px;
            line-height: 50px;
            color: #000000;
            bottom: -80px;
            left: 0;
            text-align: center;
            width: 100%;
        }
        .one {
            width: 497px;
            height: 497px;
            transform: rotate(-10deg);
        }
        .two {
            width: 720px;
            height: 720px;
            transform: rotate(30deg);
        }
    }

    .list-box {
        width: 1156px;
        margin: 0 auto 100px auto;
        .row {
            width: 1156px;
            display: flex;
            justify-content: space-between;
        }
        .item {
            box-sizing: border-box;
            width: 566px;
            //height: 240px;
            background: #ffffff;
            border-radius: 20px;
            padding: 37px 30px 30px 30px;
            position: relative;
            &::before {
                width: 100%;
                height: 100%;
                background: #ffffff;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 9999;
            }
            &.last {
                //padding: 17px 30px 26px 35px;
                min-height: 240px !important;
                .project{
                    padding-bottom: 8px;
                }
            }
            .project {
                font-family: Noto Sans S Chinese;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                color: #000000;
            }
            .escort {
                color: #000000;
                font-family: Noto Sans S Chinese;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                padding-top: 12px;
            }
            .bottom {
                padding-top: 40px;
                display: flex;
                .arrow {
                    margin-left: 15.68px;
                }
                .left {
                    //width: 199px;
                    height: 54px;
                    padding: 0 10px;
                    background: #0456B8;
                    color: #ffffff;
                    font-size: 15px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    &.not {
                        cursor: not-allowed;
                    }
                }
                .right {
                    //width: 199px;
                    height: 54px;
                    padding: 0 10px;
                    border: 1px solid #0456B8;
                    background: #ffffff;
                    color: #19191F;
                    font-size: 15px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 43px;
                    cursor: pointer;
                }
            }
        }
    }
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.one-content {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;

    .left {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #1E3723;
        position: absolute;
        top: 50%;
        left: -6px;
        transform: translateY(-50%);

        .content {
            width: 100%;
            height: 100%;
            position: relative;

            .text {
                min-width: 260px;
                bottom: -30px;
                position: absolute;
                left: 50%;
                text-align: center;
                font-family: Noto Sans S Chinese;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 20px;
                color: #000000;
                transform: translateX(-50%) rotate(10deg);
            }
        }
    }

    .right {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #5CCF00;
        position: absolute;
        top: 50%;
        right: -6px;
        transform: translateY(-50%);

        .content {
            width: 100%;
            height: 100%;
            position: relative;

            .text {
                min-width: 260px;
                top: -30px;
                position: absolute;
                left: 50%;
                text-align: center;
                font-family: Noto Sans S Chinese;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 20px;
                color: #000000;
                transform: translateX(-50%) rotate(10deg);
            }
        }
    }
}
.two-content {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;

    .left {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #1E3723;
        position: absolute;
        top: 50%;
        left: -6px;
        transform: translateY(-50%);

        .content {
            width: 100%;
            height: 100%;
            position: relative;

            .text {
                min-width: 200px;
                bottom: -30px;
                position: absolute;
                left: 50%;
                text-align: center;
                font-family: Noto Sans S Chinese;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 20px;
                color: #000000;
                transform: translateX(-50%) rotate(-30deg);
            }
        }
    }

    .right {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #5CCF00;
        position: absolute;
        top: 50%;
        right: -6px;
        transform: translateY(-50%);

        .content {
            width: 100%;
            height: 100%;
            position: relative;

            .text {
                min-width: 200px;
                top: -30px;
                position: absolute;
                left: 50%;
                text-align: center;
                font-family: Noto Sans S Chinese;
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 20px;
                color: #000000;
                transform: translateX(-50%) rotate(-30deg);
            }
        }
    }
}

.alarm{
    width: 100%;
    height: 100%;
}
</style>
