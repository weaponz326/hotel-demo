import{a as P}from"./chunk-DQC53J6Z.js";import{a as B,b as M,c as O,d as Q,e as N}from"./chunk-3OLZPOF4.js";import{F as w,Ga as L,K as p,L as h,Q as S,R as y,V as n,W as E,Za as V,_a as A,aa as T,ba as k,ca as l,cb as R,ja as o,ka as i,la as f,ma as C,na as g,oa as v,ta as F,ua as I,va as D,xa as m,ya as b}from"./chunk-TK5UYZ3D.js";var q=["openButtonElementReference"],x=["closeButtonElementReference"];function $(c,s){if(c&1){let r=C();o(0,"tr",22),g("click",function(){let d=p(r).$implicit,e=v();return h(e.selectRow(d))}),o(1,"td"),m(2),i(),o(3,"td"),m(4),i(),o(5,"td"),m(6),i(),o(7,"td"),m(8),i()()}if(c&2){let r=s.$implicit;n(2),b(r.checkin_id),n(2),b(r.guest==null?null:r.guest.guest_name),n(2),b(r.room==null?null:r.room.room_number),n(2),b(r.booking==null?null:r.booking.booking_id)}}function j(c,s){if(c&1&&(o(0,"tr")(1,"td",23),f(2,"app-table-loader",24),i()()),c&2){let r=v();n(2),l("isLoading",r.isFetchingListData)("isNoData",r.isDataAvailable)}}var oe=(()=>{let s=class s{constructor(t){this.checkInOutService=t,this.rowSelected=new y,this.closeTarget="",this.checkInListData=[],this.isFetchingListData=!1,this.isDataAvailable=!0,this.filterQuery="",this.pagination={currentPage:0,totalPages:0,totalItems:0},this.sorting={currentField:"created_at",currentDirection:"-"}}openModal(){this.checkInListData=[],this.getAllCheckIns(),this.openButton.nativeElement.click()}getAllCheckIns(){this.isFetchingListData=!0,this.checkInOutService.getAllCheckInOuts().subscribe({next:t=>{console.log(t),this.checkInListData=t.results,this.pagination.currentPage=t.current_page,this.pagination.totalPages=t.total_pages,this.pagination.totalItems=t.count,this.isFetchingListData=!1,this.pagination.totalItems==0&&(this.isDataAvailable=!1)},error:t=>{console.log(t)}})}pageSelected(){this.getAllCheckIns()}columnSorted(t){console.log(t),this.sorting.currentField=t.field,this.sorting.currentDirection=t.direction,this.getAllCheckIns()}tableFiltered(t){this.filterQuery=t,this.getAllCheckIns()}selectRow(t){this.rowSelected.emit(t),this.closeButton.nativeElement.click(),console.log(t)}};s.\u0275fac=function(d){return new(d||s)(E(P))},s.\u0275cmp=w({type:s,selectors:[["app-select-checkin"]],viewQuery:function(d,e){if(d&1&&(F(q,5,S),F(x,5,S)),d&2){let a;I(a=D())&&(e.openButton=a.first),I(a=D())&&(e.closeButton=a.first)}},inputs:{closeTarget:"closeTarget"},outputs:{rowSelected:"rowSelected"},standalone:!0,features:[L],decls:32,vars:24,consts:[["openButtonElementReference",""],["closeButtonElementReference",""],["data-bs-toggle","modal","data-bs-target","#selectCheckinModal",3,"hidden"],["id","selectCheckinModal","tabindex","-1","aria-labelledby","selectCheckinModalLabel","aria-hidden","true",1,"modal","fade","select-table-modal"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header","bg-light"],["id","selectCheckinModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close","data-bs-toggle","modal",1,"btn-close"],[1,"modal-body"],[1,"d-inline-block","w-100","mb-2"],[3,"tableFiltered","placeholder"],[1,"table-responsive"],[1,"table","table-sm","table-hover","table-bordered"],["width","25%"],[3,"columnSorted","columnTitle","thisField","currentField","currentDirection"],["width","30%"],["width","15%"],[3,"click",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"totalItems"],["data-bs-dismiss","modal","data-bs-toggle","modal",3,"hidden"],[3,"click"],["colspan","5"],[3,"isLoading","isNoData"]],template:function(d,e){if(d&1){let a=C();o(0,"button",2,0),m(2,` Launch demo modal
`),i(),o(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"span",7),m(8,"Select Hotel Check-In"),i(),f(9,"button",8),i(),o(10,"div",9)(11,"div",10)(12,"app-table-filtering",11),g("tableFiltered",function(){return p(a),h(e.tableFiltered)}),i()(),o(13,"div",12)(14,"table",13)(15,"thead")(16,"tr")(17,"th",14)(18,"app-table-sorting",15),g("columnSorted",function(u){return p(a),h(e.columnSorted(u))}),i()(),o(19,"th",16)(20,"app-table-sorting",15),g("columnSorted",function(u){return p(a),h(e.columnSorted(u))}),i()(),o(21,"th",17)(22,"app-table-sorting",15),g("columnSorted",function(u){return p(a),h(e.columnSorted(u))}),i()(),o(23,"th",16)(24,"app-table-sorting",15),g("columnSorted",function(u){return p(a),h(e.columnSorted(u))}),i()()()(),o(25,"tbody"),T(26,$,9,4,"tr",18)(27,j,3,2,"tr",19),i()(),f(28,"app-table-pagination",20),i()(),o(29,"button",21,1),m(31," Launch demo modal "),i()()()()}d&2&&(l("hidden",!0),n(9),k("data-bs-target",e.closeTarget),n(3),l("placeholder","Search Check-Ins"),n(6),l("columnTitle","Check-In ID")("thisField","checkin_id")("currentField",e.sorting.currentField)("currentDirection",e.sorting.currentDirection),n(2),l("columnTitle","Guest Name")("thisField","guest")("currentField",e.sorting.currentField)("currentDirection",e.sorting.currentDirection),n(2),l("columnTitle","Room Number")("thisField","room")("currentField",e.sorting.currentField)("currentDirection",e.sorting.currentDirection),n(2),l("columnTitle","Booking ID")("thisField","booking")("currentField",e.sorting.currentField)("currentDirection",e.sorting.currentDirection),n(2),l("ngForOf",e.checkInListData),n(),l("ngIf",!e.isFetchingListData||!e.isDataAvailable),n(),l("totalItems",e.checkInListData.length),n(),l("hidden",!0),k("data-bs-target",e.closeTarget))},dependencies:[R,V,A,N,M,O,Q,B]});let c=s;return c})();export{oe as a};
