# **Beep Boop**

#### Pablo Barreyro

## Description

A web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the following exceptions:

* Numbers that contain a 0 are replaced (all digits) with "Beep!"
* Numbers that contain a 1 are replaced (all digits) with "Boop!"
* Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

**BDD Breakdown**

Behavior | Input | Ouput
------------ | ------------- | -------------
Takes number(n) and returns range from 0 to n| 10 | [0,1,2,3,4,5,6,7,8,9,10]
Finds numbers in range(0-n) with 1+ occurrence of 0 and replaces with _"Beep!"_ | [0,1,2,3 ... 8,9,10] | [_"Beep!"_,1,2,3 ... 8,9,_"Beep!"_]
Finds numbers in range(0-n) with 1+ occurrence of 1 and replaces with _"Boop!"_ | [0,1,2,3 ... 8,9,10] | [0,_"Boop!"_,2,3 ... 8,9,_"Boop!"_]
Find numbers in range(0-n) divisible by 3 and replaces with _"I'm sorry, Dave. I'm afraid I can't do that."_ | [0,1,2,3 ... 8,9,10] | [0,1,2,_"I'm sorry, Dave. I'm afraid I can't do that."_ ... 8,_"I'm sorry, Dave. I'm afraid I can't do that."_,10]
Applies 'divisible by 3' rule over 'contains 1' rule | [... 17, 18] | [..., 17, _"I'm sorry, Dave. I'm afraid I can't do that."_]
Applies 'contains 1' rule over 'contains 0' rule | [... 9, 10 ]| [... 9, _"Boop!"_ ]
Validates input number type | "ten" | "Please input your number in digits (0-9)"
Allow multiple inputs without reloading page| $("#myForm").reset() | "Enter number here"


## Setup/Installation Requirements

* [View/Clone repo](https://github.com/pabarreyro/beep-boop)
* [View demo](https://pabarreyro.github.io/beep-boop)

## Technologies Used

* HTML
* CSS _(Bootstrap 4)_
* JavaScript _(jQuery 3.3.2)_

## License

MIT License

Copyright (c) 2018 Pablo Barreyro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2018 **_Pablo Barreyro_**
