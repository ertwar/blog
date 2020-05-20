import { ITag } from 'app/shared/model/tag.model';

export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  tags?: ITag[];
}

export class Post implements IPost {
  constructor(public id?: number, public title?: string, public content?: string, public tags?: ITag[]) {}
}
