import { DC } from "../../constants";
import { PlayerProgress } from "../../player-progress";

import { MultiplierTabIcons } from "./icons";

// See index.js for documentation
export const IP = {
  total: {
    name: "Total IP Gained on Infinity",
    displayOverride: () => (Player.canCrunch
      ? format(gainedInfinityPoints(), 2, 2)
      : "Cannot Crunch"),
    // This effectively hides everything if the player can't actually gain any
    multValue: () => (Player.canCrunch ? gainedInfinityPoints() : 1),
    isActive: () => PlayerProgress.infinityUnlocked() || Player.canCrunch,
    dilationEffect: () => (Laitela.isRunning ? 0.75 * Effects.product(DilationUpgrade.dilationPenalty, 
      Achievement(161)) : 1),
    isDilated: true,
    overlay: ["∞", "<i class='fa-solid fa-layer-group' />"],
  },
  base: {
    name: "Base Infinity Points",
    isBase: true,
    fakeValue: DC.D5,
    multValue: () => {
      const div = 308 - Effects.sum(Achievement(103), Achievement(103).enhancedEffect, TimeStudy(111));
      return Decimal.pow10(player.records.thisInfinity.maxAM.log10() / div - 0.75);
    },
    isActive: () => player.break,
    icon: MultiplierTabIcons.CONVERT_FROM("AM"),
  },
  antimatter: {
    name: "Infinity Points from Antimatter",
    displayOverride: () => `${format(player.records.thisInfinity.maxAM, 2, 2)} AM`,
    // Just needs to match the value in base and be larger than 1
    multValue: DC.D5,
    isActive: () => player.break,
    icon: MultiplierTabIcons.ANTIMATTER,
  },
  divisor: {
    name: "Formula Improvement",
    displayOverride: () => {
      const div = 308 - Effects.sum(Achievement(103), TimeStudy(111));
      return `log(AM)/${formatInt(308)} ➜ log(AM)/${format(div, 2, 1)}`;
    },
    powValue: () => 308 / (308 - Effects.sum(Achievement(103), TimeStudy(111))),
    isActive: () => Achievement(103).canBeApplied || TimeStudy(111).isBought,
    icon: MultiplierTabIcons.DIVISOR("IP"),
  },
  infinityUpgrade: {
    name: () => Achievement(121).isEnhanced ? `Infinity Upgrade - Repeatable ${formatX(3)} IP` : 
    (Achievement(121).canBeApplied ? `Infinity Upgrade - Repeatable ${formatX(2.01, 2, 2)} IP` : 
    `Infinity Upgrade - Repeatable ${formatX(2)} IP`),
    multValue: () => InfinityUpgrade.ipMult.effectOrDefault(1),
    isActive: () => player.break && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("infinity"),
  },
  achievement: {
    name: "Achievements",
    multValue: () => DC.D1.timesEffectsOf(
      Achievement(62),
      Achievement(62).enhancedEffect,
      Achievement(77),
      Achievement(77).enhancedEffect,
      Achievement(85),
      Achievement(85).enhancedEffect,
      Achievement(93),
      Achievement(116),
      Achievement(116).enhancedEffect,
      Achievement(125),
      Achievement(125).enhancedEffect,
      Achievement(141).effects.ipGain,
    ),
    powValue: () => Achievement(93).enhancedEffect.effectOrDefault(1),
    isActive: () => player.break && !Pelle.isDoomed,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  timeStudy: {
    name: "Time Studies",
    multValue: () => DC.D1.timesEffectsOf(
      TimeStudy(41),
      TimeStudy(51),
      TimeStudy(141),
      TimeStudy(142),
      TimeStudy(143),
    ),
    isActive: () => player.break && !Pelle.isDoomed,
    icon: MultiplierTabIcons.TIME_STUDY,
  },
  dilationUpgrade: {
    name: "Dilation Upgrade - IP multiplier based on DT",
    multValue: () => DilationUpgrade.ipMultDT.effectOrDefault(1),
    isActive: () => DilationUpgrade.ipMultDT.canBeApplied,
    icon: MultiplierTabIcons.UPGRADE("dilation"),
  },
  glyph: {
    name: "Equipped Glyphs",
    multValue: () => Pelle.specialGlyphEffect.infinity.times(Pelle.isDoomed ? 1 : getAdjustedGlyphEffect("infinityIP")),
    powValue: () => (GlyphAlteration.isAdded("infinity") ? getSecondaryGlyphEffect("infinityIP") : 1),
    isActive: () => PlayerProgress.realityUnlocked(),
    icon: MultiplierTabIcons.GENERIC_GLYPH,
  },
  alchemy: {
    name: "Glyph Alchemy",
    multValue: () => Replicanti.amount.powEffectOf(AlchemyResource.exponential),
    isActive: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
    icon: MultiplierTabIcons.ALCHEMY,
  },
  pelle: {
    name: "Pelle Strike - Vacuum Rift",
    multValue: () => DC.D1.timesEffectsOf(PelleRifts.vacuum),
    isActive: () => Pelle.isDoomed,
    icon: MultiplierTabIcons.PELLE,
  },
  iap: {
    name: "Shop Tab Purchases",
    multValue: () => ShopPurchase.IPPurchases.currentMult,
    isActive: () => ShopPurchaseData.totalSTD > 0,
    icon: MultiplierTabIcons.IAP,
  },

  nerfTeresa: {
    name: "Teresa's Reality",
    powValue: () => 0.52,
    isActive: () => Teresa.isRunning,
    icon: MultiplierTabIcons.GENERIC_TERESA,
  },
  nerfV: {
    name: "V's Reality",
    powValue: () => 0.5,
    isActive: () => V.isRunning,
    icon: MultiplierTabIcons.GENERIC_V,
  },
  cursedRow: {
    name: "Cursed Rows",
    multValue: () => CursedRow(7).effectOrDefault(1),
    isActive: () => CursedRow(7).canBeApplied,
    icon: MultiplierTabIcons.CURSED_ROW,
  }
};
