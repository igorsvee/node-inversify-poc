export default interface IGenericDao<T, PK> {
    create(instance: T): Promise<PK>;

    findById(key: PK): Promise<T>;

    findAll(start: number, count: number): Promise<Array<T>>;
}