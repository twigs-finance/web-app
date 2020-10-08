import { Component, OnInit, Input, OnDestroy, Inject } from '@angular/core';
import { Category } from '../category';
import { AppComponent } from 'src/app/app.component';
import { TWIGS_SERVICE, TwigsService } from 'src/app/shared/twigs.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() budgetId: number;
  @Input() title: string;
  @Input() currentCategory: Category;

  constructor(
    private app: AppComponent,
    @Inject(TWIGS_SERVICE) private twigsService: TwigsService,
  ) { }

  ngOnInit() {
    this.app.setBackEnabled(true);
    this.app.setTitle(this.title)
  }

  save(): void {
    let observable;
    if (this.currentCategory.id) {
      // This is an existing category, update it
      observable = this.twigsService.updateCategory(
        this.budgetId,
        this.currentCategory.id,
        {
          name: this.currentCategory.title,
          description: this.currentCategory.description,
          amount: this.currentCategory.amount * 100,
          expense: this.currentCategory.expense,
          archived: this.currentCategory.archived
        }
      );
    } else {
      // This is a new category, save it
      observable = this.twigsService.createCategory(
        this.budgetId,
        this.currentCategory.title,
        this.currentCategory.description,
        this.currentCategory.amount * 100,
        this.currentCategory.expense
      );
    }
    observable.subscribe(val => {
      this.app.goBack();
    });
  }

  delete(): void {
    this.twigsService.deleteCategory(this.budgetId, this.currentCategory.id).subscribe(() => {
      this.app.goBack();
    });
  }
}
