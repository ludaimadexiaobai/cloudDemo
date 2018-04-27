<template>
    <div class="body">
        <p class="title">
            <span class="titleContent">这是一个表格</span>
            <span class="titleBtn">
                 <Button @click="handleRender">添加一行信息</Button>    
           </span>
        </p>
        <Table stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>

<style>
.body{ height:100%; padding: 20px;}
.title{ height:45px; padding:5px 20px; border:1px #dddee1 solid; border-bottom:none; font-size:20px; background: #f8f8f8; }
.titleBtn{display: inline-block; vertical-align: middle; margin:0 10px;}
.titleContent{ display: inline-block; vertical-align: middle;}
</style>
<script>
export default {
  name: 'body-content',
  data () {
      return{
          columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]

            
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
