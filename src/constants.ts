import type { Service, Vehicle, ContactInfo } from './types';

// Import images
import eClassImg from './assets/images/cars/e-class-silver.png';
import vianoImg from './assets/images/cars/viano-vine.png';
import nevobusImg from './assets/images/cars/setra-nevobus.png';
import sprinterSilverImg from './assets/images/cars/sprinter-silver.png';
import sprinterBlackImg from './assets/images/cars/sprinter-black.png';

export interface ExtendedVehicle extends Vehicle {
  color: string;
  glowColor: string;
  image: string;
}

export const CONTACT_INFO: ContactInfo = {
  owner: 'Petr Chochola',
  address: 'Vančurova 13, Znojmo 669 02',
  phones: ['+420 608 707 225', '+420 775 266 556'],
  email: 'petrchochola@seznam.cz',
};

export const SERVICES: Service[] = [
  {
    id: 'airport',
    title: 'Transfery na letiště',
    description: 'Pohodlná doprava na letiště i z něj pro jednotlivce i skupiny.',
  },
  {
    id: 'sports',
    title: 'Doprava pro sportovce',
    description: 'Pravidelné i jednorázové svozy sportovních týmů na zápasy a tréninky.',
  },
  {
    id: 'weddings',
    title: 'Svatby',
    description: 'Reprezentativní vozy Mercedes-Benz pro váš velký den.',
  },
  {
    id: 'excursions',
    title: 'Výlety a exkurze',
    description: 'Poznávací zájezdy, školní výlety a skupinová turistika.',
  },
  {
    id: 'corporate',
    title: 'Firemní akce',
    description: 'Doprava na školení, teambuildingy a firemní večírky.',
  },
  {
    id: 'drink-drive',
    title: 'Drink & Drive',
    description: 'Bezpečný odvoz vás i vašeho vozu kdykoliv potřebujete.',
  },
  {
    id: 'cycle-bus',
    title: 'Cyklobus',
    description: 'Přeprava cyklistů s jejich koly do oblíbených lokalit.',
  },
  {
    id: 'wine-cellars',
    title: 'Putování po sklípcích',
    description: 'Degustační zájezdy do vinných sklípků s jistotou odvozu.',
  },
  {
    id: 'shuttle',
    title: 'Svoz zaměstnanců',
    description: 'Pravidelné a včasné svozy zaměstnanců do zaměstnání.',
  },
  {
    id: 'cargo-express',
    title: 'Expresní zásilky',
    description: 'Rychlá přeprava balíků a dokumentů dostupná 24/7.',
  },
  {
    id: 'small-cargo',
    title: 'Drobný náklad',
    description: 'Přeprava zboží do kapacity maximálně 2 palet.',
  },
  {
    id: 'custom',
    title: 'Individuální dohoda',
    description: 'Nenašli jste svou službu? Ozvěte se, domluvíme se na řešení.',
  },
];

// Order: Nevobus, Viano, E-Class (Center), Sprinter Silver, Sprinter Black
export const FLEET: ExtendedVehicle[] = [
  {
    id: 'setra-nevobus',
    model: 'Setra "NevoBus"',
    capacity: '49+2 míst',
    features: ['Černá perleť', 'Luxusní autokar', 'WC', 'Kuchyňka', 'Klimatizace'],
    color: 'Black',
    glowColor: 'rgba(197, 160, 89, 0.25)',
    image: nevobusImg,
  },
  {
    id: 'viano-vine',
    model: 'Mercedes-Benz Viano',
    capacity: '7 míst',
    features: ['Vínová metalíza', 'Klimatizace', 'Konferenční uspořádání', 'Pojištění sedadel'],
    color: 'Wine',
    glowColor: 'rgba(197, 160, 89, 0.25)',
    image: vianoImg,
  },
  {
    id: 'e-class-silver',
    model: 'Mercedes-Benz E-Class',
    capacity: '4 místa',
    features: ['Stříbrná metalíza', 'Luxusní interiér', 'Business Class servis'],
    color: 'Silver',
    glowColor: 'rgba(197, 160, 89, 0.25)',
    image: eClassImg,
  },
  {
    id: 'sprinter-silver',
    model: 'Mercedes-Benz Sprinter',
    capacity: '20 míst',
    features: ['Stříbrná metalíza', 'Klimatizace', 'Polohovatelná sedadla', 'Mikrofon'],
    color: 'Silver',
    glowColor: 'rgba(197, 160, 89, 0.25)',
    image: sprinterSilverImg,
  },
  {
    id: 'sprinter-black',
    model: 'Mercedes-Benz Sprinter',
    capacity: '16 míst',
    features: ['Černá perleť', 'Klimatizace', 'DVD přehrávač', 'USB nabíjení'],
    color: 'Black',
    glowColor: 'rgba(197, 160, 89, 0.25)',
    image: sprinterBlackImg,
  },
];
