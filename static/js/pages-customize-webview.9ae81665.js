(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customize-webview"],{"29cc":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-1658ae1f], uni-scroll-view[data-v-1658ae1f], uni-swiper-item[data-v-1658ae1f]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-navbar--fixed[data-v-1658ae1f]{position:fixed;left:0;right:0;top:0;z-index:11}.u-navbar__content[data-v-1658ae1f]{display:flex;flex-direction:row;align-items:center;height:44px;background-color:#9acafc;position:relative;justify-content:center}.u-navbar__content__left[data-v-1658ae1f], .u-navbar__content__right[data-v-1658ae1f]{padding:0 13px;position:absolute;top:0;bottom:0;display:flex;flex-direction:row;align-items:center}.u-navbar__content__left[data-v-1658ae1f]{left:0}.u-navbar__content__left--hover[data-v-1658ae1f]{opacity:.7}.u-navbar__content__left__text[data-v-1658ae1f]{font-size:15px;margin-left:3px}.u-navbar__content__title[data-v-1658ae1f]{text-align:center;font-size:16px;color:#303133}.u-navbar__content__right[data-v-1658ae1f]{right:0}.u-navbar__content__right__text[data-v-1658ae1f]{font-size:15px;margin-left:3px}',""]),t.exports=e},"340f":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{safeAreaInsetTop:{type:Boolean,default:uni.$u.props.navbar.safeAreaInsetTop},placeholder:{type:Boolean,default:uni.$u.props.navbar.placeholder},fixed:{type:Boolean,default:uni.$u.props.navbar.fixed},border:{type:Boolean,default:uni.$u.props.navbar.border},leftIcon:{type:String,default:uni.$u.props.navbar.leftIcon},leftText:{type:String,default:uni.$u.props.navbar.leftText},rightText:{type:String,default:uni.$u.props.navbar.rightText},rightIcon:{type:String,default:uni.$u.props.navbar.rightIcon},title:{type:[String,Number],default:uni.$u.props.navbar.title},bgColor:{type:String,default:uni.$u.props.navbar.bgColor},titleWidth:{type:[String,Number],default:uni.$u.props.navbar.titleWidth},height:{type:[String,Number],default:uni.$u.props.navbar.height},leftIconSize:{type:[String,Number],default:uni.$u.props.navbar.leftIconSize},leftIconColor:{type:String,default:uni.$u.props.navbar.leftIconColor},autoBack:{type:Boolean,default:uni.$u.props.navbar.autoBack},titleStyle:{type:[String,Object],default:uni.$u.props.navbar.titleStyle}}};e.default=a},"54d9":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("d238").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{autoBack:!0,title:t.title,height:"60rpx"}}),n("v-uni-web-view",{staticStyle:{"font-size":"16rpx"},attrs:{src:t.url}})],1)},i=[]},"60fe":function(t,e,n){"use strict";var a=n("b230"),r=n.n(a);r.a},"7cb9":function(t,e,n){"use strict";n.r(e);var a=n("bfba"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"9ecd":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uStatusBar:n("99d1").default,uIcon:n("a6a5").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-navbar"},[t.fixed&&t.placeholder?n("v-uni-view",{staticClass:"u-navbar__placeholder",style:{height:t.$u.addUnit(t.$u.getPx(t.height)+t.$u.sys().statusBarHeight,"px")}}):t._e(),n("v-uni-view",{class:[t.fixed&&"u-navbar--fixed"]},[t.safeAreaInsetTop?n("u-status-bar",{attrs:{bgColor:t.bgColor}}):t._e(),n("v-uni-view",{staticClass:"u-navbar__content",class:[t.border&&"u-border-bottom"],style:{height:t.$u.addUnit(t.height),backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-navbar__content__left",attrs:{"hover-class":"u-navbar__content__left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon?n("u-icon",{attrs:{name:t.leftIcon,size:t.leftIconSize,color:t.leftIconColor}}):t._e(),t.leftText?n("v-uni-text",{staticClass:"u-navbar__content__left__text",style:{color:t.leftIconColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("center",[n("v-uni-text",{staticClass:"u-line-1 u-navbar__content__title",style:[{width:t.$u.addUnit(t.titleWidth)},t.$u.addStyle(t.titleStyle)]},[t._v(t._s(t.title))])]),t.$slots.right||t.rightIcon||t.rightText?n("v-uni-view",{staticClass:"u-navbar__content__right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon?n("u-icon",{attrs:{name:t.rightIcon,size:"20"}}):t._e(),t.rightText?n("v-uni-text",{staticClass:"u-navbar__content__right__text"},[t._v(t._s(t.rightText))]):t._e()])],2):t._e()],2)],1)],1)},i=[]},af54:function(t,e,n){"use strict";n.r(e);var a=n("b109"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},b109:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("340f")),i={name:"u-navbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{}},methods:{leftClick:function(){this.$emit("leftClick"),this.autoBack&&uni.navigateBack()},rightClick:function(){this.$emit("rightClick")}}};e.default=i},b230:function(t,e,n){var a=n("29cc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5bbd54ca",a,!0,{sourceMap:!1,shadowMode:!1})},bfba:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"",url:""}},onLoad:function(t){this.title=t.title,this.url=t.url},methods:{}};e.default=a},d238:function(t,e,n){"use strict";n.r(e);var a=n("9ecd"),r=n("af54");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("60fe");var u,o=n("f0c5"),l=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"1658ae1f",null,!1,a["a"],u);e["default"]=l.exports},fb3b:function(t,e,n){"use strict";n.r(e);var a=n("54d9"),r=n("7cb9");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var u,o=n("f0c5"),l=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"775884f4",null,!1,a["a"],u);e["default"]=l.exports}}]);