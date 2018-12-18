app.controller('indexController', ['$scope', function($scope) {
  	

	var data = `[
						 {
						   "seq": 1,
						   "first": "Eddie",
						   "last": "Holland",
						   "age": 60,
						   "street": "Tandip Heights",
						   "city": "Avitofuri",
						   "state": "ID",
						   "zip": 14298,
						   "dollar": "$8861.81",
						   "pick": "GREEN",
						   "date": "06/21/2006"
						 },
						 {
						   "seq": 2,
						   "first": "Lillian",
						   "last": "Fletcher",
						   "age": 59,
						   "street": "Muok Lane",
						   "city": "Volepe",
						   "state": "MT",
						   "zip": 28305,
						   "dollar": "$2804.18",
						   "pick": "RED",
						   "date": "11/02/1934"
						 },
						 {
						   "seq": 3,
						   "first": "Bernard",
						   "last": "Lewis",
						   "age": 19,
						   "street": "Etiug Pass",
						   "city": "Ejeszab",
						   "state": "VA",
						   "zip": 23188,
						   "dollar": "$5940.81",
						   "pick": "YELLOW",
						   "date": "12/09/1937"
						 },
						 {
						   "seq": 4,
						   "first": "Frederick",
						   "last": "Nash",
						   "age": 21,
						   "street": "Sutiw Road",
						   "city": "Suojuewi",
						   "state": "MO",
						   "zip": 11836,
						   "dollar": "$1382.93",
						   "pick": "RED",
						   "date": "01/21/2058"
						 },
						 {
						   "seq": 5,
						   "first": "Stanley",
						   "last": "Richards",
						   "age": 55,
						   "street": "Tivhut Square",
						   "city": "Nobhenur",
						   "state": "HI",
						   "zip": 6639,
						   "dollar": "$6568.31",
						   "pick": "RED",
						   "date": "12/14/1943"
						 },
						 {
						   "seq": 6,
						   "first": "Terry",
						   "last": "Young",
						   "age": 43,
						   "street": "Uzfe Avenue",
						   "city": "Fihsememu",
						   "state": "PA",
						   "zip": 36265,
						   "dollar": "$4583.86",
						   "pick": "RED",
						   "date": "03/02/2046"
						 },
						 {
						   "seq": 7,
						   "first": "Mabel",
						   "last": "Ingram",
						   "age": 37,
						   "street": "Julin View",
						   "city": "Tosniudu",
						   "state": "HI",
						   "zip": 50144,
						   "dollar": "$2429.84",
						   "pick": "YELLOW",
						   "date": "04/23/1928"
						 },
						 {
						   "seq": 8,
						   "first": "Phillip",
						   "last": "Tran",
						   "age": 51,
						   "street": "Astof Lane",
						   "city": "Cosrifar",
						   "state": "DE",
						   "zip": 79414,
						   "dollar": "$7956.08",
						   "pick": "WHITE",
						   "date": "08/11/1921"
						 },
						 {
						   "seq": 9,
						   "first": "Louisa",
						   "last": "Logan",
						   "age": 32,
						   "street": "Gopwoh Road",
						   "city": "Rinfiwob",
						   "state": "NV",
						   "zip": 34763,
						   "dollar": "$2079.90",
						   "pick": "GREEN",
						   "date": "03/08/1963"
						 },
						 {
						   "seq": 10,
						   "first": "Nellie",
						   "last": "Hunt",
						   "age": 62,
						   "street": "Wanpum Pike",
						   "city": "Wupkuvat",
						   "state": "PA",
						   "zip": 17841,
						   "dollar": "$5667.06",
						   "pick": "YELLOW",
						   "date": "12/30/2031"
						 },
						 {
						   "seq": 11,
						   "first": "Christian",
						   "last": "Watson",
						   "age": 61,
						   "street": "Zewsal Pike",
						   "city": "Umhuru",
						   "state": "AK",
						   "zip": 19604,
						   "dollar": "$7882.01",
						   "pick": "WHITE",
						   "date": "01/08/1923"
						 },
						 {
						   "seq": 12,
						   "first": "Christian",
						   "last": "Harrington",
						   "age": 32,
						   "street": "Ipdo Square",
						   "city": "Towwarhin",
						   "state": "NJ",
						   "zip": 31528,
						   "dollar": "$2049.29",
						   "pick": "BLUE",
						   "date": "10/12/1970"
						 },
						 {
						   "seq": 13,
						   "first": "Violet",
						   "last": "Osborne",
						   "age": 61,
						   "street": "Jomji Plaza",
						   "city": "Vihpowu",
						   "state": "KS",
						   "zip": 61010,
						   "dollar": "$4892.05",
						   "pick": "GREEN",
						   "date": "10/01/2003"
						 },
						 {
						   "seq": 14,
						   "first": "Leroy",
						   "last": "Smith",
						   "age": 61,
						   "street": "Sedod Drive",
						   "city": "Kupigju",
						   "state": "IL",
						   "zip": 40510,
						   "dollar": "$4421.78",
						   "pick": "YELLOW",
						   "date": "12/13/1970"
						 },
						 {
						   "seq": 15,
						   "first": "Amanda",
						   "last": "McDaniel",
						   "age": 30,
						   "street": "Avna Road",
						   "city": "Cafaute",
						   "state": "NJ",
						   "zip": 5167,
						   "dollar": "$9421.77",
						   "pick": "GREEN",
						   "date": "10/20/2006"
						 },
						 {
						   "seq": 16,
						   "first": "Matilda",
						   "last": "Hart",
						   "age": 18,
						   "street": "Nelef Junction",
						   "city": "Zufegci",
						   "state": "KS",
						   "zip": 48876,
						   "dollar": "$9732.98",
						   "pick": "BLUE",
						   "date": "04/10/2003"
						 },
						 {
						   "seq": 17,
						   "first": "Brian",
						   "last": "Powers",
						   "age": 25,
						   "street": "Daczi Extension",
						   "city": "Ocuwojaji",
						   "state": "PA",
						   "zip": 10530,
						   "dollar": "$9760.97",
						   "pick": "YELLOW",
						   "date": "05/22/1996"
						 },
						 {
						   "seq": 18,
						   "first": "Norman",
						   "last": "Hunt",
						   "age": 22,
						   "street": "Cahi River",
						   "city": "Pimmanlaj",
						   "state": "MT",
						   "zip": 6903,
						   "dollar": "$1310.54",
						   "pick": "GREEN",
						   "date": "10/13/1926"
						 },
						 {
						   "seq": 19,
						   "first": "Todd",
						   "last": "Ortega",
						   "age": 28,
						   "street": "Hawno Manor",
						   "city": "Jiruteav",
						   "state": "OH",
						   "zip": 26012,
						   "dollar": "$1600.08",
						   "pick": "WHITE",
						   "date": "06/07/2057"
						 },
						 {
						   "seq": 20,
						   "first": "Garrett",
						   "last": "Larson",
						   "age": 37,
						   "street": "Narmer Junction",
						   "city": "Racejvos",
						   "state": "OR",
						   "zip": 3293,
						   "dollar": "$8298.70",
						   "pick": "YELLOW",
						   "date": "10/20/1910"
						 },
						 {
						   "seq": 21,
						   "first": "Kyle",
						   "last": "Goodman",
						   "age": 30,
						   "street": "Ijaeme Court",
						   "city": "Uwfobfad",
						   "state": "IA",
						   "zip": 52397,
						   "dollar": "$5349.35",
						   "pick": "BLUE",
						   "date": "04/28/1959"
						 },
						 {
						   "seq": 22,
						   "first": "Austin",
						   "last": "Hunter",
						   "age": 36,
						   "street": "Lave Loop",
						   "city": "Taezdi",
						   "state": "DC",
						   "zip": 44374,
						   "dollar": "$2186.25",
						   "pick": "WHITE",
						   "date": "06/23/1900"
						 },
						 {
						   "seq": 23,
						   "first": "Dustin",
						   "last": "Miller",
						   "age": 47,
						   "street": "Lamowi Key",
						   "city": "Omwerdip",
						   "state": "VT",
						   "zip": 95672,
						   "dollar": "$6939.89",
						   "pick": "YELLOW",
						   "date": "02/02/1948"
						 },
						 {
						   "seq": 24,
						   "first": "Wesley",
						   "last": "Dunn",
						   "age": 48,
						   "street": "Niel Park",
						   "city": "Doansah",
						   "state": "CA",
						   "zip": 89339,
						   "dollar": "$5672.66",
						   "pick": "GREEN",
						   "date": "12/31/1925"
						 },
						 {
						   "seq": 25,
						   "first": "Jeff",
						   "last": "Andrews",
						   "age": 65,
						   "street": "Lohat Terrace",
						   "city": "Fezwujlut",
						   "state": "IN",
						   "zip": 2528,
						   "dollar": "$8959.88",
						   "pick": "WHITE",
						   "date": "04/11/2043"
						 },
						 {
						   "seq": 26,
						   "first": "Bertie",
						   "last": "Adkins",
						   "age": 46,
						   "street": "Aboge Way",
						   "city": "Nivafuz",
						   "state": "WY",
						   "zip": 98025,
						   "dollar": "$7296.32",
						   "pick": "YELLOW",
						   "date": "10/07/2044"
						 },
						 {
						   "seq": 27,
						   "first": "Francis",
						   "last": "Horton",
						   "age": 22,
						   "street": "Fakar Center",
						   "city": "Tuhzigas",
						   "state": "NC",
						   "zip": 8324,
						   "dollar": "$9814.79",
						   "pick": "BLUE",
						   "date": "07/24/2008"
						 },
						 {
						   "seq": 28,
						   "first": "Teresa",
						   "last": "Floyd",
						   "age": 27,
						   "street": "Curbu Avenue",
						   "city": "Laolpen",
						   "state": "CO",
						   "zip": 44201,
						   "dollar": "$3982.63",
						   "pick": "WHITE",
						   "date": "06/29/1977"
						 },
						 {
						   "seq": 29,
						   "first": "Dean",
						   "last": "Holmes",
						   "age": 58,
						   "street": "Ilera Parkway",
						   "city": "Asehefcif",
						   "state": "IA",
						   "zip": 17251,
						   "dollar": "$1571.60",
						   "pick": "BLUE",
						   "date": "03/13/1982"
						 },
						 {
						   "seq": 30,
						   "first": "Ricky",
						   "last": "Tyler",
						   "age": 53,
						   "street": "Fuwbi Key",
						   "city": "Fepelu",
						   "state": "GA",
						   "zip": 75890,
						   "dollar": "$8019.24",
						   "pick": "YELLOW",
						   "date": "06/11/2044"
						 },
						 {
						   "seq": 31,
						   "first": "Derrick",
						   "last": "McCarthy",
						   "age": 42,
						   "street": "Icosa Pass",
						   "city": "Vesbani",
						   "state": "IL",
						   "zip": 47368,
						   "dollar": "$7994.18",
						   "pick": "GREEN",
						   "date": "01/12/2055"
						 },
						 {
						   "seq": 32,
						   "first": "Mittie",
						   "last": "Martinez",
						   "age": 24,
						   "street": "Anomon Lane",
						   "city": "Osubozi",
						   "state": "RI",
						   "zip": 38617,
						   "dollar": "$836.55",
						   "pick": "WHITE",
						   "date": "07/28/1997"
						 },
						 {
						   "seq": 33,
						   "first": "Marion",
						   "last": "Fletcher",
						   "age": 28,
						   "street": "Baohu Pass",
						   "city": "Lezuhmak",
						   "state": "AK",
						   "zip": 66282,
						   "dollar": "$8456.54",
						   "pick": "YELLOW",
						   "date": "08/26/1934"
						 },
						 {
						   "seq": 34,
						   "first": "Susie",
						   "last": "Gordon",
						   "age": 31,
						   "street": "Kedvah Grove",
						   "city": "Esiguvow",
						   "state": "ME",
						   "zip": 84838,
						   "dollar": "$6295.23",
						   "pick": "YELLOW",
						   "date": "02/02/2039"
						 },
						 {
						   "seq": 35,
						   "first": "Sophia",
						   "last": "Sutton",
						   "age": 41,
						   "street": "Cehu Path",
						   "city": "Ojodofo",
						   "state": "ID",
						   "zip": 94306,
						   "dollar": "$3449.54",
						   "pick": "YELLOW",
						   "date": "06/28/1939"
						 },
						 {
						   "seq": 36,
						   "first": "Travis",
						   "last": "Haynes",
						   "age": 50,
						   "street": "Niar Loop",
						   "city": "Ugginhuf",
						   "state": "TN",
						   "zip": 63465,
						   "dollar": "$247.19",
						   "pick": "BLUE",
						   "date": "06/04/2038"
						 },
						 {
						   "seq": 37,
						   "first": "Justin",
						   "last": "Russell",
						   "age": 22,
						   "street": "Powzoz Heights",
						   "city": "Nisuseli",
						   "state": "HI",
						   "zip": 90804,
						   "dollar": "$5746.20",
						   "pick": "BLUE",
						   "date": "08/06/2012"
						 },
						 {
						   "seq": 38,
						   "first": "Mollie",
						   "last": "Curry",
						   "age": 39,
						   "street": "Unoza Point",
						   "city": "Zibwako",
						   "state": "NH",
						   "zip": 20480,
						   "dollar": "$7852.37",
						   "pick": "WHITE",
						   "date": "03/16/2036"
						 },
						 {
						   "seq": 39,
						   "first": "Jeffrey",
						   "last": "Brock",
						   "age": 21,
						   "street": "Ovaho Park",
						   "city": "Zacocbuj",
						   "state": "WY",
						   "zip": 29793,
						   "dollar": "$659.07",
						   "pick": "WHITE",
						   "date": "08/13/2058"
						 },
						 {
						   "seq": 40,
						   "first": "Donald",
						   "last": "Parsons",
						   "age": 59,
						   "street": "Omuomu Lane",
						   "city": "Rocula",
						   "state": "AR",
						   "zip": 14907,
						   "dollar": "$8162.85",
						   "pick": "GREEN",
						   "date": "02/04/1911"
						 },
						 {
						   "seq": 41,
						   "first": "Marian",
						   "last": "Hicks",
						   "age": 53,
						   "street": "Eviej Loop",
						   "city": "Ramvudfe",
						   "state": "MA",
						   "zip": 98246,
						   "dollar": "$2302.03",
						   "pick": "RED",
						   "date": "07/11/1926"
						 },
						 {
						   "seq": 42,
						   "first": "Nettie",
						   "last": "Stevens",
						   "age": 48,
						   "street": "Molas Manor",
						   "city": "Sokuoj",
						   "state": "ME",
						   "zip": 11970,
						   "dollar": "$8226.12",
						   "pick": "GREEN",
						   "date": "04/03/2045"
						 },
						 {
						   "seq": 43,
						   "first": "Edward",
						   "last": "Craig",
						   "age": 57,
						   "street": "Coguk Circle",
						   "city": "Cohidpa",
						   "state": "KS",
						   "zip": 85506,
						   "dollar": "$8642.29",
						   "pick": "WHITE",
						   "date": "06/27/2012"
						 },
						 {
						   "seq": 44,
						   "first": "Devin",
						   "last": "Colon",
						   "age": 43,
						   "street": "Moili Park",
						   "city": "Hufidkug",
						   "state": "TN",
						   "zip": 88240,
						   "dollar": "$4810.43",
						   "pick": "YELLOW",
						   "date": "03/15/1905"
						 },
						 {
						   "seq": 45,
						   "first": "Henry",
						   "last": "Santos",
						   "age": 27,
						   "street": "Mipod River",
						   "city": "Fehfazfa",
						   "state": "NV",
						   "zip": 42564,
						   "dollar": "$3949.51",
						   "pick": "RED",
						   "date": "09/04/1984"
						 },
						 {
						   "seq": 46,
						   "first": "Delia",
						   "last": "Miller",
						   "age": 30,
						   "street": "Bonug Pass",
						   "city": "Fadevoc",
						   "state": "TX",
						   "zip": 58969,
						   "dollar": "$9416.08",
						   "pick": "BLUE",
						   "date": "09/27/2048"
						 },
						 {
						   "seq": 47,
						   "first": "Charlie",
						   "last": "Bass",
						   "age": 59,
						   "street": "Lubmo River",
						   "city": "Hutgakof",
						   "state": "NH",
						   "zip": 70960,
						   "dollar": "$383.77",
						   "pick": "BLUE",
						   "date": "08/04/2022"
						 },
						 {
						   "seq": 48,
						   "first": "Georgia",
						   "last": "Smith",
						   "age": 40,
						   "street": "Uzen Grove",
						   "city": "Tifaflot",
						   "state": "TX",
						   "zip": 73761,
						   "dollar": "$4991.18",
						   "pick": "WHITE",
						   "date": "04/06/2001"
						 },
						 {
						   "seq": 49,
						   "first": "Leroy",
						   "last": "Peterson",
						   "age": 52,
						   "street": "Rigat Terrace",
						   "city": "Atwosa",
						   "state": "MN",
						   "zip": 69170,
						   "dollar": "$9218.35",
						   "pick": "RED",
						   "date": "01/15/1930"
						 },
						 {
						   "seq": 50,
						   "first": "Mason",
						   "last": "Shaw",
						   "age": 26,
						   "street": "Dabag Ridge",
						   "city": "Wolwalbu",
						   "state": "WV",
						   "zip": 54582,
						   "dollar": "$1007.33",
						   "pick": "RED",
						   "date": "10/05/1932"
						 },
						 {
						   "seq": 51,
						   "first": "Ann",
						   "last": "Jennings",
						   "age": 36,
						   "street": "Unvi Pass",
						   "city": "Lileboku",
						   "state": "NY",
						   "zip": 50734,
						   "dollar": "$965.26",
						   "pick": "BLUE",
						   "date": "12/21/1927"
						 },
						 {
						   "seq": 52,
						   "first": "Elizabeth",
						   "last": "Norton",
						   "age": 40,
						   "street": "Nesse Parkway",
						   "city": "Inatci",
						   "state": "CT",
						   "zip": 49299,
						   "dollar": "$7579.30",
						   "pick": "YELLOW",
						   "date": "04/14/1952"
						 },
						 {
						   "seq": 53,
						   "first": "Douglas",
						   "last": "Roy",
						   "age": 52,
						   "street": "Wulew Pass",
						   "city": "Daravo",
						   "state": "AL",
						   "zip": 44679,
						   "dollar": "$5706.70",
						   "pick": "GREEN",
						   "date": "07/11/2032"
						 },
						 {
						   "seq": 54,
						   "first": "Cory",
						   "last": "Elliott",
						   "age": 65,
						   "street": "Niba Parkway",
						   "city": "Wafgunwum",
						   "state": "IA",
						   "zip": 17470,
						   "dollar": "$2004.68",
						   "pick": "RED",
						   "date": "08/19/1995"
						 },
						 {
						   "seq": 55,
						   "first": "Glen",
						   "last": "Ball",
						   "age": 20,
						   "street": "Teccuw Junction",
						   "city": "Tupjeaco",
						   "state": "AR",
						   "zip": 65207,
						   "dollar": "$522.79",
						   "pick": "YELLOW",
						   "date": "01/02/1913"
						 },
						 {
						   "seq": 56,
						   "first": "Olga",
						   "last": "Scott",
						   "age": 18,
						   "street": "Gefi Center",
						   "city": "Paonri",
						   "state": "WY",
						   "zip": 97766,
						   "dollar": "$4600.13",
						   "pick": "YELLOW",
						   "date": "01/21/1950"
						 },
						 {
						   "seq": 57,
						   "first": "Andrew",
						   "last": "Mann",
						   "age": 59,
						   "street": "Fuvu Key",
						   "city": "Dulahah",
						   "state": "KY",
						   "zip": 11613,
						   "dollar": "$8416.92",
						   "pick": "WHITE",
						   "date": "05/30/1967"
						 },
						 {
						   "seq": 58,
						   "first": "Isaiah",
						   "last": "Franklin",
						   "age": 58,
						   "street": "Bisoke Junction",
						   "city": "Nedtofuv",
						   "state": "KS",
						   "zip": 24038,
						   "dollar": "$2517.28",
						   "pick": "WHITE",
						   "date": "05/12/1959"
						 },
						 {
						   "seq": 59,
						   "first": "Rodney",
						   "last": "Thornton",
						   "age": 23,
						   "street": "Dizwo Highway",
						   "city": "Visgeow",
						   "state": "AK",
						   "zip": 85963,
						   "dollar": "$6485.12",
						   "pick": "GREEN",
						   "date": "02/23/2002"
						 },
						 {
						   "seq": 60,
						   "first": "Nancy",
						   "last": "Patton",
						   "age": 26,
						   "street": "Gijmu Circle",
						   "city": "Matuftot",
						   "state": "LA",
						   "zip": 9825,
						   "dollar": "$2295.89",
						   "pick": "RED",
						   "date": "04/20/2052"
						 },
						 {
						   "seq": 61,
						   "first": "Mark",
						   "last": "Pope",
						   "age": 19,
						   "street": "Numut Ridge",
						   "city": "Sokogtul",
						   "state": "WI",
						   "zip": 55568,
						   "dollar": "$7210.16",
						   "pick": "GREEN",
						   "date": "02/20/2059"
						 },
						 {
						   "seq": 62,
						   "first": "Alta",
						   "last": "Jensen",
						   "age": 57,
						   "street": "Nigu Extension",
						   "city": "Idijeda",
						   "state": "NH",
						   "zip": 69332,
						   "dollar": "$49.40",
						   "pick": "GREEN",
						   "date": "05/06/2003"
						 },
						 {
						   "seq": 63,
						   "first": "Timothy",
						   "last": "Allen",
						   "age": 21,
						   "street": "Teoz Way",
						   "city": "Gevikmo",
						   "state": "LA",
						   "zip": 84587,
						   "dollar": "$2332.76",
						   "pick": "RED",
						   "date": "09/09/1955"
						 },
						 {
						   "seq": 64,
						   "first": "Polly",
						   "last": "Campbell",
						   "age": 32,
						   "street": "Poca Glen",
						   "city": "Soksuvi",
						   "state": "NC",
						   "zip": 31627,
						   "dollar": "$2170.92",
						   "pick": "WHITE",
						   "date": "08/07/2039"
						 },
						 {
						   "seq": 65,
						   "first": "Thomas",
						   "last": "Henry",
						   "age": 29,
						   "street": "Karzoh Point",
						   "city": "Ageiggew",
						   "state": "OH",
						   "zip": 43214,
						   "dollar": "$7883.61",
						   "pick": "WHITE",
						   "date": "09/11/2032"
						 },
						 {
						   "seq": 66,
						   "first": "Betty",
						   "last": "Warren",
						   "age": 59,
						   "street": "Wafuvu View",
						   "city": "Rudotbuj",
						   "state": "AR",
						   "zip": 66597,
						   "dollar": "$2701.66",
						   "pick": "YELLOW",
						   "date": "08/04/1922"
						 },
						 {
						   "seq": 67,
						   "first": "Alex",
						   "last": "West",
						   "age": 54,
						   "street": "Lenev Manor",
						   "city": "Mogomjok",
						   "state": "MA",
						   "zip": 25823,
						   "dollar": "$9512.24",
						   "pick": "GREEN",
						   "date": "03/08/1935"
						 },
						 {
						   "seq": 68,
						   "first": "Elsie",
						   "last": "Chavez",
						   "age": 32,
						   "street": "Lese Drive",
						   "city": "Lidzelot",
						   "state": "KS",
						   "zip": 60008,
						   "dollar": "$7683.19",
						   "pick": "YELLOW",
						   "date": "08/30/1946"
						 },
						 {
						   "seq": 69,
						   "first": "Cora",
						   "last": "Rice",
						   "age": 38,
						   "street": "Jetis Park",
						   "city": "Elibiwib",
						   "state": "UT",
						   "zip": 87578,
						   "dollar": "$8270.22",
						   "pick": "RED",
						   "date": "01/18/1990"
						 },
						 {
						   "seq": 70,
						   "first": "Gordon",
						   "last": "Jefferson",
						   "age": 20,
						   "street": "Baki Court",
						   "city": "Imozamu",
						   "state": "VA",
						   "zip": 64366,
						   "dollar": "$5438.47",
						   "pick": "WHITE",
						   "date": "05/13/2060"
						 },
						 {
						   "seq": 71,
						   "first": "Aiden",
						   "last": "Tate",
						   "age": 58,
						   "street": "Zutuf Circle",
						   "city": "Ohhecbad",
						   "state": "DC",
						   "zip": 37301,
						   "dollar": "$5117.54",
						   "pick": "YELLOW",
						   "date": "03/19/1966"
						 },
						 {
						   "seq": 72,
						   "first": "Benjamin",
						   "last": "West",
						   "age": 58,
						   "street": "Leru View",
						   "city": "Alamikaw",
						   "state": "RI",
						   "zip": 54281,
						   "dollar": "$2510.96",
						   "pick": "WHITE",
						   "date": "06/30/2054"
						 },
						 {
						   "seq": 73,
						   "first": "Sarah",
						   "last": "Bryan",
						   "age": 28,
						   "street": "Rison Heights",
						   "city": "Buderaoje",
						   "state": "AL",
						   "zip": 95207,
						   "dollar": "$5286.85",
						   "pick": "YELLOW",
						   "date": "04/09/2009"
						 },
						 {
						   "seq": 74,
						   "first": "Mamie",
						   "last": "Mack",
						   "age": 44,
						   "street": "Beffo Circle",
						   "city": "Vusgecmi",
						   "state": "KS",
						   "zip": 96902,
						   "dollar": "$8709.11",
						   "pick": "GREEN",
						   "date": "05/18/1917"
						 },
						 {
						   "seq": 75,
						   "first": "Lola",
						   "last": "Garza",
						   "age": 28,
						   "street": "Jika Road",
						   "city": "Unagivgo",
						   "state": "AK",
						   "zip": 90218,
						   "dollar": "$3805.84",
						   "pick": "RED",
						   "date": "03/18/2030"
						 },
						 {
						   "seq": 76,
						   "first": "Kevin",
						   "last": "McGuire",
						   "age": 57,
						   "street": "Dehag Heights",
						   "city": "Ufegaunu",
						   "state": "IN",
						   "zip": 18535,
						   "dollar": "$5803.32",
						   "pick": "RED",
						   "date": "10/30/2038"
						 },
						 {
						   "seq": 77,
						   "first": "Kyle",
						   "last": "Barton",
						   "age": 50,
						   "street": "Solub Place",
						   "city": "Gisuhtip",
						   "state": "NE",
						   "zip": 11736,
						   "dollar": "$6442.10",
						   "pick": "YELLOW",
						   "date": "02/13/2044"
						 },
						 {
						   "seq": 78,
						   "first": "Garrett",
						   "last": "Black",
						   "age": 43,
						   "street": "Urnen Terrace",
						   "city": "Irorodiz",
						   "state": "NY",
						   "zip": 50794,
						   "dollar": "$4768.67",
						   "pick": "WHITE",
						   "date": "01/21/1990"
						 },
						 {
						   "seq": 79,
						   "first": "Mattie",
						   "last": "Strickland",
						   "age": 32,
						   "street": "Befalu Extension",
						   "city": "Arizafun",
						   "state": "NC",
						   "zip": 15417,
						   "dollar": "$5844.33",
						   "pick": "YELLOW",
						   "date": "10/04/1971"
						 },
						 {
						   "seq": 80,
						   "first": "Ora",
						   "last": "Blair",
						   "age": 48,
						   "street": "Rudivu Mill",
						   "city": "Japozoc",
						   "state": "AR",
						   "zip": 49552,
						   "dollar": "$8046.80",
						   "pick": "RED",
						   "date": "01/08/2002"
						 },
						 {
						   "seq": 81,
						   "first": "Jean",
						   "last": "Harper",
						   "age": 21,
						   "street": "Egfu Park",
						   "city": "Feveje",
						   "state": "CO",
						   "zip": 22411,
						   "dollar": "$5793.19",
						   "pick": "BLUE",
						   "date": "06/16/1947"
						 },
						 {
						   "seq": 82,
						   "first": "William",
						   "last": "Richards",
						   "age": 43,
						   "street": "Ranjup Pass",
						   "city": "Pijasid",
						   "state": "OH",
						   "zip": 72239,
						   "dollar": "$5899.81",
						   "pick": "WHITE",
						   "date": "12/10/2009"
						 },
						 {
						   "seq": 83,
						   "first": "Derrick",
						   "last": "Brown",
						   "age": 43,
						   "street": "Pangoh View",
						   "city": "Sislizbo",
						   "state": "KS",
						   "zip": 21814,
						   "dollar": "$586.74",
						   "pick": "YELLOW",
						   "date": "12/09/1976"
						 },
						 {
						   "seq": 84,
						   "first": "Lola",
						   "last": "Swanson",
						   "age": 47,
						   "street": "Nepha Extension",
						   "city": "Ulrico",
						   "state": "LA",
						   "zip": 93600,
						   "dollar": "$511.23",
						   "pick": "BLUE",
						   "date": "07/17/2002"
						 },
						 {
						   "seq": 85,
						   "first": "Willie",
						   "last": "Butler",
						   "age": 23,
						   "street": "Lebof Square",
						   "city": "Evcoira",
						   "state": "CA",
						   "zip": 73078,
						   "dollar": "$4511.48",
						   "pick": "RED",
						   "date": "11/30/2063"
						 },
						 {
						   "seq": 86,
						   "first": "Alexander",
						   "last": "Rogers",
						   "age": 56,
						   "street": "Setug Heights",
						   "city": "Pumugola",
						   "state": "MN",
						   "zip": 14386,
						   "dollar": "$2989.43",
						   "pick": "BLUE",
						   "date": "05/27/1946"
						 },
						 {
						   "seq": 87,
						   "first": "Nathaniel",
						   "last": "Vega",
						   "age": 21,
						   "street": "Korjor Extension",
						   "city": "Cejlaklez",
						   "state": "RI",
						   "zip": 42404,
						   "dollar": "$8183.73",
						   "pick": "YELLOW",
						   "date": "11/26/1905"
						 },
						 {
						   "seq": 88,
						   "first": "Walter",
						   "last": "Abbott",
						   "age": 64,
						   "street": "Ilzil Point",
						   "city": "Peceuc",
						   "state": "GA",
						   "zip": 23310,
						   "dollar": "$2009.14",
						   "pick": "BLUE",
						   "date": "12/14/2060"
						 },
						 {
						   "seq": 89,
						   "first": "Isaac",
						   "last": "Martinez",
						   "age": 55,
						   "street": "Baba Place",
						   "city": "Jamagtuh",
						   "state": "PA",
						   "zip": 64465,
						   "dollar": "$4316.54",
						   "pick": "GREEN",
						   "date": "12/22/2006"
						 },
						 {
						   "seq": 90,
						   "first": "Adelaide",
						   "last": "Tyler",
						   "age": 24,
						   "street": "Miev Terrace",
						   "city": "Bakreltes",
						   "state": "ME",
						   "zip": 59696,
						   "dollar": "$9170.80",
						   "pick": "YELLOW",
						   "date": "10/11/1917"
						 },
						 {
						   "seq": 91,
						   "first": "Lulu",
						   "last": "Moss",
						   "age": 23,
						   "street": "Munve Square",
						   "city": "Esfosoh",
						   "state": "LA",
						   "zip": 86564,
						   "dollar": "$6206.68",
						   "pick": "YELLOW",
						   "date": "10/07/1913"
						 },
						 {
						   "seq": 92,
						   "first": "Marie",
						   "last": "Frank",
						   "age": 57,
						   "street": "Megu Court",
						   "city": "Wezuojo",
						   "state": "SC",
						   "zip": 18025,
						   "dollar": "$7355.38",
						   "pick": "BLUE",
						   "date": "02/14/1986"
						 },
						 {
						   "seq": 93,
						   "first": "Willie",
						   "last": "Phillips",
						   "age": 38,
						   "street": "Foza Extension",
						   "city": "Kaafuza",
						   "state": "ME",
						   "zip": 72444,
						   "dollar": "$5903.45",
						   "pick": "BLUE",
						   "date": "08/15/1905"
						 },
						 {
						   "seq": 94,
						   "first": "Cecilia",
						   "last": "Williamson",
						   "age": 35,
						   "street": "Jijpa Key",
						   "city": "Ofruzgad",
						   "state": "UT",
						   "zip": 94946,
						   "dollar": "$8474.30",
						   "pick": "GREEN",
						   "date": "06/02/1904"
						 },
						 {
						   "seq": 95,
						   "first": "Rosetta",
						   "last": "Greene",
						   "age": 58,
						   "street": "Ohvuf Pass",
						   "city": "Welakuad",
						   "state": "ID",
						   "zip": 54125,
						   "dollar": "$9608.69",
						   "pick": "RED",
						   "date": "10/31/1926"
						 },
						 {
						   "seq": 96,
						   "first": "Rachel",
						   "last": "Cox",
						   "age": 45,
						   "street": "Cage Manor",
						   "city": "Satocgo",
						   "state": "PA",
						   "zip": 12764,
						   "dollar": "$9379.17",
						   "pick": "YELLOW",
						   "date": "11/06/1961"
						 },
						 {
						   "seq": 97,
						   "first": "Mollie",
						   "last": "Graham",
						   "age": 34,
						   "street": "Joje Circle",
						   "city": "Egibuede",
						   "state": "MA",
						   "zip": 5969,
						   "dollar": "$2593.79",
						   "pick": "RED",
						   "date": "06/17/2011"
						 },
						 {
						   "seq": 98,
						   "first": "Lois",
						   "last": "Snyder",
						   "age": 23,
						   "street": "Novfoj Court",
						   "city": "Lodikuv",
						   "state": "NE",
						   "zip": 60922,
						   "dollar": "$2742.83",
						   "pick": "WHITE",
						   "date": "03/02/2044"
						 },
						 {
						   "seq": 99,
						   "first": "Angel",
						   "last": "Chambers",
						   "age": 30,
						   "street": "Loju Grove",
						   "city": "Disobbu",
						   "state": "IL",
						   "zip": 56272,
						   "dollar": "$8619.89",
						   "pick": "RED",
						   "date": "05/06/1943"
						 },
						 {
						   "seq": 100,
						   "first": "Howard",
						   "last": "Lawson",
						   "age": 34,
						   "street": "Ropor Turnpike",
						   "city": "Vuledisa",
						   "state": "MA",
						   "zip": 76198,
						   "dollar": "$4210.89",
						   "pick": "GREEN",
						   "date": "11/16/1900"
						 }]`;
	var dataDropDownArr = ['เรียงตามลำดับ','อายุมากไปน้อย','อายุน้อยไปมาก','เรียงตามชื่อ']; 
	$scope.data = JSON.parse(data);
	var dataType = JSON.parse(data);
	
	$scope.dropDrowns = [
      {name:'เรียงตามลำดับ', value:'seq'},
      {name:'อายุมากไปน้อย', value:'-age'},
      {name:'อายุน้อยไปมาก', value:'age'},
      {name:'เรียงตามชื่อ', value:'first'}
    ];
    $scope.selectDropDrowns = $scope.dropDrowns[0]; // set select default






	$scope.dataTypes = dataType;
	$scope.checkBoxCatagoryArr = []; // $scope.checkBoxCatagoryArr = ["GREEN","RED"];
	// console.log(data)
	$scope.selectCheckbox = function(key){
		var isBoxCheck = $scope.selectAnimationAndIsCheckBox(key);
		var numIndex = $scope.checkBoxCatagoryArr.indexOf(key);
		console.log(numIndex)
		if(isBoxCheck){
			$scope.checkBoxCatagoryArr.push(key);
		}else{
			$scope.checkBoxCatagoryArr.splice(numIndex, 1); /*remove arr form indexof splice(#position, #numPositionForDel)*/
		}
		// console.log($scope.checkBoxCatagoryArr)
		// $scope.itemFilter =  {pick:key};   
	};




	// $scope.orderByStr = "-age"; 
	$scope.selectOderBy = function (key) {
		$scope.orderByStr = key;
		$scope.showBtnMoreToLessAge = !$scope.showBtnMoreToLessAge;
		$scope.showBtnMoreToLessSeq = !$scope.showBtnMoreToLessSeq;
	}

	$scope.initSelectOrderBy = function() {
		$scope.showBtnMoreToLessAge = true;
		$scope.showBtnMoreToLessSeq = true;
	}

	$scope.selectAnimationAndIsCheckBox = function (key) {
		var jqueryCheck = $(`[name="checkBoxIs${key}"]`);
		var getClass =  jqueryCheck.attr('class');
		if(getClass == 'far fa-circle fa-fw'){
			jqueryCheck.removeClass('far fa-circle fa-fw').addClass('far fa-check-circle fa-fw');
			return true;
		}else{
			jqueryCheck.removeClass('far fa-check-circle fa-fw').addClass('far fa-circle fa-fw');
			return false;
		}
	}


}]);

