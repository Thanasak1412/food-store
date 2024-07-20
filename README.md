## Problems

```bash
1) Write a Calculator class for a food store (you can use any programming language)
    ● This food store only has 7 items on the menu:
        ○ Red set: 50 THB/set
        ○ Green set: 40 THB/set
        ○ Blue set: 30 THB/set
        ○ Yellow set: 50 THB/set
        ○ Pink set: 80 THB/set
        ○ Purple set: 90 THB/set
        ○ Orange set: 120 THB/set
    ● Customers can order multiple items
    ● Write a function that receives these 7 items, calculates, and returns the price.
    ● Conditions:
        ○ Customers can get a 10% discount if they have a member card.
        ○ Ordering doubles of Orange, Pink, or Green sets will get a 5% discount.
    ● If you provide unit tests, you will get an extra score.
    ● Example:
        ○ Desk#1: Customers order Red set and Green set; the price from calculation is 90
        ○ Customers can use a 10% discount card, then the price should be deducted by the discount amount.
        ○ For Orange sets, if customers order more than 2 items per bill, they will get a 5% discount.
```

## Test

```bash
# unit tests
$ npm run test
$ npm run test:watch
```
