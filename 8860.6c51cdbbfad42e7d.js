"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[8860],{8860:(T,b,a)=>{a.r(b),a.d(b,{GroupschedulingModule:()=>j});var c=a(6814),l=a(95),_=a(2507),h=a(9862),f=a(5219),e=a(4769),m=a(8814),u=a(7902),y=a(4104),v=a(7327),M=a(707),O=a(3714),S=a(3965),Z=a(5167);const k=["itemInput"];function I(s,d){1&s&&(e.TgZ(0,"div",6)(1,"label",14),e._uU(2,"Datalog Interval (Min)"),e.qZA(),e._UZ(3,"p-inputNumber",20),e.qZA()),2&s&&(e.xp6(3),e.Q6J("min",1))}function D(s,d){1&s&&(e.TgZ(0,"div",13)(1,"div",0)(2,"div",6)(3,"label",14),e._uU(4,"Sunrise"),e.qZA(),e._UZ(5,"input",21),e.qZA(),e.TgZ(6,"div",6)(7,"label",14),e._uU(8,"Sunset"),e.qZA(),e._UZ(9,"input",22),e.qZA()()())}function x(s,d){if(1&s){const p=e.EpF();e.TgZ(0,"div",13)(1,"div",23),e._UZ(2,"div",24),e.TgZ(3,"div",25)(4,"label",14),e._uU(5,"Light On"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"p-button",26),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.lightOn())}),e.qZA()(),e.TgZ(8,"div",25)(9,"label",14),e._uU(10,"Light Off"),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"p-button",27),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.lightOff())}),e.qZA()()()()}2&s&&(e.xp6(7),e.Q6J("rounded",!0),e.xp6(5),e.Q6J("rounded",!0))}function L(s,d){if(1&s){const p=e.EpF();e.TgZ(0,"div",28)(1,"p-button",29),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.insertStockData())}),e.qZA(),e._uU(2," \xa0\xa0\xa0\xa0\xa0\xa0"),e.TgZ(3,"p-button",30),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.resetData())}),e.qZA()()}}function z(s,d){1&s&&(e.TgZ(0,"div",31),e._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),e.qZA())}function U(s,d){1&s&&e._UZ(0,"div",32)}const A=function(){return{standalone:!0}};let G=(()=>{var s;class d{constructor(i,t,r,n,o,g,C){this.router=i,this.api=t,this.renderer=r,this.fb=n,this.http=o,this.messageService=g,this.confirmationService=C,this.orgList=[],this.groupData=[],this.filteredCountries=[],this.countries=[],this.selectedState=null,this.spinner=!1,this.alert_type="",this.manualLightON=!1,this.manualLightOFF=!1,this.manualMode=!1,this.client_id=+localStorage.getItem("c_id"),this.cities2=[{unit_name:"Auto (Time Based)",unit:0},{unit_name:"Manualy",unit:1}],this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems=[{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}],this.cities1=[],this.city1=null,this.city2=null,this.modelList=[],this.dealerList=[],this.lastAddedIndex=-1,this.stockIn=this.fb.group({device_id:[0,l.kI.required],device:["",l.kI.required],device_type:["",l.kI.required],device_mode:[0,l.kI.required],datalog_interval:[2,l.kI.required],sunrise_time:["",l.kI.required],sunset_time:["",l.kI.required],vrms:[0,l.kI.required],irms:[0,l.kI.required],device_switch:[0],dimming:[100,[l.kI.required,l.kI.min(1),l.kI.max(100)]]})}ngOnInit(){this.ct=this.stockIn.controls,this.getOrg()}getOrg(){const i=this.api.baseUrl,t=localStorage.getItem("token"),r=(new h.WM).set("Authorization",`Bearer ${t}`);this.http.post(i+"/client/manage_organization/list",{client_id:this.client_id},{headers:r}).subscribe(o=>{console.log(o),this.orgList=o.data},o=>{"401"==o.status&&this.router.navigate(["/"]),console.log(o.status),console.error(o),this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side!!",life:3e3})})}getGroupList(){const i=this.api.baseUrl,t=localStorage.getItem("token"),r=(new h.WM).set("Authorization",`Bearer ${t}`);this.http.post(i+"/client/create_group_list",{organization_id:this.selectedOrganization.organization_id},{headers:r}).subscribe(o=>{console.log(o);const g=o;this.groupData=[],this.groupData=g.data},o=>{"401"==o.status&&this.router.navigate(["/"]),console.log(o.status),console.error(o),this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side!!",life:3e3})})}setOrg(){console.log(this.selectedOrganization),this.getGroupList()}resetData(){this.stockIn.reset(),this.selectedCountryAdvanced=[],this.selectedDealer=[]}getDevice(){const i={client_id:this.client_id},t=this.api.baseUrl,r=localStorage.getItem("token"),n=(new h.WM).set("Authorization",`Bearer ${r}`);this.spinner=!0,this.http.post(t+"/client/devices/list",i,{headers:n}).subscribe(o=>{console.log(o),this.spinner=!1,this.data=o,this.models=this.data.data,this.filteredCountries=this.cities1[0],console.log(this.selectedDealer)},o=>{"401"==o.status&&this.router.navigate(["/"]),console.log(o.status),this.spinner=!1,"401"==o.status&&this.router.navigate(["/"]),console.log(o.status)})}getDeviceModel(){const i=this.api.baseUrl,t=localStorage.getItem("token"),r=(new h.WM).set("Authorization",`Bearer ${t}`);this.http.get(i+"/master/model_name",{headers:r}).subscribe(n=>{console.log(n),this.modelList=n,this.models=this.modelList.data},n=>{"401"==n.status&&this.router.navigate(["/"]),console.log(n.status),console.error(n)})}getDealer(){const i=this.api.baseUrl,t=localStorage.getItem("token"),r=(new h.WM).set("Authorization",`Bearer ${t}`);this.http.get(i+"/seller/list",{headers:r}).subscribe(n=>{console.log(n),this.dealerList=n,this.dealer=this.dealerList.data},n=>{"401"==n.status&&this.router.navigate(["/"]),console.log(n.status),console.error(n)})}insertStockData(){this.spinner=!0,console.log(this.selectedDealer);const i={group_id:this.selectedCountryAdvanced.group_id,device_type:"SL",device_mode:this.do_mode?this.do_mode:0,datalog_interval:this.ct.datalog_interval.value,vrms:0,irms:0,sunrise_time:this.convertToTimeWithSeconds(this.ct.sunrise_time.value),sunset_time:this.convertToTimeWithSeconds(this.ct.sunset_time.value),device_switch:this.manualMode&&this.manualLightON?1:this.manualMode&&this.manualLightOFF?0:null,dimming:this.ct.dimming.value};console.log(i),this.api.callGroupSch(i).subscribe(t=>{t?(this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:this.manualMode&&this.manualLightON?"Manual Setting with Light-ON Updated ":this.manualMode&&this.manualLightOFF?"Manual Setting with Light-OFF Updated ":"Settings Updated",life:3e3})):(this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Data Related Issue!!",life:3e3}))},t=>{"401"==t.status&&this.router.navigate(["/"]),console.log(t.status),console.error(t),this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side !!",life:3e3}),console.error("API Error:",t)})}convertToTimeWithSeconds(i){return i.length<7?i+":00":i}filterDealer(i){const t=[],r=i.query;for(let n=0;n<this.cities2.length;n++){const o=this.cities2[n];0==o.unit_name.toLowerCase().indexOf(r.toLowerCase())&&t.push(o)}this.filteredDealer=t}setWarranty(){this.warr_in_month=this.warr_in_month?this.warr_in_month:0;const i=new Date(this.ct.purchase_date.value);isNaN(i.getTime())?console.error("Invalid date input"):(i.setMonth(i.getMonth()+Number(this.warr_in_month)),this.stockIn.get("warranty_expired").setValue(i))}selected(){let i;if(this.spinner=!0,console.log(this.selectedCountryAdvanced),this.selectedCountryAdvanced){i={client_id:this.client_id,group_id:this.selectedCountryAdvanced?.group_id};const g=localStorage.getItem("token");new h.WM({Authorization:`Bearer ${g}`,Accept:"*/*","Content-Type":"application/json"})}else i={client_id:this.client_id,group_id:0};const t=this.api.baseUrl,r=localStorage.getItem("token"),n=new h.WM({Authorization:`Bearer ${r}`,Accept:"*/*","Content-Type":"application/json"});this.http.post(t+"/client/group_device_schedule",i,{headers:n}).subscribe(o=>{if(this.spinner=!1,console.log(o),this.dealerList=o,"SL"===this.dealerList?.data?.device_type){1==this.dealerList?.data?.device_mode?(this.manualMode=!0,this.do_mode=1):(this.manualMode=!1,this.do_mode=0);const g=this.cities2.find(C=>C?.unit==this.dealerList?.data?.device_mode);g&&(this.selectedDealer=g),this.stockIn.patchValue({device_type:"SL",datalog_interval:this.dealerList?.data?.datalog_interval?this.dealerList?.data?.datalog_interval:2,vrms:0,irms:0,sunrise_time:this.convertToTimeString(this.dealerList?.data?.sunrise_hour,this.dealerList?.data?.sunrise_min),sunset_time:this.convertToTimeString(this.dealerList?.data?.sunset_hour,this.dealerList?.data?.sunset_min),dimming:this.dealerList?.data?.dimming}),this.cities2=[{unit_name:"Auto (Time Based)",unit:0},{unit_name:"Manualy",unit:1}]}else this.stockIn.patchValue({device_type:"",device_mode:"",sunrise_time:"",sunset_time:"",datalog_interval:2,vrms:0,irms:0,dimming:100}),this.cities2=[{unit_name:"Auto (Time Based)",unit:0}]},o=>{this.spinner=!1,"401"==o.status&&this.router.navigate(["/"]),console.log(o.status),console.error(o)})}lightOn(){this.manualLightON=!0,this.manualLightOFF=!1,this.insertStockData()}lightOff(){this.manualLightON=!1,this.manualLightOFF=!0,this.insertStockData()}convertToTimeString(i,t){return`${i.padStart(2,"0")}:${t.padStart(2,"0")}:00`}setDealer(i){console.log(i),this.do_mode=i.unit,this.manualMode=1==i.unit}get skillsFormArray(){return this.stockIn.get("sl_no")}addSkill(){this.skillsFormArray.push(this.fb.control(""))}removeSkill(i){this.skillsFormArray.removeAt(i)}addItem(i){13===i.keyCode&&(this.addSkill(),this.lastAddedIndex=this.skillsFormArray.length,this.lastAddedIndex=this.skillsFormArray.length-1)}formatedDate(i){const r=new Date(i),C=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`;return console.log(C),C}}return(s=d).\u0275fac=function(i){return new(i||s)(e.Y36(_.F0),e.Y36(m.s),e.Y36(e.Qsj),e.Y36(l.qu),e.Y36(h.eN),e.Y36(f.ez),e.Y36(f.YP))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],viewQuery:function(i,t){if(1&i&&e.Gf(k,5),2&i){let r;e.iGM(r=e.CRH())&&(t.itemInput=r.first)}},features:[e._Bn([f.ez,f.YP])],decls:31,vars:24,consts:[[1,"grid"],[1,"col-8"],[1,"card"],[2,"display","flex"],[3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["htmlFor","firstname2"],["optionLabel","organization_name","placeholder","Select a Organization",3,"ngModel","ngModelOptions","options","ngModelChange","onChange"],["optionLabel","group_name","placeholder","Select a Group",3,"ngModel","ngModelOptions","options","ngModelChange"],["field","unit_name",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],["class","field col-12 md:col-6",4,"ngIf"],["class","field col-12 md:col-10",4,"ngIf"],[1,"field","col-12","md:col-10"],["htmlFor","city"],["formControlName","dimming",1,"w-full",3,"min","max","step"],["class","field col-12 md:col-12",4,"ngIf"],[1,"col-4",2,"justify-content","center"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],["inputId","Datalog Interval","formControlName","datalog_interval",3,"min"],["pInputText","","formControlName","sunrise_time","type","time"],["pInputText","","formControlName","sunset_time","type","time"],[1,"grid",2,"border","1px solid rgb(212, 208, 208)"],[1,"field","col-12","md:col-4"],[1,"field","col-12","md:col-2"],["icon","pi pi-check","styleClass","p-button-success",3,"rounded","click"],["icon","pi pi-times","styleClass","p-button-danger",3,"rounded","click"],[1,"field","col-12","md:col-12"],["icon","pi pi-check","styleClass","p-button-primary ","label","Update Settings",3,"click"],["icon","pi pi-refresh","styleClass","p-button-danger","label","Reset",3,"click"],[1,"loader"],[1,"overlay"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"label",7),e._uU(8,"Select Organization"),e.qZA(),e.TgZ(9,"p-dropdown",8),e.NdJ("ngModelChange",function(n){return t.selectedOrganization=n})("onChange",function(){return t.setOrg()}),e.qZA()(),e.TgZ(10,"div",6)(11,"label",7),e._uU(12,"Select Group"),e.qZA(),e.TgZ(13,"p-dropdown",9),e.NdJ("ngModelChange",function(n){return t.selectedCountryAdvanced=n})("ngModelChange",function(){return t.selected()}),e.qZA()(),e.TgZ(14,"div",6)(15,"label",7),e._uU(16,"Device Mode:"),e.qZA(),e.TgZ(17,"p-autoComplete",10),e.NdJ("ngModelChange",function(n){return t.selectedDealer=n})("onSelect",function(n){return t.setDealer(n)})("completeMethod",function(n){return t.filterDealer(n)}),e.qZA()(),e.YNc(18,I,4,1,"div",11),e.YNc(19,D,10,0,"div",12),e.TgZ(20,"div",13)(21,"label",14),e._uU(22),e.qZA(),e._UZ(23,"p-slider",15),e.qZA(),e.YNc(24,x,13,2,"div",12),e.qZA(),e._UZ(25,"hr"),e.YNc(26,L,4,0,"div",16),e.qZA()()(),e._UZ(27,"div",17),e.qZA(),e._UZ(28,"p-toast"),e.YNc(29,z,6,0,"div",18),e.YNc(30,U,1,0,"div",19),e.qZA()),2&i&&(e.xp6(4),e.Q6J("formGroup",t.stockIn),e.xp6(5),e.Q6J("ngModel",t.selectedOrganization)("ngModelOptions",e.DdM(21,A))("options",t.orgList),e.xp6(4),e.Q6J("ngModel",t.selectedCountryAdvanced)("ngModelOptions",e.DdM(22,A))("options",t.groupData),e.xp6(4),e.Q6J("ngModel",t.selectedDealer)("ngModelOptions",e.DdM(23,A))("suggestions",t.filteredDealer)("dropdown",!0),e.xp6(1),e.Q6J("ngIf",!t.manualMode),e.xp6(1),e.Q6J("ngIf",!t.manualMode),e.xp6(3),e.hij("Dimming (",t.ct.dimming.value,"%)"),e.xp6(1),e.Q6J("min",1)("max",100)("step",1),e.xp6(1),e.Q6J("ngIf",t.manualMode),e.xp6(2),e.Q6J("ngIf",!t.manualMode),e.xp6(3),e.Q6J("ngIf",t.spinner),e.xp6(1),e.Q6J("ngIf",t.spinner))},dependencies:[u.iR,y.FN,c.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,v.Qc,M.zx,O.o,S.Lt,Z.Rn],styles:['@use postcss-preset-env{stage: 0;}.on-off-toggle[_ngcontent-%COMP%]{width:56px;height:24px;position:relative;display:inline-block}.on-off-toggle__slider[_ngcontent-%COMP%]{width:56px;height:24px;display:block;border-radius:34px;background-color:#d8d8d8;transition:background-color .4s}.on-off-toggle__slider[_ngcontent-%COMP%]:before{content:"";display:block;background-color:#fff;box-shadow:0 0 0 1px #949494;bottom:3px;height:18px;left:3px;position:absolute;transition:.4s;width:18px;z-index:5;border-radius:100%}.on-off-toggle__slider[_ngcontent-%COMP%]:after{display:block;line-height:24px;text-transform:uppercase;font-size:12px;font-weight:700;content:"off";color:#484848;padding-left:26px;transition:all .4s}.on-off-toggle__input[_ngcontent-%COMP%]{position:absolute;opacity:0}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]{background-color:#000}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:before{transform:translate(32px)}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:after{content:"on";color:#fff;padding-left:8px}*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:OpenSans,sans-serif;height:100vh;display:flex;align-items:center;justify-content:center}']}),d})(),F=(()=>{var s;class d{}return(s=d).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[_.Bz.forChild([{path:"",component:G}]),_.Bz]}),d})();var N=a(6760),J=a(1480),w=a(9663),P=a(8062),B=a(4055),Q=a(6218),W=a(5359),Y=a(7680);let j=(()=>{var s;class d{}return(s=d).\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[f.ez,f.YP],imports:[u.JH,y.EV,c.ez,l.u5,l.UX,F,v.WN,N._8,J.Gg,Y.L,S.kW,w.zz,Z.L$,P.XH,B.q4,Q.A,O.j,W.x]}),d})()},5359:(T,b,a)=>{a.d(b,{i:()=>f,x:()=>e});var c=a(1180),l=a(4769),_=a(6814);const h=["*"];let f=(()=>{var m;class u{constructor(){(0,c.Z)(this,"style",void 0),(0,c.Z)(this,"styleClass",void 0),(0,c.Z)(this,"layout","horizontal"),(0,c.Z)(this,"type","solid"),(0,c.Z)(this,"align",void 0)}containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}}return m=u,(0,c.Z)(u,"\u0275fac",function(v){return new(v||m)}),(0,c.Z)(u,"\u0275cmp",l.Xpm({type:m,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},ngContentSelectors:h,decls:3,vars:4,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(v,M){1&v&&(l.F$t(),l.TgZ(0,"div",0)(1,"div",1),l.Hsn(2),l.qZA()()),2&v&&(l.Tol(M.styleClass),l.Q6J("ngClass",M.containerClass())("ngStyle",M.style))},dependencies:[_.mk,_.PC],styles:['.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}\n'],encapsulation:2,changeDetection:0})),u})(),e=(()=>{var m;class u{}return m=u,(0,c.Z)(u,"\u0275fac",function(v){return new(v||m)}),(0,c.Z)(u,"\u0275mod",l.oAB({type:m})),(0,c.Z)(u,"\u0275inj",l.cJS({imports:[_.ez]})),u})()}}]);