// app.run(function($rootScope) {
//   $rootScope.model = { id: 'seq' };
// })

// app.directive('dropDrown', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, element, attrs, ngModel) {
//     	console.log('directive')
//       	ngModel.$parsers.push(function(val) {
//     		scope.orderByStr = val;
//         	return val;
//       	});

//       	ngModel.$formatters.push(function(val) {
//     		// scope.orderByStr = "seq";
//         	return val;
//       	});
//     }
//   };
// });

app.filter('filterMultiple',['$filter',function ($filter) { /*use arrayOfObjectswithKeys | filterMultiple:{key1:['value1','value2','value3',...etc],key2:'value4',key3:[value5,value6,...etc]}*/
return function (items, keyObj) {
    var filterObj = {
        data:items,
        filteredData:[],
        applyFilter : function(obj,key){
            var fData = [];
            if (this.filteredData.length == 0)
                this.filteredData = this.data;
            if (obj){
                var fObj = {};
                if (!angular.isArray(obj)){
                    fObj[key] = obj;
                    fData = fData.concat($filter('filter')(this.filteredData,fObj));
                } else if (angular.isArray(obj)){
                    if (obj.length > 0){
                        for (var i=0;i<obj.length;i++){
                            if (angular.isDefined(obj[i])){
                                fObj[key] = obj[i];
                                fData = fData.concat($filter('filter')(this.filteredData,fObj));    
                            }
                        }

                    }
                }
                if (fData.length > 0){
                    this.filteredData = fData;
                }
            }
        }
    };
    if (keyObj){
        angular.forEach(keyObj,function(obj,key){
            filterObj.applyFilter(obj,key);
        });
    }
    return filterObj.filteredData;
}
}]);