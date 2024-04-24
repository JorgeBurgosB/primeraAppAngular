import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // HTML inline, solo si es muy simple
  //template: '<p>Aquí iría un empleado</p>',
  styleUrls: ['./empleado.component.css']
  // Estilos inline, si va a ser un css muy sencillo y asi ahorrarte un archivo
  //styles: ['p{background:red; color:white}'],
})
export class EmpleadoComponent implements OnInit {

  nombre:string = 'Jorge'
  apellido:string = 'Burgos'
  edad:number = 28
  // empresa:string = 'Eviden'

  // getEdad(){
  //   return this.edad
  // }

  // llamaEmpresa(value:string){
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
