import { DC } from "./constants";
import FullScreenAnimationHandler from "./full-screen-animation-handler";

export function bigCrunchAnimation() {
  FullScreenAnimationHandler.display("a-implode", 2);
}

function handleChallengeCompletion() {
  const challenge = Player.antimatterChallenge;
  if (!challenge && !NormalChallenge(1).isCompleted) {
    NormalChallenge(1).complete();
  }
  if (!challenge) return;

  // Clear the IC notification after the first completion (only) so that it can show it again for the next one
  const inIC = InfinityChallenge.isRunning;
  if (inIC && !InfinityChallenge.current.isCompleted) TabNotification.ICUnlock.clearTrigger();

  challenge.complete();
  challenge.updateChallengeTime();
  if (!player.options.retryChallenge) {
    player.challenge.normal.current = 0;
    player.challenge.infinity.current = 0;
  }
}

export function manualBigCrunchResetRequest() {
  if (!Player.canCrunch) return;
  if (GameEnd.creditsEverClosed) return;
  // We show the modal under two conditions - on the first ever infinity (to explain the mechanic) and
  // post-break (to show total IP and infinities gained)
  if (player.options.confirmations.bigCrunch && (!PlayerProgress.infinityUnlocked() || player.break)) {
    Modal.bigCrunch.show();
  } else {
    bigCrunchResetRequest();
  }
}

export function bigCrunchResetRequest(disableAnimation = false) {
  if (!Player.canCrunch) return;
  if (!disableAnimation && player.options.animations.bigCrunch && !FullScreenAnimationHandler.isDisplaying) {
    bigCrunchAnimation();
    setTimeout(bigCrunchReset, 1000);
  } else {
    bigCrunchReset();
  }
}

export function bigCrunchReset(
  forced = false,
  enteringAntimatterChallenge = Player.isInAntimatterChallenge && player.options.retryChallenge,
  enteringC10OrIC1 = false // This one is very specifically for my r53 to work correctly
) {
  if (!forced && !Player.canCrunch) return;

  if (Player.canCrunch) {
    EventHub.dispatch(GAME_EVENT.BIG_CRUNCH_BEFORE);
    bigCrunchGiveRewards();
    if (Pelle.isDoomed) PelleStrikes.infinity.trigger();
  }

  bigCrunchResetValues(enteringAntimatterChallenge, enteringC10OrIC1);
  EventHub.dispatch(GAME_EVENT.BIG_CRUNCH_AFTER);
}

function bigCrunchGiveRewards() {
  bigCrunchUpdateStatistics();

  const infinityPoints = gainedInfinityPoints();
  Currency.infinityPoints.add(infinityPoints);
  Currency.infinities.add(gainedInfinities().round());

  bigCrunchTabChange(!PlayerProgress.infinityUnlocked());
  bigCrunchCheckUnlocks();
}

function bigCrunchUpdateStatistics() {
  player.records.bestInfinity.bestIPminEternity =
    player.records.bestInfinity.bestIPminEternity.clampMin(player.records.thisInfinity.bestIPmin);
  player.records.thisInfinity.bestIPmin = DC.D0;

  // Since this stat is only used for the offline Infinity milestone, and r145 caps that,
  // I can change this variable to reflect that. 
  player.records.thisEternity.bestInfinitiesPerMs = player.records.thisEternity.bestInfinitiesPerMs.clampMin(
    gainedInfinities().round().dividedBy(Math.clampMin(33, player.records.thisInfinity.realTime * !Achievement(145).canBeApplied))
  );

  const infinityPoints = gainedInfinityPoints();

  addInfinityTime(
    player.records.thisInfinity.time,
    player.records.thisInfinity.realTime,
    infinityPoints,
    gainedInfinities().round()
  );

  player.records.bestInfinity.time =
    Math.min(player.records.bestInfinity.time, player.records.thisInfinity.time);
  player.records.bestInfinity.realTime =
    Math.min(player.records.bestInfinity.realTime, player.records.thisInfinity.realTime);

  player.requirementChecks.reality.noInfinities = false;

  if (!player.requirementChecks.infinity.maxAll) {
    const bestIpPerMsWithoutMaxAll = infinityPoints.dividedBy(Math.clampMin(33, player.records.thisInfinity.realTime));
    player.records.thisEternity.bestIPMsWithoutMaxAll =
      Decimal.max(bestIpPerMsWithoutMaxAll, player.records.thisEternity.bestIPMsWithoutMaxAll);
  }
}

function bigCrunchTabChange(firstInfinity) {
  const earlyGame = player.records.bestInfinity.time > 60000 && !player.break;
  const inAntimatterChallenge = Player.isInAntimatterChallenge;
  handleChallengeCompletion();

  if (firstInfinity) {
    Tab.infinity.upgrades.show();
  } else if (earlyGame || (inAntimatterChallenge && !player.options.retryChallenge)) {
    Tab.dimensions.antimatter.show();
  }
}

