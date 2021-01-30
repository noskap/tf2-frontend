import { PostService } from "./post.service";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    list(user: string, channel: string): import("./post.model").PostModel[];
    create(content: string, user: string, channel: string): import("./post.model").PostModel;
}
