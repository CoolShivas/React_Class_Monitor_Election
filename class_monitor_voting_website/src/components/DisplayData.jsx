

const DisplayData = ({ publicVotersABC }) => {

    const standingCandidates = {
        Varun: [],
        Jimmy: [],
        Umar: [],
    };

    publicVotersABC.forEach((arr) => {
        standingCandidates[arr.candidate].push(arr.name);
    })

    return <>
        <h2> Nominated Candidates are :- </h2>
        <ul>

            {Object.keys(standingCandidates).map((brr) => {
                return <li key={brr}>
                    <h3> {brr} </h3>
                </li>
            })}

        </ul>
    </>
}

export default DisplayData;