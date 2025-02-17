# Loose Comparison with Null Values in JavaScript

This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of loose comparison (==) with null values.

The `bug.js` file contains a function that attempts to handle null inputs.  However, due to the use of loose comparison, the function behaves unexpectedly when dealing with 0 values.

The `bugSolution.js` file provides a corrected version using strict comparison (===) to fix the issue.  Strict equality provides more predictable and reliable results. 

This example highlights the importance of using strict comparison in JavaScript to avoid subtle bugs and ensure code correctness.