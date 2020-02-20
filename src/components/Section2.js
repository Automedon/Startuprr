import React, { useState } from "react";
import styled, { css } from "styled-components";
import logo from "../img/logo.png";
import { Button, Dropdown, Icon, Input, Menu, message } from "antd";
const { SubMenu } = Menu;

const Wrapper = styled.section`
  width: 100%;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 1%;
  border-bottom: 3px solid darkgray;
  div.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 3%;
    color: white;
    @media (max-width: 1025px) {
      flex-direction: column;
      align-items: center;
    }
    div.menu {
      div.menuButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 700px) {
          flex-direction: column;
        }
      }
      div.search {
        display: block;

        position: absolute;
        right: 20%;
      }
    }
  }
`;

export const ButtonStyled = styled(Button)`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 13px;
  
  ${props =>
    !props.active &&
    !props.icon &&
    css`
      & {
        color: black !important;
      }
    `}
    ${props =>
      props.type === "outline" &&
      !props.icon &&
      css`
        & {
          color: black !important;
          border-color: black !important;
        }
      `}
  ${props =>
    props.icon &&
    css`
      color: #00a99d !important;
      transform: rotate(90deg);
    `}
    ${props =>
      props.active &&
      !props.icon &&
      css`
        color: white;
        background-color: #00a99d !important;
        border-color: #00a99d !important;
        &:hover {
          color: white;
          opacity: 0.9;
          transition: opacity ease-in 0.2s;
        }
      `}
`;
const menu = [
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  },
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  },
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  },
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  },
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  },
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  },
  {
    title: "Title Goes Here",
    subMenu: [
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" },
      { subTitle: "Title Goes Here" }
    ]
  }
];

const StyledSubmenu = styled(SubMenu)`
  border-bottom: 1px solid darkgray;
  background-color: white;
  width: fit-content;
  &:nth-last-child(1) {
    border-bottom: none;
  }
  &:hover {
    width: fit-content;
    div {
      background-color: #ebebeb;
      padding-left: 20px;
    }

    z-index: 1;
  }
`;
const StyledMenuItem = styled(Menu.Item)`
  width: fit-content;
  border-bottom: 1px solid darkgray;
  &:nth-last-child(1) {
    border-bottom: none;
  }
  &:hover {
    width: fit-content;
    color: white;
    background-color: #00a99d;
    padding-left: 20px;
  }
`;

const renderMenu = (
  <Menu>
    {menu.map(({ title, subMenu }) => {
      return (
        <StyledSubmenu title={title} expandIcon={<div />} key={Math.random()}>
          {subMenu.map(({ subTitle }) => {
            return (
              <StyledMenuItem key={Math.random()}>{subTitle}</StyledMenuItem>
            );
          })}
        </StyledSubmenu>
      );
    })}
  </Menu>
);

const Section2 = () => {
  const [showSearch, setShowSearch] = useState(0);
  const [menuButtons, setMenuButtons] = useState([
    { name: "HOME", active: false, icon: false },
    {
      name: "PORTFOLIO",
      active: false,
      icon: false,
      show: false
    },
    {
      name: "BLOG",
      active: false,
      icon: false
    },
    { name: "PAGES", active: false, icon: false },
    { name: "FEATURES", active: false, icon: false },
    { name: "MENU MENU ", active: false, icon: false },
    { name: "CONTACT", active: false, icon: false },
    {
      name: "search",
      active: false,
      icon: true,
      shape: "circle",
      onClick: () => setShowSearch(!showSearch)
    }
  ]);

  const onMouseEnter = (event, name) => {
    setMenuButtons(prevButtons =>
      prevButtons.map(button =>
        button.name === name
          ? { ...button, active: true }
          : { ...button, active: false }
      )
    );
  };

  const renderButtons = menuButtons.map(
    ({ name, active, shape, icon, onClick }) => {
      if (name === "PORTFOLIO") {
        return (
          <Dropdown overlay={renderMenu} key={name + "Dropdown"}>
            <ButtonStyled
              key={name}
              shape={shape}
              active={active ? 1 : undefined}
              icon={icon ? name : ""}
              type={icon ? "link" : active ? "primary" : "link"}
              onClick={onClick}
              onMouseEnter={event => onMouseEnter(event, name)}
            >
              {icon ? "" : name}
            </ButtonStyled>
          </Dropdown>
        );
      }
      return (
        <ButtonStyled
          key={name}
          shape={shape}
          active={active ? 1 : undefined}
          icon={icon ? name : ""}
          type={icon ? "link" : active ? "primary" : "link"}
          onClick={onClick}
          onMouseEnter={event => onMouseEnter(event, name)}
        >
          {icon ? "" : name}
        </ButtonStyled>
      );
    }
  );

  const renderSearchInput = (
    <div className="search">
      <Input
        key={"search"}
        placeholder="input search text"
        onPressEnter={e => {
          message.info("Check console");
          console.log("Search value: " + e.target.value);
        }}
        style={{ width: "200px" }}
        suffix={<Icon type="close" onClick={() => setShowSearch(false)} />}
      />
    </div>
  );

  return (
    <Wrapper>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <div className="menuButtons">{renderButtons}</div>
          {showSearch ? renderSearchInput : null}
        </div>
      </div>
    </Wrapper>
  );
};

export default Section2;
