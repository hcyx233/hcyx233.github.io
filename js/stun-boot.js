// build time:Fri Mar 24 2023 14:45:07 GMT+0800 (China Standard Time)
$(document).ready(function(){Stun.utils.showThemeInConsole();if(CONFIG.shortcuts&&CONFIG.shortcuts.switchPost){Stun.utils.registerSwitchPost()}if(CONFIG.externalLink){Stun.utils.addIconToExternalLink("#footer")}Stun.utils.pjaxReloadBoot=function(){if(CONFIG.codeblock){var t=CONFIG.codeblock.style;if(t==="default"){this.addCodeHeader();this.addCopyButton()}else if(t==="carbon"){this.addCodeHeader("carbon");this.addCopyButton("carbon")}else if(t==="simple"){this.addCopyButton("simple")}this.registerCopyEvent()}if(CONFIG.reward){this.registerShowReward()}if(CONFIG.lazyload){this.lazyLoadImage()}if(CONFIG.galleryWaterfall){this.showImageToWaterfall()}if(CONFIG.externalLink){var e=".archive, .post-title";this.addIconToExternalLink(e)}if(CONFIG.fancybox){this.wrapImageWithFancyBox()}else if(CONFIG.zoomImage){this.registerZoomImage()}};Stun.utils.pjaxReloadBoot()});
//rebuild by hrmmi 