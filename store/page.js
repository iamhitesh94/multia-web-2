import ApolloClient, { gql } from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const state = () => ({
  homePage: [],
  aboutPage: [],
  clientsPage: [],
  careerPage: [],
  collaborationsPage: [],
  contactPage: [],
  internshipPage: [],
  servicePage: [],
  storyPage: [],
  teamPage: [],
  jobDetail:[],
  projects:[],
  projectsPagination:[],
  projectDetail:[],
  projectByServices:[],
  projectByClients:[],
  policyPage:[],
  journalsPage:[],
  journalDetailPage:[],
  relatedJournals:[]
})

export const mutations = {
  SET_HOMEPAGE_DATA(state, value) {
    state.homePage = value
  },
  SET_ABOUTPAGE_DATA(state, value) {
    state.aboutPage = value
  },
  SET_CLIENTSPAGE_DATA(state, value) {
    state.clientsPage = value
  },
  SET_CAREERPAGE_DATA(state, value) {
    state.careerPage = value
  },
  SET_COLLABORATIONSPAGE_DATA(state, value) {
    state.collaborationsPage = value
  },
  SET_CONTACTPAGE_DATA(state, value) {
    state.contactPage = value
  },
  SET_INTERNSHIPPAGE_DATA(state, value) {
    state.internshipPage = value
  },
  SET_SERVICEPAGE_DATA(state, value) {
    state.servicePage = value
  },
  SET_STORYPAGE_DATA(state, value) {
    state.storyPage = value
  },
  SET_TEAMPAGE_DATA(state, value) {
    state.teamPage = value
  },
  SET_JOB_DATA(state, value) {
    state.jobDetail = value
  },
  SET_PROJECTS_DATA(state, value) {
    state.projects = value
  },
  SET_PROJECT_DETAIL_DATA(state, value) {
    state.projectDetail = value
  },
  SET_PROJECTS_SERVICES_DATA(state, value) {
    state.projectByServices = value
  },
  SET_PROJECTS_CLIENTS_DATA(state, value) {
    state.projectByClients = value
  },
  SET_PRIVACY_PAGE_DATA(state, value) {
    state.policyPage = value
  },
  SET_JOURNALS_PAGE_DATA(state, value) {
    state.journalsPage = value
  },
  SET_JOURNAL_DETAIL_PAGE_DATA(state, value) {
    state.journalDetailPage = value
  },
  SET_RELATED_JOURNALS_PAGE_DATA(state, value) {
    state.relatedJournals = value
  }
}

const client = new ApolloClient({
  uri: process.env.baseUrl + `multiaweb2022graphql`,
  fetch,
  headers: {
    Authorization: 'Basic YWRtaW46VWRNOCB0RUY1IHRhc2QgVkdvbCBDTGRpIGo5elM='
  }
})

const HomepageQuery = gql`
query GetContentNode($id: ID!) {
    page(id: $id, idType: URI) {
      slug
      title
      uri
      homePage {
        headerLines {
          line
          isWhilteText
        }
        workSecContent
        workSecButtonLink {
          ...AcfLinkFragment1
        }
        works {
          ... on Work {
            id
            title
            workId
            uri
            featuredImage {
              node {
                title
                sourceUrl
                altText
              }
            }
            excerpt(format: RAW)
            workOptions {
              ...Work_WorkoptionsFragment
            }
          }
        }
        brandSliderSecBrandTitles {
          slide {
            title
          }
        }
        aboutSecText
        aboutSecBtnLink {
          ...AcfLinkFragment1
        }
        lines {
          lineText
          hasIcon
          icon {
            altText
            title
            sourceUrl
          }
        }
        lineLink {
          ...AcfLinkFragment1
        }
        clientsSecTitle
        clientsSecSubTitle
        clientsSecButtonLink {
          ...AcfLinkFragment1
        }
        clientsSecLogos {
          slide {
            logo {
              altText
              sourceUrl
              title
            }
          }
        }
        journals {
          ... on Post {
            title
            uri
            journalOption {
              ...Journal_JournaloptionFragment
            }
          }
        }
        journalSecButtonLink {
          ...AcfLinkFragment1
        }
      }
    }
  }
  fragment Work_WorkoptionsFragment on Work_Workoptions {
    images {
      image {
        altText
        title
        sourceUrl
      }
    }
  }
  fragment Journal_JournaloptionFragment on Post_Journaloption {
    date
    homePageListingSlidingText {
      slide {
        text
        image {
          altText
          title
          sourceUrl
        }
        hasTextimage
      }
    }
    homePageListingTitle
  }
  fragment AcfLinkFragment1 on AcfLink {
    target
    title
    url
  }
`

