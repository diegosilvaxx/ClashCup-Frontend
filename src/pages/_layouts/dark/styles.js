import styled from 'styled-components';
// import { darken } from 'polished';

export const WrapperStyle = styled.div`
  background: linear-gradient(-90deg, #fff, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContentStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      ::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      :hover {
        opacity: 1;
      }
    }
  }
`;
