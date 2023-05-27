export interface IButton {
  value: string
  p: string
}

export interface IDataItem {
  articles: {
    source: {
      id:string
      name:string
    }
    author: string
    title: string
    description:string
    url:string
    urlToImage: string
    publishedAt: string
    content: string
  }[]
}
