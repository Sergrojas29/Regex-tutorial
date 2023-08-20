# Regex!!! Why!? how!?



## Summary

A regular expression, commonly abbreviated as Regex, is a sequence of characters that defines a search pattern. These patterns are used to match character combinations in text. Each character in a regular expression can represent either a literal character or a metacharacter. A metacharacter is a character that has a special meaning, such as the period (.) which represents any single character. On the other hand, literal characters like “a” and “A” represent themselves and are case-sensitive. For example, “a” will only match lowercase “a” while “A” will only match uppercase “A”. Is there anything else you would like me to help with?



## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors

Regex Anchors are a type of token that doesn't match any characters. It instead is used to assesrt the position to match the string. 

    ^ (carrot) determines the beginning of a string of text

    $ (dollar) determines the end of a string of text


### Quantifiers



A quantifier is used to specify how instances of characters or expression to must be represented to be found using a regular expression.



### OR Operator

    OR operator |

Similar to JavaScript the OR operator is | (but is JS is || but close enough).

Known as a chain operator the OR | is used to define a pattern to match

<ins> Examples </ins>

    hi|hello	A string that contains either hi or hello
    (b|cd)ef	A string that contains either bef or cdef
    (a|b)*c 	A string that has a sequence of alternating as and bs, ending with c

### Character Classes

A character class (or character set) allows you to match between letter and digits. 

<ins> Examples </ins>

    \d  Where d stands for digits [0-9]
    \s  Where s stands for space
    \w  Where e stands for word
    [a-z],[0-9][A-Z] range of character classes


### Flags

Flags are optional flags that extend the functionality of a regular expression

<ins> Examples </ins>

    d	Generate indices for substring matches.
    g	Global search
    i	Case-insensitive search
    m	Allows ^ and $ to match newline characters.	
    s	Allows . to match newline characters.	
    u	"Unicode"; treat a pattern as a sequence of Unicode code points.	
    v	An upgrade to the u mode with more Unicode features.	
    y	Perform a "sticky" search that matches starting at the current position in the target string.

### Grouping and Capturing


A grouping ( ) controls the evaluation in the expression. Can also act like a container for a complex expression in certain expressions. 

<ins> Examples </ins>

    (\d){3}  looking for 3 digits



### Bracket Expressions


Bracket expression like {} [] () are used to match single or a group of elements. 

<ins> [] </ins>

    [] closed Bracket indicates a set of characters that will match
    "animal".match(/[abc]/)  // [ 'a', index: 5, input: 'elephant', groups: undefined ]
    "animal".match(/[ABC]/i)  // [ 'a', index: 5, input: 'elephant', groups: undefined ]


Curly braces are used to specify an exact amount of things to match.

<ins> {} </ins>

    {a{2}}  'banana'.match(/na{2}/) // match
    {a{2,4}}  'bananaaa'.match(/a{2,4}/) // match


### Greedy and Lazy Match

There are two types of qualifiers. 

- Greedy - will try to match the longest possible string

    regex = /".+"/

    This is a quote "Hello" to every in the "world" is a common expression in CS

    return "Hello" to every in the "world"

    really wanted only to return "Hello" and "world"


   
- Lazy - the smallest possible string

    regex = /".+?"/g

    This is a quote "Hello" to every in the "world" is a common expression in CS

    return ["Hello", "world"]


### Boundaries

Word boundary \b allows you to carry the match the whole word

    \b  anchor to /\bword\b/

    \B  negated every thing in the boundaries 



### Back-references

You can then refer to the captured text using a backreference. The backreference is a special code that refers to the captured group by its position. The syntax for a backreference is \n, where n is the position of the capturing group you want to reference. The numbering starts from 1 and goes up based on the order of opening parentheses.

For example, if you want to match the same text that was captured by the first capturing group, you would use \1. If you have multiple capturing groups, you can use \2 for the second one, \3 for the third one, and so on.



### Look-ahead and Look-behind

Look-ahead and look-behind in regular expressions allowa you to specify conditions for matching patterns that are not directly a part of the overall match. 

Positive Look-ahead ((?=...)): This asserts that a certain pattern must be followed by another pattern, without including the second pattern in the match result. For example, the pattern foo(?=bar) will match the "foo" only if it is immediately followed by "bar".
Negative Look-ahead ((?!...)): This asserts that a certain pattern must not be followed by another pattern. For example, the pattern foo(?!bar) will match "foo" only if it is not followed by "bar".
Look-behind ((?<=...) and (?<!...)):


<ins> Examples </ins>

    Positive Look-behind ((?<=...)):
    Negative Look-behind ((?<!...)): 


## Author

https://github.com/Sergrojas29
