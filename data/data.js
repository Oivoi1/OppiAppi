
// Data 
import { useFonts } from "expo-font";
// Storage keys
export const COMPETENCE_STORAGE_KEY = '@competence_data'
export const COUNTER_STORAGE_KEY ='@counter_data';
export const TUVA_STORAGE_KEY ='@tuva_data';
export const APP_TROPHIES_STORAGE_KEY ='@main_trophies_data';
export const APP_WEEKS_STORAGE_KEY ='@main_weeks_data';

// Vibration patterns. Time unit is ms. Odd cells are pause and even cells are vibration duration.

export const NOTIFY_VIBRATE = [ 0, 200 ]; // 0 ms pause, 200 ms vibration
export const SHORT_VIBRATE = [ 0, 100 ]; // 0 ms pause, 100 ms vibration
export const LONG_VIBRATE = [ 0, 500 ]; // 0 ms pause, 500 ms vibration

import candyBlueSvg from '../assets/candy_blue.svg'
import candyGreenSvg from '../assets/candy_green.svg'
import backArrowSvg from '../assets/ion--chevron-back-circle-outline.svg'
import uncheckedSvg from '../assets/candy_blue.svg'
import checkedSvg from '../assets/candy_green.svg'
import uncheckedTuvaSvg from '../assets/unchecked_tuvabutton.svg'
import infoSvg from '../assets/ion--information-circle-outline.svg'

// Icon resources
export const ICONS_SVG = {
  candyBlueSvg: candyBlueSvg,
  candyGreenSvg: candyGreenSvg,
  backArrowSvg: backArrowSvg,
  uncheckedSvg: uncheckedSvg,
  checkedSvg: checkedSvg,
  uncheckedTuvaSvg: uncheckedTuvaSvg,
  infoSvg: infoSvg
};

// Numeric constants
export const NUMERIC = {
  opacityTouchFade: 0.6,
}

// Theme colors
export const THEME = {
  black: "#000",
  lightBackground: "#F3F2EC",
  darkBlue: "#023B5D",
  blue: "#0693E3",
  lightBlue: "#8ED1FC",
  brightRed: "#D3232E",
  gray: "#231F20",
  lightGray: "#d9d9d9",
  green: "#6ECB56",
  white: "#FFFFFF",
};

