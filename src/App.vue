<template>
  <div id="app">
    <transition name="el-fade-in-linear"
      ><router-view></router-view
    ></transition>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  mounted() {},
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },

  /*	  created () {
	    if(document.documentElement.clientWidth > 640){
	        require('../static/css/DH_style.css');
	        this.plaform = 'pc';
			    }else{
			        require('../static/css/DHM_style.css');
			        this.plaform = 'mobile';

		    }
	    }*/
};
</script>

<style>
#app {
  font-family: Microsoft YaHei, PingFang SC, Lantinghei SC, Helvetica Neue,
    Helvetica, Arial, \\5fae\8f6f\96c5\9ed1, STHeitiSC-Light, simsun,
    \\5b8b\4f53, WenQuanYi Zen Hei, WenQuanYi Micro Hei, "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: inherit;
  color: #2c3e50;
  margin-top: 60px;
}
.el-popover {
  width: auto !important;
}
</style>
