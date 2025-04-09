import { useState } from "react";
import {
    CombinedWeightCalculation,
    CombinedWeightCalculations,
} from "./Types/WeightReturnTypes";
import { GetCombined1RepMax, GetWeightForReps } from "./Functions";

function App() {
    const [repMaxRepsInput, setRepMaxRepsInput] = useState<number>(0);
    const [repMaxWeightInput, setRepMaxWeightInput] = useState<number>(0);
    const [calculated1RepMax, setCalculated1RepMax] =
        useState<CombinedWeightCalculation | null>(null);

    const [weightCalcRepsInput, setWeightCalcRepsInput] = useState<number>(0);
    const [weightCalcPerformedRepsInput, setWeightCalcPerformedRepsInput] =
        useState<number>(0);
    const [weightCalcPerformedWeightInput, setWeightCalcPerformedWeightInput] =
        useState<number>(0);
    const [weightCalc1RepMax, setWeightCalc1RepMax] = useState<number>(0);
    const [calculatedWeight, setCalculatedWeight] =
        useState<CombinedWeightCalculations | null>(null);

    const Get1RepMax = () => {
        const fetched1RepMax = GetCombined1RepMax(
            repMaxRepsInput,
            repMaxWeightInput,
        );
        setCalculated1RepMax(fetched1RepMax);
    };

    const GetCalculatedWeight = () => {
        setCalculatedWeight(
            GetWeightForReps(
                weightCalcRepsInput,
                weightCalcPerformedRepsInput,
                weightCalcPerformedWeightInput,
                weightCalc1RepMax,
            ),
        );
    };

    return (
        <div>
            <h1>1 rep max calculator</h1>
            <label>
                Weight
                <input
                    onChange={(e) =>
                        setRepMaxWeightInput(Number(e.target.value))
                    }
                    name="1repmaxweight"
                    type="number"
                />
            </label>
            <br />
            <label>
                Reps
                <input
                    onChange={(e) => setRepMaxRepsInput(Number(e.target.value))}
                    name="1repmaxreps"
                    type="number"
                />
            </label>
            <br />
            <button
                disabled={repMaxRepsInput < 1 && repMaxWeightInput < 1}
                onClick={() => Get1RepMax()}
                type="button"
            >
                Calculate
            </button>
            {calculated1RepMax !== null && (
                <>
                    <h2>
                        {calculated1RepMax !== null
                            ? calculated1RepMax.Average
                            : ""}
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Brzycki</th>
                                <th>Epley</th>
                                <th>Lander</th>
                                <th>Lombardi</th>
                                <th>OConner</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{calculated1RepMax.Formulas.Brzycki}</td>
                                <td>{calculated1RepMax.Formulas.Epley}</td>
                                <td>{calculated1RepMax.Formulas.Lander}</td>
                                <td>{calculated1RepMax.Formulas.Lombardi}</td>
                                <td>{calculated1RepMax.Formulas.OConner}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
            <hr />
            <h1>Weight repetitions calculator</h1>
            <label>
                Desired reps
                <input
                    onChange={(e) =>
                        setWeightCalcRepsInput(Number(e.target.value))
                    }
                    type="number"
                />
            </label>
            <label>
                Weight
                <input
                    onChange={(e) =>
                        setWeightCalcPerformedWeightInput(
                            Number(e.target.value),
                        )
                    }
                    type="number"
                />
            </label>
            <br />
            <label>
                Reps
                <input
                    onChange={(e) =>
                        setWeightCalcPerformedRepsInput(Number(e.target.value))
                    }
                    type="number"
                />
            </label>
            <p style={{ margin: 0 }}>OR / AND</p>
            <label>
                1 rep max
                <input
                    onChange={(e) =>
                        setWeightCalc1RepMax(Number(e.target.value))
                    }
                    type="number"
                />
            </label>
            <br />
            <button onClick={() => GetCalculatedWeight()} type="button">
                Calculate
            </button>
            {calculatedWeight !== null && (
                <>
                    <h2>{calculatedWeight.Average}</h2>
                    <p>Based on:</p>
                    <ul>
                    {calculatedWeight.Calculations.map((calc) => (
                        <p key={encodeURI(calc.Name)} style={{ margin: 0 }}>
                            {calc.Name}: {calc.Average}
                        </p>
                    ))}                        
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
