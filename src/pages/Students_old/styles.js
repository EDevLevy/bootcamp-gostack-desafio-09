import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    padding: 15px 0;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    div {
      display: flex;
    }

    input {
      margin-left: 5px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background: #fff;
    padding: 30px;

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;

      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    label {
      color: #444;
      font-weight: bold;
    }
    input {
      margin-top: 5px;
    }

    div {
      display: flex;
      div {
        flex: 1;

        display: flex;
        flex-direction: column;
      }

      :nth-child(2) {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }

  table {
    border-radius: 4px;
    width: 100%;

    padding: 30px;
    background: #fff;
    line-height: 20px;
    font-size: 16px;
    .center {
      text-align: center;
    }
    .edit {
      color: blue;
    }
    .delete {
      color: red;
    }
    thead {
      tr {
        color: #444;
        th {
          text-align: left;
          font-weight: bold;
        }
      }
    }

    tr {
      height: 40px;
      color: #666;
      & + tr {
        td {
          border-top: 1px solid #eee;
        }
      }
    }
  }
`;