import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // app
  app: {
    head: {
      title: '클래스링크 | CLASS LINK',
      titleTemplate: '%s - 클래스링크 | CLASS LINK',
      meta: [
        { charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        {
          hid: 'description',
          name: 'description',
          content: '교육특화 메타버스 클래스링크 가상공간의 또 다른 학교 오프라인 학교/학원보다 더 학교/학원같은 캠퍼스',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: '클래스링크 | CLASS LINK',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: '교육특화 메타버스 클래스링크 가상공간의 또 다른 학교 오프라인 학교/학원보다 더 학교/학원같은 캠퍼스',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.metaclasslink.com',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'CLASS LINK',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: './assets/images/opengraph.png',
        },
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: '6SXBtHuUik4iemdPnrwQqnALxTYEgqp9LWdjWhionqM',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: '클래스링크 | CLASS LINK',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: '교육특화 메타버스 클래스링크 가상공간의 또 다른 학교 오프라인 학교/학원보다 더 학교/학원같은 캠퍼스',
        },
      ],
      link: [
        { rel: 'stylesheet', href: './assets/css/base.css'},
        { rel: 'stylesheet', href: './assets/css/common.css'},
        { rel: 'canonical', href: 'https://www.metaclasslink.com'},
        { rel: 'shortcut icon', href: './favicon.png'},
      ],
      script: [
        {src:'./plugins/jquery/jquery-3.6.0.min.js',async:true,crossorigin:"anonymous"},
        {src:'./plugins/swiper/swiper-bundle.min.js',async:true,crossorigin:"anonymous"},
        {src:'./plugins/bootstrap/bootstrap.bundle.min.js',async:true,crossorigin:"anonymous"}
      ],
    }
  },
  ssr:false,
  modules: [
    '@pinia/nuxt'
  ],
})