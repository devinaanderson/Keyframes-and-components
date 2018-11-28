import React, { Component } from 'react'; 


// export default class Counter extends Component {




//     render(props) {
//         return (
//             <div className='app' onClick={props.counter}>
//                 <button>{props.name}</button>
//                 <div>{props.count} times!</div>
//             </div>
//         );
//     }
// }

export const Counter = (props) => {
    return (
        <div className='app'  onClick={props.counter}>
            <button className='button'>{props.name}</button>
            {/* <div>{props.count}!</div> */}

        </div>
    );
}