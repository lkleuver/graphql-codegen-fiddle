export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Book = {
   __typename?: 'Book',
  id: Scalars['ID'],
  title: Scalars['String'],
  pages: Array<Page>,
};

export type Page = {
   __typename?: 'Page',
  id: Scalars['ID'],
  number: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  list?: Maybe<Array<Maybe<Book>>>,
  pages?: Maybe<Array<Maybe<Page>>>,
};
