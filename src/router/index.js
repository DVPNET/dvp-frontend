import Vue from "vue";
import Router from "vue-router";

// 配置路由参数
let routes = [
    {
        // 公用导航页面
        path: "/layout",
        name: "layout",
        component: () => import('../components/layout')
    },
    {
        // 公用导航页面
        path: "/introduce",
        alias: "/",
        name: "Publicity",
        component: () => import("../views/Publicity")
    },
    {
        // 首页
        path: "/home",
        name: "home",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Home/home')
    },
    {
        // 首页
        path: "/faqhtml",
        name: "faqhtml",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/faqhtml')
    },
    {
        // 首页
        path: "/leaderhtml",
        name: "leaderhtml",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/leader/leaderhtml')
    },
    {
        // 首页
        path: "/rulehtml",
        name: "rulehtml",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/rulehtml')
    },
    {
        // 首页新闻
        path: "/news",
        name: "news",
        meta: {
            title: "新闻动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Home/news')
    },
    {
        // 首页公告
        path: "/advert",
        name: "advert",
        meta: {
            title: "公告动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Home/advert')
    },
    {
        // DVP登录
        path: "/login",
        name: "login",
        meta: {
            title: "登录-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/user/login')
    },
    {
        // DVP登录
        path: "/login_en",
        name: "login_en",
        meta: {
            title: "登录-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/user/login_en')
    },
    {
        // DVP登录
        path: "/login_ko",
        name: "login_ko",
        meta: {
            title: "登录-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/user/login_ko')
    },
    {
        // DVP注册
        path: "/register",
        name: "register",
        meta: {
            title: "注册-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/user/register')
    },
    {
        // DVP注册
        path: "/register_en",
        name: "register_en",
        meta: {
            title: "注册-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/user/register_en')
    },
    {
        // DVP注册
        path: "/register_ko",
        name: "register_ko",
        meta: {
            title: "注册-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/user/register_ko')
    },
    {
        // 邮箱激活成功
        path: "/activeEmail",
        name: "activeEmail",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/activeEmail')
    },
    {
        //忘记密码填写页面
        path: "/passTokenEmail",
        name: "passTokenEmail",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/passTokenEmail')
    },
    {
        // 漏洞通报
        path: "/vul_Bulletin",
        name: "vul_Bulletin",
        meta: {
            title: "漏洞通报-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/info/vul_Bulletin')
    },
    {
        // 漏洞通报
        path: "/vul_BulletinNo",
        name: "vul_BulletinNo",
        meta: {
            title: "漏洞通报-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/info/vul_BulletinNo')
    },
    {
        // DVP漏洞动态
        path: "/lddt",
        name: "lddt",
        meta: {
            title: "漏洞动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/LDDT/lddt')
    },
    {
        // DVP漏洞动态
        path: "/bountyVendor",
        name: "bountyVendor",
        meta: {
            title: "漏洞赏金厂商-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/bountyVendor')
    },
    {
        // DVP漏洞动态
        path: "/bountyVendor_en",
        name: "bountyVendor_en",
        meta: {
            title: "漏洞赏金厂商-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/bountyVendor_en')
    },
    {
        // DVP漏洞动态
        path: "/bountyVendor_ko",
        name: "bountyVendor_ko",
        meta: {
            title: "漏洞赏金厂商-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/bountyVendor_ko')
    },
    {
        // DVP规则与奖励
        path: "/rule",
        name: "rule",
        meta: {
            title: "社区规则-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/rule')
    },
    {
        // 领袖计划
        path: "/leader",
        name: "leader",
        meta: {
            title: "领袖计划-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/leader/leader')
    },
    {
        // 领袖计划
        path: "/leader_en",
        name: "leader_en",
        meta: {
            title: "领袖计划-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/leader/leader_en')
    },
    {
        // 领袖计划
        path: "/leader_ko",
        name: "leader_ko",
        meta: {
            title: "领袖计划-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/leader/leader_ko')
    },
    {
        // DVPFAQ常见问题
        path: "/faq",
        name: "faq",
        meta: {
            title: "FAQ-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/faq')
    },
    {
        // DVPFAQ常见问题
        path: "/faq_en",
        name: "faq_en",
        meta: {
            title: "FAQ-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/faq_en')
    },
    {
        // DVPFAQ常见问题
        path: "/faq_ko",
        name: "faq_ko",
        meta: {
            title: "FAQ-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/faq_ko')
    },
    {
        // DVP 赏金计划
        path: "/Bounty",
        name: "Bounty",
        meta: {
            title: "赏金计划-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/Bounty')
    },
    {
        // DVP 赏金计划
        path: "/Bounty_en",
        name: "Bounty_en",
        meta: {
            title: "赏金计划-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/Bounty_en')
    },
    {
        // DVP 赏金计划
        path: "/Bounty_ko",
        name: "Bounty_ko",
        meta: {
            title: "赏金计划-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/rule/Bounty_ko')
    },
    {
        // DVP白帽子排行
        path: "/rankings",
        name: "rankings",
        meta: {
            title: "白帽排行-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Rankings/rankings')
    },
    {
        // DVP白帽子排行
        path: "/rankings_en",
        name: "rankings_en",
        meta: {
            title: "白帽排行-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Rankings/rankings_en')
    },
    {
        // DVP白帽子排行
        path: "/rankings_ko",
        name: "rankings_ko",
        meta: {
            title: "白帽排行-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Rankings/rankings_ko')
    },
    {
        // DVP社区用户协议
        path: "/agreement",
        name: "agreement",
        meta: {
            title: "DVP社区用户协议-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/agreement/agreement')
    },
    {
        // DVP社区用户协议
        path: "/agreement_en",
        name: "agreement_en",
        meta: {
            title: "DVP社区用户协议-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/agreement/agreement_en')
    },
    {
        // DVP社区用户协议
        path: "/agreement_ko",
        name: "agreement_ko",
        meta: {
            title: "DVP社区用户协议-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/agreement/agreement_ko')
    },
    {
        // DVP社区厂商协议
        path: "/agreement_ven",
        name: "agreement_ven",
        meta: {
            title: "DVP厂商入驻协议-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/agreement/agreement_ven')
    },
    {
        // DVP社区厂商协议
        path: "/agreement_ven_en",
        name: "agreement_ven_en",
        meta: {
            title: "DVP厂商入驻协议-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/agreement/agreement_ven_en')
    },
    {
        // DVP社区厂商协议
        path: "/agreement_ven_ko",
        name: "agreement_ven_ko",
        meta: {
            title: "DVP厂商入驻协议-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/agreement/agreement_ven_ko')
    },
    {
        // DVP基金动态
        path: "/fund",
        name: "fund",
        meta: {
            title: "DVP基金动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/fund/fund')
    },
    {
        // DVP厂商入驻-悬赏计划参考模板
        path: "/rewardReference",
        name: "rewardReference",
        meta: {
            title: "漏洞动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/rewardReference')
    },
    {
        // DVP厂商入驻-悬赏计划参考模板
        path: "/rewardReference_en",
        name: "rewardReference_en",
        meta: {
            title: "漏洞动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/rewardReference_en')
    },
    {
        // DVP厂商入驻-悬赏计划参考模板
        path: "/rewardReference_ko",
        name: "rewardReference_ko",
        meta: {
            title: "漏洞动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/rewardReference_ko')

    },
    {
        // DVP基金动态2
        path: "/fundToken",
        name: "fundToken",
        meta: {
            title: "DVP基金动态-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/fund/fundToken')
    },
    {
        // DVP安全态势-态势感知
        path: "/Risk_manufacturer",
        name: "Risk_manufacturer",
        meta: {
            title: "安全态势-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Risk_manufacturer/Risk_manufacturer')
    },
    {
        // DVP安全态势-安全事件详情
        path: "/securityIncident",
        name: "securityIncident",
        meta: {
            title: "安全态势-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Risk_manufacturer/securityIncident')

    },
    {
        // DVP安全态势-安全事件库
        path: "/securityEventLib",
        name: "securityEventLib",
        meta: {
            title: "安全态势-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Risk_manufacturer/securityEventLib')
    },
    {
        // DVP安全态势-安全事件库搜索
        path: "/securityEventLibSearch",
        name: "securityEventLibSearch",
        meta: {
            title: "安全态势-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Risk_manufacturer/securityEventLibSearch')
    },
    {
        // DVP安全态势-统计分析
        path: "/statisticalAnalysis",
        name: "statisticalAnalysis",
        meta: {
            title: "安全态势-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/Risk_manufacturer/statisticalAnalysis')
    },
    {
        // DVP关于我们
        path: "/about",
        name: "about",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        // component: resolve => require(["@/components/about/about"], resolve)
        component: () => import('../components/about/about')
    },
    {
        // DVP里程碑
        path: "/update",
        name: "update",
        meta: {
            title: "DVP里程碑-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/update/update')
    },
    {
        // DVP里程碑
        path: "/update_en",
        name: "update_en",
        meta: {
            title: "DVP里程碑-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/update/update_en')
    },
    {
        // DVP里程碑
        path: "/update_ko",
        name: "update_ko",
        meta: {
            title: "DVP里程碑-DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/update/update_ko')
    },
    {
        // DVP漏洞详情
        path: "/detail",
        name: "detail",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/info/detail')
    },
    {
        path: "/membox",
        name: "membox",
        // component: resolve => require(["@/components/member/membox"], resolve),
        component: () => import('../components/member/membox'),
        meta: {
            requiresAuth: true
        },
        // 嵌套路由子路由
        children: [
            {
                // 漏洞详情
                path: "wrapdetail",
                name: "wrapdetail",
                meta: {
                    title: "DVP去中心化漏洞平台-专注区块链生态安全"
                },
                // component: resolve => require(["../components/info/wrapdetail"], resolve)
                component: () => import('../components/info/wrapdetail')
            },
            {
                // DVP提交漏洞
                path: "vul",
                name: "vul",
                meta: {
                    title: "提交漏洞-DVP去中心化漏洞平台-专注区块链生态安全"
                },
                // component: resolve => require(["../components/vul/vul"], resolve)
                component: () => import('../components/vul/vul')
            },
            {
                // DVP编辑漏洞
                path: "edit",
                name: "edit",
                meta: {
                    title: "DVP去中心化漏洞平台-专注区块链生态安全"
                },
                // component: resolve => require(["../components/vul/edit"], resolve)
                component: () => import('../components/vul/edit')
            },
            {
                // DVP个人中心
                path: "member",
                name: "member",
                meta: {
                    title: "DVP去中心化漏洞平台-专注区块链生态安全"
                },
                // component: resolve => require(["@/components/member/member"], resolve),
                component: () => import('../components/member/member'),
                // 嵌套路由子路由
                children: [
                    {
                        // DVP个人中心-我的漏洞
                        path: "vuls",
                        name: "vuls",
                        meta: {
                            title: "我的漏洞-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/vuls"], resolve)
                        component: () => import('../components/member/vuls')
                    },
                    {
                        // DVP个人中心-我的漏洞
                        path: "vuls_en",
                        name: "vuls_en",
                        meta: {
                            title: "我的漏洞-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/vuls_en"], resolve)
                        component: () => import('../components/member/vuls_en')
                    },
                    {
                        // DVP个人中心-我的漏洞
                        path: "vuls_ko",
                        name: "vuls_ko",
                        meta: {
                            title: "我的漏洞-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        component: resolve => require(["@/components/member/vuls_ko"], resolve)
                    },
                    {
                        // DVP个人中心-奖励历史
                        path: "cash_flow",
                        name: "cash_flow",
                        meta: {
                            title: "DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/cash_flow"], resolve),
                        component: () => import('../components/member/cash_flow')
                    },
                    {
                        // DVP个人中心-我的信息
                        path: "information",
                        name: "information",
                        meta: {
                            title: "我的资料-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/information"], resolve)
                        component: () => import('../components/member/information')
                    },
                    {
                        // DVP个人中心-我的信息
                        path: "information_en",
                        name: "information_en",
                        meta: {
                            title: "我的资料-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/information_en"], resolve),
                        component: () => import('../components/member/information_en')
                    },
                    {
                        // DVP个人中心-我的信息
                        path: "information_ko",
                        name: "information_ko",
                        meta: {
                            title: "我的资料-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/information_ko"], resolve)
                        component: () => import('../components/member/information_ko')
                    },
                    {
                        // DVP个人中心-申请提现
                        path: "withdraw",
                        name: "withdraw",
                        meta: {
                            title: "申请提现-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/withdraw"], resolve)
                        component: () => import('../components/member/withdraw'),
                    },
                    {
                        // DVP个人中心-申请提现-提现记录
                        path: "withdraw_history",
                        name: "withdraw_history",
                        meta: {
                            title: "DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/withdraw_history"], resolve)
                        component: () => import('../components/member/withdraw_history')
                    },
                    {
                        // DVP个人中心-我的消息-未读消息
                        path: "unread_message",
                        name: "unread_message",
                        meta: {
                            title: "DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/member/unread_message"], resolve)
                        component: () => import('../components/member/unread_message')
                    }
                ]
            }
        ]
    },
    {
        path: "/combox",
        name: "combox",
        // component: resolve => require(["@/components/company/combox"], resolve),
        component: () => import('../components/company/combox'),
        meta: {
            title: "漏洞登录-DVP去中心化漏洞平台-专注区块链生态安全",
            requiresAuth: true
        },
        children: [
            {
                //漏洞详情
                path: "wrapdetailComp",
                name: "wrapdetailComp",
                meta: {
                    title: "漏洞详情-DVP去中心化漏洞平台-专注区块链生态安全"
                },
                // component: resolve => require(["../components/info/wrapdetailComp"], resolve)
                component: () => import('../components/info/wrapdetailComp')
            },
            {
                // DVP厂商入驻-首页
                path: "company",
                name: "company",
                meta: {
                    title: "漏洞详情-DVP去中心化漏洞平台-专注区块链生态安全"
                },
                // component: resolve => require(["../components/company/company"], resolve),
                component: () => import('../components/company/company'),
                // 嵌套厂商入驻路由子路由
                children: [
                    {
                        // DVP厂商入驻-漏洞管理
                        path: "comLoophole",
                        name: "comLoophole",
                        meta: {
                            title: "漏洞管理-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/company/comLoophole"], resolve)
                        component: () => import('../components/company/comLoophole')
                    },
                    {
                        // DVP厂商入驻-悬赏管理
                        path: "comReward",
                        name: "comReward",
                        meta: {
                            title: "悬赏管理-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/company/comReward"], resolve)
                        component: () => import('../components/company/comReward')
                    },
                    {
                        // DVP厂商入驻-悬赏管理
                        path: "comReward_en",
                        name: "comReward_en",
                        meta: {
                            title: "悬赏管理-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/company/comReward_en"], resolve)
                        component: () => import('../components/company/comReward_en')
                    },
                    {
                        // DVP厂商入驻-悬赏管理
                        path: "comReward_ko",
                        name: "comReward_ko",
                        meta: {
                            title: "悬赏管理-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/company/comReward_ko"], resolve)
                        component: () => import('../components/company/comReward_ko')
                    },
                    {
                        // DVP厂商入驻-担保金管理
                        path: "comTrade",
                        name: "comTrade",
                        meta: {
                            title: "担保金管理-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        component: () => import('../components/company/comTrade')
                    },
                    {
                        //DVP厂商入驻-账号设置
                        path: "comMember",
                        name: "comMember",
                        meta: {
                            title: "账号设置-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/company/comMember"], resolve)
                        component: () => import('../components/company/comMember')
                    },
                    {
                        // DVP厂商入驻-消息
                        path: "comMessage",
                        name: "comMessage",
                        meta: {
                            title: "DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        // component: resolve => require(["@/components/company/comMessage"], resolve)
                        component: () => import('../components/company/comMessage')
                    },
                    {
                        path: "companyOne",
                        name: "companyOne",
                        meta: {
                            title: "个人中心-DVP去中心化漏洞平台-专注区块链生态安全"
                        },
                        component: () => import('../components/company/companyOne')
                    }
                ]
            }
        ]
    },
    {
        path: "/companyTwo",
        name: "companyTwo",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/companyTwo')
    },
    {
        path: "/companyTwoCons",
        name: "companyTwoCons",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/companyTwoCons')
    },
    {
        path: "/companyTwoNo",
        name: "companyTwoNo",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/companyTwoNo')
    },
    {
        path: "/vueCode",
        name: "vueCode",
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../components/company/vueCode')
    },
    {
        path: '/detection',
        name: 'detection',
        meta: {
            title: "DVP去中心化漏洞平台-专注区块链生态安全"
        },
        component: () => import('../views/detection/detection')
    },
    // 白皮书
    // {
    //     path: '/whitePaper',
    //     name: 'whitePaper',
    //     meta: {
    //         title: 'DVP去中心化漏洞平台-专注区块链生态安全'
    //     },
    //     component: resolve => require(['@/components/whitePaper/whitePaper'], resolve)
    // },
    // 战队（已下线）
    // {
    //     path: '/team',
    //     name: 'team',
    //     meta: {
    //         title: 'DVP去中心化漏洞平台-专注区块链生态安全'
    //     },
    //     component: resolve => require(['@/components/temp/team'], resolve)
    // }
    {
        //404 报错页面
        path: "*",
        name: "errorwrap",
        meta: {
            title: "404"
        },
        // component: resolve => require(["../components/error/errorwrap"], resolve)
        component: () => import('../components/error/errorwrap')
    },
];

// 将配置参数传出
export default routes;
