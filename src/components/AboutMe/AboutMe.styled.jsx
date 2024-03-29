import styled from '@emotion/styled';

export const AboutMeWrapper = styled.div`
  padding: 30px;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 5px;
  border: ${p => p.theme.colors.accent};
  box-shadow: 0px 1px 2px 0px ${p => p.theme.colors.accent},
  1px 2px 4px 0px ${p => p.theme.colors.accent},
  2px 4px 8px 0px ${p => p.theme.colors.accent},
  2px 4px 16px 0px ${p => p.theme.colors.accent};
`;

export const AboutMeTittle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: ${p => p.theme.fonts.primaryFont};
  font-size: ${p => p.theme.fontSizes.titles};
  color: ${p => p.theme.colors.primaryTextColor};
`;

export const AboutMeText = styled.div`
  font-family: ${p => p.theme.fonts.primaryFont};
  font-size: ${p => p.theme.fontSizes.primaryText};
  color: ${p => p.theme.colors.primaryTextColor};
  text-align: left;
  margin-top: 30px;
  margin-bottom: 0px;
`;

export const FirstPar = styled.p`
margin-top: 30px;
margin-bottom: 0px;
`;

export const Par = styled.p`
margin-top: 16px;
margin-bottom: 0px;
`;
