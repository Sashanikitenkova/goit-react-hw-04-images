import React, {useEffect} from "react";
import {createPortal} from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose,  children }) {

    const handeleKeyDown = e => {
            if(e.code === 'Escape') {
                onClose();
            }
    }

    const handeleOverlayClick = event => {
        if(event.currentTarget === event.target) {
            onClose();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handeleKeyDown);
        return () => {
            window.removeEventListener('keydown', handeleKeyDown);
        }
    })
        
        return createPortal(
              <div className={s.Overlay} onClick={handeleOverlayClick}>
                   <div className={s.Modal}>
                       {children}
                   </div>
              </div>, 
              modalRoot,
        );
}


// import React, {Component} from "react";
// import {createPortal} from 'react-dom';
// import s from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {

//     componentDidMount() {
//         window.addEventListener('keydown', this.handeleKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handeleKeyDown);
//     }

//     handeleKeyDown = e => {
//             if(e.code === 'Escape') {
//                 this.props.onClose();
//             }
//     }

//     handeleOverlayClick = event => {
//         if(event.currentTarget === event.target) {
//             this.props.onClose();
//         }
//     }

//     render () {
        
//         return createPortal(
//               <div className={s.Overlay} onClick={this.handeleOverlayClick}>
//                    <div className={s.Modal}>
//                        {this.props.children}
//                    </div>
//               </div>, 
//               modalRoot,
//         );
//       }
// }
