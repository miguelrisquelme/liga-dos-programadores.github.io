import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    font-size: 1.2em;

    @media (max-width: 768px) {
      flex-flow: column nowrap;
      background: var(--color-background-dark);
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      overflow: none;

      transition: transform 0.3s ease-in-out;
      transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(100%)' }
    
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--color-white);

  &.is-active {
    color: var(--color-blue);
  }

  padding: 0 1em 0 1em;
  transition: all 150ms linear 0s;
  position: relative;
`;
