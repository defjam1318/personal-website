function insRow18(id, input) {
    //DATABASE
    var groups = [
        'Portland Baroque Orchestra',//0
        'Sonnambula',//1
        'American Bach Soloists',//2
        'Bourbon Baroque',//3
        'Indianapolis Baroque Orchestra',//4
        'Seattle Baroque Orchestra',//5
        'One Found Sound',//6
        'Early Music New York',//7
        'Clarion Music Society',//8
        'LOTNY',//9
        'Amor Artis',//10
        'Philharmonia Baroque Orchestra',//11
        'The Princeton Festival',//12
        'Berkeley Festival & Exhibition',//13
        'La Fiocco',//14
        'Valley Of The Moon Music Festival'//15
    ];
    //PBO
    var pboNames = [
        'Mozart Requiem',//oct 0
        "Handel's Messiah",//dec 1
        'Il Favorito',// feb 2
        'J.S.Bach Mass In B Minor',//apr 3
        'The Leipzig Audition'//may 4
     ];
    var pboDates = [
        'Oct 5-7 2017, 7:30pm',//oct 0
        'Dec 8-11 2017',//dec 1
        'Fri Feb 16-17 2018 7:30pm',//feb 2
        'Sun Feb 18 2018 3:00pm',//feb 3
        'Apr 13-14 2018, 7:00pm',//apr 4
        'May 4-5 2018, 7:30pm',//may 5
        'Sun, May 6 2018, 3:00pm'//may 6
    ];
    var pboVenues = [
        'first baptist church<br />portland OR',//0
        'kaul auditorium<br />portland OR', //1
        'newmark theatre<br />portland OR', //2
        'Trinity Episcopal Cathedral<br />portland OR'//tr 3
    ];
    var pboLinks = [
        'https://pbo.org/concerts-events/crossing-the-channel-immigrant-composers-in-london/',//nov 0
        'https://pbo.org/concerts-events/handels-messiah-portland-2019',//dec 1
        'https://pbo.org/concerts-events/trousers-tiaras-gender-roles-in-handel-operas/',//feb 2
        'https://pbo.org/concerts-events/theatrical-concerti-comedy-delight-and-drama/',//mar- carla 3
        'https://pbo.org/concerts-events/the-four-seasons-in-celebration-of-monica-huggett/',//mar-gala 4
        'https://pbo.org/concerts-events/trinity-episcopal-cathedral-and-pbo/',//trinity apr 5
        'https://pbo.org/concerts-events/english-echoes-neoclassical-reflections-on-17th-century-england/',//may 6
        'https://www.portlandopera.org/production/bajazet/',//opera 7
        'https://pbo.org'//8 generic
    ];
    //Sonnambula
    var sonnambulaNames = [
        'Elisabeth Jacquet De La Guerre:Musician In Paris',//sep 0
        "Leonora Duarte: Converso In Antwerp",// nov 1
        'Leonora Duarte: Converso In Antwerp',//dec 2
        'Marianna Martines: Classical Composer In Vienna'// mar 3
    ];
    var sonnambulaDates = [
        'Thu, Sep 14 2017, 7:30pm',//sep 0
        'Thu, Nov 16 2017, 7:30pm',//nov 1
        'Thu, Dec 21 2017, 7:00pm',//dec 2
        'Thu, Mar 8 2018, 7:00pm'//mar 3
    ];
    var sonnambulaVenues = [
        '​Baruch Performing Arts Center<br />New York NY',//sep 0
        'The Mansion Of Strathmore<br />North Bethesda, MD',//nov 1
        'The Academy Of Arts And Letters Library<br />New York, NY',//dec 2
        'Saint Ignatius Of Antioch Episcopal Church<br />New York NY'//mar 3
    ];
    var sonnambulaLinks = [
        'http://www.sonnambula.org/2019-2020-explorations.html',//all 0
        'http://www.sonnambula.org/'//1 generic
    ];
    //ABS
    var absNames = [
        "Bach's Orchestral Suites",//may 0
        'The Glorious Court Of Dresden',//aug 1
        'To Dresden With Love'//aug 2
    ];
    var absDates = [
        'Fri, May 11 2018, 8:00pm',//may 0
        'Sat, May 12 2018, 8:00pm',//may 1
        'Sun, May 13 2018, 4:00pm',//may 2
        'Mon, May 14 2018, 7:00pm',//may 3
        'Fri, Aug 3 2018, 8:00pm',//aug 4
        'Sat, Aug 4 2018, 8:00pm'//aug 5
    ];
    var absVenues = [
        'Herbst Theatre<br />San Francisco CA',//nye 0
        'St. Stephen’s Church<br /> Belvedere CA',// 1
        'First Congregational Church<br />Berkeley CA',//2
        'St. Mark’s Lutheran Church<br />San Francisco CA',//3
        'Davis Community Church<br />Davis CA'//4
    ];
    var absLinks = [
        'https://americanbach.org/NYE2019.html',//nye 0
        'https://americanbach.org/OrpheanEnchantments2020.html',//jan 1
        'https://americanbach.org/'//generic 2
    ];
    //Bourbon Baroque
    var bbNames = [
        'Music From The Ursiline Manuscript',//0 sep
        "Handel's Messiah"//1 nov
    ];
    var bbDates = [
        'Sat, Sep 23 2017, 7:00pm',//sep 0
        'Nov 25-26 2017',//1
    ];
    var bbVenues = [
        'Motherhouse Chapel<br />Louisville KY',//0
        'St. Brigid Catholic Church<br />Louisville KY'//1
    ];
    var bbLinks = [
        'https://www.bourbonbaroque.com/home/'//0 generic
    ];
    //Indy Baroque
    var iboNames = [
        "Love Letter To Telemann" //0 feb
    ];
    var iboDates = [
        'Sun Feb 25 2018 4:00pm',//0 feb
        'Mon February 26 2018 7:30pm'//1 feb
    ];
    var iboVenues = [
        'Basile Theater At The Glick Indiana History Center<br />Indianapolis IN',//0
        'Christel De Haan Fine Arts Building<br />Indianapolis IN'//1
    ];
    var iboLinks = [
        'https://www.indybaroque.org/'//0 generic
    ];
    //SBO
    var sboNames = [
        'The Splendor Of Dresden'//0
    ];
    var sboDates = [
        'Sun, Apr 8 2018, 2:30pm'//0
    ];
    var sboVenues = [
        'Benaroya Hall<br />Seattle WA',//0
        'Illsley Ball Nordstrom Recital Hall<br />Seattle WA'//1
    ];
    var sboLinks = [
        'http://www.earlymusicseattle.org/events/music-for-love-and-war-rachel-barton-pine-violin-soloist/',//0
        'http://www.earlymusicseattle.org/events/seattle-baroque-orchestra-splendor-of-dresden/',//1
        'http://www.earlymusicseattle.org/'//2 generic
    ];
    //OFS
    var ofsNames = [
        'Monster Masquerade', //0
        'A Major Carnival'//1
 
    ];
    var ofsDates = [
        'Fri, Oct 27 2017, 8:00pm',//oct 0
        'Fri, Feb 9 2018, 8:00pm'//feb 1
    ];
    var ofsVenues = [
        "Monument SF<br />San Francisco CA", //0
        'Heron Arts,<br />San Francisco CA'//1
    ];
    var ofsLinks = [
        'http://www.onefoundsound.org/concerts/'//0
    ];
    //EMNY
    var emnyNames = [
        'Barokorkest: 18th Century Holland & Flanders',//0 oct
        "Haydn In Esterhazy: Genial Kapellmeister"//1 mar
    ];
    var emnyDates = [
        'Sun, Oct 22 2017, 5:00pm',//oct 0
        'Sat Mar 3 2018, 7:30pm',//mar 1
    ];
    var emnyVenues = [
        'First Church Of Christ, Scientist<br />New York NY'//0
    ];
    var emnyLinks = [
        'https://www.earlymusicny.org/concert-season'//0 generic
    ];
    //clarion
    var clarionNames = [
        'Handel Royal Fireworks And Water Music',//0 nov
        "Clarion At 60"//1 may
    ];
    var clarionDates = [
        'Mon, Nov 6 2017, 8:00pm',//nov 0
        'Wed, May 23 2018, 7:30pm',//may 1
    ];
    var clarionVenues = [
        'Church Of Saint Thomas Moore<br />New York NY',//0 nov
        'Park Avenue Christian Church<br />New York NY'//1 may
    ];
    var clarionLinks = [
        'http://www.clarionsociety.org/events/2017-18-season/handel_royal.html',//0 nov
        'http://clarionsociety.org/events/2017-18-season/clarion_60.html',//1 may
        'http://clarionsociety.org/'//2 generic
    ];
    //LOTNY
    var lotnyNames = [
        'Piramo E Tisbe'//0 mar
    ];
    var lotnyDates = [
        'March 22-25 2018, 7:30pm'//0
    ];
    var lotnyVenues = [
        'Baruch Performing Arts Center<br />New York NY'//0
    ];
    var lotnyLinks = [
        'https://www.lotny.org/'//0 generic
    ];
    //amor artis
    var aaNames = [
        'Reflection And Refuge'//0 mar
    ];
    var aaDates = [
        'Sat, Mar 18 2018, 4:00pm'//0
    ];
    var aaVenues = [
        "Basilica Of St. Patrick's Old Cathedral<br />New York NY"//0
    ];
    var aaLinks = [
        'http://www.amorartis.org/'//0 generic
    ];
    //philharmonia
    var pbosouthNames = [
        "Beethoven Unleashed",//may 0
        "Handel's Water Music<br />Norfolk Chamber Music Festival",//jul 1
        "Handel's Atalanta<br />Caramoor Summer Festival"//jul 2
    ];
    var pbosouthDates = [
        'Wed, Apr 25 2018, 7:30pm',//apr 0
        'Fri, Apr 27 2018, 8:00pm',//apr 1
        'Apr 28-29 2018',//apr 2
        'Sat, Jul 21 2018, 8:00pm',//jul 3
        'Sun, July 22 2018, 4:00pm'//jul1 4
    ];
    var pbosouthVenues = [
        'Bing Concert Hall<br />Stanford CA',//apr 0
        'Herbst Theatre<br />San Francisco CA',//apr 1
        'First Congregational Church<br />Berkeley CA',// apr2
        'Norfolk, CT',//norfolk jul 3
        'Venetian Theater<br />Katonah NY'//caramoor jul1 4
    ];
    var pbosouthLinks = [
        'https://philharmonia.org/2017-2018-season/beethoven-unleashed/',//apr 0
        'https://norfolk.yale.edu/faculty-artist-series/special-events/gala-2018/',//jul 1
        'https://www.caramoor.org/events/handels-atalanta/'//jul1 2
    ];
    //Princeton Festival
    var tpfNames = [
        'Princeton Festival Baroque Orchestra',//0 jun
        "Princeton Festival Baroque Chorus And Orchestra"//1 jun
    ];
    var tpfDates = [
        'Wed, Jun 27 2018, 7:30pm',//jun 0
        'Sat, Jun 30, 7:00pm',//jun 1
    ];
    var tpfVenues = [
        'Miller Chapel<br />Princeton NJ'//0
    ];
    var tpfLinks = [
        'https://princetonfestival.org/'//0 generic
    ];
    //berkeley festival
    var bfxNames = [
        'Musicians Of The Valley Of The Moon Festival<br />An Die Musik-The Narrative Power Of Schubert And Schumann'//0 jun
    ];
    var bfxDates = [
        'Sat, Jun 9 2018, 7:30pm'//0 jun
    ];
    var bfxVenues = [
        "First Congregational Church<br />Berkeley CA"//0
    ];
    var bfxLinks = [
        'http://www.berkeleyfestival.org/musicians-of-the-valley-of-the-moon-festival-tanya-tomkins-eric-zivian-directors/'//0 jun
    ];
    //la fiocco
    var fioNames = [
        'Delices De Versailles'//0 jun
    ];
    var fioDates = [
        'Sat, Jun 2, 7:30pm',//jun 0
        'Sun, Jun 3, 3:00pm',//jun 1
    ];
    var fioVenues = [
        'Lutheran Church Of The Messiah<br />Princeton NJ',//0
        'Trinity Episcopal Church<br />Solebury PA'//1
    ];
    var fioLinks = [
        'https://www.lafiocco.org/'//0 generic
    ];
    //valley
    var vmmfNames = [
        "Festival Founders' Opening Celebration",//0 jul
        "Opening Concert:moonlight In Vienna"//1 jul
    ];
    var vmmfDates = [
        'Sat, Jul 14 2018',//jul 0
        'Sun, Jul 15 2018, 4:00pm',//jul 1
    ];
    var vmmfVenues = [
        'Sonoma CA',//0
        'Hanna Center<br />Sonoma CA'//1
    ];
    var vmmfLinks = [
        'https://valleyofthemoonmusicfestival.org/2018-festival',//0
        'https://valleyofthemoonmusicfestival.org/'//1 generic
    ];

    //SWITCH
    var num = Number(input.shift());
    var group = input.shift();
    var set = input.shift();
    var venues = [];
    var dates = [];
    var link = '';
    var name = '';
    switch (group) {
        case 'pbo': {
            group = groups[0];
            switch (set) {
                case 'oct': {
                    name = pboNames[0];
                    dates = [pboDates[0]];
                    venues = [pboVenues[3]];
                    link = pboLinks[8];
                } break;
                case 'dec': {
                    name = pboNames[1];
                    dates = [pboDates[1]];
                    venues = [pboVenues[0]];
                    link = pboLinks[8];
                } break;
                case 'feb': {
                    name = pboNames[2];
                    dates = [pboDates[2], pboDates[3]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[8];
                } break;
                case 'apr': {
                    name = pboNames[3];
                    dates = [pboDates[4]];
                    venues = [pboVenues[3]];
                    link = pboLinks[8];
                } break;
                case 'may': {
                    name = pboNames[4];
                    dates = [pboDates[5], pboDates[6]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[8];
                } break;
            }
        } break;
        case 'sonnambula': {
            group = groups[1];
            switch (set) {
                case 'sep': {
                    name = sonnambulaNames[0];
                    dates = [sonnambulaDates[0]];
                    venues = [sonnambulaVenues[0]];
                    link = sonnambulaLinks[1];
                } break;
                case 'nov': {
                    name = sonnambulaNames[1];
                    dates = [sonnambulaDates[1]];
                    venues = [sonnambulaVenues[1]];
                    link = sonnambulaLinks[1];
                } break;
                case 'dec': {
                    name = sonnambulaNames[2];
                    dates = [sonnambulaDates[2]];
                    venues = [sonnambulaVenues[2]];
                    link = sonnambulaLinks[1];
                } break;
                case 'mar': {
                    name = sonnambulaNames[3];
                    dates = [sonnambulaDates[3]];
                    venues = [sonnambulaVenues[3]];
                    link = sonnambulaLinks[1];
                } break;
            }
        } break;
        case 'abs': {
            group = groups[2];
            switch (set) {
                case 'may': {
                    name = absNames[0];
                    dates = [absDates[0], absDates[1], absDates[2], absDates[3]];
                    venues = [absVenues[1], absVenues[2], absVenues[3], absVenues[4]];
                    link = absLinks[2];
                } break;
                case 'aug': {
                    name = absNames[1];
                    dates = [absDates[4]];
                    venues = [absVenues[3]];
                    link = absLinks[2];
                } break;
                case 'aug1': {
                    name = absNames[2];
                    dates = [absDates[5]];
                    venues = [absVenues[3]];
                    link = absLinks[2];
                } break;   
            }
        } break;
        case 'bb': {
            group = groups[3];
            switch (set) {
                case 'sep': {
                    name = bbNames[0];
                    dates = [bbDates[0]];
                    venues = [bbVenues[0]];
                    link = bbLinks[0];
                } break;
                case 'nov': {
                    name = bbNames[1];
                    dates = [bbDates[1]];
                    venues = [bbVenues[1]];
                    link = bbLinks[0];
                } break;
            }
        } break;
        case 'ibo': {
            group = groups[4];
            switch (set) {
                case 'feb': {
                    name = iboNames[0];
                    dates = [iboDates[0], iboDates[1]];
                    venues = [iboVenues[0], iboVenues[1]];
                    link = iboLinks[0];
                } break;
            }
        } break;
        case 'sbo': {
            group = groups[5];
            switch (set) {
                case 'apr': {
                    name = sboNames[0];
                    dates = [sboDates[0]];
                    venues = [sboVenues[1]];
                    link = sboLinks[1];
                } break;
            }
        } break;
        case 'ofs': {
            group = groups[6];
            switch (set) {
                case 'oct': {
                    name = ofsNames[0];
                    dates = [ofsDates[0]];
                    venues = [ofsVenues[0]];
                    link = ofsLinks[0];
                } break;
                case 'feb': {
                    name = ofsNames[1];
                    dates = [ofsDates[1]];
                    venues = [ofsVenues[1]];
                    link = ofsLinks[1];
                } break;
            }
        } break;
        case 'emny': {
            group = groups[7];
            switch (set) {
                case 'oct': {
                    name = emnyNames[0];
                    dates = [emnyDates[0]];
                    venues = [emnyVenues[0]];
                    link = emnyLinks[0];
                } break;
                case 'mar': {
                    name = emnyNames[1];
                    dates = [emnyDates[1]];
                    venues = [emnyVenues[0]];
                    link = emnyLinks[1];
                } break;
            }
        } break;
        case 'clarion': {
            group = groups[8];
            switch (set) {
                case 'nov': {
                    name = clarionNames[0];
                    dates = [clarionDates[0]];
                    venues = [clarionVenues[0]];
                    link = clarionLinks[0];
                } break;
                case 'may': {
                    name = clarionNames[1];
                    dates = [clarionDates[1]];
                    venues = [clarionVenues[1]];
                    link = clarionLinks[1];
                } break;
            }
        } break;
        case 'lotny': {
            group = groups[9];
            switch (set) {
                case 'mar': {
                    name = lotnyNames[0];
                    dates = [lotnyDates[0]];
                    venues = [lotnyVenues[0]];
                    link = lotnyLinks[0];
                } break;
            }
        } break;
        case 'aa': {
            group = groups[10];
            switch (set) {
                case 'mar': {
                    name = aaNames[0];
                    dates = [aaDates[0]];
                    venues = [aaVenues[0]];
                    link = aaLinks[0];
                } break;
            }
        } break;
        case 'pbosouth': {
            group = groups[11];
            switch (set) {
                case 'apr': {
                    name = pbosouthNames[0];
                    dates = [pbosouthDates[0], pbosouthDates[1], pbosouthDates[2]];
                    venues = [pbosouthVenues[0], pbosouthVenues[1], pbosouthVenues[2]];
                    link = pbosouthLinks[0];
                } break;
                case 'jul': {
                    name = pbosouthNames[1];
                    dates = [pbosouthDates[3]];
                    venues = [pbosouthVenues[3]];
                    link = pbosouthLinks[1];
                } break;
                case 'jul1': {
                    name = pbosouthNames[2];
                    dates = [pbosouthDates[4]];
                    venues = [pbosouthVenues[4]];
                    link = pbosouthLinks[2];
                } break;   
            }
        } break;
        case 'tpf': {
            group = groups[12];
            switch (set) {
                case 'jun': {
                    name = tpfNames[0];
                    dates = [tpfDates[0]];
                    venues = [tpfVenues[0]];
                    link = tpfLinks[0];
                } break;
                case 'jun1': {
                    name = tpfNames[1];
                    dates = [tpfDates[1]];
                    venues = [tpfVenues[0]];
                    link = tpfLinks[0];
                } break;
            }
        } break;
        case 'bfx': {
            group = groups[13];
            switch (set) {
                case 'jun': {
                    name = bfxNames[0];
                    dates = [bfxDates[0]];
                    venues = [bfxVenues[0]];
                    link = bfxLinks[0];
                } break;
            }
        } break;
        case 'fio': {
            group = groups[14];
            switch (set) {
                case 'jun': {
                    name = fioNames[0];
                    dates = [fioDates[0], fioDates[1]];
                    venues = [fioVenues[0], fioDates[1]];
                    link = fioLinks[0];
                } break;
            }
        } break;
        case 'vmmf': {
            group = groups[15];
            switch (set) {
                case 'jul': {
                    name = vmmfNames[0];
                    dates = [vmmfDates[0]];
                    venues = [vmmfVenues[0]];
                    link = vmmfLinks[1];
                } break;
                case 'jul1': {
                    name = vmmfNames[1];
                    dates = [vmmfDates[1]];
                    venues = [vmmfVenues[1]];
                    link = vmmfLinks[1];
                } break;
            }
        } break;

    }
    //TR APPEND
    var event = document.getElementById(id).insertRow(num);
    event.className = 'event';
    var eventName = event.insertCell(0);
    eventName.className = 'eventname';
    var eventDate = event.insertCell(1);
    var eventVenue = event.insertCell(2);
    var a = document.createElement('a');
    eventName.appendChild(a);
    a.innerHTML = group + '<br />' + name;
    a.href = link;
    a.target = '_blank'
    eventDate.className = 'eventdate';
    eventVenue.className = 'eventvenue';
    eventDate.innerHTML = dates[0];
    eventVenue.innerHTML = venues[0];
    if (venues.length > 1) {
        eventName.rowSpan = venues.length;
        for (let i = 1; i < venues.length; i++) {
            num++;
            var extra = document.getElementById(id).insertRow(num);
            var extraDate = extra.insertCell(0);
            extraDate.innerHTML = dates[i];
            extraDate.className = 'eventdate';
            var extraVenue = extra.insertCell(1);
            extraVenue.className = 'eventvenue';
            extraVenue.innerHTML = venues[i];
        }

    }

}

insRow18('mar', [1, 'pbo', 'nov']);

