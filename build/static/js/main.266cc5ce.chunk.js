(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(86)},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),c=a.n(i),l=a(7),s=a(42),o=a(38),m=a(9),p=a(24),u=(a(52),a(39)),d=a.n(u),b=a(3),g="SET_CURRENT_USER",h={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)({},e,{currentUser:t.payload});default:return e}},v={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},E=a(29),k=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity-1}):e})},y={hidden:!0,cartItems:[]},w=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v.TOGGLE_CART_HIDDEN:return Object(b.a)({},a,{hidden:!a.hidden});case v.ADD_ITEM:return Object(b.a)({},a,{cartItems:(e=a.cartItems,t=n.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(E.a)(e),[Object(b.a)({},t,{quantity:1})]))});case v.REMOVE_ITEM:return Object(b.a)({},a,{cartItems:k(a.cartItems,n.payload)});case v.CLEAR_ITEM_FROM_CART:return Object(b.a)({},a,{cartItems:a.cartItems.filter(function(e){return e.id!==n.payload.id})});default:return a}},O={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return(arguments.length>1?arguments[1]:void 0).type,e},j={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return(arguments.length>1?arguments[1]:void 0).type,e},C={key:"root",storage:d.a,whitelist:["cart"]},S=Object(m.c)({user:f,cart:w,directory:N,shop:U}),x=Object(p.a)(C,S);var B=Object(m.d)(x,m.a.apply(void 0,[])),T=Object(p.b)(B),I=(p.b,a(26)),P=Object(n.createContext)({hidden:!0,toggleHidden:function(){},cartItems:[],addItem:function(){},removeItem:function(){},clearItemFromCart:function(){},cartItemsCount:0,cartTotal:0}),R=function(e){var t=e.children,a=Object(n.useState)(!0),i=Object(I.a)(a,2),c=i[0],l=i[1],s=Object(n.useState)([]),o=Object(I.a)(s,2),m=o[0],p=o[1],u=Object(n.useState)(0),d=Object(I.a)(u,2),g=d[0],h=d[1],f=Object(n.useState)(0),v=Object(I.a)(f,2),k=v[0],y=v[1];return Object(n.useEffect)(function(){h(function(e){return e.reduce(function(e,t){return e+t.quantity},0)}(m)),y(function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}(m))},[m]),r.a.createElement(P.Provider,{value:{hidden:c,toggleHidden:function(){return l(!c)},cartItems:m,addItem:function(e){return p(function(e,t){return e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(E.a)(e),[Object(b.a)({},t,{quantity:1})])}(m,e))},removeItem:function(e){return p(function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e.filter(function(e){return e.id!==t.id}):e.map(function(e){return e.id===t.id?Object(b.a)({},e,{quantity:e.quantity-1}):e})}(m,e))},clearItemFromCart:function(e){return p(function(e,t){return e.filter(function(e){return e.id!==t.id})}(m,e))},cartItemsCount:g,cartTotal:k}},t)},M=(a(55),a(6)),A=a.n(M),W=a(12),J=a(17),D=a(18),q=a(20),G=a(19),H=a(21),L=a(14),V=(a(57),a(13)),F=(a(58),Object(L.f)(function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),_=[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}],z=Object(n.createContext)(_),Y=(a(64),function(){var e=Object(n.useContext)(z);return r.a.createElement("div",{className:"directory-menu"},e.map(function(e){var t=e.id,a=Object(V.a)(e,["id"]);return r.a.createElement(F,Object.assign({key:t},a))}))}),Q=(a(65),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Y,null))}),K=(a(66),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,i=Object(V.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},i),t)}),X=(a(67),function(e){var t=e.item,a=t.name,i=t.price,c=t.imageUrl,l=Object(n.useContext)(P).addItem;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},i)),r.a.createElement(K,{onClick:function(){return l(t)},inverted:!0},"Add to cart"))}),Z=(a(68),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(X,{key:e.id,item:e})})))}),$={hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}},ee=Object(n.createContext)($),te=(a(69),function(){var e=Object(n.useContext)(ee),t=Object.keys(e).map(function(t){return e[t]});return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,a=Object(V.a)(e,["id"]);return r.a.createElement(Z,Object.assign({key:t},a))}))}),ae=(a(70),function(e){var t=e.match,a=Object(n.useContext)(ee)[t.params.collectionId],i=a.title,c=a.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},i),r.a.createElement("div",{className:"items"},c.map(function(e){return r.a.createElement(X,{key:e.id,item:e})})))}),ne=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(L.b,{exact:!0,path:"".concat(t.path),component:te}),r.a.createElement(L.b,{path:"".concat(t.path,"/:collectionId"),component:ae}))},re=a(16),ie=(a(71),function(e){var t=e.handleChange,a=e.label,n=Object(V.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),ce=a(22),le=a.n(ce);a(72),a(75);le.a.initializeApp({apiKey:"AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",authDomain:"crwn-db.firebaseapp.com",databaseURL:"https://crwn-db.firebaseio.com",projectId:"crwn-db",storageBucket:"crwn-db.appspot.com",messagingSenderId:"850995411664",appId:"1:850995411664:web:7ddc01d597846f65"});var se=function(){var e=Object(W.a)(A.a.mark(function e(t,a){var n,r,i,c;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=me.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(b.a)({displayName:r,email:i,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,a){return e.apply(this,arguments)}}(),oe=le.a.auth(),me=le.a.firestore(),pe=new le.a.auth.GoogleAuthProvider;pe.setCustomParameters({prompt:"select_account"});var ue=function(){return oe.signInWithPopup(pe)},de=(le.a,a(77),function(e){function t(e){var a;return Object(J.a)(this,t),(a=Object(q.a)(this,Object(G.a)(t).call(this,e))).handleSubmit=function(){var e=Object(W.a)(A.a.mark(function e(t){var n,r,i;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,i=n.password,e.prev=2,e.next=5,oe.signInWithEmailAndPassword(r,i);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(re.a)({},r,n))},a.state={email:"",password:""},a}return Object(H.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ie,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(ie,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(K,{type:"submit"}," Sign in "),r.a.createElement(K,{onClick:ue,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(r.a.Component)),be=(a(78),function(e){function t(){var e;return Object(J.a)(this,t),(e=Object(q.a)(this,Object(G.a)(t).call(this))).handleSubmit=function(){var t=Object(W.a)(A.a.mark(function t(a){var n,r,i,c,l,s,o;return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,i=n.email,c=n.password,l=n.confirmPassword,c===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,oe.createUserWithEmailAndPassword(i,c);case 8:return s=t.sent,o=s.user,t.next=12,se(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}},t,null,[[5,15]])}));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(re.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(H.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(ie,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(ie,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(ie,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(ie,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(K,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),ge=(a(79),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(de,null),r.a.createElement(be,null))}),he=(a(80),function(e){var t=e.cartItem,a=t.name,i=t.imageUrl,c=t.price,l=t.quantity,s=Object(n.useContext)(P),o=s.addItem,m=s.removeItem,p=s.clearItemFromCart;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:"item"})),r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return m(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return o(t)}},"\u276f")),r.a.createElement("span",{className:"price"},c),r.a.createElement("div",{className:"remove-button",onClick:function(){return p(t)}},"\u2715"))}),fe=a(41),ve=a.n(fe),Ee=function(e){var t=e.price,a=100*t;return r.a.createElement(ve.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_WBqax2FWVzS9QlpJScO07iuL"})},ke=(a(81),function(){var e=Object(n.useContext)(P),t=e.cartItems,a=e.cartTotal;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(he,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: $",a),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(Ee,{price:a}))});function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Oe=r.a.createElement("g",null),Ne=r.a.createElement("g",null),je=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Se=r.a.createElement("g",null),xe=r.a.createElement("g",null),Be=r.a.createElement("g",null),Te=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Re=r.a.createElement("g",null),Me=r.a.createElement("g",null),Ae=r.a.createElement("g",null),We=r.a.createElement("g",null),Je=function(e){var t=e.svgRef,a=we(e,["svgRef"]);return r.a.createElement("svg",ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Oe,Ne,je,Ue,Ce,Se,xe,Be,Te,Ie,Pe,Re,Me,Ae,We)},De=r.a.forwardRef(function(e,t){return r.a.createElement(Je,ye({svgRef:t},e))}),qe=(a.p,a(82),function(e){e.itemCount;var t=Object(n.useContext)(P),a=t.toggleHidden,i=t.cartItemsCount;return r.a.createElement("div",{className:"cart-icon",onClick:a},r.a.createElement(De,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},i))}),Ge=(a(83),function(e){var t=e.item,a=t.imageUrl,n=t.price,i=t.name,c=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"price"},c," x $",n)))}),He=(a(84),Object(L.f)(function(e){var t=e.history,a=Object(n.useContext)(P),i=a.cartItems,c=a.toggleHidden;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},i.length?i.map(function(e){return r.a.createElement(Ge,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(K,{onClick:function(){t.push("/checkout"),c()}},"GO TO CHECKOUT"))})),Le=Object(n.createContext)(void 0);function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _e=r.a.createElement("title",null,"Group"),ze=r.a.createElement("desc",null,"Created with Sketch."),Ye=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Qe=function(e){var t=e.svgRef,a=Fe(e,["svgRef"]);return r.a.createElement("svg",Ve({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),_e,ze,Ye)},Ke=r.a.forwardRef(function(e,t){return r.a.createElement(Qe,Ve({svgRef:t},e))}),Xe=(a.p,a(85),function(){var e=Object(n.useContext)(Le),t=Object(n.useContext)(P).hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(Ke,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),e?r.a.createElement("div",{className:"option",onClick:function(){return oe.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(qe,null)),t?null:r.a.createElement(He,null))}),Ze=function(e){function t(){var e;return Object(J.a)(this,t),(e=Object(q.a)(this,Object(G.a)(t).call(this))).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(H.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=oe.onAuthStateChanged(function(){var t=Object(W.a)(A.a.mark(function t(a){return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,se(a);case 3:t.sent.onSnapshot(function(t){e.setState({currentUser:Object(b.a)({id:t.id},t.data())})});case 5:e.setState({currentUser:a});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Le.Provider,{value:this.state.currentUser},r.a.createElement(Xe,null)),r.a.createElement(L.d,null,r.a.createElement(L.b,{exact:!0,path:"/",component:Q}),r.a.createElement(L.b,{path:"/shop",component:ne}),r.a.createElement(L.b,{exact:!0,path:"/checkout",component:ke}),r.a.createElement(L.b,{exact:!0,path:"/signin",render:function(){return e.state.currentUser?r.a.createElement(L.a,{to:"/"}):r.a.createElement(ge,null)}})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(R,null,r.a.createElement(s.a,{store:B},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:T},r.a.createElement(Ze,null))))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.266cc5ce.chunk.js.map