import { puzzle, wiki } from "./builders";

export const PUZZLES_031_040 = [
  puzzle(31, {
    scout: {
      clue: "Eggs poached in a skillet of tomatoes, peppers, onions, garlic and warm spices until the whites set and the yolks stay runny. Scooped up with bread, it's a North African breakfast that traveled the Mediterranean.",
      answer: "Shakshuka",
      wrong: ["Menemen", "Eggs in purgatory", "Huevos rancheros"],
      explanation: "Shakshuka is eggs poached in a spiced tomato-and-pepper sauce. Turkish menemen scrambles the eggs in; eggs in purgatory is the Italian chili-tomato cousin; huevos rancheros sits the eggs on tortillas.",
      sources: [wiki("Shakshuka")],
    },
    teammates: {
      dishes: ["Aioli", "Toum"],
      answer: "Garlic",
      wrong: ["Olive oil", "Lemon", "Egg yolks"],
      explanation: "Garlic is the point of both: Provençal aioli is an emulsion of garlic and oil, and Lebanese toum is a fluffy garlic sauce whipped with oil and lemon.",
      sources: [wiki("Aioli"), wiki("Toum")],
    },
    replay: {
      clue: "Ratatouille",
      answer: "Stirred up",
      wrong: ["Garden stew", "Rustic mix", "Summer pot"],
      explanation: "Ratatouille comes from the French verb touiller, so it means 'stirred up'. The Provençal stew of eggplant, zucchini, peppers and tomato is tossed together as it cooks.",
      sources: [wiki("Ratatouille")],
    },
    timeline: {
      events: [
        ["Lipton buys his first Ceylon tea gardens", 1890],
        ["Thomas Sullivan sends tea samples in silk bags", 1908],
        ["Lipton introduces the flo-thru tea bag", 1952],
        ["Honest Tea is founded", 1998],
      ],
      sources: [wiki("Lipton"), wiki("Tea_bag"), wiki("Honest_Tea")],
    },
    overtime: {
      prompt: "Raffaele Esposito is said to have created pizza Margherita in 1889 in which city?",
      answer: "Naples",
      wrong: ["Rome", "Genoa", "Palermo"],
      explanation: "The story places pizza Margherita in Naples, baked for Queen Margherita of Savoy in the red, white and green of the Italian flag.",
      sources: [wiki("Pizza_Margherita"), wiki("Neapolitan_pizza")],
    },
  }),

  puzzle(32, {
    scout: {
      clue: "Louisiana rice cooked in one pot with the holy trinity of onion, celery and bell pepper, plus tomato, smoked sausage and shrimp. Creole cooks keep it wetter than Cajun cooks do.",
      answer: "Jambalaya",
      wrong: ["Gumbo", "Étouffée", "Jollof rice"],
      explanation: "Jambalaya is the rice dish of Louisiana. Gumbo is a soup or stew served over rice, not cooked with it, and étouffée is a smothered seafood stew over rice.",
      sources: [wiki("Jambalaya")],
    },
    teammates: {
      dishes: ["Crème brûlée", "Panna cotta"],
      answer: "Vanilla",
      wrong: ["Cinnamon", "Almond extract", "Honey"],
      explanation: "Vanilla is the classic flavor of both: crème brûlée is a baked vanilla custard with a burnt-sugar top, and panna cotta is sweetened cream set with gelatin, usually vanilla-scented.",
      sources: [wiki("Crème_brûlée"), wiki("Panna_cotta")],
    },
    replay: {
      clue: "Confit",
      answer: "Preserved",
      wrong: ["Slow roasted", "Duck fat fried", "Salt cured"],
      explanation: "Confit comes from confire, 'to preserve', so it means preserved. Meat, usually duck, is salted and cooked slowly in its own fat so it keeps; fruit confit is candied the same way.",
      sources: [wiki("Confit")],
    },
    timeline: {
      events: [
        ["Heineken is first brewed in Amsterdam", 1873],
        ["Budweiser is introduced in St. Louis", 1876],
        ["Corona Extra is first brewed in Mexico", 1925],
        ["Sierra Nevada Brewing is founded", 1980],
      ],
      sources: [wiki("Heineken"), wiki("Budweiser"), wiki("Corona_(beer)"), wiki("Sierra_Nevada_Brewing_Company")],
    },
    overtime: {
      prompt: "By EU law, a sparkling wine may be labeled Champagne only if it comes from which French region?",
      answer: "Champagne",
      wrong: ["Burgundy", "Alsace", "Loire Valley"],
      explanation: "Champagne is a protected name: the wine must be made in the Champagne region of northeast France, mostly from Pinot Noir, Pinot Meunier and Chardonnay.",
      sources: [wiki("Champagne")],
    },
  }),

  puzzle(33, {
    scout: {
      clue: "A veal cutlet, pounded thin, coated in flour, egg and breadcrumbs, and fried in butter or lard until golden. Austrian law says it has to be veal; pork is a schnitzel, but not this one.",
      answer: "Wiener schnitzel",
      wrong: ["Chicken-fried steak", "Tonkatsu", "Cotoletta alla milanese"],
      explanation: "Wiener schnitzel is Vienna's veal cutlet. Tonkatsu is the Japanese pork version, chicken-fried steak is American beef, and cotoletta alla milanese is usually cooked on the bone.",
      sources: [wiki("Wiener_schnitzel")],
    },
    teammates: {
      dishes: ["Gingerbread", "Masala chai"],
      answer: "Ginger",
      wrong: ["Cloves", "Nutmeg", "Allspice"],
      explanation: "Ginger is in both: gingerbread is a spiced cake or cookie built on it, and masala chai simmers it with tea, milk and other warming spices.",
      sources: [wiki("Gingerbread"), wiki("Masala_chai")],
    },
    replay: {
      clue: "Fondue",
      answer: "Melted",
      wrong: ["Shared pot", "Alpine dip", "Cheese bath"],
      explanation: "Fondue is the past participle of fondre, 'to melt'. Swiss cheese fondue is melted in a pot with wine; fondue au chocolat followed later.",
      sources: [wiki("Fondue")],
    },
    timeline: {
      events: [
        ["Waffle House opens in Avondale Estates, Georgia", 1955],
        ["IHOP opens in Toluca Lake, California", 1958],
        ["Tim Hortons opens in Hamilton, Ontario", 1964],
        ["The Egg McMuffin is invented by Herb Peterson", 1972],
      ],
      sources: [wiki("Waffle_House"), wiki("IHOP"), wiki("Tim_Hortons"), wiki("McMuffin")],
    },
    overtime: {
      prompt: "The browning that gives seared steak its flavor is named after which French chemist?",
      answer: "Maillard",
      wrong: ["Pasteur", "Escoffier", "Carême"],
      explanation: "Louis-Camille Maillard described the Maillard reaction in 1912: amino acids and sugars browning under heat, the source of roast, toast and seared-meat flavor.",
      sources: [wiki("Maillard_reaction")],
    },
  }),

  puzzle(34, {
    scout: {
      clue: "Raw cubes of fish 'cooked' without heat in lime or lemon juice, then tossed with onion, chili and cilantro. Peru claims it as a national dish.",
      answer: "Ceviche",
      wrong: ["Poke", "Tartare", "Escabeche"],
      explanation: "Ceviche is citrus-cured raw fish, most famously Peruvian. Poke is Hawaiian and soy-sesame dressed, tartare is chopped and unbound by acid, and escabeche is cooked then pickled.",
      sources: [wiki("Ceviche")],
    },
    teammates: {
      dishes: ["Churros", "Cinnamon rolls"],
      answer: "Cinnamon",
      wrong: ["Cardamom", "Cocoa", "Anise"],
      explanation: "Cinnamon coats both: churros are fried dough rolled in cinnamon sugar, and cinnamon rolls swirl the spice through a yeasted bun.",
      sources: [wiki("Churro"), wiki("Cinnamon_roll")],
    },
    replay: {
      clue: "Foie gras",
      answer: "Fat liver",
      wrong: ["Rich goose", "Golden pâté", "Luxury duck"],
      explanation: "Foie gras means 'fat liver': the enlarged liver of a duck or goose, eaten seared, as a torchon or in a terrine.",
      sources: [wiki("Foie_gras")],
    },
    timeline: {
      events: [
        ["Ghirardelli Chocolate Company is founded", 1852],
        ["Lindt develops conching, giving chocolate a smooth melt", 1879],
        ["Godiva Chocolatier is founded in Brussels", 1926],
        ["Ferrero Rocher is launched", 1982],
      ],
      sources: [wiki("Ghirardelli_Chocolate_Company"), wiki("Conching"), wiki("Godiva_Chocolatier"), wiki("Ferrero_Rocher")],
    },
    overtime: {
      prompt: "Japanese fugu, the carefully licensed delicacy that can kill if mishandled, is which fish?",
      answer: "Pufferfish",
      wrong: ["Blowfish eel", "Stonefish", "Lionfish"],
      explanation: "Fugu is pufferfish. Its organs hold tetrodotoxin, so only licensed chefs may prepare it in Japan.",
      sources: [wiki("Fugu")],
    },
  }),

  puzzle(35, {
    scout: {
      clue: "Boneless chicken in a creamy, mildly spiced tomato sauce, usually orange-red and finished with butter or cream. Britain's most-ordered curry, with a fiercely disputed origin story.",
      answer: "Chicken tikka masala",
      wrong: ["Butter chicken", "Tandoori chicken", "Vindaloo"],
      explanation: "Chicken tikka masala is grilled tikka pieces in a creamy tomato masala. Butter chicken (murgh makhani) is its Delhi cousin; tandoori chicken is the dry grilled pieces without the sauce.",
      sources: [wiki("Chicken_tikka_masala")],
    },
    teammates: {
      dishes: ["Caesar salad", "Minestrone"],
      answer: "Parmesan",
      wrong: ["Pecorino", "Olive oil", "Anchovies"],
      explanation: "Parmesan shows up on both: a Caesar is finished with shaved Parmesan, and minestrone is often simmered with a Parmesan rind, then grated at the table.",
      sources: [wiki("Caesar_salad"), wiki("Minestrone")],
    },
    replay: {
      clue: "Aioli",
      answer: "Garlic oil",
      wrong: ["Egg mayonnaise", "Provençal butter", "Lemon cream"],
      explanation: "Aioli comes from Provençal alh (garlic) and oli (oil), so it literally means garlic oil. Traditional versions pound garlic with olive oil; many modern ones add egg.",
      sources: [wiki("Aioli")],
    },
    timeline: {
      events: [
        ["Whataburger opens in Corpus Christi", 1950],
        ["Burger King is founded in Miami", 1954],
        ["Wendy's is founded in Columbus, Ohio", 1969],
        ["Five Guys opens in Arlington, Virginia", 1986],
      ],
      sources: [wiki("Whataburger"), wiki("Burger_King"), wiki("Wendy's"), wiki("Five_Guys")],
    },
    overtime: {
      prompt: "Couscous is made from which product of durum wheat?",
      answer: "Semolina",
      wrong: ["Bulgur", "Farina", "Polenta"],
      explanation: "Couscous is granules of durum wheat semolina, steamed rather than boiled. Bulgur is cracked parboiled wheat, farina is a softer wheat porridge, and polenta is corn.",
      sources: [wiki("Couscous"), wiki("Semolina")],
    },
  }),

  puzzle(36, {
    scout: {
      clue: "Paper-thin pastry layered with chopped nuts, baked, and soaked in honey or sugar syrup. A sweet of the former Ottoman world, claimed by more than one country.",
      answer: "Baklava",
      wrong: ["Knafeh", "Strudel", "Basbousa"],
      explanation: "Baklava stacks phyllo with nuts and syrup. Knafeh uses shredded pastry and cheese, strudel is a rolled Austrian pastry, and basbousa is a semolina cake.",
      sources: [wiki("Baklava")],
    },
    teammates: {
      dishes: ["Onigiri", "Temaki"],
      answer: "Nori",
      wrong: ["Rice vinegar", "Sesame seeds", "Soy sauce"],
      explanation: "Nori, the toasted seaweed sheet, wraps both: onigiri is often girdled with a strip of it, and temaki is a cone of nori filled with rice and fish.",
      sources: [wiki("Nori"), wiki("Onigiri"), wiki("Temaki")],
    },
    replay: {
      clue: "Raclette",
      answer: "Scraper",
      wrong: ["Melted wheel", "Alpine plate", "Cheese iron"],
      explanation: "Raclette comes from racler, 'to scrape', so it means scraper. A wheel of the cheese is heated and the melted face is scraped onto potatoes, pickles and onions.",
      sources: [wiki("Raclette")],
    },
    timeline: {
      events: [
        ["Kingsford charcoal briquettes are commercialized", 1920],
        ["The Weber kettle grill is introduced", 1952],
        ["The George Foreman Grill goes on sale", 1994],
        ["Philips launches the Airfryer", 2010],
      ],
      sources: [wiki("Charcoal_briquette"), wiki("Kettle_grill"), wiki("George_Foreman_Grill"), wiki("Air_fryer")],
    },
    overtime: {
      prompt: "Kopi luwak, among the world's most expensive coffees, is processed by which animal?",
      answer: "Civet",
      wrong: ["Macaque", "Palm squirrel", "Fruit bat"],
      explanation: "Kopi luwak is made from coffee cherries eaten and excreted by the Asian palm civet. The civet's digestive tract ferments the beans before they are collected and roasted.",
      sources: [wiki("Kopi_luwak")],
    },
  }),

  puzzle(37, {
    scout: {
      clue: "Half-moon dumplings of unleavened dough, boiled then often pan-fried, stuffed with potato and cheese, sauerkraut, or meat. A Polish staple, served with sour cream and fried onions.",
      answer: "Pierogi",
      wrong: ["Pelmeni", "Ravioli", "Vareniki"],
      explanation: "Pierogi are Poland's filled dumplings. Pelmeni are Russian and usually meat-filled, ravioli are Italian pasta, and vareniki are the close Ukrainian cousin.",
      sources: [wiki("Pierogi")],
    },
    teammates: {
      dishes: ["Pancakes", "French toast"],
      answer: "Maple syrup",
      wrong: ["Honey", "Molasses", "Agave"],
      explanation: "Maple syrup is the classic pour over both pancakes and French toast, especially in Canada and New England, where the sap is boiled down each spring.",
      sources: [wiki("Maple_syrup"), wiki("Pancake"), wiki("French_toast")],
    },
    replay: {
      clue: "Chiffonade",
      answer: "In rags",
      wrong: ["Fine ribbons", "Herb dust", "Leaf threads"],
      explanation: "Chiffonade means 'in rags': leafy herbs or greens are stacked, rolled and sliced into thin ribbons that look like scraps of cloth.",
      sources: [wiki("Chiffonade")],
    },
    timeline: {
      events: [
        ["Good Humor begins selling from trucks", 1920],
        ["The Klondike Bar is created in Ohio", 1922],
        ["The Drumstick ice cream cone is invented", 1928],
        ["DoveBars are created in Chicago", 1956],
      ],
      sources: [wiki("Good_Humor"), wiki("Klondike_bar"), wiki("Drumstick_(frozen_dairy_treat)"), wiki("Dove_(chocolate)")],
    },
    overtime: {
      prompt: "Kobe beef comes from Tajima cattle raised in which Japanese prefecture?",
      answer: "Hyogo",
      wrong: ["Hokkaido", "Miyazaki", "Kagoshima"],
      explanation: "Kobe beef is a branded Tajima strain of Japanese Black cattle raised in Hyogo Prefecture, of which Kobe is the capital.",
      sources: [wiki("Kobe_beef")],
    },
  }),

  puzzle(38, {
    scout: {
      clue: "French fries, fresh cheese curds that squeak, and a ladle of brown gravy. Quebec's answer to late-night hunger, now a Canadian calling card.",
      answer: "Poutine",
      wrong: ["Chili cheese fries", "Disco fries", "Loaded nachos"],
      explanation: "Poutine is fries, cheese curds and gravy, born in rural Quebec in the 1950s. Disco fries swap in mozzarella and gravy; chili cheese fries skip the curds.",
      sources: [wiki("Poutine")],
    },
    teammates: {
      dishes: ["Soft pretzels", "Deviled eggs"],
      answer: "Mustard",
      wrong: ["Ketchup", "Mayonnaise", "Relish"],
      explanation: "Mustard is the usual partner to a soft pretzel, and it is mashed into the yolk filling of a classic deviled egg.",
      sources: [wiki("Pretzel"), wiki("Deviled_egg")],
    },
    replay: {
      clue: "Tuile",
      answer: "Tile",
      wrong: ["Curl", "Wafer leaf", "Sugar shell"],
      explanation: "Tuile means 'tile'. The thin, crisp cookie is draped over a rolling pin while warm so it cools in the curve of a French roof tile.",
      sources: [wiki("Tuile")],
    },
    timeline: {
      events: [
        ["Lombardi's, America's first pizzeria, opens in New York", 1905],
        ["Little Caesars is founded", 1959],
        ["Domino's Pizza is founded", 1960],
        ["Papa John's is founded", 1984],
      ],
      sources: [wiki("Lombardi's_(pizza)"), wiki("Little_Caesars"), wiki("Domino's"), wiki("Papa_John's")],
    },
    overtime: {
      prompt: "Traditional balsamic vinegar, aged for years in wooden barrels, is produced around which Italian city?",
      answer: "Modena",
      wrong: ["Parma", "Bologna", "Florence"],
      explanation: "Traditional balsamic vinegar (aceto balsamico tradizionale) is made in Modena and neighboring Reggio Emilia, boiled down from grape must and aged in a sequence of barrels.",
      sources: [wiki("Balsamic_vinegar")],
    },
  }),

  puzzle(39, {
    scout: {
      clue: "A long-simmered stew of black beans with pork cuts, sausages and sometimes a pig's ear or tail, served with rice, orange and greens. Brazil's Saturday-feast dish, with roots in Portuguese cooking.",
      answer: "Feijoada",
      wrong: ["Cassoulet", "Fabada", "Boston baked beans"],
      explanation: "Feijoada is Brazil's black-bean-and-pork stew. Cassoulet is the French bean casserole with duck and sausage, and fabada is Asturias' white-bean stew.",
      sources: [wiki("Feijoada")],
    },
    teammates: {
      dishes: ["Golden milk", "Yellow mustard"],
      answer: "Turmeric",
      wrong: ["Saffron", "Paprika", "Annatto"],
      explanation: "Turmeric is what makes both yellow: golden milk (haldi doodh) simmers it in milk with spices, and yellow mustard gets its color from turmeric, not from the mustard seed itself.",
      sources: [wiki("Turmeric"), wiki("Mustard_(condiment)")],
    },
    replay: {
      clue: "Palmier",
      answer: "Palm tree",
      wrong: ["Elephant ear", "Butter fan", "Sugar heart"],
      explanation: "Palmier means 'palm tree'. Puff pastry is rolled in sugar, folded into a heart or palm-frond shape, and baked until caramelized. English bakers sometimes call them elephant ears.",
      sources: [wiki("Palmier")],
    },
    timeline: {
      events: [
        ["Chuck E. Cheese's Pizza Time Theatre opens", 1977],
        ["California Pizza Kitchen is founded", 1985],
        ["The first commercially packaged frozen pizza is sold", 1957],
        ["DiGiorno is launched", 1995],
      ],
      sources: [wiki("Chuck_E._Cheese"), wiki("California_Pizza_Kitchen"), wiki("Frozen_pizza"), wiki("DiGiorno")],
    },
    overtime: {
      prompt: "The blue mold that ripens Roquefort, Stilton and many other blue cheeses is which species?",
      answer: "Penicillium roqueforti",
      wrong: ["Penicillium camemberti", "Aspergillus oryzae", "Rhizopus oligosporus"],
      explanation: "Penicillium roqueforti is the blue-green mold of Roquefort, Stilton and Gorgonzola. Penicillium camemberti makes the white rind on Camembert and Brie.",
      sources: [wiki("Penicillium_roqueforti")],
    },
  }),

  puzzle(40, {
    scout: {
      clue: "Chicken or pork braised in vinegar, soy sauce, garlic and bay leaves until the sauce turns glossy and clings to the meat. The unofficial national dish of the Philippines.",
      answer: "Adobo",
      wrong: ["Teriyaki chicken", "Chicken inasal", "Caldereta"],
      explanation: "Philippine adobo stews meat in vinegar and soy. Teriyaki is a Japanese soy-and-mirin glaze, inasal is grilled chicken from the Visayas, and caldereta is a tomato-and-liver stew.",
      sources: [wiki("Philippine_adobo")],
    },
    teammates: {
      dishes: ["Dal", "Mujaddara"],
      answer: "Lentils",
      wrong: ["Chickpeas", "Split peas", "Black beans"],
      explanation: "Lentils are the base of both: dal is a spiced lentil stew eaten across South Asia, and mujaddara is Levantine rice cooked with lentils and topped with fried onions.",
      sources: [wiki("Dal"), wiki("Mujaddara")],
    },
    replay: {
      clue: "Beurre blanc",
      answer: "White butter",
      wrong: ["Butter foam", "Ivory sauce", "Pale emulsion"],
      explanation: "Beurre blanc means 'white butter': a Loire-Valley sauce of butter whisked into a reduction of white wine, vinegar and shallots, kept just warm enough to stay emulsified.",
      sources: [wiki("Beurre_blanc")],
    },
    timeline: {
      events: [
        ["The first Dietary Guidelines for Americans are published", 1980],
        ["The USDA Food Pyramid is released", 1992],
        ["MyPlate replaces the Food Pyramid", 2011],
        ["The FDA largely bans trans fats", 2018],
      ],
      sources: [wiki("Dietary_Guidelines_for_Americans"), wiki("History_of_USDA_nutrition_guides"), wiki("Trans_fat")],
    },
    overtime: {
      prompt: "Besides anise and fennel, classic absinthe is flavored with which bitter herb?",
      answer: "Wormwood",
      wrong: ["Hyssop", "Angelica", "Gentian"],
      explanation: "Absinthe is distilled with wormwood (Artemisia absinthium), anise and fennel. Wormwood supplies the bitterness that made the drink infamous, and its thujone content led to bans that have since been relaxed.",
      sources: [wiki("Absinthe"), wiki("Artemisia_absinthium")],
    },
  }),
];
