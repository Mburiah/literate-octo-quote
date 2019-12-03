import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live ',
    'Rick Cook, The Wizardry Compiled', 'Linus Torvalds',
    new Date(2019, 12, 3), 0, 0),
    new Quote(2, 'Good programmers write code that humans can understand', 'Martin Fowler', 'Larry Niven',
    new Date(2019, 12, 1), 0, 0),
    new Quote(3, 'I\'m not a great programmer; I\'m just a good programmer with great habits..', 'Why The Lucky Stiff', 'Kent Beck',
    new Date(2019 , 12, 3), 0, 0),
  ];
  constructor() { }

  ngOnInit() {
  }

}
