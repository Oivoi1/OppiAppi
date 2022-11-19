// Data 

// Storage keys
export const COMPETENCE_STORAGE_KEY = '@competence_data'

// Vibration patterns. Time unit is ms. Odd cells are pause and even cells are vibration duration.

export const NOTIFY_VIBRATE = [ 0, 200 ]; // 0 ms pause, 200 ms vibration
export const SHORT_VIBRATE = [ 0, 100 ]; // 0 ms pause, 100 ms vibration
export const LONG_VIBRATE = [ 0, 500 ]; // 0 ms pause, 500 ms vibration

// Icon resources
export const ICONS = {
  'candyBlue': require( '../assets/candy_blue.png' ),
  'candyGreen': require( '../assets/candy_green.png' ),
  'backArrow': require( '../assets/back_arrow.png' ),
  'unchecked': require( '../assets/unchecked_button.png' ),
  'checked': require( '../assets/checked_button.png' )
}

// Numeric constants
export const NUMERIC = {
  'opacityTouchFade': 0.6,
}

// Theme colors
export const THEME = {
  'black': '#000',
  'lightBackground': '#F3F2EC',
  'darkBlue': '#023B5D',
  'blue': '#0693E3',
  'lightBlue': '#8ED1FC',
  'brightRed': '#D3232E',
  'gray': '#ABB8C3',
  'lightGray': '#d9d9d9'
}

