(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Av6N:function(t,a,e){"use strict";e.r(a);var o={data:function(){return{data:{email:"",password:"",checkbox_remember_me:!1}}},methods:{userLogin:function(){this.$store.dispatch("userLogin",this.data).then((function(t){t?t.message?alert(t.message):window.location.href="/":alert("Please check input again!")}))}},created:function(){this.$store.getters.isAuthenticated&&(window.location.href="/")}},s=(e("q4Yp"),e("KHd+")),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",attrs:{id:"page-login"}},[o("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[o("vx-card",[o("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[o("div",{staticClass:"vx-row no-gutter justify-center items-center"},[o("div",{staticClass:"vx-col hidden lg:block lg:w-1/2"},[o("img",{staticClass:"mx-auto",attrs:{src:e("myYF"),alt:"login"}})]),t._v(" "),o("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"},[o("div",{staticClass:"p-8 login-tabs-container"},[o("div",{staticClass:"vx-card__title mb-4"},[o("h4",{staticClass:"mb-4"},[t._v("Login")]),t._v(" "),o("p",[t._v("Welcome back, please login to your account.")])]),t._v(" "),o("div",{staticClass:"mb-base"},[o("vs-input",{staticClass:"w-full",attrs:{name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Email"},model:{value:t.data.email,callback:function(a){t.$set(t.data,"email",a)},expression:"data.email"}}),t._v(" "),o("vs-input",{staticClass:"w-full mt-6",attrs:{type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:t.data.password,callback:function(a){t.$set(t.data,"password",a)},expression:"data.password"}}),t._v(" "),o("div",{staticClass:"flex flex-wrap justify-between my-5"},[o("vs-checkbox",{staticClass:"mb-3",model:{value:t.data.checkbox_remember_me,callback:function(a){t.$set(t.data,"checkbox_remember_me",a)},expression:"data.checkbox_remember_me"}},[t._v("Remember Me\n                                    ")]),t._v(" "),o("router-link",{attrs:{to:""}},[t._v("Forgot Password?")])],1),t._v(" "),o("vs-button",{staticClass:"float-right",on:{click:t.userLogin}},[t._v("Login")])],1)])])])])])],1)])}),[],!1,null,null,null);a.default=i.exports},lIua:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"[dir] #page-login .social-login-buttons .bg-facebook {\n  background-color: #1551b1;\n}\n[dir] #page-login .social-login-buttons .bg-twitter {\n  background-color: #00aaff;\n}\n[dir] #page-login .social-login-buttons .bg-google {\n  background-color: #4285F4;\n}\n[dir] #page-login .social-login-buttons .bg-github {\n  background-color: #333;\n}",""])},myYF:function(t,a){t.exports="/images/login.png?d814adb752d2d047b8292d6de603025f"},q4Yp:function(t,a,e){"use strict";var o=e("z1ey");e.n(o).a},z1ey:function(t,a,e){var o=e("lIua");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,s);o.locals&&(t.exports=o.locals)}}]);