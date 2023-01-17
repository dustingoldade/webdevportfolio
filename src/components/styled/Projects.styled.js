import styled from "styled-components";

export const ProjectHeadline = styled.h1`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  padding-top: 4rem;
`;

export const ProjectContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding-bottom: 2rem;

  max-width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ProjectContainerInner = styled.div`
  max-width: 50%;
  min-width: 400px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-width: 100%;
    min-width: 0px;
  }
`;

export const ProjectContainerPadding = styled.div`
  padding: 2rem;
  padding-bottom: 0rem;
  a {
    bord
  }
`;

export const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-top: 0rem;
`;

export const ProjectDescriptionText = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  margin-bottom: 0rem;
`;

export const ProjectImg = styled.img``;
