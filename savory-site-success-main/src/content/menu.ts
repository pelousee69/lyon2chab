import quenelle from "@/assets/dish-quenelle.jpg";
import tablier from "@/assets/dish-tablier.jpg";
import saucisson from "@/assets/dish-saucisson.jpg";
import cervelle from "@/assets/dish-cervelle.jpg";

export type Dish = {
  name: string;
  description: string;
  price: string;
  image?: string;
  signature?: boolean;
};

export type MenuSection = {
  title: string;
  description: string;
  items: Dish[];
};

export const MENU: MenuSection[] = [
  {
    title: "Les entrées du bouchon",
    description: "Les classiques canuts pour ouvrir l'appétit, à partager ou en solo.",
    items: [
      { name: "Saladier lyonnais", description: "Lentilles vertes du Puy, museau, pieds de mouton, harengs, œuf mollet — la dégustation des incontournables.", price: "16 €", image: saucisson, signature: true },
      { name: "Saucisson chaud brioché", description: "Saucisson de Lyon pistaché, brioche maison toute chaude, salade verte aux herbes.", price: "14 €", image: saucisson },
      { name: "Cervelle de canut", description: "Fromage blanc battu, ciboulette, échalote, huile d'olive, vinaigre — et croûtons grillés.", price: "11 €", image: cervelle, signature: true },
      { name: "Œufs en meurette", description: "Œufs pochés, sauce au vin rouge des Côtes du Rhône, lardons et oignons grelots.", price: "13 €" },
      { name: "Salade de gésiers confits", description: "Mesclun, gésiers de canard confits maison, croûtons à l'ail, vinaigrette à l'échalote.", price: "14 €" },
    ],
  },
  {
    title: "Les plats canaille",
    description: "La cuisine de mère lyonnaise, généreuse et mijotée, comme à la maison.",
    items: [
      { name: "Quenelle de brochet sauce Nantua", description: "Notre quenelle gratinée au four, sauce crémeuse aux écrevisses, riz pilaf safrané.", price: "24 €", image: quenelle, signature: true },
      { name: "Tablier de sapeur", description: "Gras-double pané grillé, sauce gribiche maison, pommes vapeur — la spécialité du chef.", price: "22 €", image: tablier, signature: true },
      { name: "Andouillette AAAAA", description: "Andouillette tirée à la ficelle, sauce moutarde à l'ancienne, gratin dauphinois.", price: "23 €" },
      { name: "Tête de veau sauce ravigote", description: "Pochée longuement, langue, joue, sauce ravigote aux câpres et fines herbes.", price: "26 €" },
      { name: "Boudin noir aux pommes", description: "Boudin de notre charcutier, pommes caramélisées, purée maison.", price: "20 €" },
      { name: "Poulet de Bresse à la crème et morilles", description: "Poulet fermier label rouge, crème d'Isigny, morilles séchées des Vosges, gratin.", price: "32 €" },
    ],
  },
  {
    title: "Fromages & desserts",
    description: "Pour finir comme il se doit, avec gourmandise.",
    items: [
      { name: "Saint-Marcellin affiné de la Mère Richard", description: "Le roi des fromages lyonnais, affiné à cœur, mesclun aux noix.", price: "9 €" },
      { name: "Tarte aux pralines roses", description: "La star de Lyon : sablé breton, pralines roses fondues, crème fouettée vanillée.", price: "10 €", signature: true },
      { name: "Île flottante aux pralines", description: "Œufs en neige, crème anglaise vanille, éclats de pralines roses.", price: "9 €" },
      { name: "Cervelle de canut sucrée façon panna cotta", description: "Notre clin d'œil revisité : fromage blanc, miel des monts du Lyonnais, fruits rouges.", price: "9 €" },
      { name: "Coupe Mère Brazier", description: "Glace vanille, crème de marrons, chantilly maison, brisures de meringue.", price: "10 €" },
    ],
  },
];

export const MENUS_FORMULES = [
  { name: "Menu du Canut", price: "29 €", details: "Entrée + plat ou plat + dessert au choix dans la carte du marché." },
  { name: "Menu Chabert", price: "39 €", details: "Entrée + plat + dessert, l'expérience bouchon complète." },
  { name: "Menu Découverte", price: "55 €", details: "Apéritif maison, entrée, plat signature, fromage, dessert, café." },
];
