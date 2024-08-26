import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 80px auto 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  max-width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  flex: 1;
`;

export const TitleHighlight = styled.span`
  color: #e4105d;
`;

export const TextContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  max-width: 420px;
  margin-bottom: 20px;
  line-height: 22px;
  text-align: justify;
  flex: 2;
`;
