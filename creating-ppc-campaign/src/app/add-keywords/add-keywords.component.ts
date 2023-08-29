import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateKeywords } from '../store/newcampaign/newcampaign.action';
import { Keyword } from '../model/keyword';

@Component({
  selector: 'app-add-keywords',
  templateUrl: './add-keywords.component.html',
  styleUrls: ['./add-keywords.component.css']
})
export class AddKeywordsComponent {
  
  keywordsForm: FormGroup;

  constructor(private store: Store) { }

  ngOnInit() {
    this.keywordsForm = new FormGroup({
      'keywords': new FormControl('') // Initialize with an empty string or default value
    });
  }

  save() {
    const rawKeywords = this.keywordsForm.get('keywords').value;
    
    const keywordsArray: Keyword[] = rawKeywords
        .split('\n')
        .map(keyword => keyword.trim())  // Remove leading and trailing whitespace from each keyword
        .filter(keyword => keyword.length > 0)  // Filter out empty keywords
        .map(keyword => {
            return {
                keyword: keyword,
                matchType: 'broad', // Your arbitrary value
                bid: 0 // Your arbitrary value
            } as Keyword;
        });

    console.log(keywordsArray);
    this.store.dispatch(updateKeywords({keywords: keywordsArray}));
}
  

}
