import { puzzle, wiki } from "./builders";

export const PUZZLES_011_020 = [
  puzzle(11, {
    scout: {
      clue: "A whole beef tenderloin, seared, spread with mushroom duxelles, wrapped in prosciutto or crêpes and then in puff pastry, and baked until golden.",
      answer: "Beef Wellington",
      wrong: ["Beef Stroganoff", "Coulibiac", "Steak Diane"],
      explanation: "Beef Wellington is often linked to the Duke of Wellington, though the dish's real origin is unclear. Coulibiac is a Russian pie of salmon in pastry.",
      sources: [wiki("Beef_Wellington")],
    },
    teammates: {
      dishes: ["Kimchi", "Sauerkraut"],
      answer: "Cabbage",
      wrong: ["Beets", "Cucumber", "Kale"],
      explanation: "Both are lacto-fermented cabbage. Korean kimchi usually uses napa cabbage with chili, garlic and ginger, while German sauerkraut is finely shredded white cabbage and salt.",
      sources: [wiki("Kimchi"), wiki("Sauerkraut")],
    },
    replay: {
      clue: "Fruits de mer",
      answer: "Fruits of the sea",
      wrong: ["Harvest of the bay", "Mermaid's catch", "Fruit of the mother"],
      explanation: "Fruits de mer means 'fruits of the sea': shellfish and crustaceans, often piled onto a tiered platter over ice.",
      sources: [wiki("Seafood")],
    },
    timeline: {
      events: [
        ["The first lab-grown burger is tasted in London", 2013],
        ["Cup Noodles go on sale", 1971],
        ["Flavr Savr becomes the first genetically engineered food sold", 1994],
        ["Momofuku Ando invents instant ramen", 1958],
      ],
      sources: [wiki("Momofuku_Ando"), wiki("Cup_Noodles"), wiki("Flavr_Savr"), wiki("Cultured_meat")],
    },
    overtime: {
      prompt: "The croissant is descended from the kipferl, a crescent-shaped roll from which country?",
      answer: "Austria",
      wrong: ["Hungary", "Germany", "Switzerland"],
      explanation: "The croissant grew out of the Austrian kipferl, which Viennese bakers brought to Paris in the 19th century. That's why French bakeries call croissants and other enriched pastries viennoiseries.",
      sources: [wiki("Croissant"), wiki("Kipferl")],
    },
  }),

  puzzle(12, {
    scout: {
      clue: "Strips of beef quickly sautéed with onions and mushrooms, then bound in a sour cream sauce. Usually served over egg noodles or rice, and named for a Russian noble family.",
      answer: "Beef Stroganoff",
      wrong: ["Goulash", "Beef bourguignon", "Swedish meatballs"],
      explanation: "Beef Stroganoff is named for the Stroganov family, and its earliest known recipe appears in Elena Molokhovets's 1871 Russian cookbook.",
      sources: [wiki("Beef_Stroganoff")],
    },
    teammates: {
      dishes: ["Mole poblano", "Sachertorte"],
      answer: "Chocolate",
      wrong: ["Coffee", "Apricot jam", "Hazelnuts"],
      explanation: "Chocolate links them: mole poblano blends chilies, spices and nuts with a little chocolate, and Vienna's Sachertorte is a chocolate cake under chocolate glaze. Only the torte has apricot jam.",
      sources: [wiki("Mole_poblano"), wiki("Sachertorte")],
    },
    replay: {
      clue: "Hors d'oeuvre",
      answer: "Outside the work",
      wrong: ["Outside the egg", "Before the main", "Small works of art"],
      explanation: "Hors d'oeuvre means 'outside the work', meaning apart from the main courses of the meal. The trap answer comes from oeuf, the French word for egg.",
      sources: [wiki("Hors_d'oeuvre")],
    },
    timeline: {
      events: [
        ["Michelin awards its first stars", 1926],
        ["Chez Panisse opens in Berkeley", 1971],
        ["Le Cordon Bleu cooking school is founded in Paris", 1895],
        ["Auguste Escoffier publishes Le Guide culinaire", 1903],
      ],
      sources: [wiki("Le_Cordon_Bleu"), wiki("Le_guide_culinaire"), wiki("Michelin_Guide"), wiki("Chez_Panisse")],
    },
    overtime: {
      prompt: "Roughly how many liters of maple sap does it take to make one liter of maple syrup?",
      answer: "About 40",
      wrong: ["About 5", "About 10", "About 100"],
      explanation: "Sap is only about 2% sugar, so it takes about 40 liters, boiled down for hours, to make one liter of syrup. Quebec produces most of the world's supply.",
      sources: [wiki("Maple_syrup")],
    },
  }),

  puzzle(13, {
    scout: {
      clue: "Ladyfingers dipped in espresso, layered with a cream of mascarpone, egg yolks and sugar, chilled, and dusted with cocoa. Its name means 'pick me up'.",
      answer: "Tiramisu",
      wrong: ["Zuppa inglese", "Panna cotta", "Cassata"],
      explanation: "Tiramisu (tira mi sù, 'pick me up') comes from the Veneto region and became popular in the 1970s. Zuppa inglese is a trifle-like dessert, and cassata is a Sicilian ricotta cake.",
      sources: [wiki("Tiramisu")],
    },
    teammates: {
      dishes: ["Ceviche", "Key lime pie"],
      answer: "Lime",
      wrong: ["Lemon", "Coconut", "Grapefruit"],
      explanation: "Lime juice is essential to both. In Peruvian ceviche its acid 'cooks' the raw fish, and Key lime pie is a Florida custard of lime juice and condensed milk.",
      sources: [wiki("Ceviche"), wiki("Key_lime_pie")],
    },
    replay: {
      clue: "Petit four",
      answer: "Small oven",
      wrong: ["Four little cakes", "Tea for four", "Small fork"],
      explanation: "Petit four means 'small oven'. The bite-sized cakes were baked in the cooling brick ovens after the main baking was done. The four is the French word for oven, not the number.",
      sources: [wiki("Petit_four")],
    },
    timeline: {
      events: [
        ["Pop-Tarts hit the shelves", 1964],
        ["Ruth Wakefield creates the chocolate chip cookie", 1938],
        ["Twinkies are invented", 1930],
        ["Oreo cookies are introduced", 1912],
      ],
      sources: [wiki("Oreo"), wiki("Twinkie"), wiki("Chocolate_chip_cookie"), wiki("Pop-Tarts")],
    },
    overtime: {
      prompt: "True caviar is the salt-cured roe of which family of fish?",
      answer: "Sturgeon",
      wrong: ["Salmon", "Lumpfish", "Cod"],
      explanation: "Strictly speaking, caviar comes only from sturgeon, including the beluga, osetra and sevruga species. Salmon and lumpfish roe are sold as cheaper substitutes.",
      sources: [wiki("Caviar")],
    },
  }),

  puzzle(14, {
    scout: {
      clue: "A meringue base, crisp outside and marshmallowy inside, piled with whipped cream and fresh fruit such as kiwi, strawberries and passion fruit. Named after a Russian ballerina.",
      answer: "Pavlova",
      wrong: ["Eton mess", "Île flottante", "Baked Alaska"],
      explanation: "Pavlova honors the ballerina Anna Pavlova, who toured Australia and New Zealand in the 1920s. Both countries still claim to have invented it.",
      sources: [wiki("Pavlova_(cake)")],
    },
    teammates: {
      dishes: ["Vichyssoise", "Cock-a-leekie"],
      answer: "Leeks",
      wrong: ["Celery", "Fennel", "Shallots"],
      explanation: "Leeks are central to both: vichyssoise is a chilled purée of leeks, potatoes and cream, and Scotland's cock-a-leekie is a chicken and leek soup, often with prunes.",
      sources: [wiki("Vichyssoise"), wiki("Cock-a-leekie_soup")],
    },
    replay: {
      clue: "Croquembouche",
      answer: "Crunch in the mouth",
      wrong: ["Crown of cream", "Tower of puffs", "Crisp sugar bell"],
      explanation: "Croquembouche comes from croque en bouche, 'crunch in the mouth', for its caramel coating. The cone of cream-filled choux puffs is a classic French wedding cake.",
      sources: [wiki("Croquembouche")],
    },
    timeline: {
      events: [
        ["Cheerios go on sale as 'CheeriOats'", 1941],
        ["Marmite is first made in Burton upon Trent", 1902],
        ["Spam is introduced by Hormel", 1937],
        ["Vegemite is developed in Melbourne", 1922],
      ],
      sources: [wiki("Marmite"), wiki("Vegemite"), wiki("Spam_(food)"), wiki("Cheerios")],
    },
    overtime: {
      prompt: "In Bologna, the meat sauce the rest of the world calls 'Bolognese' is traditionally known as a what?",
      answer: "Ragù",
      wrong: ["Soffritto", "Battuto", "Brodo"],
      explanation: "In Italy it's ragù alla bolognese, a slow-cooked meat sauce served with tagliatelle rather than spaghetti. Soffritto and battuto are the chopped vegetable base it starts from.",
      sources: [wiki("Bolognese_sauce")],
    },
  }),

  puzzle(15, {
    scout: {
      clue: "A layer of sponge cake topped with a dome of ice cream, covered completely in meringue, and put in a very hot oven just long enough to brown the outside.",
      answer: "Baked Alaska",
      wrong: ["Bombe glacée", "Semifreddo", "Pavlova"],
      explanation: "Baked Alaska works because the meringue insulates the ice cream from the heat. Its name is often linked to the United States' purchase of Alaska in 1867.",
      sources: [wiki("Baked_Alaska")],
    },
    teammates: {
      dishes: ["Pad thai", "Satay sauce"],
      answer: "Peanuts",
      wrong: ["Cashews", "Coconut milk", "Sesame seeds"],
      explanation: "Peanuts tie them together: pad thai is topped with crushed peanuts, and satay sauce is built on ground roasted peanuts. Only the satay sauce usually includes coconut milk.",
      sources: [wiki("Pad_thai"), wiki("Peanut_sauce")],
    },
    replay: {
      clue: "Moules marinière",
      answer: "Sailor-style mussels",
      wrong: ["Marinated mussels", "Mussels from the marsh", "Harbor mussels"],
      explanation: "Marinière means 'in the mariner's style', so moules marinière are sailor-style mussels, steamed with white wine, shallots and parsley. They aren't marinated.",
      sources: [wiki("Moules-frites")],
    },
    timeline: {
      events: [
        ["Chipotle opens in Denver", 1993],
        ["Pizza Hut opens in Wichita, Kansas", 1958],
        ["Krispy Kreme is founded", 1937],
        ["Dunkin' Donuts takes its name in Massachusetts", 1950],
      ],
      sources: [wiki("Krispy_Kreme"), wiki("Dunkin'"), wiki("Pizza_Hut"), wiki("Chipotle_Mexican_Grill")],
    },
    overtime: {
      prompt: "Which French kitchen term means having every ingredient measured, chopped and ready before cooking starts?",
      answer: "Mise en place",
      wrong: ["Sous vide", "En papillote", "Amuse-bouche"],
      explanation: "Mise en place means 'putting in place'. It's the first habit drilled into every cook in a professional kitchen.",
      sources: [wiki("Mise_en_place")],
    },
  }),

  puzzle(16, {
    scout: {
      clue: "Soaked, uncooked chickpeas or fava beans ground with herbs, onion and spices, shaped into balls or patties, and deep-fried. Often tucked into pita with tahini sauce.",
      answer: "Falafel",
      wrong: ["Kibbeh", "Kofta", "Arancini"],
      explanation: "Falafel is believed to have started in Egypt, where it's called ta'ameya and is made with fava beans. Kibbeh is bulgur and meat, and kofta are meatballs.",
      sources: [wiki("Falafel")],
    },
    teammates: {
      dishes: ["Mojito", "Tabbouleh"],
      answer: "Mint",
      wrong: ["Basil", "Lime", "Parsley"],
      explanation: "Mint is in both. It's muddled with lime and sugar in a mojito, and chopped with lots of parsley in tabbouleh. Only the mojito has lime; only the tabbouleh has parsley.",
      sources: [wiki("Mojito"), wiki("Tabbouleh")],
    },
    replay: {
      clue: "Crème anglaise",
      answer: "English cream",
      wrong: ["Angel cream", "Cream of the angle", "Cream of the eel"],
      explanation: "Crème anglaise means 'English cream'. The French named the pourable vanilla custard after the English, who loved custard.",
      sources: [wiki("Crème_anglaise")],
    },
    timeline: {
      events: [
        ["James Schlatter discovers aspartame", 1965],
        ["Casimir Funk coins the word 'vitamine'", 1912],
        ["Saccharin is discovered at Johns Hopkins", 1879],
        ["Kikunae Ikeda identifies the umami taste", 1908],
      ],
      sources: [wiki("Saccharin"), wiki("Kikunae_Ikeda"), wiki("Casimir_Funk"), wiki("Aspartame")],
    },
    overtime: {
      prompt: "Which cooking technique involves vacuum-sealing food in a bag and cooking it in a precisely controlled water bath?",
      answer: "Sous vide",
      wrong: ["Confit", "En papillote", "Bain-marie"],
      explanation: "Sous vide means 'under vacuum'. Holding food at an exact temperature lets a steak cook edge to edge without overcooking.",
      sources: [wiki("Sous_vide")],
    },
  }),

  puzzle(17, {
    scout: {
      clue: "Thin slices of pork marinated in chilies and achiote, stacked on a vertical spit called a trompo, shaved onto small corn tortillas, and topped with pineapple.",
      answer: "Tacos al pastor",
      wrong: ["Carnitas", "Birria", "Suadero"],
      explanation: "Tacos al pastor grew out of the shawarma that Lebanese immigrants brought to Mexico. Pork replaced lamb, and the spit-roasting technique stayed.",
      sources: [wiki("Al_pastor")],
    },
    teammates: {
      dishes: ["Tarte Tatin", "Waldorf salad"],
      answer: "Apples",
      wrong: ["Pears", "Walnuts", "Celery"],
      explanation: "Apples are central to both: tarte Tatin is an upside-down tart of caramelized apples, and Waldorf salad mixes apples with celery and walnuts in mayonnaise.",
      sources: [wiki("Tarte_Tatin"), wiki("Waldorf_salad")],
    },
    replay: {
      clue: "Choux à la crème",
      answer: "Cabbages with cream",
      wrong: ["Shoes of cream", "Chosen cream", "Kisses of cream"],
      explanation: "Choux à la crème means 'cabbages with cream'. Choux are cabbages, and the puffed, lumpy pastry balls look like little heads of them. In English they're cream puffs.",
      sources: [wiki("Choux_pastry")],
    },
    timeline: {
      events: [
        ["Diet Coke is launched", 1982],
        ["7 Up is launched as 'Bib-Label Lithiated Lemon-Lime Soda'", 1929],
        ["Brad's Drink is renamed Pepsi-Cola", 1898],
        ["Dr Pepper is first served in Waco, Texas", 1885],
      ],
      sources: [wiki("Dr_Pepper"), wiki("Pepsi"), wiki("7_Up"), wiki("Diet_Coke")],
    },
    overtime: {
      prompt: "Which of these is NOT one of the five French mother sauces?",
      answer: "Béarnaise",
      wrong: ["Béchamel", "Velouté", "Espagnole"],
      explanation: "Béarnaise is a 'daughter' sauce of hollandaise, flavored with tarragon and shallot. The five mother sauces are béchamel, velouté, espagnole, hollandaise and tomato.",
      sources: [wiki("Mother_sauce"), wiki("Béarnaise_sauce")],
    },
  }),

  puzzle(18, {
    scout: {
      clue: "Flat rice noodles stir-fried with tamarind, fish sauce and palm sugar, plus egg, tofu or shrimp and bean sprouts, then topped with crushed peanuts and a lime wedge.",
      answer: "Pad thai",
      wrong: ["Pad see ew", "Pad kee mao", "Mee goreng"],
      explanation: "Pad thai was promoted as a national dish by Thailand's government in the 1930s and '40s. Pad see ew uses wide noodles and dark soy sauce, and pad kee mao ('drunken noodles') is spicy with holy basil.",
      sources: [wiki("Pad_thai")],
    },
    teammates: {
      dishes: ["Shepherd's pie", "Rogan josh"],
      answer: "Lamb",
      wrong: ["Beef", "Pork", "Venison"],
      explanation: "Both are traditionally made with lamb. Shepherd's pie tops minced lamb with mashed potato (made with beef, it's cottage pie), and rogan josh is a Kashmiri lamb curry.",
      sources: [wiki("Shepherd's_pie"), wiki("Rogan_josh")],
    },
    replay: {
      clue: "Bœuf bourguignon",
      answer: "Beef, Burgundy style",
      wrong: ["Bourgeois beef", "Boiled beef", "Beef in bourbon"],
      explanation: "Bœuf bourguignon means 'beef, Burgundy style': beef braised in Burgundy red wine with lardons, mushrooms and pearl onions. Julia Child made it famous in America.",
      sources: [wiki("Beef_bourguignon")],
    },
    timeline: {
      events: [
        ["The 'Judgment of Paris' wine tasting", 1976],
        ["The Great Irish Famine begins", 1845],
        ["The first Oktoberfest is held in Munich", 1810],
        ["The Great Molasses Flood hits Boston", 1919],
      ],
      sources: [wiki("Oktoberfest"), wiki("Great_Famine_(Ireland)"), wiki("Great_Molasses_Flood"), wiki("Judgment_of_Paris_(wine)")],
    },
    overtime: {
      prompt: "Hass and Fuerte are popular varieties of which fruit?",
      answer: "Avocado",
      wrong: ["Mango", "Papaya", "Fig"],
      explanation: "Nearly all commercially grown avocados are Hass, descended from a single tree that postman Rudolph Hass patented in California in 1935.",
      sources: [wiki("Hass_avocado")],
    },
  }),

  puzzle(19, {
    scout: {
      clue: "Rice in a sizzling stone bowl, topped with seasoned vegetables, beef and a fried egg, then mixed together at the table with spicy gochujang.",
      answer: "Bibimbap",
      wrong: ["Japchae", "Bulgogi", "Kimbap"],
      explanation: "Bibimbap means 'mixed rice', and the dolsot version is served in a hot stone bowl that crisps the rice at the bottom. Japchae is a glass-noodle stir-fry, and kimbap is a seaweed rice roll.",
      sources: [wiki("Bibimbap")],
    },
    teammates: {
      dishes: ["Saag paneer", "Spanakopita"],
      answer: "Spinach",
      wrong: ["Kale", "Watercress", "Feta"],
      explanation: "Spinach is the green in both: saag paneer simmers cubes of fresh cheese in spiced puréed spinach, and Greek spanakopita wraps spinach and feta in phyllo.",
      sources: [wiki("Saag"), wiki("Spanakopita")],
    },
    replay: {
      clue: "Mousse",
      answer: "Foam",
      wrong: ["Cloud", "Velvet", "Whip"],
      explanation: "Mousse is the French word for foam. Whipped cream or beaten egg whites trap the air that gives the dessert its light texture.",
      sources: [wiki("Mousse")],
    },
    timeline: {
      events: [
        ["El Bulli earns its third Michelin star", 1997],
        ["The Ritz Paris opens with Escoffier running the kitchen", 1898],
        ["Noma is first named the world's best restaurant", 2010],
        ["The first James Beard Awards are presented", 1991],
      ],
      sources: [wiki("Hôtel_Ritz_Paris"), wiki("James_Beard_Foundation_Award"), wiki("El_Bulli"), wiki("Noma_(restaurant)")],
    },
    overtime: {
      prompt: "Which grape is NOT one of the three main varieties used to make Champagne?",
      answer: "Sauvignon Blanc",
      wrong: ["Chardonnay", "Pinot Noir", "Pinot Meunier"],
      explanation: "Champagne is made mostly from Chardonnay, Pinot Noir and Pinot Meunier. Sauvignon Blanc is the grape of Sancerre and New Zealand's Marlborough.",
      sources: [wiki("Champagne")],
    },
  }),

  puzzle(20, {
    scout: {
      clue: "A batter of flour and egg loaded with shredded cabbage and pork belly, cooked on a griddle, then brushed with a sweet-savory sauce and mayonnaise and topped with bonito flakes.",
      answer: "Okonomiyaki",
      wrong: ["Takoyaki", "Yakisoba", "Monjayaki"],
      explanation: "Okonomiyaki means 'grilled as you like it', and Osaka and Hiroshima both claim their own style. Takoyaki are octopus-filled batter balls, and monjayaki is Tokyo's runnier cousin.",
      sources: [wiki("Okonomiyaki")],
    },
    teammates: {
      dishes: ["Bananas Foster", "Mai tai"],
      answer: "Rum",
      wrong: ["Brandy", "Bourbon", "Tequila"],
      explanation: "Rum links them: Bananas Foster is flambéed with rum and banana liqueur at the table, and the mai tai is a tiki cocktail of rum, lime, curaçao and orgeat.",
      sources: [wiki("Bananas_Foster"), wiki("Mai_tai")],
    },
    replay: {
      clue: "Sole meunière",
      answer: "Miller's wife style",
      wrong: ["Lemon-butter style", "Morning sole", "Fisherman's style"],
      explanation: "Sole meunière is sole cooked in the miller's wife style: the fish is dredged in flour before being pan-fried in butter. Sole meunière was Julia Child's first meal in France, in 1948.",
      sources: [wiki("Meunière_sauce")],
    },
    timeline: {
      events: [
        ["M&M's are introduced", 1941],
        ["Toblerone is created in Bern", 1908],
        ["Cadbury Dairy Milk is launched", 1905],
        ["Kit Kat debuts as Rowntree's Chocolate Crisp", 1935],
      ],
      sources: [wiki("Cadbury_Dairy_Milk"), wiki("Toblerone"), wiki("Kit_Kat"), wiki("M%26M's")],
    },
    overtime: {
      prompt: "Which country produces the most vanilla?",
      answer: "Madagascar",
      wrong: ["Mexico", "Indonesia", "Tahiti"],
      explanation: "Madagascar grows roughly 80% of the world's natural vanilla. The vanilla orchid is native to Mexico, but outside its homeland it has to be pollinated by hand.",
      sources: [wiki("Vanilla")],
    },
  }),
];
