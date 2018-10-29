import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Wrapper } from './appearance/commonStyles'
import { store } from './store/store'
import FlashcardsStatusBar from './components/FlashcardsStatusBar'
import MainNav from './navigation/Nav'
import { setLocalNotification } from './utils/notifications'

class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <FlashcardsStatusBar />
          <MainNav />
        </Wrapper>
      </Provider>
    )
  }
}

export default App
