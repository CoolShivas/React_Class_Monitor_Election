

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
        <ul>
            {publicVotersABC.map((arr) => {
                return <li key={arr.name}>
                    {arr.voter}
                </li>
            })}
        </ul>
    </>
}

export default DisplayData;