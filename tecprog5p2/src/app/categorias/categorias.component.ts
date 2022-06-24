import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from './categorias';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listacategorias: categorias[] = []
  novaCategoria: categorias = {} as categorias

  constructor(private service: CategoriasService) { }

  ngOnInit(): void{
    this.loadData()
  }

  loadData(): void {
    this.service.getTodasCategorias().subscribe(itens =>
      this.listacategorias = itens
      )
    
  }

  saveData() {
    this.service.postNovaCategoria(this.novaCategoria)
    this.loadData()
  }

}
