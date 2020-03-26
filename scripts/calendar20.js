function insRow(id, input) {
    //DATABASE
    var groups = [
        'Portland Baroque Orchestra',//0
        'Sonnambula',//1
        'American Bach Soloists',//2
        'Pacific Baroque Orchestra',//3
        'Manhattan Choral Ensemble',//4
        'Seattle Baroque Orchestra',//5
        'Trinity Baroque Orchestra', //6
        'Indianapolis Baroque Orchestra'//7
    ];
    //PBO
    var pboNames = [
        'Crossing the Channel: Immigrant Composers in London',//nov 0
        "Handel's Messiah",//dec 1
        'Trousers & Tiaras: Gender Roles in Handel Operas',// feb 2
        'Theatrical Concerti: Comedy, Delight, and Drama',//mar- carla 3
        'The Four Seasons in Celebration of Monica Huggett',//mar-gala 4
        'Trinity Episcopal Cathedral and PBO',//trinity apr 5
        'English Echoes: Neoclassical Reflections on 17th Century England',//may 6
        'BAJAZET: A Collaboration with Portland Opera',// opera 7
        'The Brandenburgs: Six Iconic Concertos',//oct 8
        'Mendelssohn & Brahms: Grand Chamber Works'//octch 9
    ];
    var pboDates = [
        'nov 22-23 2019, 7:30pm',//nov 0
        'sun, nov 24 2019, 3:00pm',//nov 1
        'dec 13-16 2019',//dec 2
        'feb 14-15 2020, 7:30pm',//feb 3
        'sun, feb 16 2020, 3:00pm',//feb 4
        'mar 13-14 2020, 7:30pm',//mar 5
        'sun, mar 15 2020, 3:00pm',//mar 6
        'sat, mar 21 2020, 7:30pm',//mar gala 7
        'apr 24-25 2020, 7:00pm',//apr trinity 8
        'may 8-9 2020, 7:30pm',//may 9
        'sun, may 10 2020, 3:00pm',//may 10
        'mar 20, 22, 24, 26, 28 2020',//opera 11
        'oct 18-19 2019, 7:30pm',//oct 12
        'oct 20 2019, 3:00pm',//oct 13
        'oct 25 2019, 7:30pm'//octch 14
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
        'https://pbo.org/'//generic 8
    ];
    //Sonnambula
    var sonnambulaNames = [
        'El Laurel de Apolo: Zarzuela from the Baroque to the New World<br />Presented by ​Houston Early Music',//houston jan 0
        "Women's Voices: Early Modern Women Composers in Context<br />Presented by ​Friends of Chamber Music, Troy, NY",//troy apr 1
        'Dances from Renaissance & Baroque Spain<br/>Presented by the ​Indianapolis Early Music Festival',//ind jun 2
        '​Leonora Duarte (1610–1678): Converso Composer in Antwerp<br />​Presented by Early Music Ann Arbor',//sep 3
        'Sound Carving: Sacred and Profane Music of the Austrian Baroque<br />​​Presented by BPAC'//oct 4
    ];
    var sonnambulaDates = [
        'fri, jan 31 2020, 7:30pm',//houston 0
        'sat, apr 4 2020, 7:30pm',//troy 1
        'fri, jun 12 2020',//indy 2
        'Fri, Sep 20 2019, 8:00pm',//sep 3
        'sat, sep 21 2019, 8:00pm',//sep 4
        'fri, oct 11 2019, 7:30pm'//oct 5
    ];
    var sonnambulaVenues = [
        '​Christ Church Cathedral<br />Houston, TX',//houston 0
        'Kiggins Auditorium, Slocum Hall, Emma Willard School<br />Troy, NY',//troy 1
        'venue TBA',//indy jun 2
        'Congregational Church of Birmingham<br />Bloomfield Hills MI',//sep 3
        "St. Andrew’s Episcopal Church<br />Ann Arbor MI",//sep 4
        'Baruch Performing Arts Center<br />New York NY'//oct 5
    ];
    var sonnambulaLinks = [
        'http://www.sonnambula.org/2019-2020-explorations.html'//all 0
    ];
    //ABS
    var absNames = [
        "A Baroque New Year's Eve at the Opera",//nye 0
        'Orphean Enchantments'//jan 1
    ];
    var absDates = [
        'tue, dec 31 2019, 4:00pm',//nye 0
        'fri, jan 24 2020, 8:00pm',//jan 1
        'sat, jan 25 2020, 7:00pm',//jan 2
        'sun, jan 26 2020, 4:00pm',//jan 3
        'mon, jan 27 2020, 7:00pm'//jan 4
    ];
    var absVenues = [
        'Herbst Theatre<br />San Francisco CA',//nye 0
        'St. Stephen’s Church<br /> Belvedere CA',//jan 1
        'First Congregational Church<br />Berkeley CA',//2
        'St. Mark’s Lutheran Church<br />San Francisco CA',//3
        'Davis Community Church<br />Davis CA'//4
    ];
    var absLinks = [
        'https://americanbach.org/NYE2019.html',//nye 0
        'https://americanbach.org/OrpheanEnchantments2020.html'//jan 1
    ];
    //Pacific Baroque Orchestra
    var pboNorthNames = [
        "handel's messiah"//0
    ];
    var pboNorthDates = [
        'fri, nov 29 2019, 7:30pm',//0
        'sat, nov 30 2019, 8:00pm',//1
        'sun, dec 1 2019, 3:00pm'//2
    ];
    var pboNorthVenues = [
        'Grosvenor Theatre - Kay Meek Arts Centre<br />West Vancouver BC, Canada',//0
        'Chan Shun Concert Hall at the Chan Centre for the Performing Arts<br />Vancouver BC, Canada',//1
        'ACT Centre Main Stage<br />Maple Ridge BC, Canada'//2
    ];
    var pboNorthLinks = [
        'http://www.earlymusic.bc.ca/events/handel-messiah/'//0
    ];
    //Manhattan Choral Ensemble
    var mceNames = [
        "Handel's Messiah" //0
    ];
    var mceDates = [
        'dec 6, 8 2019'//0
    ];
    var mceVenues = [
        'Church of the Holy Trinity<br />New York NY'//0
    ];
    var mceLinks = [
        'https://www.artful.ly/manhattan-choral-ensemble'//0
    ];
    //SBO
    var sboNames = [
        'Music for Love and War',//0
        'Bach: Brandenburg Concertos 2 and 4'// sep 1
    ];
    var sboDates = [
        'sat, apr 18 2020, 7:30pm',//0
        'sun, apr 19 2020, 2:30pm',//1
        'sun, sep 29 2019, 2:30pm'//2
    ];
    var sboVenues = [
        'Benaroya Hall<br />Seattle WA',//0
        'Bastyr University Chapel<br />Kenmore WA'//1
    ];
    var sboLinks = [
        'http://www.earlymusicseattle.org/events/music-for-love-and-war-rachel-barton-pine-violin-soloist/',//0
        'http://www.earlymusicseattle.org/events/bach-brandenburg-concertos-2-and-4/'//1
    ];
    //TBO
    var tboNames = [
        'Bach + One', //0
        'The Handel Project<br />George Frideric Handel – Deborah',//1
        'Rameau – Dardanus'//2
    ];
    var tboDates = [
        'mon, apr 27 2020, 1:00pm',//apr 0
        'jun 17-19 2020, 1:00pm',//handel 1
        'fri, jun 26 2020, 7:00pm',//ram 2
        'sun, jun 28 2020, 2:00pm'//ram 3
    ];
    var tboVenues = [
        "St. Paul's Chapel<br /> New York NY", //0
        'Caramoor Center for Music and the Arts<br />Katonah NY'//1
    ];
    var tboLinks = [
        'https://www.trinitywallstreet.org/music-arts/2019-2020/bach-plus-one',//0
        'https://www.trinitywallstreet.org/music-arts/2019-2020/12-nights-festival'//1
    ];
    //ibo
    var iboNames = [
        "Ticket To Ride: A Musical Journey Through Baroque Europe" //0 oct
    ];
    var iboDates = [
        'Sun, oct 6 2019, 4:00pm',//0 oct
        'Mon, oct 7 2019, 7:30pm'//1 oct
    ];
    var iboVenues = [
        'Basile Theater At The Glick Indiana History Center<br />Indianapolis IN',//0
        'university of indianapolis<br />Indianapolis IN'//1
    ];
    var iboLinks = [
        'https://www.indybaroque.org/'//0 generic
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
                case 'nov': {
                    name = pboNames[0];
                    dates = [pboDates[0], pboDates[1]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[0];
                } break;
                case 'dec': {
                    name = pboNames[1];
                    dates = [pboDates[2]];
                    venues = [pboVenues[0]];
                    link = pboLinks[1];
                } break;
                case 'feb': {
                    name = pboNames[2];
                    dates = [pboDates[3], pboDates[4]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[2];
                } break;
                case 'mar': {
                    name = pboNames[3];
                    dates = [pboDates[5], pboDates[6]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[3];
                } break;
                case 'gala': {
                    name = pboNames[4];
                    dates = [pboDates[7]];
                    venues = [pboVenues[0]];
                    link = pboLinks[4];
                } break;
                case 'apr': {
                    name = pboNames[5];
                    dates = [pboDates[8]];
                    venues = [pboVenues[3]];
                    link = pboLinks[5];
                } break;
                case 'may': {
                    name = pboNames[6];
                    dates = [pboDates[9], pboDates[10]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[6];
                } break;
                case 'opera': {
                    name = pboNames[7];
                    dates = [pboDates[11]];
                    venues = [pboVenues[2]];
                    link = pboLinks[7];
                } break;
                case 'oct': {
                    name = pboNames[8];
                    dates = [pboDates[12], pboDates[13]];
                    venues = [pboVenues[0], pboVenues[1]];
                    link = pboLinks[8];
                } break;
                case 'octch': {
                    name = pboNames[9];
                    dates = [pboDates[14]];
                    venues = [pboVenues[0]];
                    link = pboLinks[8];
                } break;
            }
        } break;
        case 'sonnambula': {
            group = groups[1];
            switch (set) {
                case 'jan': {
                    name = sonnambulaNames[0];
                    dates = [sonnambulaDates[0]];
                    venues = [sonnambulaVenues[0]];
                    link = sonnambulaLinks[0];
                } break;
                case 'apr': {
                    name = sonnambulaNames[1];
                    dates = [sonnambulaDates[1]];
                    venues = [sonnambulaVenues[1]];
                    link = sonnambulaLinks[0];
                } break;
                case 'jun': {
                    name = sonnambulaNames[2];
                    dates = [sonnambulaDates[2]];
                    venues = [sonnambulaVenues[2]];
                    link = sonnambulaLinks[0];
                } break;
                case 'sep': {
                    name = sonnambulaNames[3];
                    dates = [sonnambulaDates[3], sonnambulaDates[4]];
                    venues = [sonnambulaVenues[3], sonnambulaVenues[4]];
                    link = sonnambulaLinks[0];
                } break;
                case 'oct': {
                    name = sonnambulaNames[4];
                    dates = [sonnambulaDates[5]];
                    venues = [sonnambulaVenues[5]];
                    link = sonnambulaLinks[0];
                } break;
            }
        } break;
        case 'abs': {
            group = groups[2];
            switch (set) {
                case 'dec': {
                    name = absNames[0];
                    dates = [absDates[0]];
                    venues = [absVenues[0]];
                    link = absLinks[0];
                } break;
                case 'jan': {
                    name = absNames[1];
                    dates = [absDates[1], absDates[2], absDates[3], absDates[4]];
                    venues = [absVenues[1], absVenues[2], absVenues[3], absVenues[4]];
                    link = absLinks[1];
                } break;
            }
        } break;
        case 'pbonorth': {
            group = groups[3];
            switch (set) {
                case 'nov': {
                    name = pboNorthNames[0];
                    dates = [pboNorthDates[0], pboNorthDates[1], pboNorthDates[2]];
                    venues = [pboNorthVenues[0], pboNorthVenues[1], pboNorthVenues[2]];
                    link = pboNorthLinks[0];
                } break;
            }
        } break;
        case 'mce': {
            group = groups[4];
            switch (set) {
                case 'dec': {
                    name = mceNames[0];
                    dates = [mceDates[0]];
                    venues = [mceVenues[0]];
                    link = mceLinks[0];
                } break;
            }
        } break;
        case 'sbo': {
            group = groups[5];
            switch (set) {
                case 'apr': {
                    name = sboNames[0];
                    dates = [sboDates[0], sboDates[1]];
                    venues = [sboVenues[0], sboVenues[1]];
                    link = sboLinks[0];
                } break;
                case 'sep': {
                    name = sboNames[1];
                    dates = [sboDates[2]];
                    venues = [sboVenues[0]];
                    link = sboLinks[1];
                } break;
            }
        } break;
        case 'tbo': {
            group = groups[6];
            switch (set) {
                case 'apr': {
                    name = tboNames[0];
                    dates = [tboDates[0]];
                    venues = [tboVenues[0]];
                    link = tboLinks[0];
                } break;
                case 'jun': {
                    name = tboNames[1];
                    dates = [tboDates[1]];
                    venues = [tboVenues[0]];
                    link = tboLinks[1];
                } break;
                case 'ram': {
                    name = tboNames[2];
                    dates = [tboDates[2], tboDates[3]];
                    venues = [tboVenues[0], tboVenues[1]];
                    link = tboLinks[1];
                } break;
            }
        } break;
        case 'ibo': {
            group = groups[7];
            switch (set) {
                case 'oct': {
                    name = iboNames[0];
                    dates = [iboDates[0], iboDates[1]];
                    venues = [iboVenues[0], iboVenues[1]];
                    link = iboLinks[0];
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

