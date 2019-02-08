import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { ProductsComponent } from './pages/posts/products/products.component';
import { ProductDetailsComponent } from './pages/posts/product-details/product-details.component';
import { NewPostComponent } from './create-post/new-post/new-post.component';
import { ProductFormComponent } from './create-post/product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {TimeAgoPipe} from 'time-ago-pipe';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LogoutComponent } from './pages/user/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    routingComponents,
    ProductsComponent,
    ProductDetailsComponent,
    NewPostComponent,
    ProductFormComponent,
    TimeAgoPipe,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkPCeqvo9YoQ0d-5YYMQwy-v80IhLcIQg',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
