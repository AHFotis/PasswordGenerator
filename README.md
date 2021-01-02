# What's The Word: Password Generator
An application to create original, secure passwords at the click of a button.

## Link to Deployed Page
You can visit the live application [here](https://ahfotis.github.io/WhatsTheWord/).

## Reference Image
![Password Generator](Reference/app-ref-image.png)

## Application Overview
This application takes in user information through a series of prompts. Users chose:

* The amount of characters (between 8 and 128)
* The type of characters to be included. User must choose at least one from:
    * Lower case letters
    * Upper case letters
    * Numbers
    * Special characters (base on OWASP Foundation list)

The length is returned, the apporpriate character arrays are concated, and a function featuring a for loop and randomizer returns the password as a string to the generator. While loops also used to keep user from inputing a string or unusable number for length and for not choosing at least one character form.

## Project Criteria

### User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

### Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Credits
Starter code created and supplied by Trilogy Education Services.

## License
MIT License

Copyright (c) [2020] [Anna Hickey Fotis]
