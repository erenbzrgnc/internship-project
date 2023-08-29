import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Keyword } from '../model/keyword';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { KeywordService } from '../services/keyword.service';

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

  keywordForm: FormGroup;

  constructor(private KeywordService: KeywordService) { }

  ngOnInit():void {
    console.log(this.keyword);
    this.keywordForm = new FormGroup({
      'keyword': new FormControl(this.keyword.keyword, Validators.required),  // Assuming a keyword is required
      'matchType': new FormControl(this.keyword.matchType, Validators.required), // Setting default value as 'broad'
      'bid': new FormControl(this.keyword.bid, [Validators.required, Validators.min(0)])
    });
    this.keywordForm.controls['keyword'].disable();
        // Listen for form value changes
        this.keywordForm.valueChanges.pipe(   debounceTime(300) ).subscribe(val => {
          const emittedValue = {
            keyword: this.keyword.keyword,
            ...val
            
          };
          this.keywordChanged.emit(emittedValue);
        });

        this.suggestedBid$ = this.KeywordService.getBidValueForKeyword(this.keyword.keyword);
      
  }

  

  // This method can be implemented if the "X" button is supposed to remove the form
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
