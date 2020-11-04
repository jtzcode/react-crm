import { FirestoreService, IDatabaseModelBase } from '../../common/model/database';

export interface ILead  extends IDatabaseModelBase {
  Name: string;
  Topic: string;
  Created: Date;
  Status: string;
}
export class LeadsService extends FirestoreService<ILead> {
  constructor() {
    super('leads');
  }
}