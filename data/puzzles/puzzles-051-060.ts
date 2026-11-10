import { puzzle, wiki } from "./builders";

export const PUZZLES_051_060 = [
  puzzle(51, {
    scout: {
      clue: "Lamb or chicken slow-cooked with preserved lemon, olives, dried fruit or vegetables in a clay pot whose tall conical lid sends the steam back down. The dish is named for the pot itself.",
      answer: "Tagine",
      wrong: ["Harira", "Pastilla", "Couscous royale"],
      explanation: "Tagine is both the Moroccan stew and the conical clay pot it cooks in. Harira is a tomato-lentil soup, pastilla is a sweet-savory pie, and couscous royale is a French-Maghrebi platter.",
      sources: [wiki("Tajine")],
    },
    teammates: {
      dishes: ["Spanakopita", "Greek salad"],
      answer: "Feta",
      wrong: ["Halloumi", "Ricotta", "Mozzarella"],
      explanation: "Feta is crumbled into spanakopita's spinach filling and laid in a slab on top of a horiatiki, or Greek salad.",
      sources: [wiki("Spanakopita"), wiki("Greek_salad")],
    },
    replay: {
      clue: "Bouchée à la reine",
      answer: "Queen's mouthful",
      wrong: ["Royal pastry", "Crown bite", "Palace puff"],
      explanation: "Bouchée à la reine means 'queen's mouthful': a puff-pastry case filled with creamy chicken and mushrooms, linked to Marie Leszczyńska, queen to Louis XV.",
      sources: [wiki("Vol-au-vent")],
    },
    timeline: {
      events: [
        ["Wonder Bread is first sold, in Indianapolis", 1921],
        ["Margaret Rudkin founds Pepperidge Farm", 1937],
        ["Charles Lubin names his bakery for his daughter, Sara Lee", 1949],
        ["The St. Louis Bread Company, later Panera, opens", 1987],
      ],
      sources: [wiki("Wonder_Bread"), wiki("Pepperidge_Farm"), wiki("Sara_Lee_Corporation"), wiki("Panera_Bread")],
    },
    overtime: {
      prompt: "Which Japanese stock is made by steeping kombu and katsuobushi?",
      answer: "Dashi",
      wrong: ["Mirin", "Ponzu", "Tare"],
      explanation: "Dashi is the foundational stock of Japanese cooking, built on the glutamates in kombu kelp and the inosinates in katsuobushi.",
      sources: [wiki("Dashi")],
    },
  }),

  puzzle(52, {
    scout: {
      clue: "Round cakes of precooked cornmeal, griddled or fried, split open and stuffed with cheese, black beans, shredded beef or avocado chicken salad. The daily bread of Venezuela and Colombia.",
      answer: "Arepas",
      wrong: ["Pupusas", "Gorditas", "Tlacoyos"],
      explanation: "Arepas are griddled corn cakes split and stuffed after cooking. Pupusas are Salvadoran and stuffed before cooking, and gorditas and tlacoyos are Mexican masa cakes.",
      sources: [wiki("Arepa")],
    },
    teammates: {
      dishes: ["Southern fried chicken", "Irish soda bread"],
      answer: "Buttermilk",
      wrong: ["Yogurt", "Heavy cream", "Sour cream"],
      explanation: "Buttermilk does the work in both: fried chicken soaks in it to tenderize, and its acid reacts with baking soda to raise Irish soda bread.",
      sources: [wiki("Buttermilk"), wiki("Soda_bread")],
    },
    replay: {
      clue: "Pain d'épices",
      answer: "Spice bread",
      wrong: ["Honey loaf", "Holiday cake", "Brown bread"],
      explanation: "Pain d'épices means 'spice bread': a honey-sweetened loaf scented with anise, cinnamon and cloves, a specialty of Dijon and Alsace.",
      sources: [wiki("Pain_d'épices")],
    },
    timeline: {
      events: [
        ["Congress passes the Pure Food and Drug Act", 1906],
        ["The Food, Drug, and Insecticide Administration is renamed the FDA", 1930],
        ["The Nutrition Facts label becomes mandatory in the US", 1994],
        ["The Food Safety Modernization Act is signed", 2011],
      ],
      sources: [
        wiki("Pure_Food_and_Drug_Act"),
        wiki("Food_and_Drug_Administration"),
        wiki("Nutrition_facts_label"),
        wiki("FDA_Food_Safety_Modernization_Act"),
      ],
    },
    overtime: {
      prompt: "Tequila must be distilled from which plant?",
      answer: "Blue agave",
      wrong: ["Agave americana", "Yucca", "Sotol"],
      explanation: "Tequila must be made from Weber blue agave (Agave tequilana), grown in Jalisco and a few neighboring regions; mezcal may use many other agaves.",
      sources: [wiki("Tequila"), wiki("Agave_tequilana")],
    },
  }),

  puzzle(53, {
    scout: {
      clue: "A deep red chicken stew spiced with berbere and spiced clarified butter, with whole hard-boiled eggs simmered in the sauce. Torn injera is the only utensil. The centerpiece of an Ethiopian holiday table.",
      answer: "Doro wat",
      wrong: ["Tibs", "Shiro", "Kitfo"],
      explanation: "Doro wat is Ethiopia's celebratory chicken stew. Tibs is sautéed meat, shiro is a chickpea stew, and kitfo is minced raw beef.",
      sources: [wiki("Wat_(food)")],
    },
    teammates: {
      dishes: ["Chicken piccata", "Tartar sauce"],
      answer: "Capers",
      wrong: ["Olives", "Gherkins", "Anchovies"],
      explanation: "Capers, the pickled flower buds of the caper bush, are in both: chicken piccata is finished with lemon, butter and capers, and tartar sauce mixes them into mayonnaise.",
      sources: [wiki("Caper"), wiki("Tartar_sauce")],
    },
    replay: {
      clue: "Cervelle de canut",
      answer: "Silk weaver's brains",
      wrong: ["Lyon cheese", "Herb curd", "Farmer's spread"],
      explanation: "Cervelle de canut means 'silk weaver's brains': a Lyonnais spread of fromage blanc beaten with herbs, shallots, oil and vinegar, named for the city's canuts, or silk workers.",
      sources: [wiki("Cervelle_de_canut")],
    },
    timeline: {
      events: [
        ["Josef Groll brews the first pilsner in Plzeň", 1842],
        ["Miller Lite goes on sale nationwide", 1975],
        ["Jim Koch launches Samuel Adams Boston Lager", 1984],
        ["Blue Moon Belgian White debuts at Coors Field", 1995],
      ],
      sources: [wiki("Pilsner_Urquell"), wiki("Miller_Lite"), wiki("Boston_Beer_Company"), wiki("Blue_Moon_(beer)")],
    },
    overtime: {
      prompt: "Hops, which flavor and preserve beer, belong to the same plant family as which?",
      answer: "Cannabis",
      wrong: ["Nettles", "Grapevines", "Mint"],
      explanation: "Hops (Humulus lupulus) and cannabis are both in the family Cannabaceae, and the two plants share some aromatic terpenes.",
      sources: [wiki("Hops"), wiki("Cannabaceae")],
    },
  }),

  puzzle(54, {
    scout: {
      clue: "Rice stir-fried with shallots, garlic and shrimp paste, darkened and sweetened with kecap manis, and usually crowned with a fried egg and prawn crackers. Indonesia's everyday national dish.",
      answer: "Nasi goreng",
      wrong: ["Nasi lemak", "Khao pad", "Yangzhou fried rice"],
      explanation: "Nasi goreng is Indonesian fried rice with sweet soy sauce. Nasi lemak is Malaysian coconut rice, khao pad is Thai fried rice, and Yangzhou fried rice is the Chinese classic with egg and char siu.",
      sources: [wiki("Nasi_goreng")],
    },
    teammates: {
      dishes: ["Mortadella", "Spumoni"],
      answer: "Pistachios",
      wrong: ["Almonds", "Hazelnuts", "Pine nuts"],
      explanation: "Pistachios turn up in both: mortadella from Bologna is often studded with them, and spumoni layers pistachio ice cream with cherry and chocolate.",
      sources: [wiki("Mortadella"), wiki("Spumoni")],
    },
    replay: {
      clue: "Galette des rois",
      answer: "Kings' cake",
      wrong: ["Twelfth night pie", "Crown tart", "Royal biscuit"],
      explanation: "Galette des rois means 'kings' cake', for the Three Kings of Epiphany. The puff-pastry and frangipane cake hides a fève, and whoever finds it is crowned.",
      sources: [wiki("King_cake")],
    },
    timeline: {
      events: [
        ["The Galloping Gourmet with Graham Kerr premieres", 1968],
        ["MasterChef premieres on the BBC", 1990],
        ["Iron Chef premieres on Fuji TV", 1993],
        ["Top Chef premieres on Bravo", 2006],
      ],
      sources: [wiki("Graham_Kerr"), wiki("MasterChef"), wiki("Iron_Chef"), wiki("Top_Chef")],
    },
    overtime: {
      prompt: "Which country drinks the most coffee per person?",
      answer: "Finland",
      wrong: ["Italy", "Brazil", "United States"],
      explanation: "Finland tops most per-capita rankings at roughly 12 kg of coffee per person a year, and many Finnish workers are entitled to coffee breaks by collective agreement.",
      sources: [wiki("List_of_countries_by_coffee_consumption_per_capita")],
    },
  }),

  puzzle(55, {
    scout: {
      clue: "Curry-spiced minced meat baked with dried fruit and topped with an egg-and-milk custard, served with yellow rice and chutney. A Cape Malay dish often called South Africa's national dish.",
      answer: "Bobotie",
      wrong: ["Cottage pie", "Moussaka", "Bredie"],
      explanation: "Bobotie is the Cape Malay bake with a custard top. Cottage pie is topped with mashed potato, moussaka with béchamel, and bredie is a South African stew.",
      sources: [wiki("Bobotie")],
    },
    teammates: {
      dishes: ["Fesenjan", "Grenadine"],
      answer: "Pomegranate",
      wrong: ["Cherries", "Cranberries", "Tamarind"],
      explanation: "Pomegranate links them: Persian fesenjan stews chicken or duck in pomegranate molasses and walnuts, and true grenadine is a pomegranate syrup (grenade is French for pomegranate).",
      sources: [wiki("Fesenjan"), wiki("Grenadine")],
    },
    replay: {
      clue: "Profiterole",
      answer: "Little profit",
      wrong: ["Cream puff", "Small roll", "Choux ball"],
      explanation: "Profiterole likely comes from profit, so it means a little profit, or small reward. Today it names a choux puff filled with cream or ice cream and drizzled with chocolate.",
      sources: [wiki("Profiterole")],
    },
    timeline: {
      events: [
        ["Chick-fil-A opens its first restaurant, in an Atlanta mall", 1967],
        ["Al Copeland opens the first Popeyes in New Orleans", 1972],
        ["Nando's opens in Johannesburg", 1987],
        ["Raising Cane's opens in Baton Rouge", 1996],
      ],
      sources: [wiki("Chick-fil-A"), wiki("Popeyes"), wiki("Nando's"), wiki("Raising_Cane's_Chicken_Fingers")],
    },
    overtime: {
      prompt: "American barbecue pulled pork is traditionally smoked from which part of the pig?",
      answer: "Shoulder",
      wrong: ["Loin", "Belly", "Leg"],
      explanation: "Pulled pork comes from the shoulder, usually the upper part called the Boston butt; its fat and connective tissue melt during long smoking.",
      sources: [wiki("Pulled_pork"), wiki("Boston_butt")],
    },
  }),

  puzzle(56, {
    scout: {
      clue: "White beans slow-baked with duck confit, pork and Toulouse sausage, the crust broken and stirred back in several times. Castelnaudary, Carcassonne and Toulouse each claim the true version.",
      answer: "Cassoulet",
      wrong: ["Garbure", "Choucroute garnie", "Fabada"],
      explanation: "Cassoulet is the bean casserole of Languedoc, named for its earthenware cassole. Garbure is a Gascon cabbage soup, choucroute garnie is Alsatian sauerkraut with pork, and fabada is from Asturias.",
      sources: [wiki("Cassoulet")],
    },
    teammates: {
      dishes: ["Nutella", "Frangelico"],
      answer: "Hazelnuts",
      wrong: ["Almonds", "Macadamias", "Walnuts"],
      explanation: "Hazelnuts are the base of both: Nutella is a sweetened hazelnut-cocoa spread from Piedmont, and Frangelico is an Italian hazelnut liqueur.",
      sources: [wiki("Nutella"), wiki("Frangelico")],
    },
    replay: {
      clue: "Cuisses de grenouille",
      answer: "Frog legs",
      wrong: ["Duck thighs", "Snail feet", "Quail legs"],
      explanation: "Cuisses de grenouille means 'frog legs', usually sautéed with garlic, parsley and butter.",
      sources: [wiki("Frog_legs")],
    },
    timeline: {
      events: [
        ["James Dole founds the Hawaiian Pineapple Company", 1901],
        ["Miss Chiquita Banana sings her first jingle", 1944],
        ["The University of Minnesota releases the Honeycrisp apple", 1991],
        ["Cosmic Crisp apples reach stores", 2019],
      ],
      sources: [wiki("James_Dole"), wiki("Chiquita"), wiki("Honeycrisp"), wiki("Cosmic_Crisp")],
    },
    overtime: {
      prompt: "Which US state grows the most cranberries?",
      answer: "Wisconsin",
      wrong: ["Massachusetts", "New Jersey", "Oregon"],
      explanation: "Wisconsin grows more than half of the US cranberry crop, well ahead of Massachusetts, where commercial cultivation began.",
      sources: [wiki("Cranberry")],
    },
  }),

  puzzle(57, {
    scout: {
      clue: "A deboned chicken stuffed inside a deboned duck, stuffed inside a deboned turkey, then roasted as one. Louisiana chef Paul Prudhomme helped make it a Thanksgiving showpiece.",
      answer: "Turducken",
      wrong: ["Galantine", "Ballotine", "Porchetta"],
      explanation: "A turducken nests chicken, duck and turkey. A galantine and a ballotine are single deboned, stuffed birds or cuts, and porchetta is Italian rolled pork.",
      sources: [wiki("Turducken")],
    },
    teammates: {
      dishes: ["Thanksgiving stuffing", "Saltimbocca"],
      answer: "Sage",
      wrong: ["Thyme", "Rosemary", "Oregano"],
      explanation: "Sage is the herb in both: it is the classic seasoning of bread stuffing, and saltimbocca lays a sage leaf and prosciutto on each veal cutlet.",
      sources: [wiki("Stuffing"), wiki("Saltimbocca")],
    },
    replay: {
      clue: "Dinde",
      answer: "Hen of India",
      wrong: ["Feast bird", "Wild hen", "Big fowl"],
      explanation: "Dinde, French for turkey, is short for poule d'Inde, 'hen of India', because the Americas the bird came from were then called the West Indies.",
      sources: [wiki("Turkey_(bird)")],
    },
    timeline: {
      events: [
        ["Macy's holds its first Thanksgiving Day Parade", 1924],
        ["Franklin Roosevelt moves Thanksgiving a week earlier", 1939],
        ["Dorcas Reilly creates green bean casserole at Campbell's", 1955],
        ["Butterball opens its Turkey Talk-Line", 1981],
      ],
      sources: [wiki("Macy's_Thanksgiving_Day_Parade"), wiki("Franksgiving"), wiki("Green_bean_casserole"), wiki("Butterball")],
    },
    overtime: {
      prompt: "The turkeys Europeans first brought home in the 1500s had been domesticated in which present-day country?",
      answer: "Mexico",
      wrong: ["United States", "Peru", "Turkey"],
      explanation: "Turkeys were domesticated in Mesoamerica, in what is now Mexico, and Spanish ships carried them to Europe in the early 1500s. The English name came from confusion with guineafowl imported through Turkey.",
      sources: [wiki("Domesticated_turkey")],
    },
  }),

  puzzle(58, {
    scout: {
      clue: "Half-moon pastries filled with seasoned beef, onion, olives and hard-boiled egg, baked or fried and sealed with a braided edge called a repulgue. Argentina has a regional style for nearly every province.",
      answer: "Empanadas",
      wrong: ["Pastelitos", "Samosas", "Calzones"],
      explanation: "Empanadas are Argentina's crimped turnovers, with styles from Tucumán to Salta. Pastelitos are sweet fried pastries, samosas are South Asian, and calzones are folded pizzas.",
      sources: [wiki("Empanada")],
    },
    teammates: {
      dishes: ["Gravlax", "Borscht"],
      answer: "Dill",
      wrong: ["Parsley", "Fennel", "Chives"],
      explanation: "Dill is the herb in both: gravlax is salmon cured under a blanket of dill, salt and sugar, and borscht is finished with a scattering of it.",
      sources: [wiki("Gravlax"), wiki("Borscht")],
    },
    replay: {
      clue: "Pied de cochon",
      answer: "Pig's foot",
      wrong: ["Pig's ear", "Hog jowl", "Pork chop"],
      explanation: "Pied de cochon means 'pig's foot': trotters braised until tender, then often breaded and grilled.",
      sources: [wiki("Pig's_trotters")],
    },
    timeline: {
      events: [
        ["William Entenmann opens a bakery in Brooklyn", 1898],
        ["Tastykake is founded in Philadelphia", 1914],
        ["Little Debbie snack cakes are introduced", 1960],
        ["Debbi Fields opens her first cookie store", 1977],
      ],
      sources: [wiki("Entenmann's"), wiki("Tastykake"), wiki("Little_Debbie"), wiki("Mrs._Fields")],
    },
    overtime: {
      prompt: "Boston baked beans are traditionally made with which bean?",
      answer: "Navy beans",
      wrong: ["Pinto beans", "Kidney beans", "Cannellini"],
      explanation: "Navy beans, small white haricots named for their place in US Navy rations, are slow-baked with molasses and salt pork for Boston baked beans.",
      sources: [wiki("Navy_bean"), wiki("Baked_beans")],
    },
  }),

  puzzle(59, {
    scout: {
      clue: "Chicken rubbed with a fiery paste of Scotch bonnet chilies, allspice, thyme and scallions, then smoked slowly over pimento wood. Jamaica's signature street-side grill.",
      answer: "Jerk chicken",
      wrong: ["Pollo a la brasa", "Peri-peri chicken", "Chicken inasal"],
      explanation: "Jerk chicken is Jamaica's smoky, fiery chicken. Pollo a la brasa is Peruvian rotisserie chicken, peri-peri chicken is Portuguese-Mozambican, and inasal is Filipino.",
      sources: [wiki("Jerk_(cooking)")],
    },
    teammates: {
      dishes: ["Shoofly pie", "Gingersnaps"],
      answer: "Molasses",
      wrong: ["Maple syrup", "Honey", "Sorghum syrup"],
      explanation: "Molasses gives both their dark, bittersweet flavor: shoofly pie is a Pennsylvania Dutch molasses pie, and gingersnaps get their color and chew from it.",
      sources: [wiki("Shoofly_pie"), wiki("Gingersnap")],
    },
    replay: {
      clue: "Pièce montée",
      answer: "Mounted piece",
      wrong: ["Tall cake", "Sugar tower", "Wedding stack"],
      explanation: "Pièce montée means 'mounted piece': a towering showpiece of pastry or sugar, like the croquembouche at French weddings.",
      sources: [wiki("Pièce_montée")],
    },
    timeline: {
      events: [
        ["Facundo Bacardí founds his rum distillery in Santiago de Cuba", 1862],
        ["The Arechabala family launches Havana Club", 1934],
        ["Seagram launches Captain Morgan rum", 1944],
        ["Malibu coconut rum is introduced", 1978],
      ],
      sources: [wiki("Bacardi"), wiki("Havana_Club"), wiki("Captain_Morgan"), wiki("Malibu_(rum)")],
    },
    overtime: {
      prompt: "Which country produces the most tea?",
      answer: "China",
      wrong: ["India", "Kenya", "Sri Lanka"],
      explanation: "China grows more tea than any other country, roughly 40% or more of the world's crop, followed by India.",
      sources: [wiki("Tea")],
    },
  }),

  puzzle(60, {
    scout: {
      clue: "Egg-custard tarts in crisp, flaky pastry, baked so hot the tops blister and scorch, then dusted with cinnamon. First made by the monks of the Jerónimos Monastery in Belém, Lisbon.",
      answer: "Pastel de nata",
      wrong: ["Dan tat", "Flan", "Crema catalana"],
      explanation: "The pastel de nata was created by monks in Belém, and Lisbon's Pastéis de Belém bakery has sold them since 1837. Hong Kong's dan tat has a smooth, unblistered top, and flan and crema catalana are custards without pastry.",
      sources: [wiki("Pastel_de_nata")],
    },
    teammates: {
      dishes: ["Pavlova", "Macarons"],
      answer: "Egg whites",
      wrong: ["Egg yolks", "Gelatin", "Baking powder"],
      explanation: "Egg whites are whipped into both: pavlova is a meringue base, and macarons are almond flour folded into meringue.",
      sources: [wiki("Pavlova_(cake)"), wiki("Macaron")],
    },
    replay: {
      clue: "Ris de veau",
      answer: "Veal sweetbreads",
      wrong: ["Veal and rice", "Calf's laughter", "Veal kidneys"],
      explanation: "Ris de veau means 'veal sweetbreads', the thymus glands of a calf, usually blanched, pressed and pan-fried. Ris has nothing to do with riz, rice.",
      sources: [wiki("Sweetbread")],
    },
    timeline: {
      events: [
        ["Alfred Bird formulates baking powder", 1843],
        ["Church & Co. begins selling baking soda, later as Arm & Hammer", 1846],
        ["Charles Fleischmann begins selling compressed yeast", 1868],
        ["The first Pillsbury Bake-Off is held", 1949],
      ],
      sources: [wiki("Baking_powder"), wiki("Arm_&_Hammer"), wiki("Fleischmann's_Yeast"), wiki("Pillsbury_Bake-Off")],
    },
    overtime: {
      prompt: "Tahini is a paste ground from which seed?",
      answer: "Sesame",
      wrong: ["Sunflower", "Pumpkin", "Flax"],
      explanation: "Tahini is ground sesame seeds, usually hulled and toasted, the base of hummus and of many kinds of halva.",
      sources: [wiki("Tahini")],
    },
  }),
];
