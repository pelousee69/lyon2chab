export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[]; // paragraphes / sections (markdown léger non requis)
  cover?: string;
};

import lustre from "@/assets/decor-lustre.jpg";
import fresque from "@/assets/decor-fresque.jpg";
import quenelle from "@/assets/dish-quenelle.jpg";
import tablier from "@/assets/dish-tablier.jpg";

export const POSTS: BlogPost[] = [
  {
    slug: "qu-est-ce-qu-un-vrai-bouchon-lyonnais",
    title: "Qu'est-ce qu'un vrai bouchon lyonnais ?",
    description: "Histoire, codes, plats canaille et label : tout savoir pour reconnaître un authentique bouchon à Lyon.",
    date: "2025-04-02",
    readingTime: "6 min",
    excerpt: "Le bouchon lyonnais, c'est une institution. Mais derrière le mot, une réalité précise : convivialité, plats canaille, décor patiné, et un label qui distingue les vrais des faux.",
    cover: fresque,
    body: [
      "Le mot « bouchon » apparaît à Lyon au XVIIe siècle. À l'époque, les voyageurs reconnaissent une auberge à la touffe de branchages — un « bouchon » de paille — accrochée à la porte. Avec le temps, le terme désigne ces petites tables familiales où l'on sert une cuisine de mères, généreuse, mijotée, sans chichi.",
      "Un vrai bouchon lyonnais répond à des codes précis : nappes vichy ou blanches, tables serrées pour favoriser la conversation, ardoise du jour, vin servi en pot lyonnais (46 cl), et surtout une carte qui assume la cuisine canaille — abats, charcuteries, plats du dimanche.",
      "Les plats incontournables que vous devez retrouver : saladier lyonnais, quenelle de brochet sauce Nantua, tablier de sapeur, andouillette tirée à la ficelle, cervelle de canut, tarte aux pralines roses. Si la carte fait l'impasse sur ces classiques, méfiance.",
      "Depuis 2012, l'association « Les Bouchons Lyonnais » délivre un label officiel. Une vingtaine d'établissements seulement le possèdent — un gage d'authenticité dans une ville où le mot « bouchon » est parfois galvaudé par des restaurants touristiques.",
      "Chez Chabert et Fils, rue des Marronniers à deux pas de la place Bellecour, nous perpétuons cette tradition depuis des décennies. Chaque mur raconte une histoire, chaque assiette respecte la recette des mères lyonnaises. Venez le vivre, c'est la meilleure façon de comprendre.",
    ],
  },
  {
    slug: "histoire-de-la-quenelle-de-brochet",
    title: "L'histoire de la quenelle de brochet, star des bouchons",
    description: "Origine, recette traditionnelle et secrets de la quenelle lyonnaise sauce Nantua.",
    date: "2025-03-15",
    readingTime: "5 min",
    excerpt: "Légère, soyeuse, gratinée au four sous une sauce Nantua orange vif : la quenelle de brochet est sans doute le plat le plus emblématique de Lyon.",
    cover: quenelle,
    body: [
      "On attribue souvent l'invention de la quenelle moderne au pâtissier lyonnais Charles Morateur, à la fin du XIXe siècle. L'idée était simple : transformer la chair délicate du brochet, poisson d'eau douce abondant dans la Saône, en un appareil léger qui gonfle à la cuisson.",
      "La recette traditionnelle repose sur quatre ingrédients : chair de brochet, panade (farine, lait, beurre), œufs, et un assaisonnement précis. Le tout est travaillé longuement, façonné en quenelles à la cuillère ou au moule, pochées puis gratinées au four.",
      "La sauce Nantua, qui vient du village du même nom dans l'Ain, est à base d'écrevisses, de cognac, de tomate et de crème. Sa couleur orange profonde et son goût iodé subliment la délicatesse du brochet.",
      "Notre quenelle, faite maison et gratinée à la commande, est servie avec un riz pilaf safrané. C'est l'un des plats préférés de nos habitués — et probablement la meilleure introduction à la cuisine lyonnaise pour les visiteurs.",
    ],
  },
  {
    slug: "tablier-de-sapeur-specialite-lyonnaise",
    title: "Tablier de sapeur : la spécialité qui intrigue",
    description: "D'où vient ce nom curieux et comment le tablier de sapeur est devenu un classique des bouchons.",
    date: "2025-02-20",
    readingTime: "4 min",
    excerpt: "Derrière ce nom étonnant se cache un plat de gras-double pané et grillé, hérité de l'armée et popularisé par les bouchons lyonnais.",
    cover: tablier,
    body: [
      "Le « tablier de sapeur » doit son nom au maréchal Castellane, gouverneur de Lyon au XIXe siècle, ancien sapeur du génie. La forme du gras-double une fois pané rappelait le tablier de cuir que portaient ces soldats.",
      "Le plat consiste en un morceau de gras-double (estomac de bœuf), longuement cuit, mariné dans du vin blanc, de l'huile et des aromates, puis pané à la chapelure et grillé. Croustillant dehors, fondant dedans.",
      "On l'accompagne traditionnellement d'une sauce gribiche — œufs durs hachés, câpres, cornichons, herbes — et de pommes vapeur. C'est un plat franc, typique de la cuisine canaille lyonnaise.",
      "Chez Chabert et Fils, le tablier est l'un de nos plats signature. Préparé chaque matin, grillé minute, c'est une excellente façon de découvrir les abats pour ceux qui hésitent encore.",
    ],
  },
  {
    slug: "top-5-plats-lyonnais-a-gouter",
    title: "Top 5 des plats lyonnais à goûter absolument",
    description: "Notre sélection des spécialités incontournables à découvrir lors d'un séjour à Lyon.",
    date: "2025-01-28",
    readingTime: "5 min",
    excerpt: "Visite éclair à Lyon ? Voici les cinq plats à ne pas manquer pour vraiment comprendre la cuisine lyonnaise.",
    cover: lustre,
    body: [
      "1. La quenelle de brochet sauce Nantua — l'icône, légère et crémeuse à la fois.",
      "2. Le saladier lyonnais — un assortiment d'entrées canailles à partager : museau, lentilles, harengs, pieds de mouton, œuf mollet.",
      "3. Le tablier de sapeur — gras-double pané grillé, sauce gribiche, pommes vapeur.",
      "4. La cervelle de canut — fromage blanc battu aux herbes, ail et échalote, à tartiner sur du pain de campagne.",
      "5. La tarte aux pralines roses — ce dessert rouge vif est devenu l'emblème sucré de Lyon, fondant et croustillant.",
      "Vous trouverez ces cinq plats à notre carte rue des Marronniers, à deux minutes à pied de la place Bellecour. Réservez votre table, surtout les week-ends — les habitués savent qu'on affiche vite complet.",
    ],
  },
];
