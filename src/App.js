import { useState } from "react";
import "./styles.css";

const emojiDict = {
  "ð": "see no evil monkey",
  "ð": "hear no evil monkey",
  "ð": "speak no evil monkey",
  "ðµ": "monkey face",
  "ð": "monkey",
  "ð¦": "gorilla",
  "ð¦§": "orangutan",
  "ð": "banana",
  "ð´": "palm tree",
  "ðï¸": "looking forward to"
};

const mojiList = Object.keys(emojiDict);

export default function App() {
  const [inputText, setInputText] = useState("");
  const [meaning, setMeaning] = useState("");

  function inputTextHandler(event) {
    var meaning = "";
    var monkeyMoji = event.target.value;
    if (monkeyMoji in emojiDict) {
      setMeaning(emojiDict[monkeyMoji]);
    } else {
      setMeaning("This is not present in our database! ðµ");
    }
    setInputText(event.target.value);
  }

  function mojiClickHandler(moji) {
    var meaning = emojiDict[moji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Monkey ðµMoji</h1>
      <input onChange={inputTextHandler}></input>
      <div className="Output"> {meaning} </div>
      <div className="AnimalList">
        <h3>Mojis we know</h3>
        {mojiList.map((moji) => {
          return (
            <span
              onClick={() => mojiClickHandler(moji)}
              className="Moji"
              key={moji}
            >
              {" "}
              {moji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
