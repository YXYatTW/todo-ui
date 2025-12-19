import { render, screen } from '@testing-library/react';
import { TaskCard } from './TaskCard';
import type { Task } from '@/data/types';

const sortableReturnValue = {
  attributes: { 'data-dnd': 'draggable' },
  listeners: {},
  setNodeRef: jest.fn(),
  isDragging: false,
  transform: { x: 10, y: 20 },
  transition: 'all 0.2s ease',
};

jest.mock('@dnd-kit/sortable', () => ({
  useSortable: () => sortableReturnValue,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }: { src: string; alt: string }) => (
    <img src={src} alt={alt} {...rest} />
  ),
}));

const baseTask: Task = {
  id: 'task-1',
  title: 'Design system card',
  description: 'Refactor card styles and layout',
  status: 'TODO',
  completed: false,
  date: 'Nov 26',
  progress: 64,
  emoji: '🎨',
  profileImage: '/profile02.png',
  image: '/task-image.png',
};

describe('TaskCard', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Task Card successfully', () => {
    render(<TaskCard task={baseTask} />);

    expect(screen.getByText(baseTask.title)).toBeInTheDocument();
    expect(screen.getByText(baseTask.description)).toBeInTheDocument();
    expect(screen.getByText(baseTask.emoji)).toBeInTheDocument();
    expect(screen.getByText(baseTask.date)).toBeInTheDocument();
    expect(screen.getByAltText('task image')).toHaveAttribute(
      'src',
      baseTask.image,
    );
    expect(screen.getByAltText('Profile Image')).toHaveAttribute(
      'src',
      baseTask.profileImage,
    );
    expect(screen.getByTestId('progress-bar')).toHaveAttribute(
      'data-progress',
      String(baseTask.progress),
    );

    const card = screen.getByTestId('task-card');
    expect(card).toHaveStyle('transform: translate3d(10px, 20px, 0)');
    expect(card).toHaveStyle('transition: all 0.2s ease');
  });

  it('should render default Image when image missing', () => {
    render(
      <TaskCard
        task={{
          ...baseTask,
          image: undefined,
          profileImage: undefined,
          progress: 0,
        }}
      />,
    );

    expect(screen.getByTestId('task-image-placeholder')).toBeInTheDocument();
    expect(screen.getByAltText('Profile Image')).toHaveAttribute(
      'src',
      '/profile01.png',
    );
    expect(screen.getByTestId('progress-bar')).toHaveAttribute(
      'data-progress',
      '0',
    );
  });
});
