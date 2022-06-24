import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from './categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private urlAPI = 'https://music-api-2022.herokuapp.com/categories'

  constructor(private httpClient: HttpClient) { }

  getTodasCategorias(): Observable<categorias[]>{
    return this.httpClient.get<categorias[]>(this.urlAPI)
  }

  postNovaCategoria(novaCategoria: categorias): void{
    this.httpClient.post(this.urlAPI, novaCategoria)
    alert("Categoria " + novaCategoria.name + " Cadastrada com sucesso!")
  }

}
