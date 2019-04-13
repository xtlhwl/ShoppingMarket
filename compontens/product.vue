<template>
    <div class="product">
        <router-link :to="'/product/'+info.id"
            class="product-main">
        <img src="info.image" >
        <h4>{{info.name}}</h4>
        <div class="product-color"
            style="{background:colors[info.color]}"></div>

        <div class="product-cost">￥{{info.cost}}</div>
        <div class="product-add-cart"
            @click.prevent='handleCart'>加入购物车</div>
        </router-link>
    </div>
</template>
//info
// {
//     id:1,
//     name:"AirPods",
//     brand:'Apple', //品牌
//     image:'http://ordfm6aah.bkt.clouddn.com/shop/1.jpeg'
//     sales:10000,
//     cost:1288,
//     color:'白色',
// }

<script>
    export default{
        props:{
            info:Object,
        },
        data(){
            return{
                colors:{
                    '白色':'#ffffff',
                    '金色':'#dac272',
                    '蓝天':'#233472',
                    '红色':'#f2352e',
                },
            }
        },
        methods: {
            handleCart(){
                this.$store.commit('addCart',this.info.id);
            }
        }
    }


    
</script>


<style scoped>
    .product{
        width: 25%;
        float: left;
    }
    .product-main{
        display: block;
        margin: 16px;
        padding: 16px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        /* 文字居中 */
        text-align: center; 
        position: relative;
    };
    .product-mian img {
        width: 100%;
    }

    h4{
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .product-mian:hover h4{
        color: #0080c9;
    };

    .product-color {
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 6px auto;
    }
    .product-cost{
        color:#de4037;
        margin-top: 6px;
    }
    .product-add-cart{
        display: none;
        padding: 4px 8px;
        background: #2d8cf0;
        color:#fff;
        font-size: 12px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top:5px;
        right: 5px;
    }

    .product-mian:hover .product-add-cart{
        display: inline-block;
    }





</style>

