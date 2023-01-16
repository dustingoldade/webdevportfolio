import styled from "styled-components";

export const ProjectHeadline = styled.h1`
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

export const ProjectContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 2rem;
  max-width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
`;

export const ProjectContainerInner = styled.div`
  max-width: 50%;
  padding-right: 4rem;
  min-width: 500px;
`;

export const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.primary};
`;

export const ProjectImg = styled.img``;
