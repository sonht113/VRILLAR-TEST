/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Data = {
  __typename?: 'Data';
  car: Scalars['String']['output'];
  date: Scalars['String']['output'];
  grandPrix: Scalars['String']['output'];
  laps: Scalars['String']['output'];
  time: Scalars['String']['output'];
  winner: Scalars['String']['output'];
};

export type DataF1 = {
  __typename?: 'DataF1';
  data: Array<Data>;
  year: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInputDto = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create: User;
  login: LoginResponse;
  signup: User;
};


export type MutationCreateArgs = {
  body: CreateUserDto;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInputDto;
};


export type MutationSignupArgs = {
  loginUserInput: LoginUserInputDto;
};

export type Query = {
  __typename?: 'Query';
  getAllData: Array<DataF1>;
  getDataByYear: DataF1;
  getDataUserInYearByGrand: Array<Data>;
  getDataUserInYearByLaps: Array<Data>;
  getDataUserInYearWinnerName: Array<Data>;
  getGrandPrixInYear: Array<Scalars['String']['output']>;
  user: User;
  users: Array<User>;
};


export type QueryGetDataByYearArgs = {
  year: Scalars['String']['input'];
};


export type QueryGetDataUserInYearByGrandArgs = {
  grand: Scalars['String']['input'];
  year: Scalars['String']['input'];
};


export type QueryGetDataUserInYearByLapsArgs = {
  lap: Scalars['String']['input'];
  year: Scalars['String']['input'];
};


export type QueryGetDataUserInYearWinnerNameArgs = {
  winnerName: Scalars['String']['input'];
  year: Scalars['String']['input'];
};


export type QueryGetGrandPrixInYearArgs = {
  year: Scalars['String']['input'];
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};
