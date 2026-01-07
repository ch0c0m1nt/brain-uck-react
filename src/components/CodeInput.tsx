interface CodeInputProps {
  source: string;
  enabled: boolean;

  onCodeChange: (e: any) => void;
  onRunClick: () => void;
}

export default function CodeInput({
  source,
  enabled,
  onCodeChange,
  onRunClick,
}: CodeInputProps) {
  return (
    <div className="card bg-info">
      <div className="card-header">CODE</div>
      <div className="card-body">
        <textarea
          className="center"
          value={source}
          style={{ width: "100%", height: "10rem" }}
          onChange={onCodeChange}
        ></textarea>
        <br />
      </div>
      <button
        className="btn btn-secondary text-center"
        type="button"
        onClick={onRunClick}
        disabled={!enabled}
      >
        Run
      </button>
    </div>
  );
}
