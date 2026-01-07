import styles from "./ValueDisplay.module.css";

interface ValueDisplayProps {
  head: number;
  char: string;
  steps: number;
}

export default function ValueDisplay({ head, char, steps }: ValueDisplayProps) {
  return (
    <div className="card bg-info">
      <h3>
        HEAD: <span className={styles.valueDisplay}>{head}</span>, CODE:{" "}
        <span className={styles.codeDisplay}>"{char}"</span>, STEPS:{" "}
        <span className={styles.stepsDisplay}>{steps}</span>
      </h3>
    </div>
  );
}
