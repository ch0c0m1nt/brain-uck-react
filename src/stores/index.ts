import { Dispatch, SetStateAction } from "react";

const STEPS_LIMIT = 200_000;

export interface AppState {
  source: string;
  tape: number[];
  head: number;
  char: string;
  output: string[];
  enabled: boolean;
  steps: number;
}

export const initialState: AppState = {
  source:
    `Prints hello world sample: ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++++++++++++++.------------.<<+++++++++++++++.>.+++.------.--------.>+.`.trim(),
  tape: Array(100).fill(0),
  head: 0,
  char: "",
  output: [],
  enabled: true,
  steps: 0,
};

function delay(msec: number) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

export async function runCode(
  state: AppState,
  setState: Dispatch<SetStateAction<AppState>>
) {
  setState({
    ...state,
    char: initialState.char,
    output: [...initialState.output],
    enabled: false,
    steps: initialState.steps,
  });

  let source = state.source;
  let head = initialState.head;
  let tape = [...initialState.tape];

  let ptr = head;
  let mem = tape;
  let steps = initialState.steps;

  // stack for nested loop
  let braces: number[] = [];

  for (let i = 0; i < source.length; i++) {
    steps += 1;
    let ch = source.charAt(i);
    setState((prev) => ({ ...prev, char: ch }));

    switch (ch) {
      case ">": // mov right (head += 1)
        if (ptr > 99) {
          ptr = 99;
        } else {
          ptr += 1;
        }
        break;
      case "<": // mov left (head -= 1)
        if (ptr <= 0) {
          ptr = 0;
        } else {
          ptr -= 1;
        }
        break;
      case "+": // add (tape[head] += 1)
        if (mem[ptr] >= 0xff) {
          mem[ptr] = 0xff;
        } else {
          mem[ptr] += 1;
        }
        break;
      case "-": // sub (tape[head] -= 1)
        if (mem[ptr] <= 0) {
          mem[ptr] = 0;
        } else {
          mem[ptr] -= 1;
        }
        break;
      case ".": // syscall 1 (print tape[head])
        setState((prev) => ({
          ...prev,
          output: prev.output.concat(String.fromCharCode(mem[ptr])),
        }));
        break;
      case "[": // jmp right brace when value is 0 (if tape[head] === 0 goto ])
        if (mem[ptr] === 0) {
          // level: stores a nested factor
          let level = 1;

          while (level > 0) {
            i += 1;
            const ch2 = source.charAt(i);

            // have a nested [ then level + 1
            // or have a nested ] then level - 1
            // else level is zero exit while loop
            if (ch2 === "[") {
              level += 1;
            } else if (ch2 === "]") {
              level -= 1;
            }
          }
        } else {
          // push stack a "[" position
          braces.push(i);
        }

        break;
      case "]": // jmp left brace when value is not 0  (if tape[head] !== 0 goto [)
        if (mem[ptr] !== 0) {
          // go to the loop start point
          i = braces[braces.length - 1];
        } else {
          // get rid a latest [ position
          braces.pop();
        }
        break;
      default: // other characters doesn't do anything
        break;
    }

    setState((prev) => ({ ...prev, head: ptr, tape: [...mem], steps }));

    if (steps >= STEPS_LIMIT) {
      break;
    }

    // set a processing delay
    await delay(0);
  }

  // set a button unlock delay
  await delay(125);
  setState((prev) => ({ ...prev, enabled: true }));
}
