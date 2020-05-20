import { ITag } from 'app/shared/model/tag.model';

export interface IPost {
  id?: number;
  title?: string;
  contentContentType?: string;
  content?: any;
  tags?: ITag[];
}

export class Post implements IPost {
  constructor(public id?: number, public title?: string, public contentContentType?: string, public content?: any, public tags?: ITag[]) {}
}
