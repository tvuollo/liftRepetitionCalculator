import {
    brzycki1RM,
    brzyckiWeight,
    epley1RM,
    epleyWeight,
    lander1RM,
    landerWeight,
    lombardi1RM,
    lombardiWeight,
    oconner1RM,
    oconnerWeight,
} from "./RepMaxFunctions";
import {
    CombinedWeightCalculation,
    CombinedWeightCalculations,
    NamedCalculation,
} from "../Types/WeightReturnTypes";

export function GetCombined1RepMax(reps: number, weight: number) {
    const brzycki = brzycki1RM(reps, weight);
    const epley = epley1RM(reps, weight);
    const lander = lander1RM(reps, weight);
    const lombardi = lombardi1RM(reps, weight);
    const oconner = oconner1RM(reps, weight);

    const rounded1repmax =
        Math.round(((brzycki + epley + lander + lombardi + oconner) / 5) * 10) /
        10;

    const combinedValues: CombinedWeightCalculation = {
        Average: rounded1repmax,
        Formulas: {
            Brzycki: Math.round(brzycki * 10) / 10,
            Epley: Math.round(epley * 10) / 10,
            Lander: Math.round(lander * 10) / 10,
            Lombardi: Math.round(lombardi * 10) / 10,
            OConner: Math.round(oconner * 10) / 10,
        },
    };

    return combinedValues;
}

export function GetCombinedWeightForReps(repMax: number, reps: number) {
    const brzycki = brzyckiWeight(repMax, reps);
    const epley = epleyWeight(repMax, reps);
    const lander = landerWeight(repMax, reps);
    const lombardi = lombardiWeight(repMax, reps);
    const oconner = oconnerWeight(repMax, reps);

    const roundedCalculatedWeight =
        Math.round(((brzycki + epley + lander + lombardi + oconner) / 5) * 10) /
        10;

    const combinedValues: CombinedWeightCalculation = {
        Average: roundedCalculatedWeight,
        Formulas: {
            Brzycki: Math.round(brzycki * 10) / 10,
            Epley: Math.round(epley * 10) / 10,
            Lander: Math.round(lander * 10) / 10,
            Lombardi: Math.round(lombardi * 10) / 10,
            OConner: Math.round(oconner * 10) / 10,
        },
    };

    return combinedValues;
}

export function GetWeightForReps(
    DesiredReps: number,
    PerformedReps?: number,
    PerformedWeight?: number,
    RepMax?: number,
) {
    let weightTotal = 0;
    const returnValue: CombinedWeightCalculations = {
        Average: 0,
        Calculations: [],
    };

    if (PerformedReps && PerformedWeight) {
        const calculatedRepMax = GetCombined1RepMax(
            PerformedReps,
            PerformedWeight,
        );
        const calculatedWeight = GetCombinedWeightForReps(
            calculatedRepMax.Average,
            DesiredReps,
        );
        const calculation: NamedCalculation = {
            Average: calculatedWeight.Average,
            Formulas: calculatedWeight.Formulas,
            Name: "Weight based on performed reps based calculated 1 rep max",
        };
        returnValue.Calculations.push(calculation);
        weightTotal = weightTotal + calculatedWeight.Average;
    }

    if (RepMax) {
        const calculatedWeight = GetCombinedWeightForReps(RepMax, DesiredReps);
        const calculation: NamedCalculation = {
            Average: calculatedWeight.Average,
            Formulas: calculatedWeight.Formulas,
            Name: "Weight calculated based on entered 1 rep max",
        };
        returnValue.Calculations.push(calculation);
        weightTotal = weightTotal + calculatedWeight.Average;
    }

    if (returnValue.Calculations.length > 0) {
        returnValue.Average =
            returnValue.Calculations.length > 1
                ? Math.round(
                      (weightTotal / returnValue.Calculations.length) * 10,
                  ) / 10
                : weightTotal;
        return returnValue;
    }

    return null;
}
