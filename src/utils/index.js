export const CreateLocalLink = (menuItem, wordPressUrl, blogURI = "blog/") => {
  const { url, connectedObject } = menuItem

  if (url === "#") {
    return null
  }
  /**
   * Always want to pull of our API URL.
   */
  let newUri = url.replace(wordPressUrl, "")

  /**
   * If it's a blog link, respect the users blogURI setting.
   */
  if (connectedObject && connectedObject.__typename === "WPGraphQL_Post") {
    newUri = blogURI + newUri
  }

  return newUri
}
