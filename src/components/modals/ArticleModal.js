import React from 'react'
import { Dimensions, Modal, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { Ionicons } from '@expo/vector-icons'
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Right,
  Title
} from 'native-base'

const webViewHeight = Dimensions.get('window').height - 56

const ArticleModal = props => {
  const { articleData, articleModal, onClose, showModal } = props
  const { title, url } = articleData

  return (
    <View>
      <Modal
        animationType='slide'
        transparent
        visible={showModal}
        onRequestClose={onClose}
      >
        <Container style={{ backgroundColor: '#fff' }}>
          <Header>
            <Left>
              <Ionicons.Button
                background='transparent'
                color='black'
                name='ios-close'
                onPress={onClose}
                size={40}
              />
            </Left>
            <Right>
              <Ionicons.Button
                background='transparent'
                color='black'
                name='ios-share'
                // onPress={() => onArticleShare(title, url)}
                size={30}
              />
            </Right>
            <Content contentContainerStyle={{ height: webViewHeight }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={onClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
          </Header>
        </Container>
      </Modal>
    </View>
  )
}

export default ArticleModal
