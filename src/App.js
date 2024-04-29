import React from 'react';
import ReactDOM from 'react-dom';

let wordsList = ["word", "year"];
let foundWord = document.getElementById('foundWord');
foundWord.style.display = "none";


function addWord(elem) {
  if (!wordsList.includes(elem) && elem.length > 0) {
    let answer = prompt("This word is not in the dictionary. If you want to add it, enter 'yes'?").toLocaleLowerCase();
    if (answer === "yes") {
      foundWord.style.display = "none";
      wordsList.push(elem);
    } else {
      foundWord.style.display = "none";
      document.getElementById('wordToSearch').value = "";
    }
  }
}


// function AddWord(props) {
//   const {elem} = props;
//   function handleClick(event) {
//     wordsList.push(elem);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Add item</button>
//     </>
//   )
// }

function SearchWords() {
  function searchWord() {
    let searchedWord = document.getElementById('wordToSearch').value.toLocaleLowerCase();
    if (searchedWord.length === 0) {
      document.getElementById('wordToSearch').placeholder = "please enter a word you are looking for";
      foundWord.style.display = "none";
    }
    if (wordsList.includes(searchedWord)) {
      foundWord.style.display = "block";
      foundWord.style.backgroundColor = "darkgray";
      const myWord = React.createElement('h2', {}, 'Last word searched:');
      const myWord1 = React.createElement('h1', {}, `${searchedWord}`);
      const x = React.createElement('div', {}, [myWord, myWord1]);
      ReactDOM.render(x, foundWord);
    }
    if (!wordsList.includes(searchedWord)) {
      addWord(searchedWord);
      // console.log("word not found");
      // <AddWord elem={searchWord}/>
    }
  } 

  return (
    <>
      <div className='foundWord'>
        <input id='wordToSearch' type='text'></input>
        <button className='searching' onClick={searchWord}>Search word</button>
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <SearchWords/>
    </div>
  );
}

export default App;
