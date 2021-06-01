<template>
	<div id="team">
    <div class="row">
      <img src="/static/image/dvp-team.png" class="img-fluid" >
    </div>
    <div class="row" style="padding-top: 50px;margin-bottom: 1200px;">
      <div class="col-md-6">
        <div>
          <table class="table">
            <caption>The international ranking</caption>
            <thead>
            <tr>
              <th>#</th>
              <th>Team Name</th>
              <th>Vul Num</th>
              <!-- <th>Rank</th> -->
              <th>dvp</th>
              <th>eth</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="inter.length > 0">
              <tr v-for="(item, index) in inter" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{item.team}}</td>
                <td>{{item.vuls}}</td>
                <!-- <td>{{item.rank}}</td> -->
                <td>{{item.dvp}}</td>
                <td>{{item.eth}}</td>
              </tr>
            </template>
            <template v-if="inter.length <= 0">
              <tr>
                <th scope="row">-</th>
                <td>-</td>
                <td>-</td>
                <!-- <td>-</td> -->
                <td>-</td>
                <td>-</td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <table class="table">
            <caption>The Korea ranking</caption>
            <thead>
            <tr>
              <th>#</th>
              <th>Team Name</th>
              <th>Vul Num</th>
              <!-- <th>Rank</th> -->
              <th>dvp</th>
              <th>eth</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="ko.length > 0">
              <tr v-for="(item, index) in ko" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{item.team}}</td>
                <td>{{item.vuls}}</td>
                <!-- <td>{{item.rank}}</td> -->
                <td>{{item.dvp}}</td>
                <td>{{item.eth}}</td>
              </tr>
            </template>
            <template v-if="ko.length <= 0">
              <tr>
                <th scope="row">-</th>
                <td>-</td>
                <td>-</td>
                <!-- <td>-</td> -->
                <td>-</td>
                <td>-</td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	
	export default {
		name: 'team',
		data() {
			return {
				ko: [
        ],
        inter: [
          
        ]
			}
    },
    methods: {
      getData() {
        this.$ajax.team()
        .then(res =>{
          if (res.data.KR) {
            this.ko = res.data.KR;
          }
          if (res.data.CN) {
            this.inter = res.data.CN;
          }
        })
      }
    },
		mounted() {
		  this.getData();
    }
  }
</script>

<style scoped>
  #team {
    width: 1200px;
    margin: 0 auto;
    margin-top: 110px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-md-6 {
    width: 570px;
    padding: 0 15px;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  caption {
    padding-top: 8px;
    padding-bottom: 8px;
    color: #777;
    text-align: left;
  }

  .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    text-align: left;
    border-top: 1px solid #ddd;
  }

  .table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }

  .table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th {
    border-top: 0;
  }

  .table>caption+thead>tr:first-child>th,
  .table>tbody>tr>th {
    color: #333!important;
  }
</style>