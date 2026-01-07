import ScrollToBottom from "react-scroll-to-bottom";
import styles from "./OutputConsole.module.css";

interface OutputConsoleProps {
  output: string[];
}

export default function OutputConsole({ output }: OutputConsoleProps) {
  return (
    <div className="card bg-info">
      <div className="card-header">OUTPUT CONSOLE</div>
      <div className="card-body">
        <ScrollToBottom className={`container ${styles.codeBlock}`}>
          {output.map((ch, i) => (
            <span
              key={"span-" + i}
              className={i === output.length - 1 ? styles.cursor : undefined}
            >
              {ch}
            </span>
          ))}
        </ScrollToBottom>
      </div>
    </div>
  );
}
