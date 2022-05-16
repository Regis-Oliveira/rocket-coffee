import styled from "styled-components";

export const Container = styled.header`
  margin-top: 3.125rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
`;

export const LogoContainer = styled.div``;

export const LogoImg = styled.image``;

export const ContentOptions = styled.div`
  width: 27rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--text-color);
    text-decoration: none;
  }
`;

export const ButtonGetCoffee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 0.688rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-color);
  background: transparent;
  
  border: 1px solid var(--button);
  padding: 11px 38px;
  border-radius: 0.375rem;
  
  height: 2.313rem;
  width: 10.75rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
