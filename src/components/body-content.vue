<template>
    <div class="body">
        <p class="title">
            <span class="titleContent">这是一个表格</span>
            <span class="titleBtn">
                 <Button @click="handleRender">添加一行信息</Button>    
           </span>
        </p>
        <detail-table></detail-table>
        <div class="searchTableBox">
            <search-table></search-table>
        </div>
        <div class="pagTableBox">
            <pag-table></pag-table>
        </div>
    </div>
</template>

<style>
.body{ height:100%; padding: 20px;}
.title{ height:45px; padding:5px 20px; border:1px #dddee1 solid; border-bottom:none; font-size:20px; background: #f8f8f8; }
.titleBtn{display: inline-block; vertical-align: middle; margin:0 10px;}
.titleContent{ display: inline-block; vertical-align: middle;}
.searchTableBox,.pagTableBox{margin-top:20px;}
.pagTableBox{ background: #fff; padding-bottom: 1px;}
</style>
<script>
import detailTable from './table/detail-table.vue'
import searchTable from './table/search-table.vue'
import pagTable from './table/pag-table.vue'


export default {
  name: 'body-content',
  components:{
      detailTable,searchTable,pagTable,
  },
  data () {
      return{            
      }
  },
   methods: {
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
}
</script>
