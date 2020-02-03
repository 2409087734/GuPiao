<template>
    <div class="home">
        <div class="topbox">
            <div class='ulbox' v-for="(item,index) in list.data">
                <span class="left">{{item.symbol}}</span>
                <div class="right">
                    <span>{{item.price}}</span>
                    <button>+{{item.amplitude}}</button>
                </div>
            </div>
        </div>
        <Content></Content>
    </div>
</template>
<script>
import Content from '../../components/Content'
import {mapState,mapActions} from 'vuex';

export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
       ...mapState(['list'])
    },
    methods:{
       ...mapActions(['getList']),
    },
    created(){
        // this.$get('/finance/stock/usaall?key=99622ad78bcb0ba00aa71085a2580d95&page=1').then(res=>{
        //     console.log(res.data.result)
        // })
        this.getList()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
body,html{
    width: 100%;
    height: 100%;
}
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background:#000;
    color:#fff;
}
.topbox{
    width:100%;
    height:100px;
    line-height:35px;
    display:flex;
    margin-top:10px;
    overflow-y:scroll;
    flex-direction:column;
}
.ulbox{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    font-size:18px;
}
.right span{
   margin-left:-50px;
   margin-right:10px;
}
.right button{
    width: 110px;
    height: 28px;
    background: rgba(132, 255, 132, 0.877);
    border:none;
    outline: none;
    color:#fff;
    font-size:15px;
    border-radius: 3px;
}
</style>