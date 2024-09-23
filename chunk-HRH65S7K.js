import{a as f,c as b}from"./chunk-VX3URHZF.js";import"./chunk-OP5MBVD7.js";import{a as v,c as g}from"./chunk-IMD2KKFX.js";import{A as n,F as p,G as o,V as l,ca as d,cb as h,ja as a,ka as r,la as s,lb as u,qb as c}from"./chunk-TK5UYZ3D.js";var C=(()=>{let i=class i{constructor(){this.navItems=[{name:"Admin",icon:"bi bi-window-stack",target:"admin-nav",navs:[{name:"Profile",link:"admin/profile",icon:"bi bi-building"},{name:"Users",link:"admin/users",icon:"bi bi-people"},{name:"Settings",link:"admin/settings",icon:"bi bi-gear"}]},{name:"Staff",icon:"bi bi-people",target:"staff-nav",navs:[{name:"Staff",link:"staff/staff",icon:"bi bi-person-badge"},{name:"Roster",link:"staff/roster",icon:"bi bi-calendar2"}]},{name:"Finance",icon:"bi bi-cash-stack",target:"finance-nav",navs:[{name:"Bills",link:"finance/bills",icon:"bi bi-cash-coin"},{name:"Payments",link:"finance/payments",icon:"bi bi-credit-card"}]},{name:"Guests",icon:"bi bi-person-bounding-box",target:"guests-nav",navs:[{name:"Bookings",link:"guests/bookings",icon:"bi bi-calendar-check"},{name:"Guests",link:"guests/guests",icon:"bi bi-person-vcard"},{name:"Check-In / Check-Out",link:"guests/checkin-checkout",icon:"bi bi-door-open"}]},{name:"Infrastructure",icon:"bi bi-building",target:"infrastructure-nav",navs:[{name:"Rooms",link:"infrastructure/rooms",icon:"bi bi-door-closed"},{name:"Assets",link:"infrastructure/assets",icon:"bi bi-archive"},{name:"Housekeeping",link:"infrastructure/housekeeping",icon:"bi bi-tools"}]},{name:"Extras",icon:"bi bi-card-checklist",target:"extras-nav",navs:[{name:"Services",link:"extras/services",icon:"bi bi-cart"},{name:"Amenities",link:"extras/amenities",icon:"bi bi-trophy"}]},{name:"Content",icon:"bi bi-globe",target:"content-nav",navs:[{name:"Rooms",link:"content/rooms",icon:"bi bi-door-closed"},{name:"Services",link:"content/services",icon:"bi bi-cart"},{name:"Amenities",link:"content/amenities",icon:"bi bi-trophy"}]}]}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=p({type:i,selectors:[["app-pages"]],decls:6,vars:2,consts:[[1,"fixed-top"],[3,"navTitle"],["id","sidebar",1,"sidebar"],[3,"navItems"],["id","main",1,"main","dashboard-main"]],template:function(t,y){t&1&&(a(0,"div",0),s(1,"app-navbar",1),r(),a(2,"aside",2),s(3,"app-sidenav",3),r(),a(4,"main",4),s(5,"router-outlet"),r()),t&2&&(l(),d("navTitle","Hotel"),l(2),d("navItems",y.navItems))},dependencies:[u,f,v]});let e=i;return e})();var S=[{path:"",component:C,children:[{path:"",loadChildren:()=>import("./chunk-KGW7GWAO.js").then(e=>e.DashboardModule)},{path:"dashboard",loadChildren:()=>import("./chunk-KGW7GWAO.js").then(e=>e.DashboardModule)},{path:"admin/profile",loadChildren:()=>import("./chunk-SMABLMLO.js").then(e=>e.ProfileModule)},{path:"admin/users",loadChildren:()=>import("./chunk-WFTP5TFM.js").then(e=>e.UsersModule)},{path:"admin/settings",loadChildren:()=>import("./chunk-7BHWMOH6.js").then(e=>e.SettingsModule)},{path:"staff/staff",loadChildren:()=>import("./chunk-JQYXXT3S.js").then(e=>e.StaffModule)},{path:"staff/roster",loadChildren:()=>import("./chunk-I6RNJMIR.js").then(e=>e.RosterModule)},{path:"finance/bills",loadChildren:()=>import("./chunk-N62VDZRO.js").then(e=>e.BillsModule)},{path:"finance/payments",loadChildren:()=>import("./chunk-JH4QDC54.js").then(e=>e.PaymentsModule)},{path:"guests/guests",loadChildren:()=>import("./chunk-CQQQQ5ZK.js").then(e=>e.GuestsModule)},{path:"guests/checkin-checkout",loadChildren:()=>import("./chunk-5OU46IVH.js").then(e=>e.CheckinCheckoutModule)},{path:"guests/bookings",loadChildren:()=>import("./chunk-436VSX36.js").then(e=>e.BookingsModule)},{path:"infrastructure/rooms",loadChildren:()=>import("./chunk-VCFOS2GX.js").then(e=>e.RoomsModule)},{path:"infrastructure/assets",loadChildren:()=>import("./chunk-UPI6237T.js").then(e=>e.AssetsModule)},{path:"infrastructure/housekeeping",loadChildren:()=>import("./chunk-DZYPRMA2.js").then(e=>e.HousekeepingModule)},{path:"extras/services",loadChildren:()=>import("./chunk-PXLHGFFE.js").then(e=>e.ServicesModule)},{path:"extras/amenities",loadChildren:()=>import("./chunk-RZBIIDVL.js").then(e=>e.AmenitiesModule)},{path:"content/rooms",loadChildren:()=>import("./chunk-QMXV3IJ7.js").then(e=>e.RoomsModule)},{path:"content/services",loadChildren:()=>import("./chunk-QLADHLTE.js").then(e=>e.ServicesModule)},{path:"content/amenities",loadChildren:()=>import("./chunk-OIEB5HAO.js").then(e=>e.AmenitiesModule)}]}],M=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o({type:i}),i.\u0275inj=n({imports:[c.forChild(S),c]});let e=i;return e})();var H=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o({type:i}),i.\u0275inj=n({imports:[h,M,b,g]});let e=i;return e})();export{H as PagesModule};