const aboutPageQuery = gql`
query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_AboutPage {
        templateName
        aboutOptions {
          bannerSecTitle
          bannerSecText
          bannerSecImage {
            ...MediaItemFragment
          }
          storySecText
          storySecButtonLink {
            ...AcfLinkFragment
          }
          counterSecTitle
          counterSecImage {
            ...MediaItemFragment
          }
          counters {
            number
            label
          }
          quoteSecText
          quoteSecName
          imageSecImage {
            ...MediaItemFragment
          }
          waySecTitle
          waySecLines {
            lineText
          }
          teamSecText
          teamSecTitle
          teamSecImages {
            image {
              ...MediaItemFragment
            }
          }
          teamSecButtonLink {
            ...AcfLinkFragment
          }
          brandsSecText
          brandsSecImages {
            slide {
              image {
                ...MediaItemFragment
              }
            }
          }
          brandsSecButtonLink {
            ...AcfLinkFragment
          }
          awardsSecTitle
          awards {
            year
            name
          }
          multiversitySecText
          multiversitySecImageIcon {
            ...MediaItemFragment
          }
          multiversitySecImages {
            slide {
              image {
                ...MediaItemFragment
              }
            }
          }
          callToActionSecTitle
          callToActionSecButtonLink{
            ...AcfLinkFragment
          }
          callToActionSecImage{
            ...MediaItemFragment
          }
          reviews {
            ... on Review {
              id
              content
              title
              reviewOption {
                designation
              }
            }
          }
        }
      }
    }
  }
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}

fragment AcfLinkFragment on AcfLink {
  url
  title
  target
}
`;

const clientPageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_ClientsPage {
        clientsPageOption {
          bannerSecTitleLines {
            line
            hasWhiteText
          }
          bannerSecText
          clientsLogosSecLogos {
            image {
              ...MediaItemFragment
            }
          }
          serviceSecTitle
          serviceSecText
          serviceSecServices {
            column {
              title
            }
          }
          reviewsSecReviews {
            ... on Review {
              id
              title
              content(format: RENDERED)
              reviewOption {
                designation
              }
            }
          }
          reviewsSecBackgroundImage{
            ...MediaItemFragment
          }
        }
      }
    }
  }
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const careerPageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_CareerPage {
        templateName
        careerPageOption {
          bannerSecTitle
          bannerSecSubTitle
          futureSecContent
          futureSecImages {
            image {
              ...MediaItemFragment
            }
          }
          positionsSecTitle
          positionsSecJobs {
            ... on Job {
              id
              title
              uri
              jobDetail {
                slidingText {
                  slide {
                    text
                    hasTextimage
                    image {
                      ...MediaItemFragment
                    }
                  }
                }
              }
            }
          }
          internshipSecText
          internshipSecImageRight {
            ...MediaItemFragment
          }
          internshipSecImageLeft {
            ...MediaItemFragment
          }
          internshipSecButtonLink{
            ...AcfLinkFragment
          }
          reviews {
            ... on Review {
              id
              content
              title
              reviewOption {
                designation
              }
            }
          }
          slidingTextSecTexts {
            slide {
              title
            }
          }
          testamentSecImage {
            ...MediaItemFragment
          }
          testamentSecContent
          testamentSecButtonLink{
            ...AcfLinkFragment
          }
          growSecTitle
          growSecRightBlocks {
            title
            content
          }
          growSecLeftBlocks {
            title
            content
          }
          imageSliderSecImages {
            slide {
              image {
                ...MediaItemFragment
              }
            }
          }
          qouteSecText
          qouteSecName
          faqSecTitle
          faqs {
            question
            answer
          }
          callToActionSecTitle
          callToActionSecText
          callToActionSecButtonLink{
            ...AcfLinkFragment
          }
        }
      }
    }
  }
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}

