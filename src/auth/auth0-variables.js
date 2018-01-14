export const AUTH_CONFIG = {
  clientId: '7Vlp4QZMks2ufCIPP8L208ntcCVR00d0',
  domain: 'wichopy.auth0.com',
  callbackUrl: `${process.env.BASE_URL}${process.env.BASE_NAME}callback`,
  // apiUrl: 'http://irisjarvis.zapto.org:661'
  apiUrl: process.env.SOCKET_SERVER
}
