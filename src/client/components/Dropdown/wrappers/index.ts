import styled from "styled-components"

export const Placeholder = styled.p`
    color: #b3b3b3;
    font-size: 16px;
    line-height: 22px;
`

export const DropdownItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 9px 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    &:hover {
        background-color: #979ca1;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    color: black;
    margin-right: 2px;
    width: calc(100% + 2px);
    max-height: 175px;
    border: 1px solid #D3D7F3;
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    background: #ffffff;
    top: 100%;
    left: -1px;
    margin-bottom: 16px;
    z-index: 1;
    overflow: auto;
    overflow-x: hidden;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const SelectBox = styled.div<{ isOpen: boolean, error?: boolean }>`
    position: relative;
    width: 250px;
    height: 40px;
    background: #fff;
    border: ${({ error }) => error ? "1px solid #D5584D" : "1px solid #656565"};
    box-sizing: border-box;
    border-radius: ${({ isOpen }) => (isOpen ? "8px 8px 0px 0px" : "8px")};
    display: flex;
    align-items: center;
    padding: 0 12px 0 8px;
`

export const Label = styled.div`
  color: black;
  margin-right: 2px;
  width: 75%;
  position: relative;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`