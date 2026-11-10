import { lightning, wiki } from "./builders";

export const LIGHTNING_061_070 = [
  lightning(61, {
    title: "Which Levantine dish?",
    options: ["Kibbeh", "Fattoush", "Labneh", "Manakish"],
    questions: [
      ["Which is bulgur and minced meat shaped into torpedoes and fried?", "Kibbeh", "Fried kibbeh are shells of bulgur and meat around a spiced filling."],
      ["Which bread salad is tossed with toasted pita and sumac?", "Fattoush", "Fattoush is a chopped salad with crisp pita and a sumac dressing."],
      ["Which strained yogurt is thick enough to roll into balls and keep in oil?", "Labneh", "Labneh is yogurt strained until thick, sometimes rolled into balls."],
      ["Which flatbread is spread with za'atar and olive oil for breakfast?", "Manakish", "Manakish with za'atar is a classic Lebanese breakfast."],
      ["Which is often called the national dish of Lebanon?", "Kibbeh", "Kibbeh, in its many forms, is frequently called Lebanon's national dish."],
      ["Which salad was invented to use up stale flatbread?", "Fattoush", "Fattoush comes from fatt, 'crumbs', for the broken bread in it."],
      ["Which is drizzled with olive oil and za'atar and eaten with cucumbers and olives?", "Labneh", "Labneh with olive oil is a staple of the Levantine breakfast table."],
      ["Which has a raw version, nayyeh, made from very fresh lamb or beef?", "Kibbeh", "Kibbeh nayyeh is the raw version, eaten with olive oil and mint."],
      ["Which is also topped with akkawi cheese or minced meat?", "Manakish", "Manakish can be topped with za'atar, cheese or meat."],
      ["Which salad traditionally includes purslane?", "Fattoush", "Purslane is a traditional green in fattoush."],
    ],
    sources: [wiki("Kibbeh"), wiki("Fattoush"), wiki("Strained_yogurt"), wiki("Manakish")],
  }),
];
