/**
 * Jelajah Kuliner Nusantara - Game Ular Tangga
 * Logic & Game Engine File (Revised for Multiplayer, Turn System, and Trivia)
 */

/* ==========================================================================
   CULINARY DATABASE (50 INDONESIAN DISHES WITH TRIVIA QUESTIONS)
   ========================================================================== */
const culinaryData = {
    1: { 
        name: "Rendang", 
        region: "Sumatera", 
        desc: "Masakan khas Sumatera Barat berupa daging sapi berbumbu rempah-rempah kuat yang dimasak kering kelapa perlahan hingga hitam legam.",
        question: "Rendang merupakan kuliner khas dari provinsi...",
        options: ["Riau", "Sumatera Barat", "Sumatera Selatan"],
        answer: 1
    },
    2: { 
        name: "Pempek", 
        region: "Sumatera", 
        desc: "Makanan khas Palembang yang terbuat dari olahan daging ikan tenggiri dan sagu, disajikan bersama kuah cuka hitam pedas manis gurih.",
        question: "Bahan utama pembuatan pempek khas Palembang yang dicampur sagu adalah...",
        options: ["Daging ayam", "Daging sapi", "Daging ikan tenggiri"],
        answer: 2
    },
    3: { 
        name: "Mie Aceh", 
        region: "Sumatera", 
        desc: "Mie kuning tebal dengan kuah kari khas Aceh bertabur emping dan bawang goreng, bercita rasa pedas rempah pekat.",
        question: "Mie Aceh disajikan dengan cita rasa pedas karena menggunakan kuah khas...",
        options: ["Kari pedas khas Aceh", "Petis hitam kental", "Saus kacang tanah manis"],
        answer: 0
    },
    4: { 
        name: "Bika Ambon", 
        region: "Sumatera", 
        desc: "Kue basah khas Medan dengan tekstur rongga bersarang, rasa manis gurih dari perpaduan santan, ragi, telur, dan daun jeruk purut.",
        question: "Meskipun bernama Bika Ambon, kue tradisional berongga khas ini sebenarnya berasal dari kota...",
        options: ["Ambon", "Medan", "Palembang"],
        answer: 1
    },
    5: { 
        name: "Sate Padang", 
        region: "Sumatera", 
        desc: "Sate lidah atau jeroan sapi khas Minang dengan siraman kuah kaldu rempah kental kekuningan beraroma pedas gurih khas.",
        question: "Ciri khas paling utama yang membedakan Sate Padang dengan sate daerah lainnya terletak pada...",
        options: ["Kuah kaldu kental kuning pedas", "Saus kecap manis encer", "Taburan kelapa sangrai kering"],
        answer: 0
    },
    6: { 
        name: "Otak-Otak", 
        region: "Sumatera", 
        desc: "Olahan daging ikan tenggiri dicampur bumbu halus, dibungkus daun pisang lalu dipanggang di atas bara api kering.",
        question: "Otak-otak terbuat dari daging ikan tenggiri yang biasanya dibungkus menggunakan daun...",
        options: ["Daun pisang", "Daun pandan", "Daun pepaya"],
        answer: 0
    },
    7: { 
        name: "Gulai Belacan", 
        region: "Sumatera", 
        desc: "Makanan berkuah kental khas Riau berbahan dasar udang yang dimasak bersama terasi (belacan), asam jawa, dan santan kelapa.",
        question: "Bahan bumbu utama pemberi rasa khas menyengat pada Gulai Belacan khas Riau adalah...",
        options: ["Tauco asin", "Terasi (belacan)", "Biji kluwek hitam"],
        answer: 1
    },
    8: { 
        name: "Mie Celor", 
        region: "Sumatera", 
        desc: "Hidangan mi khas Palembang berkuah kaldu udang kental dengan campuran santan gurih, telur rebus, tauge, dan kucai.",
        question: "Kuah kental gurih dari Mie Celor khas Palembang terbuat dari kaldu utama berupa...",
        options: ["Kaldu udang dan santan", "Kaldu ceker ayam kental", "Kaldu ikan bandeng pedas"],
        answer: 0
    },
    9: { 
        name: "Pendap", 
        region: "Sumatera", 
        desc: "Kuliner khas Bengkulu dari olahan parutan kelapa berbumbu rempah kental bersama ikan yang dibungkus daun keladi lalu dikukus lama.",
        question: "Makanan khas Bengkulu 'Pendap' dibungkus menggunakan berlapis-lapis daun...",
        options: ["Daun keladi (talas)", "Daun singkong", "Daun pepaya hutan"],
        answer: 0
    },
    10: { 
        name: "Tempoyak", 
        region: "Sumatera", 
        desc: "Fermentasi durian matang khas Jambi dan Sumatera Selatan yang dimasak bersama cabai serta ikan segar sebagai teman nasi.",
        question: "Tempoyak merupakan masakan tradisional khas Sumatera yang berbahan dasar fermentasi buah...",
        options: ["Durian", "Nangka", "Cempedak"],
        answer: 0
    },
    11: { 
        name: "Gudeg", 
        region: "Jawa", 
        desc: "Sayur nangka muda khas Yogyakarta yang dimasak lama bersama gula merah, santan, dan daun jati hingga empuk manis kecokelatan.",
        question: "Bahan mentah utama pembuat Gudeg khas Yogyakarta adalah buah...",
        options: ["Nangka muda", "Rebung bambu", "Labu siam hijau"],
        answer: 0
    },
    12: { 
        name: "Rawon", 
        region: "Jawa", 
        desc: "Sup daging sapi khas Jawa Timur berkuah hitam pekat gurih yang dihasilkan dari racikan biji buah kluwek matang.",
        question: "Kluwek pada hidangan sup Rawon khas Jawa Timur berfungsi untuk menghasilkan...",
        options: ["Aroma manis jahe", "Warna kuah hitam pekat gurih", "Rasa pedas menyengat"],
        answer: 1
    },
    13: { 
        name: "Sate Madura", 
        region: "Jawa", 
        desc: "Sate ayam bakar dibalut saus kacang gurih manis melimpah bertabur irisan bawang merah mentah dan kecap manis.",
        question: "Sate Madura umumnya menggunakan siraman bumbu utama berupa...",
        options: ["Kuah padang asam pedas", "Saus kecap manis dan kacang", "Kuah santan kuning kental"],
        answer: 1
    },
    14: { 
        name: "Bakso Malang", 
        region: "Jawa", 
        desc: "Bakso kuah bening segar khas Malang lengkap dengan paduan siomay basah, tahu bakso, kekian, dan pangsit renyah.",
        question: "Keunikan utama Bakso Malang dibanding bakso daerah lain adalah pelengkapnya berupa...",
        options: ["Pangsit renyah dan siomay tahu", "Kerupuk kulit dan emping", "Lontong ketan manis"],
        answer: 0
    },
    15: { 
        name: "Soto Lamongan", 
        region: "Jawa", 
        desc: "Soto ayam berkuah kuning gurih khas Lamongan yang memiliki ciri khas taburan bubuk koya gurih dari kerupuk udang.",
        question: "Taburan khas penambah rasa gurih kental pada soto khas Lamongan disebut...",
        options: ["Koya (bubuk kerupuk udang)", "Emping melinjo tumbuk", "Serundeng kelapa manis"],
        answer: 0
    },
    16: { 
        name: "Gado-Gado", 
        region: "Jawa", 
        desc: "Salad sayuran rebus khas Betawi disiram saus kacang tanah halus gurih manis bertabur emping melinjo dan kerupuk.",
        question: "Gado-gado adalah salad khas Indonesia yang menggunakan siraman saus utama berupa...",
        options: ["Saus mayones pedas", "Saus kacang ulek gurih manis", "Saus cabe terasi kecap"],
        answer: 1
    },
    17: { 
        name: "Nasi Liwet", 
        region: "Jawa", 
        desc: "Nasi gurih khas Solo yang dimasak bersama santan, daun salam, serai, disajikan ayam suwir, areh, dan labu siam pedas.",
        question: "Nasi Liwet khas Solo terasa gurih dan wangi karena berasnya dimasak bersama...",
        options: ["Mentega asin cair", "Santan kelapa, serai, daun salam", "Kunyit giling kasar dan jahe"],
        answer: 1
    },
    18: { 
        name: "Lumpia Semarang", 
        region: "Jawa", 
        desc: "Jajanan khas Semarang berupa kulit lumpia tipis renyah berisi rebung muda manis gurih, telur dadar, dan udang cincang.",
        question: "Isian utama yang memberikan tekstur renyah manis gurih pada Lumpia Semarang adalah...",
        options: ["Kubis putih iris tipis", "Rebung (tunas bambu muda)", "Kentang wortel potong dadu"],
        answer: 1
    },
    19: { 
        name: "Tahu Sumedang", 
        region: "Jawa", 
        desc: "Tahu goreng khas Sumedang, Jawa Barat, dengan tekstur luar renyah garing kering dan bagian dalam berongga lembut gurih.",
        question: "Kekhasan Tahu Sumedang asli terletak pada teksturnya yang...",
        options: ["Bagian dalamnya padat liat", "Bagian dalamnya kosong/berongga", "Kulit luarnya basah berlendir"],
        answer: 1
    },
    20: { 
        name: "Serabi Solo", 
        region: "Jawa", 
        desc: "Serabi manis tipis khas Solo terbuat dari tepung beras dan santan dengan bagian tengah bertekstur lembut lumer menggoda.",
        question: "Serabi Solo dibuat menggunakan cetakan wajan tanah liat kecil dengan hasil tekstur tengah yang...",
        options: ["Keras kering renyah", "Lembut basah lumer santan", "Liat kenyal menyerupai agar"],
        answer: 1
    },
    21: { 
        name: "Soto Banjar", 
        region: "Kalimantan", 
        desc: "Soto khas suku Banjar berkuah keruh gurih harum rempah kayu manis dan cengkeh, disajikan dengan suwiran ayam dan ketupat.",
        question: "Aroma wangi khas bumbu kuah Soto Banjar dominan dihasilkan oleh...",
        options: ["Kencur mentah dan serai", "Kayu manis, cengkeh, dan kapulaga", "Terasi udang bakar"],
        answer: 1
    },
    22: { 
        name: "Ketupat Kandangan", 
        region: "Kalimantan", 
        desc: "Kuliner khas Kandangan berupa ketupat disiram kuah santan kental gurih bersama lauk ikan gabus panggang (haruan).",
        question: "Lauk pelengkap wajib pada hidangan Ketupat Kandangan khas Kalimantan Selatan adalah...",
        options: ["Ikan gabus panggang asap (haruan)", "Daging sapi rendang bumbu merah", "Ayam bakar bumbu rujak"],
        answer: 0
    },
    23: { 
        name: "Bubur Pedas", 
        region: "Kalimantan", 
        desc: "Bubur khas Sambas terbuat dari beras sangrai halus yang dimasak bersama aneka sayuran hijau liar, rempah, dan kacang goreng.",
        question: "Meskipun disebut bubur pedas, bubur khas Sambas Kalbar ini sebenarnya berfokus pada isi berupa...",
        options: ["Hanya sambal cabe rawit kental", "Campuran beras sangrai dan aneka sayur hijau", "Santan kental berlemak"],
        answer: 1
    },
    24: { 
        name: "Hekeng Udang", 
        region: "Kalimantan", 
        desc: "Olahan cincangan udang gurih berbungkus kulit tahu khas Pontianak yang dikukus lalu digoreng garing kecokelatan.",
        question: "Hekeng Udang khas Pontianak dibungkus menggunakan bahan berupa...",
        options: ["Kulit lumpia gandum", "Lembaran kulit tahu tipis", "Daun pisang muda"],
        answer: 1
    },
    25: { 
        name: "Mandai", 
        region: "Kalimantan", 
        desc: "Makanan fermentasi kulit buah cempedak khas Banjar yang digoreng garing gurih pedas manis sebagai lauk nasi hangat.",
        question: "Kuliner Mandai khas Kalimantan Selatan memanfaatkan bahan makanan berupa fermentasi...",
        options: ["Kulit buah cempedak", "Buah nangka muda", "Kulit singkong empuk"],
        answer: 0
    },
    26: { 
        name: "Pisang Goreng Pontianak", 
        region: "Kalimantan", 
        desc: "Pisang goreng kipas renyah garing dengan balutan kremesan gurih tebal yang manis legit khas Kalimantan Barat.",
        question: "Bentuk khas yang membedakan Pisang Goreng Pontianak dengan pisang goreng biasa adalah...",
        options: ["Pisang dibakar bulat utuh", "Kremesan garing berbentuk kipas lebar", "Disiram cokelat lumer tebal"],
        answer: 1
    },
    27: { 
        name: "Chai Kue", 
        region: "Kalimantan", 
        desc: "Jajanan kukus khas Pontianak berkulit tipis transparan kenyal berisi tumis bengkuang gurih tabur bawang putih goreng harum.",
        options: ["Bengkuang serut atau daun kucai", "Kentang wortel potong dadu", "Daging sapi cincang"],
        question: "Isian sayur paling populer di dalam kulit kenyal Chai Kue khas Pontianak adalah...",
        answer: 0
    },
    28: { 
        name: "Nasi Kuning Samarinda", 
        region: "Kalimantan", 
        desc: "Nasi kuning wangi gurih khas Samarinda berpelengkap lauk ikan haruan (gabus) masak habang pedas manis khas Banjar.",
        question: "Lauk khas Nasi Kuning Samarinda berupa ikan haruan yang dimasak dengan bumbu...",
        options: ["Masak habang (bumbu merah khas Banjar)", "Kari kuning pedas", "Saus kecap tiram gurih"],
        answer: 0
    },
    29: { 
        name: "Juhu Singkah", 
        region: "Kalimantan", 
        desc: "Sayur berkuah santan khas suku Dayak menggunakan rotan muda bertekstur renyah dengan cita rasa sedikit pahit gurih segar.",
        question: "Juhu Singkah khas suku Dayak menggunakan bahan yang unik yaitu...",
        options: ["Rebung bambu muda", "Rotan muda (singkah)", "Batang pisang kepok"],
        answer: 1
    },
    30: { 
        name: "Bingka Kentang", 
        region: "Kalimantan", 
        desc: "Kue basah legit khas Banjar bertekstur lembut padat wangi pandan, berbahan kentang kukus halus, telur, dan santan kental.",
        question: "Cita rasa dominan yang dimiliki oleh kue Bingka Kentang khas Banjar adalah...",
        options: ["Asam manis buah", "Manis legit dan gurih santan", "Asin pedas gurih bawang"],
        answer: 1
    },
    31: { 
        name: "Coto Makassar", 
        region: "Sulawesi", 
        desc: "Sup daging dan jeroan sapi khas Makassar berkuah kental kaya rempah pala, ketumbar, jintan, dan kacang tanah giling.",
        question: "Ciri khas kuah gurih pekat Coto Makassar diperoleh dari campuran bumbu berupa...",
        options: ["Kacang tanah goreng giling halus", "Kecap manis pekat", "Santan kelapa encer"],
        answer: 0
    },
    32: { 
        name: "Konro Bakar", 
        region: "Sulawesi", 
        desc: "Iga sapi berukuran besar yang direbus empuk berbumbu rempah lalu dibakar harum, disajikan siram saus kacang gurih.",
        question: "Bahan dasar daging utama yang digunakan dalam menu Konro Bakar khas Makassar adalah...",
        options: ["Buntut sapi potong", "Iga sapi besar", "Daging lidah sapi"],
        answer: 1
    },
    33: { 
        name: "Pallubasa", 
        region: "Sulawesi", 
        desc: "Sup daging sapi mirip Coto berkuah gurih bertabur kelapa parut sangrai garing lengkap dengan kuning telur bebek mentah.",
        question: "Bahan taburan gurih di atas Pallubasa yang membedakannya dengan kuah Coto adalah...",
        options: ["Kelapa parut sangrai (alas)", "Kerupuk udang renyah bubuk", "Bawang putih cincang goreng"],
        answer: 0
    },
    34: { 
        name: "Sop Saudara", 
        region: "Sulawesi", 
        desc: "Sop daging sapi khas Pangkep berkuah gurih pekat berpelengkap bihun, perkedel kentang rebus, dan paru goreng garing.",
        question: "Selain daging sapi, Sop Saudara khas Pangkep biasanya disajikan lengkap dengan...",
        options: ["Perkedel kentang dan bihun", "Lontong daun pisang", "Tahu goreng sumedang"],
        answer: 0
    },
    35: { 
        name: "Tinutuan", 
        region: "Sulawesi", 
        desc: "Bubur sayur khas Manado terbuat dari labu kuning, beras, jagung manis, kangkung, bayam, disantap bersama rica ikan asin.",
        question: "Tinutuan merupakan nama lain dari hidangan bubur sayur khas...",
        options: ["Makassar", "Manado", "Palu"],
        answer: 1
    },
    36: { 
        name: "Panada", 
        region: "Sulawesi", 
        desc: "Kue goreng bertekstur roti empuk berbentuk pastel berenda khas Manado berisi suwiran daging ikan cakalang pedas.",
        question: "Isian khas di dalam kue goreng Panada khas Manado adalah...",
        options: ["Suwiran ikan cakalang pedas", "Tumisan kentang wortel manis", "Abon daging sapi manis"],
        answer: 0
    },
    37: { 
        name: "Klappertaart", 
        region: "Sulawesi", 
        desc: "Kue manis khas Manado bertekstur lumer kaya daging kelapa muda, kismis, kenari, beraroma kayu manis dan telur susu gurih.",
        question: "Klappertaart mendapat pengaruh kuliner Belanda dengan bahan isian utama buah berupa...",
        options: ["Daging kelapa muda", "Daging nangka manis", "Apel malang hijau"],
        answer: 0
    },
    38: { 
        name: "Kaledo", 
        region: "Sulawesi", 
        desc: "Sup tulang kaki lembu khas Donggala berkuah bening asam pedas segar berbumbu utama buah asam muda dan cabai rawit melimpah.",
        question: "Rasa asam segar dominan pada sup Kaki Lembu Kaledo khas Donggala Sulteng berasal dari...",
        options: ["Cuka putih buatan", "Buah asam jawa muda", "Air perasan lemon impor"],
        answer: 1
    },
    39: { 
        name: "Kapurung", 
        region: "Sulawesi", 
        desc: "Makanan tradisional dari adonan sagu kental lumer yang disiram kuah ikan sayuran asam segar dan suwiran ayam pedas.",
        question: "Makanan pokok pengganti nasi berbahan sagu kental lumer khas Sulsel disebut...",
        options: ["Kapurung", "Papeda", "Kaledo"],
        answer: 0
    },
    40: { 
        name: "Lapa-Lapa", 
        region: "Sulawesi", 
        desc: "Makanan khas Sulawesi Tenggara sejenis ketupat lonjong berisi beras ketan merah dimasak santan dibalut janur kelapa.",
        question: "Lapa-Lapa khas Sultra dibungkus rapi menggunakan helaian...",
        options: ["Daun pisang kukus", "Janur kelapa muda", "Daun pandan besar"],
        answer: 1
    },
    41: { 
        name: "Papeda", 
        region: "Papua", 
        desc: "Bubur sagu khas Papua bertekstur lengket bening menyerupai lem yang disantap panas bersama lauk ikan kuah kuning.",
        question: "Papeda bertekstur kenyal lengket bening yang terbuat dari bahan...",
        options: ["Tepung beras", "Pati sagu murni", "Tepung singkong"],
        answer: 1
    },
    42: { 
        name: "Ikan Kuah Kuning", 
        region: "Papua", 
        desc: "Sup ikan kakap berkuah kuning cerah harum kunyit, daun kemangi, belimbing wuluh segar asam pedas pendamping setia papeda.",
        question: "Bumbu dapur alami pemberi warna kuning cerah pada sup pendamping papeda ini adalah...",
        options: ["Cabe rawit merah", "Kunyit giling", "Daun kemangi"],
        answer: 1
    },
    43: { 
        name: "Sate Ulat Sagu", 
        region: "Papua", 
        desc: "Kuliner ekstrem bergizi tinggi khas suku Kamoro Papua dari ulat pohon sagu yang dibakar empuk manis gurih berlemak.",
        question: "Sate Ulat Sagu khas suku Kamoro diperoleh dari ulat yang memakan bagian batang...",
        options: ["Pohon kelapa roboh", "Pohon sagu yang melapuk", "Pohon pisang busuk"],
        answer: 1
    },
    44: { 
        name: "Udang Selingkuh", 
        region: "Papua", 
        desc: "Udang air tawar endemik Lembah Baliem Papua dengan capit besar mirip kepiting yang digoreng asam manis gurih.",
        question: "Alasan utama udang air tawar Lembah Baliem disebut Udang Selingkuh karena...",
        options: ["Memiliki capit sangat besar mirip kepiting", "Berwarna loreng merah-biru", "Hidup berpasang-pasangan di batu"],
        answer: 0
    },
    45: { 
        name: "Kue Lontar", 
        region: "Papua", 
        desc: "Kue pie susu khas Papua berdiameter besar berkulit renyah garing dengan isian custard telur susu manis legit lembut lumer.",
        question: "Bentuk Kue Lontar khas Papua secara visual sangat menyerupai hidangan...",
        options: ["Egg Tart / Pai Susu", "Kue bolu gulung", "Roti tawar mentega"],
        answer: 0
    },
    46: { 
        name: "Aunu Senebre", 
        region: "Papua", 
        desc: "Kuliner gurih khas Papua berbahan dasar campuran parutan daun talas rebus, ikan teri nasi goreng asin, dan kelapa parut kukus.",
        question: "Aunu Senebre terbuat dari campuran ikan teri nasi, kelapa parut, dan irisan rebusan daun...",
        options: ["Daun singkong manis", "Daun talas", "Daun jati"],
        answer: 1
    },
    47: { 
        name: "Keladi Tumbuk", 
        region: "Papua", 
        desc: "Olahan pokok dari umbi keladi rebus ditumbuk hingga liat lengket, disajikan dingin bersama ikan bakar sambal mentah kasar.",
        question: "Keladi Tumbuk khas Papua berbahan dasar umbi yang dikenal juga dengan nama...",
        options: ["Talas (keladi)", "Ubi kayu", "Kentang manis"],
        answer: 0
    },
    48: { 
        name: "Bagea", 
        region: "Papua", 
        desc: "Kue kering bulat keras dari tepung sagu khas Papua-Maluku dengan rasa manis gurih aroma kayu manis dan kacang kenari.",
        question: "Bahan dasar pembuat adonan kue kering Bagea khas Papua-Maluku adalah...",
        options: ["Tepung beras ketan", "Tepung gandum utuh", "Tepung sagu"],
        answer: 2
    },
    49: { 
        name: "Ikan Bakar Manokwari", 
        region: "Papua", 
        desc: "Ikan bakar khas Manokwari dibakar polos lalu dibaluri sambal mentah ulek kasar bercita rasa pedas menggigit dan asam segar.",
        question: "Ikan Bakar Manokwari disajikan khas dengan siraman berupa...",
        options: ["Sambal mentah ulek kasar super pedas", "Saus kecap manis cabai rawit", "Saus tiram bumbu mentega"],
        answer: 0
    },
    50: { 
        name: "Sagu Lempeng", 
        region: "Papua", 
        desc: "Roti sagu panggang keras tawar berbentuk lempengan merah bata khas Papua yang nikmat dicelupkan ke teh manis hangat.",
        question: "Metode pematangan akhir yang dilakukan untuk menghasilkan Sagu Lempeng keras adalah...",
        options: ["Direbus air panas", "Dipanggang keras berbentuk lempengan", "Digoreng kering garing"],
        answer: 1
    }
};

