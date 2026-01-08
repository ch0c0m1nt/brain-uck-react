import ScrollToBottom from "react-scroll-to-bottom";
import styled, { css } from "styled-components";

interface OutputConsoleProps {
  output: string[];
}

const CodeBlock = styled(ScrollToBottom)`
  background-color: black;
  color: white;
  width: 100%;
  height: 15rem;
  padding: 1rem;
  white-space: pre-wrap;
`;

const Output = styled.span<{ $cursor?: boolean }>`
    ${props => props.$cursor && css`
      background-color: white;
      color: black;  
    `}
`; 

export default function OutputConsole({ output }: OutputConsoleProps) {
  return (
    <div className="card bg-info">
      <div className="card-header">OUTPUT CONSOLE</div>
      <div className="card-body">
        <CodeBlock className="container">
          {output.map((ch, i) => (
            <Output $cursor={i === output.length - 1}
              key={"span-" + i}>
              {ch}
            </Output>
          ))}
        </CodeBlock>
      </div>
    </div>
  );
}