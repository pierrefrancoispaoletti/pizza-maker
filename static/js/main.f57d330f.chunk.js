(this["webpackJsonppizza-maker"]=this["webpackJsonppizza-maker"]||[]).push([[0],{28:function(e,n,i){},37:function(e,n,i){"use strict";i.r(n);var t,a,c,r,s,o,l,b,d,p,j,u,m,x,g,O,f,v,h,y,k,z,w,C,P,S,q,N,B=i(0),J=i(20),T=i.n(J),A=(i(28),i(5)),F=i(6),I=[{name:"M\xe9lange Emmental Mozzarella",image:i.p+"static/media/cheese.ce072201.png",visible:!0,price:0}],E=[{name:"Sauce BBQ",image:i.p+"static/media/bbq-sauce.fd2e20c9.png",visible:!1,price:0},{name:"Sauce Tomate",image:i.p+"static/media/tomato-sauce.fb6cfa52.png",visible:!0,price:0},{name:"Sauce Piquante",image:i.p+"static/media/salsa-sauce.99790bb9.png",visible:!1,price:0},{name:"Huile d'olives",image:i.p+"static/media/oliveoil.24d76d78.png",visible:!1,price:0},{name:"Sauce Pesto",image:i.p+"static/media/pesto-sauce.6bfdd123.png",visible:!1,price:0}],M=[{name:"Anchois",image:i.p+"static/media/anchovies.a0da8fc3.png",visible:!1,price:1.5},{name:"Roquette",image:i.p+"static/media/arugula-leaves-shutterstock_1517311190-1.30a15f32.png",visible:!1,price:1.5},{name:"Bacon",image:i.p+"static/media/bacon-strips.659cdc48.png",visible:!1,price:1.5},{name:"Olives Noires",image:i.p+"static/media/black-olives.338d196e.png",visible:!1,price:1.5},{name:"Brocolis",image:i.p+"static/media/broccoli.6e4ec43e.png",visible:!1,price:1.5},{name:"Tomates Cerises",image:i.p+"static/media/cherry-tomatoes-1.d8bcd767.png",visible:!1,price:1.5},{name:"Poulet",image:i.p+"static/media/chicken.6dbdb18b.png",visible:!1,price:1.5},{name:"Coriandre",image:i.p+"static/media/cilantro.16119b2e.png",visible:!1,price:1.5},{name:"Comcombre",image:i.p+"static/media/cucumber.37fa1654.png",visible:!1,price:1.5},{name:"Olives Vertes",image:i.p+"static/media/green-olives.93d0d409.png",visible:!1,price:1.5},{name:"Poivrons Verts",image:i.p+"static/media/green-peppers.79c3238b.png",visible:!1,price:1.5},{name:"Jambon",image:i.p+"static/media/ham.7e67d589.png",visible:!1,price:1.5},{name:"Jalapeno",image:i.p+"static/media/jalapeno-peppers.f7e483fa.png",visible:!1,price:1.5},{name:"Ail \xc9minc\xe9",image:i.p+"static/media/minced-garlic.e63931f6.png",visible:!1,price:1.5},{name:"Boulettes de Viande",image:i.p+"static/media/mini-meatballs.b2c9ee01.png",visible:!1,price:1.5},{name:"Champignons",image:i.p+"static/media/mushrooms.48724d5c.png",visible:!1,price:1.5},{name:"Oignons",image:i.p+"static/media/onions.8664ad3e.png",visible:!1,price:1.5},{name:"Parmesan",image:i.p+"static/media/parmesan-cheese.950da06d.png",visible:!1,price:1.5},{name:"Pepperoni",image:i.p+"static/media/pepperoni.2aaf927d.png",visible:!1,price:1.5},{name:"Poivrons Rouges",image:i.p+"static/media/red-peppers.a1066423.png",visible:!1,price:1.5},{name:"Saucisse Piquante",image:i.p+"static/media/sausage-basic-1.871b5010.png",visible:!1,price:1.5},{name:"Crevettes",image:i.p+"static/media/shrimp.e9daee13.png",visible:!1,price:1.5},{name:"Basilic",image:i.p+"static/media/basilic.fff0b888.png",visible:!1,price:1.5},{name:"Tomates",image:i.p+"static/media/tomatoes.45aed0df.png",visible:!1,price:1.5}].sort((function(e,n){return n.name>e.name?-1:1})),R=i(8),V=i(7),Q=i(3),H=i(2),_=H.b.button(t||(t=Object(Q.a)(["\n  background-color: lightgreen;\n  border: 3px solid green;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  width: 75%;\n  margin: 0 auto;\n  transition: all 0.3s ease-in-out;\n  :active {\n    background-color: green;\n    border: 3px solid lightgreen;\n    color: white;\n  }\n"]))),D=i(1),G=function(e){var n=e.handleAddToCart;return Object(D.jsxs)(_,{type:"button",onClick:function(){return n()},children:[Object(D.jsx)(V.a,{icon:R.a,size:"2x"}),Object(D.jsx)("span",{children:"Ajouter Ma Pizza au panier"})]})},K=i(11),L=H.b.div(a||(a=Object(Q.a)(["\n  position: absolute;\n  border: 1px solid black;\n  background: white;\n  padding: 1.5em;\n  z-index: 600;\n  width: 100%;\n  top: 61px;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),U=H.b.div(c||(c=Object(Q.a)(['\n  align-self: center;\n  width: 100%;\n  .cart-ingredients {\n    text-align: right !important;\n    display: inline-block;\n    ::after {\n      content: ", ";\n    }\n  }\n']))),W=H.b.div(r||(r=Object(Q.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  .cart-title {\n    margin: 0;\n  }\n"]))),X=H.b.div(s||(s=Object(Q.a)(["\n  margin: 12px 8px 8px 8px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  .cart-total {\n    border-bottom: 1px solid black;\n    display: inline-block;\n  }\n"]))),Y=Object(H.b)(K.b)(o||(o=Object(Q.a)(["\n  border-bottom: 1px solid black;\n  background-color: black;\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 12px;\n  :active {\n    background-color: white;\n    color: black;\n    border-bottom: 1px solid white;\n  }\n"]))),Z=function(e){var n=e.open,i=e.cart,t=e.updateQuantity;return n?Object(D.jsxs)(L,{children:[i.map((function(e){var n=e.title,i=e.ingredients,a=e.price,c=e.quantity;return Object(D.jsxs)(U,{children:[Object(D.jsxs)(W,{children:[Object(D.jsx)("h3",{className:"cart-title",children:n}),Object(D.jsxs)("span",{className:"cart-quantity",children:[" ",Object(D.jsx)(V.a,{icon:R.b,color:"purple",onClick:function(){return t(e,"minus")}})," ",c," ",Object(D.jsx)(V.a,{color:"green",icon:R.c,onClick:function(){return t(e,"plus")}})]}),Object(D.jsxs)("span",{className:"cart-price",children:[a.toFixed(2),Object(D.jsx)("small",{children:"\u20ac"})]}),Object(D.jsx)(V.a,{color:"red",icon:R.f,onClick:function(){return t(e,"delete")}})]}),i.map((function(e){return Object(D.jsx)("span",{className:"cart-ingredients",children:e.name},e.name)}))]},n)})),i.length>0?Object(D.jsxs)(X,{children:[Object(D.jsxs)("span",{className:"cart-total",children:["Total :"," ",i.reduce((function(e,n){return e+n.price*n.quantity}),0).toFixed(2),Object(D.jsx)("small",{children:"\u20ac"})]}),Object(D.jsx)(Y,{to:"/paiement",children:Object(D.jsx)("span",{children:"Payer !"})})]}):Object(D.jsx)("span",{children:"Votre Panier est vide"})]}):Object(D.jsx)(D.Fragment,{})},$=H.b.div(d||(d=Object(Q.a)(["\n  ","\n  background-color: yellow;\n  text-align: center;\n  border: 3px solid orange;\n  border-radius: 50px;\n  padding: 10px;\n  font-size: 1.5em;\n  & .ingredients-count {\n    font-size: 0.6em;\n    display: block;\n  }\n"])),(function(e){return e.open?Object(H.a)(b||(b=Object(Q.a)(["\n    position: fixed;\n    top: 61px;\n    left: 4px;\n    z-index: 500;\n  "]))):Object(H.a)(l||(l=Object(Q.a)(["\n      position: fixed;\n      top: 61px;\n      left: 4px;\n      z-index: 500;\n    "])))})),ee=function(e){var n=e.price,i=e.open,t=e.setOpen,a=e.children;return Object(D.jsxs)($,{open:i,setOpen:t,onClick:function(){return t(!i)},children:[Object(D.jsxs)("span",{children:[null===n||void 0===n?void 0:n.toFixed(2)," ",Object(D.jsx)("small",{children:"\u20ac"})]}),a]})},ne=H.b.div(u||(u=Object(Q.a)(["\n  background-color: transparent;\n  flex-direction: column;\n  position: fixed;\n  display: flex;\n  top: 61px;\n  right: 0;\n  justify-content: center;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  margin: auto 0;\n  z-index: 500;\n  ","\n"])),(function(e){return e.open?Object(H.a)(p||(p=Object(Q.a)(["\n      display: unset;\n    "]))):Object(H.a)(j||(j=Object(Q.a)(["\n    display: none;\n  "])))})),ie=H.b.div(m||(m=Object(Q.a)(["\n  align-items: flex-end;\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  padding: 6px;\n  border-radius: 50px;\n  margin-bottom: 3px;\n  background-color: white;\n  :not(last-child) {\n    margin-right: 6px;\n  }\n"]))),te=H.b.button(x||(x=Object(Q.a)(["\n  align-items: center;\n  text-align: center;\n  background: white;\n  outline: none;\n  border: 1px solid black;\n  border-radius: 50px;\n  font-size: 0.5em;\n  color: red;\n  text-align: center;\n  margin-left: 5px;\n"]))),ae=function(e){var n=e.currentPizza,i=e.handleRemoveIngredient,t=e.price,a=Object(B.useState)(!1),c=Object(F.a)(a,2),r=c[0],s=c[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{open:r,children:n.map((function(e,n){return Object(D.jsxs)(ie,{children:[Object(D.jsx)("span",{children:e.name}),Object(D.jsx)(te,{onClick:function(){return i(e,n)},children:Object(D.jsx)(V.a,{icon:R.e,size:"2x"})})]},e.name)}))}),n.length>0&&Object(D.jsx)(ee,{price:t,open:r,setOpen:s,children:Object(D.jsxs)("span",{className:"ingredients-count",children:[n.length," Ingr\xe9dient"]})})]})},ce=H.b.header(g||(g=Object(Q.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-bottom: 1px solid black;\n  font-size: 12px;\n"]))),re=H.b.div(O||(O=Object(Q.a)(["\n  display: flex;\n  justify-content: space-around;\n"]))),se=Object(H.b)(K.b)(f||(f=Object(Q.a)(["\n  color: black;\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 50px;\n  :active {\n    background: black;\n    color: white;\n  }\n"]))),oe=H.b.div(v||(v=Object(Q.a)(["\n  color: black;\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 50px;\n  :active {\n    background: black;\n    color: white;\n  }\n"]))),le=function(e){var n=e.setOpen,i=e.open,t=e.cart;return Object(D.jsxs)(ce,{children:[Object(D.jsx)("div",{children:Object(D.jsx)("h1",{children:"Pizza Creator"})}),Object(D.jsx)("div",{children:Object(D.jsxs)(re,{children:[Object(D.jsx)(se,{to:"/user",children:Object(D.jsx)(V.a,{icon:R.g,size:"2x"})}),Object(D.jsxs)(oe,{onClick:function(){return n(!i)},children:[Object(D.jsx)(V.a,{icon:R.d,size:"2x"}),Object(D.jsx)("span",{children:t.reduce((function(e,n){return e+n.quantity}),0)})]})]})})]})},be=H.b.div(y||(y=Object(Q.a)(["\n  display: flex;\n  padding: 8px 0px;\n  overflow-x: auto;\n  flex-direction: column;\n"]))),de=H.b.ul(k||(k=Object(Q.a)(["\n  padding: 0px 8px;\n  display: flex;\n  align-items: flex-start;\n  list-style: none;\n  margin: 0 0;\n"]))),pe=H.b.li(z||(z=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  border-radius: 12px;\n  padding: 6px;\n  transition: all 0.5s;\n"]))),je=H.b.button(w||(w=Object(Q.a)(["\n  width: 100%;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  word-break: break-word;\n  ","\n  img {\n    width: 60px;\n    height: 60px;\n  }\n"])),(function(e){if(e.selected)return Object(H.a)(h||(h=Object(Q.a)(["\n      background-color: black;\n      color: white;\n    "])))})),ue=function(e){var n=e.array,i=e.func;return Object(D.jsx)(be,{children:Object(D.jsx)(de,{children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(D.jsx)(pe,{children:Object(D.jsxs)(je,{type:"button",selected:n[t].visible,onClick:function(){return i(t)},children:[Object(D.jsx)("img",{src:e.image,alt:e.name}),Object(D.jsx)("span",{children:e.name})]})},e.name)}))})})},me=i(9),xe=[{name:"Normale",image:i.p+"static/media/pizza-crust.64d288c8.png",visible:!0}],ge=H.b.img(S||(S=Object(Q.a)(["\n  ","\n  position: absolute;\n  max-width: 280px;\n  z-index: ",";\n"])),(function(e){return e.visible?Object(H.a)(C||(C=Object(Q.a)(["\n      visibility: visible;\n    "]))):Object(H.a)(P||(P=Object(Q.a)(["\n    visibility: hidden;\n  "])))}),(function(e){return e.cheese?e.index+10:e.topping?e.index+21:e.index})),Oe=function(e){var n=e.visible,i=e.image,t=e.name,a=e.index,c=e.cheese,r=e.topping;return Object(D.jsx)(ge,{visible:n,src:i,alt:t,index:a,cheese:c,topping:r})},fe=H.b.div(q||(q=Object(Q.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 300px;\n"]))),ve=function(e){var n=e.sauces,i=e.toppings,t=e.cheeses;return Object(D.jsxs)(fe,{children:[null===xe||void 0===xe?void 0:xe.map((function(e,n){return Object(D.jsx)(Oe,Object(me.a)(Object(me.a)({},e),{},{index:n}),e.name)})),null===t||void 0===t?void 0:t.map((function(e,n){return Object(D.jsx)(Oe,Object(me.a)(Object(me.a)({},e),{},{index:n,cheese:!0}),e.name)})),null===n||void 0===n?void 0:n.map((function(e,n){return Object(D.jsx)(Oe,Object(me.a)(Object(me.a)({},e),{},{index:n}),e.name)})),null===i||void 0===i?void 0:i.map((function(e,n){return Object(D.jsx)(Oe,Object(me.a)(Object(me.a)({},e),{},{index:n,topping:!0}),e.name)}))]})},he=H.b.div(N||(N=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),ye=function(){var e=Object(B.useState)([]),n=Object(F.a)(e,2),i=n[0],t=n[1],a=Object(B.useState)([]),c=Object(F.a)(a,2),r=c[0],s=c[1],o=Object(B.useState)([]),l=Object(F.a)(o,2),b=l[0],d=l[1],p=Object(B.useState)([]),j=Object(F.a)(p,2),u=j[0],m=j[1],x=Object(B.useState)(!1),g=Object(F.a)(x,2),O=g[0],f=g[1],v=Object(B.useState)([]),h=Object(F.a)(v,2),y=h[0],k=h[1];Object(B.useEffect)((function(){t(Object(A.a)(E)),s(Object(A.a)(M)),d(Object(A.a)(I))}),[]),Object(B.useEffect)((function(){m([].concat(Object(A.a)(i),Object(A.a)(r),Object(A.a)(b)).flat().filter((function(e){return e.visible})))}),[i,r,b]);var z=u.reduce((function(e,n){return e+n.price}),9),w=function(e){var n=Object(A.a)(i);n.map((function(e){return e.visible=!1})),n[e].visible=!i[e].visible,t(Object(A.a)(n))},C=function(e){var n=Object(A.a)(r);n[e].visible=!r[e].visible,s(Object(A.a)(n))},P=function(e){var n=Object(A.a)(b);n[e].visible=!b[e].visible,d(Object(A.a)(n))};return Object(D.jsxs)(he,{children:[Object(D.jsx)(le,{setOpen:f,open:O,cart:y}),Object(D.jsx)(Z,{open:O,cart:y,updateQuantity:function(e,n){var i=Object(A.a)(y),t=y.indexOf(e);"minus"===n&&(-1!==t&&(i[t].quantity-=1),0===i[t].quantity&&i.splice(t,1)),"plus"===n&&-1!==t&&(i[t].quantity+=1),"delete"===n&&i.splice(t,1),k(Object(A.a)(i))}}),Object(D.jsx)(ve,{sauces:i,toppings:r,cheeses:b}),u.length>0&&Object(D.jsx)(G,{handleAddToCart:function(){var e={title:"Ma pizza #".concat(y.length+1),ingredients:u.map((function(e){return e})),price:z,quantity:1},n=y.findIndex((function(n){return JSON.stringify(n.ingredients)===JSON.stringify(e.ingredients)}));if(-1!==n){var i=Object(A.a)(y);i[n].quantity+=1,k(Object(A.a)(i))}else k([].concat(Object(A.a)(y),[e]))}}),Object(D.jsx)(ae,{currentPizza:u,handleRemoveIngredient:function(e){var n=u.indexOf(e),t=r.indexOf(e),a=i.indexOf(e),c=b.indexOf(e);-1!==t&&C(t),-1!==c&&P(c),-1!==a&&w(a);var s=Object(A.a)(u);s.splice(n,1),m(s)},price:z}),Object(D.jsx)(ue,{array:i,func:w}),Object(D.jsx)(ue,{array:b,func:P}),Object(D.jsx)(ue,{array:r,func:C})]})};T.a.render(Object(D.jsx)(K.a,{basename:"/",children:Object(D.jsx)(ye,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.f57d330f.chunk.js.map