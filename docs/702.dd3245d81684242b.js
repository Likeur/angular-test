"use strict";(self.webpackChunkAngular_TodoApp=self.webpackChunkAngular_TodoApp||[]).push([[702],{4702:(g,u,r)=>{r.r(u),r.d(u,{default:()=>c});var _=r(5861),e=r(4946),m=r(6814),p=r(6825),t=r(95),l=r(72),d=r(2013);let c=(()=>{class a{constructor(){this.ts=(0,e.f3M)(d.w),this.router=(0,e.f3M)(l.F0),this.registerForm=new t.cw({password:new t.NI("",[t.kI.required]),Email:new t.NI("",[t.kI.required,t.kI.email])})}onSubmit(){var o=this;return(0,_.Z)(function*(){const i={email:o.registerForm.value.Email,password:o.registerForm.value.password};localStorage.setItem("email",i.email),yield o.ts.newUser(i),o.router.navigateByUrl(".todos")})()}static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:14,vars:3,consts:[[3,"isRegisterBtnShown"],[1,"p-5","flex","justify-center","mt-10"],[1,"border","bg-white","shadow-sm","p-4","lg:p-10",3,"formGroup"],[1,"font-semibold","text-gray-900","text-xl"],["routerLink","/login",1,"text-blue-600","ml-2"],["type","email","placeholder","email","formControlName","Email",1,"p-2","outline-none","border","w-full","mt-5"],["placeholder","mot de passe","type","password","formControlName","password",1,"p-2","outline-none","border","w-full","mt-5"],["type","submit",1,"bg-blue-600","mt-5","cursor-pointer","disabled:bg-gray-400","w-full","p-2","text-white",3,"disabled","click"]],template:function(s,n){1&s&&(e._UZ(0,"app-toolbar",0),e.TgZ(1,"div",1)(2,"form",2)(3,"h1",3),e._uU(4,"Enregistrez-Vous"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"veuillez entrer un email et un mot de passe "),e.TgZ(7,"a",4),e._uU(8,"Se Connecter"),e.qZA()(),e._UZ(9,"input",5)(10,"br")(11,"input",6),e.TgZ(12,"button",7),e.NdJ("click",function(){return n.onSubmit()}),e._uU(13,"Inscription"),e.qZA()()()),2&s&&(e.Q6J("isRegisterBtnShown",!0),e.xp6(2),e.Q6J("formGroup",n.registerForm),e.xp6(10),e.Q6J("disabled",n.registerForm.invalid))},dependencies:[m.ez,p.n,t.UX,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,l.Bz,l.rH],encapsulation:2})}return a})()}}]);