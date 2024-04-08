import { useContext } from "react";
import DisplayData from "./components/DisplayData";
import InputForm from "./components/InputForm";
import AppName from "./components/AppName";
import { useState } from "react";
import { ElectionContext } from "./store/ElectionContext";



function App() {

  const [publicVoters, setPublicVoters] = useState([]);

  const [dropBox, setDropBox] = useState(false);

  const showInputForm = () => {
    setDropBox(true);
  }

  const hideInputForm = () => {
    setDropBox(false);
  }

  const additionOfVotes = (newVote) => {
    setPublicVoters((oldVotes) => {
      return [...oldVotes, newVote]
    })
  }

  const subtractionOfVotes = (withdrawlVote) => {
    console.log('votes subtracted');
    const removeVote = publicVoters.filter((rst) => {
      return rst.name !== withdrawlVote;
    })
    setPublicVoters(removeVote);
  }

  return <ElectionContext.Provider value={{
    publicVoters: publicVoters,
    showInputForm: showInputForm,
    additionOfVotes: additionOfVotes,
    hideInputForm: hideInputForm,
    subtractionOfVotes: subtractionOfVotes,
  }}>
    <header>
      <AppName
      // publicVotersABC={publicVoters}
      // showInputFormABC={showInputForm}
      ></AppName>
    </header>

    <main>
      {dropBox && <InputForm
        additionOfVotesABC={additionOfVotes}
        hideInputFormABC={hideInputForm}
      ></InputForm>}
    </main>

    <footer>
      <DisplayData
      // publicVotersABC={publicVoters}
      // subtractionOfVotesABC={subtractionOfVotes}
      ></DisplayData>
    </footer>
  </ElectionContext.Provider>
}

export default App;