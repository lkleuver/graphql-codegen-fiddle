import * as Types from '../../gen/types';

import { BookFragmentDoc, BookFragment } from './fragments';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type ListQueryVariables = {};


export type ListQuery = (
  { __typename?: 'Query' }
  & { list: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Book' }
    & BookFragment
  )>>> }
);

export type PagesQueryVariables = {};


export type PagesQuery = (
  { __typename?: 'Query' }
  & { pages: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Page' }
    & PageFragment
  )>>> }
);


export const ListDocument = gql`
    query List {
  list {
    ...Book
  }
}
    ${BookFragmentDoc}`;
export type ListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ListQuery, ListQueryVariables>, 'query'>;

    export const ListComponent = (props: ListComponentProps) => (
      <ApolloReactComponents.Query<ListQuery, ListQueryVariables> query={ListDocument} {...props} />
    );
    

/**
 * __useListQuery__
 *
 * To run a query within a React component, call `useListQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuery({
 *   variables: {
 *   },
 * });
 */
export function useListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListQuery, ListQueryVariables>) {
        return ApolloReactHooks.useQuery<ListQuery, ListQueryVariables>(ListDocument, baseOptions);
      }
export function useListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListQuery, ListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListQuery, ListQueryVariables>(ListDocument, baseOptions);
        }
export type ListQueryHookResult = ReturnType<typeof useListQuery>;
export type ListLazyQueryHookResult = ReturnType<typeof useListLazyQuery>;
export type ListQueryResult = ApolloReactCommon.QueryResult<ListQuery, ListQueryVariables>;
export const PagesDocument = gql`
    query Pages {
  pages {
    ...Page
  }
}
    ${PageFragmentDoc}`;
export type PagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PagesQuery, PagesQueryVariables>, 'query'>;

    export const PagesComponent = (props: PagesComponentProps) => (
      <ApolloReactComponents.Query<PagesQuery, PagesQueryVariables> query={PagesDocument} {...props} />
    );
    

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
        return ApolloReactHooks.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, baseOptions);
      }
export function usePagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, baseOptions);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = ApolloReactCommon.QueryResult<PagesQuery, PagesQueryVariables>;