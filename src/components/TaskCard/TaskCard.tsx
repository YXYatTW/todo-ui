import Image from "next/image";
import * as React from "react";
import { CiCalendarDate } from "react-icons/ci";
import ProgressBar from "./ProgressBar";
import {
  CardHeader,
  CardTitle,
  CardTitleContainer,
  CardWrapper,
  DateContainer,
  DateContent,
  DescriptionContent,
  EmojiContainer,
  MoreInfoContainer,
  ProgressBarContainer,
} from "./TaskCard.styles";
import TaskImage from "@/components/TaskCard/TaskImage";

interface TaskCardProps {
  image?: string;
  title: string;
  description: string;
  date: string;
  progress?: number;
  emoji?: string;
  profileImage?: string;
}

export const TaskCard = ({
  image,
  title,
  description,
  date,
  progress = 0,
  emoji,
  profileImage,
}: TaskCardProps) => {
  return (
    <CardWrapper>
      <TaskImage image={image} />
      <CardHeader>
        <CardTitleContainer>
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
        <EmojiContainer>{emoji}</EmojiContainer>
      </CardHeader>
      <DescriptionContent>{description}</DescriptionContent>
      <MoreInfoContainer>
        <DateContainer>
          <CiCalendarDate
            width="24"
            height="24"
            style={{ stroke: "#6D798E", strokeWidth: 1.5 }}
          />
          <DateContent>{date}</DateContent>
        </DateContainer>
        <Image
          src={profileImage ?? "/profile01.png"}
          alt={`Profile Image`}
          width={40}
          height={40}
          style={{ objectFit: "cover", borderRadius: "6px" }}
        />
      </MoreInfoContainer>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </CardWrapper>
  );
};
