"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[879],{8879:(q,g,s)=>{s.r(g),s.d(g,{ParfumesModule:()=>h});var u=s(6895),a=s(7784),p=s(590),e=s(8256),l=s(6820),n=s(433);function c(i,r){1&i&&e._UZ(0,"span",11)}const m=function(i){return{"is-invalid":i}};let Z=(()=>{class i{constructor(t,o,f,T,b){this.formBuilder=t,this.route=o,this.router=f,this.parfumService=T,this.alertService=b,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({name:["",n.kI.required],company:["",n.kI.required],type:["",n.kI.required],img:["",n.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.parfumService.add(this.form.value).pipe((0,p.P)()).subscribe({next:()=>{this.alertService.success("Adding successful",{keepAfterRouteChange:!0}),this.submitting=!1},error:t=>{this.alertService.error(t),this.submitting=!1}}))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.qu),e.Y36(a.gz),e.Y36(a.F0),e.Y36(l.IS),e.Y36(l.c9))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-parfume"]],decls:22,vars:15,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-5"],[1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["type","text","formControlName","company",1,"form-control",3,"ngClass"],["type","text","formControlName","type",1,"form-control",3,"ngClass"],["type","text","formControlName","img",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(1,"div",1)(2,"h1"),e._uU(3,"fil"),e.qZA()(),e.TgZ(4,"div",1)(5,"div",2)(6,"label",3),e._uU(7,"Parfume Name"),e.qZA(),e._UZ(8,"input",4),e.TgZ(9,"label",3),e._uU(10,"Company Name"),e.qZA(),e._UZ(11,"input",5),e.TgZ(12,"label",3),e._uU(13,"Type Name"),e.qZA(),e._UZ(14,"input",6),e.TgZ(15,"label",3),e._uU(16,"img"),e.qZA(),e._UZ(17,"input",7),e.TgZ(18,"div",8)(19,"button",9),e.YNc(20,c,1,0,"span",10),e._uU(21," Register "),e.qZA()()()()()),2&t&&(e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("ngClass",e.VKq(7,m,o.submitted&&o.f.name.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(9,m,o.submitted&&o.f.company.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(11,m,o.submitted&&o.f.type.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(13,m,o.submitted&&o.f.img.errors)),e.xp6(2),e.Q6J("disabled",o.submitting),e.xp6(1),e.Q6J("ngIf",o.submitting))},dependencies:[u.mk,u.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u],encapsulation:2}),i})();function U(i,r){if(1&i&&(e.TgZ(0,"section",31)(1,"div",2)(2,"div",32)(3,"div",33)(4,"div",34)(5,"div",35)(6,"div",36),e._UZ(7,"img",37),e.qZA(),e.TgZ(8,"div",36),e._UZ(9,"img",38),e.qZA(),e.TgZ(10,"div",36),e._UZ(11,"img",39),e.qZA()(),e._UZ(12,"div",40),e.qZA()(),e.TgZ(13,"div",41)(14,"div",42)(15,"h3"),e._uU(16,"Project information"),e.qZA(),e.TgZ(17,"ul")(18,"li")(19,"strong"),e._uU(20,"Category"),e.qZA(),e._uU(21),e.qZA(),e.TgZ(22,"li")(23,"strong"),e._uU(24,"Client"),e.qZA(),e._uU(25,": ASU Company"),e.qZA(),e.TgZ(26,"li")(27,"strong"),e._uU(28,"Project date"),e.qZA(),e._uU(29,": 01 March, 2020"),e.qZA(),e.TgZ(30,"li")(31,"strong"),e._uU(32,"Project URL"),e.qZA(),e._uU(33,": "),e.TgZ(34,"a",13),e._uU(35,"www.example.com"),e.qZA()()()(),e.TgZ(36,"div",43)(37,"h2"),e._uU(38,"This is an example of portfolio detail"),e.qZA(),e.TgZ(39,"p"),e._uU(40," Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius. "),e.qZA()()()()()()),2&i){const t=e.oxw();e.xp6(21),e.hij(": ",t.perfume.name,"")}}const A=[{path:"",component:(()=>{class i{constructor(t){this.parfumeService=t}ngOnInit(){this.getAllParfumes(),console.log(this.getAllParfumes())}getAllParfumes(){this.parfumeService.getAll().pipe((0,p.P)()).subscribe(t=>this.parfumes=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.IS))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-parfumes"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"app-add-parfume")},dependencies:[Z],encapsulation:2}),i})()},{path:"perfumeProfile/:id",component:(()=>{class i{constructor(t,o){this.parfumeService=t,this.route=o}ngOnInit(){this.route.params.subscribe(t=>{this.parfumeService.getById(t.id).pipe((0,p.P)()).subscribe(f=>this.perfume=f)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.IS),e.Y36(a.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-perfume-profile"]],decls:116,vars:1,consts:[["id","main"],[1,"breadcrumbs"],[1,"container"],[1,"d-flex","justify-content-between","align-items-center"],["href","index.html"],["href","portfolio.html"],["id","portfolio-details","class","portfolio-details",4,"ngIf"],["id","footer"],[1,"footer-top"],[1,"row"],[1,"col-lg-3","col-md-6","footer-contact"],[1,"col-lg-3","col-md-6","footer-links"],[1,"bx","bx-chevron-right"],["href","#"],[1,"social-links","mt-3"],["href","#",1,"twitter"],[1,"bx","bxl-twitter"],["href","#",1,"facebook"],[1,"bx","bxl-facebook"],["href","#",1,"instagram"],[1,"bx","bxl-instagram"],["href","#",1,"google-plus"],[1,"bx","bxl-skype"],["href","#",1,"linkedin"],[1,"bx","bxl-linkedin"],[1,"container","py-4"],[1,"copyright"],[1,"credits"],["href","https://bootstrapmade.com/"],["href","#",1,"back-to-top","d-flex","align-items-center","justify-content-center"],[1,"bi","bi-arrow-up-short"],["id","portfolio-details",1,"portfolio-details"],[1,"row","gy-4"],[1,"col-lg-8"],[1,"portfolio-details-slider","swiper"],[1,"swiper-wrapper","align-items-center"],[1,"swiper-slide"],["src","assets/img/portfolio/portfolio-1.jpg","alt",""],["src","assets/img/portfolio/portfolio-2.jpg","alt",""],["src","assets/img/portfolio/portfolio-3.jpg","alt",""],[1,"swiper-pagination"],[1,"col-lg-4"],[1,"portfolio-info"],[1,"portfolio-description"]],template:function(t,o){1&t&&(e.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2"),e._uU(5,"Portfolio Details"),e.qZA(),e.TgZ(6,"ol")(7,"li")(8,"a",4),e._uU(9,"Home"),e.qZA()(),e.TgZ(10,"li")(11,"a",5),e._uU(12,"Portfolio"),e.qZA()(),e.TgZ(13,"li"),e._uU(14,"Portfolio Details"),e.qZA()()()()(),e.YNc(15,U,41,1,"section",6),e.qZA(),e.TgZ(16,"footer",7)(17,"div",8)(18,"div",2)(19,"div",9)(20,"div",10)(21,"h3"),e._uU(22,"Ninestars"),e.qZA(),e.TgZ(23,"p"),e._uU(24," A108 Adam Street "),e._UZ(25,"br"),e._uU(26," New York, NY 535022"),e._UZ(27,"br"),e._uU(28," United States "),e._UZ(29,"br")(30,"br"),e.TgZ(31,"strong"),e._uU(32,"Phone:"),e.qZA(),e._uU(33," +1 5589 55488 55"),e._UZ(34,"br"),e.TgZ(35,"strong"),e._uU(36,"Email:"),e.qZA(),e._uU(37," info@example.com"),e._UZ(38,"br"),e.qZA()(),e.TgZ(39,"div",11)(40,"h4"),e._uU(41,"Useful Links"),e.qZA(),e.TgZ(42,"ul")(43,"li"),e._UZ(44,"i",12),e.TgZ(45,"a",13),e._uU(46,"Home"),e.qZA()(),e.TgZ(47,"li"),e._UZ(48,"i",12),e.TgZ(49,"a",13),e._uU(50,"About us"),e.qZA()(),e.TgZ(51,"li"),e._UZ(52,"i",12),e.TgZ(53,"a",13),e._uU(54,"Services"),e.qZA()(),e.TgZ(55,"li"),e._UZ(56,"i",12),e.TgZ(57,"a",13),e._uU(58,"Terms of service"),e.qZA()(),e.TgZ(59,"li"),e._UZ(60,"i",12),e.TgZ(61,"a",13),e._uU(62,"Privacy policy"),e.qZA()()()(),e.TgZ(63,"div",11)(64,"h4"),e._uU(65,"Our Services"),e.qZA(),e.TgZ(66,"ul")(67,"li"),e._UZ(68,"i",12),e.TgZ(69,"a",13),e._uU(70,"Web Design"),e.qZA()(),e.TgZ(71,"li"),e._UZ(72,"i",12),e.TgZ(73,"a",13),e._uU(74,"Web Development"),e.qZA()(),e.TgZ(75,"li"),e._UZ(76,"i",12),e.TgZ(77,"a",13),e._uU(78,"Product Management"),e.qZA()(),e.TgZ(79,"li"),e._UZ(80,"i",12),e.TgZ(81,"a",13),e._uU(82,"Marketing"),e.qZA()(),e.TgZ(83,"li"),e._UZ(84,"i",12),e.TgZ(85,"a",13),e._uU(86,"Graphic Design"),e.qZA()()()(),e.TgZ(87,"div",11)(88,"h4"),e._uU(89,"Our Social Networks"),e.qZA(),e.TgZ(90,"p"),e._uU(91,"Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies"),e.qZA(),e.TgZ(92,"div",14)(93,"a",15),e._UZ(94,"i",16),e.qZA(),e.TgZ(95,"a",17),e._UZ(96,"i",18),e.qZA(),e.TgZ(97,"a",19),e._UZ(98,"i",20),e.qZA(),e.TgZ(99,"a",21),e._UZ(100,"i",22),e.qZA(),e.TgZ(101,"a",23),e._UZ(102,"i",24),e.qZA()()()()()(),e.TgZ(103,"div",25)(104,"div",26),e._uU(105," \xa9 Copyright "),e.TgZ(106,"strong")(107,"span"),e._uU(108,"Ninestars"),e.qZA()(),e._uU(109,". All Rights Reserved "),e.qZA(),e.TgZ(110,"div",27),e._uU(111," Designed by "),e.TgZ(112,"a",28),e._uU(113,"BootstrapMade"),e.qZA()()()(),e.TgZ(114,"a",29),e._UZ(115,"i",30),e.qZA()),2&t&&(e.xp6(15),e.Q6J("ngIf",o.perfume))},dependencies:[u.O5],encapsulation:2}),i})()}];let _=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(A),a.Bz]}),i})(),h=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,_,n.UX]}),i})()}}]);