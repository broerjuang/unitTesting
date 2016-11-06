## Unit Testing with Mocha

To run the test, you can simply type on your console

```
> mocha test.js
```

and the result will be like this
```
#list
    ✓ It should have the same length between data.length and lib.list().length
    ✓ It should have the same element between constructed lib with manual type
    ✓ It should has the same element for the indexed file is called

  #findByYear
    ✓ It should have the same length between movie 2001 and lib.findByYear(2001).length
    ✓ It should have the same value between movie 2001 and lib.findByYear(2001).length
    ✓ It should have the same value in index 12 between movie 2001 and lib.findByYear(2001).length

    ....
```
