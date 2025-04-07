import { useState } from "react";
import { Combined1RepMax } from "./Types/WeightReturnTypes";
import { GetCombined1RepMax } from "./Functions";

function App() {
    const [repMaxRepsInput, setRepMaxRepsInput] = useState<number>(0);
    const [repMaxWeightInput, setRepMaxWeightInput] = useState<number>(0);
    const [calculated1RepMax, setCalculated1RepMax] =
        useState<Combined1RepMax | null>(null);

    const Get1RepMax = () => {
        const fetched1RepMax = GetCombined1RepMax(
            repMaxRepsInput,
            repMaxWeightInput,
        );
        setCalculated1RepMax(fetched1RepMax);
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
            <label>
                Reps
                <input
                    onChange={(e) => setRepMaxRepsInput(Number(e.target.value))}
                    name="1repmaxreps"
                    type="number"
                />
            </label>
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
                            ? calculated1RepMax.Estimated1RepMax
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
            <hr/ >
            <h1>Weight repetitions calculator</h1>
        </div>
    );
}

export default App;
