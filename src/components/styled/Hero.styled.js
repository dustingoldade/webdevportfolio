import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const HeroHeadline = styled.h1`
  color: ${({ theme }) => theme.primary};
  margin: 0;
  margin-left: -5px;
  font-size: 5rem;
`;

export const SecondaryColorSpan = styled.span`
  color: ${({ theme }) => theme.secondary};
`;

export const HeroSubHeadline = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin: 0 0 1.5rem 0;
`;

export const Herotext = styled.p`
  color: ${({ theme }) => theme.primary};
  margin-top: 3rem;
`;

export const InnerContainer = styled.div`
  margin-top: 5rem;
`;
