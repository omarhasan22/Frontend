"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[418],{418:(A,f,i)=>{i.r(f),i.d(f,{ParfumesModule:()=>v});var u=i(6895),m=i(7784),p=i(590),e=i(8256),a=i(6820),s=i(433);function d(t,o){1&t&&e._UZ(0,"span",10)}const l=function(t){return{"is-invalid":t}};let g=(()=>{class t{constructor(r,n,c,C,P){this.formBuilder=r,this.route=n,this.router=c,this.parfumService=C,this.alertService=P,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({name:["",s.kI.required],company:["",s.kI.required],img:["",s.kI.required]})}get f(){return this.form.controls}onSubmit(){console.log(this.form.value),this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.parfumService.add(this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Registration successful, please check your email for verification instructions",{keepAfterRouteChange:!0}),this.submitting=!1},error:r=>{this.alertService.error(r),this.submitting=!1}}))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.qu),e.Y36(m.gz),e.Y36(m.F0),e.Y36(a.IS),e.Y36(a.c9))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-add-parfume"]],decls:19,vars:12,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-5"],[1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["type","text","formControlName","company",1,"form-control",3,"ngClass"],["type","text","formControlName","img",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(r,n){1&r&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(1,"div",1)(2,"h1"),e._uU(3,"fil"),e.qZA()(),e.TgZ(4,"div",1)(5,"div",2)(6,"label",3),e._uU(7,"Parfume Name"),e.qZA(),e._UZ(8,"input",4),e.TgZ(9,"label",3),e._uU(10,"Company Name"),e.qZA(),e._UZ(11,"input",5),e.TgZ(12,"label",3),e._uU(13,"img"),e.qZA(),e._UZ(14,"input",6),e.TgZ(15,"div",7)(16,"button",8),e.YNc(17,d,1,0,"span",9),e._uU(18," Register "),e.qZA()()()()()),2&r&&(e.Q6J("formGroup",n.form),e.xp6(8),e.Q6J("ngClass",e.VKq(6,l,n.submitted&&n.f.name.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(8,l,n.submitted&&n.f.company.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(10,l,n.submitted&&n.f.img.errors)),e.xp6(2),e.Q6J("disabled",n.submitting),e.xp6(1),e.Q6J("ngIf",n.submitting))},dependencies:[u.mk,u.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],encapsulation:2}),t})();const h=[{path:"",component:(()=>{class t{constructor(r){this.parfumeService=r}ngOnInit(){this.getAllParfumes(),console.log(this.getAllParfumes())}getAllParfumes(){this.parfumeService.getAll().pipe((0,p.P)()).subscribe(r=>this.parfumes=r)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(a.IS))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-parfumes"]],decls:1,vars:0,template:function(r,n){1&r&&e._UZ(0,"app-add-parfume")},dependencies:[g],encapsulation:2}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(h),m.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,b,s.UX]}),t})()}}]);