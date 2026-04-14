

export type ApiUser = {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
};

export type GetUsersResponse = {
  results: ApiUser[];
};


export type User = {
    id: string;
    name: string;
    picture: string;
}