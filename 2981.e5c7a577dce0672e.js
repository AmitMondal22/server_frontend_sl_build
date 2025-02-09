"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[2981],{2981:(I,b,l)=>{l.r(b),l.d(b,{FormLayoutDemoModule:()=>W});var u=l(6814),s=l(95),v=l(2507),f=l(9862),g=l(5219),e=l(4769),h=l(8814),m=l(7902),_=l(4104),p=l(7327),M=l(707),D=l(3714),L=l(5167);const k=["itemInput"];function Z(n,c){1&n&&(e.TgZ(0,"div",12)(1,"label",13),e._uU(2,"Datalog Interval (Min)"),e.qZA(),e._UZ(3,"p-inputNumber",19),e.qZA()),2&n&&(e.xp6(3),e.Q6J("min",1))}function F(n,c){if(1&n&&(e.TgZ(0,"div",12)(1,"div",0)(2,"div",6)(3,"label",13),e._uU(4,"Sunrise"),e.qZA(),e._UZ(5,"input",20),e.qZA(),e.TgZ(6,"div",6)(7,"label",13),e._uU(8,"Sunset"),e.qZA(),e._UZ(9,"input",21),e.qZA()()()),2&n){const d=e.oxw();e.xp6(5),e.Q6J("disabled",d.astroMode),e.xp6(4),e.Q6J("disabled",d.astroMode)}}function S(n,c){if(1&n){const d=e.EpF();e.TgZ(0,"div",12)(1,"div",22),e._UZ(2,"div",9),e.TgZ(3,"div",23)(4,"label",13),e._uU(5,"Light On"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"p-button",24),e.NdJ("click",function(){e.CHM(d);const t=e.oxw();return e.KtG(t.lightOn())}),e.qZA()(),e.TgZ(8,"div",23)(9,"label",13),e._uU(10,"Light Off"),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"p-button",25),e.NdJ("click",function(){e.CHM(d);const t=e.oxw();return e.KtG(t.lightOff())}),e.qZA()()()()}2&n&&(e.xp6(7),e.Q6J("rounded",!0),e.xp6(5),e.Q6J("rounded",!0))}function T(n,c){if(1&n){const d=e.EpF();e.TgZ(0,"div",26)(1,"p-button",27),e.NdJ("click",function(){e.CHM(d);const t=e.oxw();return e.KtG(t.insertStockData())}),e.qZA(),e._uU(2," \xa0\xa0\xa0\xa0\xa0\xa0"),e.TgZ(3,"p-button",28),e.NdJ("click",function(){e.CHM(d);const t=e.oxw();return e.KtG(t.resetData())}),e.qZA()()}}function x(n,c){1&n&&(e.TgZ(0,"div",29),e._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),e.qZA())}function O(n,c){1&n&&e._UZ(0,"div",30)}const A=function(){return{standalone:!0}};let U=(()=>{var n;class c{constructor(i,t,a,o,r,y,C){this.router=i,this.api=t,this.renderer=a,this.fb=o,this.http=r,this.messageService=y,this.confirmationService=C,this.filteredCountries=[],this.countries=[],this.selectedState=null,this.spinner=!1,this.alert_type="",this.manualLightON=!1,this.manualLightOFF=!1,this.manualMode=!1,this.astroMode=!1,this.client_id=+localStorage.getItem("c_id"),this.cities2=[{unit_name:"Auto (Time Based)",unit:0},{unit_name:"Manualy",unit:1},{unit_name:"Astro",unit:2}],this.states=[{name:"Arizona",code:"Arizona"},{name:"California",value:"California"},{name:"Florida",code:"Florida"},{name:"Ohio",code:"Ohio"},{name:"Washington",code:"Washington"}],this.dropdownItems=[{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}],this.cities1=[],this.city1=null,this.city2=null,this.modelList=[],this.dealerList=[],this.lastAddedIndex=-1,this.stockIn=this.fb.group({device_id:[0,s.kI.required],device:["",s.kI.required],device_type:["SL",s.kI.required],device_mode:[0,s.kI.required],datalog_interval:[2,s.kI.required],sunrise_time:["",s.kI.required],sunset_time:["",s.kI.required],vrms:[0,s.kI.required],irms:[0,s.kI.required],device_switch:[0],dimming:[100,[s.kI.required,s.kI.min(1),s.kI.max(100)]]})}ngOnInit(){this.ct=this.stockIn.controls,this.dimming=80,this.getDevice()}resetData(){this.stockIn.reset(),this.selectedCountryAdvanced=[],this.selectedDealer=[]}getDevice(){const i={client_id:this.client_id},t=this.api.baseUrl,a=localStorage.getItem("token"),o=(new f.WM).set("Authorization",`Bearer ${a}`);this.spinner=!0,this.http.post(t+"/client/devices/list",i,{headers:o}).subscribe(r=>{console.log(r),this.spinner=!1,this.data=r,this.models=this.data.data,this.filteredCountries=this.cities1[0],console.log(this.selectedDealer)},r=>{"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),this.spinner=!1,"401"==r.status&&this.router.navigate(["/"]),console.log(r.status)})}getDeviceModel(){const i=this.api.baseUrl,t=localStorage.getItem("token"),a=(new f.WM).set("Authorization",`Bearer ${t}`);this.http.get(i+"/master/model_name",{headers:a}).subscribe(o=>{console.log(o),this.modelList=o,this.models=this.modelList.data},o=>{"401"==o.status&&this.router.navigate(["/"]),console.log(o.status),console.error(o)})}getDealer(){const i=this.api.baseUrl,t=localStorage.getItem("token"),a=(new f.WM).set("Authorization",`Bearer ${t}`);this.http.get(i+"/seller/list",{headers:a}).subscribe(o=>{console.log(o),this.dealerList=o,this.dealer=this.dealerList.data},o=>{"401"==o.status&&this.router.navigate(["/"]),console.log(o.status),console.error(o)})}insertStockData(){this.spinner=!0,console.log(this.selectedDealer);const i={device_id:this.selectedCountryAdvanced.device_id,device:this.selectedCountryAdvanced.device,device_type:"SL",device_mode:this.do_mode?this.do_mode:0,datalog_interval:this.ct.datalog_interval.value,vrms:0,irms:0,sunrise_time:this.convertToTimeWithSeconds(this.ct.sunrise_time.value),sunset_time:this.convertToTimeWithSeconds(this.ct.sunset_time.value),device_switch:this.manualMode&&this.manualLightON?1:this.manualMode&&this.manualLightOFF?0:null,dimming:this.ct.dimming.value};console.log(i),this.api.callSch(i).subscribe(t=>{console.log(t),"success"==t.status?(this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:this.manualMode&&this.manualLightON?"Manual Setting with Light-ON Updated ":this.manualMode&&this.manualLightOFF?"Manual Setting with Light-OFF Updated ":this.astroMode?"Astro Setting Updated ":"Settings Updated",life:3e3})):(this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Data Related Issue!!",life:3e3}))},t=>{"401"==t.status&&this.router.navigate(["/"]),console.log(t.status),console.error(t),this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"From Server Side !!",life:3e3}),console.error("API Error:",t)})}convertToTimeWithSeconds(i){return i.length<7?i+":00":i}filterCountry(i){const t=[],a=i.query;for(let o=0;o<this.models.length;o++){const r=this.models[o];0==r.device.toLowerCase().indexOf(a.toLowerCase())&&t.push(r)}this.filteredCountries=t}filterDealer(i){const t=[],a=i.query;for(let o=0;o<this.cities2.length;o++){const r=this.cities2[o];0==r.unit_name.toLowerCase().indexOf(a.toLowerCase())&&t.push(r)}this.filteredDealer=t}setWarranty(){this.warr_in_month=this.warr_in_month?this.warr_in_month:0;const i=new Date(this.ct.purchase_date.value);isNaN(i.getTime())?console.error("Invalid date input"):(i.setMonth(i.getMonth()+Number(this.warr_in_month)),this.stockIn.get("warranty_expired").setValue(i))}selected(){this.spinner=!0,console.log(this.selectedCountryAdvanced),this.modelID=this.selectedCountryAdvanced.device_id,this.company_n=this.selectedCountryAdvanced.devices;const i={client_id:this.client_id,device_id:this.selectedCountryAdvanced.device_id,device:this.selectedCountryAdvanced.device},t=this.api.baseUrl,a=localStorage.getItem("token"),o=new f.WM({Authorization:`Bearer ${a}`,Accept:"*/*","Content-Type":"application/json"});this.http.post(t+"/client/device_schedule",i,{headers:o}).subscribe(r=>{if(this.spinner=!1,console.log(r),this.dealerList=r,"SL"===this.dealerList?.data?.device_type){1==this.dealerList?.data?.device_mode?(this.manualMode=!0,this.astroMode=!1,this.do_mode=1,this.stockIn.controls.sunset_time.enable(),this.stockIn.controls.sunrise_time.enable()):0==this.dealerList?.data?.device_mode?(this.manualMode=!1,this.astroMode=!1,this.do_mode=0,this.stockIn.controls.sunset_time.enable(),this.stockIn.controls.sunrise_time.enable()):(this.manualMode=!1,this.astroMode=!0,this.do_mode=2,this.stockIn.controls.sunset_time.disable(),this.stockIn.controls.sunrise_time.disable());const y=this.cities2.find(C=>C?.unit==this.dealerList?.data?.device_mode);y&&(this.selectedDealer=y),this.stockIn.patchValue({device_type:"SL",datalog_interval:this.dealerList?.data?.datalog_interval?this.dealerList?.data?.datalog_interval:2,vrms:0,irms:0,sunrise_time:this.convertToTimeString(this.dealerList?.data?.sunrise_hour,this.dealerList?.data?.sunrise_min),sunset_time:this.convertToTimeString(this.dealerList?.data?.sunset_hour,this.dealerList?.data?.sunset_min),dimming:this.dealerList?.data?.dimming}),this.cities2=[{unit_name:"Auto (Time Based)",unit:0},{unit_name:"Manualy",unit:1},{unit_name:"Astro",unit:2}]}else this.stockIn.patchValue({device_type:"",device_mode:"",sunrise_time:"",sunset_time:"",datalog_interval:2,vrms:0,irms:0,dimming:100}),this.cities2=[{unit_name:"Auto (Time Based)",unit:0},{unit_name:"Manualy",unit:1},{unit_name:"Astro",unit:2}]},r=>{this.spinner=!1,"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),console.error(r)})}lightOn(){this.manualLightON=!0,this.manualLightOFF=!1,this.insertStockData()}lightOff(){this.manualLightON=!1,this.manualLightOFF=!0,this.insertStockData()}convertToTimeString(i,t){return`${i.padStart(2,"0")}:${t.padStart(2,"0")}:00`}setDealer(i){console.log(i),this.do_mode=i.unit,1==i.unit?(this.astroMode=!1,this.manualMode=!0,this.stockIn.controls.sunset_time.enable(),this.stockIn.controls.sunrise_time.enable()):0==i.unit?(this.astroMode=!1,this.manualMode=!1,this.stockIn.controls.sunset_time.enable(),this.stockIn.controls.sunrise_time.enable()):(this.manualMode=!1,this.astroMode=!0,this.stockIn.controls.sunset_time.disable(),this.stockIn.controls.sunrise_time.disable())}get skillsFormArray(){return this.stockIn.get("sl_no")}addSkill(){this.skillsFormArray.push(this.fb.control(""))}removeSkill(i){this.skillsFormArray.removeAt(i)}addItem(i){13===i.keyCode&&(this.addSkill(),this.lastAddedIndex=this.skillsFormArray.length,this.lastAddedIndex=this.skillsFormArray.length-1)}formatedDate(i){const a=new Date(i),C=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`;return console.log(C),C}}return(n=c).\u0275fac=function(i){return new(i||n)(e.Y36(v.F0),e.Y36(h.s),e.Y36(e.Qsj),e.Y36(s.qu),e.Y36(f.eN),e.Y36(g.ez),e.Y36(g.YP))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(i,t){if(1&i&&e.Gf(k,5),2&i){let a;e.iGM(a=e.CRH())&&(t.itemInput=a.first)}},features:[e._Bn([g.ez,g.YP])],decls:27,vars:21,consts:[[1,"grid"],[1,"col-8"],[1,"card"],[2,"display","flex"],[3,"formGroup"],[1,"p-fluid","p-formgrid","grid"],[1,"field","col-12","md:col-6"],["htmlFor","firstname2"],["field","device",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],[1,"field","col-12","md:col-4"],["field","unit_name",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],["class","field col-12 md:col-10",4,"ngIf"],[1,"field","col-12","md:col-10"],["htmlFor","city"],["formControlName","dimming",1,"w-full",3,"min","max","step"],["class","field col-12 md:col-12",4,"ngIf"],[1,"col-4",2,"justify-content","center"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],["inputId","Datalog Interval","formControlName","datalog_interval",3,"min"],["pInputText","","formControlName","sunrise_time","type","time",3,"disabled"],["pInputText","","formControlName","sunset_time","type","time",3,"disabled"],[1,"grid",2,"border","1px solid rgb(212, 208, 208)"],[1,"field","col-12","md:col-2"],["icon","pi pi-check","styleClass","p-button-success",3,"rounded","click"],["icon","pi pi-times","styleClass","p-button-danger",3,"rounded","click"],[1,"field","col-12","md:col-12"],["icon","pi pi-check","styleClass","p-button-primary ","label","Update Settings",3,"click"],["icon","pi pi-refresh","styleClass","p-button-danger","label","Reset",3,"click"],[1,"loader"],[1,"overlay"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5)(6,"div",6)(7,"label",7),e._uU(8,"Select Device"),e.qZA(),e.TgZ(9,"p-autoComplete",8),e.NdJ("ngModelChange",function(o){return t.selectedCountryAdvanced=o})("onSelect",function(){return t.selected()})("completeMethod",function(o){return t.filterCountry(o)}),e.qZA()(),e.TgZ(10,"div",9)(11,"label",7),e._uU(12,"Device Mode:"),e.qZA(),e.TgZ(13,"p-autoComplete",10),e.NdJ("ngModelChange",function(o){return t.selectedDealer=o})("onSelect",function(o){return t.setDealer(o)})("completeMethod",function(o){return t.filterDealer(o)}),e.qZA()(),e.YNc(14,Z,4,1,"div",11),e.YNc(15,F,10,2,"div",11),e.TgZ(16,"div",12)(17,"label",13),e._uU(18),e.qZA(),e._UZ(19,"p-slider",14),e.qZA(),e.YNc(20,S,13,2,"div",11),e.qZA(),e._UZ(21,"hr"),e.YNc(22,T,4,0,"div",15),e.qZA()()(),e._UZ(23,"div",16),e.qZA(),e._UZ(24,"p-toast"),e.YNc(25,x,6,0,"div",17),e.YNc(26,O,1,0,"div",18),e.qZA()),2&i&&(e.xp6(4),e.Q6J("formGroup",t.stockIn),e.xp6(5),e.Q6J("ngModel",t.selectedCountryAdvanced)("ngModelOptions",e.DdM(19,A))("suggestions",t.filteredCountries)("dropdown",!0),e.xp6(4),e.Q6J("ngModel",t.selectedDealer)("ngModelOptions",e.DdM(20,A))("suggestions",t.filteredDealer)("dropdown",!0),e.xp6(1),e.Q6J("ngIf",!t.manualMode),e.xp6(1),e.Q6J("ngIf",!t.manualMode),e.xp6(3),e.hij("Dimming (",t.ct.dimming.value,"%)"),e.xp6(1),e.Q6J("min",1)("max",100)("step",1),e.xp6(1),e.Q6J("ngIf",t.manualMode),e.xp6(2),e.Q6J("ngIf",!t.manualMode),e.xp6(3),e.Q6J("ngIf",t.spinner),e.xp6(1),e.Q6J("ngIf",t.spinner))},dependencies:[m.iR,_.FN,u.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.sg,s.u,p.Qc,M.zx,D.o,L.Rn],styles:['@use postcss-preset-env{stage: 0;}.on-off-toggle[_ngcontent-%COMP%]{width:56px;height:24px;position:relative;display:inline-block}.on-off-toggle__slider[_ngcontent-%COMP%]{width:56px;height:24px;display:block;border-radius:34px;background-color:#d8d8d8;transition:background-color .4s}.on-off-toggle__slider[_ngcontent-%COMP%]:before{content:"";display:block;background-color:#fff;box-shadow:0 0 0 1px #949494;bottom:3px;height:18px;left:3px;position:absolute;transition:.4s;width:18px;z-index:5;border-radius:100%}.on-off-toggle__slider[_ngcontent-%COMP%]:after{display:block;line-height:24px;text-transform:uppercase;font-size:12px;font-weight:700;content:"off";color:#484848;padding-left:26px;transition:all .4s}.on-off-toggle__input[_ngcontent-%COMP%]{position:absolute;opacity:0}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]{background-color:#000}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:before{transform:translate(32px)}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:after{content:"on";color:#fff;padding-left:8px}*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:OpenSans,sans-serif;height:100vh;display:flex;align-items:center;justify-content:center}']}),c})(),z=(()=>{var n;class c{}return(n=c).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.Bz.forChild([{path:"",component:U}]),v.Bz]}),c})();var J=l(6760),N=l(1480),P=l(3965),w=l(9663),Q=l(8062),Y=l(4055),B=l(6218),j=l(5359),E=l(7680);let W=(()=>{var n;class c{}return(n=c).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[g.ez,g.YP],imports:[m.JH,_.EV,u.ez,s.u5,s.UX,z,p.WN,J._8,N.Gg,E.L,P.kW,w.zz,L.L$,Q.XH,Y.q4,B.A,D.j,j.x]}),c})()},5359:(I,b,l)=>{l.d(b,{i:()=>g,x:()=>e});var u=l(1180),s=l(4769),v=l(6814);const f=["*"];let g=(()=>{var h;class m{constructor(){(0,u.Z)(this,"style",void 0),(0,u.Z)(this,"styleClass",void 0),(0,u.Z)(this,"layout","horizontal"),(0,u.Z)(this,"type","solid"),(0,u.Z)(this,"align",void 0)}containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}}return h=m,(0,u.Z)(m,"\u0275fac",function(p){return new(p||h)}),(0,u.Z)(m,"\u0275cmp",s.Xpm({type:h,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},ngContentSelectors:f,decls:3,vars:4,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(p,M){1&p&&(s.F$t(),s.TgZ(0,"div",0)(1,"div",1),s.Hsn(2),s.qZA()()),2&p&&(s.Tol(M.styleClass),s.Q6J("ngClass",M.containerClass())("ngStyle",M.style))},dependencies:[v.mk,v.PC],styles:['.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}\n'],encapsulation:2,changeDetection:0})),m})(),e=(()=>{var h;class m{}return h=m,(0,u.Z)(m,"\u0275fac",function(p){return new(p||h)}),(0,u.Z)(m,"\u0275mod",s.oAB({type:h})),(0,u.Z)(m,"\u0275inj",s.cJS({imports:[v.ez]})),m})()}}]);