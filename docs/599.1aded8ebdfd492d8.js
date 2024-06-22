"use strict";(self.webpackChunkangular_15_example=self.webpackChunkangular_15_example||[]).push([[599],{7329:(A,h,l)=>{l.r(h),l.d(h,{ParfumesModule:()=>w});var p=l(6895),d=l(7784),f=l(590),e=l(8256),s=l(9707),c=l(433);function _(n,r){1&n&&e._UZ(0,"span",12)}const u=function(n){return{"is-invalid":n}};let C=(()=>{class n{constructor(t,o,i,m,a){this.formBuilder=t,this.route=o,this.router=i,this.parfumService=m,this.alertService=a,this.submitting=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({name:["",c.kI.required],company:["",c.kI.required],type:["",c.kI.required],price:[0,c.kI.required],img:["",c.kI.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.parfumService.add(this.form.value).pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("Adding successful",{keepAfterRouteChange:!0}),this.submitting=!1},error:t=>{this.alertService.error(t),this.submitting=!1}}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.qu),e.Y36(d.gz),e.Y36(d.F0),e.Y36(s.IS),e.Y36(s.c9))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-parfume"]],decls:25,vars:18,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-5"],[1,"form-label"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["type","text","formControlName","company",1,"form-control",3,"ngClass"],["type","text","formControlName","type",1,"form-control",3,"ngClass"],["type","text","formControlName","img",1,"form-control",3,"ngClass"],["type","number","formControlName","price",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(t,o){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(1,"div",1)(2,"h1"),e._uU(3,"fil"),e.qZA()(),e.TgZ(4,"div",1)(5,"div",2)(6,"label",3),e._uU(7,"Parfume Name"),e.qZA(),e._UZ(8,"input",4),e.TgZ(9,"label",3),e._uU(10,"Company Name"),e.qZA(),e._UZ(11,"input",5),e.TgZ(12,"label",3),e._uU(13,"Type Name"),e.qZA(),e._UZ(14,"input",6),e.TgZ(15,"label",3),e._uU(16,"img"),e.qZA(),e._UZ(17,"input",7),e.TgZ(18,"label",3),e._uU(19,"price"),e.qZA(),e._UZ(20,"input",8),e.TgZ(21,"div",9)(22,"button",10),e.YNc(23,_,1,0,"span",11),e._uU(24," Register "),e.qZA()()()()()),2&t&&(e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("ngClass",e.VKq(8,u,o.submitted&&o.f.name.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(10,u,o.submitted&&o.f.company.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(12,u,o.submitted&&o.f.type.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(14,u,o.submitted&&o.f.img.errors)),e.xp6(3),e.Q6J("ngClass",e.VKq(16,u,o.submitted&&o.f.price.errors)),e.xp6(2),e.Q6J("disabled",o.submitting),e.xp6(1),e.Q6J("ngIf",o.submitting))},dependencies:[p.mk,p.O5,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u],encapsulation:2}),n})();function b(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"section",7)(1,"div",2)(2,"div",8)(3,"div",9)(4,"div",10)(5,"div",11)(6,"div",12),e._UZ(7,"img",13),e.qZA()(),e._UZ(8,"div",14),e.qZA()(),e.TgZ(9,"div",15)(10,"div",16)(11,"h3"),e._uU(12,"Project information"),e.qZA(),e.TgZ(13,"ul")(14,"li")(15,"strong"),e._uU(16,"Category"),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"li")(19,"strong"),e._uU(20,"Client"),e.qZA(),e._uU(21,": ASU Company"),e.qZA(),e.TgZ(22,"li")(23,"strong"),e._uU(24,"Project date"),e.qZA(),e._uU(25,": 01 March, 2020"),e.qZA(),e.TgZ(26,"li")(27,"strong"),e._uU(28,"Project URL"),e.qZA(),e._uU(29,": "),e.TgZ(30,"a",17),e._uU(31,"www.example.com"),e.qZA()()()(),e.TgZ(32,"div",18)(33,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addToCart(i.perfume))}),e._UZ(34,"i",20),e._uU(35," Add to Cart "),e.qZA()()()()()()}if(2&n){const t=e.oxw();e.xp6(7),e.Q6J("src","assets/img/perfume/"+t.perfume.img+".webp",e.LSH),e.xp6(10),e.hij(": ",t.perfume.name,"")}}function Z(n,r){if(1&n&&(e.TgZ(0,"div",2)(1,"h2",5),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.hij("",t.type," Perfumes")}}function y(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e.NdJ("click",function(){const m=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.showProfile(m.id))}),e._UZ(2,"img",8),e.TgZ(3,"div",9)(4,"p",10),e._uU(5),e.qZA()(),e.TgZ(6,"p",11)(7,"em"),e._uU(8),e.qZA()()()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Q6J("src","assets/img/perfume/"+t.img+".webp",e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(3),e.hij("",t.price,"$ ")}}function O(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"div",23),e._UZ(2,"img",24),e.qZA(),e.TgZ(3,"div",25)(4,"div",5),e._uU(5),e.qZA(),e.TgZ(6,"div",5)(7,"b"),e._uU(8),e.qZA()(),e.TgZ(9,"div",26),e._uU(10),e.qZA(),e.TgZ(11,"div",5),e._uU(12),e.qZA()(),e.TgZ(13,"div",27)(14,"input",28),e.NdJ("click",function(){const m=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.removeFromCart(m))}),e.qZA(),e.TgZ(15,"input",29),e.NdJ("click",function(){const m=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.increaseQuantity(m))}),e.qZA()()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Q6J("src","assets/img/perfume/"+t.img+".webp",e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(3),e.hij("$ ",t.price,""),e.xp6(2),e.Oqu(t.company),e.xp6(2),e.hij("Qty:",t.quantity,"")}}const x=[{path:"",component:(()=>{class n{constructor(t){this.parfumeService=t}ngOnInit(){this.getAllParfumes(),console.log(this.getAllParfumes())}getAllParfumes(){this.parfumeService.getAll().pipe((0,f.P)()).subscribe(t=>this.parfumes=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.IS))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-parfumes"]],decls:1,vars:0,template:function(t,o){1&t&&e._UZ(0,"app-add-parfume")},dependencies:[C],encapsulation:2}),n})()},{path:"perfumeProfile/:id",component:(()=>{class n{constructor(t,o,i){this.parfumeService=t,this.cartService=o,this.route=i,this.dataEvent=new e.vpe}ngOnInit(){this.route.params.subscribe(t=>{this.parfumeService.getById(t.id).pipe((0,f.P)()).subscribe(i=>this.perfume=i)})}addToCart(t){this.cartService.addToCart(t),window.alert("added to cart")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.IS),e.Y36(s.Ni),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-perfume-profile"]],outputs:{dataEvent:"dataEvent"},decls:16,vars:1,consts:[["id","main"],[1,"breadcrumbs"],[1,"container"],[1,"d-flex","justify-content-between","align-items-center"],["href","index.html"],["href","portfolio.html"],["id","portfolio-details","class","portfolio-details",4,"ngIf"],["id","portfolio-details",1,"portfolio-details"],[1,"row","gy-4"],[1,"col-lg-8"],[1,"portfolio-details-slider","swiper"],[1,"swiper-wrapper","align-items-center"],[1,"swiper-slide"],["alt","",3,"src"],[1,"swiper-pagination"],[1,"col-lg-4"],[1,"portfolio-info"],["href","#"],[1,"portfolio-description"],["type","button",1,"btn","btn-primary",3,"click"],[1,"bi","bi-cart"]],template:function(t,o){1&t&&(e.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2"),e._uU(5,"Portfolio Details"),e.qZA(),e.TgZ(6,"ol")(7,"li")(8,"a",4),e._uU(9,"Home"),e.qZA()(),e.TgZ(10,"li")(11,"a",5),e._uU(12,"Portfolio"),e.qZA()(),e.TgZ(13,"li"),e._uU(14,"Portfolio Details"),e.qZA()()()()(),e.YNc(15,b,36,2,"section",6),e.qZA()),2&t&&(e.xp6(15),e.Q6J("ngIf",o.perfume))},dependencies:[p.O5]}),n})()},{path:"perfumeType/:type",component:(()=>{class n{constructor(t,o,i){this.parfumeService=t,this.route=o,this.router=i}ngOnInit(){this.route.params.subscribe(t=>{const o=t.type;this.type=o,this.parfumeService.getByType(o).pipe((0,f.P)()).subscribe(i=>this.perfume=i)})}showProfile(t){this.router.navigate(["Parfumes/perfumeProfile",t])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.IS),e.Y36(d.gz),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-show-type"]],decls:5,vars:2,consts:[["id","about",1,"about"],["class","container",4,"ngIf"],[1,"container"],[1,"row"],["class","col-6 col-md-4 col-lg-3 mb-4",4,"ngFor","ngForOf"],[2,"text-align","center","font-family","cursive","color","#8cac6c","text-shadow","5px 4px 3px #c0c8b9"],[1,"col-6","col-md-4","col-lg-3","mb-4"],[1,"card",3,"click"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-text"],[1,"card-price"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0),e.YNc(1,Z,3,1,"div",1),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,y,9,3,"div",4),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("ngIf",o.perfume),e.xp6(3),e.Q6J("ngForOf",o.perfume))},dependencies:[p.sg,p.O5],styles:[".card[_ngcontent-%COMP%]{cursor:pointer}.card-img-top[_ngcontent-%COMP%]{object-fit:cover}.card-body[_ngcontent-%COMP%]{flex:1 1 auto;padding:.5rem}.card-text[_ngcontent-%COMP%]{margin:0;color:#284a24}.card-price[_ngcontent-%COMP%]{color:#59a450;margin:0;padding:0 0 2px 6px;font-weight:700}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.row[_ngcontent-%COMP%] > div[class*=col-][_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]:hover{transform:scale(1.01)}@media (min-width: 576px){.card-img-top[_ngcontent-%COMP%]{height:50vw}}@media (min-width: 768px){.card-img-top[_ngcontent-%COMP%]{height:30vw}}@media (min-width: 992px){.card-img-top[_ngcontent-%COMP%]{height:20vw}}@media (min-width: 1200px){.card-img-top[_ngcontent-%COMP%]{height:20vw}}"]}),n})()},{path:"charge",component:(()=>{class n{constructor(t,o,i){this.paymentService=t,this.cartService=o,this.account=i}ngOnInit(){this.initializeStripe(),this.cartService.getCartObservable().subscribe(t=>{this.cart=t}),this.cart=this.cartService.getCart()}getCustomerId(){return this.account.accountValue?.id}getCustomerEmail(){return this.account.accountValue?.email}getbilling_details(){return{name:this.account.accountValue?.firstName,address:{line1:"",city:"",state:"",postal_code:"",country:""},email:this.account.accountValue?.email,phone:this.account.accountValue?.role}}initializeStripe(){this.stripe=Stripe("pk_test_51OS2RvH1jy8FFcmKjLHUSxgiIgq77LfDGpAxdhlYz0Gpt8gvwE8dT8mi4To5VT3Tu4aaj0oTxr4eue9XppU9B3Lb00EhWrkDIm");const t=this.stripe.elements();this.card=t.create("card"),this.card.mount("#card-element")}onSubmit(t,o,i,m){this.stripe.createToken(this.card).then(a=>{a.error?console.error(a.error):this.paymentService.processPayment(a.token.id,t,o,i,m).subscribe(g=>{g.success?(alert("Payment successful!! you will receive an email"),console.log("Payment successful:",g.charge)):console.error("Payment failed:",g.error)},g=>{console.error("HTTP Error:",g)})})}itemCount(){return this.cartService.getCartItemCount()}removeFromCart(t){this.cartService.removeFromCart(t),this.cart=this.cartService.getCart()}clearCart(){this.cartService.clearCart(),this.cart=[]}increaseQuantity(t){this.cartService.increaseQuantity(t)}isEmpty(){return 0===this.cartService.getCart().length}totalPrice(){return this.cartService.getTotalPrice(this.cartService.getCart())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.te),e.Y36(s.Ni),e.Y36(s.BR))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-payment"]],decls:59,vars:4,consts:[[1,"card"],[1,"card-top","border-bottom","text-center"],["href","#"],["id","logo"],[1,"card-body"],[1,"row"],[1,"col-md-7"],[1,"left","border"],[1,"header"],[1,"icons"],["src","https://img.icons8.com/color/48/000000/visa.png"],["src","https://img.icons8.com/color/48/000000/mastercard-logo.png"],["src","https://img.icons8.com/color/48/000000/maestro.png"],["id","card-element"],[1,"col-md-5"],[1,"right","border"],["class","row item",4,"ngFor","ngForOf"],[1,"row","lower"],[1,"col","text-left"],[1,"col","text-right"],[1,"btn",3,"click"],[1,"text-muted","text-center"],[1,"row","item"],[1,"col-4","align-self-center"],[1,"img-fluid",3,"src"],[1,"col-8"],[1,"row","text-muted"],[1,"w-auto","justify-content-end","align-items-center"],["type","button","value","-","data-field","quantity",1,"button-minus","border","rounded-circle","icon-shape","icon-sm",3,"click"],["type","button","value","+","data-field","quantity",1,"button-plus","border","rounded-circle","icon-shape","icon-sm",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._uU(3," Back to shop"),e.qZA(),e._UZ(4,"span",3),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",5)(10,"span",8),e._uU(11,"Payment"),e.qZA(),e.TgZ(12,"div",9),e._UZ(13,"img",10)(14,"img",11)(15,"img",12),e.qZA()(),e.TgZ(16,"form")(17,"h6")(18,"strong"),e._uU(19,"for test:"),e.qZA()(),e.TgZ(20,"p")(21,"strong"),e._uU(22,"Visa:"),e.qZA(),e._uU(23," 4242 4242 4242 4242"),e.qZA(),e.TgZ(24,"p")(25,"strong"),e._uU(26,"MasterCard:"),e.qZA(),e._uU(27," 5555 5555 5555 4444"),e.qZA(),e._UZ(28,"div",13),e.qZA()()(),e.TgZ(29,"div",14)(30,"div",15)(31,"div",8),e._uU(32,"Order Summary"),e.qZA(),e.TgZ(33,"p"),e._uU(34),e.qZA(),e.YNc(35,O,16,5,"div",16),e._UZ(36,"hr"),e.TgZ(37,"div",17)(38,"div",18),e._uU(39,"Subtotal"),e.qZA(),e.TgZ(40,"div",19),e._uU(41),e.qZA()(),e.TgZ(42,"div",17)(43,"div",18),e._uU(44,"Delivery"),e.qZA(),e.TgZ(45,"div",19),e._uU(46,"Free"),e.qZA()(),e.TgZ(47,"div",17)(48,"div",18)(49,"b"),e._uU(50,"Total to pay"),e.qZA()(),e.TgZ(51,"div",19)(52,"b"),e._uU(53),e.qZA()()(),e.TgZ(54,"button",20),e.NdJ("click",function(){return o.onSubmit(o.totalPrice(),o.getCustomerId(),o.getCustomerEmail(),o.getbilling_details())}),e._uU(55,"Place order"),e.qZA(),e.TgZ(56,"p",21),e._uU(57,"Complimentary Shipping & Returns"),e.qZA()()()()(),e._UZ(58,"div"),e.qZA()),2&t&&(e.xp6(34),e.hij("",o.itemCount()," items"),e.xp6(1),e.Q6J("ngForOf",o.cart),e.xp6(6),e.hij("$ ",o.totalPrice(),""),e.xp6(12),e.hij("$ ",o.totalPrice(),""))},dependencies:[p.sg,c._Y,c.JL,c.F],styles:["body[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;background-color:#002;font-size:.8rem}.card[_ngcontent-%COMP%]{margin:2vh}.card-top[_ngcontent-%COMP%]{padding:.7rem 5rem}.card-top[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;margin-top:.7rem}#logo[_ngcontent-%COMP%]{font-family:Dancing Script;font-weight:700;font-size:1.6rem}.card-body[_ngcontent-%COMP%]{padding:0 5rem 5rem;background-color:#58a45011;background-size:cover;background-repeat:no-repeat}@media (max-width:768px){.card-body[_ngcontent-%COMP%]{padding:0 1rem 1rem;background-color:#58a45011;background-size:cover;background-repeat:no-repeat}.card-top[_ngcontent-%COMP%]{padding:.7rem 1rem}}.row[_ngcontent-%COMP%]{margin:0}.upper[_ngcontent-%COMP%]{padding:1rem 0;justify-content:space-evenly}#three[_ngcontent-%COMP%]{border-radius:1rem;width:22px;height:22px;margin-right:3px;border:1px solid blue;text-align:center;display:inline-block}#payment[_ngcontent-%COMP%]{margin:0;color:#00f}.icons[_ngcontent-%COMP%]{margin-left:auto}form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b3b3b3}form[_ngcontent-%COMP%]{padding:2vh 0}input[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.137);padding:1vh;margin-bottom:4vh;outline:none;width:100%;background-color:#f7f7f7}input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:transparent}.header[_ngcontent-%COMP%]{font-size:1.5rem}.left[_ngcontent-%COMP%]{background-color:#fff;padding:2vh}.left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2rem}.left[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]{padding-left:0}.right[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:.3rem 0}.right[_ngcontent-%COMP%]{background-color:#fff;padding:2vh}.col-8[_ngcontent-%COMP%]{padding:0 1vh}.lower[_ngcontent-%COMP%]{line-height:2}.btn[_ngcontent-%COMP%]{background-color:#1704bd;border-color:#1704bd;color:#fff;width:100%;font-size:.7rem;margin:4vh 0 1.5vh;padding:1.5vh;border-radius:0}.btn[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none;color:#fff;-webkit-box-shadow:none;transition:none}.btn[_ngcontent-%COMP%]:hover{color:#fff}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{color:#000;text-decoration:none}input[type=checkbox][_ngcontent-%COMP%]{width:unset;margin-bottom:unset}#cvv[_ngcontent-%COMP%]{background-image:linear-gradient(to left,rgba(255,255,255,.575),rgba(255,255,255,.541)),url(https://img.icons8.com/material-outlined/24/000000/help.png);background-repeat:no-repeat;background-position-x:95%;background-position-y:center}.badge[_ngcontent-%COMP%]{padding-left:9px;padding-right:9px;border-radius:9px}.label-warning[href][_ngcontent-%COMP%], .badge-warning[href][_ngcontent-%COMP%]{background-color:#c67605}#lblCartCount[_ngcontent-%COMP%]{font-size:12px;background:#ff0000;color:#fff;padding:0 5px;vertical-align:top;margin-left:-10px}.modal[_ngcontent-%COMP%]{width:32rem}.container[_ngcontent-%COMP%]{padding:2rem 0rem}@media (min-width: 576px){.modal-dialog[_ngcontent-%COMP%]{max-width:400px}.modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{padding:1rem}}.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{margin-top:-1.5rem}.form-title[_ngcontent-%COMP%]{margin:-2rem 0rem 2rem}.btn-round[_ngcontent-%COMP%]{border-radius:3rem}.delimiter[_ngcontent-%COMP%]{padding:1rem}.social-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:0 .5rem 1rem}.signup-section[_ngcontent-%COMP%]{padding:.3rem 0rem}icon-shape[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;text-align:center;vertical-align:middle}.icon-sm[_ngcontent-%COMP%]{width:2rem;height:2rem}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(x),d.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,M,c.UX]}),n})()}}]);