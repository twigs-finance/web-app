import { Component, OnInit, Input, OnChanges, OnDestroy, Inject, SimpleChanges } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionType } from '../transaction.type';
import { Category } from 'src/app/categories/category';
import { AppComponent } from 'src/app/app.component';
import { TWIGS_SERVICE, TwigsService } from 'src/app/shared/twigs.service';

@Component({
  selector: 'app-add-edit-transaction',
  templateUrl: './add-edit-transaction.component.html',
  styleUrls: ['./add-edit-transaction.component.css']
})
export class AddEditTransactionComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() currentTransaction: Transaction;
  @Input() budgetId: number;
  public transactionType = TransactionType;
  public categories: Category[];
  public rawAmount: string;
  public currentTime: string;
  public transactionDate: string;

  constructor(
    private app: AppComponent,
    @Inject(TWIGS_SERVICE) private twigsService: TwigsService,
  ) { }

  ngOnInit() {
    this.app.title = this.title;
    this.app.backEnabled = true;
    this.getCategories();
    let d: Date;
    if (this.currentTransaction) {
      d = new Date(this.currentTransaction.date);
    } else {
      d = new Date();
    }
    this.transactionDate = d.toLocaleDateString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'});
    this.currentTime = d.toLocaleTimeString(undefined, {hour: '2-digit', hour12: false, minute: '2-digit'});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.currentTransaction) {
      return;
    }

    const d = new Date(changes.currentTransaction.currentValue.date * 1000);
    this.transactionDate = d.toLocaleDateString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'});
    this.currentTime = d.toLocaleTimeString(undefined, {hour: '2-digit', hour12: false, minute: '2-digit'});
  }

  save(): void {
    // The amount will be input as a decimal value so we need to convert it
    // to an integer
    let observable;
    const dateParts = this.transactionDate.split('-');
    this.currentTransaction.date.setFullYear(parseInt(dateParts[0], 10));
    this.currentTransaction.date.setMonth(parseInt(dateParts[1], 10) - 1);
    this.currentTransaction.date.setDate(parseInt(dateParts[2], 10));
    const timeParts = this.currentTime.split(':');
    this.currentTransaction.date.setHours(parseInt(timeParts[0], 10));
    this.currentTransaction.date.setMinutes(parseInt(timeParts[1], 10));
    if (this.currentTransaction.id) {
      // This is an existing transaction, update it
      observable = this.twigsService.updateTransaction(
        this.budgetId,
        this.currentTransaction.id,
        {
          name: this.currentTransaction.title,
          description: this.currentTransaction.description,
          amount: this.currentTransaction.amount * 100,
          date: this.currentTransaction.date,
          category: this.currentTransaction.categoryId,
          expense: this.currentTransaction.expense
        }
      );
    } else {
      // This is a new transaction, save it
      observable = this.twigsService.createTransaction(
        this.budgetId,
        this.currentTransaction.title,
        this.currentTransaction.description,
        this.currentTransaction.amount * 100,
        this.currentTransaction.date,
        this.currentTransaction.expense,
        this.currentTransaction.categoryId,
      );
    }

    observable.subscribe(val => {
      this.app.goBack();
    });
  }

  delete(): void {
    this.twigsService.deleteTransaction(this.budgetId, this.currentTransaction.id).subscribe(() => {
      this.app.goBack();
    });
  }

  getCategories() {
    this.twigsService.getCategories(this.budgetId).subscribe(categories => this.categories = categories);
  }
}