export const COMPETENCE_DATA = [
  {
    buttonText: 'Opiskelu- ja urasuunnittelutaidot',
    detailsTitle: 'Opiskelu- ja urasuunnittelutaidot',
    description: 'Tutkintokoulutukseen valmentavassa koulutuksessa kehitetään opiskelijan opiskelu- ja urasuunnittelutaitoja, kuten kykyä työskennellä ja opiskella itsenäisesti, suunnitella omia opintoja ja ajankäyttöä sekä tehdä opintoihin liittyviä valintoja. Opiskelijaa tuetaan tiedostamaan koulutuksen ja työnteon merkitys omassa elämässään. Opiskelu- ja urasuunnittelutaitojen kehittymiseen liittyvät kiinteästi opiskelu/tutkintokielen taidon ja erityisesti urasuunnitteluun liittyvien tekstitaitojen hallinta.',
    tasks: [
      {
        title: 'Asetan ja arvioin omia elämäntavoitteitani ja -toiveitani.',
      },
      {
        title: 'Osaan kuvailla itseäni oppijana ja opiskelijana.',
      },
      {
        title: 'Tutustun erilaisiin tapoihin oppia ja hankkia osaamista.',
      },
      {
        title: 'Käytän soveltuvia opiskelutaitoja.',
      },
      {
        title: 'Suunnittelen omia opintojani tavoitteellisesti.',
      },
      {
        title: 'Etsin tietoa itseäni kiinnostavista jatko-opinnoista sekä työelämävaihtoehdoista.',
      },
      {
        title: 'Tarkastelen vaihtoehtoisia uramahdollisuuksiani myös tulevaisuuden näkökulmasta.',
      },
      {
        title: 'Arvioin omaa soveltuvuuttani eri aloille.',
      },
      {
        title: 'Teen realistisen jatko-opintosuunnitelman ja hakeudun sen mukaisesti koulutukseen.',
      },
      {
        title:'Valmistaudun opiskelemaan lukiokoulutuksessa tai ammatillisessa koulutuksessa.',
      },
      {
        title: 'Ymmärrän ja osaan käyttää opiskelu- ja urasuunnitteluun liittyvää kieltä.',
      }
    ]
  },
  {
    buttonText: 'Perustaitojen vahvistaminen',
    detailsTitle: 'Perustaitojen vahvistaminen',
    description: 'Koulutuksen osan tavoitteena on vahvistaa opiskelijan lukutaitoon, numeerisiin taitoihin ja digitaitoihin liittyvää osaamista. Lisäksi koulutuksen osa mahdollistaa perusopetuksen oppimäärän arvosanojen korottamisen erityisessä tutkinnossa. Keskeistä opiskelussa on eri tiedonalojen tekstitaitojen sekä opiskelutaitojen vahvistaminen.',
    tasks: [
      {
        title: 'Saavutan sellaiset perustaidot (luku-, numero- ja digitaidot), joiden avulla pystyn opiskelemaan toisen asteen opinnoissa.',
      },
      {
        title: 'Saavutan sellaisen opiskelu/tutkintokielen taidon, että se mahdollistaa toisen asteen koulutukseen osallistumisen.',
      },
      {
        title: 'Kehitän eri tiedonalojen kielen osaamistani ja käytän opiskeltavaan aineeseen sopivia opiskelumenetelmiä.',
      },
      {
        title: 'Korotan perusopetuksen oppimäärän arvosanoja erityisessä tutkinnossa, mikäli se on toiselle asteelle hakeutumisen näkökulmasta tarpeellista.',
      },
    ]
  },
  {
    buttonText: 'Lukiokoulutuksen opinnot ja niihin valmentautuminen',
    detailsTitle: 'Lukiokoulutuksen opinnot ja niihin valmentautuminen',
    description: 'Koulutuksen osa sisältää lukiokoulutukseen valmentavaa koulutusta ja lukio-opintoja opiskelijan valmiuksien mukaisesti. Suorittaessaan lukio-opintoja opiskelija saa tukea opiskelutaitojen ja -valmiuksien kehittämiseen osana valmentavaa koulutusta.\n\nOpiskelija vahvistaa opiskelukielen hallintaa, opiskelutaitoja sekä tieto- ja viestintätekniikan käyttämistä osana opiskelua. Opiskelija harjoittelee lukiossa tarvittavaa monilukutaitoa: erilaisten tekstien lukemista ja tulkintaa sekä erilaisten tekstien tuottamista. Tavoitteena on, että opiskelija saavuttaa riittävät tiedot ja taidot lukio-opiskeluun sekä vahvistaa erityisesti tiedonalojen kielen taitoaan eli eri oppiaineiden tekstitaitoja.\n\nOpiskelija tutustuu lukiokoulutukseen ja sen vaatimuksiin. Opiskelija voi valita omien tavoitteidensa, valmiuksiensa ja kiinnostuksensa mukaan lukion opintojakson tai opintojaksoja, joita hän suorittaa osana valmentavaa koulutusta. Valmentavan koulutuksen aikana opiskelija voi käyttää näiden suorittamiseen enemmän aikaa kuin varsinaisessa lukiokoulutuksessa.',
    tasks: [
      {
        title: 'Saavutan riittävän taidon lukion opetuskielessä ja eri tiedonalojen tekstitaidoissa (sanavarasto, luetun ymmärtämis- ja tulkintataidot sekä tuottamistaidot).',
      },
      {
        title: 'Osallistun opiskeltavaan oppiaineeseen sopivien opiskelumenetelmien ja tieto- ja viestintätekniikan käyttöön opiskelun apuna.',
      },
      {
        title: 'Tutustun lukiokoulutukseen ja sen käytäntöihin sekä arviointimenetelmiin.',
      },
      {
        title: 'Arvioin lukio-opintojen sopivuuden itselleni.',
      },
      {
        title: 'Suoritan kiinnostusten ja tavoitteideni mukaisia lukion opintoja.',
      },
    ]
  },
  {
    buttonText: 'Ammatillisen koulutuksen opinnot',
    detailsTitle: 'Ammatillisen koulutuksen opinnot ja niihin valmentautuminen',
    description: 'Koulutuksen osa sisältää ammatillisia perustutkintojen tutkinnon osia sekä tutkinnon osia pienempiä kokonaisuuksia tai yhteisten tutkinnon osien osa-alueita opiskelijan valmiuksien mukaisesti. On tärkeää, että opiskelija saa opiskeluun riittävästi tukea sekä valmentavassa koulutuksessa että suorittaessaan ammatillisia opintoja valmentavan koulutuksen aikana. \n\nOpiskelija vahvistaa tutkintokielen hallintaa, opiskelutaitoja sekä tieto- ja viestintätekniikan käyttämistä osana opiskelua. Opiskelija harjoittelee ammatillisessa koulutuksessa tarvittavaa monilukutaitoa: erilaisten tekstien lukemista ja tulkintaa sekä erilaisten tekstien tuottamista. Tavoitteena on, että opiskelija saavuttaa riittävät tiedot ja taidot ammatilliseen opiskeluun sekä vahvistaa erityisesti ammatillisessa koulutuksessa tarvittavaa kielitaitoa.\n\nOpiskelija tutustuu ammatilliseen koulutukseen ja sen vaatimuksiin. Opiskelija voi suorittaa omien tavoitteidensa, valmiuksiensa ja kiinnostuksensa mukaan tutkinnon osia sekä pienempiä kokonaisuuksia tai yhteisten tukinnon osien osa-alueita. Valmentavan koulutuksen aikana opiskelija voi käyttää näiden suorittamiseen enemmän aikaa kuin varsinaisessa ammatillisessa koulutuksessa.',
    tasks: [
      {
        title: 'Saavutan riittävän taidon ammatillisten opintojen opetuskielessä ja eri tiedonalojen tekstitaidoissa (sanavarasto, luetun ymmärtämis- ja tulkintataidot sekä tuottamistaidot).',
      },
      {
        title: 'Osallistun alakohtaiseen koulutukseen sopivien opiskelumenetelmien ja tieto- ja viestintätekniikan käyttöön opiskelun apuna.',
      },
      {
        title: 'Tutustun ammatilliseen koulutukseen, sen käytäntöihin sekä arviointimenetelmiin.',
      },
      {
        title: 'Arvioin ammatillisen koulutuksen sopivuuden itselleni.',
      },
      {
        title: 'Suoritan itselleni sopivia ammatillisen koulutuksen opintoja (ammatilliset tutkinnon osat tai yhteiset tutkinnon osat).',
      },
    ]
  },
  

  
  {
    buttonText: 'Työelämätaidot ja työelämässä tapahtuva oppiminen',
    detailsTitle: 'Työelämätaidot ja työelämässä tapahtuva oppiminen',
    description: 'Koulutuksen osassa keskitytään keskeisiin työelämätaitoihin ja tuetaan työelämässä tapahtuvaa oppimista. Tavoitteena on vahvistaa opiskelijan oman toiminnan ohjaamista sekä viestintä-, vuorovaikutus- ja yhteistyötaitoja. Opiskelija tutustuu työelämässä tapahtuvaan koulutukseen.',
    tasks: [
      {
        title: 'Tunnen työnhaun prosessin',
      },
      {
        title: 'Tutustun työpaikkoihin oppimisympäristöinä',
      },
      {
        title: 'Tunnen työelämän ja yrittäjyyden keskeiset periaatteet',
      },
      {
        title: 'Osallistun työyhteisön jäsenenä työpaikalla',
      },
      {
        title: 'Hallitsen ajankäytön suunnittelua ja hallintaa',
      },
      {
        title: 'Tunnen omat oikeuteni ja velvollisuuteni työpaikalla',
      },
      {
        title: 'Tiedostan mahdollisuuteni kansainvälisyysosaamisen kehittämiseen ja osallistun kansainväliseen toimintaan mahdollisuuksien mukaan',
      },
      {
        title: 'Tutustun yleisimpiin työpaikalla käytössä oleviin tietokoneohjelmiin ja työpaikan vuorovaikutustilanteiden kieleen',
      },
      {
        title: 'Tiedostan tulevaisuuden haasteet ja työelämän muutokset',
      },
    ]

  },
  {
    buttonText: 'Arjen ja yhteiskunnallisen osallisuuden taidot',
    detailsTitle: 'Arjen taidot ja yhteiskunnallinen osallisuus',
    description: 'Koulutuksen osassa painottuvat opiskelijan arjessa toimimisen ja yhteiskunnallisen osallisuuden taitojen vahvistaminen. Arjen toimintakyvyn vahvistaminen ja osallisuuden edistäminen nähdään opiskelijan terveyttä ja hyvinvointia sekä osallisuutta edistävänä. Tavoitteena on myös vahvistaa arjen taitojen ja yhteiskunnallisen osallisuuden edellyttämiä tekstitaitoja. ',
    tasks: [
      {
        title: 'Arvioin ja vahvistan toimintakykyäni sekä hyvinvointiani',
      },
      {
        title: 'Tunnen mielen hyvinvoinnin perusteet ja osaan vahvistaa sitä',
      },
      {
        title: 'Kehitän kotitalousosaamistani',
      },
      {
        title: 'Vahvistan arjen ja yhteiskunnallisen osallisuuden edellyttämiä tekstitaitojani ja harjoittelen kielenkäyttäjänä niissä tilanteissa',
      },
      {
        title: 'Perehdyn yhteiskunnan tarjoamiin palveluihin ja osaan hakea tarvitsemiani palveluja',
      },
      {
        title: 'Tunnen yhteiskunnallisen vaikuttamisen tapoja ja toimin niiden mukaisesti',
      },
      {
        title: 'Hankin tietoja ja taitoja taloudellisen päätöksentekoni tueksi',
      },
      {
        title: 'Suunnittelen ja teen arkielämään liittyviä valintoja, päätöksiä ja hankintoja sekä pohdin itsenäisen asumisen mahdollisuuksia ja edellytyksiä',
      },
      {
        title: 'Tunnen turvalliset, vastuulliset ja kestävät toimintatavat opiskelu- ja asuinympäristössäni',
      },
      {
        title: 'Tutustun erilaisiin vapaa-ajanviettomahdollisuuksiin liikunnan, taiteen, kulttuurin tai muiden tapahtumien avulla',
      },

    ]

  },
  {
    buttonText: 'Valinnaiset koulutuksen osat',
    detailsTitle: 'Valinnaiset koulutuksen osat',
    description: 'Opiskelija voi henkilökohtaisen opiskelusuunnitelmansa mukaisesti suorittaa valinnaisia koulutuksen osia omien yksilöllisten tarpeiden, kiinnostuksen ja valmiuksien mukaan koulutuksen järjestäjän paikallisesta tarjonnasta ja/tai muusta (alueellisesta tai valtakunnallisesta) tarjonnasta. Valinnaiset koulutuksen osat voivat koostua yhdestä tai useammasta osasta. Opiskelijoille, joiden äidinkieli on muu kuin opiskelukieli, voidaan järjestää oman äidinkielen opetusta. Valinnaiset opinnot voivat sisältää myös esimerkiksi järjestöissä tehtävää vapaaehtoistyötä ja siihen liittyviä kursseja.',
    tasks: [
      {
        title: "Opiskelijavaikuttaminen ja osallisuus 0-3 viikkoa:",
      },
      {
        title: "Harrastuneisuus ja vapaaehtoistyö 0-3 viikkoa:",
      },
      {
        title: "Henkilökohtainen kuntoutus 0-10 viikkoa:",
      },
    ]
  }
]



