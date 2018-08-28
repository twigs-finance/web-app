import { TransactionType } from './transaction.type';

export class Transaction {
    id: number;
    title: string;
    description: string;
    amount: number;
    date: Date;
    categoryId: number;
    type: TransactionType;
}