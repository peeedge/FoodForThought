import { puzzle, wiki } from "./builders";

export const PUZZLES_001_010 = [
  puzzle(1, {
    scout: {
      clue: "Spaghetti tossed off the heat with guanciale, beaten eggs, grated Pecorino Romano and plenty of black pepper. Purists in Rome insist there's no cream.",
      answer: "Carbonara",
      wrong: ["Cacio e pepe", "Amatriciana", "Pasta alla gricia"],
      explanation: "Carbonara is guanciale, egg, Pecorino Romano and black pepper. Drop the egg and you have gricia; add tomato to gricia and you have amatriciana; cacio e pepe is just cheese and pepper.",
      sources: [wiki("Carbonara")],
    },
    teammates: {
      dishes: ["Baba ghanoush", "Moussaka"],
      answer: "Eggplant",
      wrong: ["Zucchini", "Chickpeas", "Lamb"],
      explanation: "Eggplant is the star of both: baba ghanoush is a dip of roasted, mashed eggplant, and moussaka layers fried eggplant with spiced meat and béchamel. Only moussaka has lamb.",
      sources: [wiki("Baba_ghanoush"), wiki("Moussaka")],
    },
    replay: {
      clue: "Pot-au-feu",
      answer: "Pot on the fire",
      wrong: ["Hot pot of meat", "Stew of the house", "Pot of the farm"],
      explanation: "Pot-au-feu means 'pot on the fire': beef, marrow bones and root vegetables simmered for hours, with the broth served first and the meat after.",
      sources: [wiki("Pot-au-feu")],
    },
    timeline: {
      events: [
        ["Kellogg's starts its Corn Flakes company", 1906],
        ["Coca-Cola is first sold in Atlanta", 1886],
        ["Pre-sliced bread goes on sale in Missouri", 1928],
        ["The first Michelin Guide is published", 1900],
      ],
      sources: [wiki("Coca-Cola"), wiki("Michelin_Guide"), wiki("Corn_flakes"), wiki("Sliced_bread")],
    },
    overtime: {
      prompt: "Which country produces the most coffee in the world?",
      answer: "Brazil",
      wrong: ["Vietnam", "Colombia", "Ethiopia"],
      explanation: "Brazil has been the world's largest coffee producer for more than 150 years, growing roughly a third of the world's supply. Vietnam is second, mostly robusta.",
      sources: [wiki("Coffee_production_in_Brazil")],
    },
  }),

  puzzle(2, {
    scout: {
      clue: "Cooked chickpeas blended smooth with tahini, lemon juice, garlic and salt, then finished with a pool of olive oil.",
      answer: "Hummus",
      wrong: ["Baba ghanoush", "Falafel", "Tzatziki"],
      explanation: "Hummus is puréed chickpeas with tahini, lemon and garlic. Baba ghanoush swaps in roasted eggplant, falafel is fried, and tzatziki is a yogurt-and-cucumber sauce.",
      sources: [wiki("Hummus")],
    },
    teammates: {
      dishes: ["Hummus", "Chana masala"],
      answer: "Chickpeas",
      wrong: ["Lentils", "Fava beans", "Kidney beans"],
      explanation: "Both are built on chickpeas: hummus purées them with tahini, and chana masala simmers them in a spiced tomato-onion gravy. Chana is the Hindi word for chickpea.",
      sources: [wiki("Chickpea"), wiki("Chana_masala")],
    },
    replay: {
      clue: "Croque monsieur",
      answer: "Mister crunch",
      wrong: ["Gentleman's toast", "Cheese for the master", "Sir's sandwich"],
      explanation: "Croque monsieur means roughly 'Mister crunch', from croquer, to bite or crunch. The grilled ham-and-cheese first appeared on Paris café menus in 1910. Add a fried egg and it becomes a croque madame.",
      sources: [wiki("Croque_monsieur")],
    },
    timeline: {
      events: [
        ["Buffalo wings are first served at the Anchor Bar", 1964],
        ["Pizza Margherita is reportedly named for Italy's queen", 1889],
        ["Nachos are invented in Piedras Negras, Mexico", 1943],
        ["Caesar salad is created in Tijuana", 1924],
      ],
      sources: [wiki("Pizza_Margherita"), wiki("Caesar_salad"), wiki("Nachos"), wiki("Buffalo_wing")],
    },
    overtime: {
      prompt: "Which pepper held the Guinness World Record for the hottest chili from 2013 until 2023?",
      answer: "Carolina Reaper",
      wrong: ["Ghost pepper", "Trinidad Moruga Scorpion", "Pepper X"],
      explanation: "The Carolina Reaper, bred by Ed Currie in South Carolina, held the title for a decade. Pepper X, another of Currie's creations, took the record in 2023.",
      sources: [wiki("Carolina_Reaper"), wiki("Pepper_X")],
    },
  }),

  puzzle(3, {
    scout: {
      clue: "Ripe tomatoes, cucumber, green pepper, garlic, stale bread, olive oil and sherry vinegar, blended together and served chilled. Andalusia's answer to a summer heatwave.",
      answer: "Gazpacho",
      wrong: ["Salmorejo", "Vichyssoise", "Borscht"],
      explanation: "Gazpacho is the cold blended soup of Andalusia. Its thicker cousin salmorejo leaves out the cucumber and pepper, vichyssoise is a cold leek-and-potato soup, and borscht is built on beets.",
      sources: [wiki("Gazpacho")],
    },
    teammates: {
      dishes: ["Pesto alla genovese", "Caprese salad"],
      answer: "Basil",
      wrong: ["Pine nuts", "Mozzarella", "Parsley"],
      explanation: "Basil links them: pesto pounds it with pine nuts, garlic, cheese and oil, while a Caprese salad layers whole leaves with tomato and mozzarella.",
      sources: [wiki("Pesto"), wiki("Caprese_salad")],
    },
    replay: {
      clue: "Vol-au-vent",
      answer: "Flight in the wind",
      wrong: ["Wind from the oven", "Wave of butter", "Puff of the valley"],
      explanation: "Vol-au-vent means 'flight in the wind', a nod to how light the hollow puff-pastry case is. It's often credited to the 19th-century chef Antonin Carême.",
      sources: [wiki("Vol-au-vent")],
    },
    timeline: {
      events: [
        ["A microwave oven, the Radarange, goes on sale", 1947],
        ["Margarine is invented in France", 1869],
        ["Clarence Birdseye's frozen foods reach stores", 1930],
        ["Nicolas Appert publishes his method for preserving food in sealed jars", 1810],
      ],
      sources: [wiki("Nicolas_Appert"), wiki("Margarine"), wiki("Clarence_Birdseye"), wiki("Microwave_oven")],
    },
    overtime: {
      prompt: "Which blue cheese is made from sheep's milk and ripened in natural caves in southern France?",
      answer: "Roquefort",
      wrong: ["Gorgonzola", "Stilton", "Danish Blue"],
      explanation: "Roquefort must be aged in the Combalou caves of Roquefort-sur-Soulzon. Gorgonzola, Stilton and Danish Blue are all cow's-milk cheeses.",
      sources: [wiki("Roquefort")],
    },
  }),

  puzzle(4, {
    scout: {
      clue: "Beets give this Eastern European soup its deep magenta color. Cabbage, potatoes and carrots go in too, and it's finished with dill and a spoonful of sour cream.",
      answer: "Borscht",
      wrong: ["Shchi", "Solyanka", "Okroshka"],
      explanation: "Borscht is the beet soup claimed by Ukraine, where it originated, and loved across Eastern Europe. Shchi is a cabbage soup, solyanka a sour meat soup, and okroshka a cold soup made with kvass.",
      sources: [wiki("Borscht")],
    },
    teammates: {
      dishes: ["Hollandaise", "Mayonnaise"],
      answer: "Egg yolks",
      wrong: ["Butter", "Cream", "Flour"],
      explanation: "Both are emulsions held together by egg yolks. Hollandaise whisks the yolks with melted butter and lemon; mayonnaise uses oil.",
      sources: [wiki("Hollandaise_sauce"), wiki("Mayonnaise")],
    },
    replay: {
      clue: "Crème brûlée",
      answer: "Burnt cream",
      wrong: ["Brown sugar custard", "Frozen cream", "Cream of the bride"],
      explanation: "Crème brûlée means 'burnt cream', for the layer of sugar caramelized on top of the custard with a hot iron or blowtorch.",
      sources: [wiki("Crème_brûlée")],
    },
    timeline: {
      events: [
        ["Anthony Bourdain's Kitchen Confidential is published", 2000],
        ["Julia Child's Mastering the Art of French Cooking is published", 1961],
        ["The Great British Bake Off premieres", 2010],
        ["Food Network launches in the United States", 1993],
      ],
      sources: [wiki("Mastering_the_Art_of_French_Cooking"), wiki("Food_Network"), wiki("Kitchen_Confidential_(book)"), wiki("The_Great_British_Bake_Off")],
    },
    overtime: {
      prompt: "By weight, which is generally the world's most expensive spice?",
      answer: "Saffron",
      wrong: ["Vanilla", "Cardamom", "Black pepper"],
      explanation: "Saffron is the dried stigmas of the saffron crocus, picked by hand, three per flower. It takes roughly 150,000 flowers to make one kilogram.",
      sources: [wiki("Saffron")],
    },
  }),

  puzzle(5, {
    scout: {
      clue: "Pork marinated in achiote paste and bitter orange juice, wrapped in banana leaves and slow-roasted, traditionally in a pit. A specialty of Mexico's Yucatán Peninsula.",
      answer: "Cochinita pibil",
      wrong: ["Carnitas", "Barbacoa", "Birria"],
      explanation: "Cochinita pibil gets its red color from achiote, and pibil comes from the Mayan word for a buried pit oven. Carnitas are pork braised in lard, barbacoa is pit-cooked beef or lamb, and birria is a chili-stewed goat or beef.",
      sources: [wiki("Cochinita_pibil")],
    },
    teammates: {
      dishes: ["Tzatziki", "Raita"],
      answer: "Yogurt",
      wrong: ["Sour cream", "Tahini", "Buttermilk"],
      explanation: "Both are cooling yogurt sauces, usually with cucumber. Tzatziki is Greek and leans on garlic and dill; raita is Indian and often seasoned with cumin.",
      sources: [wiki("Tzatziki"), wiki("Raita")],
    },
    replay: {
      clue: "Mille-feuille",
      answer: "Thousand leaves",
      wrong: ["Million crumbs", "Leaf of honey", "Mile of flour"],
      explanation: "Mille-feuille means 'thousand leaves', for its many flaky layers of puff pastry sandwiched with pastry cream. It's also called a Napoleon.",
      sources: [wiki("Mille-feuille")],
    },
    timeline: {
      events: [
        ["The Big Mac goes on sale nationwide", 1968],
        ["White Castle opens in Wichita, Kansas", 1921],
        ["Kentucky Fried Chicken sells its first franchise", 1952],
        ["The McDonald brothers open their first restaurant", 1940],
      ],
      sources: [wiki("White_Castle_(restaurant)"), wiki("McDonald's"), wiki("KFC"), wiki("Big_Mac")],
    },
    overtime: {
      prompt: "Mace is the dried, lacy red covering wrapped around the seed of which other spice?",
      answer: "Nutmeg",
      wrong: ["Allspice", "Clove", "Cardamom"],
      explanation: "Nutmeg and mace come from the same fruit of the Myristica fragrans tree. Nutmeg is the seed, and mace is the aril that wraps around it.",
      sources: [wiki("Nutmeg")],
    },
  }),

  puzzle(6, {
    scout: {
      clue: "Short-grain rice cooked in a wide, shallow pan with saffron, rabbit, chicken, flat green beans and butter beans. Cooks prize the crispy layer that forms on the bottom.",
      answer: "Paella",
      wrong: ["Risotto", "Arroz con pollo", "Jambalaya"],
      explanation: "This is paella valenciana, the original from Valencia. The prized crust on the bottom of the pan is called socarrat.",
      sources: [wiki("Paella")],
    },
    teammates: {
      dishes: ["Gnocchi", "Latkes"],
      answer: "Potatoes",
      wrong: ["Ricotta", "Semolina", "Zucchini"],
      explanation: "Potatoes are the base of both: gnocchi are potato-and-flour dumplings, and latkes are grated potato pancakes fried for Hanukkah.",
      sources: [wiki("Gnocchi"), wiki("Latke")],
    },
    replay: {
      clue: "Coq au vin",
      answer: "Rooster in wine",
      wrong: ["Chicken of the vineyard", "Hen with vinegar", "Cook with wine"],
      explanation: "Coq au vin means 'rooster in wine'. Braising in red wine was a way to tenderize a tough old bird, though most cooks now use chicken.",
      sources: [wiki("Coq_au_vin")],
    },
    timeline: {
      events: [
        ["Nutella goes on sale", 1964],
        ["Hershey's milk chocolate bar is introduced", 1900],
        ["J. S. Fry & Sons makes the first molded chocolate bar", 1847],
        ["Daniel Peter creates milk chocolate in Switzerland", 1875],
      ],
      sources: [wiki("J._S._Fry_%26_Sons"), wiki("Daniel_Peter"), wiki("Hershey_bar"), wiki("Nutella")],
    },
    overtime: {
      prompt: "The Scoville scale ranks chili peppers by the concentration of which compound?",
      answer: "Capsaicin",
      wrong: ["Piperine", "Allicin", "Gingerol"],
      explanation: "Capsaicin is what makes chilies burn, and Scoville heat units measure how much of it a pepper contains. Piperine gives black pepper its bite, allicin is in garlic, and gingerol is in ginger.",
      sources: [wiki("Scoville_scale"), wiki("Capsaicin")],
    },
  }),

  puzzle(7, {
    scout: {
      clue: "Arborio or carnaroli rice toasted in butter, cooked with stock added a ladle at a time, tinted golden with saffron, and finished with butter and Parmesan.",
      answer: "Risotto alla milanese",
      wrong: ["Arancini", "Risi e bisi", "Paella"],
      explanation: "Risotto alla milanese is the saffron risotto of Milan and the traditional partner to osso buco. Arancini are fried rice balls, and risi e bisi is Venetian rice with peas.",
      sources: [wiki("Risotto")],
    },
    teammates: {
      dishes: ["Polenta", "Cornbread"],
      answer: "Cornmeal",
      wrong: ["Semolina", "Rice flour", "Buckwheat"],
      explanation: "Both are made from ground corn. Polenta is cornmeal cooked into a porridge in northern Italy, and cornbread is a quick bread from the American South.",
      sources: [wiki("Polenta"), wiki("Cornbread")],
    },
    replay: {
      clue: "Pain perdu",
      answer: "Lost bread",
      wrong: ["Bread of the father", "Perfect bread", "Poor man's bread"],
      explanation: "Pain perdu means 'lost bread': stale bread that would otherwise be thrown away, soaked in egg and milk and fried. In English it's French toast.",
      sources: [wiki("French_toast")],
    },
    timeline: {
      events: [
        ["Starbucks opens its first store, in Seattle", 1971],
        ["Melitta Bentz patents the paper coffee filter", 1908],
        ["Angelo Moriondo patents an espresso machine", 1884],
        ["Nescafé instant coffee is launched", 1938],
      ],
      sources: [wiki("Espresso_machine"), wiki("Melitta_Bentz"), wiki("Nescafé"), wiki("Starbucks")],
    },
    overtime: {
      prompt: "Japanese sake is brewed with the help of which mold, which turns the rice's starch into sugar?",
      answer: "Koji",
      wrong: ["Penicillium", "Botrytis", "Rhizopus"],
      explanation: "Koji (Aspergillus oryzae) breaks rice starch into sugars that yeast can ferment. It's also used to make miso and soy sauce.",
      sources: [wiki("Aspergillus_oryzae"), wiki("Sake")],
    },
  }),

  puzzle(8, {
    scout: {
      clue: "Slices of eggplant, fried and layered with tomato sauce, mozzarella and Parmesan, then baked until bubbling. A classic of Campania and Sicily.",
      answer: "Eggplant parmigiana",
      wrong: ["Moussaka", "Ratatouille", "Lasagna"],
      explanation: "Eggplant parmigiana, or parmigiana di melanzane, is layered like lasagna but uses eggplant instead of pasta. Moussaka adds meat and béchamel.",
      sources: [wiki("Parmigiana")],
    },
    teammates: {
      dishes: ["Arancini", "Onigiri"],
      answer: "Rice",
      wrong: ["Couscous", "Bulgur", "Quinoa"],
      explanation: "Both are rice balls. Sicilian arancini are stuffed, breaded and fried; Japanese onigiri are shaped by hand and often wrapped in nori.",
      sources: [wiki("Arancini"), wiki("Onigiri")],
    },
    replay: {
      clue: "Amuse-bouche",
      answer: "Mouth amuser",
      wrong: ["Little mouthful", "Before the meal", "Gift of the chef"],
      explanation: "Amuse-bouche means 'mouth amuser': a single bite sent out free by the chef before the meal. It's not ordered from the menu.",
      sources: [wiki("Amuse-bouche")],
    },
    timeline: {
      events: [
        ["Huy Fong Foods starts making Sriracha", 1980],
        ["Lea & Perrins Worcestershire sauce is first sold", 1837],
        ["Heinz introduces tomato ketchup", 1876],
        ["Tabasco sauce is first produced in Louisiana", 1868],
      ],
      sources: [wiki("Worcestershire_sauce"), wiki("Tabasco_sauce"), wiki("Heinz_Tomato_Ketchup"), wiki("Huy_Fong_Foods")],
    },
    overtime: {
      prompt: "Which cocoa bean variety is the rarest and most prized, making up only a small share of the world's crop?",
      answer: "Criollo",
      wrong: ["Forastero", "Trinitario", "Amelonado"],
      explanation: "Criollo beans are delicate and low-yielding, so they make up only a few percent of world production. Hardy Forastero varieties, including Amelonado, supply most of it, and Trinitario is a hybrid of the two.",
      sources: [wiki("Criollo_(cocoa_bean)")],
    },
  }),

  puzzle(9, {
    scout: {
      clue: "Layers of sliced eggplant and lamb minced in a tomato sauce spiced with cinnamon, topped with a thick béchamel and baked. A Greek taverna favorite.",
      answer: "Moussaka",
      wrong: ["Pastitsio", "Spanakopita", "Imam bayildi"],
      explanation: "Greek moussaka was shaped by chef Nikolaos Tselementes in the 1920s, who added the béchamel top. Pastitsio uses pasta instead of eggplant, and spanakopita is a spinach pie.",
      sources: [wiki("Moussaka")],
    },
    teammates: {
      dishes: ["Caesar dressing", "Worcestershire sauce"],
      answer: "Anchovies",
      wrong: ["Capers", "Tamarind", "Smoked paprika"],
      explanation: "Anchovies give both their savory depth. Caesar dressing uses them directly, and fermented anchovies are a key ingredient in Lea & Perrins Worcestershire sauce. Tamarind is in the sauce but not the dressing.",
      sources: [wiki("Caesar_salad"), wiki("Worcestershire_sauce")],
    },
    replay: {
      clue: "Bouillabaisse",
      answer: "Boil, then simmer",
      wrong: ["Fisherman's bowl", "Bubbling basin", "Broth of the bay"],
      explanation: "Bouillabaisse comes from the Provençal bolhir (to boil) and abaissar (to lower the heat): boil, then simmer. The Marseille fish stew is served with rouille on toasted bread.",
      sources: [wiki("Bouillabaisse")],
    },
    timeline: {
      events: [
        ["Bananas Foster is created at Brennan's in New Orleans", 1951],
        ["Waldorf salad debuts at New York's Waldorf Hotel", 1893],
        ["Franz Sacher creates the Sachertorte in Vienna", 1832],
        ["Ice cream cones catch on at the St. Louis World's Fair", 1904],
      ],
      sources: [wiki("Sachertorte"), wiki("Waldorf_salad"), wiki("Ice_cream_cone"), wiki("Bananas_Foster")],
    },
    overtime: {
      prompt: "Japanese katsuobushi, the smoked flakes used to make dashi, are made from which fish?",
      answer: "Skipjack tuna",
      wrong: ["Mackerel", "Sardine", "Yellowtail"],
      explanation: "Katsuobushi is skipjack tuna (katsuo) that's simmered, smoked and dried until rock-hard, then shaved into flakes. It's one of the two pillars of dashi, along with kombu.",
      sources: [wiki("Katsuobushi")],
    },
  }),

  puzzle(10, {
    scout: {
      clue: "Finely chopped raw beef, usually topped with a raw egg yolk and served with capers, onions and pickles. Sometimes mixed at the table by the waiter.",
      answer: "Steak tartare",
      wrong: ["Carpaccio", "Kibbeh nayyeh", "Beef Wellington"],
      explanation: "Steak tartare is chopped raw beef. Carpaccio is raw beef sliced paper-thin, and kibbeh nayyeh is raw lamb mixed with bulgur.",
      sources: [wiki("Steak_tartare")],
    },
    teammates: {
      dishes: ["Halva", "Baba ghanoush"],
      answer: "Tahini",
      wrong: ["Pistachios", "Chickpeas", "Honey"],
      explanation: "Middle Eastern halva is made from tahini (sesame paste) and sugar, and baba ghanoush is roasted eggplant mixed with tahini, lemon and garlic.",
      sources: [wiki("Halva"), wiki("Tahini")],
    },
    replay: {
      clue: "Soufflé",
      answer: "Puffed up",
      wrong: ["Whipped twice", "Little sponge", "Baked high"],
      explanation: "Soufflé is the past participle of souffler, to blow or breathe, so it means 'puffed up', describing how the beaten egg whites make it rise in the oven.",
      sources: [wiki("Soufflé")],
    },
    timeline: {
      events: [
        ["Britain ends food rationing", 1954],
        ["Prohibition takes effect in the United States", 1920],
        ["Abraham Lincoln proclaims Thanksgiving a national holiday", 1863],
        ["Prohibition is repealed", 1933],
      ],
      sources: [wiki("Thanksgiving_(United_States)"), wiki("Prohibition_in_the_United_States"), wiki("Rationing_in_the_United_Kingdom")],
    },
    overtime: {
      prompt: "Most 'wasabi' served outside Japan isn't real wasabi at all. What is it mostly made from?",
      answer: "Horseradish",
      wrong: ["Daikon", "Ginger", "Green tea"],
      explanation: "Real wasabi rhizome is expensive and loses its flavor quickly, so most imitation wasabi is horseradish dyed green, often with mustard added.",
      sources: [wiki("Wasabi")],
    },
  }),
];
