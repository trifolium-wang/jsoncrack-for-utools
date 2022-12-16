import React from "react";
import styled from "styled-components";

const StyledErrorView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    filter: drop-shadow(2px 4px 6px black);
  }
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.TEXT_DANGER};
`;

const StyledInfo = styled.p`
  width: 60%;
  text-align: center;
  color: ${({ theme }) => theme.TEXT_NORMAL};
`;

export const ErrorView = () => (
  <StyledErrorView>
    <img
      src="/assets/undraw_qa_engineers_dg-5-p.svg"
      width="200"
      height="200"
      alt="oops"
    />
    <StyledTitle>无法处理这个JSON文件!</StyledTitle>
    <StyledInfo>
        对于您遇到的问题，我们深表歉意。
    </StyledInfo>
  </StyledErrorView>
);
