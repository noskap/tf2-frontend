import { Model } from 'mongoose';
import { BaseService } from "../base.service";
import { PostModel } from "./post.model";
export declare class PostService extends BaseService<PostModel> {
    private readonly postModel;
    constructor(postModel: Model<PostModel>);
}
