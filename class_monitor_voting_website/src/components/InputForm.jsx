const InputForm = () => {
    return <form>
        <label htmlFor="studentName"> Student Name </label>
        <input type="text" name="studentName" id="studentName" />

        <label htmlFor="chooseMonitor"> Choose Monitor : </label>
        <select name="chooseMonitor" id="chooseMonitor">
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