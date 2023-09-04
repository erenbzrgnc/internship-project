import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Keyword } from '../model/keyword';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, of, tap } from 'rxjs';
import { KeywordService } from '../services/keyword.service';
import { Store } from '@ngrx/store';
import { updateGivenKeyword } from '../store/newcampaign/newcampaign.action';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent {

  @Input() keyword: Keyword;
  @Output() keywordRemoved = new EventEmitter<any>();
  @Output() keywordChanged = new EventEmitter<any>();
  suggestedBid$: Observable<number>;
  saveButton$ = new BehaviorSubject<boolean>(false);


  keywordForm: FormGroup;

  constructor(private KeywordService: KeywordService, private store: Store) {
    console.log("Constructor called");

   }

  ngOnInit():void {
    console.log("ngoninit initialized");
    console.log(this.keyword);






    this.keywordForm = new FormGroup({
      'keyword': new FormControl(this.keyword.keyword, Validators.required),  
      'matchType': new FormControl(this.keyword.matchType, Validators.required), 
      'bid': new FormControl(this.keyword.bid, [Validators.required, Validators.min(0)])
    });
    this.keywordForm.controls['keyword'].disable();
    this.keywordForm.valueChanges.pipe(
      distinctUntilChanged(),
    ).subscribe(() => {
      this.keywordChanged.emit(this.keywordForm.value);
      this.saveButton$.next(true);
    });
    this.suggestedBid$ = this.KeywordService.getBidValueForKeyword(this.keyword.keyword);
      
  }
  

  saveKeyword() {

    console.log("Keyword saved:", this.keywordForm.value);
    const changedKeyword = {
      keyword: this.keyword.keyword,
      ...this.keywordForm.value
      
    };
    this.store.dispatch(updateGivenKeyword({keyword: changedKeyword}));

  }

  removeKeyword() {
    console.log("Keyword removed:", this.keyword);
    this.keywordRemoved.emit(this.keyword);
  }

  setSuggestedBid() {
    this.suggestedBid$.subscribe(suggestedBid => {
      if (suggestedBid !== null) {
        this.keywordForm.controls['bid'].setValue(suggestedBid);
      }
    });
  }
}
