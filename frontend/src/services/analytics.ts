const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

if (!GA_MEASUREMENT_ID) {
  throw new Error(
    '[analytics] VITE_GA_MEASUREMENT_ID is not set. ' +
    'Google Analytics requires a measurement ID at build time. ' +
    'Set it in your environment (e.g. VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX) and rebuild.',
  )
}

type ConsentState = 'granted' | 'denied'

type ConsentSettings = {
  ad_storage: ConsentState
  ad_user_data: ConsentState
  ad_personalization: ConsentState
  analytics_storage: ConsentState
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GTM_SCRIPT_ID = 'ga4-gtag-script'

const GA_COOKIE_PREFIXES = ['_ga', '_gid', '_gat', '_gcl_', '_gac_']

const ANALYTICS_DENIED: ConsentSettings = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
}

const ANALYTICS_GRANTED: ConsentSettings = {
  ...ANALYTICS_DENIED,
  analytics_storage: 'granted',
}

let enabled = false
let scriptLoaded = false

function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(args)
}

function defineGtag(): void {
  window.dataLayer = window.dataLayer ?? []
  window.gtag = gtag
}

function loadScript(): void {
  if (scriptLoaded || !GA_MEASUREMENT_ID) {
    return
  }
  scriptLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.id = GTM_SCRIPT_ID
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

function removeScript(): void {
  const existing = document.getElementById(GTM_SCRIPT_ID)
  existing?.remove()
  scriptLoaded = false
}

function removeGaCookies(): void {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim()
    if (!name || !GA_COOKIE_PREFIXES.some((prefix) => name.startsWith(prefix))) {
      return
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`
  })
}

export function enableAnalytics(): void {
  if (!GA_MEASUREMENT_ID || enabled) {
    return
  }
  enabled = true

  defineGtag()
  gtag('consent', 'default', ANALYTICS_GRANTED)
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
  loadScript()
}

export function disableAnalytics(): void {
  if (window.gtag) {
    window.gtag('consent', 'update', ANALYTICS_DENIED)
  }
  removeGaCookies()
  removeScript()
  window.dataLayer = []
  delete window.gtag
  enabled = false
}

export function trackPageView(path: string): void {
  if (!enabled) {
    return
  }
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}
