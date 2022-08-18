import styled from "styled-components";

export const FormComp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;

  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
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
  height: auto;
  border-radius: 5px;
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
  margin: 5px 0;
  &:hover {
    background-color: #0f73a5;
    color: #fff;
  }
`;

export const ButtonDelete = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: red;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 5px 0;
  &:hover {
    background-color: rgb(180, 0, 0);
    color: #fff;
  }
`;
