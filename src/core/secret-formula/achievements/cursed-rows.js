import { DC } from "../../constants";

export const cursedRows = [
  {
		id: 1,
		get curse() { return `All Antimatter Dimensions have much higher initial costs, and their initial cost 
			scaling is increased to ${format(Decimal.NUMBER_MAX_VALUE, 1, 0)}.` },
  },
	{
		id: 2,
		get curse() { return `Antimatter Galaxies require ${formatInt(20)} more Dimensions per Galaxy, and
			Distant cost scaling starts ${formatInt(1000)} Galaxies earlier.` },
		effects: {
			perGalaxyIncrease: -20,
			distantGalaxyStart: -1000
		}	
	},
	{
		id: 3,
		get curse() { return `Divide starting tick speed by ${formatPostBreak(DC.E1E6)}.` },
		effect: DC.E1E6
	},
	{
		id: 4,
		curse: "8th Antimatter Dimensions are weaker based on the product of all your " +
			"AD amounts.",
		effect: () => Decimal.min(AntimatterDimension(1).amount.times(AntimatterDimension(2).amount.times(AntimatterDimension(3).
    	amount.times(AntimatterDimension(4).amount.times(AntimatterDimension(5).amount.times(AntimatterDimension(6).amount.times(
    	AntimatterDimension(7).amount)))))).plus(1).pow(-0.001), 1),
			formatEffect: value => `/${format(value.recip(), 2, 2)}`
	},
	{
		id: 5,
		curse: "Dimension Boosts only affect ADs 1-4.",
	},
	{
		id: 6,
		curse: "Dimension Autobuyer bulk is unlimited, but 1st AD gets an exponentially decreasing nerf " +
		"that resets on Dimension Boosts, Antimatter Galaxies, and Infinities.",
		effect: () => DC.D1_00038.pow(Math.pow(Time.timeSinceLastReset.totalSeconds, 0.07))
			.times(DC.E2E7.recip()).clampMax(DC.D1),
		formatEffect: value => `${formatInt(1)}/${format(value.recip(), 2, 2)}`
	},
	{
		id: 7,
		curse: "Infinity Power divides IP gain at a reduced rate.",
		effect: () => Decimal.pow(Currency.infinityPower.value.add(1), -0.01).clampMax(1),
    formatEffect: value => `${formatInt(1)}/${format(value.recip(), 2, 2)}`,
	},
	{
		id: 8,
		get curse() { return `All Galaxies are ${formatPercents(0.15)} weaker.` },
		effect: 0.85,
	},
	{
		id: 9,
		get curse() { return `Raise Infinity Dimension and Replicanti Upgrade cost by ${formatPow(1.25, 2, 2)}.` },
		effect: 1.25
	},
	{
		id: 10,
		get curse() { return `Replicanti production stops if you have a purchased Replicanti Galaxy.`},
		effect: 0,
		effectCondition: () => Replicanti.galaxies.bought > 0
	},
	{
		id: 11,
		get curse() { return `You can no longer gain Infinities nor Eternities, and disable IC6's reward.` },
		effect: 0
	},
	{
		id: 12,
		get curse() { return `Time Dimensions are raised by ${formatPow(-0.002, 3, 3)} for every Time Study purchased.`},
		effect: () => 1 - 0.002 * player.timestudy.studies.length,
		formatEffect: value => `${formatPow(value, 3, 3)}`
	},
	{
		id: 13,
		curse: "Remove the downsides of Time Studies 131 and 133, but Infinity Challenges have a much higher unlock requirement, " +
			"and you only generate Time Theorems and Dilated Time while Dilated.",
		effect: 0,
		effectCondition: () => !player.dilation.active
	},
	// I don't plan to include cursed rows 14-18, but having them defined avoids 'undefined' issues
	// when I attempt to call CursedRow(x) that doesn't exist. If there's no 'curse' they should be innaccesible
	{
		id: 14
	},
	{
		id: 15
	},
	{
		id: 16
	},
	{
		id: 17
	},
	{
		id: 18
	},
]