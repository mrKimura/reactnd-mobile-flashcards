import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { handleCreateDesk } from '../actions'
import {
  CenteredWrapper,
  H1Text,
  KeyboardAvoidingView,
  KeyboardAvoidingSpacer,
} from '../appearance/commonStyles'
import { Button } from './commonElements/Button'
import { Input } from './commonElements/Input'
import { makeIdFromTitle } from '../utils/deskWorks'

class CreateNewDesk extends Component {
  state = {
    inputText: '',
  }

  changeTextHandler = inputText => {
    this.setState({
      inputText,
    })
  }

  submitHandler = () => {
    const { navigation, desksNames } = this.props
    const { inputText } = this.state
    const { saveNewDesk } = this.props
    if (desksNames.includes(makeIdFromTitle(inputText))) {
      Alert.alert('This Desk already exists')
      return
    }
    saveNewDesk(inputText)
      .then(() => this.reset())
      .then(() =>
        navigation.navigate('Desk', {
          deckTitle: inputText,
        }),
      )
  }

  isDisabled = () => {
    const { inputText } = this.state
    return Boolean(!inputText.trim())
  }

  reset = () => {
    this.setState({
      inputText: '',
    })
  }

  render() {
    const { inputText } = this.state
    const h1TextContent = `What is the title${'\n'}of new desk?`
    return (
      <CenteredWrapper>
        <H1Text>{h1TextContent}</H1Text>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Input
            placeholder="Desk Title"
            value={inputText}
            changeTextHandler={this.changeTextHandler}
          />
          <Button
            type="main"
            text="Submit"
            pressHandler={this.submitHandler}
            disabled={this.isDisabled()}
          />
          <KeyboardAvoidingSpacer />
        </KeyboardAvoidingView>
      </CenteredWrapper>
    )
  }
}

const mapStateToProps = desks => ({
  desksNames: Object.keys(desks),
})
const mapDispatchToProps = dispatch => ({
  saveNewDesk: inputText => dispatch(handleCreateDesk(inputText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateNewDesk)
