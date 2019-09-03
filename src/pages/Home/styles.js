import styled from "styled-components";

export const Container = styled.div`
  .main-header {
    height: 80px;
    background-color: rgb(84, 96, 190);
    color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  menu img {
    height: 510.5px;
    width: 23%;
  }

  div img {
    margin-left: 77%;
    margin-top: -70%;
    width: 23%;
    height: 526px;
  }
  
  section {
    width: 80%;
    max-width: 54%;
    margin-top: -38.8%;
    padding: 1.65%;
    background: #929292;
    margin-left: 23%;
    text-align: center;
    position: absolute;
  }

  nav {
    background-color: rgb(84, 96, 198);
    height: 10%;
    width: 100%;
    color: rgb(84, 96, 198);
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
  nav .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(84, 96, 198);
  }
  nav .link img {
    display: block;
    background: rgb(84, 96, 198);
  }

  p {
    color: black;
  }
`;