export const TUVA_DATA = [
  {
    id: 1,
    title: "Opiskelu- ja urasuunnittelutaidot",
    scope: "2-10 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698963",
    initValue: 2,
    maxValue: 10,
    checked: false,
  },
  {
    id: 2,
    title: "Perustaitojen vahvistaminen",
    scope: "1-30 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698964",
    initValue: 0,
    maxValue: 30,
    checked: false,
  },
  {
    id: 3,
    title: "Lukiokoulutuksen opinnot ja niihin valmentautuminen",
    scope: "1-30 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698965",
    initValue: 0,
    maxValue: 30,
    checked: false,
  },
  {
    id: 4,
    title: "Ammatillisen koulutuksen opinnot ja niihin valmentautuminen",
    scope: "1-30 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698966",
    initValue: 0,
    maxValue: 30,
    checked: false,
  },
  {
    id: 5,
    title: "Työelämätaidot ja työelämässä tapahtuva oppiminen",
    scope: "1-20 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698967",
    initValue: 0,
    maxValue: 20,
    checked: false,
  },
  {
    id: 6,
    title: "Arjen taidot ja yhteiskunnallinen osallisuus",
    scope: "1-20 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698968",
    initValue: 0,
    maxValue: 20,
    checked: false,
  },
  {
    id: 7,
    title: "Valinnaiset opinnot",
    scope: "1-10 viikkoa",
    //url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698969",
    initValue: 0,
    maxValue: 10,
    checked: false,
  },
];

