import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Elit-Fasad',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'catalogue',
    title: 'Catalogue',
    component: CatalogueComponent,
    data: { animation: 'CataloguePage' },
  },
  {
    path: 'gallery',
    title: 'Gallery',
    component: GalleryComponent,
    data: { animation: 'GalleryPage' },
  },
  {
    path: 'about-us',
    title: 'About-Us',
    component: AboutUsComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    title: 'Page-Not-Found',
    component: PageNotFoundComponent,
    data: { animation: 'PageNotFoundPage' },
  },
];
