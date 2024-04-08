const AppName = ({ publicVotersABC, showInputFormABC }) => {

    const totalVotes = publicVotersABC.length;

    return <>
        <center>
            <h1> Class Monitor Election
            </h1>
            <h3> Total votes = {totalVotes} </h3>
            <button onClick={showInputFormABC}> add new vote </button>
        </center>
    </>
}

export default AppName;