import React from 'react'
import styled from 'styled-components/native'
import {
  colorMain,
  colorOk,
  colorAchtung,
  colorMedium,
  colorSecond,
  colorSpecial,
} from '../../appearance/colors'

const CommonBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  ${props => props.type === 'ok' && `margin-top: 40px`};
  ${props => props.type === 'achtung' && `margin-top: 10px`};
  ${props => props.type === 'second' && `margin-top: 10px`};
  ${props => props.type === 'main' && `background-color: ${colorMain}`};
  ${props => props.type === 'second' && `background-color: ${colorSecond}`};
  ${props => props.type === 'special' && `background-color: ${colorSpecial}`};
  ${props => props.type === 'ok' && `background-color: ${colorOk}`};
  ${props => props.type === 'achtung' && `background-color: ${colorAchtung}`};
  ${props => props.disabled && `background-color: ${colorMedium}`};
`

const BtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
`

export const Button = ({ text, type, pressHandler, disabled = false }) => (
  <CommonBtn type={type} onPress={pressHandler} disabled={disabled}>
    <BtnText>{text}</BtnText>
  </CommonBtn>
)
