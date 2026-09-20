import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import {
  SITE_URL,
  SITE_NAME,
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  isSupportedLocale,
  type SupportedLocale,
} from '@/lib/seo'

function localizedPath(locale: string, segment: string): string {
  return segment ? `/${locale}/${segment}` : `/${locale}`
}

export function useSeo() {
  const route = useRoute()
  const { t } = useI18n()

  const locale = computed<SupportedLocale>(() =>
    isSupportedLocale(route.params.locale) ? (route.params.locale as SupportedLocale) : DEFAULT_LOCALE,
  )

  const pageKey = computed<string>(() => (route.meta.pageKey as string) || 'home')
  const segment = computed<string>(() => (route.meta.segment as string) || '')

  const canonicalPath = computed(() => localizedPath(locale.value, segment.value))

  const title = computed(() => t(`pages.${pageKey.value}.meta-title`))
  const description = computed(() => t(`pages.${pageKey.value}.meta-description`))

  const alternates = computed(() =>
    SUPPORTED_LOCALES.map((l) => ({
      hreflang: l,
      href: `${SITE_URL}${localizedPath(l, segment.value)}`,
    })),
  )

  useHead({
    htmlAttrs: { lang: () => locale.value },
    title: () => title.value,
    meta: () => [
      { name: 'description', content: description.value },
      { name: 'robots', content: 'index,follow' },
      { property: 'og:title', content: title.value },
      { property: 'og:description', content: description.value },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${SITE_URL}${canonicalPath.value}` },
      { property: 'og:image', content: `${SITE_URL}/og-image.webp` },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:locale', content: locale.value === 'fr' ? 'fr_FR' : 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title.value },
      { name: 'twitter:description', content: description.value },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.webp` },
    ],
    link: () => [
      { rel: 'canonical', href: `${SITE_URL}${canonicalPath.value}` },
      ...alternates.value.map((a) => ({ rel: 'alternate', hreflang: a.hreflang, href: a.href })),
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: `${SITE_URL}${localizedPath(DEFAULT_LOCALE, segment.value)}`,
      },
    ],
  })
}
