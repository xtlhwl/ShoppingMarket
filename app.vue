<template>
    <div>
        <div class="header">
        <router-link to="/list"
            class="header-title"
        >电商网站</router-link>
        <div class="header-meau">
            <router-link to="/cart" class="header-meau-cart">
                购物车
                <span v-if="cartList.lenght">{{ cartList.lenght}}</span>
            </router-link>
        </div>
    </div>
    <router-link ></router-link>
    </div>

</template>
<script>
    export default{
        computed: {
            cartList(){
                return this.$store.state.cartList;
            }
        },
    }
</script>
<style scoped>

</style>
