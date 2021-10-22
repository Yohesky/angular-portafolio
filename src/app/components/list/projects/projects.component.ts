import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any[] = [
    {
      desc: 'App que consume 2 apis, una publica para obtener los datos actualizados y una api privada realizada por mi persona para guardar ligas, equipos, jugadores favoritos, ademas de contar con login con auth0, proteccion de rutas, interceptores y lazy loading.',
      image: 'https://i.imgur.com/0YnHZjz.jpg',
      link: 'https://futbol-app-yoheskyjpp.vercel.app/'
    },
    {
      desc: 'Aplicación de tareas con stack MERN, se crean proyectos y a cada proyecto se le puede ir agregando sus propias tareas, con posibilidad de eliminar, editar, crear tarea o marcar como incompleta o completa. Ademas de proteccion de rutas, registro y login.',
      image: 'https://i.imgur.com/LuCuTwF.png',
      link: 'https://naughty-mcclintock-cc7c54.netlify.app/'
    },
    {
      desc: 'Sencilla pagina web full page con un estilo diferente llevada a cabo con las tecnologias HTML, CSS, Javascript y Bootstrap como framework css.',
      image: 'https://i.imgur.com/ktZj4TJ.jpg',
      link: 'http://yohesky.epizy.com/fullpage/index.html'
    },
    {
      desc: 'Landing Page realizada totalmente con HTML,CSS, JS sin frameworks de ningun tipo, implementando CSS grid y flexbox, totalmente responsive.',
      image: 'https://i.imgur.com/wyuo5Qb.jpg',
      link: 'https://distracted-poitras-917ece.netlify.app/'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
