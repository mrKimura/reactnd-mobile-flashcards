import React from 'react'
import styled from 'styled-components/native'
import { colorMain, colorLight } from '../../appearance/colors'

export const StyledInput = styled.TextInput`
  padding: 16px;
  width: 100%;
  margin-bottom: 30px;
  font-size: 18px;
  border-radius: 8px;
  border: 2px solid ${colorLight};
`

export const Input = ({ placeholder, value, changeTextHandler }) => (
  <StyledInput
    underlineColorAndroid="transparent"
    selectionColor={colorMain}
    placeholder={placeholder}
    value={value}
    onChangeText={changeTextHandler}
  />
)
