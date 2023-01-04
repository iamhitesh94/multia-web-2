<template>
    <div class="error-page">
        <div v-if="error.statusCode === 404" class="container" >
            <h1>404</h1>
            <h2>Page not Found</h2>
        </div>
        <div v-if="error.statusCode !== 404" class="container" >
            <h1>{{error.statusCode}}</h1>
            <h2 v-if="error.statusMessage">{{error.statusMessage}}</h2>
            <h3 v-if="error.message">{{error.message}}</h3>
        </div>
    </div>
</template>
<script>
export default {
  props:{
    error: Object,
  },
}
</script>
<style lang="scss">
  .error-page{
    padding: 200px 0 100px;
    h1{@include laptopH1; display: block; width: 100%;   text-align: center; padding:  0 0 0;color:$gyay555555;}
    h2{@include laptopH2;color: $white;text-align: center;transition: all  1s cubic-bezier(0.23, 1, 0.32, 1);display: block;transform: translateY(120px);}
    h3{@include laptopH3;color: $white;text-align: center;transition: all  1s cubic-bezier(0.23, 1, 0.32, 1);display: block;transform: translateY(120px);}
  }
</style>
