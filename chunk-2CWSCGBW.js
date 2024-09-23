import{a as j,b as F}from"./chunk-7VKPFLA4.js";import{a as T}from"./chunk-LN2M4CNM.js";import{e as M,j as N,v as q}from"./chunk-RQYECNT5.js";import{a as u}from"./chunk-HPKXDFTW.js";import{a as R,b as w,c as D}from"./chunk-VX3URHZF.js";import{A as f,F as d,G as h,U as S,V as s,ca as p,cb as C,ga as _,ha as y,ia as E,ja as e,ka as t,la as m,lb as I,nb as k,qb as b,xa as i,ya as v,za as g}from"./chunk-TK5UYZ3D.js";var P=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-booking"]],decls:4,vars:1,consts:[[1,"fixed-top"],[3,"navTitle"]],template:function(r,l){r&1&&(e(0,"div",0),m(1,"app-navbar",1),t(),m(2,"router-outlet")(3,"app-footer")),r&2&&(s(),p("navTitle","Hotel"))},dependencies:[I,R,w]});let n=o;return n})();var x=function(n){return n.Suite="suite",n.Single="single",n.Double="double",n.Twin="twin",n.King="king",n.Queen="queen",n}(x||{});var B=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-room-form"]],decls:46,vars:0,consts:[[1,"form-a"],[1,"row"],[1,"col-md-6","mb-3"],[1,"form-group"],["for","guest_first_name",1,"form-label"],["type","text","id","guest_first_name","placeholder","","name","guest_first_name","required","",1,"form-control","form-control-a"],["for","guest_last_name",1,"form-label"],["type","text","id","guest_last_name","placeholder","","name","guest_last_name","required","",1,"form-control","form-control-a"],["for","guest_phone_number",1,"form-label"],["type","tel","id","guest_phone_number","placeholder","","name","guest_phone_number","required","",1,"form-control","form-control-a"],["for","guest_email",1,"form-label"],["type","email","id","guest_email","placeholder","","name","guest_email","required","",1,"form-control","form-control-a"],["for","guest_room_check_in_date",1,"form-label"],["type","date","id","guest_room_check_in_date","placeholder","","name","guest_room_check_in_date","required","",1,"form-control","form-control-a"],["for","guest_room_check_out_date",1,"form-label"],["type","date","id","guest_room_check_out_date","placeholder","","name","guest_room_check_out_date","required","",1,"form-control","form-control-a"],["for","guest_expected_number_of_guests",1,"form-label"],["type","number","id","guest_expected_number_of_guests","placeholder","","name","guest_expected_number_of_guests","required","","min","1",1,"form-control","form-control-a"],[1,"col-md-12","mb-3"],["for","guest_message",1,"form-label"],["id","guest_message","placeholder","","name","guest_message",1,"form-control","form-control-a"],[1,"col-md-12","mt-3"],["type","submit",1,"btn","btn-a"]],template:function(r,l){r&1&&(e(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),i(5,"First Name *"),t(),m(6,"input",5),t()(),e(7,"div",2)(8,"label",6),i(9,"Last Name *"),t(),e(10,"div",3),m(11,"input",7),t()(),e(12,"div",2)(13,"label",8),i(14,"Phone *"),t(),e(15,"div",3),m(16,"input",9),t()(),e(17,"div",2)(18,"label",10),i(19,"Email *"),t(),e(20,"div",3),m(21,"input",11),t()(),e(22,"div",2)(23,"label",12),i(24,"Room Check-In Date *"),t(),e(25,"div",3),m(26,"input",13),t()(),e(27,"div",2)(28,"label",14),i(29,"Room Check-Out Date *"),t(),e(30,"div",3),m(31,"input",15),t()(),e(32,"div",2)(33,"label",16),i(34,"Expected Number of Guests *"),t(),e(35,"div",3),m(36,"input",17),t()(),e(37,"div",18)(38,"label",19),i(39,"Message / Special Requests"),t(),e(40,"div",3)(41,"textarea",20),i(42,"        "),t()()(),e(43,"div",21)(44,"button",22),i(45,"Book Room"),t()()()())},dependencies:[N,M]});let n=o;return n})();var L=(()=>{let o=class o{constructor(){this.hotelId="-1",this.hotelRoomId="-1",this.hotelRoom={status:"Available",hotel:"",room_number:"",number_of_beds:-1,price_per_night:-500,amenity:"Concrete Flooring",description:"This a sample description of the room",type:x.Double,capacity:"N/A"}}set profileId(a){this.hotelId=a}set room(a){this.hotelRoomId=a}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-room-details"]],inputs:{profileId:"profileId",room:"room"},decls:102,vars:4,consts:[["id","main "],[3,"hotelId","serviceName","routingModule","showcasePage"],[1,"property-single","nav-arrow-b","pt-0"],[1,"container"],[1,"row","justify-content-center","mb-2"],[1,"col-lg-8"],["id","carouselExample",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/images/bm-estate/slide-1.jpg","alt","...",1,"d-block","w-100"],[1,"carousel-item"],["src","assets/images/bm-estate/slide-2.jpg","alt","...",1,"d-block","w-100"],["src","assets/images/bm-estate/slide-3.jpg","alt","...",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExample","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExample","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"row"],[1,"col-sm-12"],[1,"row","justify-content-between"],[1,"col-md-5","col-lg-4"],[1,"property-price","d-flex","justify-content-center","foo"],[1,"card-header-c","d-flex"],[1,"card-box-ico"],[1,"bi","bi-cash"],[1,"card-title-c","align-self-center"],[1,"title-c"],[1,"property-summary"],[1,"title-box-d","section-t4"],[1,"title-d"],[1,"summary-list"],[1,"list"],[1,"d-flex","justify-content-between"],[1,"col-md-7","col-lg-7","section-md-t3"],[1,"title-box-d"],[1,"property-description"],[1,"description","color-text-a"],[1,"description","color-text-a","no-margin"],[1,"row","section-t3"],[1,"rooms-list","color-text-a"]],template:function(r,l){r&1&&(e(0,"main",0),m(1,"app-breadcrumbs",1),e(2,"section",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8),m(9,"img",9),t(),e(10,"div",10),m(11,"img",11),t(),e(12,"div",10),m(13,"img",12),t()(),e(14,"button",13),m(15,"span",14),e(16,"span",15),i(17,"Previous"),t()(),e(18,"button",16),m(19,"span",17),e(20,"span",15),i(21,"Next"),t()()()()(),e(22,"div",18)(23,"div",19)(24,"div",20)(25,"div",21)(26,"div",22)(27,"div",23)(28,"div",24)(29,"span",25),i(30,"$"),t()(),e(31,"div",26)(32,"h5",27),i(33,"15000"),t()()()(),e(34,"div",28)(35,"div",18)(36,"div",19)(37,"div",29)(38,"h3",30),i(39,"Quick Summary"),t()()()(),e(40,"div",31)(41,"ul",32)(42,"li",33)(43,"strong"),i(44,"Room ID:"),t(),e(45,"span"),i(46,"1134"),t()(),e(47,"li",33)(48,"strong"),i(49,"Location:"),t(),e(50,"span"),i(51,"Hotel Name, Location"),t()(),e(52,"li",33)(53,"strong"),i(54,"Room Type:"),t(),e(55,"span"),i(56,"House"),t()(),e(57,"li",33)(58,"strong"),i(59,"Status:"),t(),e(60,"span"),i(61,"Sale"),t()(),e(62,"li",33)(63,"strong"),i(64,"Area:"),t(),e(65,"span"),i(66,"340m "),e(67,"sup"),i(68,"2"),t()()(),e(69,"li",33)(70,"strong"),i(71,"Beds:"),t(),e(72,"span"),i(73,"4"),t()(),e(74,"li",33)(75,"strong"),i(76,"Baths:"),t(),e(77,"span"),i(78,"2"),t()(),e(79,"li",33)(80,"strong"),i(81,"Garage:"),t(),e(82,"span"),i(83,"1"),t()()()()()(),e(84,"div",34)(85,"div",18)(86,"div",19)(87,"div",35)(88,"h3",30),i(89,"Room Description"),t()()()(),e(90,"div",36)(91,"p",37),i(92," Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar quam id dui posuere blandit. "),t(),e(93,"p",38),i(94," Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. "),t()(),e(95,"div",39)(96,"div",19)(97,"div",35)(98,"h3",30),i(99,"Book this Room Now"),t()()()(),e(100,"div",40),m(101,"app-room-form"),t()()()()()()()()),r&2&&(s(),p("hotelId",l.hotelId)("serviceName","Room Number")("routingModule","booking")("showcasePage","rooms"))},dependencies:[u,B]});let n=o;return n})();var O=(()=>{let o=class o{constructor(){this.currentStep=1,this.stepOneCompleted=!1,this.stepTwoCompleted=!1,this.selectedDates="",this.selectedRoomType="",this.check_in_date="",this.checkoutDate="",this.numberOfGuests=1,this.roomType="",this.first_name="",this.last_name="",this.email="",this.phone="",this.payment_method=Object.values(T),this.additionalServices=[]}setCurrentStep(a){this.currentStep=a}nextStep(){this.currentStep===1?(this.stepOneCompleted=!0,this.currentStep++):this.currentStep===2&&(this.stepTwoCompleted=!0,this.currentStep++)}prevStep(){this.currentStep--}book(){}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-book-room"]],decls:1,vars:0,template:function(r,l){r&1&&m(0,"app-room-details")},dependencies:[L]});let n=o;return n})();var A=(()=>{let o=class o{constructor(){this.hotelId=-1,this.hotelRoomId=-1,this.hotelRoom={hotel:"",room_number:"",type:j.Single,status:"available",number_of_beds:0,description:"",price_per_night:0,capacity:0,room_size:0,room_image:"/assets/images/bm-estate/property-1.jpg"}}set profileId(a){this.hotelId=a}set roomId(a){this.hotelRoomId=a}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-room-card"]],inputs:{hotelRoom:"hotelRoom",profileId:"profileId",roomId:"roomId"},decls:30,vars:7,consts:[[1,"card-box-a","card-shadow","h-100"],[1,"img-box-a"],["alt","",1,"img-a","img-fluid",3,"src"],[1,"card-overlay"],[1,"card-overlay-a-content"],[1,"card-header-a"],[1,"card-title-a"],[3,"routerLink"],[1,"card-body-a"],[1,"price-box","d-flex"],[1,"price-a"],[1,"link-a",3,"routerLink"],[1,"bi","bi-chevron-right"],[1,"card-footer-a"],[1,"card-info","d-flex","justify-content-around"],[1,"card-info-title"]],template:function(r,l){r&1&&(e(0,"div",0)(1,"div",1),m(2,"img",2),t(),e(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6)(7,"a",7),i(8),t()()(),e(9,"div",8)(10,"div",9)(11,"span",10),i(12),e(13,"span"),i(14," / Night"),t()()(),e(15,"a",11),i(16,"Click here to view "),m(17,"span",12),t()(),e(18,"div",13)(19,"ul",14)(20,"li")(21,"h4",15),i(22,"Room Type"),t(),e(23,"span"),i(24),t()(),e(25,"li")(26,"h4",15),i(27,"Number of Beds"),t(),e(28,"span"),i(29),t()()()()()()()),r&2&&(s(2),p("src","/assets/images/bm-estate/property-1.jpg",S),s(5),p("routerLink","/booking/"+l.hotelId+"/rooms/"+l.hotelRoomId+"/book-room"),s(),v(l.hotelRoom.room_number),s(4),g("$ ",l.hotelRoom.price_per_night," "),s(3),p("routerLink","/booking/"+l.hotelId+"/rooms/"+l.hotelRoomId+"/book-room"),s(9),g(" ",l.hotelRoom.type," "),s(5),v(l.hotelRoom.number_of_beds))},dependencies:[k]});let n=o;return n})();function J(n,o){if(n&1&&(e(0,"div",3),m(1,"app-room-card",4),t()),n&2){let Q=o.$implicit;s(),p("hotelRoom",Q)}}var G=(()=>{let o=class o{constructor(){this.rooms=F,this.hotelId="-1"}set profileId(a){this.hotelId=a}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=d({type:o,selectors:[["app-rooms"]],inputs:{profileId:"profileId"},decls:5,vars:2,consts:[[3,"hotelId","showcasePage"],[1,"container","p-4"],["id","property-carousel",1,"row"],[1,"carousel-item-b","col-md-4","mb-4"],[3,"hotelRoom"]],template:function(r,l){r&1&&(m(0,"app-breadcrumbs",0),e(1,"div",1)(2,"div",2),y(3,J,2,1,"div",3,_),t()()),r&2&&(p("hotelId",l.hotelId)("showcasePage","rooms"),s(3),E(l.rooms))},dependencies:[u,A]});let n=o;return n})();var W=[{path:"",component:P,children:[{path:":hotelId/rooms",component:G},{path:":hotelId/rooms/:roomId/book-room",component:O}]}],H=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=h({type:o}),o.\u0275inj=f({imports:[b.forChild(W),b]});let n=o;return n})();var Me=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=h({type:o}),o.\u0275inj=f({imports:[C,H,D,q,u]});let n=o;return n})();export{A as a,Me as b};
