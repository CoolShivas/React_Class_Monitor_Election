import { useContext } from "react";
import { ElectionContext } from "../store/ElectionContext";


const DisplayData = () => {

    const { publicVoters, subtractionOfVotes } = useContext(ElectionContext);


    const standingCandidates = {
        Varun: [],
        Jimmy: [],
        Umar: [],
    };

    publicVoters.forEach((arr) => {
        standingCandidates[arr.candidate].push(arr.name);
    })

    return <>
        <h2> Nominated Candidates are :- </h2>
        <ul>

            {Object.keys(standingCandidates).map((brr) => {
                return <li key={brr}>

                    <h3> {brr} :- </h3>
                    <ul>
                        {standingCandidates[brr].map((crr) => {
                            return <li key={crr}>
                                {crr}
                                <button onClick={() => { subtractionOfVotes(crr) }}> Cancel </button>
                            </li>
                        })}
                    </ul>

                    Total vote : {standingCandidates[brr].length}

                </li>
            })}

        </ul>
    </>
}

export default DisplayData;