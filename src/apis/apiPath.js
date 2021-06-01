import axios from "axios";
import { Loading } from "element-ui";
import store from "../vuex/store";
let domain = process.env.API_ROOT;
let axiosInstance = axios.create();
let loadingInstance;
//设置cookie缓存跨域问题
axios.defaults.withCredentials = true;
axios.defaults.timeout = 500000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

axios.requestData = function(config) {
  return config;
};
axios.requestData = function(response) {
  return response;
};
axios.error = function(error) {
  return error;
};
axios.interceptors.request.use(config => {
  let token = window.localStorage.getItem("token");
  if (config.url.indexOf("node") != -1) {
    loadingInstance = Loading.service({
      lock: true,
      text: "",
      customClass: "comloadings",
      spinner: "icon iconfont icon-loding",
      background: "rgba(255,255,255)"
    });
  }
  if (token) {
    config.headers.Authorization =
      "Bearer " + window.localStorage.getItem("token") || "";
  }
  return config;
});
// 返回状态判断
axios.interceptors.response.use(
  res => {
    //localStorage.setItem('locale', 'zh')
    if (loadingInstance) {
      setTimeout(() => {
        loadingInstance.close();
      }, 500);
    }
    if (
      res.data.errcode === 1001 ||
      res.data.errcode === 1002 ||
      res.data.errcode === 1003
    ) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("tokenType");
      store.dispatch("clearUser");
      window.location.href = "/login";
    } else {
      return res;
    }
    if (res.data.errcode !== 1){
        this.$message.error(res.data.errmsg)
    }
  },
  error => {
    if (error && error.res) {
      switch (error.res.status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          error.message = "未授权，请登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message =
            process.env.NODE_ENV === "production"
              ? `请求地址出错`
              : `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器内部错误";
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP版本不受支持";
          break;
        default:
      }
      Message({
        message: error.message,
        type: "error",
        duration: 5 * 1000
      });
    }
    return Promise.reject(error);
  }
);

// 返回一个Promise  POST token
export function posToken(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: params
    })
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 返回一个Promise  POST 图片token
export function posTokenImg(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: params,
      headers: {
        "Content-type": "multipart/form-data"
      }
    })
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 返回一个Promise GET
export function geToken(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 返回一个Promise  POST token--跨域
export function posTokenCros(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 返回一个Promise GET token--跨域
export function geTokenCros(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

export default {
  //-------------------------获取url-------------------------------------
  captcha: domain + "/api/captcha", //  获取图片验证码
  Avatar: domain, //  获取头像地址

  //----------------------------------------------------------------白帽子接口
  BMZres(params) {
    // post  白帽子注册
    return posToken(domain + "/api/user/register", params);
  },
  BMZlogin(params) {
    //  白帽子登录
    return posToken(domain + "/api/user/login", params);
  },
  BMZskill(params) {
    // get  擅长领域列表
    return geToken(domain + "/api/user/skill", params);
  },
  BMZskillBack(params) {
    // post  返回擅长领域列表
    return posToken(domain + "/api/user/skill/set", params);
  },
  BMZinfo(params) {
    // get	白帽子信息
    return geToken(domain + "/api/user/info", params);
  },
  BMZuserUpload(params) {
    // post	白帽子头像上传
    return posToken(domain + "/api/user/upload", params);
  },
  BMZuserImg(params) {
    // post	图片上传
    return posTokenImg(domain + "/api/vul/upload", params);
  },
  BMZuserVideo(params) {
    // post	图片视频
    return posTokenImg(domain + "/api/vul/video", params);
  },
  BMZvulCate(params) {
    //get 漏洞分类
    return geToken(domain + "/api/user/vul/cate", params);
  },
  BMZcompany(params) {
    //get  查询商户
    return geToken(domain + "/api/company", params);
  },
  BMZvulComtmp(params) {
    //get 其它查询商户
    return geToken(domain + "/api/company/tmp", params);
  },
  BMZvulAdd(params) {
    // post	 	提交漏洞
    return posToken(domain + "/api/vul/add", params);
  },
  BMZvulReupdate(params) {
    // post	 	编辑漏洞
    return posToken(domain + "/api/vul/reupdate", params);
  },
  BMZvulList(params) {
    // post	 	漏洞列表
    return geToken(domain + "/api/vul/list", params);
  },
  BMZvulpassList(params) {
    // get  	白帽子提现漏洞列表
    return geToken(domain + "/api/vul/pass/list", params);
  },
  BMZQaddress(params) {
    // post	 	白帽子修改收款地址
    return posToken(domain + "/api/user/address/update", params);
  },
  BMZvulQwithdraw(params) {
    // post	 	白帽子漏洞提现
    return posToken(domain + "/api/vul/withdraw", params);
  },
  BMZvulQwithdrawList(params) {
    // get	 	提现交易列表
    return geToken(domain + "/api/vul/withdraw/trade", params);
  },
  BMZvulQwithdrawDetail(params) {
    // get	 	提现交易详情
    return geToken(domain + "/api/vul/withdraw/detail", params);
  },
  BMZUserMsgList(params) {
    // get	 消息列表
    return geToken(domain + "/api/user/msg/list", params);
  },
  BMZvulInfo(params) {
    //get 提交漏洞信息
    return geToken(domain + "/api/vul/info", params);
  },
  BMZVulAudit(params) {
    //get 申请DVP认领
    return geToken(domain + "/api/vul/dvp/audit", params);
  },
  BMZlogout(params) {
    //  白帽子退出
    return geToken(domain + "/api/user/logout", params);
  },
  BMZmetaMnonce(params) {
    //metamask获取nonce
    return posToken(domain + "/api/user/metamask/nonce", params);
  },
  BMZmetaMnonceAuth(params) {
    //metamask获取nonce
    return posToken(domain + "/api/user/metamask/nonce/auth", params);
  },
  //-------------------------------------------------------------------------------------厂商接口
  CSres(params) {
    // post  1.厂商注册
    return posToken(domain + "/api/company/register", params);
  },
  CSUserMsgList(params) {
    // get	 消息列表
    return geToken(domain + "/api/company/msg/list", params);
  },
  CSlogin(params) {
    //  2.厂商登录
    return posToken(domain + "/api/company/login", params);
  },
  CScaptcha(params) {
    // get  3.获取图片验证码
    return geToken(domain + "/api/captcha", params);
  },
  CSinfo(params) {
    // get  4.厂商信息接⼝
    return geToken(domain + "/api/company/info", params);
  },
  CSsendEmail(params) {
    // get  5.厂商发送邮件接口
    return geToken(domain + "/api/company/send/email", params);
  },
  CSactiveEmail(params) {
    // get  6.厂商邮件token验证接口
    return geToken(domain + "/api/company/active/email", params);
  },
  CSvul(params) {
    // get  7.厂商漏洞管理列表接口
    return geToken(domain + "/api/company/vul", params);
  },
  CSvulInfo(params) {
    // get   8.	厂商漏洞管理列表详情接口
    return geToken(domain + "/api/company/vul/info", params);
  },
  CSvulClaim(params) {
    // post	 9.漏洞认领、不认领接口
    return posToken(domain + "/api/company/vul/claim", params);
  },
  CScomDeposit(params) {
    // post  10.保证金、充值接口
    return posToken(domain + "/api/company/deposit", params);
  },
  CScomReward(params) {
    // get  11赏管理接口
    return geToken(domain + "/api/company/reward", params);
  },
  CSvulSureFix(params) {
    // get  12.修复漏洞接口
    return geToken(domain + "/api/company/vul/sure/fix", params);
  },
  CScomRewardUpdate(params) {
    // post  13.	悬赏管理修改接口
    return posToken(domain + "/api/company/reward/update", params);
  },
  CScomTrade(params) {
    // get  14.	账户明细接口
    return geToken(domain + "/api/company/trade", params);
  },
  CScomTradeInfo(params) {
    // get  15.	账户明细详细接口
    return geToken(domain + "/api/company/trade/info", params);
  },
  CScomUpdatePass(params) {
    // post  16. 修改密码接口
    return posToken(domain + "/api/company/update/password", params);
  },
  CScomUpdate(params) {
    // post  17.	修改账号接口
    return posToken(domain + "/api/company/update", params);
  },
  CScomUpload(params) {
    // post  18.	上传图片接口
    return posToken(domain + "/api/company/upload", params);
  },
  CScomRewardNext(params) {
    // post  19.	悬赏下一步保存
    return posToken(domain + "/api/company/reward/draft/update	", params);
  },
  CScomRewardView(params) {
    // get  20.	预览
    return geToken(domain + "/api/company/reward/draft/view", params);
  },
  CSlogout(params) {
    //  20.厂商退出
    return geToken(domain + "/api/company/logout", params);
  },
  ComForpass(params) {
    //21.忘记密码第一
    return posToken(domain + "/api/company/forget/password", params);
  },
  ComForpassinfo(params) {
    //22.忘记密码第二
    return geToken(domain + "/api/company/forget/token/info", params);
  },
  ComForpassRep(params) {
    //23.忘记密码第三
    return posToken(domain + "/api/company/forget/repassword", params);
  },
  /*------------------------------------------首页--------------------------------------------*/

  ComTotal(params) {
    // get  1.	首页总数统计接⼝
    return geToken(domain + "/api/common/total", params);
  },
  ComVulTrend(params) {
    // get  2.	漏洞动态列表接口
    return geToken(domain + "/api/common/vul/trend", params);
  },
  ComCompanyNode(params) {
    // get  3.	生态节点接口
    return geToken(domain + "/api/common/company/node", params);
  },
  ComCompanyAudit(params) {
    // get  4.	漏洞赏金列表接口
    return geToken(domain + "/api/common/company/audit", params);
  },
  ComFund(params) {
    // get  5.	基金动态列表
    return geToken(domain + "/api/common/fund", params);
  },
  ComFundInfo(params) {
    // get  	6.	基金token动态列表详情
    return geToken(domain + "/api/common/fund/info", params);
  },
  ComFundToken(params) {
    // get  	7.	基金token动态列表
    return geToken(domain + "/api/common/fund/token", params);
  },
  ComCompanyNon(params) {
    // get  	8.	未入驻信息
    return geToken(domain + "/api/common/company/non", params);
  },
  ComCompanyInfo(params) {
    // get  	9.	入驻信息
    return geToken(domain + "/api/common/company/info", params);
  },
  ComVulTag(params) {
    // get  	10.	安全态势风险率
    return geToken(domain + "/api/common/vul/tag", params);
  },
  ComCompanyMark(params) {
    // get  	11.	厂商黑名单
    return geToken(domain + "/api/common/company/mark", params);
  },
  ComCompanyTypeMonth(params) {
    // get  	12.	厂商类型统计
    return geToken(domain + "/api/common/company/type/month", params);
  },
  ComVulTypeMonth(params) {
    // get  	13.	漏洞类型统计
    return geToken(domain + "/api/common/vul/type/month", params);
  },
  ComCompanyRisk(params) {
    // get  	14.	风险厂商列表
    return geToken(domain + "/api/common/company/risk", params);
  },
  ComCompanyVulTotalList(params) {
    // get  	15.	风险厂商总数详情
    return geToken(domain + "/api/common/company/vul/total/list", params);
  },
  ComVulAllTotal(params) {
    // get  	16.	漏洞级别总数
    return geToken(domain + "/api/common/vul/all/total", params);
  },
  ComVulFixList(params) {
    // get  	17.	漏洞修复列表
    return geToken(domain + "/api/common/vul/fix/list", params);
  },
  ComWhiteRank(params) {
    // get  	18.	白帽子排行
    return geToken(domain + "/api/common/white/rank", params);
  },
  ComWhiteVulDetail(params) {
    // get  	19.	白帽子漏洞数详情
    return geToken(domain + "/api/common/white/vul/detail", params);
  },
  ComPublicVulInfo(params) {
    // get 20. 白帽子漏洞详情
    return geToken(domain + "/api/common/public/vul/info", params);
  },
  ComPublicVulInfoNotToken(params) {
    // get 20. 白帽子漏洞详情(未登录)
    return geToken(domain + "/api/common/public/vul/nottoken/info", params);
  },
  ComNews(params) {
    // get 21. 新闻列表
    return geToken(domain + "/api/common/news", params);
  },
  ComBulletin(params) {
    //22.详情
    return geToken(domain + "/api/common/token/vul/detail", params);
  },
  ComYearmonth(params) {
    //23.年月
    return geToken(domain + "/api/common/year/month", params);
  },
  ComRewhisInfo(params) {
    //24.详情
    return geToken(domain + "/api/common/company/reward/history/info", params);
  },

  /*------------------------------------------数据统计--------------------------------------------*/
  attackMeans(params) {
    // 攻击手段造成的
    return posTokenCros("https://bcsec.org/analyse/news-year", params);
  },
  attackSurface(params) {
    // 易受攻击面
    return posTokenCros("https://bcsec.org/analyse/cate-one", params);
  },
  attackPoint(params) {
    // 易受攻击点
    return posTokenCros("https://bcsec.org/analyse/cate-two", params);
  },
  securityIncident(params) {
    // 重大安全事件
    return posTokenCros("https://bcsec.org/analyse/news-all", params);
  },
  eventSearch(params) {
    // 安全事件列表
    return geTokenCros("https://bcsec.org/index/eventsearch", params);
  },
  indexSearch(params) {
    // 安全事件列表搜索
    return geTokenCros("https://bcsec.org/index/eventsearch", params);
    // return geTokenCros('https://bcsec.org/index/indexsearch', params)
  },
  timeLine(params) {
    // 时间轴
    return geTokenCros("https://bcsec.org/index/dvp-date", params);
  },
  eventDetail(params) {
    // 安全事件详情
    return geTokenCros("https://bcsec.org/index/detail-info", params);
  },
  /*------------------------------------------战队--------------------------------------------*/
  //已下线
  // team(params) { // get
  //   return geToken(domain + '/api/common/team', params)
  // }
  publicVulCilckPraise(params) {
    // 公开漏洞点赞
    return geToken(domain + "/api/common/public/vul/praise", params);
  }
  // publicVulCilckReward(params) { // 公开漏洞打赏
  //     return posToken(domain + '/api/common/public/vul/reward', params)
  // },
};
