<template>
	<div class="project-images-section">
        <div class="project-images-block">
            <!-- eslint-disable vue/no-v-html -->
            <div v-for="(blk, inx) in imageBlk" :key="inx">
                <div v-if="blk.type === 'lg-img' && blk.image.sourceUrl && blk.image.sourceUrl !== '' " class="image-block center-image-lg">
                    <div class="container">
                        <div class="image-wrapper">
                            <div data-scroll class="imagebox coman-effect">
                                <img :src="blk.image.sourceUrl" :alt="blk.image.title">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="blk.type === 'two-img-tex' && ((blk.image.sourceUrl !== '' && blk.image.sourceUrl) || (blk.image2.sourceUrl !== '' && blk.image2.sourceUrl) || blk.content !== '' )" class="two-image-block">
                    <div v-if="blk.image.sourceUrl && blk.image.sourceUrl !== ''" class="image-column">
                        <div data-scroll class="imagebox coman-effect">
                            <img :src="blk.image.sourceUrl" :alt="blk.image.title">
                        </div>
                    </div>
                    <div class="image-column">
                        <div data-scroll class="textbox coman-effect" v-html="blk.content"></div>
                        <div v-if="blk.image2.sourceUrl && blk.image2.sourceUrl !== ''" data-scroll class="imagebox coman-effect">
                            <img :src="blk.image2.sourceUrl" :alt="blk.image2.title">
                        </div>
                    </div>
                </div>
                <div v-if="blk.type === 'md-image' && blk.image.sourceUrl && blk.image.sourceUrl !== ''" class="image-block center-image-md">
                    <div class="container">
                        <div class="image-wrapper">
                            <div data-scroll class="imagebox coman-effect">
                                <img :src="blk.image.sourceUrl" :alt="blk.image.title">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="(blk.type === 'left-img-text' || blk.type === 'right-img-text') && ((blk.image.sourceUrl && blk.image.sourceUrl !== '') || blk.content !== '')" class="image-text-block" :class="{ 'row-reverse': blk.type === 'left-img-text' }">
                    <div class="image-text-row">
                        <div v-if="blk.image.sourceUrl && blk.image.sourceUrl !== ''" class="image-col">
                            <div data-scroll class="imagebox coman-effect">
                                <img :src="blk.image.sourceUrl" alt="">
                            </div>
                        </div>
                        <div class="text-col">
                            <div data-scroll class="textbox coman-effect" v-html="blk.content"></div>
                        </div>
                    </div>
                </div>
                <div v-if="blk.type === 'img-slider'  && blk.images.length > 0" class="image-slider-block">
                    <carousel
                        :items="1"
                        :loop="true"
                        :autoplay="true"
                        :autoplay-speed="6000"
                        :nav="false"
                        :dots="false"
                        :rewind="false"
                        :responsive = "{
                            0:{items:1},576:{items:1},768:{items:1},1200:{items:1},1500:{items:1} 
                        }"
                    >
                        <div v-for="(image,imgInx) in blk.images" :key="imgInx" class="slider-item">
                            <div class="bgbox" :style="{ backgroundImage: `url(${image.background.sourceUrl})` }"></div>
                            <div class="container">
                                <div class="imagebox">
                                    <img :src="image.image.sourceUrl" :alt="image.image.title">
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
                <div v-if="blk.type === 'img-bottom-text' && ((blk.image.sourceUrl !== '' && blk.image.sourceUrl) || blk.content !== '' )" class="image-block center-image-md">
                    <div class="container">
                        <div class="image-wrapper">
                            <div v-if="blk.image.sourceUrl !== '' && blk.image.sourceUrl" data-scroll class="imagebox coman-effect">
                                <img :src="blk.image.sourceUrl" alt="">
                            </div>
                            <div data-scroll class="textbox coman-effect" v-html="blk.content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- eslint-ensable vue/no-v-html -->
        </div>
	</div>
</template>