/* ==========================================================================
   GAME STATE & SETTINGS
   ========================================================================== */
const LADDERS = {
    3: 12,
    8: 18,
    15: 27,
    22: 34,
    31: 45
};

const SNAKES = {
    17: 6,
    25: 14,
    36: 21,
    44: 30,
    49: 38
};

const SNAKE_COLORS = {
    17: 'green',
    25: 'red',
    36: 'green',
    44: 'red',
    49: 'green'
};

// Multiplayer state variables
let players = [];
let playerCount = 2; // Default starting count
let currentPlayerIndex = 0;
let isMoving = false;
let eventModalResolve = null;
let triviaResolve = null;

// Temporary variable keeping track of active board index
let playerPosition = 1;

/* ==========================================================================
   BOARD INITIALIZATION & GRID GEOMETRY
   ========================================================================== */
function getRegionClass(n) {
    if (n <= 10) return 'sumatera';
    if (n <= 20) return 'jawa';
    if (n <= 30) return 'kalimantan';
    if (n <= 40) return 'sulawesi';
    return 'papua';
}

function getGridPosition(n) {
    const r = Math.floor((n - 1) / 10);
    const c = r % 2 === 0 ? (n - 1) % 10 : 9 - ((n - 1) % 10);
    return { row: r, col: c };
}

function initBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    
    for (let n = 1; n <= 50; n++) {
        const { row, col } = getGridPosition(n);
        const gridRow = 5 - row;
        const gridCol = col + 1;
        
        const cell = document.createElement('div');
        cell.id = `box-${n}`;
        cell.className = `board-cell cell-${getRegionClass(n)}`;
        cell.style.gridRow = gridRow;
        cell.style.gridColumn = gridCol;
        
        const regionLabel = getRegionClass(n).toUpperCase();
        
        cell.innerHTML = `
            <span class="cell-number">${n}</span>
            <span class="cell-food">${culinaryData[n].name}</span>
            <span class="cell-region">${regionLabel}</span>
        `;
        
        cell.addEventListener('click', () => {
            if (!isMoving) {
                showFoodDetails(n);
            }
        });
        
        boardElement.appendChild(cell);
    }
}

/* ==========================================================================
   SVG RENDERING LOGIC FOR CONNECTING SNAKES AND LADDERS
   ========================================================================== */
function getBoxCenter(n) {
    const box = document.getElementById(`box-${n}`);
    const board = document.getElementById('board');
    if (!box || !board) return { x: 0, y: 0 };
    
    const boxRect = box.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    
    const x = boxRect.left - boardRect.left + boxRect.width / 2;
    const y = boxRect.top - boardRect.top + boxRect.height / 2;
    
    return { x, y };
}

