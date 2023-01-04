<template>
	<div v-if="(nextPost && nextPost.success)" class="project-next-section">
        <NuxtLink class="project-next-block" :to="nextPost.link">
            <div class="imagebox" :style="{ backgroundImage: `url(${nextPost.image})` }"></div>
            <div class="container">
                <div data-scroll class="textbox coman-effect">
                    <div class="link-text">Next</div>
                    <h2 v-html="nextPost.title"></h2>
                </div>
            </div>
        </NuxtLink>
	</div>
</template>
<script>
export default {
    name: 'ProjectNextPost',
    props:{
        nextPost:{
            type: Object,
            default(){
                return {}
            }
        }
    },
}
</script>

<style lang="scss">
.project-next-section {
    width:100%;
    position:relative;
}
.project-next-block {
    width:100%;
    min-height:830px;
    position:relative;
    z-index:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:90px 0px;
    .imagebox {
        width:100%;
        height:100%;
        background-position:center center;
        background-repeat:no-repeat;
        background-size:cover;
        opacity:0.8;
        position:absolute;
        top:0px;
        left:0px;
        z-index:-1;
    }
    .textbox {
        width:100%;
        max-width:1060px;
        display:block;
        text-align:center;
        margin:0 auto;
        .link-text {
            display:block;
            font-family: 'TT Norms Pro';
            font-size:24px;
            color:$white;
            font-weight:400;
            line-height:1.3;
            margin:0 0 24px 0;
            padding:0;
        }
        h2 {
            @include laptopH1;
            color:$white;
            margin:0;
            padding:0;
        }
    }
}
</style>