<template>
	<el-container>
			<el-header class='hole-top'>
				<p>{{$t('message.RewardHistory')}}</p>
				<el-button type="primary" class="fr ac record-btn"><router-link to="/membox/member/withdraw" >{{$t('message.Apply_for_withdrawal')}}</router-link></el-button>
			</el-dropdown>
			</el-header>
	    	<el-table  ref="multipleTable" :data="myVuls_data"  stripe  style="width: 100%">
                <el-table-column prop="history_time"  :label="$t('message.Time')"  width="auto"></el-table-column>
                <el-table-column prop="history_transaction"  :label="$t('message.Transaction')	"  width="auto"></el-table-column>
                <el-table-column prop="history_detail"  :label="$t('message.Detail')"  width="auto"></el-table-column>
                <el-table-column prop="history_status"  :label="$t('message.Status')"></el-table-column>
                <el-table-column prop="history_operate"  :label="$t('message.operatation')"  width="auto"></el-table-column>
            </el-table>
             <div class="withdraw-bottom clearfix">
			      <p class="fr">{{$t('message.Total')}}<span class="ether-num">0</span></p>
			</div>

	</el-container>
</template>

<script>
	export default {
		name: 'cash_flow',
		 data() {
	        return {
	        	checked: true,
	        	centerDialogVisible: false,
		        myVuls_data: [{
		            history_time: '2016-05-02',
		            history_transaction: '',
		            history_detail: '',
		            history_status: '',
		            history_operate: ''
		        }, {
		            history_time: '2016-05-03',
		            history_transaction: '',
		            history_detail: '',
		            history_status: '',
		            history_operate: ''
		        }]
	        }
      },
       methods: {

	    }
	}
</script>

<style>
</style>