import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 66%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;

  ::before {
    content: "";
    width: 100%;
    height: 31rem;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    margin-top: 14.8rem;
  };
`;

export const Content = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    width: fit-content;
  };

  p {
    max-width: 28rem;
    margin: 2rem 0;
  };

  button {
    width: fit-content;
  };
`;

export const Image = styled.div<HTMLAttributes<HTMLDivElement>>`
  img {
    object-fit: cover;
    width: 33rem;
    height: 36.8rem;
    border-radius: ${({ theme }) => theme.border.radius};
  };
`;