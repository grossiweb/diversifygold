import { GraphQLClient } from 'graphql-request'

const WP_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ||
  'https://your-wordpress-site.com/graphql'

// Server-side GraphQL client (no caching by default — use Next.js fetch cache)
export const wpClient = new GraphQLClient(WP_GRAPHQL_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
})

// Helper: run a GraphQL query with Next.js fetch cache tags
export async function fetchWP<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate: number | false = 3600
): Promise<T> {
  try {
    const data = await wpClient.request<T>(query, variables ?? {})
    return data
  } catch (error) {
    console.error('[WordPress GraphQL Error]', error)
    throw error
  }
}
