export interface CombinedWeightCalculation {
    Average: number;
    Formulas: {
        Brzycki: number;
        Epley: number;
        Lander: number;
        Lombardi: number;
        OConner: number;
    };
}

export interface NamedCalculation extends CombinedWeightCalculation {
    Name: string;
}

export interface CombinedWeightCalculations {
    Average: number;
    Calculations: NamedCalculation[];
}
