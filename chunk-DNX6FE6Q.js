import{C as o,fb as l,rb as h,z as r}from"./chunk-TK5UYZ3D.js";var f=(()=>{let e=class e{constructor(t){this.http=t,this.apiBaseUrl=h.apiBaseUrl}createProfile(t){return this.http.post(`${this.apiBaseUrl}/hotel/admin/hotel-profile/hotel-profile/`,t)}getProfile(){return this.http.get(`${this.apiBaseUrl}/hotel/admin/hotel-profile/hotel-profile/${localStorage.getItem("hotel_id")}`)}getProfileById(t){return this.http.get(`${this.apiBaseUrl}/hotel/admin/hotel-profile/hotel-profile/${t}`)}updateProfile(t){return this.http.put(`${this.apiBaseUrl}/hotel/admin/hotel-profile/hotel-profile/${localStorage.getItem("hotel_id")}`,t)}getAllHotelProfiles(){return this.http.get(`${this.apiBaseUrl}/hotel/admin/hotel-profile/search-list/`)}getAllHotelProfileByName(t){return this.http.get(`${this.apiBaseUrl}/hotel/admin/hotel-profile/search-list?search=${t}`)}};e.\u0275fac=function(a){return new(a||e)(o(l))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{f as a};
