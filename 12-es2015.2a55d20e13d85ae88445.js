(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"HJ/b":function(t,n,o){"use strict";o.r(n),o.d(n,"Tab2PageModule",(function(){return u}));var e=o("TEn/"),i=o("ofXK"),r=o("3Pt+"),c=o("tyNb"),s=o("mrSG"),a=o("fXoL");function l(t,n){if(1&t){const t=a.Qb();a.Nb(0),a.Pb(1,"ion-card"),a.Pb(2,"ion-card-header"),a.Pb(3,"ion-card-subtitle",2),a.lc(4),a.ac(5,"date"),a.Ob(),a.Pb(6,"ion-card-title"),a.lc(7),a.Ob(),a.Ob(),a.Pb(8,"ion-card-content"),a.Pb(9,"ion-text",3),a.Pb(10,"h2",4),a.lc(11),a.Ob(),a.Pb(12,"h2",4),a.lc(13),a.Pb(14,"h3",5),a.lc(15),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(16,"ion-button",6),a.Xb("click",(function(){a.hc(t);const o=n.$implicit;return a.Zb().showAlert(o.products)})),a.lc(17," Detalles "),a.Ob(),a.Pb(18,"ion-label",7),a.lc(19),a.Ob(),a.Ob(),a.Mb()}if(2&t){const t=n.$implicit;a.zb(4),a.nc(" ",a.bc(5,6,t.orderDate,"short"),""),a.zb(3),a.nc("Orden #",t.id,""),a.zb(4),a.nc("Sucursal: ",t.branch,""),a.zb(2),a.nc("Cantidad: ",t.products.length," "),a.zb(2),a.nc("Total: $",t.orderTotal,""),a.zb(4),a.nc(" ",t.status,"")}}const b=[{path:"",component:(()=>{class t{constructor(t){this.alert=t,this.orders=[]}ionViewDidEnter(){localStorage.getItem("orders")&&(this.orders=JSON.parse(localStorage.getItem("orders")))}showAlert(t){return Object(s.a)(this,void 0,void 0,(function*(){let n="<ion-list>";for(const e of t)n+=`<ion-item">\n          <ion-grid>\n              <ion-row>\n                  <ion-col size="3">\n                      <ion-img src="${e.img}"></ion-img>\n                  </ion-col>\n                  <ion-col size="6" class="ion-text-center">\n                      <ion-text style="font-size: 15pt;">${e.name}</ion-text>\n                  </ion-col>\n                  <ion-col size="3" class="ion-text-center">\n                      <ion-text color="danger" style="font-size: 15pt;">\n                          ${e.totalPrice}\n                      </ion-text>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-item>`;n+="</ion-list>";const o=yield this.alert.create({header:"Productos",cssClass:"my-custom-class",message:n});yield o.present()}))}}return t.\u0275fac=function(n){return new(n||t)(a.Kb(e.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-tab2"]],decls:2,vars:1,consts:[[1,"animate__animated","animate__fadeIn"],[4,"ngFor","ngForOf"],[2,"float","right"],["color","dark"],[2,"font-size","15pt"],[2,"float","right","font-size","15pt"],["shape","round","fill","outline",3,"click"],["color","warning",2,"float","right","padding","10px","font-size","15pt"]],template:function(t,n){1&t&&(a.Pb(0,"ion-content",0),a.kc(1,l,20,9,"ng-container",1),a.Ob()),2&t&&(a.zb(1),a.ec("ngForOf",n.orders))},directives:[e.n,i.i,e.g,e.i,e.j,e.k,e.h,e.R,e.e,e.C],pipes:[i.d],styles:[""]}),t})()},{path:"",component:o("rq2z").a}];let d=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(b)],c.i]}),t})();var p=o("j1ZV");let u=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[e.U,i.b,r.a,d,p.a]]}),t})()}}]);