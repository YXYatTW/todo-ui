import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface ImagePlaceHolderProps {
  image?: string;
}

const ImagePlaceHolderStyled = styled.div`
  width: 310px;
  height: 120px;
  border-radius: 6px;
  background: linear-gradient(90deg, #fbc7d4 0%, #9796f0 100%);
`;

function TaskImage({ image }: ImagePlaceHolderProps) {
  return image ? (
    <Image
      src={image}
      alt="task image"
      width={310}
      height={120}
      style={{ objectFit: "cover", borderRadius: "6px" }}
    />
  ) : (
    <ImagePlaceHolderStyled data-testid="task-image-placeholder" />
  );
}

export default TaskImage;
