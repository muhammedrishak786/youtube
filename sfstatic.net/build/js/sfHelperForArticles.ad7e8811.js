(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{2:function(t,i,e){"use strict";t.exports=window.$},225:function(t,i,e){"use strict";(function(t){var i=e(1)(e(226));function n(e,n,s,o){function r(){clearTimeout(l),t('article [data-btn="download"]').css("opacity",0).css("visibility","visible").fadeTo("normal",1)}function a(){return t(['article [data-btn="download"]',".button-box .download-btn a",'.download-box .icon a[name="download-box"]'].join(","))}this.vid=_sf.hash.vid||_sf.hash.VID||"308",this.getDownloadUrlForOs=function(t){return _sf.helper.getDownloadUrlForOs(null,null,"",{vid:t})},this.downloadUrl=this.getDownloadUrlForOs(this.vid),this.buttonData=null,this.downloadUrl&&_sf.helper.osConfig&&(this.buttonData={text:e.button,href:this.downloadUrl,attr:{class:"ga_track_events show-instruction",target:_sf.helper.osConfig.isStore?"_blank":"_self","data-ga-event":"send;pageview;extension/button_os_"+_sf.helper.osConfig.id+".ext?vid="+this.vid,"data-vid":this.vid}}),this.addSetupInstruction=function(e){var r=this,a=new i.default(_sf.helper,_sf.lang,n).getForOs();if(a){var l=t.templates(s),f=t(l).render({steps:a});if(f){l=t.templates(o);var h=t(l).render({instructions:f,downloadUrl:this.downloadUrl});if(h){var u=t("article:first"),d=t("<section/>").hide().append(h);d.prependTo(u),e.filter('[target="_self"]').on("click",(function(i){i.preventDefault();var e=d.is(":visible")?d.offset().top:u.offset().top;d.slideDown("slow"),t("html, body").animate({scrollTop:e-40},"fast"),setTimeout((function(){location.href=r.downloadUrl}),2e3)}))}}}},this.replaceArticleButtons=function(){if(!this.downloadUrl)return function(i){if(!i)return;t(a()).each((function(){var e=t(this).attr("href");(e=function(t,i){if(!t||-1==t.search(/\/user\.php/))return t;var e=/(\?(?:[^&]&)?vid=)\d+/i;if(t.search(e)>1)return t.replace(e,"$1"+i);return t.replace(/(\/user\.php)(?:\?([^#]?))?/i,(function(t,e,n){var s=e+"?vid="+i;return n&&(s+="&"+n),s}))}(e,i))&&t(this).attr("href",e)}))}(this.vid),void r();var i=a();i[0]&&(!function(i,e){if(!e)return;e.text&&i.not(":has(>img)").not('[data-btn-text="fixed"]').html(e.text);e.attr&&(e.attr.class&&(i.addClass(e.attr.class),delete e.attr.class),i.attr(e.attr));i.on("click",(function(){var i=t(this).attr("data-vid");i&&window.cookie.set("vid",i,30,_sf.cookieDomain)}))}(i,this.buttonData),i.attr("href",this.downloadUrl),r(),this.addSetupInstruction(i))};var l=setTimeout((function(){r()}),7e3);this.replaceArticleButtons()}window.SfHelperForArticles=n,window.sfHelperForArticles=n}).call(this,e(2))},226:function(t,i,e){"use strict";e(3)(i,"__esModule",{value:!0}),i.default=void 0;var n=function(t,i,e){this.sfHelper=t,this.config=null,this.lang=i,this.text=e||null,this.imgLang=["en"],this.defaultImgLang="en",this.langPrefix="_",this.imgExt="png",this.thumbnailSuffix="_t",this.maxLength=3,this.init()};n.prototype.init=function(){this.sfHelper&&this.sfHelper.config&&(this.config=this.sfHelper.config)},n.prototype.setText=function(t){this.text=t},n.prototype.getForOs=function(t,i){if(!this.config||!this.text)return[];var e=this.sfHelper.browserConfig.id,n=this.sfHelper.osConfig;if(t&&i){if(!i||!i.name)return[];e=i.name.toLowerCase(),n=this.sfHelper.getConfigForOs(t,i)}if(!n)return[];var s=this.config.setupInstructions,o=s.imgExt||this.imgExt,r=s.thumbnailSuffix||this.thumbnailSuffix;if(!s||!s.os||!s.os[n.id])return[];if(!(s=s.os[n.id]).steps||!s.steps[e])return[];var a=s.imgLang||this.imgLang;o=s.imgExt||o,r=s.thumbnailSuffix||r;var l=[];return this.addItemsForOS(l,s.steps[e],a,o,r),s.steps.default&&this.addItemsForOS(l,s.steps.default,a,o,r),l.length>this.maxLength&&(l=l.slice(0,this.maxLength)),l},n.prototype.addItemsForOS=function(t,i,e,n,s){for(var o=0;o<i.length;o++){var r=this.getSingleItemForOs(i[o],e,n,s);r&&r.img&&t.push(r)}},n.prototype.getSingleItemForOs=function(t,i,e,n){var s=t.imgLang||i,o=this.lang;-1===s.indexOf(o)&&(o=this.defaultImgLang);var r=t.imgExt||e,a=t.thumbnailSuffix||n,l={img:"",thumb:"",text:""};return t.img&&(l.img=t.img+this.langPrefix+o,l.thumb=l.img+a+"."+r,l.img+="."+r),t.text&&this.text[t.text]&&(l.text=this.text[t.text]),l};var s=n;i.default=s}},[[225,1,0]]]);