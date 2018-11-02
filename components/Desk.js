import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CenteredWrapper, H1Text, Informer, BtnWrapper } from '../appearance/commonStyles'
import { Button } from './commonElements/Button'
import { makeIdFromTitle } from '../utils/deskWorks'

class Desk extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params
    return {
      title: deckTitle,
    }
  }

  handleAddCard = () => {
    const {
      desk: { title },
    } = this.props
    const { navigation } = this.props
    navigation.navigate('CreateNewCard', { deckName: title })
  }

  handleStartQuiz = () => {
    const {
      desk: { title },
    } = this.props
    const { navigation } = this.props
    navigation.navigate('Quiz', { deckName: title })
  }

  isDisabled = () => {
    const {
      desk: { questions },
    } = this.props
    return questions.length === 0
  }

  render() {
    const {
      desk: { title, questions },
    } = this.props
    return (
      <CenteredWrapper>
        <CenteredWrapper>
          <H1Text>{title}</H1Text>
          <Informer>
            {questions.length} {questions.length === 1 ? 'card' : 'cards'}
          </Informer>
        </CenteredWrapper>
        <BtnWrapper>
          <Button type="main" text="Add Card" pressHandler={this.handleAddCard} />
          <Button
            type="second"
            text="Start Quiz"
            pressHandler={this.handleStartQuiz}
            disabled={this.isDisabled()}
          />
        </BtnWrapper>
      </CenteredWrapper>
    )
  }
}

const mapStateToProps = (desks, { navigation }) => {
  const { deckTitle } = navigation.state.params
  return {
    desk: desks[makeIdFromTitle(deckTitle)],
  }
}

export default connect(mapStateToProps)(Desk)
