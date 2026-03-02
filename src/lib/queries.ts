import { gql } from 'graphql-request'

// ─── Posts / Blog ─────────────────────────────────────────────────────────────

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        slug
        title
        date
        excerpt
        commentCount
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      date
      content
      excerpt
      commentCount
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      seo {
        title
        metaDesc
      }
    }
  }
`

// ─── Pages ────────────────────────────────────────────────────────────────────

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        metaDesc
      }
    }
  }
`

// ─── Home Page (ACF) ──────────────────────────────────────────────────────────

export const GET_HOME_PAGE = gql`
  query GetHomePage {
    page(id: "/", idType: URI) {
      id
      title
      homePage {
        heroHeading
        heroSubheading
        heroImage {
          sourceUrl
        }
        whyUsTitle
        whyUsDescription
        whyUsImage {
          sourceUrl
        }
        whyGoldTitle
        whyGoldContent
        howToStartTitle
        howToStartContent
        educationBody
        iraTitle
        iraContent
        featuredLogos {
          logoName
          logoImage {
            sourceUrl
          }
        }
      }
    }
  }
`

// ─── Menus ─────────────────────────────────────────────────────────────────────

export const GET_MENU = gql`
  query GetMenu($location: MenuLocationEnum!) {
    menus(where: { location: $location }) {
      nodes {
        menuItems {
          nodes {
            id
            label
            url
            parentId
            childItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  }
`

// ─── Site Settings (ACF Options) ─────────────────────────────────────────────

export const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    siteSettings {
      siteSettingsFields {
        phoneNumber
        email
        address
        socialFacebook
        socialTwitter
        socialLinkedin
        socialYoutube
        disclaimerText
        footerCopyright
      }
    }
  }
`

// ─── Products ─────────────────────────────────────────────────────────────────

export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 12) {
    products(first: $first) {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        productFields {
          price
          category
          description
          metal
          weight
        }
      }
    }
  }
`
