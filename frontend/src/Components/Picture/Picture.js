import React from 'react';
import { StyledPictureContainer } from './Picture.styled';

export const Picture = ({ image, fullwidth, round }) => {
  const imgPath = process.env.PUBLIC_URL + '/' + image.url;
  return (
    <StyledPictureContainer round={round} fullwidth={fullwidth}>
      <img alt={image.alt} title={image.title} src={imgPath} />
    </StyledPictureContainer>
  );
};
