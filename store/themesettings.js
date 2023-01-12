import ApolloClient, { gql } from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const state = () => ({
    themeSettings: {
        headerLogo: [],
        footerCopyRightText: '',
        footerSocialLinks: [],
        footerImage: [],
    },
    menus:[]
})

export const mutations = {
    SET_THEME_SETTINGS(state, value) {
        state.themeSettings = value
    },
    SET_MENUS(state, value) {
        state.menus = value
    },
}

const client = new ApolloClient({
    uri: process.env.baseUrl+`multiaweb2022graphql`,
    fetch,
    headers:{
      Authorization: 'Basic YWRtaW46VWRNOCB0RUY1IHRhc2QgVkdvbCBDTGRpIGo5elM='
    }
})

const themeSettingsQ = gql`
query ThemeSettings {
  themeGeneralSettings {
    themeSettings {
      footerCopyrightText
      footerLine1
      footerLine2
      footerLogo {
        sourceUrl
        srcSet
        altText
      }
      footerSocialLinks {
        label
        link
      }
      mainLogo {
        sourceUrl
        srcSet
        title
        altText
      }
      readLink {
        url
        title
        target
      }
      toggleMenuBgImage {
        altText
        sourceUrl
        srcSet
        title
      }
      toggleMenuImage {
        altText
        srcSet
        sourceUrl
        title
      }
      toggleMenuSlideText {
        slide {
          text
        }
      }
      footerLineLink {
        url
        title
        target
      }
      textSvg {
        altText
        sourceUrl
        srcSet
        title
      }
      jobDetailFormText
      jobDetailFormId
      jobPositions {
        ... on Job {
          id
          title
        }
      }
      workPagesSecGridLink{
        title
        url
      }
      workPagesSecShowcaseLink{
        title
        url
      }
    }
  }
}
`
const menuBYNameQ = gql`
{
  menus {
    nodes {
      id
      databaseId
      name
      locations
      menuItems {
        edges {
          node {
            id
            label
            parentId
            url
            target
            cssClasses
            uri
          }
        }
      }
    }
  }
}`

export const actions = {
    async getThemeSettings({ commit }) {
        const result = await client.query({
            query: themeSettingsQ,
        })
        const themeSettings = result.data?.themeGeneralSettings.themeSettings
        commit('SET_THEME_SETTINGS', themeSettings)
    },
    async getMenus({ commit }) {
        const result = await client.query({
            query: menuBYNameQ,
        })
        const menus = result.data?.menus.nodes
        commit('SET_MENUS', menus)
    }
}