export function bigCrunchResetValues(enteringAntimatterChallenge, enteringC10OrIC1) {
  const currentReplicanti = Replicanti.amount;
  const currentReplicantiGalaxies = player.replicanti.galaxies;
  // For unknown reasons, everything but keeping of RGs (including resetting of RGs)
  // is done in the function called below. For now, we're just trying to keep
  // code structure similar to what it was before to avoid new bugs.
  secondSoftReset(enteringAntimatterChallenge, enteringC10OrIC1);

  let remainingGalaxies = 0;
  if (Achievement(95).isUnlocked && !Achievement(95).isCursed && !Pelle.isDoomed) {
    Replicanti.amount = currentReplicanti;
    remainingGalaxies += Achievement(95).isEnhanced ? Math.ceil(currentReplicantiGalaxies / 2) :
      Math.min(currentReplicantiGalaxies, 1);
  }
  if (TimeStudy(33).isBought && !Pelle.isDoomed) {
    remainingGalaxies += Math.floor(currentReplicantiGalaxies / 2);
  }

  if (PelleUpgrade.replicantiGalaxyNoReset.canBeApplied) {
    remainingGalaxies = currentReplicantiGalaxies;
  }
  if (Achievement(115).isEnhanced) {
    Replicanti.amount = currentReplicanti;
    remainingGalaxies = currentReplicantiGalaxies;
  }
  // I don't think this Math.clampMax is technically needed, but if we add another source
  // of keeping Replicanti Galaxies then it might be... like my Er95!
  player.replicanti.galaxies = Math.clampMax(remainingGalaxies, currentReplicantiGalaxies);
}

function bigCrunchCheckUnlocks() {
  if (EternityChallenge(4).tryFail()) return;

  if (Effarig.isRunning && !EffarigUnlock.infinity.isUnlocked) {
    EffarigUnlock.infinity.unlock();
    beginProcessReality(getRealityProps(true));
  }
}

export function secondSoftReset(enteringAntimatterChallenge, enteringC10OrIC1) {
  Player.resetRequirements("infinity");
  // Er115 makes Infinities no longer reset anything
  if (Achievement(115).isEnhanced && !enteringAntimatterChallenge && !enteringC10OrIC1) {
    return;
  }
  // r115 keeps up to 200 dim boosts and 50 galaxies, but only if their
  // respective autobuyers are on.
  if (Achievement(115).canBeApplied) {
    player.dimensionBoosts = Autobuyer.dimboost.isActive && player.auto.autobuyersOn ? 
      Math.clampMax(player.dimensionBoosts, 200) : 0;
    player.galaxies = Autobuyer.galaxy.isActive && player.auto.autobuyersOn ? 
      Math.clampMax(player.galaxies, 50) : 0;
  } else {
    player.dimensionBoosts = 0;
    player.galaxies = 0;
    player.records.timeWithExcessIPowerProd = 0;
  }
  
  if (enteringC10OrIC1) GameCache.increasePerDimBoost.invalidate();
  player.records.timeSinceLastReset = 0;
  player.records.thisInfinity.time = 0;
  player.records.thisInfinity.lastBuyTime = 0;
  player.records.thisInfinity.realTime = 0;
  player.records.thisInfinity.maxAM = DC.D0;
  player.records.timeWithExcessAMProd = 0;
  Currency.antimatter.reset();
  softReset(0, true, true, enteringAntimatterChallenge, enteringC10OrIC1);
  if (!Achievement(115).isEffectActive) InfinityDimensions.resetAmount();
  if (player.replicanti.unl) Replicanti.amount = DC.D1;
  player.replicanti.galaxies = 0;
  //AchievementTimers.marathon2.reset();
}

export function preProductionGenerateIP(diff) {
  if (InfinityUpgrade.ipGen.isBought) {
    const genPeriod = Achievement(145).canBeApplied ? 6e-306 : Time.bestInfinity.totalMilliseconds * 10;
    let genCount;
    if (diff >= 1e300 * genPeriod) {
      genCount = Decimal.div(diff, genPeriod);
    } else {
      // Partial progress (fractions from 0 to 1) are stored in player.partInfinityPoint
      player.partInfinityPoint += diff / genPeriod;
      genCount = Math.floor(player.partInfinityPoint);
      player.partInfinityPoint -= genCount;
    }
    let gainedPerGen = player.records.bestInfinity.time >= 999999999999 && !Achievement(145).canBeApplied
     ? DC.D0 : InfinityUpgrade.ipGen.effectValue;
    if (Laitela.isRunning) gainedPerGen = dilatedValueOf(gainedPerGen);
    const gainedThisTick = new Decimal(genCount).times(gainedPerGen);
    Currency.infinityPoints.add(gainedThisTick);
  }
  Currency.infinityPoints.add(BreakInfinityUpgrade.ipGen.effectOrDefault(DC.D0).times(diff / 60000));
}
