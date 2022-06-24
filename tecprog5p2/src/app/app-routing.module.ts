import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { MusicasComponent } from './musicas/musicas.component';

const routes: Routes = [
  {path: '', component: CategoriasComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'musicas', component: MusicasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
