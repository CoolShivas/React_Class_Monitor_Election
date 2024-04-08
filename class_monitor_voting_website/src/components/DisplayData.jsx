

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

                    <h3> {brr} :- </h3>
                    <ul>
                        {standingCandidates[brr].map((crr) => {
                            return <li key={crr}>
                                <h5> {crr} </h5>
                            </li>
                        })}
                    </ul>

                </li>
            })}

        </ul>
    </>
}

export default DisplayData;