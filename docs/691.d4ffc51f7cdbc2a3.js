"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[691],{9691:(h,r,c)=>{c.r(r),c.d(r,{DetailsComponent:()=>v});var n=c(6814),a=c(756),t=c(4769),l=c(1120),u=c(1132),d=c(6286),p=c(2425);function g(o,_){if(1&o&&t._UZ(0,"img",14),2&o){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function m(o,_){1&o&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",13),t.BQk())}function D(o,_){if(1&o){const e=t.EpF();t.TgZ(0,"section")(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,m,2,0,"ng-container",4),t.qZA()(),t.TgZ(5,"div",5)(6,"h3",6),t._uU(7),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"h4",8),t._uU(11),t.qZA(),t.TgZ(12,"div",9)(13,"span",10),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"div"),t._UZ(17,"i",11),t.TgZ(18,"span",7),t._uU(19),t.qZA()()(),t.TgZ(20,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addCart(i.productDetails._id))}),t._uU(21," Add To Cart "),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productSlider),t.xp6(1),t.Q6J("ngForOf",e.productDetails.images),t.xp6(3),t.Oqu(e.productDetails.title),t.xp6(2),t.Oqu(e.productDetails.description),t.xp6(2),t.Oqu(e.productDetails.category.name),t.xp6(3),t.Oqu(t.xi3(15,7,e.productDetails.price,"EGP")),t.xp6(5),t.Oqu(e.productDetails.ratingsAverage)}}let v=(()=>{class o{constructor(e,s,i,f){this._ActivatedRoute=e,this._ProductsService=s,this._CartService=i,this._ToastrService=f,this.productDetails=null,this.productSlider={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id"),console.log(this.productId)}}),this._ProductsService.getProductDetails(this.productId).subscribe({next:e=>{console.log(e.data),this.productDetails=e.data}})}addCart(e){this._CartService.addToCart(e).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message)},error:s=>{console.log(s)}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(l.gz),t.Y36(u.s),t.Y36(d.N),t.Y36(p._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row","w-75","align-items-center","mx-auto"],[1,"col-md-4"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-8"],[1,"h5"],[1,"text-muted"],[1,"h6"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-main"],[1,"fas","fa-star","rating-color"],[1,"btn-main","w-100","my-3",3,"click"],["carouselSlide",""],[3,"src"]],template:function(s,i){1&s&&t.YNc(0,D,22,10,"section",0),2&s&&t.Q6J("ngIf",i.productDetails)},dependencies:[n.ez,n.sg,n.O5,n.H9,a.bB,a.Fy,a.Mp]})}return o})()}}]);