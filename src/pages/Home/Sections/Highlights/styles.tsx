import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.header<HTMLAttributes<HTMLElement>>`
  width: 66%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4.3rem;
`;

export const Top = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 20rem;
  };
`;

export const Cards = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
`;