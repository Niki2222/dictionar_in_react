import React from 'react';

let wordsList = ["word", "year"];
let foundWord = document.getElementById('foundWord');

function ShowSearchedWord(props) {
  const {element} = props;
  console.log(foundWord);
  foundWord.style.display = "block";
  return (
    <table class="table">
      <thead>
      <tr>
        <th>Searched word</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>${element}</td>
      </tr>
      </tbody>
    </table>
  )
}

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

function searchWord() {
  let searchedWord = document.getElementById('wordToSearch').value.toLocaleLowerCase();
  if (searchedWord.length === 0) {
    document.getElementById('wordToSearch').placeholder = "please enter a word you are looking for";
    foundWord.style.display = "none";
  }
  if (wordsList.includes(searchedWord)) {
    console.log(wordsList);
    <ShowSearchedWord element={searchedWord}/>
  }
  if (!wordsList.includes(searchedWord)) {
    addWord(searchedWord);
  }
}  

function SearchWords() {
  return (
    <>
      <div><input id='wordToSearch' type='text'></input></div>
      <button className='searching' onClick={searchWord}>Search word</button>
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
