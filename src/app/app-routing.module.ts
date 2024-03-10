import { AuthService } from 'src/app/core/services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[authGuard],
    
    loadComponent: () => import('./layouts/blanck-layout/blanck-layout.component').then((m) => m.BlanckLayoutComponent),
    children: [
    {path:'' ,redirectTo:'home' ,pathMatch:'full'},
      { path: 'home', loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent), title: 'Home' },
      { path: 'cart', loadComponent: () => import('./components/cart/cart.component').then((m) => m.CartComponent), title: 'Cart' },
      { path: 'productdetails/:id', loadComponent: () => import('./components/details/details.component').then((m) => m.DetailsComponent), title: 'productdtailss' },
      { path: 'checkout/:id', loadComponent: () => import('./components/checkout/checkout.component').then((m) => m.CheckoutComponent), title: 'checkout' },
     { path: 'whishlist', loadComponent: () => import('./components/whishlist/whishlist.component').then((m) => m.WhishlistComponent), title: 'whishlist' },
      { path: 'categories', loadComponent: () => import('./components/categories/categories.component').then((m) => m.CategoriesComponent), title: 'Categories' },
  { path: 'forgetpassword', loadComponent: () => import('./components/forgetpassword/forgetpassword.component').then((m) => m.ForgetpasswordComponent), title: 'Forget Password' },
      { path: 'allorders', loadComponent: () => import('./components/allorders/allorders.component').then((m) => m.AllordersComponent), title: 'Allorders' },
      
      { path: 'brands', loadComponent: () => import('./components/brands/brands.component').then((m) => m.BrandsComponent), title: 'Brands' },
       {path:'products' ,loadComponent:()=>import('./components/products/products.component').then( (m)=>m.ProductsComponent),title:'Products'},
]

  },
  
  {
    path: '', loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
    children: [
      {path:'',redirectTo:'login', pathMatch:'full'},
      { path: 'login', loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent), title: 'Login' },
      { path: 'register', loadComponent: () => import('./components/register/register.component').then((m) => m.RegisterComponent), title: 'Register' },
       { path: 'forget', loadComponent: () => import('./components/forgetpassword/forgetpassword.component').then((m) => m.ForgetpasswordComponent), title: 'Forget Password' },
]

  },
  {
path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((m)=>m.NotfoundComponent),title:'NotFoutnd'

  }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
