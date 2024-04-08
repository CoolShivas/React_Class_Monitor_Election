import { useContext } from "react";
import { ElectionContext } from "../store/ElectionContext";

const AppName = () => {

    const { publicVoters, showInputForm } = useContext(ElectionContext);

    const totalVotes = publicVoters.length;

    return <>
        <center>
            <h1> Class Monitor Election
            </h1>
            <h3> Total votes = {totalVotes} </h3>
            <button onClick={showInputForm}> add new vote </button>
        </center>
    </>
}

export default AppName;