function drawLadder(pStart, pEnd) {
    const svg = document.getElementById('board-svg');
    const dx = pEnd.x - pStart.x;
    const dy = pEnd.y - pStart.y;
    const L = Math.sqrt(dx * dx + dy * dy);
    
    const ux = dx / L;
    const uy = dy / L;
    const px = -uy;
    const py = ux;
    
    const W = 14;
    
    const r1StartX = pStart.x + px * (W / 2);
    const r1StartY = pStart.y + py * (W / 2);
    const r1EndX = pEnd.x + px * (W / 2);
    const r1EndY = pEnd.y + py * (W / 2);
    
    const r2StartX = pStart.x - px * (W / 2);
    const r2StartY = pStart.y - py * (W / 2);
    const r2EndX = pEnd.x - px * (W / 2);
    const r2EndY = pEnd.y - py * (W / 2);
    
    const rail1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    rail1.setAttribute("x1", r1StartX);
    rail1.setAttribute("y1", r1StartY);
    rail1.setAttribute("x2", r1EndX);
    rail1.setAttribute("y2", r1EndY);
    rail1.setAttribute("stroke", "#6d4c41");
    rail1.setAttribute("stroke-width", "4.5");
    rail1.setAttribute("stroke-linecap", "round");
    svg.appendChild(rail1);
    
    const rail2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    rail2.setAttribute("x1", r2StartX);
    rail2.setAttribute("y1", r2StartY);
    rail2.setAttribute("x2", r2EndX);
    rail2.setAttribute("y2", r2EndY);
    rail2.setAttribute("stroke", "#6d4c41");
    rail2.setAttribute("stroke-width", "4.5");
    rail2.setAttribute("stroke-linecap", "round");
    svg.appendChild(rail2);
    
    const rungSpacing = 22;
    const numRungs = Math.floor(L / rungSpacing);
    
    for (let i = 1; i < numRungs; i++) {
        const t = i / numRungs;
        const cx = pStart.x + t * dx;
        const cy = pStart.y + t * dy;
        
        const rx1 = cx + px * (W / 2);
        const ry1 = cy + py * (W / 2);
        const rx2 = cx - px * (W / 2);
        const ry2 = cy - py * (W / 2);
        
        const rung = document.createElementNS("http://www.w3.org/2000/svg", "line");
        rung.setAttribute("x1", rx1);
        rung.setAttribute("y1", ry1);
        rung.setAttribute("x2", rx2);
        rung.setAttribute("y2", ry2);
        rung.setAttribute("stroke", "#8d6e63");
        rung.setAttribute("stroke-width", "3");
        rung.setAttribute("stroke-linecap", "round");
        svg.appendChild(rung);
    }
}

