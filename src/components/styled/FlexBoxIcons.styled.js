import styled from "styled-components";

export const FlexBoxIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start
  max-width: fit-content;
  gap: 2rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};

  }
`;

export const FlexBoxIconsButtons = styled(FlexBoxIcons)`
  svg:hover {
    cursor: ${({ theme }) => theme.hoverCursor};
    scale: ${({ theme }) => theme.hoverScale};
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;

export const FlexBoxIconsHover = styled(FlexBoxIcons)`
 svg:hover{
  scale: 1.2;
  padding-bottom: 5px;
  transition: scale 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;`;
