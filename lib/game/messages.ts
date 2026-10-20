import { ROUND_COUNT } from "./modes";

export function resultMessage(points: number): string {
  if (points >= ROUND_COUNT) return "A perfect plate. Compliments to the chef.";
  if (points >= 4) return "Michelin-worthy — one pinch short of perfect.";
  if (points >= 3) return "A solid service. The kitchen is impressed.";
  if (points >= 2) return "Still simmering. Brush up on the cookbooks tonight.";
  if (points >= 1) return "A rough service. Tomorrow is a fresh menu.";
  return "Even great chefs burn the toast. Back in the kitchen tomorrow?";
}
