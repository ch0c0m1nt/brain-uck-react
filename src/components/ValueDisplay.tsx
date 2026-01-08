import styled from "styled-components";

interface ValueDisplayProps {
  head: number;
  char: string;
  steps: number;
}

const Value = styled.span`
  display: inline-block;
  width: 1rem;
  text-align: right;
`;

const Code = styled.span`
  display: inline-block;
  width: 2.5rem;
  text-align: right;
`;

const Steps = styled.span`
  display: inline-block;
  width: 5rem;
  text-align: right;
`;

export default function ValueDisplay({ head, char, steps }: ValueDisplayProps) {

  return (
    <div className="card bg-info">
      <h3>
        HEAD: <Value>{head}</Value>, 
        CODE:{" "}<Code>"{char}"</Code>,
        STEPS:{" "}<Steps>{steps}</Steps>
      </h3>
    </div>
  );
}
