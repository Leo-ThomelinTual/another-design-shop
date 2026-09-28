export interface IDBSettings {
  host: string
  user: string
  port: number
  password: string
  database: string
}

export const GetDBSettings = (): IDBSettings => {
  const env = process.env.NODE_ENV

  if (env == 'development')
    return {
      host: process.env.DEV_HOST!,
      port: parseInt(process.env.DEV_PORT!),
      user: process.env.DEV_USER!,
      password: process.env.DEV_PASSWORD!,
      database: process.env.DEV_DATABASE!,
    }
  else
    return {
      host: process.env.PROD_HOST!,
      port: parseInt(process.env.PROD_PORT!),
      user: process.env.PROD_USER!,
      password: process.env.PROD_PASSWORD!,
      database: process.env.PROD_DATABASE!,
    }
}
