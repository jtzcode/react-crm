import { IAddress } from "../../addresses/model/address";
import { FirestoreService, IDatabaseModelBase } from "../../common/model/database";

export interface IPerson extends IDatabaseModelBase {
    FirstName: string;
    LastName: string;
    Address: IAddress;
}

export class AddressService extends FirestoreService<IPerson> {
    constructor() {
        super('people');
    }
}