import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  justify-content: center;

  place-content: end;

  left: 0;

  width: 100%;
  max-width: 420px;
  height: 100%;
`

export const FormContent = styled.div`
  align-items: center;
  width: 100%;
  flex-direction: collumn;
  padding: 80px 40px 60px 40px;
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 20;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: row;
`

export const ImageContent = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
  opacity: 0.9;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fcfcfc;
`

export const ImageLogoContent = styled.div`
  display: flex;
  position: absolute;;
  width: 100%;
  z-index: 1;

  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color:  #fcfcfc;
`