import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { productcomponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SinglepageComponent } from './singlepage/singlepage.component';

export const routes: Routes = [
{path:"",component:HomeComponent},
{path:'product',component:productcomponent},
{path:'contact',component:ContactComponent},
{path:'product/:id',component:SinglepageComponent}
];