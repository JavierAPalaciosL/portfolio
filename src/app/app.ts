import {AfterViewInit, Component, signal, WritableSignal} from '@angular/core';
import Project from './core/Project';
import ProjectSelected from './core/ProjectSelected';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('Javier Palacios');
  public projects: Project[];
  isVisible: WritableSignal<boolean> = signal(false);
  projectSelected: WritableSignal<Project> = signal({title: "A", image: "A", description: "A", xp: "", carrusel: [""], mainCharacteristics: [""],  stackTecnologies: [""], icons: [""],});

  constructor() {
    this.projects = [
      {
        title: "RadioWeatherAPI",
        description: "Aplicación web construida con arquitectura hexagonal (puertos y adaptadores) " +
          "que orquesta de manera inteligente múltiples fuentes de datos: consulta la API de OpenWeather" +
          " para mostrar el clima de cualquier ubicación y, cuando existen emisoras en el país seleccionado," +
          " despliega al instante la lista de estaciones de RadioBrowser correspondientes. Para maximizar " +
          "velocidad y autonomía, integra localmente más de 150 000 registros importados vía pgAdmin/psql, " +
          "lo que garantiza respuestas rápidas sin saturar las APIs externas. El resultado es una plataforma" +
          " ágil, coherente y siempre disponible, diseñada para ofrecer al usuario una experiencia fluida y " +
          "sin interrupciones.",
        image: "radioweatherapi/img_1.png",
        mainCharacteristics: ["Integración con API de radio broswer","Integración con API de openweather"],
        xp: "Esta aplicación me enseño el flujo de autenticación OAuth2.0",
        carrusel: ["radioweatherapi/img.png", "radioweatherapi/img_1.png", "radioweatherapi/img_2.png", "radioweatherapi/img_3.png"],
        stackTecnologies: [],
        icons: ["icons/oauth.svg"],

      },
      {
      title: "Java swing 2D y estructuras de datos",
      description: "Descubre en esta aplicación de escritorio Java cómo los principios de la inteligencia artificial cobran vida al encontrar la ruta más corta: cada nodo, cada arista y toda la lógica del grafo han sido programados desde cero, sin recurrir a ArrayList ni librerías externas. Observa paso a paso el funcionamiento del algoritmo de Dijkstra, optimizado y transparente, y aprende de su mecánica interna mientras experimentas con tus propios grafos. ¡Una herramienta ligera, educativa y  handcrafted para dominar caminos y estructuras de datos!\n",
      image: "pacman/pacmanI1.png",
        mainCharacteristics: ["",""],
      xp: "Esta aplicación me ayudo con el dominio de estructuras de datos",
      carrusel: ["pacman.png","pacman/pacmanI1.png"],
        stackTecnologies: [],
        icons: [],

      },
      ]
  }

  ngAfterViewInit(): void {

    console.log("App Component loaded");

    }


  public onToogle($event: boolean): void {
    console.log('onToogle', $event.valueOf());

    document.documentElement.setAttribute('data-theme', $event ? 'dark' : 'light');

  }

  onVisible($event: ProjectSelected) {
    console.log('onVisible', $event.writableSignal().valueOf());
    this.isVisible = $event.writableSignal;
    this.projectSelected.set($event.projectSelect);
  }

  closeElement() {
    this.isVisible.set(false);
  }

  prev(carousel: HTMLElement) {
    const first = carousel.querySelector<HTMLElement>('.carousel-item');
    const gap   = parseInt(getComputedStyle(carousel).gap || '0', 10);
    const w     = first ? first.offsetWidth + gap : 0;
    carousel.scrollBy({ left: -w, behavior: 'smooth' });
  }

  next(carousel: HTMLElement) {
    const first = carousel.querySelector<HTMLElement>('.carousel-item');
    const gap   = parseInt(getComputedStyle(carousel).gap || '0', 10);
    const w     = first ? first.offsetWidth + gap : 0;
    carousel.scrollBy({ left:  w, behavior: 'smooth' });
  }

}
