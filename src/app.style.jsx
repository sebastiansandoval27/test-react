import styled from "styled-components";

export const AppContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
export const AppImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 20px 15px;
  height: 450px;

  & > img {
    width: 600px;
    height: auto;
    border-radius: 10px;
  }
`;

export const AppContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 450px;
  margin: 0 auto;
  padding: 20px 15px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #000;
  margin-top: 25px;
  height: 80px;
  font-family: "Roboto", sans-serif;
  color: #23648e;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    opacity: 0.8;
    background-color: #23648e;
    margin-top: 10px;
  }
`;
