import { Model } from 'mongoose';
export declare class BaseService<T> {
    protected readonly BaseModel: Model;
    constructor(BaseModel: Model);
    find(query?: object): Array<T>;
    create(createObject: object): T;
    findById(id: string): T;
    findOne(query: object): T;
    findByIdAndUpdate(id: string, update: object): T;
}
