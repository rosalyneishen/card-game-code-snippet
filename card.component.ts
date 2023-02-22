import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <table>
      <tbody>
        <tr>
          <td *ngFor="let card of detailsArray" >
            <div (click)="updateStatus(card)">
                {{card.status}}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
`
})
export class AppComponent implements OnInit {
  count: number = 4;
  cardsArray: Array<number>;
  detailsArray: Array<any> = [];
  
  ngOnInit() {
    
    this.cardsArray = Array.from(Array(this.count).keys());
    this.cardsArray.forEach(item => {
      let cardDetail = {
        id: item,
        status: "down"
      };
      
      this.detailsArray.push(cardDetail)
    })
  }
  
  updateStatus(card: any):void {
    console.log(card);
    if (card.status !== "up") {
      this.detailsArray.forEach(item => {
        item.status = "down";
      })
      card.status = "up";
    }
  }
}