fragment AcfLinkFragment on AcfLink {
  url
  title
  target
}`;


const collaborationsPageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_CollaborationsPage {
        templateName
        collaborationsOption {
          bannerSecTitleLines {
            line
          }
          collaborations {
            title
            content
            images {
              image{
                ...MediaItemFragment
              }
              class
            }
          }
          formSecTitle
          formSecShortcode
          formHelpOptions{
            option
          }
        }
      }
    }
  }
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const contactpageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_ContactPage {
        templateName
        contactPageOption {
          bannerSecTitleLines {
            line
          }
          formSecTitle
          formSecShortcode
          officeSecTitle
          officesSecButtonLink {
            ...AcfLinkFragment1
          }
          offices {
            offices {
              city
              address
            }
            countryName
          }
          callToActionSecTitle
          callToActionSecText
          callToActionSecLink {
            ...AcfLinkFragment1
          }
          imagesSection {
            image {
              ...MediaItemFragment
            }
          }
        }
      }
    }
  }
}

fragment AcfLinkFragment1 on AcfLink {
  target
  title
  url
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const InternshipPageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_InternshipPage {
        templateName
        internshipPageOption {
          bannerSecTitleLines {
            line
          }
          imageBlocksSecBlocks {
            text
            image {
              ...MediaItemFragment
            }
          }
          believeSecContent
          believeSecButton {
            ...AcfLinkFragment1
          }
          slidingTextSecTexts {
            lines {
              line
            }
          }
          reviews {
            ... on Review {
              id
              content
              reviewOption {
                designation
              }
              title
            }
          }
          formSecTitle
          formSecText
          formSecShortcode
          formSecPositions {
            title
          }
          callToActionSecTitle
          callToActionSecImage{
            ...MediaItemFragment
          }
          callToActionSecButtonLink{
            ...AcfLinkFragment1
          }
        }
      }
    }
  }
}

fragment AcfLinkFragment1 on AcfLink {
  target
  title
  url
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const servicePageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_ServicesPage {
        templateName
        servicePageOption {
          bannerSecTitleLines {
            hasIcon
            icon {
              ...MediaItemFragment
            }
            title
            isWhiteText
          }
          bannerSecText
          circleSecLeftTitle
          circleSecLeftContent
          circleSecRightTitle
          circleSecRightContent
          blocks {
            content
            image {
              ...MediaItemFragment
            }
            points {
              column {
                text
              }
            }
          }
          interactionSecText
          interactionSecName
          interactionSecImage {
            ...MediaItemFragment
          }
          workSecTitle
          workSecBlocks {
            title
            text
            icon {
              ...MediaItemFragment
            }
          }
          callToActionSecTitle
          callToActionSecImage{
            ...MediaItemFragment
          }
          callToActionSecButtonLink{
            ...AcfLinkFragment1
          }
        }
      }
    }
  }
}

fragment AcfLinkFragment1 on AcfLink {
  target
  title
  url
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const StoryPageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_StoryPage {
        templateName
        storyPageOption {
          bannerSecTitleLines {
            lineText
          }
          bannerSecBackgroundImage {
            ...MediaItemFragment
          }
          storyBlocksBlocks {
            style
            content
            imagePosition
            image {
              ...MediaItemFragment
            }
            class
          }
          lines {
            lineText
          }
          storyBlocks2Blocks {
            style
            content
            imagePosition
            image {
              ...MediaItemFragment
            }
            class
          }
          texts {
            slide {
              text
            }
          }
          qouteSecImage {
            ...MediaItemFragment
          }
          qouteSecContent
          scienceSecContent
          scienceSecButtonLink {
            ...AcfLinkFragment1
          }
          bottomSlidingTextSecTexts {
            slide {
              text
            }
          }
          callToActionSecTitle
          callToActionSecLink{
            ...AcfLinkFragment1
          }
          callToActionSecImage{
            ...MediaItemFragment
          }
        }
      }
    }
  }
}

fragment AcfLinkFragment1 on AcfLink {
  target
  title
  url
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const TeamPageQuery = gql`query GetContentNode($id: ID!) {
  page(id: $id, idType: URI) {
    slug
    uri
    title
    template {
      ... on Template_TeamPage {
        templateName
        teamPageOptions {
          titleLines {
            line
          }
          callToActionSecTitle
          callToActionSecImage {
            ...MediaItemFragment
          }
          callToActionSecButtonLink {
            ...AcfLinkFragment1
          }
          teamMembers {
            designation
            content
            image{
              ...MediaItemFragment
            }
            instagramLink
            isCanterBlock
            linkedinLink
            name
            secondImage{
              ...MediaItemFragment
            }
            style
          }
        }
      }
    }
  }
}

