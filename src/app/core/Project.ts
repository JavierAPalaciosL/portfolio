export default interface Project {
  title: string;
  description: string;
  image: string;
  mainCharacteristics: string[];
  xp: string;
  carrusel: string[];
  stackTecnologies: string[];
  icons: string[];

  stackWithIcons: { uriIcon: string; name: string }[];

  repositoryWithIcons: {
    uriIcon: string;
    name: string;
    url: string;
  }[];

}
