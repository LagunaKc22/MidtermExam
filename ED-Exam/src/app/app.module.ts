import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {RouterModule, Routes} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes =[
  {path: "main", component:MainComponent,
    children:[
      {path: "home", component: HomeComponent},
      {path: "profile", component: ProfileComponent},
      {path: "gallery", component: GalleryComponent},
      {path: "contacts", component: ContactsComponent}
    ]
  },
  {path:"**", redirectTo:"main"}
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ProfileComponent,
    GalleryComponent,
    ContactsComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
