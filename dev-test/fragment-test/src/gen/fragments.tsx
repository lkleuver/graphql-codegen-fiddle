import * as Types from '../../gen/types';

import gql from 'graphql-tag';

export type PageFragment = (
  { __typename?: 'Page' }
  & Pick<Types.Page, 'id' | 'number'>
);

export type BookFragment = (
  { __typename?: 'Book' }
  & Pick<Types.Book, 'id' | 'title'>
  & { pages: Array<(
    { __typename?: 'Page' }
    & PageFragment
  )> }
);

export const PageFragmentDoc = gql`
    fragment Page on Page {
  id
  number
}
    `;
export const BookFragmentDoc = gql`
    fragment Book on Book {
  id
  title
  pages {
    ...Page
  }
}
    ${PageFragmentDoc}`;