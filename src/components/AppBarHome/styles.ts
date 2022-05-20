import styled from 'styled-components'

export const MessageContent = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  padding-top: 80px;

  opacity: 1;
  width: 100%;
  max-width: 800px;

  text-align: center;
  place-content: center;

  font-weight: 700;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.primary};
`

export const MessageBorder = styled.line`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  min-width: auto;
  width: 300px;

  opacity: 1;
  border-bottom: 4px solid #fc893f;
`

export const ImageContent = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  opacity: 0.9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: #fbfbfb;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 40px;
`