import {
    brzycki1RM,
    epley1RM,
    lander1RM,
    lombardi1RM,
    oconner1RM,
} from "./RepMaxFunctions";
import { Combined1RepMax } from "../Types/WeightReturnTypes";

export function GetCombined1RepMax(reps: number, weight: number) {
    const brzycki = brzycki1RM(reps, weight);
    const epley = epley1RM(reps, weight);
    const lander = lander1RM(reps, weight);
    const lombardi = lombardi1RM(reps, weight);
    const oconner = oconner1RM(reps, weight);

    const rounded1repmax =
        Math.round(((brzycki + epley + lander + lombardi + oconner) / 5) * 10) /
        10;

    const combinedValues: Combined1RepMax = {
        Estimated1RepMax: rounded1repmax,
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
