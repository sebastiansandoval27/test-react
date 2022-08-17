import styled from "styled-components";

export const FormComp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 400px;
  height: auto;
  border: 1px solid #ccc;
  margin-top: 25px;
  border-radius: 10px;
  padding: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: auto;
  margin: 15px 0;

  & > input {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #ccc;

    &::placeholder {
      color: #777777;
    }
  }
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  color: red;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #00a8ff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0f73a5;
    color: #fff;
  }
`;
