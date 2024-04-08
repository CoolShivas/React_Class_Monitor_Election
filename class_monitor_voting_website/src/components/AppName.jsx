import classes from "./AppName.module.css";
import { useContext } from "react";
import { ElectionContext } from "../store/ElectionContext";

const AppName = () => {

    const { publicVoters, showInputForm } = useContext(ElectionContext);

    const totalVotes = publicVoters.length;

    return <>
        <center className={classes.header}>
            <h1> Class Monitor Election
            </h1>
            <h3 className={classes.headerTotal}> Total votes = {totalVotes} </h3>
            <button onClick={showInputForm} className={classes.add_new_voteBtn}> add new vote </button>
        </center>
    </>
}

export default AppName;