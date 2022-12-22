import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-3xl">What are the different ways to manage a state in a React application?</h2>
            <p className='mt-5 mb-3'>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                There are four main types of state you need to properly manage in your React apps:

                Local state
                Global state
                Server state
                URL state
                Let's cover each of these in detail:

                Local (UI) state – Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.</p>

            <h2 className="text-3xl mt-5 mb-3">How does prototypical inheritance work?</h2>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.</p>
            <h2 className="text-3xl mt-5 mb-3">What is a unit test? Why should we write unit tests?</h2>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            <h2 className='text-3xl'> React vs. Angular vs. Vue?</h2>
            <p className='mt-5 mb-3'>
                <li>React vs Vue</li><br />
                <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>
                <li>Vue Vs Angular</li>
                <p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                    It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
            </p>
        </div>
    );
};

export default Blog;