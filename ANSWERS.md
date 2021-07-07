- [ ] Why would you use class component over function components (removing hooks from the question)?
    
    - In class components, you have access to the lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.

    - componentDidMount()
        method runs after component first render. It can be used to fetch data and set state
    - componentDidUpdate()
        method runs afeter component updates. In this method you have access to the previous props and state. It should be used to update the state when necessary, checking if current state or props have changed
    - componentWillUnmount()
        It should be used to avoid any kind of memory leak 

- [ ] What is the purpose of a custom hook?

    - Extracting components logic into reusable functions.

- [ ] Why is it important to test our apps?

    - Because it minimizes the risk of bugs in production code.