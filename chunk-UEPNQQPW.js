import{u as I}from"./chunk-RQYECNT5.js";import{A as y,F as m,G as C,K as E,L as T,Q as c,R as x,V as d,Ya as v,ba as M,ca as u,cb as R,ja as s,ka as r,la as f,ma as S,na as Q,qb as D,ta as p,ua as b,va as g,xa as l,za as h}from"./chunk-TK5UYZ3D.js";var _=["buttonElementReference"],K=(()=>{let e=class e{constructor(){this.confirmEvent=new x,this.closeTarget=""}ngOnInit(){}openModal(){this.buttonElement.nativeElement.click()}onConfirm(){console.log("Yep... lets go ahead and delete this useless piece of ****"),this.confirmEvent.emit("OK")}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-delete-modal-one"]],viewQuery:function(t,i){if(t&1&&p(_,5,c),t&2){let a;b(a=g())&&(i.buttonElement=a.first)}},inputs:{closeTarget:"closeTarget"},outputs:{confirmEvent:"confirmEvent"},decls:15,vars:2,consts:[["buttonElementReference",""],["data-bs-toggle","modal","data-bs-target","#deleteConfirmationModalOne",3,"hidden"],["id","deleteConfirmationModalOne","tabindex","-1","aria-labelledby","deleteConfirmationModalOneLabel","aria-hidden","true",1,"modal","fade","form-modal"],[1,"modal-dialog"],[1,"modal-content","text-center"],[1,"modal-body"],[1,"pt-3"],[1,"bi","bi-exclamation-triangle","text-warning","fs-1","mb-3"],[1,"modal-footer"],["data-bs-dismiss","modal","data-bs-toggle","modal",1,"btn","btn-sm","btn-danger","form-control-btn",3,"click"],["data-bs-dismiss","modal","data-bs-toggle","modal",1,"btn","btn-sm","btn-warning","form-control-btn"]],template:function(t,i){if(t&1){let a=S();s(0,"button",1,0),l(2,` Launch demo modal
`),r(),s(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),l(8,"Are you sure you want to delete this item?"),r()(),f(9,"i",7),s(10,"div",8)(11,"button",9),Q("click",function(){return E(a),T(i.onConfirm())}),l(12,"Yes"),r(),s(13,"button",10),l(14,"No"),r()()()()()}t&2&&(u("hidden",!0),d(13),M("data-bs-target",i.closeTarget))}});let o=e;return o})();var V=["buttonElementReference"],W=(()=>{let e=class e{constructor(){this.message="Action successful.",this.isShowToast=!1}ngOnInit(){}openToast(){console.log("opening connection toast"),this.isShowToast=!0;var n=setInterval(()=>{this.isShowToast=!1,clearInterval(n),console.log("closing toast...",n)},3e3)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-success-toast"]],viewQuery:function(t,i){if(t&1&&p(V,5,c),t&2){let a;b(a=g())&&(i.buttonElement=a.first)}},inputs:{message:"message"},decls:5,vars:2,consts:[[1,"position-fixed","bottom-0","end-0","p-3",2,"z-index","11"],["id","liveToast","role","alert","aria-live","assertive","aria-atomic","true",1,"toast","text-white","bg-success","border-0","connection-toast",3,"ngClass"],[1,"toast-body","p-3"],[1,"h4","bi","bi-check-circle","me-3"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),f(3,"i",3),l(4),r()()()),t&2&&(d(),u("ngClass",i.isShowToast?"show":"hide"),d(3),h(" ",i.message," "))},dependencies:[v]});let o=e;return o})();var k=["buttonElementReference"],te=(()=>{let e=class e{constructor(){this.message="Could not connect.",this.isShowToast=!1}ngOnInit(){}openToast(){console.log("opening connection toast"),this.isShowToast=!0;var n=setInterval(()=>{this.isShowToast=!1,clearInterval(n),console.log("closing toast...",n)},3e3)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m({type:e,selectors:[["app-error-toast"]],viewQuery:function(t,i){if(t&1&&p(k,5,c),t&2){let a;b(a=g())&&(i.buttonElement=a.first)}},inputs:{message:"message"},decls:5,vars:2,consts:[[1,"position-fixed","bottom-0","end-0","p-3",2,"z-index","11"],["id","liveToast","role","alert","aria-live","assertive","aria-atomic","true",1,"toast","text-white","bg-danger","border-0","connection-toast",3,"ngClass"],[1,"toast-body","p-3"],[1,"h4","bi","bi-x-circle","me-3"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),f(3,"i",3),l(4),r()()()),t&2&&(d(),u("ngClass",i.isShowToast?"show":"hide"),d(3),h(" ",i.message," "))},dependencies:[v]});let o=e;return o})();var we=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[R,D,I]});let o=e;return o})();export{W as a,te as b,K as c,we as d};
