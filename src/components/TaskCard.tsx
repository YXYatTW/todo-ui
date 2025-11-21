import styled from "styled-components";
import Image from "next/image";
import * as React from "react";

interface TaskCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  progress?: number;
}

const CardWrapper = styled.div`
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 3px 0 0 #b2b8c4;
`;

const CardTitleContainer = styled.div`
  width: 248px;
  height: fit-content;
`;

const CardTitle = styled.h2`
  color: #172b4d;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

const DescriptionContent = styled.p`
  color: #172b4d;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const EmojiContainer = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
`;

const DateContent = styled.p`
  color: #6d798e;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 12px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: linear-gradient(270deg, #02c39a 0%, #f0f3bd 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
`;

export const TaskCard: React.FC<TaskCardProps> = ({
  image,
  title,
  description,
  date,
  progress,
}) => {
  return (
    <CardWrapper>
      <Image
        src={image}
        alt={title}
        width={310}
        height={120}
        style={{ objectFit: "cover", borderRadius: "6px" }}
      />
      <CardHeader>
        <CardTitleContainer>
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
        <EmojiContainer>
          <span role="img" aria-label="emoji">
            😊
          </span>
        </EmojiContainer>
      </CardHeader>
      <DescriptionContent>{description}</DescriptionContent>
      <DateContent>{date}</DateContent>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </CardWrapper>
  );
};
