<template>
    <div class="home">
        <div class='ulbox'>
            <span class="left">AAPL</span>
            <div class="right">
                <span>99.65</span>
                <button>+0.72%</button>
            </div>
        </div>
                <div class='ulbox'>
            <span class="left">AAPL</span>
            <div class="right">
                <span>99.65</span>
                <button>+0.72%</button>
            </div>
        </div>

        <div class='ulbox'>
            <span class="left">AAPL</span>
            <div class="right">
                <span>99.65</span>
                <button>+0.72%</button>
            </div>
        </div>

    </div>
</template>
<script>
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

    },
    methods:{

    },
    created(){
        this.$get('/finance/stock/usaall?key=99622ad78bcb0ba00aa71085a2580d95').then(res=>{
            console.log(res)
        })
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