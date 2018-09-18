<template>
  <div class="photo-wall">
    <div class="photo-wall-item">
      <img :src="imgUrl[0]"/>
    </div>
    <div class="photo-wall-item">
      <img :src="imgUrl[1]"/>
    </div>
    <div class="photo-wall-item">
      <img :src="imgUrl[2]"/>
    </div>
    <div class="photo-wall-item">
      <img :src="imgUrl[3]"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: [
        require('@/assets/timthumb.jpg'),
        require('@/assets/timthumb1.png'),
        require('@/assets/timthumb2.jpg'),
        require('@/assets/timthumb3.jpg')
      ]
    }
  }
}
</script>


<style lang="less" scoped>
  .photo-wall{
    width: 100%;
    height: 400px;
    background: #559664;
    margin: 0px 0;
    padding-left: 30px;
    .photo-wall-item {
      position: relative;
      width: 300px;
      height: 200px;
      float: left;
      box-shadow: 0 0 10px;
      margin-top: 100px;
      transition: all 1s;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .photo-wall-item:first-child{
      transform: rotate(30deg);
      animation: mymove 2s 1 linear;
    }
    .photo-wall-item:nth-child(2){
      transform: rotate(-40deg); 
      animation: mymove 2.5s 1 linear;
    }
    .photo-wall-item:nth-child(3){
      transform: rotate(10deg);
      animation: mymove 3s 1 linear;
    }
    .photo-wall-item:nth-child(4){
      transform: rotate(45deg);
      animation: mymove 3.5s 1 linear;
    }
    .photo-wall-item:hover {
      transform: scale(1.3)
    }
  }
  @-webkit-keyframes mymove
  {
    0%   {left: 100%;}
    25%  {left: 75%;}
    50%  {left: 50%;}
    75%  {left: 25%;}
    100% {left: 0%;}
  }
</style>

