import classes from "./InputForm.module.css";
import ModalLayout from "./UI/ModalLayout";
import { useState } from "react";

const InputForm = ({ additionOfVotesABC, hideInputFormABC }) => {

    const [classMateName, setClassMateName] = useState();

    const [electedPerson, setElectedPerson] = useState();

    const handlerOnChangeName = (event) => {
        console.log(event.target.value);
        setClassMateName(event.target.value);
    }

    const handlerOnChangeOption = (event) => {
        // console.log(event.target);
        // console.log(event.target.options);
        const selectedOption = event.target.options[event.target.selectedIndex].text;
        console.log(selectedOption);
        setElectedPerson(selectedOption);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('vote given to');
        // additionOfVotesABC(classMateName, electedPerson);
        const objectPersons = {
            id: Math.random(),
            name: classMateName,
            candidate: electedPerson,
        }
        additionOfVotesABC(objectPersons);
        setClassMateName('');
        setElectedPerson('');
    }

    return <ModalLayout hideInputFormABC={hideInputFormABC}>
        <form onSubmit={formSubmitHandler} className={classes.form_class}>
            <label htmlFor="studentName"> Student Name </label>
            <input type="text"
                name="studentName"
                id="studentName"
                onChange={handlerOnChangeName}
                value={classMateName}
                placeholder="enter your name"
            />


            <label htmlFor="chooseMonitor"> Choose Monitor : </label>
            <select
                name="chooseMonitor"
                id="chooseMonitor"
                onChange={handlerOnChangeOption}
                value={electedPerson}
                className={classes.selector}
            >
                <option value="none"> None </option>
                <option value="Varun"> Varun </option>
                <option value="Jimmy"> Jimmy </option>
                <option value="Umar"> Umar </option>
            </select>

            <button type="submit" className={classes.btn_vote}> Vote </button>
            <button onClick={hideInputFormABC}
                className={classes.hide_form}> X </button>
        </form>

    </ModalLayout>
}

export default InputForm;