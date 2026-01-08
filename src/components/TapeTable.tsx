import { useState } from "react";
import styled, { css } from "styled-components";


interface TapeTableProps {
  tape: number[];
  head: number;
}

function makeSlice<T>(arr: T[], length: number): T[][] {
  const slice: T[][] = [];
  for (let i = 0; i < length; i++) {
    const start = i * length;
    slice.push(arr.slice(start, start + length));
  }
  return slice;
}

const visibleStrings: { [_: string]: string } = {
  false: "SHOW",
  true: "HIDE",
};

const TapeValues = styled.td<{ $active?: boolean }>`
  width: 2rem;
  height: 1.2rem;
  text-align: right;

  ${props => props.$active && css`
    background-color: #cfcfef;
  `}
`;

export default function TapeTable({ tape, head }: TapeTableProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const tapeSlice: number[][] = makeSlice(tape, 10);

  return (
    <>
      <div className="card bg-info">
        <div className="card-header">
          <span>TAPE</span>
          &nbsp; &nbsp;
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setVisible(!visible)}
          >
            ({visibleStrings[String(visible)]})
          </button>
        </div>
        {visible && (
          <div className="card-body">
            <table>
              <tbody>
                {tapeSlice.map((data: number[], i) => (
                  <tr key={"tr-" + i}>
                    {data.map((num, j) => (
                      <TapeValues $active={head === i * 10 + j}
                        key={"td-" + (i * 10 + j)}
                      >
                        {num}
                      </TapeValues>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