function drawSnake(pStart, pEnd, colorTheme) {
    const svg = document.getElementById('board-svg');
    const dx = pEnd.x - pStart.x;
    const dy = pEnd.y - pStart.y;
    const L = Math.sqrt(dx * dx + dy * dy);
    
    const ux = dx / L;
    const uy = dy / L;
    const px = -uy;
    const py = ux;
    
    const offset = Math.min(50, L * 0.22);
    const cp1x = pStart.x + dx / 3 + px * offset;
    const cp1y = pStart.y + dy / 3 + py * offset;
    const cp2x = pStart.x + (2 * dx) / 3 - px * offset;
    const cp2y = pStart.y + (2 * dy) / 3 - py * offset;
    
    const baseColor = colorTheme === 'green' ? '#1b5e20' : '#b71c1c';
    const scaleColor = colorTheme === 'green' ? '#a5d6a7' : '#ff8a80';
    
    const pathData = `M ${pStart.x} ${pStart.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pEnd.x} ${pEnd.y}`;
    
    const bodyBase = document.createElementNS("http://www.w3.org/2000/svg", "path");
    bodyBase.setAttribute("d", pathData);
    bodyBase.setAttribute("stroke", baseColor);
    bodyBase.setAttribute("stroke-width", "11");
    bodyBase.setAttribute("fill", "none");
    bodyBase.setAttribute("stroke-linecap", "round");
    bodyBase.setAttribute("stroke-linejoin", "round");
    svg.appendChild(bodyBase);
    
    const bodyScales = document.createElementNS("http://www.w3.org/2000/svg", "path");
    bodyScales.setAttribute("d", pathData);
    bodyScales.setAttribute("stroke", scaleColor);
    bodyScales.setAttribute("stroke-width", "4.5");
    bodyScales.setAttribute("stroke-dasharray", "4,5");
    bodyScales.setAttribute("fill", "none");
    bodyScales.setAttribute("stroke-linecap", "round");
    bodyScales.setAttribute("stroke-linejoin", "round");
    svg.appendChild(bodyScales);
    
    const head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    head.setAttribute("cx", pStart.x);
    head.setAttribute("cy", pStart.y);
    head.setAttribute("r", "8.5");
    head.setAttribute("fill", baseColor);
    svg.appendChild(head);
    
    const eyeDist = 4.2;
    const eye1x = pStart.x + px * eyeDist - ux * 2;
    const eye1y = pStart.y + py * eyeDist - uy * 2;
    const eye2x = pStart.x - px * eyeDist - ux * 2;
    const eye2y = pStart.y - py * eyeDist - uy * 2;
    
    const eye1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye1.setAttribute("cx", eye1x);
    eye1.setAttribute("cy", eye1y);
    eye1.setAttribute("r", "1.7");
    eye1.setAttribute("fill", "#ffeb3b");
    svg.appendChild(eye1);
    
    const eye2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye2.setAttribute("cx", eye2x);
    eye2.setAttribute("cy", eye2y);
    eye2.setAttribute("r", "1.7");
    eye2.setAttribute("fill", "#ffeb3b");
    svg.appendChild(eye2);
    
    const tdx = cp1x - pStart.x;
    const tdy = cp1y - pStart.y;
    const tL = Math.sqrt(tdx * tdx + tdy * tdy);
    const tux = tdx / tL;
    const tuy = tdy / tL;
    
    const tongueLength = 11;
    const tx1 = pStart.x - tux * 3;
    const ty1 = pStart.y - tuy * 3;
    const tx2 = pStart.x - tux * tongueLength;
    const ty2 = pStart.y - tuy * tongueLength;
    
    const tongue = document.createElementNS("http://www.w3.org/2000/svg", "line");
    tongue.setAttribute("x1", tx1);
    tongue.setAttribute("y1", ty1);
    tongue.setAttribute("x2", tx2);
    tongue.setAttribute("y2", ty2);
    tongue.setAttribute("stroke", "#ff1744");
    tongue.setAttribute("stroke-width", "2");
    tongue.setAttribute("stroke-linecap", "round");
    svg.appendChild(tongue);
    
    const fw = 3.5;
    const fx1 = tx2 - tux * 3 + px * fw;
    const fy1 = ty2 - tuy * 3 + py * fw;
    const fx2 = tx2 - tux * 3 - px * fw;
    const fy2 = ty2 - tuy * 3 - py * fw;
    
    const fork1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    fork1.setAttribute("x1", tx2);
    fork1.setAttribute("y1", ty2);
    fork1.setAttribute("x2", fx1);
    fork1.setAttribute("y2", fy1);
    fork1.setAttribute("stroke", "#ff1744");
    fork1.setAttribute("stroke-width", "1.8");
    fork1.setAttribute("stroke-linecap", "round");
    svg.appendChild(fork1);
    
    const fork2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    fork2.setAttribute("x1", tx2);
    fork2.setAttribute("y1", ty2);
    fork2.setAttribute("x2", fx2);
    fork2.setAttribute("y2", fy2);
    fork2.setAttribute("stroke", "#ff1744");
    fork2.setAttribute("stroke-width", "1.8");
    fork2.setAttribute("stroke-linecap", "round");
    svg.appendChild(fork2);
}

