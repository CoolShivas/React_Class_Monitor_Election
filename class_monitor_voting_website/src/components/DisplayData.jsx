import classes from "./DisplayData.module.css";
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
        <div className={classes.super_container}>
            <div className={classes.container}>
                <ul>

                    {Object.keys(standingCandidates).map((brr) => {
                        return <li key={brr}>

                            <h3> {brr} :- </h3>
                            <ul>
                                {standingCandidates[brr].map((crr) => {
                                    return <li key={crr}>
                                        {crr}
                                        <button onClick={() => { subtractionOfVotes(crr) }}
                                            className={classes.cancelBtn}
                                        > Cancel </button>
                                    </li>
                                })}
                            </ul>

                            Total vote : {standingCandidates[brr].length}

                        </li>
                    })}

                </ul>
            </div>
        </div>
    </>
}

export default DisplayData;