fragment AcfLinkFragment1 on AcfLink {
  target
  title
  url
}

fragment MediaItemFragment on MediaItem {
  altText
  title
  sourceUrl
}`;

const JobDetailQuery = gql`query GetContentNode($id: ID!) {
  job(id: $id, idType: SLUG) {
    jobDetail {
      bannerSecTitleLines {
        text
      }
      bannerSecText
      lookingForSecTitle
      lookingForSecRequirements {
        requirementText
      }
      skillSecTitle
      skillSecText
      skillSecSkills {
        content
      }
      offerSecTitle
      offerSecText
      processSecTitle
      processSecSteps {
        step
      }
      formSecTitle
      formSecText
    }
  }
}
`;

const worksQuery = gql`query Works {
  works {
    nodes {
      title
      uri
      featuredImage {
        node {
          sourceUrl
          title
        }
      }
    }
  }
}`;

const workDetailQuery = gql`query WorkQuery($id: ID = "") {
  work(id: $id, idType: URI) {
    id
    databaseId
    title
    uri
    content
    featuredImage {
      node {
        ...MediaItemFragment
      }
    }
    workServices {
      nodes {
        name
        uri
      }
    }
    clients {
      nodes {
        name
        uri
      }
    }
    workOptions {
      bannerLines {
        text
        isItalic
      }
      bannerImage {
        ...MediaItemFragment
      }
      websiteUrl
      projectImages {
        image {
          ...MediaItemFragment
        }
      }
      solutionSecContent
      solutionSecImages {
        image {
          ...MediaItemFragment
        }
        class
      }
      imagesAfterSolutionFullWidthImages {
        image {
          ...MediaItemFragment
        }
      }
      imagesAfterSolutionCenterImages{
        image {
          ...MediaItemFragment
        }
      }
      qouteSecText
      blocks {
        type
        content
        image {
          ...MediaItemFragment
        }
        image2 {
          ...MediaItemFragment
        }
        images {
          background {
            ...MediaItemFragment
          }
          image {
            ...MediaItemFragment
          }
        }
      }
    }
  }
}

