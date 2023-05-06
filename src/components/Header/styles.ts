import styled from "styled-components";
import { HTMLAttributes } from "react";

export const Container = styled.header<HTMLAttributes<HTMLElement>>`
  width: 66%;
  height: 12.8rem;
  /* position: fixed;
  top: 0;
  left: 0;
  padding: 0 7rem; */

  > nav {
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      font-weight: ${({ theme }) => theme.font.weight.bold};
    };
  };
`;