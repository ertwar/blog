import { IPost } from 'app/shared/model/post.model';

export interface ITag {
  id?: number;
  tagtext?: string;
  posts?: IPost[];
}

export class Tag implements ITag {
  constructor(public id?: number, public tagtext?: string, public posts?: IPost[]) {}
}
