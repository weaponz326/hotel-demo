import{d as De}from"./chunk-FBWHH6JU.js";import{a as Te}from"./chunk-JRFFUKYU.js";import{d as ce,f as ue}from"./chunk-3YZCXAA4.js";import{b as j,c as G,e as we}from"./chunk-3OLZPOF4.js";import{a as fe,b as ye,d as ge,e as R,f as ve,g as be,j as Y,l as he,m as xe,o as Se,p as Ce,t as Ee,u as _e,v as Me}from"./chunk-RQYECNT5.js";import{b as Pe,c as ke}from"./chunk-IMD2KKFX.js";import{A as T,F as c,G as B,Ha as re,Ia as N,K as b,L as h,La as L,Na as V,Q as $,R as ae,V as m,W as x,Ya as le,aa as F,bb as H,ca as s,cb as me,fa as A,ga as S,ha as C,ia as E,ja as t,ka as n,kb as de,la as r,lb as se,ma as _,mb as pe,na as g,nb as v,oa as I,qb as q,ta as M,ua as w,va as P,xa as a,ya as u,za as oe}from"./chunk-TK5UYZ3D.js";var Ye=()=>({name:"Hotel Settings",link:"#/home/admin/settings"}),je=e=>[e],Be=e=>({active:e}),Ae=(()=>{let i=class i{constructor(){this.activeTab="settings"}setActiveTab(d){this.activeTab=d}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-settings"]],decls:11,vars:11,consts:[[3,"pageTitle","navItems"],[1,"row","mb-4"],[1,"col-md-5"],[1,"nav","nav-pills","nav-fill"],[1,"nav-item"],["aria-current","page","routerLink","all-settings",1,"nav-link",3,"click","ngClass"],["routerLink","billings",1,"nav-link",3,"click","ngClass"]],template:function(o,l){o&1&&(r(0,"app-topnav",0),t(1,"div",1)(2,"div",2)(3,"ul",3)(4,"li",4)(5,"a",5),g("click",function(){return l.setActiveTab("settings")}),a(6,"Settings"),n()(),t(7,"li",4)(8,"a",6),g("click",function(){return l.setActiveTab("billings")}),a(9,"Billings"),n()()()()(),r(10,"router-outlet")),o&2&&(s("pageTitle","Settings")("navItems",N(5,je,re(4,Ye))),m(5),s("ngClass",N(7,Be,l.activeTab==="settings")),m(3),s("ngClass",N(9,Be,l.activeTab==="billings")))},dependencies:[le,se,v,Pe]});let e=i;return e})();var Q=(()=>{let i=class i{constructor(d){this.formBuilder=d,this.paymentMethodForm=new ve({}),this.isDisabled=!1}ngOnInit(){this.initializeFormData()}initializeFormData(){this.paymentMethodForm=this.formBuilder.group({id:[{value:"",disabled:!0}],created_at:[{value:"",disabled:!0}],updated_at:[{value:"",disabled:!0}],deleted_at:[{value:"",disabled:!0}],restaurant:[{value:"",disabled:!0}],name:[""],description:[""],card_type:[""],is_default:[""],payment_type:[""]})}};i.\u0275fac=function(o){return new(o||i)(x(Ee))},i.\u0275cmp=c({type:i,selectors:[["app-payment-method-form"]],decls:25,vars:1,consts:[[1,"module-form-control","mb-3",3,"formGroup"],[1,"row","mb-1"],[1,"col-md-4"],["for","name",1,"float-md-end","float-sm-start","col-form-label"],[1,"col-md-8"],["type","text","id","name","formControlName","name",1,"form-control"],["for","card_type",1,"float-md-end","float-sm-start","col-form-label"],["type","text","id","card_type","formControlName","card_type",1,"form-control"],[1,"form-check","mb-1","d-flex"],["for","is_default",1,"form-check-label"],["type","checkbox","id","is_default","formControlName","is_default",1,"form-check-input"],["for","payment_type",1,"float-md-end","float-sm-start","col-form-label"],["type","text","id","payment_type","formControlName","payment_type",1,"form-control"]],template:function(o,l){o&1&&(t(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),a(4,"Name"),n()(),t(5,"div",4),r(6,"input",5),n()(),t(7,"div",1)(8,"div",2)(9,"label",6),a(10,"Card Type"),n()(),t(11,"div",4),r(12,"input",7),n()(),t(13,"div",8)(14,"div",2)(15,"label",9),a(16,"Set as Default"),n()(),t(17,"div",4),r(18,"input",10),n()(),t(19,"div",1)(20,"div",2)(21,"label",11),a(22,"Payment Type"),n()(),t(23,"div",4),r(24,"input",12),n()()()),o&2&&s("formGroup",l.paymentMethodForm)},dependencies:[Y,ye,fe,ge,R,he,xe]});let e=i;return e})();var Ue=["newPaymentMethodButtonElementReference"],Oe=["dismissPaymentMethodButtonElementReference"],k=(()=>{let i=class i{constructor(d){this.router=d,this.onPaymentMethodCreation=new ae}openModal(){this.newButton.nativeElement.click()}closeModal(){this.dismissButton.nativeElement.click()}handleCancelForm(){this.router.navigate(["/home/hall/housekeeping/paymentMethods"])}getPaymentFormData(){return this.paymentMethodForm.paymentMethodForm.value}};i.\u0275fac=function(o){return new(o||i)(x(pe))},i.\u0275cmp=c({type:i,selectors:[["app-create-payment-method"]],viewQuery:function(o,l){if(o&1&&(M(Q,5),M(Ue,5,$),M(Oe,5,$)),o&2){let f;w(f=P())&&(l.paymentMethodForm=f.first),w(f=P())&&(l.newButton=f.first),w(f=P())&&(l.dismissButton=f.first)}},outputs:{onPaymentMethodCreation:"onPaymentMethodCreation"},decls:18,vars:0,consts:[["newPaymentMethodButtonElementReference",""],["dismissPaymentMethodButtonElementReference",""],["hidden","true","data-bs-toggle","modal","data-bs-target","#newPaymentMethodModal"],["id","newPaymentMethodModal","tabindex","-1","aria-labelledby","newPaymentMethodLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","newPaymentMethodLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-sm","btn-warning","form-control-btn"],["type","button","data-bs-dismiss","modal",1,"btn","btn-sm","btn-success","form-control-btn"]],template:function(o,l){o&1&&(t(0,"button",2,0),a(2,` Launch demo modal
`),n(),t(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h5",7),a(8," Add New Payment Method "),n(),r(9,"button",8,1),n(),t(11,"div",9),r(12,"app-payment-method-form"),n(),t(13,"div",10)(14,"button",11),a(15," Cancel "),n(),t(16,"button",12),a(17," Save "),n()()()()())},dependencies:[Q]});let e=i;return e})();var J=function(e){return e.Monthly="Monthly",e.Yearly="Yearly",e}(J||{}),X=function(e){return e.Free="Free",e.Premium="Premium",e.Custom="Custom",e}(X||{}),Z=function(e){return e.Pending="Pending",e.Paid="Paid",e}(Z||{}),U=[{restaurant:"Good Eats Diner",subscription_pricing_plan:{name:X.Premium,description:"Ideal for growing restaurants needing advanced features.",price:0,number_of_users:10},billing_id:"B1001",date:new Date("2022-05-10"),next_payment_due_date:new Date("2022-06-10"),payment_status:Z.Pending,billing_cycle:J.Monthly},{restaurant:"Tasty Treats Cafe",subscription_pricing_plan:{price:0,name:X.Custom,description:"Tailored for large restaurants with specific requirements.",number_of_users:2},billing_id:"B2002",date:new Date("2022-05-10"),next_payment_due_date:new Date("2023-05-10"),payment_status:Z.Paid,billing_cycle:J.Yearly}];function qe(e,i){e&1&&(t(0,"a",6),a(1," See All "),r(2,"i",7),n()),e&2&&s("routerLink","/home/admin/settings/billings/billings-history")}function Je(e,i){if(e&1&&(t(0,"th"),r(1,"app-table-sorting",8),n()),e&2){let p=i.$implicit;m(),s("columnTitle",p)}}function Xe(e,i){if(e&1){let p=_();t(0,"tr",9),g("click",function(){let o=b(p).$implicit,l=I();return h(l.viewBillingDetails(o.billing_id))}),t(1,"td"),a(2),n(),t(3,"td"),a(4),n(),t(5,"td"),a(6),L(7,"date"),n(),t(8,"td"),a(9),n(),t(10,"td")(11,"span",10),a(12),n()()()}if(e&2){let p=i.$implicit;m(2),u(p.billing_id),m(2),u(p.subscription_pricing_plan==null?null:p.subscription_pricing_plan.name),m(2),u(V(7,5,p.date,"dd-MM-YYYY")),m(3),u(p.subscription_pricing_plan==null?null:p.subscription_pricing_plan.price),m(3),u(p.payment_status)}}function Ze(e,i){e&1&&(t(0,"tr")(1,"td",11),a(2,"No Billings found."),n()())}var O=(()=>{let i=class i{constructor(){this.billingHeaders=["Billing ID","Subscription Plan","Date","Amount","Status"],this.billings=U,this.displaySeeAllButton=!0}viewBillingDetails(d){}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-billing-history"]],inputs:{displaySeeAllButton:"displaySeeAllButton"},decls:17,vars:3,consts:[[1,"card","mb-4"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-hover","table-bordered"],[3,"totalItems"],[3,"routerLink"],[1,"bi","bi-box-arrow-up-right"],[3,"columnTitle"],[3,"click"],[1,"badge","bg-success"],["colspan","5"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"div",1)(2,"span"),a(3," Billing History "),n(),F(4,qe,3,1,"a"),n(),t(5,"div",2)(6,"div",3)(7,"table",4)(8,"thead")(9,"tr"),C(10,Je,2,1,"th",null,S),n()(),t(12,"tbody"),C(13,Xe,13,8,"tr",null,S,!1,Ze,3,0,"tr"),n()()(),r(16,"app-table-pagination",5),n()()),o&2&&(m(4),A(4,l.displaySeeAllButton?4:-1),m(6),E(l.billingHeaders),m(3),E(l.billings),m(3),s("totalItems",l.billings.length))},dependencies:[v,j,G,H]});let e=i;return e})();var Ne=(()=>{let i=class i{constructor(){this.cardTitle="Card Title",this.cardValue="Card Value",this.cardAction="Card Action",this.cardActionIcon="Card Action Icon",this.cardLink=""}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-billing-card"]],inputs:{cardTitle:"cardTitle",cardValue:"cardValue",cardAction:"cardAction",cardActionIcon:"cardActionIcon",cardLink:"cardLink"},decls:9,vars:4,consts:[[1,"card","h-100","border-start-lg","border-start-primary"],[1,"card-body"],[1,"small","text-muted"],[1,"h3"],[1,"text-arrow-icon","small",3,"routerLink"],[1,"bi","bi-arrow-right"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),a(3),n(),t(4,"div",3),a(5),n(),t(6,"a",4),a(7),r(8,"i",5),n()()()),o&2&&(m(3),u(l.cardTitle),m(2),u(l.cardValue),m(),s("routerLink",l.cardLink),m(),oe(" ",l.cardAction," "))},dependencies:[v]});let e=i;return e})();var Le=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-payments"]],decls:41,vars:0,consts:[[1,"d-flex","align-items-center","justify-content-between","px-4"],[1,"d-flex","align-items-center"],[1,"fab","fa-cc-visa","fa-2x","cc-color-visa"],[1,"ms-4"],[1,"small"],[1,"text-xs","text-muted"],[1,"ms-4","small"],[1,"badge","bg-light","text-dark","me-3"],["href","#!"],[1,"fab","fa-cc-mastercard","fa-2x","cc-color-mastercard"],["href","#!",1,"text-muted","me-3"],[1,"fab","fa-cc-amex","fa-2x","cc-color-amex"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"div",1),r(2,"i",2),t(3,"div",3)(4,"div",4),a(5,"Visa ending in 1234"),n(),t(6,"div",5),a(7,"Expires 04/2024"),n()()(),t(8,"div",6)(9,"div",7),a(10,"Default"),n(),t(11,"a",8),a(12,"Edit"),n()()(),r(13,"hr"),t(14,"div",0)(15,"div",1),r(16,"i",9),t(17,"div",3)(18,"div",4),a(19,"Mastercard ending in 5678"),n(),t(20,"div",5),a(21,"Expires 05/2022"),n()()(),t(22,"div",6)(23,"a",10),a(24,"Make Default"),n(),t(25,"a",8),a(26,"Edit"),n()()(),r(27,"hr"),t(28,"div",0)(29,"div",1),r(30,"i",11),t(31,"div",3)(32,"div",4),a(33,"American Express ending in 9012"),n(),t(34,"div",5),a(35,"Expires 01/2026"),n()()(),t(36,"div",6)(37,"a",10),a(38,"Make Default"),n(),t(39,"a",8),a(40,"Edit"),n()()())}});let e=i;return e})();var K=function(e){return e.Cash="Cash",e.CreditCard="Credit Card",e.DebitCard="Debit Card",e.BankTransfer="Bank Transfer",e.MobileMoney="Mobile Money",e.Other="Other",e}(K||{}),W=function(e){return e.Full="Full Payment",e.Partial="Partial",e.Balance="Balance Payment",e}(W||{}),ee=function(e){return e.Success="Success",e.Fail="Fail",e.Pending="Pending",e}(ee||{}),te=function(e){return e.USD="USD",e.EUR="EUR",e.GBP="GBP",e.JPY="JPY",e.GHC="GHC",e}(te||{}),Ve=[{restaurant:"ABC Restaurant",billing:"123456",payment_id:"P1001",payment_date:new Date,amount:50.75,payment_method:{payment:"PM100",name:"John Doe",card_type:"Visa",is_default:!0,payment_channel:K.CreditCard,expiry_date:new Date},payment_type:W.Full,currency_type:te.USD,payment_status:ee.Pending},{restaurant:"XYZ Bistro",billing:"654321",payment_id:"P1002",payment_date:new Date,amount:75.25,payment_method:{payment:"PM101",name:"Jane Smith",card_type:"MasterCard",is_default:!1,payment_channel:K.CreditCard,expiry_date:new Date},payment_type:W.Partial,currency_type:te.EUR,payment_status:ee.Success}];function tt(e,i){e&1&&(t(0,"a",6),a(1," See All "),r(2,"i",7),n()),e&2&&s("routerLink","/home/admin/settings/billings/payments-history")}function it(e,i){if(e&1&&(t(0,"th"),r(1,"app-table-sorting",8),n()),e&2){let p=i.$implicit;m(),s("columnTitle",p)}}function nt(e,i){if(e&1){let p=_();t(0,"tr",9),g("click",function(){let o=b(p).$implicit,l=I();return h(l.viewPaymentDetails(o.id))}),t(1,"td"),a(2),n(),t(3,"td"),a(4),n(),t(5,"td"),a(6),L(7,"date"),n(),t(8,"td"),a(9),n(),t(10,"td")(11,"span",10),a(12),n()()()}if(e&2){let p=i.$implicit;m(2),u(p.payment_id),m(2),u(p.billing),m(2),u(V(7,5,p.payment_date,"dd-MM-YYYY")),m(3),u(p.amount),m(3),u(p.payment_status)}}function at(e,i){e&1&&(t(0,"tr")(1,"td",11),a(2,"No Payments found."),n()())}var z=(()=>{let i=class i{constructor(){this.paymentHeaders=["Payment ID","Billing ID","Date","Amount","Status"],this.payments=Ve,this.displaySeeAllButton=!1}viewPaymentDetails(d){}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-payment-history"]],inputs:{displaySeeAllButton:"displaySeeAllButton"},decls:17,vars:3,consts:[[1,"card","mb-4"],[1,"card-header","d-flex","justify-content-between"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-hover","table-bordered"],[3,"totalItems"],[3,"routerLink"],[1,"bi","bi-box-arrow-up-right"],[3,"columnTitle"],[3,"click"],[1,"badge","bg-success"],["colspan","5"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"div",1)(2,"span"),a(3," Payments History "),n(),F(4,tt,3,1,"a"),n(),t(5,"div",2)(6,"div",3)(7,"table",4)(8,"thead")(9,"tr"),C(10,it,2,1,"th",null,S),n()(),t(12,"tbody"),C(13,nt,13,8,"tr",null,S,!1,at,3,0,"tr"),n()()(),r(16,"app-table-pagination",5),n()()),o&2&&(m(4),A(4,l.displaySeeAllButton?4:-1),m(6),E(l.paymentHeaders),m(3),E(l.payments),m(3),s("totalItems",l.payments.length))},dependencies:[v,j,G,H]});let e=i;return e})();var He=(()=>{let i=class i{constructor(d){this.route=d,this.billing=U[0]}};i.\u0275fac=function(o){return new(o||i)(x(de))},i.\u0275cmp=c({type:i,selectors:[["app-billings"]],viewQuery:function(o,l){if(o&1&&M(k,5),o&2){let f;w(f=P())&&(l.createPaymentMethod=f.first)}},decls:20,vars:14,consts:[["newPaymentMethodReference",""],["id","pricing",1,"pricing"],[1,"row"],[1,"col-lg-4","mb-4"],[3,"cardAction","cardValue","cardTitle","cardLink"],[1,"card","card-header-actions","mb-4"],[1,"card-header","d-flex","justify-content-between"],["type","button",1,"btn","btn-sm","btn-primary","float-right",3,"click"],[1,"card-body","px-0"],[3,"displaySeeAllButton"]],template:function(o,l){if(o&1){let f=_();t(0,"div",1)(1,"div",2)(2,"div",3),r(3,"app-billing-card",4),n(),t(4,"div",3),r(5,"app-billing-card",4),n(),t(6,"div",3),r(7,"app-billing-card",4),n()(),t(8,"div",5)(9,"div",6)(10,"span"),a(11," Payment Methods "),n(),t(12,"button",7),g("click",function(){return b(f),h(l.createPaymentMethod.openModal())}),a(13," Add Payment Method "),n()(),t(14,"div",8),r(15,"app-payments"),n()(),r(16,"app-billing-history",9)(17,"app-payment-history",9),n(),r(18,"app-create-payment-method",null,0)}o&2&&(m(3),s("cardAction","Switch to another billing cycle")("cardValue",l.billing.subscription_pricing_plan==null?null:l.billing.subscription_pricing_plan.price)("cardTitle","Current Billing Cycle - "+l.billing.billing_cycle)("cardLink","#"),m(2),s("cardAction","View Payments History")("cardValue",l.billing.next_payment_due_date.toLocaleDateString())("cardTitle","Next Payment Due")("cardLink","/home/admin/settings/billings/payments-history"),m(2),s("cardAction","Upgrade Current Plan")("cardValue",l.billing.subscription_pricing_plan==null?null:l.billing.subscription_pricing_plan.name)("cardTitle","Current Subscription Plan")("cardLink","/home/admin/settings/billings/subscription-plans"),m(9),s("displaySeeAllButton",!0),m(),s("displaySeeAllButton",!0))},dependencies:[O,Ne,Le,k,z]});let e=i;return e})();var ie=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-all-settings"]],decls:73,vars:0,consts:[["newPaymentMethodComponentReference",""],[1,"Section","profile"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-body","pt-3"],[1,"card-title"],[1,"small","fst-italic"],[1,"row","mb-3"],["for","language",1,"col-md-4","col-lg-3","col-form-label"],[1,"col-md-8","col-lg-9"],["name","language","id","language",1,"form-select"],["value","english"],["value","spanish"],["value","french"],["for","timezone",1,"col-md-4","col-lg-3","col-form-label"],["name","timezone","id","timezone",1,"form-select"],["value","utc"],["value","est"],["value","pst"],[1,"text-center"],["type","submit",1,"btn","btn-primary"],["for","emailNotifications",1,"col-md-4","col-lg-3","col-form-label"],[1,"form-check"],["type","checkbox","id","changesMade","checked","",1,"form-check-input"],["for","changesMade",1,"form-check-label"],["type","checkbox","id","newProducts","checked","",1,"form-check-input"],["for","newProducts",1,"form-check-label"],["type","checkbox","id","proOffers",1,"form-check-input"],["for","proOffers",1,"form-check-label"],["type","checkbox","id","securityNotify","checked","","disabled","",1,"form-check-input"],["for","securityNotify",1,"form-check-label"],["type","checkbox","id","emailChanges","checked","",1,"form-check-input"],["for","emailChanges",1,"form-check-label"],[1,"text-center","mt-3"]],template:function(o,l){o&1&&(t(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h5",6),a(6,"General Settings"),n(),t(7,"p",7),a(8," Configure system settings, preferences, and defaults. "),n(),t(9,"form")(10,"div",8)(11,"label",9),a(12,"Language"),n(),t(13,"div",10)(14,"select",11)(15,"option",12),a(16,"English"),n(),t(17,"option",13),a(18,"Spanish"),n(),t(19,"option",14),a(20,"French"),n()()()(),t(21,"div",8)(22,"label",15),a(23,"Timezone"),n(),t(24,"div",10)(25,"select",16)(26,"option",17),a(27,"UTC"),n(),t(28,"option",18),a(29,"Eastern Standard Time (EST)"),n(),t(30,"option",19),a(31,"Pacific Standard Time (PST)"),n()()()(),t(32,"div",20)(33,"button",21),a(34," Save Changes "),n()()(),t(35,"h5",6),a(36,"Notification Settings"),n(),t(37,"p",7),a(38," Manage notification preferences and system alerts. "),n(),t(39,"form")(40,"div",8)(41,"label",22),a(42,"Email Notifications"),n(),t(43,"div",10)(44,"div",23),r(45,"input",24),t(46,"label",25),a(47," Changes made to your account "),n()(),t(48,"div",23),r(49,"input",26),t(50,"label",27),a(51," Information on new products and services "),n()(),t(52,"div",23),r(53,"input",28),t(54,"label",29),a(55," Marketing and promo offers "),n()(),t(56,"div",23),r(57,"input",30),t(58,"label",31),a(59," Security alerts "),n()(),t(60,"div",23),r(61,"input",32),t(62,"label",33),a(63," Receive email notifications for changes made to your account "),n()(),t(64,"div",23),r(65,"input",26),t(66,"label",27),a(67," Receive notifications on new products and services "),n()()(),t(68,"div",34)(69,"button",21),a(70," Save Changes "),n()()()()()()()()(),r(71,"app-create-payment-method",null,0))},dependencies:[Y,Se,Ce,R,be,k]});let e=i;return e})();var ne=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["app-all-subscription-plans"]],decls:1,vars:0,template:function(o,l){o&1&&r(0,"app-pricing")},dependencies:[ce]});let e=i;return e})();var rt=[{path:"",component:Ae,children:[{path:"",component:ie},{path:"all-settings",component:ie},{path:"billings",component:He},{path:"billings/billings-history",component:O},{path:"billings/payments-history",component:z},{path:"billings/all-subscription-plans",component:ne},{path:"billings/subscription-plans",component:ne}]}],Re=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=B({type:i}),i.\u0275inj=T({imports:[q.forChild(rt),q]});let e=i;return e})();var vi=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=B({type:i}),i.\u0275inj=T({imports:[me,_e,Me,Re,ke,we,De,ue,Te]});let e=i;return e})();export{vi as SettingsModule};
