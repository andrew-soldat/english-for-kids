(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],{22:function(s,a,e){},23:function(s,a,e){},30:function(s,a,e){"use strict";e.r(a);var t=e(1),i=e.n(t),r=e(15),c=e.n(r),o=(e(22),e(7)),n=(e(23),e(8)),d=e(0),m=function(s){var a=s.nameCard,e=s.handleToggleNoActive;return Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/".concat(a.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")),className:"header__link",onClick:e,children:a})})},g=function(s){var a=s.toggleMode,e=s.store,i=Object(t.useState)(!1),r=Object(o.a)(i,2),c=r[0],g=r[1],l=function(){g(!1),document.body.classList.remove("_lock")};return document.addEventListener("click",(function(s){s.target.closest(".header__list li, .header__burger")||(g(!1),document.body.classList.remove("_lock"))})),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"header__toggle toggle",children:[Object(d.jsx)("span",{className:"toggle__text",children:"Train"}),Object(d.jsxs)("label",{className:"toggle__switch switch",children:[Object(d.jsx)("input",{className:"switch__input",type:"checkbox",onClick:a}),Object(d.jsx)("span",{className:"switch__slider"})]}),Object(d.jsx)("span",{className:"toggle__text",children:"Game"})]}),Object(d.jsxs)("div",{className:"header__menu",children:[Object(d.jsxs)("div",{className:"header__burger ".concat(c?"_active":""),onClick:function(){g(!c),c?document.body.classList.remove("_lock"):document.body.classList.add("_lock")},children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsx)("nav",{className:"header__nav ".concat(c?"_active":null),children:Object(d.jsxs)("ul",{className:"header__list",children:[Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{exact:!0,to:"/",className:"header__link",onClick:l,children:"Main"})}),Object.values(e).map((function(s){return Object(d.jsx)(m,{nameCard:s.name,handleToggleNoActive:l},s.name)}))]})}),Object(d.jsx)("div",{className:"header__overlay"})]})]})},l=function(s){var a=s.nameCard,e=s.imgCard;return Object(d.jsxs)(n.b,{to:"/".concat(a.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")),className:"card-category",children:[Object(d.jsx)("img",{className:"card-category__image",src:e,alt:a}),Object(d.jsx)("div",{className:"card-category__text",children:a})]},a)},u=function(s){return Object(d.jsxs)("main",{className:"page",children:[Object(d.jsx)("div",{className:"category-title",children:Object(d.jsx)("h1",{className:"category-title__text",children:"\u0421ategory \u0441ards"})}),Object(d.jsx)("div",{className:"cards",children:Object.values(s.store).map((function(s){return Object(d.jsx)(l,{nameCard:s.name,imgCard:s.imgSrc},s.name)}))})]})},p=function(s){var a=s.child,e=Object(t.useState)(!1),i=Object(o.a)(e,2),r=i[0],c=i[1];return Object(d.jsxs)("div",{className:"card-item ".concat(r?"_active":""),children:[Object(d.jsxs)("div",{className:"card-item__front",children:[Object(d.jsx)("img",{className:"card-item__image",src:a.imgSrc,alt:a.word,onClick:function(){return new Audio(a.audioSrc).play()}}),Object(d.jsxs)("div",{className:"card-item__content",children:[Object(d.jsx)("div",{className:"card-item__text",children:a.word}),Object(d.jsx)("button",{className:"card-item__rotate",onClick:function(){c(!0),window.innerWidth<991&&setTimeout((function(){return c(!1)}),2e3)}})]})]}),Object(d.jsxs)("div",{className:"card-item__back",onMouseLeave:function(){return c(!1)},children:[Object(d.jsx)("img",{className:"card-item__image",src:a.imgSrc,alt:a.word}),Object(d.jsx)("div",{className:"card-item__text",children:a.translation})]})]})},j=e.p+"static/media/correct.23d0e138.mp3",S=e.p+"static/media/wrong.88bbaea7.mp3",h=e.p+"static/media/failure.296640c6.mp3",b=e.p+"static/media/success.5f4128d4.mp3",w=e.p+"static/media/success.eaec39d7.jpg",O=e.p+"static/media/failure.f7b0f130.jpg",_=function(s){var a=s.modeGame,e=s.nameCategory,i=s.children,r=Object(t.useState)(!1),c=Object(o.a)(r,2),n=c[0],m=c[1],g=Object(t.useState)(!1),l=Object(o.a)(g,2),u=l[0],_=l[1],x=Object(t.useState)(0),f=Object(o.a)(x,2),v=f[0],y=f[1],N=0,k=function(){0===N?new Audio(b).play():new Audio(h).play(),y(N),_(!0),setTimeout((function(){_(!1),m(!1)}),4e3)},C=function(s){for(var a=s.length-1;a>0;a-=1){var e=Math.floor(Math.random()*(a+1)),t=[s[e],s[a]];s[a]=t[0],s[e]=t[1]}return s};return u?Object(d.jsx)("main",{className:"page _result",children:Object(d.jsxs)("div",{className:"result",children:[Object(d.jsx)("img",{src:v?O:w,alt:v?O:w}),Object(d.jsx)("div",{className:"result__text",children:v?Object(d.jsxs)("span",{children:[v," mistake",v>1?"s":"","."]}):"Congratulations!"})]})}):Object(d.jsxs)("main",{className:"page",children:[Object(d.jsx)("div",{className:"category-title",children:Object(d.jsx)("h1",{className:"category-title__text",children:e})}),a&&Object(d.jsx)("div",{className:"wrapper-stars"}),Object(d.jsx)("div",{className:"cards",children:Object.values(i).map((function(s){return a?Object(d.jsx)("div",{className:"card-item",children:Object(d.jsx)("div",{className:"card-item__front",children:Object(d.jsx)("img",{className:"card-item__image",src:s.imgSrc,"data-word":s.word,alt:s.word})})},s.word):Object(d.jsx)(p,{child:s},s.word)}))}),a&&Object(d.jsx)("div",{className:"play",children:n?Object(d.jsx)("button",{className:"play__repeat",children:"Repeat"}):Object(d.jsx)("button",{className:"play__start",onClick:function(){m(!0);var s=[];Object.values(i).map((function(a){return s.push(a.audioSrc)}));var a=C(s),e=document.querySelector(".cards"),t=document.querySelector(".wrapper-stars"),r=document.querySelector(".play__start");function c(){0!==a.length?setTimeout((function(){return new Audio(a[a.length-1]).play()}),1e3):setTimeout((function(){return k()}),2e3)}c(),r.addEventListener("click",(function(){return new Audio(a[a.length-1]).play()})),e.addEventListener("click",(function(s){s.target.classList.contains("card-item__image")&&!s.target.parentNode.classList.contains("hide")&&("assets/audio/".concat(s.target.getAttribute("data-word"),".mp3")===a[a.length-1]?(s.target.parentNode.classList.add("hide"),t.innerHTML+='<img src="assets/img/star-win.svg" alt="correct" />',new Audio(j).play(),a.pop(),c()):(N++,t.innerHTML+='<img src="assets/img/star.svg" alt="wrong" />',new Audio(S).play()))}))},children:"Start"})})]})},x=function(s){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"footer__author",children:["\xa9 2021 ",Object(d.jsx)("a",{className:"footer__author_link",href:"https://github.com/andrew-soldat",target:"blank",children:"Andrew Blishch"})]})})},f=e(2);var v=function(s){var a=Object(t.useState)(!1),e=Object(o.a)(a,2),i=e[0],r=e[1];return Object(d.jsx)(n.a,{children:Object(d.jsxs)("div",{className:"wrapper ".concat(i?"_mode-play":""),children:[Object(d.jsx)(g,{store:s.store,toggleMode:function(){return r(!i)}}),Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(u,{store:s.store})}}),Object.values(s.store).map((function(s){return Object(d.jsx)(f.a,{path:"/".concat(s.name.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")),render:function(){return Object(d.jsx)(_,{modeGame:i,nameCategory:s.name,children:s.children})}},s.name)}))]}),Object(d.jsx)(x,{})]})})},y=function(s){s&&s instanceof Function&&e.e(3).then(e.bind(null,31)).then((function(a){var e=a.getCLS,t=a.getFID,i=a.getFCP,r=a.getLCP,c=a.getTTFB;e(s),t(s),i(s),r(s),c(s)}))},N={set1:{name:"Action (set A)",imgSrc:"./assets/img/jump.jpg",children:[{word:"cry",translation:"\u043f\u043b\u0430\u043a\u0430\u0442\u044c",imgSrc:"assets/img/cry.jpg",audioSrc:"assets/audio/cry.mp3"},{word:"dance",translation:"\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c",imgSrc:"assets/img/dance.jpg",audioSrc:"assets/audio/dance.mp3"},{word:"dive",translation:"\u043d\u044b\u0440\u044f\u0442\u044c",imgSrc:"assets/img/dive.jpg",audioSrc:"assets/audio/dive.mp3"},{word:"draw",translation:"\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c",imgSrc:"assets/img/draw.jpg",audioSrc:"assets/audio/draw.mp3"},{word:"fish",translation:"\u043b\u043e\u0432\u0438\u0442\u044c \u0440\u044b\u0431\u0443",imgSrc:"assets/img/fish.jpg",audioSrc:"assets/audio/fish.mp3"},{word:"fly",translation:"\u043b\u0435\u0442\u0430\u0442\u044c",imgSrc:"assets/img/fly.jpg",audioSrc:"assets/audio/fly.mp3"},{word:"hug",translation:"\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c",imgSrc:"assets/img/hug.jpg",audioSrc:"assets/audio/hug.mp3"},{word:"jump",translation:"\u043f\u0440\u044b\u0433\u0430\u0442\u044c",imgSrc:"assets/img/jump.jpg",audioSrc:"assets/audio/jump.mp3"}]},set2:{name:"Action (set B)",imgSrc:"./assets/img/open.jpg",children:[{word:"open",translation:"\u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c",imgSrc:"assets/img/open.jpg",audioSrc:"assets/audio/open.mp3"},{word:"play",translation:"\u0438\u0433\u0440\u0430\u0442\u044c",imgSrc:"assets/img/play.jpg",audioSrc:"assets/audio/play.mp3"},{word:"point",translation:"\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c",imgSrc:"assets/img/point.jpg",audioSrc:"assets/audio/point.mp3"},{word:"ride",translation:"\u0435\u0437\u0434\u0438\u0442\u044c",imgSrc:"assets/img/ride.jpg",audioSrc:"assets/audio/ride.mp3"},{word:"run",translation:"\u0431\u0435\u0433\u0430\u0442\u044c",imgSrc:"assets/img/run.jpg",audioSrc:"assets/audio/run.mp3"},{word:"sing",translation:"\u043f\u0435\u0442\u044c",imgSrc:"assets/img/sing.jpg",audioSrc:"assets/audio/sing.mp3"},{word:"skip",translation:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c",imgSrc:"assets/img/skip.jpg",audioSrc:"assets/audio/skip.mp3"},{word:"swim",translation:"\u043f\u043b\u0430\u0432\u0430\u0442\u044c",imgSrc:"assets/img/swim.jpg",audioSrc:"assets/audio/swim.mp3"}]},animal1:{name:"Animal (set A)",imgSrc:"./assets/img/cat.jpg",children:[{word:"cat",translation:"\u043a\u043e\u0442",imgSrc:"assets/img/cat.jpg",audioSrc:"assets/audio/cat.mp3"},{word:"chick",translation:"\u0446\u044b\u043f\u043b\u0451\u043d\u043e\u043a",imgSrc:"assets/img/chick.jpg",audioSrc:"assets/audio/chick.mp3"},{word:"chicken",translation:"\u043a\u0443\u0440\u0438\u0446\u0430",imgSrc:"assets/img/chicken.jpg",audioSrc:"assets/audio/chicken.mp3"},{word:"dog",translation:"\u0441\u043e\u0431\u0430\u043a\u0430",imgSrc:"assets/img/dog.jpg",audioSrc:"assets/audio/dog.mp3"},{word:"horse",translation:"\u043b\u043e\u0448\u0430\u0434\u044c",imgSrc:"assets/img/horse.jpg",audioSrc:"assets/audio/horse.mp3"},{word:"pig",translation:"\u0441\u0432\u0438\u043d\u044c\u044f",imgSrc:"assets/img/pig.jpg",audioSrc:"assets/audio/pig.mp3"},{word:"rabbit",translation:"\u043a\u0440\u043e\u043b\u0438\u043a",imgSrc:"assets/img/rabbit.jpg",audioSrc:"assets/audio/rabbit.mp3"},{word:"sheep",translation:"\u043e\u0432\u0446\u0430",imgSrc:"assets/img/sheep.jpg",audioSrc:"assets/audio/sheep.mp3"}]},animal2:{name:"Animal (set B)",imgSrc:"./assets/img/bird.jpg",children:[{word:"bird",translation:"\u043f\u0442\u0438\u0446\u0430",imgSrc:"assets/img/bird.jpg",audioSrc:"assets/audio/bird.mp3"},{word:"fish",translation:"\u0440\u044b\u0431\u0430",imgSrc:"assets/img/fish1.jpg",audioSrc:"assets/audio/fish.mp3"},{word:"frog",translation:"\u0436\u0430\u0431\u0430",imgSrc:"assets/img/frog.jpg",audioSrc:"assets/audio/frog.mp3"},{word:"giraffe",translation:"\u0436\u0438\u0440\u0430\u0444\u0430",imgSrc:"assets/img/giraffe.jpg",audioSrc:"assets/audio/giraffe.mp3"},{word:"lion",translation:"\u043b\u0435\u0432",imgSrc:"assets/img/lion.jpg",audioSrc:"assets/audio/lion.mp3"},{word:"mouse",translation:"\u043c\u044b\u0448\u044c",imgSrc:"assets/img/mouse.jpg",audioSrc:"assets/audio/mouse.mp3"},{word:"turtle",translation:"\u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0430",imgSrc:"assets/img/turtle.jpg",audioSrc:"assets/audio/turtle.mp3"},{word:"dolphin",translation:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",imgSrc:"assets/img/dolphin.jpg",audioSrc:"assets/audio/dolphin.mp3"}]},clothes:{name:"Clothes",imgSrc:"./assets/img/dress.jpg",children:[{word:"skirt",translation:"\u044e\u0431\u043a\u0430",imgSrc:"assets/img/skirt.jpg",audioSrc:"assets/audio/skirt.mp3"},{word:"pants",translation:"\u0431\u0440\u044e\u043a\u0438",imgSrc:"assets/img/pants.jpg",audioSrc:"assets/audio/pants.mp3"},{word:"blouse",translation:"\u0431\u043b\u0443\u0437\u043a\u0430",imgSrc:"assets/img/blouse.jpg",audioSrc:"assets/audio/blouse.mp3"},{word:"dress",translation:"\u043f\u043b\u0430\u0442\u044c\u0435",imgSrc:"assets/img/dress.jpg",audioSrc:"assets/audio/dress.mp3"},{word:"boot",translation:"\u0431\u043e\u0442\u0438\u043d\u043e\u043a",imgSrc:"assets/img/boot.jpg",audioSrc:"assets/audio/boot.mp3"},{word:"shirt",translation:"\u0440\u0443\u0431\u0430\u0448\u043a\u0430",imgSrc:"assets/img/shirt.jpg",audioSrc:"assets/audio/shirt.mp3"},{word:"coat",translation:"\u043f\u0430\u043b\u044c\u0442\u043e",imgSrc:"assets/img/coat.jpg",audioSrc:"assets/audio/coat.mp3"},{word:"shoe",translation:"\u0442\u0443\u0444\u043b\u0438",imgSrc:"assets/img/shoe.jpg",audioSrc:"assets/audio/shoe.mp3"}]},emotion:{name:"Emotions",imgSrc:"./assets/img/happy.jpg",children:[{word:"sad",translation:"\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439",imgSrc:"assets/img/sad.jpg",audioSrc:"assets/audio/sad.mp3"},{word:"angry",translation:"\u0441\u0435\u0440\u0434\u0438\u0442\u044b\u0439",imgSrc:"assets/img/angry.jpg",audioSrc:"assets/audio/angry.mp3"},{word:"happy",translation:"\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439",imgSrc:"assets/img/happy.jpg",audioSrc:"assets/audio/happy.mp3"},{word:"tired",translation:"\u0443\u0441\u0442\u0430\u0432\u0448\u0438\u0439",imgSrc:"assets/img/tired.jpg",audioSrc:"assets/audio/tired.mp3"},{word:"surprised",translation:"\u0443\u0434\u0438\u0432\u043b\u0451\u043d\u043d\u044b\u0439",imgSrc:"assets/img/surprised.jpg",audioSrc:"assets/audio/surprised.mp3"},{word:"scared",translation:"\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439",imgSrc:"assets/img/scared.jpg",audioSrc:"assets/audio/scared.mp3"},{word:"smile",translation:"\u0443\u043b\u044b\u0431\u043a\u0430",imgSrc:"assets/img/smile.jpg",audioSrc:"assets/audio/smile.mp3"},{word:"laugh",translation:"\u0441\u043c\u0435\u0445",imgSrc:"assets/img/laugh.jpg",audioSrc:"assets/audio/laugh.mp3"}]},food:{name:"Food",imgSrc:"./assets/img/potato.jpg",children:[{word:"pasta",translation:"\u043c\u0430\u043a\u0430\u0440\u043e\u043d\u044b",imgSrc:"assets/img/pasta.jpg",audioSrc:"assets/audio/pasta.mp3"},{word:"potato",translation:"\u043a\u0430\u0440\u0442\u043e\u0448\u043a\u0430",imgSrc:"assets/img/potato.jpg",audioSrc:"assets/audio/potato.mp3"},{word:"cutlet",translation:"\u043a\u043e\u0442\u043b\u0435\u0442\u0430",imgSrc:"assets/img/cutlet.jpg",audioSrc:"assets/audio/cutlet.mp3"},{word:"salad",translation:"\u0441\u0430\u043b\u0430\u0442",imgSrc:"assets/img/salad.jpg",audioSrc:"assets/audio/salad.mp3"},{word:"cucumber",translation:"\u043e\u0433\u0443\u0440\u0435\u0446",imgSrc:"assets/img/cucumber.jpg",audioSrc:"assets/audio/cucumber.mp3"},{word:"sausages",translation:"\u0441\u043e\u0441\u0438\u0441\u043a\u0438",imgSrc:"assets/img/sausages.jpg",audioSrc:"assets/audio/sausages.mp3"},{word:"meat",translation:"\u043c\u044f\u0441\u043e",imgSrc:"assets/img/meat.jpg",audioSrc:"assets/audio/meat.mp3"},{word:"porridge",translation:"\u043a\u0430\u0448\u0430",imgSrc:"assets/img/porridge.jpg",audioSrc:"assets/audio/porridge.mp3"}]},fruit:{name:"Fruit",imgSrc:"./assets/img/watermelon.jpg",children:[{word:"apple",translation:"\u044f\u0431\u043b\u043e\u043a\u043e",imgSrc:"assets/img/apple.jpg",audioSrc:"assets/audio/apple.mp3"},{word:"lemon",translation:"\u043b\u0435\u043c\u043e\u043d",imgSrc:"assets/img/lemon.jpg",audioSrc:"assets/audio/lemon.mp3"},{word:"banana",translation:"\u0431\u0430\u043d\u0430\u043d",imgSrc:"assets/img/banana.jpg",audioSrc:"assets/audio/banana.mp3"},{word:"watermelon",translation:"\u0430\u0440\u0431\u0443\u0437",imgSrc:"assets/img/watermelon.jpg",audioSrc:"assets/audio/watermelon.mp3"},{word:"raspberry",translation:"\u043c\u0430\u043b\u0438\u043d\u0430",imgSrc:"assets/img/raspberry.jpg",audioSrc:"assets/audio/raspberry.mp3"},{word:"orange",translation:"\u0430\u043f\u0435\u043b\u044c\u0441\u0438\u043d",imgSrc:"assets/img/orange.jpg",audioSrc:"assets/audio/orange.mp3"},{word:"strawberry",translation:"\u043a\u043b\u0443\u0431\u043d\u0438\u043a\u0430",imgSrc:"assets/img/strawberry.jpg",audioSrc:"assets/audio/strawberry.mp3"},{word:"pear",translation:"\u0433\u0440\u0443\u0448\u0430",imgSrc:"assets/img/pear.jpg",audioSrc:"assets/audio/pear.mp3"}]}},k=N;window.store=N,c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{store:k})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.6dbf2132.chunk.js.map