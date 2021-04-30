import styled from "styled-components";
import { colors, breakpoints } from "styled";
const HeaderStyle = styled.header`
  position: fixed;
  left: 0px;
  width: 100%;
  z-index: 1000;

  img {
    width: 100%;
    height: auto;
  }
  a {
    color: ${colors.black80};
    font-family: inherit;
  }
  .fas {
    color: ${colors.white};
    font-size: 18px;
  }

  ul {
    background-color: ${colors.white};
  }

  li {
    list-style: none;
    padding: 20px 25px;
    border-bottom: 1px solid ${colors.grey20};
  }

  .contain {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
  }

  .menu {
    list-style: none;
    height: 100%;
    position: fixed;
    top: -100%;
    background-color: hsla(0, 5%, 3%, 0.4);
    transition: all 0.5s ease-in-out;
    width: 100%;
    left: 0;
  }

  .menu.active {
    top: 0;
  }

  .menu-open,
  .scroll {
    background-color: ${colors.black};
    padding: 20px 20px;
    transition: all 0.5s ease;
  }

  .logo-desktop {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    nav {
      height: 64px;
    }
    a {
      font-weight: 400;
      color: ${colors.white};
      font-family: inherit;
    }

    a:hover {
      font-weight: 600;
    }

    .fas {
      display: none;
    }

    ul {
      padding-right: 40px;
    }

    ul li:nth-child(3) {
      margin-left: auto;
      width: 166px;
    }
    ul li:nth-child(3) a {
      color: ${colors.orange};
      font-weight: 600;
      padding: 10px 18px;

      &:hover {
        background-color: ${colors.orangeTrans};
        border-radius: 22px;
      }
    }

    li {
      border-bottom: none;
      color: ${colors.white};
      padding: 24.5px 18px;
    }

    .menu {
      width: 100%;
      background-color: transparent;
      position: fixed;
      top: 0;
      height: auto;
      padding: 0;
      display: flex;
      align-items: center;
    }
    .menu ul {
      width: 100%;
      display: flex;
      background-color: transparent;
    }

    .scroll ~ .menu ul {
      background-color: ${colors.black};
    }

    .contain.menu-open {
      padding-left: 40px;
    }

    .style-btn {
      background-color: ${colors.orange};
      font-weight: 600;
      padding: 10px 18px;
      border-radius: 22px;
      color: #ffffff;

      &:hover {
        background-color: ${colors.orange80};
      }
    }
    .logo-mobile {
      display: none;
    }

    .logo-desktop {
      display: block;
      width: 176px;
    }
  }
`;

export default HeaderStyle;
