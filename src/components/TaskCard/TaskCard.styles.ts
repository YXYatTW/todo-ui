import styled from 'styled-components';

export const CardWrapper = styled.div<{ $isDragging?: boolean }>`
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 3px 0 0 #b2b8c4;

  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  user-select: none;
`;

export const CardTitleContainer = styled.div`
  width: 248px;
  height: fit-content;
`;

export const CardTitle = styled.h2`
  color: #172b4d;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

export const DescriptionContent = styled.p`
  color: #172b4d;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

export const EmojiContainer = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
`;

export const DateContent = styled.p`
  color: #6d798e;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  margin-top: 12px;
  //background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
`;

export const MoreInfoContainer = styled.div`
  width: 310px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DateContainer = styled.div`
  width: 110px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;
