import { defineStore } from 'pinia'
import qs from 'qs'


export const useStore = defineStore('UI', {
  state: () => {
    return {
      menu: false,
      pages: {
        'index-page': false,
      },
      BACKEND: false,
      cases: false,
      review: false,
    }
  },
  actions: {
    async fetchPages(payload) {
      try {

        const runtimeConfig = useRuntimeConfig();
        const backend = runtimeConfig.public.backend


        if (!this.BACKEND) {
          this.BACKEND = backend
        }

        const query = qs.stringify({
          ...payload.query
        }, {
          encodeValuesOnly: true,
        });

        const { data, error, pending } = await useFetch(`/api/${payload.page}-page?${query}`, {
          baseURL: backend,
        })


        if (data) {
          this.pages[`${payload.page}-page`] = data.value?.data
          return data.value?.data
        }

        if (error) {
          console.error('fetchPages error ', error);
          return false
        }




      } catch (error) {
        console.error('fetchPages ', error);
      }
    },
    async fetchCases(payload) {
      try {
        const query = qs.stringify({
          ...payload.query,
          sort: ['order:asc']
        }, {
          encodeValuesOnly: true,
        });

        const route = useRoute()
        const { data, error } = await useFetch(`/api/cases?${query}`, {
          baseURL: this.BACKEND,
        })

        if (data.value) {
          if (route && route.name) {
            if (data.value.data && data.value.data.length) {
              data.value.data = data.value.data.sort((a, b) => {
                if (a.attributes.categorys === route.name) {
                  return -1
                }
                return 0
              })
            }
          }
          if (payload.push) {
            this.cases.data.push(...data.value.data)
            this.cases.meta = data.value.meta
          } else {
            this.cases = data.value
            return data?.value
          }
        }

        if (error.value) {
          console.error('fetchCases error ', error);
          return false
        }



      } catch (error) {
        console.error('fetchCases ', error);
      }
    },
    async fetchFeedback(payload) {
      try {
        const { data, error } = await useFetch(`/api/feedbacks`, {
          baseURL: this.BACKEND,
          method: 'POST',
          body: payload.body
        })

        if (data.value) {
          return true
        }

        if (error.value) {
          console.error('fetchCases error ', error);
          return false
        }
      } catch (error) {
        console.error('fetchFeedback ', error);
      }
    },
    async fetchReview(payload) {
      try {

        const query = qs.stringify({
          ...payload.query
        }, {
          encodeValuesOnly: true,
        });

        const { data, error, pending } = await useFetch(`/api/reviews?${query}`, {
          baseURL: this.BACKEND,
        })

        if (data) {
          this.review = data.value?.data
          return data.value?.data
        }

        if (error) {
          console.error('fetchReview error ', error);
          return false
        }
      } catch (error) {
        console.error('fetchReview ', error);
      }
    }
  },
})