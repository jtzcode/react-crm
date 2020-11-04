import { Guid } from 'guid-typescript';
import firebase from 'firebase';

export interface IDatabaseModelBase {
    ServerID: string;
}

export abstract class FirestoreService<T extends IDatabaseModelBase> {
    constructor(private collection: string) {

    }

    public Save(item: T): Promise<T> {
        return new Promise<T>(async (resolve) => {
            item.ServerID = Guid.create().toString();
            await firebase.firestore().collection(this.collection).doc(item.ServerID).set(item);
            resolve(item);
        });
    }

    public async Get(id: string): Promise<T> {
        const query = await firebase.firestore().collection(this.collection).doc(id).get();
        return <T>query.data();
    }

    public async GetAll(): Promise<T[]> {
        const query = await firebase.firestore().collection(this.collection).get();
        const items: T[] = new Array<T>();

        query.forEach(item => {
            items.push(<T>item.data());
        });

        return items;
    }
}