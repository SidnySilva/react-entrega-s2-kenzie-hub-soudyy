import styled from "styled-components";

export const InputContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  color: var(--darkblue);

  .set {
    background-color: var(--darkblue);
    color: var(--honey);
    :hover {
      box-shadow: 0 0 20px var(--darkblue);
    }
  }
  input {
    width: 300px;
    padding: 10px;
    transition: 1s;
    border: 2px solid var(--darkblue);
    :hover {
      box-shadow: 0 0 20px var(--darkblue);
    }
  }
  .container {
    border-radius: 6px;
    background-color: var(--honey);
    box-shadow: 0px 0px 50px var(--honey);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 350px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .desc {
      margin-top: 20px;
      height: 100px;
    }
  }
  select {
    width: 300px;
    height: 30px;
    transition: 1s;
    background-color: var(--white);
    border: 2px solid var(--darkblue);
    :hover {
      box-shadow: 0 0 20px var(--darkblue);
    }
  }
  .link {
    margin-top: 10px;
  }
`;
