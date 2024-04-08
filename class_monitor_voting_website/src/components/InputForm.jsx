import { useState } from "react";

const InputForm = () => {

    const [classMateName, setClassMateName] = useState();

    const [electedPerson, setElectedPerson] = useState();

    const handlerOnChangeName = (event) => {
        console.log(event.target.value);
    }

    const handlerOnChangeOption = (event) => {
        // console.log(event.target);
        // console.log(event.target.options);
        const selectedOption = event.target.options[event.target.selectedIndex].text;
        console.log(selectedOption);
    }

    return <form>
        <label htmlFor="studentName"> Student Name </label>
        <input type="text"
            name="studentName"
            id="studentName"
            onChange={handlerOnChangeName}
            value={classMateName}
        />


        <label htmlFor="chooseMonitor"> Choose Monitor : </label>
        <select
            name="chooseMonitor"
            id="chooseMonitor"
            onChange={handlerOnChangeOption}
            value={electedPerson}
        >
            <option value="none"> None </option>
            <option value="Varun"> Varun </option>
            <option value="Jimmy"> Jimmy </option>
            <option value="Umar"> Umar </option>
        </select>

        <button> Vote </button>
        <button> X </button>
    </form>
}

export default InputForm;