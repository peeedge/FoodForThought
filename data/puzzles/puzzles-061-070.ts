import { puzzle, wiki } from "./builders";

export const PUZZLES_061_070 = [
  puzzle(61, {
    scout: {
      clue: "Marinated meat stacked on a vertical rotisserie, shaved off as the outside crisps, and wrapped in flatbread with garlic sauce and pickles. A Levantine cousin of the Ottoman döner.",
      answer: "Shawarma",
      wrong: ["Gyros", "Souvlaki", "Kebab koobideh"],
      explanation: "Shawarma is the Levantine vertical-spit meat, a relative of Turkish döner. Gyros is the Greek version, souvlaki is grilled on skewers, and koobideh is a Persian minced-meat kebab.",
      sources: [wiki("Shawarma")],
    },
    teammates: {
      dishes: ["Gumbo", "Bhindi masala"],
      answer: "Okra",
      wrong: ["Eggplant", "Green beans", "Zucchini"],
      explanation: "Okra is in both: its mucilage helps thicken Louisiana gumbo, whose name may come from a Bantu word for okra, and bhindi masala is okra stir-fried with onion and spices.",
      sources: [wiki("Okra"), wiki("Gumbo")],
    },
    replay: {
      clue: "À la nage",
      answer: "Swimming",
      wrong: ["Wave style", "From the sea", "Lightly salted"],
      explanation: "À la nage means 'swimming': shellfish or fish served in the aromatic court-bouillon they were poached in.",
      sources: [wiki("Court-bouillon")],
    },
    timeline: {
      events: [
        ["Joseph Lodge founds his cast-iron foundry in Tennessee", 1896],
        ["Corning introduces Pyrex glass bakeware", 1915],
        ["Le Creuset is founded in Fresnoy-le-Grand", 1925],
        ["Tefal sells the first nonstick Teflon pans", 1956],
      ],
      sources: [wiki("Lodge_Manufacturing_Company"), wiki("Pyrex"), wiki("Le_Creuset"), wiki("Tefal")],
    },
    overtime: {
      prompt: "Coffea arabica, the source of most of the world's coffee, originated in which country?",
      answer: "Ethiopia",
      wrong: ["Yemen", "Brazil", "Colombia"],
      explanation: "Arabica coffee is native to the highlands of southwestern Ethiopia; Yemen is where it was first cultivated and traded, which is how it came to be called arabica.",
      sources: [wiki("Coffea_arabica")],
    },
  }),
];
