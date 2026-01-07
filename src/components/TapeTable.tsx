import { useState } from "react";
import styles from "./TapeTable.module.css";

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
                      <td
                        className={
                          head === i * 10 + j
                            ? `${styles.tapeValues} ${styles.active}`
                            : styles.tapeValues
                        }
                        key={"td-" + (i * 10 + j)}
                      >
                        {num}
                      </td>
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
