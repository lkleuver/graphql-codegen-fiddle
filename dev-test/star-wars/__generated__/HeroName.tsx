import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type HeroNameQueryVariables = {
  episode?: Types.Maybe<Types.Episode>;
};

export type HeroNameQuery = { __typename?: 'Query' } & { hero: Types.Maybe<({ __typename?: 'Human' } & Pick<Types.Human, 'name'>) | ({ __typename?: 'Droid' } & Pick<Types.Droid, 'name'>)> };

export const HeroNameDocument = gql`
  query HeroName($episode: Episode) {
    hero(episode: $episode) {
      name
    }
  }
`;
export type HeroNameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HeroNameQuery, HeroNameQueryVariables>, 'query'>;

export const HeroNameComponent = (props: HeroNameComponentProps) => <ApolloReactComponents.Query<HeroNameQuery, HeroNameQueryVariables> query={HeroNameDocument} {...props} />;

export type HeroNameProps<TChildProps = {}> = ApolloReactHoc.DataProps<HeroNameQuery, HeroNameQueryVariables> & TChildProps;
export function withHeroName<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<TProps, HeroNameQuery, HeroNameQueryVariables, HeroNameProps<TChildProps>>) {
  return ApolloReactHoc.withQuery<TProps, HeroNameQuery, HeroNameQueryVariables, HeroNameProps<TChildProps>>(HeroNameDocument, {
    alias: 'heroName',
    ...operationOptions,
  });
}
export type HeroNameQueryResult = ApolloReactCommon.QueryResult<HeroNameQuery, HeroNameQueryVariables>;