fragment MediaItemFragment on MediaItem {
  title
  sourceUrl
  altText
}`

const privacyPolicyQuery= gql`query pageQuery($id: ID = "") {
  page(id: $id, idType: URI) {
    content
    template {
      ... on DefaultTemplate {
        privacyOption {
          lines {
            line
            isWhiteText
          }
          formSecHasForm
          formSecFormId
        }
      }
    }
  }
}`; 

const projectsLoadmore = gql`query NewQuery($after: String = "", $before: String = "", $first: Int = 10) {
  works(first: $first, before: $before, after: $after, where: {}) {
    nodes {
      title
      uri
      workId
      featuredImage {
        node {
          title
          sourceUrl
        }
      }
      excerpt(format: RAW)
    }
    pageInfo {
      startCursor
      hasPreviousPage
      hasNextPage
      endCursor
    }
  }
}`;

const projectsServicesQuery = gql`query projectsServicesQuery($first: Int = 10) {
  workServices {
    nodes {
      uri
      workServiceId
      slug
      parentId
      name
      count
      works(first: $first) {
        nodes {
          title
          uri
          workId
          excerpt(format: RAW)
          featuredImage {
            node {
              sourceUrl
              title
            }
          }
        }
      }
    }
  }
}`;

const workServiceQuery = gql`query workServiceQuery($id: ID = "") {
  workService(id: $id, idType: SLUG) {
    name
    slug
    uri
    works {
      nodes{
        title
        uri
        workId
        excerpt(format: RAW)
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
    }
  }
}`;

const projectsClientsQuery = gql`query projectsClientsQuery($first: Int = 10) {
  clients {
    nodes {
      uri
      slug
      parentId
      name
      count
      clientId
      works(first: $first) {
        nodes {
          title
          uri
          workId
          excerpt(format: RAW)
          featuredImage {
            node {
              sourceUrl
              title
            }
          }
        }
      }
    }
  }
}`;

const projectsClientQuery = gql`query clientQuery($id: ID = "") {
  client(id: $id, idType: SLUG) {
    name
    slug
    uri
    works {
      nodes{
        title
        uri
        workId
        excerpt(format: RAW)
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
      }
    }
  }
}`

const journalsPageQuery = gql`query journalsPageQuery($id: ID = "") {
  page(id: $id, idType: URI) {
    id
    content(format: RENDERED)
    template {
      ... on Template_JournalPage {
        templateName
        journalPageOption {
          lines {
            line
          }
          sections {
            selectCategory {
              id
              name
              uri
              slug
              posts(first: 3) {
                nodes {
                  title
                  uri
                  featuredImage {
                    node {
                      sourceUrl
                      title
                    }
                  }
                }
              }
              count
            }
            showSectionTitle
          }
        }
      }
    }
  }
}`;

const postQuery = gql`query PostQuery($id: ID = "") {
  post(id: $id, idType: URI) {
    id
    postId
    author {
      node {
        firstName
        lastName
        nicename
        nickname
      }
    }
    date
    content(format: RENDERED)
    title
    categories {
      nodes {
        name
        slug
        uri
        databaseId
      }
    }
    featuredImage {
      node {
        ...MediaItemFragment
      }
    }
    postDetailOptions {
      bannerTitle
      bannerImage {
        ...MediaItemFragment
      }
      needSecImage {
        ...MediaItemFragment
      }
      needSecContent
      images {
        slide {
          image {
            ...MediaItemFragment
          }
        }
      }
      challengesSecContent
      videoSecUrl
      videoSecImage {
        ...MediaItemFragment
      }
      solutionSecContent
    }
  }
}

fragment MediaItemFragment on MediaItem {
  sourceUrl
  title
}`

const relatedPostQuery = gql`query relatedQuery($categoryId: Int = 10, $notIn: [ID] = "", $first: Int = 2) {
  posts(
    where: {categoryId: $categoryId, notIn: $notIn, orderby: {field: AUTHOR, order: ASC}}
    first: $first
  ) {
    nodes{
      id
      title
      uri
      featuredImage {
        node {
          title
          sourceUrl
        }
      }
    }
  }
}`;


export const actions = {
  async getHomePageData({ commit }, slug) {
    const result = await client.query({
      query: HomepageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_HOMEPAGE_DATA', page)
  },
  async getAboutPageData({ commit }, slug) {
    const result = await client.query({
      query: aboutPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_ABOUTPAGE_DATA', page)
  },
  async getClientsPageData({ commit }, slug) {
    const result = await client.query({
      query: clientPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_CLIENTSPAGE_DATA', page)
  },
  async getCareerPageData({ commit }, slug) {
    const result = await client.query({
      query: careerPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_CAREERPAGE_DATA', page)
  },
  async getCollaborationsPageData({ commit }, slug) {
    const result = await client.query({
      query: collaborationsPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_COLLABORATIONSPAGE_DATA', page)
  },
  async getContactPageData({ commit }, slug) {
    const result = await client.query({
      query: contactpageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_CONTACTPAGE_DATA', page)
  },
  async getInternshipPageData({ commit }, slug) {
    const result = await client.query({
      query: InternshipPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_INTERNSHIPPAGE_DATA', page)
  },
  async getServicePageData({ commit }, slug) {
    const result = await client.query({
      query: servicePageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_SERVICEPAGE_DATA', page)
  },
  async getStoryPageData({ commit }, slug) {
    const result = await client.query({
      query: StoryPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_STORYPAGE_DATA', page)
  },
  async getTeamPageData({ commit }, slug) {
    const result = await client.query({
      query: TeamPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_TEAMPAGE_DATA', page)
  },
  async getJobPageData({ commit }, slug){
    const result = await client.query({
      query: JobDetailQuery,
      variables: {
        id: slug,
      },
    })
    const job = result.data?.job
    commit('SET_JOB_DATA', job)
  },
  async getWorksData({ commit }){
    const result = await client.query({
      query: worksQuery,
    })
    const works = result.data?.works.nodes
    commit('SET_PROJECTS_DATA', works)
  },
  async getWorkData({ commit }, slug){
    const result = await client.query({
      query: workDetailQuery,
      variables: {
        id: slug,
      },
    })
    const work = result.data?.work
    commit('SET_PROJECT_DETAIL_DATA', work)
  },
  async getPolicyPageData({ commit }, slug){
    const result = await client.query({
      query: privacyPolicyQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_PRIVACY_PAGE_DATA', page)
  },
  async getProjectByPagination({ commit }, pagination){
    const result = await client.query({
      query: projectsLoadmore,
      variables: pagination,
    })
    const works = result.data?.works
    commit('SET_PROJECTS_DATA', works)
  },
  async getProjectByServices({ commit }, pagination){
    const result = await client.query({
      query: projectsServicesQuery,
      variables: pagination,
    })
    const worksServices = result.data?.workServices.nodes
    commit('SET_PROJECTS_SERVICES_DATA', worksServices)
  },
  async getProjectByService({ commit }, queryVariables){
    const result = await client.query({
      query: workServiceQuery,
      variables: queryVariables,
    })
    const worksService = result.data?.workService
    commit('SET_PROJECTS_SERVICES_DATA', worksService)
  },
  async getProjectByClients({ commit }, pagination){
    const result = await client.query({
      query: projectsClientsQuery,
      variables: pagination,
    })
    const worksServices = result.data?.clients.nodes
    commit('SET_PROJECTS_CLIENTS_DATA', worksServices)
  },
  async getProjectByClient({ commit }, queryVariables){
    const result = await client.query({
      query: projectsClientQuery,
      variables: queryVariables,
    })
    const projectClient = result.data.client
    commit('SET_PROJECTS_CLIENTS_DATA', projectClient)
  },
  async getJournalsPageData({ commit }, slug){
    const result = await client.query({
      query: journalsPageQuery,
      variables: {
        id: slug,
      },
    })
    const page = result.data?.page
    commit('SET_JOURNALS_PAGE_DATA', page)
  },
  async getJournalDetailPageData({ commit }, slug){
    const result = await client.query({
      query: postQuery,
      variables: {
        id: slug,
      },
    })
    const post = result.data?.post
    commit('SET_JOURNAL_DETAIL_PAGE_DATA', post)
  },
  async getRelatedJournalsPageData({ commit }, queryVariables){
    const result = await client.query({
      query: relatedPostQuery,
      variables: queryVariables,
    })
    const post = result.data?.posts
    commit('SET_RELATED_JOURNALS_PAGE_DATA', post)
  },
}