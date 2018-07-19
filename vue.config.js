module.exports = {
  lintOnSave: false,
  baseUrl: process.env.NODE_ENV === 'production'
    ? 'http://steinmiller.bplaced.net/responsive-dashboard/'
    : '/',
  devServer: {
    port: 9111
  }
}