<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ReplicantiGalaxyModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      replicanti: new Decimal(),
      minReplicanti: 1,
      divideReplicanti: false,
      doNothing: false,
      canBeBought: 0,
    };
  },
  computed: {
    topLabel() {
      return `You are about to purchase ${quantifyInt("Replicanti Galaxy", this.canBeBought)}`;
    },
    message() {
      const reductionString = this.doNothing ? `not divide or reset anything thanks to Enhancement 126` : 
        (this.divideReplicanti
          ? `divide your Replicanti by ${format(Number.MAX_VALUE, 2, 2)} for each Replicanti Galaxy purchased
            (${format(this.replicanti, 2, 2)} to
            ${format(this.replicanti.divide(Decimal.NUMBER_MAX_VALUE.pow(this.canBeBought)).clampMin(this.minReplicanti), 2, 2)})`
          : `reset your Replicanti to ${formatInt(this.minReplicanti)}`);
      return `A Replicanti Galaxy boosts Tickspeed the same way an Antimatter Galaxy does. However, it does not
        increase the cost of Antimatter Galaxies, nor is it affected by multipliers to Antimatter Galaxies specifically.
        It will ${reductionString}.`;
    }
  },
  methods: {
    update() {
      this.replicanti.copyFrom(player.replicanti.amount);
      this.minReplicanti = Achievement(108).isEnhanced ? Achievement(108).enhancedEffect.effects.minReplicanti.effectOrDefault(1) : 
        Effects.max(1, Achievement(108).effects.minReplicanti);
      this.divideReplicanti = Achievement(126).canBeApplied;
      this.doNothing = Achievement(126).isEnhanced;
      this.canBeBought = Replicanti.galaxies.gain;
      if (this.replicanti.lt(Number.MAX_VALUE)) this.emitClose();
    },
    handleYesClick() {
      replicantiGalaxy(false);
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="replicantiGalaxy"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
