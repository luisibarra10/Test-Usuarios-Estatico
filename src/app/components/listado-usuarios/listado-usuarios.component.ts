import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {



  usuarios = [{
    id : 1,
    nombre : "Carlos",
    apellido: "Sanchez",
    pais: "Colombia",
    profesion: "Programador Frontend Junior"
  },
  {
    id : 2,
    nombre : "Hector",
    apellido: "Perez",
    pais: "Argentina",
    profesion: "Programador Backend Senior"
  },
  {
    id : 3,
    nombre : "Felipe",
    apellido: "Zapata",
    pais: "Peru",
    profesion: "Director Marketing"
  },
  {
    id : 4,
    nombre : "Juan",
    apellido: "Alvarez",
    pais: "Colombia",
    profesion: "Google Developer Expert"
  },
  {
    id : 5,
    nombre : "Ricardo",
    apellido: "Trujillo",
    pais: "España",
    profesion: "Product Manager"
  },
  {
    id : 6,
    nombre : "Luis",
    apellido: "Mendez",
    pais: "Puerto Rico",
    profesion: "Programador Python"
  },
  {
    id : 7,
    nombre : "Ana",
    apellido: "Gonzalez",
    pais: "Mexico",
    profesion: "Software Developer"
  },
  {
    id : 8,
    nombre : "Jaime",
    apellido: "Estupiñan",
    pais: "Mexico",
    profesion: " FullStack Developer"
  },
  {
    id : 9,
    nombre : "Tomas",
    apellido: "Duran",
    pais: "Colombia",
    profesion: " Programador Angular"
  },
  {
    id : 10,
    nombre : "Camilo",
    apellido: "Rodriguez",
    pais: "Chile",
    profesion: "Dev Ops"
  },
]

constructor() { 
 
 
}

  ngOnInit(): void {
    
  }

  verMas(usuario: any){
     console.log(usuario);
    }
  }




