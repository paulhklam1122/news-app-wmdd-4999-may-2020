import React from 'react'
import { Container, List } from 'native-base'
import { StyleSheet, Text } from 'react-native'

import Loading from '../layout/Loading'
import Article from '../ListItem/Article'
import ArticleModal from '../modals/ArticleModal'

const TabContent = props => {
  const {
    articles,
    articleData,
    isLoading,
    onArticlePress,
    onArticleModalClose,
    modalVisible
  } = props
  const renderLoadingState = () => (
    <Loading isLoading={isLoading} style={styles.loadingState} />
  )

  const renderArticles = () => (
    <List
      dataArray={articles}
      renderRow={article => {
        return <Article article={article} onPress={onArticlePress} />
      }}
      keyExtractor={(article, index) => index.toString()}
    />
  )

  const renderContent = () =>
    isLoading ? renderLoadingState() : renderArticles()

  return (
    <Container>
      {renderContent()}
      <ArticleModal
        articleData={articleData}
        showModal={modalVisible}
        onClose={onArticleModalClose}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  loadingState: {
    marginTop: 250
  }
})

export default TabContent
