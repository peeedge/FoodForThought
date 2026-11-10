import { puzzle, wiki } from "./builders";

export const PUZZLES_041_050 = [
  puzzle(41, {
    scout: {
      clue: "A paprika-red soup-stew of beef, onions and potatoes, named for the cattle herders of the Hungarian plains who cooked it in kettles over open fires.",
      answer: "Goulash",
      wrong: ["Chicken paprikash", "Beef bourguignon", "Solyanka"],
      explanation: "Goulash (gulyás) takes its name from the gulyás, Hungary's cattle herders. Chicken paprikash is finished with sour cream, beef bourguignon is braised in red wine, and solyanka is a sour Russian soup.",
      sources: [wiki("Goulash")],
    },
    teammates: {
      dishes: ["Lemon meringue pie", "Avgolemono"],
      answer: "Lemon",
      wrong: ["Orange", "Lime", "Honey"],
      explanation: "Lemon is the point of both: lemon meringue pie is a lemon curd under toasted meringue, and Greek avgolemono is an egg-and-lemon sauce or soup.",
      sources: [wiki("Lemon_meringue_pie"), wiki("Avgolemono")],
    },
    replay: {
      clue: "Pommes de terre",
      answer: "Earth apples",
      wrong: ["Ground roots", "Field fruit", "Soil pears"],
      explanation: "Pommes de terre means 'earth apples', the French name for potatoes. On menus it is often shortened to pommes, as in pommes frites.",
      sources: [wiki("Potato")],
    },
    timeline: {
      events: [
        ["Piggly Wiggly opens the first self-service grocery store", 1916],
        ["King Kullen opens in Queens", 1930],
        ["Trader Joe's opens in Pasadena", 1967],
        ["Whole Foods Market opens in Austin", 1980],
      ],
      note: "King Kullen is often called America's first supermarket.",
      sources: [wiki("Piggly_Wiggly"), wiki("King_Kullen"), wiki("Trader_Joe's"), wiki("Whole_Foods_Market")],
    },
    overtime: {
      prompt: "Which country grows the most cocoa beans?",
      answer: "Côte d'Ivoire",
      wrong: ["Ghana", "Indonesia", "Ecuador"],
      explanation: "Côte d'Ivoire (Ivory Coast) grows roughly 40% of the world's cocoa, with neighboring Ghana in second place.",
      sources: [wiki("Cocoa_bean")],
    },
  }),

  puzzle(42, {
    scout: {
      clue: "Noodles in a rich, spicy coconut-curry broth with shrimp, fried tofu puffs, bean sprouts and a spoonful of sambal. A Peranakan bowl beloved in Singapore and Malaysia, with a sour tamarind version in Penang.",
      answer: "Laksa",
      wrong: ["Khao soi", "Mee goreng", "Tom kha gai"],
      explanation: "Curry laksa is the coconut-curry noodle soup of the Peranakan kitchen; Penang's asam laksa is the sour fish-and-tamarind version. Khao soi is northern Thai curry noodles, mee goreng is stir-fried, and tom kha gai is a soup without noodles.",
      sources: [wiki("Laksa")],
    },
    teammates: {
      dishes: ["Hot toddy", "Bienenstich"],
      answer: "Honey",
      wrong: ["Maple syrup", "Golden syrup", "Molasses"],
      explanation: "Honey sweetens both: a hot toddy stirs it into whisky and hot water with lemon, and German Bienenstich ('bee sting') cake is topped with caramelized honey and almonds.",
      sources: [wiki("Hot_toddy"), wiki("Bienenstich")],
    },
    replay: {
      clue: "Bain-marie",
      answer: "Mary's bath",
      wrong: ["Sea bath", "Gentle boil", "Steam pan"],
      explanation: "Bain-marie means 'Mary's bath', traditionally said to honor Mary the Jewess, an early alchemist. The water bath cooks custards and melts chocolate gently.",
      sources: [wiki("Bain-marie")],
    },
    timeline: {
      events: [
        ["Fritos corn chips are first sold in San Antonio", 1932],
        ["Cheetos are created by the Frito Company", 1948],
        ["Pepperidge Farm brings Goldfish crackers to the US", 1962],
        ["Pringles are introduced by Procter & Gamble", 1968],
      ],
      sources: [wiki("Fritos"), wiki("Cheetos"), wiki("Goldfish_(cracker)"), wiki("Pringles")],
    },
    overtime: {
      prompt: "Which country produces the most olive oil?",
      answer: "Spain",
      wrong: ["Italy", "Greece", "Tunisia"],
      explanation: "Spain is by far the largest producer, usually around 40% or more of world output, much of it from Andalusia's Jaén province.",
      sources: [wiki("Olive_oil")],
    },
  }),

  puzzle(43, {
    scout: {
      clue: "Cross-cut veal shanks braised with white wine, broth and vegetables, finished with a sprinkle of gremolata. The marrow in the bone is the prize. A Milanese classic often served with saffron risotto.",
      answer: "Osso buco",
      wrong: ["Saltimbocca", "Vitello tonnato", "Brasato al Barolo"],
      explanation: "Osso buco means 'bone with a hole', for the marrow-filled shank. Saltimbocca is veal with prosciutto and sage, vitello tonnato is cold veal in tuna sauce, and brasato al Barolo is beef braised in red wine.",
      sources: [wiki("Ossobuco")],
    },
    teammates: {
      dishes: ["Bloody Mary", "Shakshuka"],
      answer: "Tomatoes",
      wrong: ["Beets", "Red cabbage", "Carrots"],
      explanation: "Tomatoes are the base of both: a Bloody Mary is vodka with spiced tomato juice, and shakshuka poaches eggs in a tomato-and-pepper sauce.",
      sources: [wiki("Bloody_Mary_(cocktail)"), wiki("Shakshuka")],
    },
    replay: {
      clue: "Langue de chat",
      answer: "Cat's tongue",
      wrong: ["Lady's finger", "Butter strip", "Thin wafer"],
      explanation: "Langue de chat means 'cat's tongue', for the shape of the thin, flat, rounded cookie. They are often served with sorbet or coffee.",
      sources: [wiki("Langue_de_chat")],
    },
    timeline: {
      events: [
        ["Peet's Coffee opens in Berkeley", 1966],
        ["Costa Coffee is founded in London", 1971],
        ["Caribou Coffee is founded in Minnesota", 1992],
        ["Blue Bottle Coffee is founded in Oakland", 2002],
      ],
      sources: [wiki("Peet's_Coffee"), wiki("Costa_Coffee"), wiki("Caribou_Coffee"), wiki("Blue_Bottle_Coffee")],
    },
    overtime: {
      prompt: "Which nut grows dangling beneath a fleshy 'apple' and is never sold in its shell, because the shell holds irritants related to those in poison ivy?",
      answer: "Cashew",
      wrong: ["Brazil nut", "Macadamia", "Pistachio"],
      explanation: "The cashew hangs from the cashew apple, and its shell contains anacardic acids and cardol, relatives of poison ivy's urushiol, so the nuts are roasted or steamed out of the shell before sale.",
      sources: [wiki("Cashew")],
    },
  }),

  puzzle(44, {
    scout: {
      clue: "A crackly baguette split and filled with pâté, cold cuts or grilled pork, pickled carrot and daikon, cucumber, cilantro and chilies. A Vietnamese legacy of French colonial bakeries.",
      answer: "Bánh mì",
      wrong: ["Cuban sandwich", "Po' boy", "Bánh xèo"],
      explanation: "Bánh mì is the Vietnamese baguette sandwich. A Cuban sandwich is pressed pork and ham, a po' boy comes from New Orleans, and bánh xèo is a crisp Vietnamese crêpe.",
      sources: [wiki("Bánh_mì")],
    },
    teammates: {
      dishes: ["New York cheesecake", "Philadelphia roll"],
      answer: "Cream cheese",
      wrong: ["Mascarpone", "Ricotta", "Crème fraîche"],
      explanation: "Cream cheese is in both: New York cheesecake is a dense bake of cream cheese, eggs and sugar, and the Philadelphia roll pairs it with smoked salmon and cucumber.",
      sources: [wiki("Cheesecake"), wiki("Philadelphia_roll")],
    },
    replay: {
      clue: "Religieuse",
      answer: "Nun",
      wrong: ["Bishop's hat", "Choir boy", "Little cloister"],
      explanation: "Religieuse means 'nun': a large choux bun topped with a smaller one and iced, said to look like a nun in her habit.",
      sources: [wiki("Religieuse")],
    },
    timeline: {
      events: [
        ["Hershey's Kisses are introduced", 1907],
        ["Pez is invented in Austria", 1927],
        ["Peeps marshmallow chicks are first made", 1953],
        ["Jelly Belly jelly beans are introduced", 1976],
      ],
      sources: [wiki("Hershey's_Kisses"), wiki("Pez"), wiki("Peeps"), wiki("Jelly_Belly")],
    },
    overtime: {
      prompt: "Saffron threads are which part of the crocus flower?",
      answer: "Stigmas",
      wrong: ["Petals", "Anthers", "Sepals"],
      explanation: "Saffron is the dried stigmas of Crocus sativus, three per flower, picked by hand, which is why it is so costly.",
      sources: [wiki("Saffron")],
    },
  }),

  puzzle(45, {
    scout: {
      clue: "A fisherman's stew of Dungeness crab, clams, shrimp, mussels and fish in a tomato and wine broth, served with sourdough for mopping. Born among Italian immigrants on San Francisco's wharves.",
      answer: "Cioppino",
      wrong: ["Bouillabaisse", "Zarzuela", "Caldeirada"],
      explanation: "Cioppino was created by Italian fishermen in San Francisco's North Beach. Bouillabaisse is Marseille's fish stew, zarzuela is Catalan, and caldeirada is Portuguese.",
      sources: [wiki("Cioppino")],
    },
    teammates: {
      dishes: ["Flapjacks", "Cranachan"],
      answer: "Oats",
      wrong: ["Rye", "Buckwheat", "Semolina"],
      explanation: "Oats hold both together: British flapjacks are rolled oats baked with butter and golden syrup, and Scottish cranachan folds toasted oatmeal into cream with raspberries, honey and whisky.",
      sources: [wiki("Flapjack_(oat_bar)"), wiki("Cranachan")],
    },
    replay: {
      clue: "Charcuterie",
      answer: "Cooked flesh",
      wrong: ["Butcher's board", "Pork shop", "Cured cuts"],
      explanation: "Charcuterie comes from chair (flesh) and cuite (cooked), so it means cooked flesh: the craft of sausages, pâtés, hams and terrines, mostly pork.",
      sources: [wiki("Charcuterie")],
    },
    timeline: {
      events: [
        ["Craig Claiborne becomes food editor of The New York Times", 1957],
        ["Tim and Nina Zagat publish their first restaurant survey", 1979],
        ["The World's 50 Best Restaurants list is first published", 2002],
        ["Yelp is founded in San Francisco", 2004],
      ],
      sources: [wiki("Craig_Claiborne"), wiki("Zagat"), wiki("The_World's_50_Best_Restaurants"), wiki("Yelp")],
    },
    overtime: {
      prompt: "Under EU law, cheese sold as feta must come from which country?",
      answer: "Greece",
      wrong: ["Bulgaria", "Turkey", "Cyprus"],
      explanation: "Feta has been a protected designation of origin since 2002: only brined sheep's milk (or sheep-and-goat) cheese from Greece may use the name in the EU.",
      sources: [wiki("Feta")],
    },
  }),

  puzzle(46, {
    scout: {
      clue: "Beef simmered with dried chilies, cumin and garlic into a thick red stew, with or without beans depending on whom you ask. Texas made it the official state dish in 1977.",
      answer: "Chili con carne",
      wrong: ["Picadillo", "Carne guisada", "Chile verde"],
      explanation: "Chili con carne is Texas's official state dish. Picadillo is a seasoned ground-meat hash, carne guisada is a gravy-rich beef stew, and chile verde is pork in green tomatillo sauce.",
      sources: [wiki("Chili_con_carne")],
    },
    teammates: {
      dishes: ["French onion soup", "Pissaladière"],
      answer: "Onions",
      wrong: ["Shallots", "Leeks", "Gruyère"],
      explanation: "Onions, cooked slowly until sweet, are the heart of both: French onion soup is caramelized onions in broth under a cheese crouton, and Niçoise pissaladière is a flatbread of melted onions, anchovies and olives.",
      sources: [wiki("French_onion_soup"), wiki("Pissaladière")],
    },
    replay: {
      clue: "Crudités",
      answer: "Raw things",
      wrong: ["Garden plate", "Crunchy bits", "Fresh dip"],
      explanation: "Crudités means 'raw things': sliced or whole raw vegetables served with a dip or vinaigrette.",
      sources: [wiki("Crudités")],
    },
    timeline: {
      events: [
        ["Barilla is founded in Parma", 1877],
        ["Chef Boyardee is founded in Cleveland", 1928],
        ["Rice-A-Roni is introduced in San Francisco", 1958],
        ["Olive Garden opens in Orlando", 1982],
      ],
      sources: [wiki("Barilla"), wiki("Chef_Boyardee"), wiki("Rice-A-Roni"), wiki("Olive_Garden")],
    },
    overtime: {
      prompt: "What does the Italian cooking term 'al dente' literally mean?",
      answer: "To the tooth",
      wrong: ["To the bite", "In the pot", "Just done"],
      explanation: "Al dente means 'to the tooth': pasta cooked until tender but still firm when bitten.",
      sources: [wiki("Al_dente")],
    },
  }),

  puzzle(47, {
    scout: {
      clue: "Rice cooked in a base of tomato, onion and peppers until every grain turns orange-red, with a smoky bottom layer prized at parties. Nigeria and Ghana argue endlessly over who makes it best.",
      answer: "Jollof rice",
      wrong: ["Thieboudienne", "Waakye", "Fried rice"],
      explanation: "Jollof rice is the one-pot tomato rice of West Africa, descended from Senegal's thieboudienne. Waakye is Ghanaian rice and beans, and fried rice is cooked first, then stir-fried.",
      sources: [wiki("Jollof_rice")],
    },
    teammates: {
      dishes: ["Chashu", "Samgyeopsal"],
      answer: "Pork belly",
      wrong: ["Beef short rib", "Duck breast", "Chicken thigh"],
      explanation: "Pork belly is the cut in both: ramen chashu is often belly rolled and braised in soy, and Korean samgyeopsal is thick slices of belly grilled at the table.",
      sources: [wiki("Char_siu"), wiki("Samgyeopsal")],
    },
    replay: {
      clue: "Entremets",
      answer: "Between courses",
      wrong: ["Inside dessert", "Layered cake", "Sweet course"],
      explanation: "Entremets means 'between courses': once a dish or spectacle served between main courses, the word now names an elaborate layered mousse cake.",
      sources: [wiki("Entremet")],
    },
    timeline: {
      events: [
        ["French's yellow mustard debuts at the St. Louis World's Fair", 1904],
        ["Hellmann's begins selling its mayonnaise in jars", 1913],
        ["Kraft introduces Miracle Whip", 1933],
        ["Hidden Valley Ranch, home of ranch dressing, opens near Santa Barbara", 1954],
      ],
      sources: [wiki("French's"), wiki("Hellmann's_and_Best_Foods"), wiki("Miracle_Whip"), wiki("Ranch_dressing")],
    },
    overtime: {
      prompt: "Roughly 80% of the world's sugar comes from which crop?",
      answer: "Sugarcane",
      wrong: ["Sugar beet", "Corn", "Sorghum"],
      explanation: "Sugarcane supplies roughly 80% of the world's sugar; most of the rest comes from sugar beet, grown in cooler climates.",
      sources: [wiki("Sugarcane"), wiki("Sugar")],
    },
  }),

  puzzle(48, {
    scout: {
      clue: "Beef slow-cooked for hours in coconut milk with lemongrass, galangal, chilies and spices until the liquid is gone and the meat is dark and nearly dry. Feast food of the Minangkabau of West Sumatra.",
      answer: "Rendang",
      wrong: ["Massaman curry", "Kare-kare", "Gulai"],
      explanation: "Rendang is cooked until its coconut milk has fully reduced. Gulai is the soupier Indonesian curry it passes through on the way, massaman is Thai, and kare-kare is a Filipino peanut stew.",
      sources: [wiki("Rendang")],
    },
    teammates: {
      dishes: ["Gambas al ajillo", "Har gow"],
      answer: "Shrimp",
      wrong: ["Scallops", "Crab", "Lobster"],
      explanation: "Shrimp star in both: gambas al ajillo are sizzled in garlic and olive oil, and har gow are dim sum dumplings of shrimp in a translucent wrapper.",
      sources: [wiki("Gambas_al_ajillo"), wiki("Har_gow")],
    },
    replay: {
      clue: "Ragoût",
      answer: "Taste reviver",
      wrong: ["Slow stew", "Simmered meat", "Thick sauce"],
      explanation: "Ragoût comes from ragoûter, 'to revive the taste', so it means a taste reviver: a well-seasoned stew of meat or vegetables. Italian ragù takes its name from it.",
      sources: [wiki("Ragout")],
    },
    timeline: {
      events: [
        ["The Paris Exposition ranks the Bordeaux châteaux", 1855],
        ["Phylloxera is first spotted in French vineyards", 1863],
        ["Robert Parker launches The Wine Advocate", 1978],
        ["Trader Joe's starts selling 'Two Buck Chuck'", 2002],
      ],
      sources: [
        wiki("Bordeaux_Wine_Official_Classification_of_1855"),
        wiki("Great_French_Wine_Blight"),
        wiki("Robert_M._Parker_Jr."),
        wiki("Charles_Shaw_wine"),
      ],
    },
    overtime: {
      prompt: "Barolo and Barbaresco are made from which grape?",
      answer: "Nebbiolo",
      wrong: ["Sangiovese", "Barbera", "Montepulciano"],
      explanation: "Nebbiolo, perhaps named for the fog (nebbia) of Piedmont's autumn harvest, makes both Barolo and Barbaresco.",
      sources: [wiki("Nebbiolo")],
    },
  }),

  puzzle(49, {
    scout: {
      clue: "Battered white fish, usually cod or haddock, deep-fried and served with thick-cut chips, salt and malt vinegar, traditionally wrapped in paper. Britain's takeaway since the 1860s.",
      answer: "Fish and chips",
      wrong: ["Fritto misto", "Fish tacos", "Pescado frito"],
      explanation: "Fish and chips became a British working-class staple in the 19th century. Fritto misto is a mixed Italian fry, fish tacos are Baja-style, and pescado frito is Andalusian fried fish without the chips.",
      sources: [wiki("Fish_and_chips")],
    },
    teammates: {
      dishes: ["Negroni", "Tom Collins"],
      answer: "Gin",
      wrong: ["Vodka", "Campari", "Sweet vermouth"],
      explanation: "Gin is the spirit in both: a Negroni is equal parts gin, Campari and sweet vermouth, and a Tom Collins is gin, lemon, sugar and soda.",
      sources: [wiki("Negroni"), wiki("Tom_Collins")],
    },
    replay: {
      clue: "Croûton",
      answer: "Little crust",
      wrong: ["Toasted cube", "Fried bread", "Soup stone"],
      explanation: "Croûton comes from croûte, 'crust', so it means a little crust: a cube or slice of bread fried or toasted for soups and salads.",
      sources: [wiki("Crouton")],
    },
    timeline: {
      events: [
        ["Central Grocery in New Orleans creates the muffuletta", 1906],
        ["The Martin brothers feed striking streetcar workers 'po' boys'", 1929],
        ["Pete's Super Submarines, later Subway, opens", 1965],
        ["Jimmy John's opens in Charleston, Illinois", 1983],
      ],
      sources: [wiki("Muffuletta"), wiki("Po'_boy"), wiki("Subway_(restaurant)"), wiki("Jimmy_John's")],
    },
    overtime: {
      prompt: "Gouda cheese takes its name from a city in which country?",
      answer: "Netherlands",
      wrong: ["Belgium", "Denmark", "Switzerland"],
      explanation: "Gouda is named for the city of Gouda in the Netherlands, where it was traded for centuries; the cheese itself is made across the country.",
      sources: [wiki("Gouda_cheese")],
    },
  }),

  puzzle(50, {
    scout: {
      clue: "A boat-shaped bread filled with molten cheese, topped with a raw egg yolk and a knob of butter that are stirred in at the table. The Adjarian version of Georgia's national cheese bread.",
      answer: "Khachapuri",
      wrong: ["Pide", "Börek", "Lahmacun"],
      explanation: "Adjarian khachapuri is Georgia's boat-shaped cheese bread with egg. Turkish pide is a similar boat-shaped flatbread, börek is filled layered pastry, and lahmacun is a thin meat-topped flatbread.",
      sources: [wiki("Khachapuri")],
    },
    teammates: {
      dishes: ["Beef Stroganoff", "Chicken Marsala"],
      answer: "Mushrooms",
      wrong: ["Sour cream", "Capers", "Truffles"],
      explanation: "Mushrooms are in both: beef Stroganoff simmers them in a sour-cream sauce, and chicken Marsala braises them in Marsala wine.",
      sources: [wiki("Beef_Stroganoff"), wiki("Chicken_marsala")],
    },
    replay: {
      clue: "En papillote",
      answer: "In parchment",
      wrong: ["In the oven", "Steam-sealed", "With butter"],
      explanation: "En papillote means 'in parchment': fish or vegetables are sealed in a paper parcel and baked so they steam in their own juices.",
      sources: [wiki("Papillote")],
    },
    timeline: {
      events: [
        ["Yuri Gagarin becomes the first person to eat in space", 1961],
        ["Skylab astronauts get a freezer and a dining table", 1973],
        ["Pizza Hut delivers a pizza to the International Space Station", 2001],
        ["Astronauts on the ISS eat lettuce grown in orbit", 2015],
      ],
      sources: [wiki("Space_food"), wiki("Skylab"), wiki("Vegetable_Production_System")],
    },
    overtime: {
      prompt: "Vanilla comes from the seed pods of a plant in which family?",
      answer: "Orchid",
      wrong: ["Lily", "Legume", "Ginger"],
      explanation: "Vanilla is the cured pod of Vanilla planifolia, a climbing orchid, and it is the only orchid grown widely as a food crop.",
      sources: [wiki("Vanilla")],
    },
  }),
];
