# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the onClick gets fired, which is a passed in prop from App.js
* the dispatcher function fires with and argument of "ADD_ONE", which comes from the addOne function.
*When the dispatcher function iscalled, it basically just calls the reducer function that we wrote, uses the current state and then applies wahtever "action" was passed as an argument.
*A change is made to the state, which triggers a re-render :D
* TotalDisplay shows the total plus 1.
