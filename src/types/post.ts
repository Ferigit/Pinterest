export interface IPost {
  id?: string;
  title: string;
  description: string;
  image: any;
  tags: (string | undefined)[];
  publishDate: Date;
}
export interface AddNewPostFormType {
  title: string | undefined;
  description: string | undefined;
  tags: (string | undefined)[];
  image: File;
  publishDate: Date;
}