export const VALINNAISET = [
  {
    buttonText: 'Opiskelijavaikuttaminen ja osallisuus 0-3 viikkoa:',
    detailsTitle: 'Opiskelijavaikuttaminen ja osallisuus 0-3 viikkoa:',
    description: 'Opiskelija osaa toimia opiskelijavaikuttajana oppilaitoksessa ja/tai muissa opiskeluympäristöissä.',
    tasks: [
      {
        title: "testi testi testi:",
      },
      {
        title: "testi testi testi:",
      },
      {
        title: "testi testi testi:",
      },
    ]
  },
  {
    buttonText: 'Harrastuneisuus ja vapaaehtoistyö 0-3 viikkoa:',
    detailsTitle: 'Harrastuneisuus ja vapaaehtoistyö 0-3 viikkoa:',
    description: 'Opiskelija osaa vahvistaa osaamistaan omien yksilöllisten tarpeiden, kiinnostuksen ja valmiuksien mukaan harrastuksessa tai vapaaehtoistyössä.',
    tasks: [
      {
        title: "testi testi testi:",
      },
      {
        title: "testi testi testi:",
      },
      {
        title: "testi testi testi:",
      },
    ]
  },
  {
    buttonText: 'Opiskelijavaikuttaminen ja osallisuus 0-3 viikkoa:',
    detailsTitle: 'Opiskelijavaikuttaminen ja osallisuus 0-3 viikkoa:',
    description: 'Opiskelija edistää omaa työ- ja toimintakykyään henkilökohtaisen kuntoutuksen keinoin.',
    tasks: [
      {
        title: "testi testi testi:",
      },
      {
        title: "testi testi testi:",
      },
      {
        title: "testi testi testi:",
      },
    ]
  }
]
export const TUVA_DATA_VALINNAISET = [
  {
    id: 1,
    title: "Opiskelijavaikuttaminen ja osallisuus",
    scope: "0-3 viikkoa",
    initValue: 0,
    maxValue: 3,
    checked: false,
  },
  {
    id: 2,
    title: "Harrastuneisuus ja vapaaehtoistyö",
    scope: "0-3 viikkoa",
    initValue: 0,
    maxValue: 3,
    checked: false,
  },
  {
    id: 3,
    title: "Henkilökohtainen kuntoutus",
    scope: "1-10 viikkoa",
    initValue: 0,
    maxValue: 10,
    checked: false,
  },
  
];
export const STRINGS = [
  {
    tuvaHeading: "TUVA-koulutuksen osat",
    tuvaInstructions:
      "Sijoita opintoviikot laatikoihin valintojesi mukaan, yhteensä 38 viikkoa. Pakolliset viikot ovat merkittynä valmiiksi.",
      tuvaInstructionsForCourseComplete: "Suoritettuasi opintoviikon, klikkaa pokaalia."
  },
];

