// Brzycki Formula
export function brzycki1RM(reps: number, weight: number) {
    return reps === 1 ? weight : (weight * 36) / (37 - reps);
}

// Epley Formula
export function epley1RM(reps: number, weight: number) {
    return reps === 1 ? weight : weight * (1 + reps / 30);
}

// Lander Formula
export function lander1RM(reps: number, weight: number) {
    return reps === 1 ? weight : (100 * weight) / (101.3 - 2.67123 * reps);
}

// Lombardi Formula
export function lombardi1RM(reps: number, weight: number) {
    return reps === 1 ? weight : weight * Math.pow(reps, 0.1);
}

// O'Conner Formula
export function oconner1RM(reps: number, weight: number) {
    return reps === 1 ? weight : weight * (1 + 0.025 * reps);
}

// Brzycki Formula (Solve for weight)
export function brzyckiWeight(oneRM: number, reps: number) {
    return reps === 1 ? oneRM : (oneRM * (37 - reps)) / 36;
}

// Epley Formula (Solve for weight)
export function epleyWeight(oneRM: number, reps: number) {
    return reps === 1 ? oneRM : oneRM / (1 + reps / 30);
}

// Lander Formula (Solve for weight)
export function landerWeight(oneRM: number, reps: number) {
    return reps === 1 ? oneRM : (oneRM * (101.3 - 2.67123 * reps)) / 100;
}

// Lombardi Formula (Solve for weight)
export function lombardiWeight(oneRM: number, reps: number) {
    return reps === 1 ? oneRM : oneRM / Math.pow(reps, 0.1);
}

// O'Conner Formula (Solve for weight)
export function oconnerWeight(oneRM: number, reps: number) {
    return reps === 1 ? oneRM : oneRM / (1 + 0.025 * reps);
}
