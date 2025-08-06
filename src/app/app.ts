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
  projectSelected: WritableSignal<Project> = signal({title: "A", image: "A", description: "A", xp: "", carrusel: [""], mainCharacteristics: [""],  stackTecnologies: [""], icons: [""], stackWithIcons: [{uriIcon : "", name : ""}], repositoryWithIcons: [{uriIcon: "", name: "", url: ""}]});

  public myStack: {
    icon: string;
    name: string;
  }[] = [
    {
      icon: "icons/spring.svg",
      name: "Spring Boot"
    },
    {
      icon: "icons/angular.svg",
      name: "Angular"
    },
    {
      icon: "icons/java8.svg",
      name: "Java"
    },
    {
      icon: "icons/docker.svg",
      name: "Docker"
    },
    {
      icon: "icons/git.svg",
      name: "Git"
    },
    {
      icon: "icons/swagger.svg",
      name: "Swagger"
    },
    {
      icon: "icons/maven.svg",
      name: "Maven"
    },
    {
      icon: "icons/tailwind.svg",
      name: "Tailwind"
    },
    {
      icon: "icons/css.svg",
      name: "CSS"
    },
    {
      icon: "icons/posgrest.svg",
      name: "PostgreSQL"
    },
    {
      icon: "icons/maria.svg",
      name: "MariaDB"
    },
    {
      icon: "icons/oauth.svg",
      name: "OAuth 2.0"
    },
    {
      icon: "icons/JWT.svg",
      name: "JWT"
    },

    {
      icon: "icons/ts.svg",
      name: "TypeScript"
    },

    {
      icon: "icons/github.svg",
      name: "GitHub"
    },

    {
      icon: "icons/tux.svg",
      name: "Linux"
    },

  ];

  public works: {
    corporation: string;
    position: string;
    description: string;
    date: string;
  }[] = [
    {
      corporation: "Sintergica AI",
      position: "Desarrollador Backend",
      description: "En Sintergica AI, entre enero y junio de 2025, formé parte de un equipo multidisciplinar dedicado al desarrollo de copilotos de IA soberana y privada para empresas y gobiernos de LATAM, centrando mi labor en el backend con Spring Boot, donde implementé mecanismos de seguridad basados en JWT, diseñé, construí y documenté APIs REST robustas utilizando Swagger/OpenAPI para generar especificaciones interactivas y clientes automatizados que facilitaron la integración de otros equipos y clientes, modelé y gestioné la base de datos SQL, desplegué las aplicaciones con Docker, configuré pipelines de CI/CD en GitHub Actions (aprendido de forma autodidacta), trabajé colaborativamente con Git y GitHub empleando Spring Data JPA como ORM, contribuí a la calidad del código mediante pruebas unitarias bajo un enfoque TDD con Mockito y validé mis endpoints con Postman para asegurar su correcto funcionamiento antes del despliegue.\n",
      date: "Ene 2025 – Jul 2025"
    },
    {
      corporation: "Tecnológico de Veracruz",
      position: "Investigador y desarrollador de software",
      description: "En este proyecto, como investigador, exploré y apliqué de forma autónoma patrones de diseño y estructuras de datos complejas para la interfaz gráfica. Aprendí a desarrollar componentes 2D personalizados desde cero y a implementar el patrón MVC en entornos de escritorio con Java Swing, gestionando la lógica de estado y el renderizado en tiempo real. Colaboré en el diseño de la arquitectura y el modelado de una máquina de Turing estándar, combinando programación orientada a objetos y manejo de eventos en Swing. Además, participé activamente en reuniones de seguimiento, definiendo y cumpliendo plazos de entrega con responsabilidad y disciplina en todas las fases del desarrollo.\n",
      date: "Ene 2024 – Dic 2024"
    },
    {
      corporation: "Freelancer",
      position: "Desarrollador de software",
      description: "Como freelancer, entre enero y abril de 2023, diseñé y desarrollé un sistema personalizado para pediatras con módulos de gestión de pacientes para consultorios médicos. Modelé la base de datos SQL y la conecté manualmente mediante JDBC, implementando consultas CRUD y control de transacciones para garantizar la integridad de los datos. En Java Swing, creé interfaces gráficas intuitivas y estructuré toda la aplicación con el patrón MVC, organizando los módulos de pacientes, citas e historiales. Además, implementé validaciones y reglas de negocio en Java, y gestioné eventos y la navegación entre pantallas para ofrecer una experiencia de usuario fluida y confiable.\n",
      date: "Ene 2023 – Abr 2023"
    },
  ];


  constructor() {
    this.projects = [
      {
        title: "RadioWeatherAPI",
        description: "Aplicación web construida con arquitectura hexagonal (puertos y adaptadores) que orquesta de manera inteligente múltiples fuentes de datos: consulta la API de OpenWeather para mostrar el clima de cualquier ubicación y, cuando existen emisoras en el país seleccionado, despliega al instante la lista de estaciones de RadioBrowser correspondientes. Para enriquecer la navegación geográfica, integra OpenLeaflet para mapas interactivos y aprovecha de modo creativo los mapas SVG de Wikimedia Commons vía la API de Wikipedia. Además, asegura autenticación robusta con OAuth 2.0 de Google e implementa JWT para ofrecer una API stateless. Para maximizar velocidad y autonomía, incorpora localmente más de 150 000 registros importados vía pgAdmin/psql, lo que garantiza respuestas ultrarrápidas sin saturar las APIs externas. El resultado es una plataforma ágil, coherente y siempre disponible, diseñada para ofrecer al usuario una experiencia fluida y sin interrupciones.",
        image: "https://drive.google.com/file/d/14fF7j13D0GNJnx3lgow6FCYJ3KW8WfKl/preview",
        mainCharacteristics: [

          "🚀 Respuesta ultrarrápida gracias a más de 150 000 registros importados localmente\n",
          "🔄 Flujo de autenticación OAuth 2.0 con Google para inicios de sesión seguros\n",
          "🔐 API stateless mediante JSON Web Tokens (JWT)\n",
          "🛠️ Arquitectura Hexagonal (puertos y adaptadores) para máxima escalabilidad\n",
          "☁️ Integración en tiempo real con OpenWeather API\n" ,
          "📻 Descubrimiento instantáneo de estaciones via RadioBrowser API\n",
          "🗺️ Mapas interactivos con OpenLeaflet y mapas SVG de Wikimedia Commons\n",
          "📄 Paginación slice para una navegación ligera y fluida\n",
          "🗄️ Gestión de persistencia con JPA e Hibernate para un mapeo objeto-relacional robusto\n",
          "🐳 Contenerización con Docker para despliegues consistentes y aislados\n",
          "🔧 Configuración dinámica mediante variables de entorno para adaptar entornos sin cambios de código"
        ],
        xp: "Durante el desarrollo de RadioWeatherAPI profundicé en el flujo de autorización OAuth 2.0 de Google, entendiendo cada paso para obtener tokens de forma segura; al mismo tiempo, implementé JSON Web Tokens (JWT) para diseñar una API completamente stateless y escalable. Apliqué los principios de la arquitectura hexagonal, definiendo puertos y adaptadores que facilitan la mantenibilidad y permiten integrar con flexibilidad tanto OpenWeather como RadioBrowser, orquestando llamadas concurrentes y gestionando latencias y errores. Para el acceso a datos, configuré JPA con Hibernate, asegurando un mapeo eficiente entre objetos y tablas, y en paralelo importé más de 150 000 registros en PostgreSQL, optimizando la entrega con paginación slice y reduciendo significativamente los tiempos de respuesta. Además, contenedoricé la aplicación con Docker y gestioné la configuración mediante variables de entorno, lo que me permitió desplegar de forma reproducible y adaptar parámetros sin modificar el código. Por último, enriquecí la interfaz incorporando mapas interactivos con OpenLeaflet y SVG de Wikimedia Commons, mientras afinaba mis habilidades en pgAdmin/psql para consultas masivas que garantizan alta disponibilidad y consistencia.",
        carrusel: ["radioweatherapi/endRadio1.png", "radioweatherapi/endRadio2.png", "radioweatherapi/endRadio4.png", "radioweatherapi/endRadio5.png", "radioweatherapi/endRadio6.png", "radioweatherapi/endRadio7.png", "radioweatherapi/endRadio8.png", "radioweatherapi/endRadio9.png", "radioweatherapi/endRadio10.png"],
        stackTecnologies: ["Angular"],
        icons: ["icons/oauth.svg"],
        stackWithIcons: [
          {uriIcon : "icons/angular.svg", name : "Angular"},
          {uriIcon: "icons/spring.svg", name: "Spring Boot"},
          {uriIcon: "icons/oauth.svg", name: "OAuth 2.0"},
          {uriIcon: "icons/posgrest.svg", name: "Posgrest SQL"},
          {uriIcon: "icons/JWT.svg", name: "JWT"},
          {uriIcon: "icons/swagger.svg", name: "Swagger"},
          {uriIcon: "icons/java8.svg", name: "Java"},
          {uriIcon: "icons/ts.svg", name: "TypeScript"},
          {uriIcon: "icons/tailwind.svg", name: "Tailwind"},
          {uriIcon: "icons/css.svg", name: "CSS"},
          {uriIcon: "icons/git.svg", name: "Git"},
          {uriIcon: "icons/docker.svg", name: "Docker"},
        ],

        repositoryWithIcons: [
          {uriIcon: "octocat.svg", name: "Frontend Angular", url: "https://github.com/JavierAPalaciosL/radio-angular-frontend.git"},
          {uriIcon: "octocat.svg", name: "Backend Spring boot", url: "https://github.com/JavierAPalaciosL/radio-angular-frontend.git"}
        ]
      },
      {
        title: "Java Swing 2D y Estructuras de Datos",
        description: "Descubre en esta aplicación de escritorio Java cómo los principios de la inteligencia artificial cobran vida al encontrar la ruta más corta: cada nodo, cada arista y toda la lógica del grafo han sido programados desde cero, sin recurrir a ArrayList ni librerías externas. Observa paso a paso el funcionamiento del algoritmo de Dijkstra, optimizado y transparente, y aprende de su mecánica interna mientras experimentas con tus propios grafos. ¡Una herramienta ligera, educativa y handcrafted para dominar caminos y estructuras de datos!",
        image: "https://drive.google.com/file/d/1deC8m3pZjYfLPvuoVlpxL1vHoyL_drDT/preview",
        mainCharacteristics: [
          "🧩 Estructuras de datos handcrafted: listas y grafos programados desde cero",
          "🎮 Interfaz interactiva con Java Swing 2D para visualización en tiempo real",
          "🗺️ Implementación transparente del algoritmo de Dijkstra para rutas óptimas",
          "🚫 Sin librerías externas: todo código en puro Java para profundizar en fundamentos",
          "⚙️ Optimización manual de memoria y rendimiento para una app ligera",
          "🔄 Grafos dinámicos: En tiempo real se hacen los calculos para el nuevo grafo y se eliminan, modifican nodos y aristas sobre la marcha"
        ],
        xp: "Durante este proyecto consolidé mi dominio de estructuras de datos al programar listas y grafos desde cero, sin apoyarme en colecciones predefinidas, lo que me permitió comprender a fondo la lógica de los algoritmos y adaptar rápidamente esas soluciones a cualquier lenguaje de programación. Profundicé en el funcionamiento interno del algoritmo de Dijkstra, entendiendo cómo se calculan y actualizan los pesos en cada paso. Además, reforcé mis habilidades en Java Swing 2D, gestionando el ciclo de eventos, el pintado de componentes y la sincronización de animaciones. Gracias a esta experiencia, aprendí a optimizar manualmente el uso de memoria y a diseñar una arquitectura clara y mantenible, siempre con un enfoque en el rendimiento y la transparencia del código.\n",
        carrusel: [
          "pacman.png",
          "pacman/pacmanI1.png"
        ],
        stackTecnologies: [
          "Java Swing",
          "Java 2D",
          "Puro Java"
        ],
        icons: [
          "icons/java.svg",
          "icons/swing.svg"
        ],
        stackWithIcons: [
          {
            uriIcon: "icons/java8.svg",
            name: "Java"
          },
          {
            uriIcon: "icons/java.svg",
            name: "Java Swing"
          }
        ],
        repositoryWithIcons: [
          {
            uriIcon: "octocat.svg",
            name: "Pacman Swing 2D",
            url: "https://github.com/JavierAPalaciosL/pacman-swing-2d.git"
          }
        ]
      },
      {
        title: "Custom Language Compiler (JavaCC & x86-64 Assembly)",
        description: "Este proyecto demuestra la creación de un compilador completo para un lenguaje C–like, partiendo del análisis léxico y sintáctico con JavaCC y generando ensamblador x86-64 a mano. Cada fase (lexer, parser, generación de AST, traducción a asm) fue desarrollada desde cero; luego ensamblé y vinculé con NASM y GCC para obtener binarios ejecutables. Un trabajo de ingeniería complejo que solo un especialista podría abordar exitosamente.",
        image: "https://drive.google.com/file/d/1POhSQ9Za-BQyy8GaOvZiV97Hbm9I8yYV/preview",
        mainCharacteristics: [
          "🛠️ Desarrollo integral de compilador: desde la gramática JavaCC hasta el assembly final",
          "📜 Gramática hand-crafted en Analex.jj con acciones semánticas para AST",
          "⚙️ Generación manual de x86-64 asm optimizado, sin plantillas externas",
          "🚀 Ensamblado y linking con NASM y GCC (-no-pie) para ejecutables nativos",
          "🔍 Soporte de estructuras de control (if, while) y operaciones aritméticas",
          "🔄 Manejo de cadena de tokens, árbol de sintaxis y recorrido semántico completo",
          "🔐 Pruebas con ejemplos reales (hola.txt) garantizan robustez y precisión"
        ],
        xp: "Al diseñar este compilador consolidé mi experiencia en análisis de lenguaje y bajo nivel: dominé JavaCC para definir gramáticas y acciones semánticas, construí ASTs y generé ensamblador x86-64 puro sin apoyo de librerías, y afiné mi entendimiento del calling convention System V AMD64. Además, orquesté el ensamblado con NASM y el linking con GCC, comprobando cada paso para asegurar código nativo eficiente. Este proyecto es una prueba irrefutable de mi capacidad para abordar sistemas complejos donde la mayoría de los desarrolladores no se atreven. Además aprendí cómo funcionan internamente los lenguajes de programación. También descubrí que puedo combinar C o Rust en un mismo proyecto para aprovechar las ventajas de cada uno, ya que, al final, todos se traducen a código ensamblador.",
        carrusel: [
          "compiler/img_3.png",
          "compiler/img.png",
          "compiler/img_1.png",
          "compiler/img_4.png",
          "compiler/img_2.png"
        ],
        stackTecnologies: [
          "JavaCC 7.0.13",
          "Java",
          "NASM",
          "GCC",
          "x86-64 Assembly"
        ],
        icons: [
          "icons/javacc.svg",
          "icons/nasm.svg",
          "icons/gcc.svg"
        ],
        stackWithIcons: [
          { uriIcon: "icons/nasm.svg", name: "NASM" },
          { uriIcon: "icons/java8.svg", name: "Java" },
          { uriIcon: "icons/gcc.svg", name: "GCC" },
        ],
        repositoryWithIcons: [
          {
            uriIcon: "octocat.svg",
            name: "Custom Compiler",
            url: "https://github.com/JavierAPalaciosL/custom-compiler.git"
          }
        ]
      }
,
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
