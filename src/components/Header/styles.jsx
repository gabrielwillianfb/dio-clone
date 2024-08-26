import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 80%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

export const BuscarInputContainer = styled.div`
  width: 175px;
  height: 30px;
  background-color: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  display: flex;
  align-items: center;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 25px;
  color: #f1f1f1;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 25px;
  color: #f1f1f1;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 30px;
  height: 30px;
  border: 2px solid #e41050;
  border-radius: 30px;
`;

export const Input = styled.input`
  outline: none;
  border: 0px;
  color: #f1f1f1;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: transparent;
`;