export const dataPublicTransport = [
    {
      id: 1,
      city: "Helsinki",
      url: "https://www.hsl.fi/"
    },
    {
      id: 2,
      city: "Imatra",
      url: "https://www.imatra.fi/asuminen-ja-ymparisto/joukkoliikenne/"
    },
    {
      id: 3,
      city: "Joensuu",
      url: "https://jojo.joensuu.fi/"
    },
    {
      id: 4,
      city: "Kajaani",
      url: "https://www.kajaaninjoukkoliikenne.fi/"
    },
    {
      id: 5,
      city: "Kokkola",
      url: "https://pohjolanmatka.fi/linjaliikenne/kokkolan-paikallisliikenne/"
    },
    {
      id: 6,
      city: "Kuopio",
      url: "https://vilkku.kuopio.fi/"
    },
    {
      id: 7,
      city: "Lappeenranta",
      url: "https://www.lappeenranta.fi/fi/Kartat-ja-liikenne/Paikallisliikenne/Aikataulut/"
    },
    {
      id: 8,
      city: "Oulu",
      url: "https://www.oulunjoukkoliikenne.fi/reitit-ja-aikataulut/"
    },
    {
      id: 9,
      city: "Pori",
      url: "https://www.pori.fi/joukkoliikenne"
    },
    {
      id: 10,
      city: "Rovaniemi",
      url: "https://www.linkkari.fi/"
    },
    {
      id: 11,
      city: "Seinäjoki",
      url: "https://harmanliikenne.fi/seinajoen-paikallisliikenne/"
    },
    {
      id: 12,
      city: "Tampere",
      url: "https://www.nysse.fi/"
    },
    {
      id: 13,
      city: "Vaasa",
      url: "https://www.vaasa.fi/asu-ja-ela/liikenne-ja-kadut/joukkoliikenne/bussiaikataulut-ja-reitit/"
    }
  ]

export const dataLinks = [
  {
    id: 1,
    title: "Luovin ruokalistat",
    url: "https://luovi.fi/opiskelen-luovissa/ruokalistat/"
  },
  {
    id: 2,
    title: "Opiskelijaintra Masto",
    url: "http://masto.luovi.fi/"
  },
  {
    id: 3,
    title: "Tapahtumakalenteri",
    url: "https://luovi.fi/tutustu-ja-hae-luoviin/tapahtumakalenteri/"
  },
  {
    id: 4,
    title: "Wilma",
    url: "https://luovi.inschool.fi/"
  }
]