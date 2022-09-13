<template>
  <div class="homecontainer" :style="' background-color:'+String(backgoundcolor)">
     <img :src="imgsrc" alt="iphonese">
        <div class="goodinfo">
         {{$t('company.content')}}
      </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
    
  },
  props:['goodname','goodinfo','fontcolor','imgsrc','backgoundcolor']
}
</script>

<style lang="less" scoped> 

.goodinfo{
     font-size: 3.5em ;
     color: black;
     height: 500px;
     width: 50%;
     text-align: center;
     position: absolute;
     top: 0; 
     bottom:0; 
     left: 0; 
     right: 0; 
     margin: auto;
}

.homecontainer{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction:column-reverse;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    font-size: 1em;
    margin-bottom: 13px;
    img{
        width:100%;
        
    }
}


// 大于800px
@media only screen and (min-width: 800px){
    .homecontainer{
      font-size: 1vw;
      .subdiv{
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: .5em;
        .left{
          width: 48%;
          height: 100%;
          font-size: .8em;
        }
        .right{
          width: 48%;
          height: 100%;
          font-size: .8em;
        }
      }
      img{
        width:100%;
        height: calc(100vh + 31px);
      }
    }
}

// 小于800px
@media only screen and (max-width: 800px){
    .homecontainer{
      font-size: 1vw;
      .subdiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
        font-size: .5em;
        .left{
          width: 100%;
          height: 100%;
          font-size: .8em;
        }
        .right{
          width: 100%;
          height: 100%;
          font-size: .8em;
        }
      }
      img{
        display: block;
        width:100%;
        height: 100%;
      }
    }
}
</style>
