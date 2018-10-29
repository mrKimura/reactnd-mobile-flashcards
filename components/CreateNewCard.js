import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddCardToDesk } from '../actions'
import {
  Wrapper,
  KeyboardAvoidingView,
  KeyboardAvoidingSpacer,
} from '../appearance/commonStyles'
import { Button } from './commonElements/Button'
import { Input } from './commonElements/Input'

class CreateNewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  changeQuestionHandler = question => {
    this.setState({
      question,
    })
  }

  changeAnswerHandler = answer => {
    this.setState({
      answer,
    })
  }

  submitHandler = () => {
    const { question, answer } = this.state
    const { addNewCard, navigation } = this.props
    const { deckName } = navigation.state.params
    addNewCard(deckName, question, answer).then(navigation.goBack())
  }

  render() {
    const { question, answer } = this.state
    return (
      <Wrapper>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Input
            placeholder="Question"
            value={question}
            changeTextHandler={this.changeQuestionHandler}
          />
          <Input
            placeholder="Answer"
            value={answer}
            changeTextHandler={this.changeAnswerHandler}
          />
          <Button
            type="main"
            text="Submit"
            pressHandler={this.submitHandler}
            disabled={Object.values(this.state).includes('')}
          />
          <KeyboardAvoidingSpacer />
        </KeyboardAvoidingView>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewCard: (deskName, question, answer) =>
      dispatch(handleAddCardToDesk(deskName, question, answer)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateNewCard)
