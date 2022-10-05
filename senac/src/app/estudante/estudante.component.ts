import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from './estudante.model';

@Component({
  selector: 'Sec-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  @Input() estudante!: Estudante;
  
  constructor() { }

  //alunos = {nome: "joão", aprovado: true}

  /*@Input() nome: string = 'João Silva';
  @Input() aprovado: boolean = true;*/
  

  ngOnInit(): void {
  }

}
