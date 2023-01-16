import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 0.75rem 2rem;
  max-width: fit-content;
  border-radius: 5px;

  &:hover {
    cursor: ${({ theme }) => theme.hoverCursor};
    scale: ${({ theme }) => theme.hoverScale};
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
