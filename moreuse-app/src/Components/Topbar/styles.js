import styled from "styled-components";
import {TopbarHeight} from "../../globalStyles"

export const TopbarContainer = styled.header`
  display: flex;
  border-bottom: 2px solid #ccc;
  padding: 5px 10px;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: #fff;
  width: 100%;
  height: ${TopbarHeight}px;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.6em;
  }
  &:hover {
    color: #666;
    cursor: pointer;
  }
`;
