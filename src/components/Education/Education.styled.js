import styled from '@emotion/styled';

export const EducationList = styled.ul`
  list-style: none;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 30px;
`;

export const ListItem = styled.li`
  margin-top: 30px;
  padding: 30px;
  border-radius: 5px;
  border: ${p => p.theme.colors.accent};
  box-shadow: 0px 1px 2px 0px ${p => p.theme.colors.accent},
  1px 2px 4px 0px ${p => p.theme.colors.accent},
  2px 4px 8px 0px ${p => p.theme.colors.accent},
  2px 4px 16px 0px ${p => p.theme.colors.accent};
`;

export const EducationTitle = styled.h2`
  color: ${p => p.theme.colors.primaryTextColor};
  font-size: ${p => p.theme.fontSizes.titles};
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const EducationSubtitle = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.secondaryText};
font-family: ${p => p.theme.fonts.primaryFont};
margin-top: 16px;
margin-bottom: 0px;
`;

export const EducationText = styled.p`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes.primaryText};
font-family: ${p => p.theme.fonts.primaryFont};
margin-top: 30px;
margin-bottom: 0px;
`;

export const OpenCertificateBtn = styled.button`
background-color: transparent;
border: none;
text-decoration: underline;
cursor: pointer;
font-family: ${p => p.theme.fonts.primaryFont};
font-size: ${p => p.theme.fontSizes.primaryText};
color: ${p => p.theme.colors.accent};
margin-top: 16px;
&:hover {
  color: white;
  transform: scale(1.1);
};
transition-property: color, transform;
transition-duration: 300ms;
`
