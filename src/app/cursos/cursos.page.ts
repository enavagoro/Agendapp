import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  cursos = [
    {
      Titulo: '[Shingo.] #AltAccGirl',
      autor: 'Artists: Mafuyu Hemp',
      img:
        'https://cdn.hentai.cafe/manga/content/comics/mafuyu-hemp-spring-storm-memento_5e479342ba823/1-0_5e4793477aeeb/02.jpg',
      number: 1,
      paginas: [
        'https://cdn.hentai.cafe/manga/content/comics/shingo-altaccgirl_5d7bd363b081b/1-0_5d7bd3685ab3f/01.jpg',
        'https://cdn.hentai.cafe/manga/content/comics/shingo-altaccgirl_5d7bd363b081b/1-0_5d7bd3685ab3f/02.jpg',
        'https://cdn.hentai.cafe/manga/content/comics/shingo-altaccgirl_5d7bd363b081b/1-0_5d7bd3685ab3f/03.jpg',
        'https://cdn.hentai.cafe/manga/content/comics/shingo-altaccgirl_5d7bd363b081b/1-0_5d7bd3685ab3f/04.jpg',
        'https://cdn.hentai.cafe/manga/content/comics/shingo-altaccgirl_5d7bd363b081b/1-0_5d7bd3685ab3f/05.jpg'
      ]
    }
  ];

  constructor() { 
    
  }


  ngOnInit() {
  }
  
  pasoCursos(pagina){
    console.log(pagina);
  }
}

