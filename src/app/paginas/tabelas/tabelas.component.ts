import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  public produtos: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.produtos.push(
      {
        id: 1,
        nome: 'Banana',
        descricao: 'Banana Nanica',
        preco: 5.5
      }
    ),
    this.produtos.push(
      {
        id: 2,
        nome: 'Maça',
        descricao: 'Maça Pêra',
        preco: 8.10
      }
    )
  }
}