function drawSnakesAndLadders() {
    const svg = document.getElementById('board-svg');
    if (!svg) return;
    svg.innerHTML = '';
    
    for (const key in LADDERS) {
        const start = parseInt(key);
        const end = LADDERS[key];
        const pStart = getBoxCenter(start);
        const pEnd = getBoxCenter(end);
        drawLadder(pStart, pEnd);
    }
    
    for (const key in SNAKES) {
        const start = parseInt(key);
        const end = SNAKES[key];
        const pStart = getBoxCenter(start);
        const pEnd = getBoxCenter(end);
        const color = SNAKE_COLORS[start];
        drawSnake(pStart, pEnd, color);
    }
}

/* ==========================================================================
   MULTI-PLAYER TOKEN PLACEMENT & SIDE PANEL UI
   ========================================================================== */
function updatePlayerTokenPositions() {
    if (players.length === 0) return;
    
    // Group players by their current square position to calculate grid offsets
    for (let n = 1; n <= 50; n++) {
        const playersOnBox = players.filter(p => p.position === n);
        const count = playersOnBox.length;
        
        playersOnBox.forEach((p, idx) => {
            const token = document.getElementById(`player-token-${p.id}`);
            if (!token) return;
            
            const center = getBoxCenter(n);
            
            // Offset calculations to make sure all tokens on the same box are visible
            let offsetX = 0;
            let offsetY = 0;
            
            if (count === 2) {
                offsetX = (idx === 0) ? -7 : 7;
            } else if (count === 3) {
                if (idx === 0) { offsetY = -7; }
                else if (idx === 1) { offsetX = -7; offsetY = 7; }
                else if (idx === 2) { offsetX = 7; offsetY = 7; }
            } else if (count === 4) {
                offsetX = (idx === 0 || idx === 2) ? -7 : 7;
                offsetY = (idx === 0 || idx === 1) ? -7 : 7;
            }
            
            token.style.left = `${center.x + offsetX}px`;
            token.style.top = `${center.y + offsetY}px`;
        });
    }
}

function updateActivePlayerUI() {
    if (players.length === 0) return;
    
    const activePlayer = players[currentPlayerIndex];
    
    // Turn indicators
    const indicator = document.getElementById('active-player-indicator');
    indicator.className = `active-player-dot p${activePlayer.id}-bg`;
    document.getElementById('active-player-name').textContent = activePlayer.name;
    
    // Global player position reference synced
    playerPosition = activePlayer.position;
    
    // Active Box Details Panel sync
    document.getElementById('current-position').textContent = `Kotak ${playerPosition}`;
    const data = culinaryData[playerPosition];
    document.getElementById('current-food-name').textContent = data.name;
    
    const regionBadge = document.getElementById('current-region');
    regionBadge.textContent = data.region;
    regionBadge.className = `status-value badge ${getRegionClass(playerPosition)}`;
    
    // Refresh Sidebar Status Listing
    updatePlayersListUI();
}

function updatePlayersListUI() {
    const listContainer = document.getElementById('players-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    players.forEach((p, idx) => {
        const row = document.createElement('div');
        row.className = 'player-status-row';
        if (idx === currentPlayerIndex) {
            row.classList.add('active-turn');
        }
        
        row.innerHTML = `
            <div class="player-info-part">
                <span class="player-color-dot p${p.id}-bg"></span>
                <span class="player-name-lbl">${p.name}</span>
            </div>
            <span class="player-pos-lbl">Kotak ${p.position}</span>
        `;
        listContainer.appendChild(row);
    });
}

