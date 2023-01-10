import styled from 'styled-components'

export const CountdownContainer = styled.div`
  padding: 1rem;
  font-family: 'Roboto Mono', monospace;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 80%;

  display: flex;
  gap: 1rem;

  span {
    font-size: 10em;
    padding: 2rem 0rem;
  }

  @media (max-width: 498px) {
    font-size: 40%;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['pink-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`
