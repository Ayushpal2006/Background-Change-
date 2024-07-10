import { useCallback, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharacterAllowed, setIsSpecialCharacterAllowed] =
    useState(false);
  const [password, setPassword] = useState("");

  const generator = useCallback(() => {
    var pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) {
      str += "0123456789";
    }
    if (isSpecialCharacterAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (var i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [lenght, isNumberAllowed, isSpecialCharacterAllowed, setPassword]);

  useEffect(() => {
    generator();
  }, [lenght, isNumberAllowed, isSpecialCharacterAllowed, generator]);

  const passwordRef = useRef(null);

  function copyToClipboard(e) {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-5">
        <input type="text" value={password} placeholder="password" readOnly ref={passwordRef}/>
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name="length"
            id="length"
            min={6}
            max={100}
            value={lenght}
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          <label htmlFor="length">Lenght :{lenght}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name="number"
            id="number"
            onChange={(e) => {
              setIsNumberAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="number"> Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name="char"
            id="char"
            onChange={(e) => {
              setIsSpecialCharacterAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="char"> Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
