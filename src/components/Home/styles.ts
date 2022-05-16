import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;
`;

export const Title = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: var(--text-color);
`;

export const Subtitle = styled.div`
  font-size: 5rem;
  font-weight: 700;
  text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;

export const Content = styled.div`
  /* border: 1px solid red; */
`;

export const ImageCupCoffee = styled.img`
  object-fit: cover;
  height: 506px;
  width: 800px;
`;

export const BeansLeft = styled.img`
  position: relative;
  bottom: 50px;
  left: 84px;
`;

export const BeansRight = styled.img`
  position: relative;
  bottom: 180px;
  right: 200px;
`;
