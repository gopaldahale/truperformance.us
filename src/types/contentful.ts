export interface ContentfulEntry<T> {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };

  fields: T;
}