"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9135],{9135:(ct,Z,n)=>{n.r(Z),n.d(Z,{InputDemoModule:()=>lt});var m=n(6814),l=n(95),v=n(2507),u=n(9862),p=n(5219),t=n(4769),L=n(5905),M=n(8814),O=n(7744),f=n(707),A=n(8608),_=n(9552),I=n(4480),D=n(4104),y=n(2947);function $(o,c){if(1&o&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&o){const d=c.$implicit;t.Q6J("value",d.organization_id),t.xp6(1),t.hij(" ",d.organization_name," ")}}function Y(o,c){if(1&o&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&o){const d=c.$implicit;t.Q6J("value",d.user_id),t.xp6(1),t.hij(" ",d.user_name," ")}}function F(o,c){if(1&o&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&o){const d=c.$implicit;t.Q6J("value",d.device_id),t.xp6(1),t.hij(" ",d.device," ")}}function P(o,c){1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Sl No"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Device Name"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"User Name"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Organization Name"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"model "),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Status "),t.qZA(),t.TgZ(13,"th",25),t._uU(14,"Edit"),t.qZA(),t.TgZ(15,"th",25),t._uU(16,"Delete"),t.qZA()())}function B(o,c){if(1&o){const d=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",26),t._UZ(12,"p-badge",27),t.qZA(),t.TgZ(13,"td")(14,"button",28),t.NdJ("click",function(){const r=t.CHM(d).$implicit,a=t.oxw();return t.KtG(a.selectProduct(r))}),t.qZA()(),t.TgZ(15,"td")(16,"p-button",29),t.NdJ("click",function(){const r=t.CHM(d).$implicit,a=t.oxw();return t.KtG(a.stockDelete(r))}),t.qZA()()()}if(2&o){const d=c.rowIndex,e=c.$implicit;t.xp6(2),t.Oqu(d+1),t.xp6(2),t.Oqu(e.device),t.xp6(2),t.Oqu(e.user_name),t.xp6(2),t.Oqu(e.organization_name),t.xp6(2),t.Oqu(e.model),t.xp6(2),t.Q6J("value","Y"==e.user_active_status?"Active":"Deactive")("severity","Y"==e.user_active_status?"success":"danger")}}function Q(o,c){1&o&&(t.TgZ(0,"div",30),t._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),t.qZA())}function W(o,c){1&o&&t._UZ(0,"div",31)}const q=function(){return{"min-width":"50rem"}};let j=(()=>{var o;class c{constructor(e,i,r,a,s,g,h){this.router=e,this.authservice=i,this.api=r,this.countryService=a,this.fb=s,this.http=g,this.messageService=h,this.filteredCountries=[],this.countries=[],this.selectedState=null,this.modelList=[],this.userList=[],this.lastAddedIndex=-1,this.stockList=[],this.spinner=!1,this.first=0,this.rows=20,this.companys=[],this.client_id=+localStorage.getItem("c_id"),this.stockIn=this.fb.group({org_id:["0",l.kI.required],device_id:["0",[l.kI.required]],device_name:["",[l.kI.required]],user_id:["0",[l.kI.required]],manage_user_device_id:[""]}),this.stockIn2=this.fb.group({org_id:["0",l.kI.required],device_id:["0",[l.kI.required]],device_name:["",[l.kI.required]],user_id:["0",[l.kI.required]],manage_user_device_id:[""]})}ngOnInit(){this.ct=this.stockIn.controls,this.getuser(),this.getDevice(),this.getDeviceData(),this.getOrganization(),this.loadPage()}getDeviceData(){}getuser(){const e=this.api.baseUrl,i=localStorage.getItem("token"),r=(new u.WM).set("Authorization",`Bearer ${i}`);this.http.post(e+"/client/manage_user/list",{client_id:this.client_id},{headers:r}).subscribe(s=>{console.log(s),this.userList=s,this.users=this.userList.data,this.users2=this.userList.data},s=>{"401"==s.status&&this.router.navigate(["/"]),console.log(s.status),console.error(s),this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side!!",life:3e3})})}onPageChange(e){this.first=e.first,this.rows=e.rows,this.goingPage=e.page+1}loadPage(){this.spinner=!0;const e=this.api.baseUrl,i=localStorage.getItem("token"),r=(new u.WM).set("Authorization",`Bearer ${i}`);this.http.post(e+"/client/manage_user/list_user_device",{client_id:this.client_id},{headers:r}).subscribe(s=>{this.spinner=!1,this.stockApi=s,this.stockListAll=this.stockApi.data})}selectProduct(e){this.users=this.users2.filter(i=>i.organization_id==e.organization_id),this.stockIn.patchValue({device_id:e.device_id,org_id:e.organization_id,user_id:e.user_id,manage_user_device_id:e.manage_user_device_id})}resetData(){this.stockIn.reset(),this.stockIn.patchValue({device_id:0,org_id:0,user_id:0})}getOrganization(){const e=this.api.baseUrl,i=localStorage.getItem("token"),r=(new u.WM).set("Authorization",`Bearer ${i}`);this.http.post(e+"/client/manage_organization/list",{client_id:this.client_id},{headers:r}).subscribe(s=>{console.log(s),this.companyList=s,this.companys=this.companyList.data},s=>{"401"==s.status&&this.router.navigate(["/"]),console.log(s.status),console.error(s)})}getDevice(){const e=this.api.baseUrl,i=localStorage.getItem("token"),r=(new u.WM).set("Authorization",`Bearer ${i}`);this.http.post(e+"/client/devices/list",{client_id:this.client_id},{headers:r}).subscribe(s=>{console.log(s),this.modelList=s,this.models=this.modelList.data},s=>{"401"==s.status&&this.router.navigate(["/"]),console.log(s.status),console.error(s)})}setUser(){this.users=[],this.users=this.users2.filter(e=>e.organization_id==this.ct.org_id.value)}getAllStock(){this.spinner=!0,this.totalPGNO=0;const e=this.api.baseUrl,i=localStorage.getItem("token"),r=(new u.WM).set("Authorization",`Bearer ${i}`);this.http.get(e+"/assign-device/list-origination",{headers:r}).subscribe(a=>{this.spinner=!1,console.log(a),this.stockApi=a,this.stockList=this.stockApi.data},a=>{"401"==a.status&&this.router.navigate(["/"]),console.log(a.status),this.spinner=!1,console.error(a)})}deviceChange(e){const i=this.models.filter(r=>r.device_id==e)[0].device;this.ct.device_name.setValue(i)}insertStockData(){this.spinner=!0;const e={client_id:this.client_id,organization_id:Number(this.ct.org_id.value),device_id:Number(this.ct.device_id.value),device:this.ct.device_name.value,user_id:Number(this.ct.user_id.value),manage_user_device_id:this.ct.manage_user_device_id.value?this.ct.manage_user_device_id.value:"",created_by:0};if(this.ct.manage_user_device_id.value){const i=this.api.baseUrl,r=localStorage.getItem("token"),a=(new u.WM).set("Authorization",`Bearer ${r}`);this.http.post(i+"/client/manage_user/edit_user_device",e,{headers:a}).subscribe(s=>{console.log(s),this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Device Updated",life:3e3}),this.resetData(),this.loadPage()},s=>{"401"==s.status&&this.router.navigate(["/"]),console.log(s.status),this.spinner=!1,console.log(s)})}else{const i=this.api.baseUrl,r=localStorage.getItem("token"),a=(new u.WM).set("Authorization",`Bearer ${r}`);this.http.post(i+"/client/manage_user/add_device",e,{headers:a}).subscribe(s=>{console.log(s),this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Device created",life:3e3}),this.resetData(),this.loadPage()},s=>{"401"==s.status&&this.router.navigate(["/"]),console.log(s.status),this.spinner=!1,console.error(s)})}}filterCountry(e){const i=[],r=e.query;for(let a=0;a<this.models.length;a++){const s=this.models[a];0==s.model_name.toLowerCase().indexOf(r.toLowerCase())&&i.push(s)}this.filteredCountries=i}setWarranty(){this.warr_in_month=this.warr_in_month?this.warr_in_month:0;const e=new Date(this.ct.purchase_date.value);isNaN(e.getTime())?console.error("Invalid date input"):(e.setMonth(e.getMonth()+Number(this.warr_in_month)),this.stockIn.get("warranty_expired").setValue(e))}calculateOutputDate(){}selected(){console.log(this.selectedCountryAdvanced),this.modelID=this.selectedCountryAdvanced.model_id,this.product_n=this.selectedCountryAdvanced.product_name,this.company_n=this.selectedCountryAdvanced.company_name}get skillsFormArray(){return this.stockIn.get("sl_no")}addSkill(){this.skillsFormArray.push(this.fb.control(""))}removeSkill(e){this.skillsFormArray.removeAt(e)}addItem(e){13===e.keyCode&&(this.addSkill(),this.lastAddedIndex=this.skillsFormArray.length,this.lastAddedIndex=this.skillsFormArray.length-1)}formatedDate(e){const r=new Date(e),h=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`;return console.log(h),h}stockDelete(e){const i={client_id:this.client_id,manage_user_device_id:e.manage_user_device_id};this.spinner=!0;const r=this.api.baseUrl,a=localStorage.getItem("token"),s=(new u.WM).set("Authorization",`Bearer ${a}`);this.http.post(r+"/client/manage_user/delete_user_device",i,{headers:s}).subscribe(g=>{console.log(g),this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Device Deleted",life:3e3}),this.resetData(),this.loadPage(),this.getuser()},g=>{"401"==g.status&&this.router.navigate(["/"]),console.log(g.status),this.spinner=!1,console.error(g)})}}return(o=c).\u0275fac=function(e){return new(e||o)(t.Y36(v.F0),t.Y36(L.$),t.Y36(M.s),t.Y36(O.T),t.Y36(l.qu),t.Y36(u.eN),t.Y36(p.ez))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],features:[t._Bn([p.ez])],decls:43,vars:12,consts:[[1,"col-12"],[1,"card"],[3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-4","custom-select"],["htmlFor","firstname2"],["formControlName","org_id",2,"width","100%","height","39px","border-color","lightgray","border-radius","5px",3,"change"],["value","0","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"field","col-12","md:col-4"],["formControlName","user_id",2,"width","100%","height","39px","border-color","lightgray","border-radius","5px"],["formControlName","device_id",2,"width","100%","height","39px","border-color","lightgray","border-radius","5px",3,"change"],[1,"field","col-12","md:col-2"],["icon","pi pi-check","styleClass","p-button-primary ","label","Save",3,"click"],["icon","pi pi-refresh","styleClass","p-button-danger","label","Reset",3,"click"],[1,"col-12",2,"max-height","400px","overflow","scroll"],[3,"value","tableStyle"],["dt2",""],["pTemplate","header"],["pTemplate","body"],[1,"card","flex","justify-content-center"],[3,"first","rows","totalRecords","onPageChange"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],[3,"value"],[2,"width","5rem"],[2,"text-align","center"],[3,"value","severity"],["type","button","pButton","","pRipple","","icon","pi pi-pencil",3,"click"],["type","button","pRipple","","icon","pi pi-trash","styleClass","p-button-danger",3,"click"],[1,"loader"],[1,"overlay"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Add/Edit User"),t.qZA(),t.TgZ(4,"form",2)(5,"div",3)(6,"div",4)(7,"label",5),t._uU(8,"Select Organization"),t.qZA(),t.TgZ(9,"select",6),t.NdJ("change",function(){return i.setUser()}),t.TgZ(10,"option",7),t._uU(11,"Select an option"),t.qZA(),t.YNc(12,$,2,2,"option",8),t.qZA()(),t.TgZ(13,"div",9)(14,"label",5),t._uU(15,"Select User"),t.qZA(),t.TgZ(16,"select",10)(17,"option",7),t._uU(18,"Select an option"),t.qZA(),t.YNc(19,Y,2,2,"option",8),t.qZA()(),t.TgZ(20,"div",9)(21,"label",5),t._uU(22,"Select Device"),t.qZA(),t.TgZ(23,"select",11),t.NdJ("change",function(a){return i.deviceChange(a.target.value)}),t.TgZ(24,"option",7),t._uU(25,"Select an option"),t.qZA(),t.YNc(26,F,2,2,"option",8),t.qZA()()(),t.TgZ(27,"div",3)(28,"div",12)(29,"p-button",13),t.NdJ("click",function(){return i.insertStockData()}),t.qZA()(),t.TgZ(30,"div",12)(31,"p-button",14),t.NdJ("click",function(){return i.resetData()}),t.qZA()()()()()(),t._UZ(32,"p-toast"),t.TgZ(33,"div",15)(34,"p-table",16,17),t.YNc(36,P,17,0,"ng-template",18),t.YNc(37,B,17,7,"ng-template",19),t.qZA(),t.TgZ(38,"div",20)(39,"p-paginator",21),t.NdJ("onPageChange",function(a){return i.onPageChange(a)}),t.qZA()()(),t.YNc(40,Q,6,0,"div",22),t.YNc(41,W,1,0,"div",23),t._UZ(42,"p-toast")),2&e&&(t.xp6(4),t.Q6J("formGroup",i.stockIn),t.xp6(8),t.Q6J("ngForOf",i.companys),t.xp6(7),t.Q6J("ngForOf",i.users),t.xp6(7),t.Q6J("ngForOf",i.models),t.xp6(8),t.Q6J("value",i.stockListAll)("tableStyle",t.DdM(11,q)),t.xp6(5),t.Q6J("first",i.first)("rows",i.rows)("totalRecords",i.totalPGNO),t.xp6(1),t.Q6J("ngIf",i.spinner),t.xp6(1),t.Q6J("ngIf",i.spinner))},dependencies:[m.sg,m.O5,l._Y,l.YN,l.Kr,l.EJ,l.JJ,l.JL,l.sg,l.u,p.jx,f.Hq,f.zx,A.Ct,_.iA,I.H,D.FN,y.D],encapsulation:2}),c})(),G=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[v.Bz.forChild([{path:"",component:j}]),v.Bz]}),c})();var T=n(7327),U=n(6760),C=n(1480),R=n(2169),S=n(3965),k=n(9663),b=n(5167),x=n(8062),N=n(4055),z=n(6218),J=n(3714),H=n(6022),X=n(6058),E=n(9540),V=n(6128),K=n(8057),w=n(5609),tt=n(1865),et=n(3749),it=n(6804),st=n(7902),nt=n(1312),ot=n(3904),at=n(3259),rt=n(7680);let lt=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p.ez,p.YP],imports:[m.ez,l.u5,l.UX,G,rt.L,T.WN,U._8,C.Gg,A.TX,S.kW,k.zz,b.L$,et.e4,x.XH,N.q4,it.KZ,st.JH,z.A,tt.cc,J.j,H.Xt,R.o,X.dJ,w.Iu,E.ON,V.Qy,K.nD,f.hJ,_.U$,I.T,nt.S,ot.D,D.EV,l.u5,l.UX,T.WN,U._8,C.Gg,S.kW,k.zz,b.L$,x.XH,N.q4,z.A,J.j,y.U,at.z]}),c})()}}]);