<script>
export default {
    name: 'ProjectImageBlock',
    props:{
        imageBlk:{
            type: Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style lang="scss">
.project-images-section {
    width:100%;
    position:relative;
    background:$chremF3F1EC !important;
    padding:200px 0 0 0;
}
.project-images-block {
    width:100%;
    position:relative;
    .image-block {
        width:100%;
        position:relative;
        padding:0 0 200px 0;
        .image-wrapper {
            width:100%;
            display:flex;
            flex-direction:column;
            margin:0 auto;
            .imagebox {
                width:100%;
                display:block;
             
                img {
                    max-width:100%;
                    display: inline-block;
                }
            }
            .textbox {
                width:100%;
                max-width:420px;
                display:block;
                padding:50px 0 0 0;
                h3 {
                    @include laptopH4;
					color:$gyay121212;
                    margin:0;
                    padding:0;
                }
                p {
                    @include bodyText2;
					color:$gyay121212;
                    margin:30px 0 0 0;
                    padding:0;
                }
            }
        }
        &.center-image-lg .image-wrapper {
            max-width:1190px;
            text-align:center;
        }
        &.center-image-md .image-wrapper {
            max-width:864px;
        }
    }
    .two-image-block {
        width:100%;
        position:relative;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:0 0 200px 0;
        .image-column {
            width:calc(50% - 70px);
            .imagebox {
                width:100%;
                display:block;
                img {
                    width:100%;
                    display: inline-block;
                }
            }
            .textbox {
                width:100%;
                max-width:520px;
                display:block;
                padding:0 50px 100px 50px;
                h3 {
                    @include laptopH4;
					color:$gyay121212;
                    margin:0;
                    padding:0;
                }
                p {
                    @include bodyText2;
					color:$gyay121212;
                    margin:30px 0 0 0;
                    padding:0;
                }
            }
        }
    }
    .image-text-block {
        width:100%;
        position:relative;
        padding:0 0 200px 0;
        .image-text-row {
            width:100%;
            display:flex;
            flex-wrap:wrap;
            .image-col {
                width:60%;
            }
            .text-col {
                width:40%;
                padding:0 110px 0 90px;
            }
        }
        .imagebox {
            width:100%;
            display:block;
            img {
                max-width:100%;
                display: inline-block;
            }
        }
        .textbox {
            width:100%;
            max-width:420px;
            display:block;
            h3 {
                @include laptopH4;
                color:$gyay121212;
                margin:0;
                padding:0;
            }
            p {
                @include bodyText2;
                color:$gyay121212;
                margin:30px 0 0 0;
                padding:0;
            }
        }
        &.row-reverse .image-text-row {
            flex-direction:row-reverse;
            .image-col {
                text-align:right;
            }
        }
    }
    .image-slider-block {
        width:100%;
        position:relative;
        padding:0 0 200px 0;
        .slider-item {
            width:100%;
            min-height:840px;
            position:relative;
            z-index:1;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            padding:90px 0px;
            .bgbox {
                width:100%;
                height:100%;
                background-position:center center;
                background-repeat:no-repeat;
                background-size:cover;
                position:absolute;
                top:0px;
                left:0px;
                z-index:-1;
            }
            .imagebox {
                width:100%;
                max-width:864px;
                display:block;
                text-align:center;
                margin:0 auto;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease-in-out;
                img {
                    max-width:100%;
                    display: inline-block;
                }
            }
        }
    }
}
 
.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both
}

.fadeIn {
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn
}

@-webkit-keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0)
	}

	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none
	}
}
@-webkit-keyframes fadeOut {
	0% {
		opacity: 1
	}

	100% {
		opacity: 0
	}
}

@keyframes fadeOut {
	0% {
		opacity: 1
	}

	100% {
		opacity: 0
	}
}

.fadeOut {
	-webkit-animation-name: fadeOut;
	animation-name: fadeOut
}

.image-slider-block .owl-carousel .owl-stage-outer .owl-stage{ transform: none !important; width: 100% !important; max-width: 100%; }
.image-slider-block  .owl-carousel .owl-item{ position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; opacity: 0; visibility: hidden; transition: all 0.5s ease-in-out;    }
.image-slider-block  .owl-carousel .owl-item.active{   opacity: 1; visibility: visible;    }
.image-slider-block  .owl-carousel .owl-item.active .imagebox{  transition-delay: 0.5s;  opacity: 1; visibility: visible;    }
.image-slider-block  .owl-carousel .owl-item:first-child{ position: relative; }
</style>