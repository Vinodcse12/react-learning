/**
 * multiple child ---------->
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm in h1 tag</h1>
 *  </div>
 * </div>
 */

// if have sibling child ----------->
/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm in h1 tag</h1>
 *      <h2>I'm in h2 tag</h2>
 *  </div>
 * </div>
 */



// const parent = React.createElement(
//     "div", 
//     { id: "parent", abc: "xyz"}, 
//     React.createElement(
//         "div",
//         { id: "child", abc: "xyz"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm in h1 tag"
//         )
//     )
//    );


// so if we have number of element in html then the structure will very complicated for developer to write more
// complex code 
// to overcome this problem we have JSX  ----------- bye bye React.createElement ----------

const parent = React.createElement(
    "div", 
    { id: "parent", abc: "xyz"}, 
    React.createElement(
        "div",
        { id: "child", abc: "xyz"},
        [React.createElement(
            "h1",
            {},
            "I'm in h1 tag"
        ),
        React.createElement(
            "h2",
            {},
            "I'm in h2 tag"
        )
        ]
    )
   );
        
    ReactDOM.render(parent, document.getElementById('root'));