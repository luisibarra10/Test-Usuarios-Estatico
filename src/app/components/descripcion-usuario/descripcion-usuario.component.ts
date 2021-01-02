import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-descripcion-usuario',
  templateUrl: './descripcion-usuario.component.html',
  styleUrls: ['./descripcion-usuario.component.css']
})
export class DescripcionUsuarioComponent implements OnInit {
  
  seleccionado: number;

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
  
  constructor(
    private route: ActivatedRoute,
    private router: Router){ 
    this.seleccionado = +route.snapshot.paramMap.get('id')!;
   this.mostrar();
  }

  ngOnInit(): void {
  }

  mostrar(){
    if (this.seleccionado > this.usuarios.length) {
      this.router.navigate(['posts/id/error']);
    }
  }

}
