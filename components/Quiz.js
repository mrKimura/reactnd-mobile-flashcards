import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CenteredWrapper, H1Text, Informer, BtnWrapper } from '../appearance/commonStyles'
import { Button } from './commonElements/Button'
import { makeIdFromTitle } from '../utils/deskWorks'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'

class Quiz extends Component {
  state = {
    showAnswer: false,
    currentQuestionNumber: 0,
    correctAnswers: 0,
  }

  componentDidMount() {
    this.setupNotification()
  }

  handlerShowAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  handlerCorrect = () => {
    this.setState(prevState => ({
      currentQuestionNumber: prevState.currentQuestionNumber + 1,
      correctAnswers: prevState.correctAnswers + 1,
    }))
  }

  handlerIncorrect = () => {
    this.setState(prevState => ({
      currentQuestionNumber: prevState.currentQuestionNumber + 1,
    }))
  }

  setupNotification = () => {
    clearLocalNotification().then(setLocalNotification)
  }

  handlerReset = () => {
    this.setState(() => ({
      currentQuestionNumber: 0,
      correctAnswers: 0,
    }))
  }

  handlerGoBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    const { showAnswer, currentQuestionNumber, correctAnswers } = this.state
    const { questions } = this.props
    const currentQuestion = questions[currentQuestionNumber]
    const quizIsNotOver = currentQuestionNumber + 1 <= questions.length
    const finalMessage = `You complete the quiz!${'\n'}Your results:${'\n'}${correctAnswers} correct answers out of ${
      questions.length
    }`
    return quizIsNotOver ? (
      <CenteredWrapper>
        <Informer>{`${currentQuestionNumber + 1} / ${questions.length}`}</Informer>
        <CenteredWrapper>
          <H1Text>
            {showAnswer ? currentQuestion.answer : currentQuestion.question}
          </H1Text>
        </CenteredWrapper>
        <BtnWrapper>
          <Button
            type="special"
            text={showAnswer ? 'Hide Answer' : 'Show Answer'}
            pressHandler={this.handlerShowAnswer}
          />
          <Button type="ok" text="Correct" pressHandler={this.handlerCorrect} />
          <Button type="achtung" text="Incorrect" pressHandler={this.handlerIncorrect} />
        </BtnWrapper>
      </CenteredWrapper>
    ) : (
      <CenteredWrapper>
        <CenteredWrapper>
          <H1Text>{finalMessage}</H1Text>
        </CenteredWrapper>
        <BtnWrapper>
          <Button type="main" text="Back to Desk" pressHandler={this.handlerGoBack} />
          <Button type="achtung" text="Reset Quiz" pressHandler={this.handlerReset} />
        </BtnWrapper>
      </CenteredWrapper>
    )
  }
}

const mapStateToProps = (desks, { navigation }) => {
  const { deckName } = navigation.state.params
  return {
    questions: desks[makeIdFromTitle(deckName)].questions,
  }
}

export default connect(mapStateToProps)(Quiz)
