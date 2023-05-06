import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.footer<HTMLAttributes<HTMLElement>>`
  width: 66%;
  height: 45.7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.white};

  ::before {
    content: "";
    width: 100%;
    height: 45.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: -1;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Copyright = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  a {
    text-decoration: underline;
    line-height: 150%;
  };
`;

export const Image = styled.img<HTMLAttributes<HTMLImageElement>>`
  width: 15.5rem;
  height: 32.1rem;
  object-fit: cover;
  margin-top: 4.8rem;
  border-radius: .5rem;
`;

export const Column = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 7.7rem;

  h4 {
    height: 4.32rem;
  };

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    li {
      list-style: none;
    };
  };
`;