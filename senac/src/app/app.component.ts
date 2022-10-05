import { Component } from '@angular/core';
import { Estudante } from './estudante/estudante.model';

@Component({
  selector: 'Sec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudante:Estudante[] = [
  {nome: 'Ana Clara', aprovado: false, escola:'Senac'},
  {nome: 'Arian', aprovado: false, escola:'Senac'},
  {nome: 'Beatriz', aprovado: true, escola:'Senac'},
  {nome: 'Danilo', aprovado: false, escola:'Senac'},
  {nome: 'Felipe', aprovado: true, escola:'Senac'},
  {nome: 'Henrrique', aprovado: false, escola:'Senac'},
  {nome: 'João', aprovado: false, escola:'Senac'},
  {nome: 'Lucas', aprovado: true, escola:'Senac'},
  {nome: 'Matheus', aprovado: true, escola:'Senac'},
  {nome: 'Marcus', aprovado: true, escola:'Senac'},
  {nome: 'Nicolas', aprovado: false, escola:'Senac'},
  {nome: 'Vinicus', aprovado: true, escola:'Senac'}
  ]
  title = 'senac';
}
