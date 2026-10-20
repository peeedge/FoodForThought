import { puzzle, wiki } from "./builders";

export const PUZZLES_021_030 = [
  puzzle(21, {
    scout: {
      clue: "Thin Neapolitan dough topped with tomato, mozzarella and fresh basil, the red, white and green of the Italian flag, and baked in a blazing wood-fired oven.",
      answer: "Pizza Margherita",
      wrong: ["Pizza marinara", "Calzone", "Pizza bianca"],
      explanation: "Pizza Margherita is said to have been named for Queen Margherita of Savoy on her 1889 visit to Naples. Pizza marinara has no cheese at all, just tomato, garlic and oregano.",
      sources: [wiki("Pizza_Margherita")],
    },
    teammates: {
      dishes: ["Tiramisu", "Affogato"],
      answer: "Espresso",
      wrong: ["Mascarpone", "Cocoa powder", "Hazelnuts"],
      explanation: "Espresso is in both: tiramisu's ladyfingers are soaked in it, and an affogato is a scoop of gelato 'drowned' in a shot of it.",
      sources: [wiki("Tiramisu"), wiki("Affogato")],
    },
    replay: {
      clue: "Cordon bleu",
      answer: "Blue ribbon",
      wrong: ["Blue cheese roll", "Golden crust", "Chef's chicken"],
      explanation: "Cordon bleu means 'blue ribbon', after the sash worn by knights of France's Order of the Holy Spirit. It came to mean excellent cooking, hence the Le Cordon Bleu school and the stuffed, breaded cutlet.",
      sources: [wiki("Cordon_bleu_(dish)")],
    },
    timeline: {
      events: [
        ["Swanson sells its first TV dinner", 1953],
        ["Kool-Aid is invented in Nebraska", 1927],
        ["Campbell's introduces condensed soup", 1897],
        ["Kraft Macaroni & Cheese is introduced", 1937],
      ],
      sources: [wiki("Campbell_Soup_Company"), wiki("Kool-Aid"), wiki("Kraft_Dinner"), wiki("TV_dinner")],
    },
    overtime: {
      prompt: "Which 'fifth taste', alongside sweet, sour, salty and bitter, was named by a Japanese chemist in 1908?",
      answer: "Umami",
      wrong: ["Kokumi", "Piquancy", "Astringency"],
      explanation: "Kikunae Ikeda traced the savory taste of kombu dashi to glutamate and called it umami. He then patented a way to produce MSG.",
      sources: [wiki("Umami")],
    },
  }),

  puzzle(22, {
    scout: {
      clue: "Thinly sliced potatoes and onion slowly poached in olive oil, then folded into beaten eggs and cooked into a thick, golden cake that's flipped using a plate.",
      answer: "Spanish tortilla",
      wrong: ["Frittata", "Patatas bravas", "Quiche"],
      explanation: "The Spanish tortilla (tortilla española) is a staple of tapas bars, and whether it should include onion is a fierce debate in Spain. A frittata is the Italian open omelet.",
      sources: [wiki("Spanish_omelette")],
    },
    teammates: {
      dishes: ["Cassoulet", "Feijoada"],
      answer: "Beans",
      wrong: ["Lentils", "Chickpeas", "Rice"],
      explanation: "Both are slow-cooked bean stews with pork: France's cassoulet uses white beans, and Brazil's feijoada uses black beans. Feijão is Portuguese for bean.",
      sources: [wiki("Cassoulet"), wiki("Feijoada")],
    },
    replay: {
      clue: "Crème fraîche",
      answer: "Fresh cream",
      wrong: ["Sour cream", "French cream", "Fried cream"],
      explanation: "Crème fraîche means 'fresh cream', even though it's cultured to give it a gentle tang. It's richer than sour cream and doesn't curdle when boiled.",
      sources: [wiki("Crème_fraîche")],
    },
    timeline: {
      events: [
        ["Red Bull launches in Austria", 1987],
        ["Gatorade is created at the University of Florida", 1965],
        ["New Zealand growers rename the Chinese gooseberry 'kiwifruit'", 1959],
        ["The piña colada becomes Puerto Rico's official drink", 1978],
      ],
      sources: [wiki("Kiwifruit"), wiki("Gatorade"), wiki("Piña_colada"), wiki("Red_Bull")],
    },
    overtime: {
      prompt: "Which pasta's name means 'little tongues' in Italian?",
      answer: "Linguine",
      wrong: ["Orecchiette", "Farfalle", "Vermicelli"],
      explanation: "Linguine means 'little tongues', for its flat, narrow shape. Orecchiette are 'little ears', farfalle are 'butterflies', and vermicelli are 'little worms'.",
      sources: [wiki("Linguine")],
    },
  }),

  puzzle(23, {
    scout: {
      clue: "A Levantine salad that's mostly finely chopped parsley, with mint, tomato, onion and a little bulgur, all dressed with lemon juice and olive oil.",
      answer: "Tabbouleh",
      wrong: ["Fattoush", "Panzanella", "Shirazi salad"],
      explanation: "Proper tabbouleh is a parsley salad with a little bulgur, not the other way around. Fattoush uses toasted pita, panzanella is Tuscan bread salad, and Shirazi salad is Persian cucumber and tomato.",
      sources: [wiki("Tabbouleh")],
    },
    teammates: {
      dishes: ["Clam chowder", "Spaghetti alle vongole"],
      answer: "Clams",
      wrong: ["Mussels", "Oysters", "Scallops"],
      explanation: "Both star clams: New England clam chowder is a creamy soup of clams and potatoes, and spaghetti alle vongole tosses clams with garlic, white wine and parsley. Vongole is Italian for clams.",
      sources: [wiki("Clam_chowder"), wiki("Spaghetti_alle_vongole")],
    },
    replay: {
      clue: "Baguette",
      answer: "Wand",
      wrong: ["Little bag", "Long loaf", "Crusty arm"],
      explanation: "Baguette means 'wand' or 'stick', the same word used for a conductor's baton. UNESCO added the craft of making baguettes to its cultural heritage list in 2022.",
      sources: [wiki("Baguette")],
    },
    timeline: {
      events: [
        ["Neapolitan pizza twirling is listed by UNESCO", 2017],
        ["Japanese washoku cuisine is listed by UNESCO", 2013],
        ["The French gastronomic meal is listed by UNESCO", 2010],
        ["Belgian beer culture is listed by UNESCO", 2016],
      ],
      sources: [wiki("Gastronomic_meal_of_the_French"), wiki("Washoku"), wiki("Beer_in_Belgium"), wiki("Neapolitan_pizza")],
    },
    overtime: {
      prompt: "Gravlax, Scandinavian cured salmon, gets its name from an old method of preparing it. What does the 'grav' mean?",
      answer: "Grave",
      wrong: ["Gravy", "Salt", "Weight"],
      explanation: "Gravlax means 'grave salmon'. Fishermen once salted the fish and buried it in the sand above the high-tide line to ferment. Today it's cured with salt, sugar and dill.",
      sources: [wiki("Gravlax")],
    },
  }),

  puzzle(24, {
    scout: {
      clue: "Romaine lettuce and croutons tossed in a dressing of coddled egg, lemon, garlic, olive oil, Worcestershire sauce and Parmesan. Invented in Tijuana by an Italian immigrant.",
      answer: "Caesar salad",
      wrong: ["Cobb salad", "Waldorf salad", "Salade niçoise"],
      explanation: "Restaurateur Caesar Cardini is credited with inventing the Caesar salad on July 4, 1924. His original relied on Worcestershire sauce for its savory kick rather than anchovies.",
      sources: [wiki("Caesar_salad")],
    },
    teammates: {
      dishes: ["Miso soup", "Edamame"],
      answer: "Soybeans",
      wrong: ["Seaweed", "Mung beans", "Sesame seeds"],
      explanation: "Soybeans link them: miso is a paste of fermented soybeans, and edamame are young soybeans steamed in the pod. Only the soup has seaweed (wakame).",
      sources: [wiki("Miso_soup"), wiki("Edamame")],
    },
    replay: {
      clue: "Croissant",
      answer: "Crescent",
      wrong: ["Growing", "Crossed", "Crispy"],
      explanation: "Croissant simply means 'crescent', after its curved shape. Many French bakeries shape all-butter croissants straight and curve the ones made with margarine, so you can tell them apart.",
      sources: [wiki("Croissant")],
    },
    timeline: {
      events: [
        ["Dominique Ansel debuts the Cronut", 2013],
        ["Starbucks introduces the Pumpkin Spice Latte", 2003],
        ["The Impossible Burger debuts in New York", 2016],
        ["Keurig sells its first single-cup brewers", 1998],
      ],
      sources: [wiki("Keurig"), wiki("Pumpkin_Spice_Latte"), wiki("Cronut"), wiki("Impossible_Foods")],
    },
    overtime: {
      prompt: "Which nut is the main ingredient in marzipan?",
      answer: "Almonds",
      wrong: ["Hazelnuts", "Pistachios", "Cashews"],
      explanation: "Marzipan is ground almonds and sugar, sometimes bound with egg white or almond oil. Lübeck in Germany and Toledo in Spain are both famous for it.",
      sources: [wiki("Marzipan")],
    },
  }),

  puzzle(25, {
    scout: {
      clue: "Corn masa dough spread on a corn husk or banana leaf, filled with meat, cheese or chilies, folded up and steamed. The dish dates back thousands of years in Mesoamerica.",
      answer: "Tamales",
      wrong: ["Enchiladas", "Pupusas", "Empanadas"],
      explanation: "Tamales were made in Mesoamerica thousands of years ago. The husk is a wrapper only and is peeled off before eating.",
      sources: [wiki("Tamale")],
    },
    teammates: {
      dishes: ["Biryani", "Paella"],
      answer: "Saffron",
      wrong: ["Cardamom", "Vanilla", "Sumac"],
      explanation: "Both rice dishes are traditionally colored and perfumed with saffron. It gives Valencian paella its golden hue and streaks biryani's layers with yellow and orange.",
      sources: [wiki("Biryani"), wiki("Paella")],
    },
    replay: {
      clue: "Éclair",
      answer: "Lightning",
      wrong: ["Clear", "Glaze", "Eclipse"],
      explanation: "Éclair means 'lightning' or 'a flash of lightning'. A popular explanation is that it's eaten in a flash, though nobody knows for sure.",
      sources: [wiki("Éclair")],
    },
    timeline: {
      events: [
        ["Tupperware is introduced", 1946],
        ["The first canned beer goes on sale", 1935],
        ["William Painter patents the crown bottle cap", 1892],
        ["Coca-Cola's contour bottle is designed", 1915],
      ],
      sources: [wiki("Crown_cork"), wiki("Coca-Cola_bottle"), wiki("Beverage_can"), wiki("Tupperware_Brands")],
    },
    overtime: {
      prompt: "Halloumi, the squeaky cheese that can be grilled without melting, comes from which country?",
      answer: "Cyprus",
      wrong: ["Greece", "Turkey", "Lebanon"],
      explanation: "Halloumi has been made on Cyprus for centuries and gained EU protected status as a Cypriot cheese in 2021. Its high melting point makes it perfect for grilling.",
      sources: [wiki("Halloumi")],
    },
  }),

  puzzle(26, {
    scout: {
      clue: "Napa cabbage and Korean radish rubbed with chili flakes, garlic, ginger, scallions and salted seafood, then left to ferment. Families still make huge batches together each autumn.",
      answer: "Kimchi",
      wrong: ["Sauerkraut", "Tsukemono", "Achar"],
      explanation: "Kimchi is Korea's national side dish, and the communal autumn making of it, kimjang, is on UNESCO's heritage list. Tsukemono are Japanese pickles, and achar is a South Asian pickle.",
      sources: [wiki("Kimchi")],
    },
    teammates: {
      dishes: ["Cannoli", "Cassata"],
      answer: "Ricotta",
      wrong: ["Mascarpone", "Marzipan", "Cream cheese"],
      explanation: "Sweetened sheep's-milk ricotta is the heart of both Sicilian desserts: it fills the fried shells of cannoli and layers the sponge of a cassata, which is also wrapped in marzipan.",
      sources: [wiki("Cannoli"), wiki("Cassata")],
    },
    replay: {
      clue: "Pets de nonne",
      answer: "Nun's farts",
      wrong: ["Nun's kisses", "Nun's pillows", "Nun's prayers"],
      explanation: "Pets de nonne really does mean 'nun's farts'. The light, puffy choux-pastry fritters are dusted with sugar.",
      sources: [wiki("Choux_pastry")],
    },
    timeline: {
      events: [
        ["The Instant Pot goes on sale", 2010],
        ["The Popsicle is patented", 1924],
        ["KitchenAid's first stand mixer goes on sale", 1919],
        ["Cuisinart introduces its food processor", 1973],
      ],
      sources: [wiki("KitchenAid"), wiki("Popsicle"), wiki("Cuisinart"), wiki("Instant_Pot")],
    },
    overtime: {
      prompt: "Spain's Manchego cheese must be made from which animal's milk?",
      answer: "Sheep",
      wrong: ["Goat", "Cow", "Buffalo"],
      explanation: "Protected Manchego must be made from the milk of Manchega sheep raised in La Mancha. The zigzag pattern on its rind imitates the grass molds once used to shape it.",
      sources: [wiki("Manchego")],
    },
  }),

  puzzle(27, {
    scout: {
      clue: "Wheat noodles in a cloudy, milky broth made by boiling pork bones for many hours, topped with slices of chashu pork. A specialty of Fukuoka.",
      answer: "Tonkotsu ramen",
      wrong: ["Shoyu ramen", "Miso ramen", "Tantanmen"],
      explanation: "Tonkotsu ramen is named for its 'pork bone' broth, and the long, hard boil emulsifies the collagen and fat into that creamy broth. It's associated with Hakata in Fukuoka.",
      sources: [wiki("Ramen")],
    },
    teammates: {
      dishes: ["Piña colada", "Tom kha gai"],
      answer: "Coconut",
      wrong: ["Pineapple", "Lemongrass", "Mango"],
      explanation: "Coconut connects them: the piña colada blends rum and pineapple with coconut cream, and Thai tom kha gai is a chicken soup simmered in coconut milk with galangal.",
      sources: [wiki("Piña_colada"), wiki("Tom_kha_kai")],
    },
    replay: {
      clue: "Coquilles Saint-Jacques",
      answer: "Saint James's shells",
      wrong: ["Holy shells", "Saint John's oysters", "Shells of the sea"],
      explanation: "Coquilles Saint-Jacques means 'Saint James's shells'. The scallop shell is the symbol of pilgrims walking to Santiago (Saint James) de Compostela, and in French scallops are named for it.",
      sources: [wiki("Scallop"), wiki("Coquilles_Saint-Jacques")],
    },
    timeline: {
      events: [
        ["A Singapore hawker stall earns a Michelin star", 2016],
        ["The Cobb salad is created at Hollywood's Brown Derby", 1937],
        ["Brillat-Savarin's The Physiology of Taste is published", 1825],
        ["Pat Olivieri creates the Philly cheesesteak", 1930],
      ],
      sources: [wiki("Jean_Anthelme_Brillat-Savarin"), wiki("Cheesesteak"), wiki("Cobb_salad"), wiki("Hawker_Chan")],
    },
    overtime: {
      prompt: "The potato was first domesticated in the Andes, in what is now southern Peru and which other country?",
      answer: "Bolivia",
      wrong: ["Ireland", "Mexico", "Chile"],
      explanation: "Potatoes were domesticated around 7,000 to 10,000 years ago near Lake Titicaca, on today's border of Peru and Bolivia. They reached Europe only in the late 16th century.",
      sources: [wiki("Potato")],
    },
  }),

  puzzle(28, {
    scout: {
      clue: "Rice noodles in a clear beef broth fragrant with star anise, cinnamon, charred onion and ginger, topped with thin slices of rare beef and served with fresh herbs, lime and chilies.",
      answer: "Pho",
      wrong: ["Bún bò Huế", "Laksa", "Khao soi"],
      explanation: "Pho emerged in northern Vietnam in the early 20th century, and the rare beef finishes cooking in the hot broth. Bún bò Huế is a spicier, lemongrass-heavy soup from central Vietnam.",
      sources: [wiki("Pho")],
    },
    teammates: {
      dishes: ["Margarita", "Paloma"],
      answer: "Tequila",
      wrong: ["Mezcal", "Rum", "Triple sec"],
      explanation: "Both are tequila cocktails: the margarita adds lime and triple sec, and the paloma, said to be more popular in Mexico, mixes tequila with grapefruit soda.",
      sources: [wiki("Margarita"), wiki("Paloma_(cocktail)")],
    },
    replay: {
      clue: "Île flottante",
      answer: "Floating island",
      wrong: ["Island of cream", "Drifting cloud", "Sunken isle"],
      explanation: "Île flottante means 'floating island': a soft poached meringue floating on a pool of crème anglaise, often drizzled with caramel.",
      sources: [wiki("Floating_island_(dessert)")],
    },
    timeline: {
      events: [
        ["Dippin' Dots are invented", 1988],
        ["Ben & Jerry's opens in a Burlington gas station", 1978],
        ["Baskin-Robbins is founded in Glendale, California", 1945],
        ["Häagen-Dazs is founded in the Bronx", 1960],
      ],
      sources: [wiki("Baskin-Robbins"), wiki("Häagen-Dazs"), wiki("Ben_%26_Jerry's"), wiki("Dippin'_Dots")],
    },
    overtime: {
      prompt: "Which apple variety began as a chance seedling discovered in an orchard near Sydney in 1868?",
      answer: "Granny Smith",
      wrong: ["Pink Lady", "Braeburn", "Gala"],
      explanation: "The Granny Smith is named for Maria Ann Smith, who found the seedling on her property in what's now Eastwood, Sydney. Braeburn and Gala both come from New Zealand.",
      sources: [wiki("Granny_Smith")],
    },
  }),

  puzzle(29, {
    scout: {
      clue: "Green plantains fried, then mashed in a wooden pilón with garlic, olive oil and crispy pork cracklings. Often shaped into a dome and served with broth or shrimp. A Puerto Rican classic.",
      answer: "Mofongo",
      wrong: ["Tostones", "Mangú", "Fufu"],
      explanation: "Mofongo descends from West African fufu, adapted in Puerto Rico with plantains and chicharrón. Tostones are twice-fried plantain slices, and Dominican mangú is boiled, mashed plantain.",
      sources: [wiki("Mofongo")],
    },
    teammates: {
      dishes: ["Guacamole", "California roll"],
      answer: "Avocado",
      wrong: ["Cucumber", "Lime", "Mango"],
      explanation: "Avocado is the common thread: it's mashed into guacamole, and it replaced hard-to-find fatty tuna in the California roll. Only the roll has cucumber; only the guacamole has lime.",
      sources: [wiki("Guacamole"), wiki("California_roll")],
    },
    replay: {
      clue: "Bonbon",
      answer: "Good-good",
      wrong: ["Sweet-sweet", "Little drop", "Sugar ball"],
      explanation: "Bonbon is just bon ('good') said twice, so it means 'good-good', a bit of baby talk reportedly used at the 17th-century French royal court that came to mean a sweet.",
      sources: [wiki("Bonbon")],
    },
    timeline: {
      events: [
        ["McDonald's introduces the Happy Meal", 1979],
        ["Taco Bell opens in Downey, California", 1962],
        ["Ray Kroc opens his first McDonald's franchise", 1955],
        ["In-N-Out Burger opens in Baldwin Park, California", 1948],
      ],
      sources: [wiki("In-N-Out_Burger"), wiki("Ray_Kroc"), wiki("Taco_Bell"), wiki("Happy_Meal")],
    },
    overtime: {
      prompt: "Which spice is the dried, unopened flower bud of an evergreen tree?",
      answer: "Cloves",
      wrong: ["Allspice", "Star anise", "Juniper"],
      explanation: "Cloves are flower buds picked before they bloom, from a tree native to Indonesia's Maluku Islands. Allspice and juniper are berries, and star anise is a fruit.",
      sources: [wiki("Clove")],
    },
  }),

  puzzle(30, {
    scout: {
      clue: "A sheep's heart, liver and lungs minced with oatmeal, onion, suet and spices, packed into a casing and simmered. Served with 'neeps and tatties' on Burns Night.",
      answer: "Haggis",
      wrong: ["Black pudding", "Scotch egg", "Faggots"],
      explanation: "Haggis is Scotland's national dish, celebrated in a Robert Burns poem. Because it contains lungs, traditional haggis has been banned from import into the United States since 1971.",
      sources: [wiki("Haggis")],
    },
    teammates: {
      dishes: ["Pecan pie", "Pralines"],
      answer: "Pecans",
      wrong: ["Walnuts", "Almonds", "Macadamias"],
      explanation: "Both are Southern sweets built on pecans: pecan pie bakes them into a syrupy custard, and New Orleans pralines are pecans set in a creamy brown-sugar candy.",
      sources: [wiki("Pecan_pie"), wiki("Praline")],
    },
    replay: {
      clue: "Velouté",
      answer: "Velvety",
      wrong: ["Veal-based", "Veiled", "Velvet glove"],
      explanation: "Velouté means 'velvety', for its smooth texture. The mother sauce is a light stock of chicken, fish or veal thickened with a blond roux; the name describes the texture, not the meat.",
      sources: [wiki("Velouté_sauce")],
    },
    timeline: {
      events: [
        ["The French Chef with Julia Child premieres", 1963],
        ["The Joy of Cooking is first self-published", 1931],
        ["Fannie Farmer's Boston Cooking-School Cook Book is published", 1896],
        ["Mrs Beeton's Book of Household Management is published", 1861],
      ],
      sources: [wiki("Mrs_Beeton's_Book_of_Household_Management"), wiki("Fannie_Farmer"), wiki("The_Joy_of_Cooking"), wiki("The_French_Chef")],
    },
    overtime: {
      prompt: "Tempura was introduced to Japan in the 16th century by missionaries and traders from which country?",
      answer: "Portugal",
      wrong: ["Netherlands", "Spain", "China"],
      explanation: "Missionaries and traders from Portugal brought the technique of batter-frying to Nagasaki. The name may come from the Latin tempora, the Catholic fasting days when they ate fish instead of meat.",
      sources: [wiki("Tempura")],
    },
  }),
];
