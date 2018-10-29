import styled from 'styled-components/native'
import { colorSecond } from './colors'

export const Wrapper = styled.View`
  flex: 1;
  background-color: white;
`

export const CenteredWrapper = styled(Wrapper)`
  align-items: center;
  justify-content: center;
`

export const BtnWrapper = styled.View`
  margin-bottom: 40px;
`

export const KeyboardAvoidingSpacer = styled.View`
  height: 120px;
`

export const H1Text = styled.Text`
  text-align: center;
  font-size: 36px;
  margin: 0 5% 24px 5%;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  margin-top: 40px;
  width: 90%;
  align-self: center;
  align-items: center;
`

export const Informer = styled.Text`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${colorSecond};
  margin-top: 40px;
`
