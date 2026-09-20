import { useRoute, useRouter } from 'vue-router'

export function useLocalizedPush() {
  const route = useRoute()
  const router = useRouter()

  function push(name: string) {
    router.push({ name, params: { locale: route.params.locale } })
  }

  return push
}
