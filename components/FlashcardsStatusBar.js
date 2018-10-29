import React from 'react'
import { StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { Constants } from 'expo'
import { colorMain } from '../appearance/colors'

const StatusBarWrapper = styled.View`
  height: ${Constants.statusBarHeight};
  background-color: ${colorMain};
`

const FlashcardsStatusBar = () => (
  <StatusBarWrapper>
    <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
  </StatusBarWrapper>
)

export default FlashcardsStatusBar
