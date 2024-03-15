import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Elit-Fasad',
    loadComponent: () =>
      import('./components/pages/home/home.component').then(
        (m) => m.HomeComponent,
      ),
    data: { animation: 'HomePage' },
  },
  {
    path: 'catalogue',
    title: 'Catalogue',
    loadComponent: () =>
      import('./components/pages/catalogue/catalogue.component').then(
        (m) => m.CatalogueComponent,
      ),
    data: { animation: 'CataloguePage' },
  },
  {
    path: 'gallery',
    title: 'Gallery',
    loadComponent: () =>
      import('./components/pages/gallery/gallery.component').then(
        (m) => m.GalleryComponent,
      ),
    data: { animation: 'GalleryPage' },
  },
  {
    path: 'about-us',
    title: 'About-Us',
    loadComponent: () =>
      import('./components/pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent,
      ),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () =>
      import('./components/pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    data: { animation: 'ContactPage' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    title: 'Page-Not-Found',
    loadComponent: () =>
      import('./components/pages/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
    data: { animation: 'PageNotFoundPage' },
  },
];
