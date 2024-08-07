import { DC } from "../../constants";

import { MultiplierTabIcons } from "./icons";

// See index.js for documentation
export const infinities = {
  total: {
    name: "Infinities gained per Crunch",
    isBase: true,
    multValue: () => gainedInfinities(),
    // The earliest sources of infinity multipliers, where I think is worth showing the tab for,
    // are ach87 and TS32, which may happen in either order
    isActive: () => (Achievement(87).isUnlocked || PlayerProgress.eternityUnlocked()) &&
      !EternityChallenge(4).isRunning && !Pelle.isDoomed && !CursedRow(11).isCursed,
    overlay: ["∞", "<i class='fa-solid fa-arrows-rotate' />"],
  },
  achievement: {
    name: "Achievements",
    multValue: () => DC.D1.timesEffectsOf(
      Achievement(33),
      Achievement(33).enhancedEffect,
      Achievement(87),
      Achievement(87).enhancedEffect,
      Achievement(102).enhancedEffect.effects.multiplier,
      Achievement(131).effects.infinitiesGain,
      Achievement(131).enhancedEffect.effects.infinitiesGain,
      Achievement(164),
      Achievement(172).effects.infinityMultiplier,
    ),
    isActive: () => Achievement(33).isUnlocked,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  timeStudy: {
    name: "Time Study 32",
    multValue: () => TimeStudy(32).effectOrDefault(1),
    isActive: () => TimeStudy(32).isBought,
    icon: MultiplierTabIcons.TIME_STUDY,
  },
  amplifierInf: {
    name: "Reality Upgrade - Boundless Amplifier",
    multValue: () => DC.D1.timesEffectsOf(RealityUpgrade(5)),
    isActive: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  realityUpgrades: {
    name: "Reality Upgrade - Innumerably Construct",
    multValue: () => DC.D1.timesEffectsOf(RealityUpgrade(7)),
    isActive: () => PlayerProgress.realityUnlocked(),
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  glyph: {
    name: "Equipped Glyphs",
    multValue: () => getAdjustedGlyphEffect("infinityinfmult"),
    isActive: () => PlayerProgress.realityUnlocked(),
    icon: MultiplierTabIcons.GENERIC_GLYPH,
  },
  ra: {
    name: "Ra Upgrade - Multiplier based on TT",
    multValue: () => Ra.unlocks.continuousTTBoost.effects.infinity.effectOrDefault(1),
    isActive: () => Ra.unlocks.continuousTTBoost.isUnlocked,
    icon: MultiplierTabIcons.GENERIC_RA,
  },
  singularity: {
    name: "Singularity Milestone - Power from Singularities",
    powValue: () => SingularityMilestone.infinitiedPow.effectOrDefault(1),
    isActive: () => SingularityMilestone.infinitiedPow.canBeApplied,
    icon: MultiplierTabIcons.SINGULARITY,
  },
};
