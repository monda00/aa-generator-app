export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ""

export const existsGaId = GA_TRACKING_ID !== ""

export const pageview = (path: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: path,
  })
}
