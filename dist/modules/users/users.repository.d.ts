export declare class UsersRepository {
    private collection;
    create(data: any): Promise<any>;
    findAllUsers(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    findByEmail(email: string): Promise<import("mongodb").WithId<import("bson").Document> | null>;
}
//# sourceMappingURL=users.repository.d.ts.map