import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { globalStateRender, renderHighlight } from "../Render/main.js";
import { clearHightlight} from "../Render/main.js";
import { selfHighlight } from "../Render/main.js";
import { clearPreviousSelfHighlight } from "../Render/main.js";
import { moveElement } from "../Render/main.js";
import { checkPieceOfOpponentOnElement } from "../Helper/commonHelper.js";





let hightlight_state = false;

let selfHighlightState = null;

let moveState = null;

function clearHighlightLocal(){
     clearHightlight();
    hightlight_state = false;
}

function movePieceFromXToY(from,to){
    to.piece=from.piece;
    from.piece=null;
    globalStateRender();
}

function whitePawnClick({ piece }) {
    clearPreviousSelfHighlight(selfHighlightState);
    // globalStateRender();
    // if(hightlight_state) return;
    if(piece==selfHighlightState){
     
        selfHighlightState=null;
         clearHighlightLocal();
        return;
    }
    selfHighlight(piece);
    selfHighlightState = piece;
    moveState = piece;
    hightlight_state=true;

   const current_pos = piece.current_position;
   const flatArray = globalState.flat();

   if(current_pos[1]=="2"){
    const hightlightSquareIds = [
        `${current_pos[0]}${Number(current_pos[1]) + 1}`,
        `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];
     clearHighlightLocal();
    hightlightSquareIds.forEach((hightLight)=> {
        globalState.forEach((row) => {
            row.forEach((element) => {
             if(element.id==hightLight){
                console.log(element);
                element.highlight=true;
                // console.log(globalState);
             }
            });
        });

    });
    globalStateRender();
    
   }else{
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
    const captureIds = [col1,col2];

    const hightlightSquareIds = [
        `${current_pos[0]}${Number(current_pos[1]) + 1}`,
        
    ];
    captureIds.forEach((element) => {
        checkPieceOfOpponentOnElement(element,"white");
    });
    hightlightSquareIds.forEach((hightLight)=> {
        globalState.forEach((row) => {
            row.forEach((element) => {
             if(element.id==hightLight){
              element.highlight = true;
             }
            });
        });
    })
    globalStateRender();

   }
//    console.log(globalState);
}
function blackPawnClick({ piece }) {
    clearPreviousSelfHighlight(selfHighlightState);
     if(hightlight_state){ 
        movePieceFromXToY(selfHighlightState,piece);
        return;
     }
    // globalStateRender();
    // if(hightlight_state) return;
    if(piece==selfHighlightState){
        selfHighlightState=null;
         clearHighlightLocal();
        return;
    }
    selfHighlight(piece);
    selfHighlightState = piece;
    moveState = piece;
    hightlight_state=true;

   const current_pos = piece.current_position;
   const flatArray = globalState.flat();

 
   if(current_pos[1]=="7"){
    const hightlightSquareIds = [
        `${current_pos[0]}${Number(current_pos[1]) - 1}`,
        `${current_pos[0]}${Number(current_pos[1]) - 2}`,
    ];
     clearHighlightLocal();
    hightlightSquareIds.forEach((hightLight)=> {
        globalState.forEach((row) => {
            row.forEach((element) => {
             if(element.id==hightLight){
                console.log(element);
                element.highlight=true;
                // console.log(globalState);
             }
            });
        });

    });
    globalStateRender();
    
   }else{
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
    const captureIds = [col1,col2];

    const hightlightSquareIds = [
        `${current_pos[0]}${Number(current_pos[1]) - 1}`,
        
    ];
    captureIds.forEach((element) => {
        checkPieceOfOpponentOnElement(element,"black");
    });
    hightlightSquareIds.forEach((hightLight)=> {
        globalState.forEach((row) => {
            row.forEach((element) => {
             if(element.id==hightLight){
              element.highlight = true;
             }
            });
        });
    })
    globalStateRender();

   }
//    console.log(globalState);
}
// function blackPawnClick({ piece }) {
//     // globalStateRender();
//     //  if(hightlight_state){ 
//     //     movePieceFromXToY(selfHighlightState,piece);
//     //     return;
//     //  }
//     clearPreviousSelfHighlight(selfHighlightState);
//     if(piece==selfHighlightState){
//         clearPreviousSelfHighlight(selfHighlightState);
//         selfHighlightState=null;
//          clearHighlightLocal();
//         return;
//     }
//     selfHighlight(piece);
//     hightlight_state=true;
//     selfHighlightState = piece;
//     moveState = piece;

//    const current_pos = piece.current_position;
//    const flatArray = globalState.flat();

//    if(current_pos[1]=="7"){
//     const hightlightSquareIds = [
//         `${current_pos[0]}${Number(current_pos[1]) - 1}`,
//         `${current_pos[0]}${Number(current_pos[1]) - 2}`,
//     ];
//      clearHighlightLocal();
//     hightlightSquareIds.forEach((hightLight)=> {
//         globalState.forEach((row) => {
//             row.forEach((element) => {
//              if(element.id==hightLight){
//                 element.highlight=true;
//                 // console.log(globalState);
//              }
//             });
//         });
//     //     if(hightlight_state)  clearHighlightLocal();
//     //     renderHighlight(hightlight);
//     // hightlight_state=true;
//     });
//     globalStateRender();
    
//    }else{
//     const hightlightSquareIds = [
//         `${current_pos[0]}${Number(current_pos[1]) - 1}`,
        
//     ];
//      clearHighlightLocal();
//     hightlightSquareIds.forEach((hightLight)=> {
//         globalState.forEach((row) => {
//             row.forEach((element) => {
//              if(element.id==hightLight){
//                 element.highlight=true;
//              }
//             });
//         });
//     })

//    }
// globalStateRender();
// }
function GlobalEvent(){
ROOT_DIV.addEventListener("click",function(event) {
    if(event.target.localName === "img"){
        const clickId = event.target.parentNode.id;
        const flatArray = globalState.flat();
        const square =flatArray.find(el =>el.id == clickId);
       if(square.piece.piece_name == "WHITE_PAWN"){
        whitePawnClick(square);
       }else if(square.piece.piece_name == "BLACK_PAWN"){
        blackPawnClick(square);
       }

    }else{
        selfHighlightState=null;

        const childElementsOfclickedE1 = Array.from(event.target.childNodes);
       
        if(childElementsOfclickedE1.length == 1 || event.target.localName == "span"){
            
            if(event.target.localName == "span"){
                const id =event.target.parentNode.id;
                moveElement(moveState,id);
                moveState=null;

            }else{
                const id = event.target.parentNode.id;
                moveElement(moveState,id);
                moveState =null;
            }
            
        }else{
             clearHighlightLocal();
            clearPreviousSelfHighlight(selfHighlightState);
            selfHighlightState=null;
        }
    }
} );


}

export {GlobalEvent};
