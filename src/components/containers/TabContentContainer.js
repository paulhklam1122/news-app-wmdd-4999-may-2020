import React, { Component } from 'react'
import { Alert, Share } from 'react-native'
import { getArticles } from '../../service/api'
import TabContent from '../Tabs/TabContent'

class TabContentContainer extends Component {
  state = {
    articleData: {},
    articles: [],
    isLoading: true,
    modalVisible: false,
    source: this.props.source || 'bbc-news'
  }

  // Lifecycle Methods

  componentDidMount() {
    const { source } = this.state
    this.fetchNews(source)
  }

  // API Call Functions

  fetchNews = async source => {
    getArticles(source).then(articles => {
      this.setState({
        articles: articles,
        isLoading: false
      })
    })
  }

  // Handler Functions

  handleArticlePress = ({ title, url }) => {
    this.setState({
      modalVisible: true,
      articleData: {
        title,
        url
      }
    })
  }

  handleArticleModalClose = () => {
    this.setState({
      modalVisible: false,
      articleData: {}
    })
  }

  render() {
    const { articleData, articles, isLoading, modalVisible } = this.state
    return (
      <TabContent
        articles={articles}
        articleData={articleData}
        isLoading={isLoading}
        onArticleModalClose={this.handleArticleModalClose}
        onArticlePress={this.handleArticlePress}
        modalVisible={modalVisible}
      />
    )
  }
}

export default TabContentContainer
