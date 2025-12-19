import Image from 'next/image';
import * as React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import ProgressBar from './ProgressBar';
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
} from './TaskCard.styles';
import { Task } from '@/data/types';
import TaskImage from '@/components/TaskCard/TaskImage';
import { useSortable } from '@dnd-kit/sortable';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { title, image, emoji, date, profileImage, description, progress } =
    task;
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({
    id: task.id,
  });

  return (
    <CardWrapper
      data-testid="task-card"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      $isDragging={isDragging}
      style={{
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
        transition,
      }}
    >
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
            style={{ stroke: '#6D798E', strokeWidth: 1.5 }}
          />
          <DateContent>{date}</DateContent>
        </DateContainer>
        <Image
          src={profileImage ?? '/profile01.png'}
          alt={`Profile Image`}
          width={40}
          height={40}
          style={{ objectFit: 'cover', borderRadius: '6px' }}
        />
      </MoreInfoContainer>
      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </CardWrapper>
  );
};
