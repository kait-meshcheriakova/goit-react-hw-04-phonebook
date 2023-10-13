import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #82d47b;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 5px solid #82d47b;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 1px solid #82d47b;
  background-color: #82d47b;
  color: white;
  border: none;
`;