export const COMPETENCE_DATA = [
  {
    buttonText: 'Hyvinvointi -osaaminen',
    detailsTitle: 'Minä osaan: Hyvinvointiosaaminen',
    description: 'Opiskelija ymmärtää terveyden ja terveellisten elämäntapojen merkityksen. Hän vaalii fyysistä, psyykkistä ja sosiaalista toimintakykyään ja hyvinvointiaan. Opiskelija omaksuu hyvinvointiaan tukevia toimintatapoja sekä tunnistaa niitä edistäviä yhteisöjä. Hän osaa suunnitella omaa ajankäyttöään siten, että opiskelu ja vapaa-aika vuorottelevat tarkoituksenmukaisesti. Opiskelija osaa hakea tietoa, apua ja tukea oman hyvinvointinsa ylläpitämiseen sekä hakeutua tarvittaessa hyvinvoinnin ja terveydenhuollon palveluiden pariin.',
    tasks: [
      {
        title: 'Tunnistan terveyttä ja hyvinvointia edistäviä ja haittaavia tekijöitä.',
      },
      {
        title: 'Ymmärrän omien valintojen merkityksen hyvinvoinnilleni.',
      },
      {
        title: 'Pidän huolta omasta fyysisestä, psyykkisestä ja sosiaalisesta hyvinvoinnistani.',
      },
      {
        title: 'Ymmärrän opiskelun, levon ja vapaa-ajan vuorottelun merkityksen hyvinvoinnille.',
      },
      {
        title: 'Pidän yllä opintoja tukevaa vuorokausirytmiä.',
      },
      {
        title: 'Osaan käyttää alueen sosiaali- ja terveydenhuollon palveluita.',
      },
      {
        title: 'Osallistun omaa hyvinvointia edistäviin liikunta- ja kulttuurimuotoihin.',
      },
    ]
  },
  {
    buttonText: 'Monilukutaito',
    detailsTitle: 'Minä osaan: Monilukutaito',
    description: 'Opiskelija kehittyy viestien tulkitsijana ja tuottajana sekä harjaantuu toimimaan erilaisten tekstien kanssa. Opiskelija osaa tarkastella ja tulkita kriittisesti erilaisia tekstejä. Tekstillä tarkoitetaan laajasti sekä puhuttuja että kirjoitettuja tekstejä, jotka sisältävät erilaisia kielimuotoja arkikielestä opiskelun kieleen ja eri tiedonalojen käsitteelliseen kieleen. Luku- ja kirjoitustaidon ohella opiskelija kehittää kuvanlukutaitoaan, medialukutaitoaan ja numeerista lukutaitoaan opiskelusuunnitelmansa mukaisesti.',
    tasks: [
      {
        title: 'Osaan toimia erilaisissa vuorovaikutustilanteissa.',
      },
      {
        title: 'Kirjoitan eri tilanteisiin soveltuvaa tekstiä.',
      },
      {
        title: 'Hankin opinnoissani tarvittavia matematiikan taitoja.',
      },
      {
        title: 'Haen tietoa eri lähteistä.',
      },
      {
        title: 'Osaan arvioida tiedon luotettavuutta.',
      },
      {
        title: 'Osaan käyttää eri viestintätapoja.',
      },
      {
        title: 'Ymmärrän tekijänoikeudet.',
      }
    ]
  },
  {
    buttonText: 'Digiosaaminen',
    detailsTitle: 'Minä osaan: Digiosaaminen',
    description: 'Opiskelija osaa käyttää digitaalisia palveluita osana oppimista ja ongelmanratkaisua. Opiskelija osaa toimia vastuullisesti sosiaalisessa mediassa sekä käyttää digitaalisia palveluita asioidessaan viranomaisten ja muiden sähköisiä asiointia edellyttävien palveluntarjoajien kanssa.',
    tasks: [
      {
        title: 'Kehitän ja päivitän digiosaamistani.',
      },
      {
        title: 'Käytän sähköisiä välineitä ja sovelluksia.',
      },
      {
        title: 'Toimin sähköisissä oppimisympäristöissä asiallisesti.',
      },
      {
        title: 'Toimin vastuullisesti sosiaalisessa mediassa.',
      },
      {
        title: 'Käytän digitaalisia palveluita.',
      },
    ]
  },
  {
    buttonText: 'Ympäristö- osaaminen',
    detailsTitle: 'Minä osaan: Ympäristöosaaminen',
    description: 'Opiskelija ymmärtää kestävän kehityksen merkityksen yhteiskunnalle ja maapallolle ja osaa toimia kestävän kehityksen mukaisesti. Opiskelija tunnistaa ja ymmärtää keskeisiä ympäristön muutoksia  ja ihmisen toiminnan merkityksen niihin. Hän tuntee kestävän kehityksen tavoitteet ja ymmärtää ilmiöiden vaikutuksen toisiinsa, mukaan lukien kulttuurisen, sosiaalisen ja taloudellisen näkökulman. Opiskelijaa osaa toimia kestävää elämäntapaa tukien ja ottaa vastuuta ympäristöstä yhteistyössä muiden kanssa.',
    tasks: [
      {
        title: 'Pohdin kestävän tulevaisuuden periaatteiden toteutumista omassa ja yhteisöni toiminnassa.',
      },
      {
        title: 'Toimin kestävän tulevaisuuden periaatteiden mukaisesti.',
      },
      {
        title: 'Ymmärrän, millaisia vaikutuksia omalla ja muiden toiminnalla on.',
      },
      {
        title: 'Kannustan muita toimimaan kestävän tulevaisuuden periaatteiden mukaan.',
      },
    ]
  },
  {
    buttonText: 'Kulttuuri- osaaminen',
    detailsTitle: 'Minä osaan: Kulttuuriosaaminen',
    description: 'Opiskelija syventää tietojaan ja ymmärrystään omasta identiteetistään sekä opiskeluyhteisön ja yhteiskunnan moninaisuudesta, jossa erilaiset identiteetit, kielet, uskonnot ja katsomukset elävät rinnakkain ja vuorovaikutuksessa keskenään. Opiskelija saa kokemuksia kansainvälisyydestä omassa arjessaan ja opiskeluympäristössään sekä esimerkiksi vierailujen, kulttuuritapahtumien, verkostoyhteistyön tai muun yhteistön kautta. Mahdollinen kieliprofiilin laatiminen tukee osaltaan opiskelijan ymmärrystä kielellisestä identiteetistään sekä hänen kasvuaan kielenoppijana ja -käyttäjänä.',
    tasks: [
      {
        title: 'Tutustun itseeni.',
      },
      {
        title: 'Hyväksyn itseni ja yhteisöni jäsenet omana itsenään.',
      },
      {
        title: 'Ymmärrän erilaisia tapoja elää.',
      },
      {
        title: 'Pohdin omaa kulttuuriani.',
      },
      {
        title: 'Osaan toimia monikulttuurisessa maailmassa.',
      },
      {
        title: 'Hankin kokemuksia kansainvälisyydestä.',
      }
    ]
  },

  {
    buttonText: 'Yhteiskunta- osaaminen',
    detailsTitle: 'Minä osaan: Yhteiskuntaosaaminen',
    description: 'Opiskelija ymmärtää demokraattisen, oikeudenmukaisen sekä tasa-arvoon ja yhdenvertaisuuteen perustuvan yhteiskunnan toimintaperiaatteita ja rakenteita. Hän osaa vaikuttaa oman ryhmänsä ja oppilaitoksensa asioihin sekä ymmärtää, miten yhteiskunnallisiin kysymyksiin voi ottaa kantaa.  Opiskelija omaksuu aktiivisen kansalaisuuden ja toimijuuden taitoja. Opiskelija ymmärtää työn merkityksen yksilön elämässä ja yhteiskunnassa.',
    tasks: [
      {
        title: 'Tähtään työelämään.',
      },
      {
        title: 'Osallistun oman yhteisöni päätöksentekoon.',
      },
      {
        title: 'Toimin tasa-arvoisesti ja oikeudenmukaisesti.',
      },
      {
        title: 'Tunnen demokratian periaatteet.',
      },
      {
        title: 'Tutustun yhteiskunnan toimintaan ja vaikuttamisen eri tapoihin.',
      },

    ]
  },
  {
    buttonText: 'Vuorovaikutus- osaaminen',
    detailsTitle: 'Minä osaan: Vuorovaikutusosaaminen',
    description: 'Opiskelija pyrkii toimimaan tilanteen vaatimalla tavalla erilaisissa vuorovaikutustilanteissa sekä ilmaisee erilaisia näkökantoja rakentavasti. Hän oppii kuuntelemaan ja kunnioittamaan toisten näkemyksiä ja tuomaan omia näkökulmiaan esille yksilönä ja ryhmän jäsenenä sekä kehittää empatiakykyään. Opiskelija osaa käyttää viestinnässä eri kieliä asianmukaisesti ja toimivasti. Opiskelija osaa viestiä asianmukaisesti myös erilaisilla sosiaalisen median alustoilla.',
    tasks: [
      {
        title: 'Osaan kuunnella ja keskustella huomioiden toiset.',
      },
      {
        title: 'Tunnistan roolit erilaisissa yhteisöissä ja vuorovaikutustilanteissa.',
      },
      {
        title: 'Osallistun turvallisen ilmapiirin rakentamiseen yhdessä muun opiskelijayhteisön kanssa.',
      },
      {
        title: 'Kunnioitan eri yhteisöjen tapoja toimia.',
      },
      {
        title: 'Harjoittelen tunnetaitoja.',
      },
    ]
  },
  {
    buttonText: 'Oppimaan oppiminen',
    detailsTitle: 'Minä osaan: Oppimaan oppiminen',
    description: 'Opiskelija osaa hankkia tietoa sekä jäsentää, arvioida ja soveltaa sitä. Hän osaa ottaa vastuuta opinnoistaan ja suunnitella niitä tavoitteellisesti. Hän tunnistaa ja osaa käyttää tarkoituksenmukaisia ja monipuolisia oppimistapoja ja -strategioita ja ymmärtää vertaisryhmän ja muun lähipiirin merkityksen oppimisen ja opiskelun tukena. Opiskelija kehittää opiskelukielen taitoaan tavoitteellisesti siten, että pystyy käyttämään puhuttua ja kirjoittua kieltä erilaisissa oppimisympäristöissä.',
    tasks: [
      {
        title: 'Tunnistat omia vahvuuksiasi.',
      },
      {
        title: 'Tunnistat, mihin tarvitset apua ja ohjausta.',
      },
      {
        title: 'Suunnittelet omia tavoitteitasi ja opintojasi.',
      },
      {
        title: 'Etsin aktiivisesti tietoa.',
      },
      {
        title: 'Tiedän miten opin parhaiten.',
      },
      {
        title: 'Osaan toimia erilaisissa oppimisympäristöissä.',
      },
      {
        title: 'Vahvistan suomen kielen taitoani.',
      },
      {
        title: 'Otan vastuun opinnoistani.',
      },
      {
        title: 'Osaan toimia itsenäisesti ja ryhmässä.',
      },
    ]
  }
]