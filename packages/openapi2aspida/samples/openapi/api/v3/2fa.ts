/* eslint-disable */
import * as Types from '../../@types'

export interface Methods {
  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationTokenRequired

    resBody: {
      dataUrl?: string
      otpURL?: string
      secret?: string
    }

    reqBody: {
      email: string
    }
  }
}

export default {
  post: () => ({ status: 200, resBody: { dataUrl: 'a', otpURL: 'a', secret: 'a' } })
}
