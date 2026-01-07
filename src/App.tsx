import { useState } from "react";

import NavBar from "./components/NavBar";
import CodeInput from "./components/CodeInput";
import ValueDisplay from "./components/ValueDisplay";
import TapeTable from "./components/TapeTable";
import OutputConsole from "./components/OutputConsole";

import { AppState, initialState, runCode } from "./stores";

export default function App() {
  const [state, setState] = useState<AppState>({ ...initialState });

  function codeChangeHandler(e: any): void {
    setState((prev) => ({
      ...prev,
      source: (e.target as any).value,
    }));
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <hr />

        <CodeInput
          source={state.source}
          enabled={state.enabled}
          onCodeChange={codeChangeHandler}
          onRunClick={() => runCode(state, setState)}
        />

        <hr />

        <ValueDisplay head={state.head} char={state.char} steps={state.steps} />

        <hr />

        <TapeTable tape={state.tape} head={state.head} />

        <hr />

        <OutputConsole output={state.output} />
      </div>
    </>
  );
}
