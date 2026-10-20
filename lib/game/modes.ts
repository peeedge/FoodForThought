export const ROUND_MODES = ["scout", "teammates", "replay", "timeline", "overtime"] as const;
export type RoundMode = (typeof ROUND_MODES)[number];
export const ROUND_COUNT = ROUND_MODES.length;

/** Bonus round played after the main five: rapid-fire questions that all share the same four answers. */
export const LIGHTNING_QUESTION_COUNT = 10;
export const LIGHTNING_SECONDS = 15;
export const LIGHTNING_OPTION_COUNT = 4;

export type ModeInfo = {
  name: string;
  short: string;
  tagline: string;
  defaultPrompt: string;
};

export const MODE_INFO: Record<RoundMode, ModeInfo> = {
  scout: {
    name: "What's Cooking?",
    short: "Dish",
    tagline: "Name the dish from its ingredients.",
    defaultPrompt: "Which dish do these ingredients make?",
  },
  teammates: {
    name: "Common Ground",
    short: "Pairing",
    tagline: "Two dishes, one key ingredient they share.",
    defaultPrompt: "Which key ingredient do both of these dishes share?",
  },
  replay: {
    name: "Lost in Translation",
    short: "French",
    tagline: "Translate a French menu name into plain English.",
    defaultPrompt: "What does this French name literally mean in English?",
  },
  timeline: {
    name: "Timeline",
    short: "Timeline",
    tagline: "Put four moments in food history in chronological order.",
    defaultPrompt: "Put these moments in chronological order, earliest first.",
  },
  overtime: {
    name: "Chef's Special",
    short: "Special",
    tagline: "One tougher question of culinary trivia.",
    defaultPrompt: "",
  },
};
