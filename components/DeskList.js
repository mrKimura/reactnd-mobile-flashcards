import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { handleGetDesks, handleDeleteDesk } from '../actions'
import { CenteredWrapper } from '../appearance/commonStyles'
import { colorSecond, colorLight } from '../appearance/colors'

const StyledFlatList = styled.FlatList`
  width: 100%;
`

const DeskListItem = styled.TouchableOpacity`
  width: 100%;
  padding: 24px;
  justify-content: center;
  border-color: ${colorLight};
  border-top-width: 2px;
  border-bottom-width: 2px;
`

const DeskName = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 12px;
`

const DeskCardsNumber = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${colorSecond};
`

class DeskList extends Component {
  componentDidMount() {
    const { getData } = this.props
    getData()
  }

  keyGen = (item, index) => `${index}${item.name}`

  deskListItem = ({ item: { title, questions } }) => {
    const { navigation, deleteDesk } = this.props
    return (
      <DeskListItem
        title={title}
        onPress={this.goToDesk}
        onLongPress={this.deleteDeskHandler}
        deleteDesk={deleteDesk}
        navigation={navigation}
      >
        <DeskName>{title}</DeskName>
        <DeskCardsNumber>{questions.length} cards</DeskCardsNumber>
      </DeskListItem>
    )
  }

  deleteDeskHandler() {
    this.deleteDesk(this.title)
  }

  goToDesk() {
    const { navigate } = this.navigation
    navigate('Desk', { deckTitle: this.title })
  }

  render() {
    const { deskItems } = this.props
    return (
      <CenteredWrapper>
        <StyledFlatList
          data={deskItems}
          renderItem={this.deskListItem}
          keyExtractor={this.keyGen}
        />
      </CenteredWrapper>
    )
  }
}

const mapStateToProps = desks => ({
  deskItems: Object.values(desks),
})

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(handleGetDesks()),
  deleteDesk: deskname => dispatch(handleDeleteDesk(deskname)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeskList)
