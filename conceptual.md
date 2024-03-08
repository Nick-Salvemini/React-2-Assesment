### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

It is a React library that allows you to build single-page apps that use client-side routing.

- What is a single page application?

It is an application that dynamically alters the current page, rather than making server requests for each new page.  By using React Router, single page apps can be made in such a way that still allows users to navigate backwards and forwards, as well as bookmark specific routes in the application.

- What are some differences between client side and server side routing?

In client side routing, the user isn't sending constant requests to a server every time the page loads.  This makes the front-end code more complex compared to server side routing, but the back end code is likely to be less complex.  Client side routing also makes for a quicker user experience, as they aren't waiting for the response time of making requests to the server for every new page.

- What are two ways of handling redirects with React Router? When would you use each?

You can either use the Redirect component or call the .push method on the history object.  You would want to use the component when redirecting based on a condition or as the result of certain state or props.  You would use the push method to redirect as the result of an event, such as a form submission. 

- What are two different ways to handle page-not-found user experiences using React Router? 

One way is to use a catch-all path at the end of your routes, setting the path to "*" and using that for render some kind of 404/page-not-found component. Another way would be to programatically render the page-not-found component within another component.  You would use an if-statement, likely checking if some prop value were null, for example, and render the page-not-found component there. 

- How do you grab URL parameters from within a component using React Router?

You would use the useParams hook from react-router-dom.  From there, you would set a variable equal to useParams() and call that variable as needed. 

- What is context in React? When would you use it?

Context is a React feature that lets you call the React.createContext() method to set universal data across your entire application.  This allows you to set data in once component that can be accessed in all lower level components, so instead of having to pass a piece of state through several layers of parent/child components, a component can access the data from the higher level component directly. 

- Describe some differences between class-based components and function
  components in React.

Using class-based components where the original way of writing React.  Function-based components came later and are much easier to write and simpler to pass state from one component to another.  Function-based components also remove the need to have to work around the "this" keyword, and also allow you to use hooks.

- What are some of the problems that hooks were designed to solve?

Primarily, hooks eliminate the need for a lot of repetitive code, and instead allows for more easily reused code across multiple components. It also allowed function components to have access to state, making them an almost universally better option than class components. 