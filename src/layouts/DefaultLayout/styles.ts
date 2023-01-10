import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;

  background: ${(props) => props.theme['gray-800']};

  display: flex;
  flex-direction: column;
`
