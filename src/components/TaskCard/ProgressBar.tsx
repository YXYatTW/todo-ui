import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  progress?: number;
}

const StyledProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: linear-gradient(270deg, #02c39a 0%, #f0f3bd 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
`;

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return <StyledProgressBar progress={progress ?? 0} />;
};

export default ProgressBar;