/* ==========================================================================
   GAME MECHANICS, MOVEMENT & TRIVIA EVALUATOR
   ========================================================================== */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function movePlayer(steps) {
    if (isMoving) return;
    isMoving = true;
    
    const rollBtn = document.getElementById('roll-btn');
    rollBtn.disabled = true;
    
    const activePlayer = players[currentPlayerIndex];
    
    // Store original box in case player answers wrong
    activePlayer.lastPosition = activePlayer.position;
    
    let currentPos = activePlayer.position;
    const rawTarget = currentPos + steps;
    
    let bounce = false;
    let bounceSteps = 0;
    let finalTarget = rawTarget;
    
    if (rawTarget > 50) {
        bounce = true;
        bounceSteps = rawTarget - 50;
        finalTarget = 50 - bounceSteps;
    }
    
    // Step forward animation
    const forwardSteps = bounce ? (50 - currentPos) : steps;
    for (let i = 0; i < forwardSteps; i++) {
        currentPos++;
        activePlayer.position = currentPos;
        updatePlayerTokenPositions();
        await sleep(350);
    }
    
    // Step backward bounce animation
    if (bounce) {
        await sleep(250);
        for (let i = 0; i < bounceSteps; i++) {
            currentPos--;
            activePlayer.position = currentPos;
            updatePlayerTokenPositions();
            await sleep(350);
        }
    }
    
    // Event Evaluator (Snakes and Ladders check)
    let postMovePos = currentPos;
    let eventTriggered = false;
    let finalPosAfterEvent = postMovePos;
    
    if (LADDERS[postMovePos]) {
        finalPosAfterEvent = LADDERS[postMovePos];
        eventTriggered = 'ladder';
    } else if (SNAKES[postMovePos]) {
        finalPosAfterEvent = SNAKES[postMovePos];
        eventTriggered = 'snake';
    }
    
    if (eventTriggered) {
        await sleep(150);
        showEventModal(eventTriggered, postMovePos, finalPosAfterEvent);
        await waitEventModalDismiss();
        
        // Climb/Slide animation
        currentPos = finalPosAfterEvent;
        activePlayer.position = currentPos;
        updatePlayerTokenPositions();
        await sleep(400);
    }
    
    // Update global state and display
    playerPosition = currentPos;
    activePlayer.position = currentPos;
    updatePlayerTokenPositions();
    updateActivePlayerUI();
    
    // Check Win Condition
    if (playerPosition === 50) {
        showWinModal(activePlayer);
    } else {
        // Show trivia question for this landing box!
        const correct = await showQuestionModal(activePlayer, playerPosition);
        
        if (!correct) {
            // Answer was wrong, animate returning back to activePlayer.lastPosition!
            const backTo = activePlayer.lastPosition;
            await sleep(200);
            
            const stepDiff = Math.abs(playerPosition - backTo);
            let tempPos = playerPosition;
            
            for (let i = 0; i < stepDiff; i++) {
                if (tempPos > backTo) tempPos--;
                else tempPos++;
                activePlayer.position = tempPos;
                updatePlayerTokenPositions();
                await sleep(250);
            }
            
            playerPosition = backTo;
            activePlayer.position = backTo;
            updatePlayerTokenPositions();
            await sleep(200);
        } else {
            // Correct answer, update lastPosition checkpoint
            activePlayer.lastPosition = playerPosition;
        }
        
        // Rotate to the next player
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateActivePlayerUI();
        
        // Enable roll button for next turn
        rollBtn.disabled = false;
    }
    
    isMoving = false;
}

/* ==========================================================================
   TRIVIA MODAL HANDLERS
   ========================================================================== */
function showQuestionModal(player, position) {
    return new Promise((resolve) => {
        triviaResolve = resolve;
        const data = culinaryData[position];
        const modal = document.getElementById('question-modal');
        
        const regionBadge = document.getElementById('question-food-region');
        regionBadge.textContent = data.region;
        regionBadge.className = `modal-badge badge ${getRegionClass(position)}`;
        
        document.getElementById('question-box-number').textContent = `#${position}`;
        
        const playerBadge = document.getElementById('question-player-badge');
        playerBadge.textContent = player.name;
        playerBadge.className = `badge p${player.id}-bg`;
        
        document.getElementById('question-food-title').textContent = `Pertanyaan tentang: ${data.name}`;
        document.getElementById('question-text').textContent = data.question;
        
        const optionsContainer = document.getElementById('question-options');
        optionsContainer.innerHTML = '';
        
        data.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary option-btn';
            btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
            btn.addEventListener('click', () => {
                modal.classList.remove('show');
                showAnswerResult(idx === data.answer, player, position);
            });
            optionsContainer.appendChild(btn);
        });
        
        modal.classList.add('show');
    });
}

function showAnswerResult(isCorrect, player, position) {
    const modal = document.getElementById('answer-result-modal');
    const card = document.getElementById('answer-result-card');
    const iconContainer = document.getElementById('result-icon-container');
    const icon = document.getElementById('result-icon');
    const title = document.getElementById('result-title');
    const message = document.getElementById('result-message');
    
    card.className = 'modal-content glass-card event-card animate-bounce-in';
    
    if (isCorrect) {
        card.classList.add('result-correct');
        icon.className = 'fa-solid fa-check event-icon';
        title.textContent = 'Jawaban Benar!';
        message.innerHTML = `Hebat! Jawabanmu benar.<br><strong>${player.name}</strong> tetap berada di <strong>Kotak ${position}</strong>.`;
    } else {
        card.classList.add('result-wrong');
        icon.className = 'fa-solid fa-xmark event-icon';
        title.textContent = 'Jawaban Salah!';
        message.innerHTML = `Sayang sekali, jawabanmu salah.<br><strong>${player.name}</strong> harus kembali ke <strong>Kotak ${player.lastPosition}</strong>.`;
    }
    
    modal.classList.add('show');
    
    // Re-bind continue button click
    const continueBtn = document.getElementById('close-result-btn');
    const newContinueBtn = continueBtn.cloneNode(true);
    continueBtn.parentNode.replaceChild(newContinueBtn, continueBtn);
    
    newContinueBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        if (triviaResolve) {
            triviaResolve(isCorrect);
            triviaResolve = null;
        }
    });
}

/* ==========================================================================
   DICE CONTROLS
   ========================================================================== */
function getDiceRotation(roll) {
    switch (roll) {
        case 1: return 'rotateX(0deg) rotateY(0deg)';
        case 6: return 'rotateX(0deg) rotateY(180deg)';
        case 2: return 'rotateX(0deg) rotateY(-90deg)';
        case 5: return 'rotateX(0deg) rotateY(90deg)';
        case 3: return 'rotateX(-90deg) rotateY(0deg)';
        case 4: return 'rotateX(90deg) rotateY(0deg)';
        default: return 'rotateX(0deg) rotateY(0deg)';
    }
}

