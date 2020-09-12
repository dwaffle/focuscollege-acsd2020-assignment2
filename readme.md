# Focus College ACSD Assignment 2

This respository is intended for the use of Focus College Students enrolled in the 
Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

### Example command
---
```
npm start -- calc-wood-needed -width 16 -length 24
npm start -- calc-wood-needed -w 8 -l 8
```
### Tests
--- 
|Test numbers| Output |Test run by |
|------------|--------|------------|
|-width 16 -length 24 | Total boards to purchase after accoudnting for waste: 93  Total posts to purchase after accounting for waste: 7 | Doug Waffle |
|-width 8 -length 8 | Total boards to purchase after accounting for waste: 36  Total posts to purchase after accounting for waste: 4 | Doug Waffle |
|-w 18 -l 8 | Total boards to purchase after accounting for waste: 58  Total posts to purchase after accounting for waste: 4 | Doug Waffle |
|-width 49 -length 22 | Total boards to purchase after accounting for waste: 170 Total posts to purchase after accounting for waste: 11 | Doug Waffle |

### Packages used
---
I used [Yargs](https://swww.npmjs.com/package/yargs) to parse command-line arguments.

### Further help
```
npm start -- calc-wood-needed --help
```
