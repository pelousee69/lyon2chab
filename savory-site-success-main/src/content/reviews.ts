export type Review = {
  author: string;
  origin: string;
  date: string;
  rating: number;
  text: string;
};

export const REVIEWS: Review[] = [
  { author: "Camille D.", origin: "Lyon", date: "2025-03-12", rating: 5, text: "Le vrai bouchon comme on en rêve. Tablier de sapeur fondant, accueil chaleureux, le décor est une vraie machine à remonter le temps. On reviendra c'est sûr." },
  { author: "Marco P.", origin: "Milan", date: "2025-02-04", rating: 5, text: "Une expérience authentique au cœur de Lyon. La quenelle Nantua est mémorable, et le saladier lyonnais à partager est un voyage." },
  { author: "Sophie L.", origin: "Paris", date: "2025-01-18", rating: 4, text: "Adresse incontournable près de Bellecour. Bondé un samedi soir, ambiance bruyante mais c'est ça le bouchon. Les pralines au dessert : à tomber." },
  { author: "James W.", origin: "Londres", date: "2024-11-22", rating: 5, text: "Best traditional French dinner of our trip. The walls covered with photos and old plates make it magical. Andouillette was bold — exactly what we wanted." },
  { author: "Élodie M.", origin: "Villeurbanne", date: "2024-10-09", rating: 5, text: "On y emmène nos clients à chaque visite à Lyon. Cuisine généreuse, service souriant, et ce lustre de l'Opéra qui fait son effet à chaque fois." },
  { author: "Thomas R.", origin: "Bordeaux", date: "2024-09-15", rating: 4, text: "Très bon rapport qualité/prix pour un bouchon de centre-ville. Tables serrées mais c'est la tradition. Cervelle de canut au top." },
];