function rollDice() {
    if (isMoving) return;
    
    const dice = document.getElementById('game-dice');
    const rollBtn = document.getElementById('roll-btn');
    const resultText = document.getElementById('dice-result-text');
    
    dice.classList.add('rolling');
    rollBtn.disabled = true;
    resultText.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Melempar dadu...`;
    
    const roll = Math.floor(Math.random() * 6) + 1;
    
    setTimeout(() => {
        dice.classList.remove('rolling');
        dice.style.transform = getDiceRotation(roll);
        resultText.innerHTML = `Kamu melempar angka <strong>${roll}</strong>!`;
        movePlayer(roll);
    }, 1200);
}

/* ==========================================================================
   MODAL MANAGEMENT
   ========================================================================== */
function showFoodDetails(n) {
    const data = culinaryData[n];
    const modal = document.getElementById('food-modal');
    
    const regionBadge = document.getElementById('modal-food-region');
    regionBadge.textContent = data.region;
    regionBadge.className = `modal-badge badge ${getRegionClass(n)}`;
    
    document.getElementById('modal-box-number').textContent = `#${n}`;
    document.getElementById('modal-food-name').textContent = data.name;
    document.getElementById('modal-food-desc').textContent = data.desc;
    
    modal.classList.add('show');
}

function closeFoodModal() {
    document.getElementById('food-modal').classList.remove('show');
}

function showEventModal(type, from, to) {
    const modal = document.getElementById('event-modal');
    const content = modal.querySelector('.modal-content');
    const icon = document.getElementById('event-icon');
    const title = document.getElementById('event-title');
    const message = document.getElementById('event-message');
    
    content.className = 'modal-content glass-card event-card animate-bounce-in';
    
    if (type === 'ladder') {
        content.classList.add('ladder');
        icon.className = 'fa-solid fa-arrow-trend-up event-icon';
        title.textContent = 'Selamat!';
        message.innerHTML = `Kamu menemukan jalur kuliner baru!<br>Naik ke <strong>Kotak ${to}</strong>`;
    } else {
        content.classList.add('snake');
        icon.className = 'fa-solid fa-skull-crossbones event-icon';
        title.textContent = 'Oops!';
        message.innerHTML = `Kamu tersesat dalam perjalanan kuliner.<br>Turun ke <strong>Kotak ${to}</strong>`;
    }
    
    modal.classList.add('show');
}

function closeEventModal() {
    document.getElementById('event-modal').classList.remove('show');
    if (eventModalResolve) {
        eventModalResolve();
        eventModalResolve = null;
    }
}

function waitEventModalDismiss() {
    return new Promise(resolve => {
        eventModalResolve = resolve;
    });
}

function showWinModal(player) {
    document.getElementById('victory-message').innerHTML = `<strong>${player.name}</strong> berhasil menjelajahi seluruh<br><strong>Kuliner Nusantara</strong>!`;
    document.getElementById('win-modal').classList.add('show');
}

function restartGame() {
    document.getElementById('win-modal').classList.remove('show');
    
    // Show Menu, Hide Game
    document.getElementById('game-screen').classList.add('d-none');
    document.getElementById('menu-screen').classList.remove('d-none');
    
    // Reset Dice face to 1
    const dice = document.getElementById('game-dice');
    dice.style.transform = getDiceRotation(1);
    
    document.getElementById('dice-result-text').textContent = "Silakan lempar dadu untuk memulai!";
    document.getElementById('roll-btn').disabled = false;
    
    // Clear dynamic tokens
    const boardContainer = document.getElementById('board-container');
    const tokens = boardContainer.querySelectorAll('.player-token');
    tokens.forEach(t => t.remove());
    
    players = [];
    isMoving = false;
}

/* ==========================================================================
   REGISTRATION VIEW CONTROLLER
   ========================================================================== */
function initRegistration() {
    const countBtns = document.querySelectorAll('.player-count-btn');
    countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            countBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const count = parseInt(btn.dataset.count);
            playerCount = count;
            
            // Show / hide player name inputs based on selection
            for (let i = 1; i <= 4; i++) {
                const row = document.getElementById(`p${i}-input-row`);
                if (i <= count) {
                    row.classList.remove('d-none');
                } else {
                    row.classList.add('d-none');
                }
            }
        });
    });
    
    document.getElementById('start-game-btn').addEventListener('click', () => {
        players = [];
        const colors = ["#ff1744", "#2979ff", "#ff9100", "#d500f9"];
        
        for (let i = 1; i <= playerCount; i++) {
            const nameInput = document.getElementById(`player${i}-name`);
            const name = nameInput.value.trim() || `Pemain ${i}`;
            players.push({
                id: i,
                name: name,
                color: colors[i - 1],
                position: 1,
                lastPosition: 1,
                class: `p${i}`
            });
        }
        
        // Dynamically instantiate tokens in the board container
        const boardContainer = document.getElementById('board-container');
        const oldTokens = boardContainer.querySelectorAll('.player-token');
        oldTokens.forEach(t => t.remove());
        
        players.forEach(p => {
            const token = document.createElement('div');
            token.id = `player-token-${p.id}`;
            token.className = `player-token ${p.class}`;
            token.innerHTML = `
                <div class="token-inner"></div>
                <div class="token-glow"></div>
            `;
            boardContainer.appendChild(token);
        });
        
        // Transition screens
        document.getElementById('menu-screen').classList.add('d-none');
        document.getElementById('game-screen').classList.remove('d-none');
        
        currentPlayerIndex = 0;
        playerPosition = 1;
        
        // Defer rendering updates slightly to let DOM process transitions
        setTimeout(() => {
            drawSnakesAndLadders();
            updatePlayerTokenPositions();
            updateActivePlayerUI();
        }, 150);
    });
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initBoard();
    
    // Event bindings
    document.getElementById('roll-btn').addEventListener('click', rollDice);
    document.getElementById('view-food-detail-btn').addEventListener('click', () => showFoodDetails(playerPosition));
    
    document.getElementById('close-food-modal').addEventListener('click', closeFoodModal);
    document.getElementById('close-food-btn').addEventListener('click', closeFoodModal);
    
    document.getElementById('close-event-btn').addEventListener('click', closeEventModal);
    
    document.getElementById('restart-btn').addEventListener('click', restartGame);
    
    // Register initial menu events
    initRegistration();
    
    // Backdrop click dismiss for food and event modal
    window.addEventListener('click', (e) => {
        const foodModal = document.getElementById('food-modal');
        const eventModal = document.getElementById('event-modal');
        if (e.target === foodModal) {
            closeFoodModal();
        }
        if (e.target === eventModal) {
            closeEventModal();
        }
    });
});

window.addEventListener('resize', () => {
    drawSnakesAndLadders();
    updatePlayerTokenPositions();
});
