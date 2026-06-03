export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  image: string;
  intro: string;
  details: string[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'eternitove-plechove-sindlove-strechy',
    title: 'Eternitové, plechové a šindľové strechy',
    shortTitle: 'Eternitové a plechové strechy',
    eyebrow: 'Šikmé strechy',
    summary:
      'Pokrývame, opravujeme a izolujeme eternitové, plechové aj šindľové strechy od zamerania až po finálne detaily.',
    image: '/assets/service4.jpg',
    intro:
      'Zabezpečujeme obnovu a izoláciu šikmých striech tak, aby bol výsledok pevný, vodotesný a esteticky čistý bez zbytočného zásahu do domu.',
    details: [
      'Pri práci volíme materiály podľa aktuálneho stavu strechy, sklonu, konštrukcie a očakávanej životnosti.',
      'Pri eternitových a starších šindľových strechách sa zameriavame najmä na bezpečnú bezdemontážnu renováciu a dlhodobú ochranu strešného plášťa.',
    ],
    features: ['Osobné zameranie strechy', 'Renovácia bez odkrytia domu', 'Kvalitné krytiny od overených výrobcov'],
  },
  {
    slug: 'izolacia-striech',
    title: 'Izolácia striech',
    shortTitle: 'Izolácia striech',
    eyebrow: 'Hydroizolácia',
    summary:
      'Bezdemontážna renovácia a izolácia striech bitúmenovou krytinou s efektom škridle, odolná voči vode aj UV žiareniu.',
    image: '/assets/service1.jpg',
    intro:
      'Izolácia striech je vhodná pre staršie strešné plášte, pri ktorých je cieľom predĺžiť životnosť bez kompletnej demontáže.',
    details: [
      'Používame bitúmenové pásy a krytiny, ktoré vytvárajú vodotesnú vrstvu a zároveň zlepšujú vzhľad strechy.',
      'Renovácia priemerného rodinného domu trvá približne 1 – 2 dni a na vykonané práce poskytujeme 15-ročnú písomnú záruku.',
    ],
    features: ['Rýchla realizácia 1 – 2 dni', '15-ročná písomná záruka', 'Odolnosť voči vode a UV žiareniu'],
  },
  {
    slug: 'ploche-strechy-tepelna-izolacia',
    title: 'Ploché strechy a tepelná izolácia',
    shortTitle: 'Ploché strechy',
    eyebrow: 'Ploché strechy',
    summary:
      'Oprava a montáž plochých striech vrátane tepelnej izolácie, spádovania a spoľahlivej hydroizolácie.',
    image: '/assets/sluzba-ploche.jpg',
    intro:
      'Pri plochých strechách riešime hydroizoláciu, tepelné vlastnosti aj odvod vody ako jeden funkčný celok.',
    details: [
      'Skontrolujeme existujúcu skladbu strechy, navrhneme opravu alebo novú vrstvu a postaráme sa o detaily pri atikách, vpustoch a prestupoch.',
      'Tepelná izolácia pomáha stabilizovať vnútornú teplotu a znižuje riziko kondenzácie v konštrukcii.',
    ],
    features: ['Hydroizolácia plochých striech', 'Tepelná izolácia', 'Riešenie spádovania a odvodu vody'],
  },
  {
    slug: 'oprava-kominov',
    title: 'Oprava komínov',
    shortTitle: 'Oprava komínov',
    eyebrow: 'Strešné detaily',
    summary: 'Oprava komínov, oplechovania a kritických detailov, ktoré často spôsobujú zatekanie strechy.',
    image: '/assets/service2.jpg',
    intro:
      'Komín je jeden z najcitlivejších bodov strechy. Kvalitné oplechovanie a utesnenie pomáha predchádzať zatekaniu aj poškodeniu muriva.',
    details: [
      'Riešime opravy nadstrešných častí komínov, napojenie na krytinu, oplechovanie a súvisiace strešné prvky.',
      'Pri obhliadke posúdime, či je potrebná lokálna oprava alebo komplexnejšie riešenie napojenia na strechu.',
    ],
    features: ['Oplechovanie komínov', 'Tesnenie prestupov', 'Oprava poškodených strešných prvkov'],
  },
  {
    slug: 'odkvapove-systemy',
    title: 'Odkvapové systémy',
    shortTitle: 'Odkvapové systémy',
    eyebrow: 'Odvod dažďovej vody',
    summary: 'Montáž a výmena odkvapových systémov pre správny odvod vody a ochranu fasády aj základov domu.',
    image: '/assets/service3.jpg',
    intro:
      'Správne navrhnutý odkvapový systém chráni strechu, fasádu a okolie domu pred nadmernou vlhkosťou.',
    details: [
      'Dodávame a montujeme žľaby, zvody a doplnky podľa tvaru strechy a požadovaného odvodu dažďovej vody.',
      'Pri rekonštrukcii strechy vieme výmenu odkvapov zladiť s ostatnými strešnými prácami.',
    ],
    features: ['Montáž žľabov a zvodov', 'Výmena starých odkvapov', 'Napojenie na strešné detaily'],
  },
  {
    slug: 'fukana-striekana-izolacia',
    title: 'Fúkaná a striekaná izolácia',
    shortTitle: 'Fúkaná izolácia',
    eyebrow: 'Letná sezóna',
    summary:
      'Fúkaná a striekaná izolácia striech a podkroví pre rýchle zateplenie počas letnej sezóny.',
    image: '/assets/ref1.jpg',
    intro:
      'Fúkaná a striekaná izolácia je vhodná pre podkrovia a ťažšie dostupné priestory, kde je dôležité rovnomerné vyplnenie dutín.',
    details: [
      'Služba je dostupná najmä počas letnej sezóny. Pri obhliadke preveríme prístup, skladbu konštrukcie a vhodnosť riešenia.',
      'Fotky z tejto služby čakajú na doplnenie z Facebooku alebo dodaných podkladov; zatiaľ používame dostupný referenčný záber.',
    ],
    features: ['Rýchle zateplenie podkrovia', 'Vhodné pre dutiny a horšie prístupné miesta', 'Sezónna realizácia v lete'],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
