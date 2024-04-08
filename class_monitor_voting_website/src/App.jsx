import InputForm from "./components/InputForm";
import AppName from "./components/AppName";
import { useState } from "react";



function App() {

  const [publicVoters, setPublicVoters] = useState([]);

  const additionOfVotes = (giveVote, receiveVote) => {
    console.log(giveVote, 'votes gives to', receiveVote);
  }

  const subtractionOfVotes = () => {
    console.log('votes subtracted');
  }

  return <>
    <header>
      <AppName></AppName>
    </header>

    <main>
      <InputForm additionOfVotesABC={additionOfVotes}></InputForm>
    </main>

    <footer></footer>
  </>
}

export default App;