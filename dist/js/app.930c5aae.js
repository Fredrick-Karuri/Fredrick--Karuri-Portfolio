(function(t){function e(e){for(var s,n,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"032b":function(t,e,a){"use strict";a("a3b4")},"034f":function(t,e,a){"use strict";a("85ec")},"07a9":function(t,e,a){"use strict";a("5e83")},1670:function(t,e,a){"use strict";a("f636")},"1b64":function(t,e,a){t.exports=a.p+"img/freddy.0e99f277.jpg"},"1d71":function(t,e,a){},"2a0f":function(t,e,a){},3306:function(t,e,a){"use strict";a("ed91")},"372f":function(t,e,a){"use strict";a("662d")},"4ae2":function(t,e,a){"use strict";a("a2e8")},"53ff":function(t,e,a){t.exports=a.p+"img/infoyou2.b1ed4fce.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[a("Navbar",{attrs:{nightMode:t.nightMode},on:{scroll:t.scrollTo,nightMode:t.switchMode}}),a("div",{staticClass:"parent"},[a("Home",{attrs:{nightMode:t.nightMode}}),a("About",{attrs:{id:"about",nightMode:t.nightMode}}),a("Skills",{attrs:{id:"skills",nightMode:t.nightMode}}),a("Portfolio",{attrs:{id:"portfolio",nightMode:t.nightMode}}),a("Recommendation",{attrs:{nightMode:t.nightMode}}),a("Contact",{attrs:{id:"contact",nightMode:t.nightMode}}),a("Footer",{attrs:{nightMode:t.nightMode}})],1)],1)},o=[],n=(a("d3b7"),a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","home")}}},[a("Logo",{attrs:{nightMode:t.nightMode}})],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/about"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","about")}}},[t._v("About")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/skills"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","skills")}}},[t._v("Skills")])]),a("li",{staticClass:"nav-item mx-2 "},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/portfolio"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","portfolio")}}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/contact"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","contact")}}},[t._v("Contact")])]),a("li",{staticClass:"nav-item ml-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchMode.apply(null,arguments)}}},[a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])])])])}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticStyle:{color:"gray","font-size":"23px"}},[a("i",{staticClass:"fas fa-bars"})])])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-div"},[a("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.name))]),a("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},c=[],d={name:"Fredrick Karuri",logo_name:"Fredrick",flat_picture:a("1b64"),config:{use_cookies:!0,navbar:{blur:!1}},description:"I'm a Web Developer & UI/UX Designer with a passion for building projects that are used routinely. I Build applications in JavaScript. I Currently are a Computer Science student. I have a high affinity for a good user experience. ",links:{linkedin:"https://www.linkedin.com/in/fredrick-karuri-37a5681a7/",github:"https://github.com/Fredrick-Karuri",resume:"https://drive.google.com/drive/u/0/folders/13B6M5LOTkvR6zG5fj_5e650lbMrDvFu9"},education:[{name:"Chartaby Academy",place:"Nyahururu",date:"Apr, 2010 - Nov, 2014",degree:"Kenya Certificate of Primary Education",gpa:"",skills:[]},{name:"Kagumo High School",place:"Nyeri",date:"Jan, 2015 - Nov, 2018",degree:"Kenya Certificate of Secondary Education",gpa:"",skills:["Skills gained:","LeaderShip."]},{name:"Daystar University",course:"Applied computer Science",place:"Mavoko/Athi River",date:"May, 2021 - Oct, 2021",degree:"Bachelors in Applied computer Science",description:"",skills:["Skills gained:","HTML5","CSS3","JavaScript","OOP"]}],experience:[{name:"Freelancer",place:"Nairobi, Kenya",date:"Apr, 2022 - Present",position:"Full Stack Web Developer",description:"Developing Front-end website architecture. Designing user interactions on web pages. Ensuring responsiveness of applications. Doing web design.Seeing through a project from conception to finished product. Staying abreast of developments in web applications and programming languages. Proficiency with fundamental Front-end languages such as HTML, CSS, and JavaScript.Familiarity with JavaScript frameworks such as  React.js, and Vue.js.",skills:["HTML5","CSS3","JavaScript","Bootstrap","React.js","Vue.js","Python","Django"]},{name:"Design",place:"Nairobi, Kenya",date:"Oct, 2021 - Present",position:"Designer",description:"Designing Stickers which I sell. Designing posters. Designing website and application wireframes in figma",skills:["Adobe Photoshop","Adobe Illustrator","Figma","CorelDraw","CorelPhotos"]}],skills:[{title:"languages",info:["Javascript","CSS","HTML5"],icon:"fa fa-code"},{title:"data Science",info:["Python"],icon:"fa fa-cubes"},{title:"web technologies",info:["Vue.js","React.js","Node.js","HTML","CSS"],icon:"fas fa-laptop-code"},{title:"databases",info:["firebase","OracleSQL"],icon:"fa fa-database"},{title:"operating systems & tools",info:["Windows","Android","Heroku","Firebase"],icon:"fas fa-tools"},{title:"design",info:["Illustrator","Figma","Photoshop","CorelDraw"],icon:"fa fa-pencil-square-o"}],portfolio:[{name:"ArtOhm",pictures:[{img:a("83e1")},{img:a("f363")},{img:a("9663")},{img:a("b815")}],technologies:["CommerceJs","React.js","Netlify"],category:"E-commerce Site",github:"https://github.com/Fredrick-Karuri/e_commerce",visit:"https://artohm.netlify.app/",description:"I made this site for my stickers business. Check it and even order stickers today!  "},{name:"Lavington Designers",pictures:[{img:a("694d")},{img:a("694d")}],technologies:["CSS","JavaScript","Vue.js","HTML5"],category:"Web App",github:"https://github.com/Fredrick-Karuri/vue-lavington",date:"May 2022-",visit:"",description:" It is a design site, where one can see the various designs done and reach out for a design  "},{name:"InfoYou",pictures:[{img:a("8362")},{img:a("8292")},{img:a("53ff")}],technologies:["Python","Django","Html","Herokuapp"],category:"Web App",github:"https://github.com/Fredrick-Karuri/InfoYou",date:"Apr, 2020 - June, 2020",visit:"",description:"A Blog site. A crafted site to incorporate artists with original content and readers with an affinity for great content!"}],design:[],recommendations:[{title:"In his internship, Fredrick has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",author:"",position:"",company:"",location:" "},{title:"I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",author:"Boaz",position:"Designer",company:"Lavington Builders & Des.",location:"Ngong' Road, Nairobi"}]},u=d,p={name:"Logo",props:{nightMode:{type:Boolean}},data:function(){return{name:u.logo_name,dot:"."}}},g=p,h=(a("f09b"),a("2877")),m=Object(h["a"])(g,r,c,!1,null,"4e68775f",null),f=m.exports,b={name:"Navbar",props:{nightMode:{type:Boolean}},data:function(){return{navbarConfig:u.config.navbar,localNightMode:this.nightMode}},components:{Logo:f},methods:{switchMode:function(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)}}},v=b,y=(a("6f3b"),Object(h["a"])(v,n,l,!1,null,"30d0ad28",null)),M=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[a("img",{attrs:{src:t.picture}})]),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[a("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Hello !")]),a("div",[a("p",{domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"text-center pb-4"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume",expression:"'Resume'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[a("i",{staticClass:"fa fa-file"})])])])])])])},_=[],k=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"wave"},[t._v("👋🏽npm ")])}),w=[],x={name:"Wave"},S=x,j=(a("d68c"),Object(h["a"])(S,k,w,!1,null,"5a9c3418",null)),D=j.exports,E={name:"Home",components:{Wave:D},props:{nightMode:{type:Boolean}},data:function(){return{picture:u.flat_picture,description:"I'm a Web Developer & UI/UX Designer with a passion for building projects that are used routinely. I Build applications in JavaScript. I Currently are a Computer Science student. I have a high affinity for a good user experience.",name:u.name,linkedin:u.links.linkedin,github:u.links.github,resume:u.links.resume}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"angellist":window.open(this.angellist,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},B=E,$=(a("b557"),Object(h["a"])(B,C,_,!1,null,"1978964c",null)),O=$.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("About Me.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},I=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mx-3 mt-3 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[a("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(e,s){return a("ul",{key:e.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[a("li",{staticClass:"m-0 pb-2"},[a("div",[a("div",{staticClass:"px-2 title2"},[t._v(t._s(e.name)+", "+t._s(e.place))]),a("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(e.degree||e.position)+" "+t._s(e.gpa?"("+e.gpa+")":"")+" ")]),a("div",{staticClass:"px-2 date"},[t._v(t._s(e.date))]),a("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(e.description)+" ")]),t._l(e.skills,(function(e){return a("span",{key:e,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(e))])})),a("p",{staticClass:"m-2"})],2)])])}))],2)])])])},P=[],L={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},F=L,A=(a("5bcf"),Object(h["a"])(F,N,P,!1,null,"66721bf4",null)),H=A.exports,R={name:"About",components:{Timeline:H},props:{nightMode:{type:Boolean}},data:function(){return{education:{title:"Education",data:u.education},experience:{title:"Experience",data:u.experience}}}},J=R,V=(a("1670"),Object(h["a"])(J,T,I,!1,null,"5de81bce",null)),K=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("My Skills.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"row"},t._l(t.skills,(function(e,s){return a("div",{key:e.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"bg-div"},[a("i",{class:e.icon})]),a("div",{staticClass:"title2 pt-2"},[t._v(t._s(e.title))]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("span",{staticClass:"title3"},[t._v(t._s(e.info.join(", ")))])])})),0)])])},G=[],z={name:"Skills",props:{nightMode:{type:Boolean}},data:function(){return{skills:u.skills}}},U=z,Y=(a("d15d"),Object(h["a"])(U,W,G,!1,null,"3959f2d2",null)),Q=Y.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Portfolio.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[a("v-tab",{attrs:{title:"development"}},[a("br"),a("div",{staticClass:"row"},t._l(t.portfolio_info,(function(e,s){return a("div",{key:e.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[a("Card",{style:{"transition-delay":s%3/4.2+"s"},attrs:{portfolio:e,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0),"show less"!==t.showBtn?a("div",{staticClass:"text-center py-3"},[a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.showMore.apply(null,arguments)}}},[t._v(t._s(t.showBtn))])]):t._e()]),a("v-tab",{attrs:{title:"design"}},[a("div",{staticClass:"row"},t._l(t.desgin_info,(function(e,s){return a("div",{key:s,staticClass:"col-xl-6 col-bg-6 col-md-12 col-sm-12",class:{"mt-4":!0},staticStyle:{position:"relative"}},[a("vueper-slides",{staticStyle:{position:"aboslute"},attrs:{"dragging-distance":50,"fixed-height":"300px",bullets:!1,"slide-content-outside":"bottom"},on:{click:function(a){return a.preventDefault(),t.showDesignModalFn(e)}}},t._l(e.pictures,(function(t,e){return a("vueper-slide",{key:e,attrs:{image:t.img}})})),1),a("div",{staticClass:"mt-2",staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[a("div",[a("div",{staticClass:"title2",staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))]),t._l(e.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),t._v(" • "),a("span",{staticClass:"date ml-1"},[t._v(t._s(e.date))])],2),a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",staticStyle:{height:"31px","margin-top":"5px"},on:{click:function(a){return a.preventDefault(),t.showDesignModalFn(e)}}},[t._v(" Read more ")])])],1)})),0),a("br")])],1)],1),a("transition",{attrs:{name:"modal"}},[t.showModal?a("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),a("transition",{attrs:{name:"modal"}},[t.showDesignModal?a("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)},q=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-3 mx-3"},[a("div",{staticClass:"card smcard",class:{"pcard-dark":t.nightMode,pcard:!t.nightMode,"bg-dark3":t.nightMode}},[a("div",{staticStyle:{height:"180px"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.portfolio.pictures[0].img,alt:"Card image cap"}})]),a("div",{staticClass:"card-body pborder-top"},[a("h5",{staticClass:"title2"},[t._v(t._s(t.portfolio.name))]),a("div",[a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2 ",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("p",{staticClass:"title3 m-0 pb-2 pheight pt-1",domProps:{innerHTML:t._s(t.portfolio.description.length>100?t.portfolio.description.substring(0,105)+"...":t.portfolio.description)}})]),a("div",{staticClass:"text-center mt-2"},[a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.showModal.apply(null,arguments)}}},[t._v(" Read More ")]),t.portfolio.visit?a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline ml-4",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(" Visit Site ")]):t._e()])])])])},tt=[],et={name:"Card",props:{portfolio:{type:Object},nightMode:{type:Boolean}},methods:{open:function(t){window.open(t,"_blank")},showModal:function(){this.$emit("show",this.portfolio)}}},at=et,st=(a("032b"),Object(h["a"])(at,Z,tt,!1,null,"55b9c9e7",null)),it=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",[a("a",{class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(t._s(t.portfolio.name))])]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25 mr-3",on:{click:function(e){return t.open(t.portfolio.github)}}},[t._v(" github ")]),a("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},nt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"carousel slide",staticStyle:{height:"200px"},attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t){return a("div",{key:t,staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/id/237/200/300",alt:"Second slide"}})])})),0),t._m(0),t._m(1)])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],ct={name:"Carousel",props:{images:{type:Array},name:{type:String}},mounted:function(){}},dt=ct,ut=Object(h["a"])(dt,lt,rt,!1,null,"f5f4294c",null),pt=ut.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"auto"}},[a("div",{staticClass:"prow"},t._l(t.images,(function(e,s){return a("div",{key:e.title,staticClass:"pcolumn",class:{flex:t.design?"100%":"50%","-ms-flex":t.design?"100%":"50%","max-width":t.design?"100%":"50%"}},[a("img",{staticClass:"g-img",staticStyle:{width:"100%"},attrs:{src:e.img,id:"gi"+s},on:{click:function(e){return t.showImg(s)}}}),a("div",{staticClass:"mt-1"},[a("p",{staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))])])])})),0),t._m(0)])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",attrs:{id:"myModal"}},[a("span",{staticClass:"close"},[t._v("×")]),a("img",{staticClass:"modal-content",attrs:{id:"modalImg"}}),a("div",{attrs:{id:"caption"}})])}],mt={name:"Gallery",props:{images:{type:Array},design:{type:Boolean}},data:function(){return{modal:null}},methods:{showImg:function(t){var e=document.getElementById("myModal"),a=document.getElementById("gi".concat(t)),s=document.getElementById("modalImg");e.style.display="block",s.src=a.src;var i=document.getElementsByClassName("close")[0];i.onclick=function(){s.classList.add("closeModal"),e.classList.add("modalClose"),setTimeout((function(){e.style.display="none",s.classList.remove("closeModal"),e.classList.remove("modalClose")}),200)}}}},ft=mt,bt=(a("3306"),Object(h["a"])(ft,gt,ht,!1,null,"2908f88e",null)),vt=bt.exports,yt={name:"Modal",components:{Carousel:pt,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},Mt=yt,Ct=(a("07a9"),Object(h["a"])(Mt,ot,nt,!1,null,"0004b67e",null)),_t=Ct.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",{class:{"text-light":t.nightMode}},[t._v(t._s(t.portfolio.name))]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures,design:!0}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},wt=[],xt={name:"Modal",components:{Carousel:pt,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},St=xt,jt=(a("4ae2"),Object(h["a"])(St,kt,wt,!1,null,"2a20821b",null)),Dt=jt.exports,Et=a("4d48"),Bt=(a("4bf4"),a("b1b5")),$t=(a("2ec8"),{name:"Portfolio",components:{Card:it,Modal:_t,VueTabs:Et["VueTabs"],VTab:Et["VTab"],VueperSlides:Bt["VueperSlides"],VueperSlide:Bt["VueperSlide"],DesignModal:Dt},props:{nightMode:{type:Boolean}},data:function(){return{all_info:u.portfolio,desgin_info:u.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"show more",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created:function(){for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])},watch:{number:function(){this.portfolio_info=[];for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()},closeModal:function(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn:function(t){this.modal_info=t,this.showModal=!0},showDesignModalFn:function(t){this.design_modal_info=t,this.showDesignModal=!0},showMore:function(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="show less";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="show more"}}}}),Ot=$t,Tt=(a("bad5"),Object(h["a"])(Ot,X,q,!1,null,"f88165a4",null)),It=Tt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Recommendations.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},t._l(t.data,(function(e){return a("div",{key:e.author,staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5"},[a("div",{staticClass:"title2",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true"}},[a("span",[t._v('"'+t._s(e.title)+'"')])]),a("div",{staticClass:"title3 float-right py-2 pl-5",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true"}},[a("span",[t._v(" – "+t._s(e.author)+", "+t._s(e.position)+", "+t._s(e.company)+", "+t._s(e.location))])])])})),0)])])},Pt=[],Lt={name:"Recommendation",props:{nightMode:{type:Boolean}},data:function(){return{data:u.recommendations}}},Ft=Lt,At=(a("bd64"),Object(h["a"])(Ft,Nt,Pt,!1,null,"33eecedb",null)),Ht=At.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("contact.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.2s"},attrs:{type:"text",name:"user_name",placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.4s"},attrs:{type:"email",name:"user_email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.6s"},attrs:{name:"message",placeholder:"message",rows:"4"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("button",{staticClass:"mt-1 btn mb-3",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"50"},on:{click:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._v(" Send ")])]),a("Snackbar",{attrs:{showSnackbar:t.showSnackbar,snackbarMessage:t.snackbarMessage,snackbarColor:t.snackbarColor},on:{close:t.closeSnackbar}})],1)])},Jt=[],Vt={emailjs:{serviceID:"service_zgn3pzg",templateID:"template_0p0xp5t",userID:"user_lvJPo2T7f3piQuVteW4Em"}},Kt=Vt,Wt=a("0f91"),Gt=a.n(Wt),zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:{show:t.showSnackbar},style:{"background-color":t.snackbarColor},attrs:{id:"snackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" ")])])},Ut=[],Yt={name:"Snackbar",props:{showSnackbar:{type:Boolean},snackbarMessage:{type:String},snackbarColor:{type:String}},watch:{showSnackbar:function(t){var e=this;t&&setTimeout((function(){e.$emit("close",!1)}),1900)}}},Qt=Yt,Xt=(a("dd6e"),Object(h["a"])(Qt,zt,Ut,!1,null,"290fc1df",null)),qt=Xt.exports,Zt={name:"Contact",components:{Snackbar:qt},props:{nightMode:{type:Boolean}},data:function(){return{email:"",name:"",text:"",showSnackbar:!1,snackbarMessage:"",snackbarColor:""}},methods:{closeSnackbar:function(t){var e=this;t||setTimeout((function(){e.showSnackbar=t}),1e3)},sendEmail:function(){var t=this;if(this.email&&this.name&&this.text){var e={user_email:this.email,from_name:this.name,message_html:this.text,to_name:"Natain Bogdan"};Gt.a.send(Kt.emailjs.serviceID,Kt.emailjs.templateID,e,Kt.emailjs.userID).then((function(e){t.showSnackbar=!0,t.snackbarMessage="Thanks! Message recieved.",t.snackbarColor="#1aa260",t.email="",t.text="",t.name=""}),(function(e){t.showSnackbar=!0,t.snackbarMessage="Oops! Something went wrong.",t.snackbarColor="rgb(212, 149, 97)"}))}else this.showSnackbar=!0,this.snackbarMessage="Please all the fields",this.snackbarColor="rgb(212, 149, 97)"}}},te=Zt,ee=(a("eceb"),Object(h["a"])(te,Rt,Jt,!1,null,"7d068906",null)),ae=ee.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-secondary"},[a("div",{staticClass:"container py-3"},[a("div",{staticClass:"row pt-1 align-items-center"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",staticStyle:{color:"white"}},[a("span",[t._v(" © "+t._s(t.year)+", Copyright: Fredrick Karuri")])]),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[a("i",{staticClass:"fa fa-file"})])])])])])])},ie=[],oe={name:"Footer",data:function(){return{linkedin:u.links.linkedin,github:u.links.github,angellist:u.links.angellist,resume:u.links.resume,year:(new Date).getFullYear()}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"angellist":window.open(this.angellist,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},ne=oe,le=(a("372f"),Object(h["a"])(ne,se,ie,!1,null,"bcfdb72e",null)),re=le.exports,ce={name:"App",components:{Navbar:M,Home:O,About:K,Skills:Q,Portfolio:It,Recommendation:Ht,Contact:ae,Footer:re},data:function(){return{nightMode:!1,config:u.config}},created:function(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted:function(){["about","contact","skills","portfolio"].forEach((function(t){if(window.location.href.includes(t)){var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"})}}))},methods:{switchMode:function(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},scrollTo:function(t){if("home"==t)this.$router.push("/"),window.scrollTo({top:-80,behavior:"smooth"});else{var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"}),this.$router.history.current.path!=="/".concat(t)&&this.$router.push("/".concat(t))}}}},de=ce,ue=(a("034f"),Object(h["a"])(de,i,o,!1,null,null,null)),pe=ue.exports,ge=a("f5af"),he=a.n(ge),me=(a("e829"),a("b3b5")),fe=a("f13c"),be=a.n(fe),ve=a("8c4f"),ye=a("e37d"),Me=a("00e7");s["a"].use(ye["a"]),s["a"].use(ve["a"]),s["a"].use(be.a),s["a"].use(Me),s["a"].use(me["a"]),s["a"].config.productionTip=!1;var Ce=[{path:"/"}],_e=new ve["a"]({mode:"history",routes:Ce});new s["a"]({created:function(){he.a.init()},router:_e,render:function(t){return t(pe)}}).$mount("#app")},"5bcf":function(t,e,a){"use strict";a("64d7")},"5e83":function(t,e,a){},"64d7":function(t,e,a){},"662d":function(t,e,a){},"68f2":function(t,e,a){},"694d":function(t,e,a){t.exports=a.p+"img/lavi1.c9aa0177.jpg"},"6f3b":function(t,e,a){"use strict";a("c351")},8292:function(t,e,a){t.exports=a.p+"img/infoyou3.59f4c39a.png"},8362:function(t,e,a){t.exports=a.p+"img/Infoyou.7ef861a3.png"},"83e1":function(t,e,a){t.exports=a.p+"img/artohm1.e2876db1.jpg"},"85ec":function(t,e,a){},"95a6":function(t,e,a){},9663:function(t,e,a){t.exports=a.p+"img/artohm3.15f5e68d.jpg"},"9e68":function(t,e,a){},a2e8:function(t,e,a){},a3b4:function(t,e,a){},ab1d:function(t,e,a){},b557:function(t,e,a){"use strict";a("e817")},b815:function(t,e,a){t.exports=a.p+"img/artohm4.343fd3d4.jpg"},bad5:function(t,e,a){"use strict";a("1d71")},bd64:function(t,e,a){"use strict";a("2a0f")},c351:function(t,e,a){},d15d:function(t,e,a){"use strict";a("9e68")},d68c:function(t,e,a){"use strict";a("95a6")},dd6e:function(t,e,a){"use strict";a("68f2")},e2e0:function(t,e,a){},e817:function(t,e,a){},eceb:function(t,e,a){"use strict";a("e2e0")},ed91:function(t,e,a){},f09b:function(t,e,a){"use strict";a("ab1d")},f363:function(t,e,a){t.exports=a.p+"img/artohm2.ec1115e9.jpg"},f636:function(t,e,a){}});
//# sourceMappingURL=app.930c5aae.js.map