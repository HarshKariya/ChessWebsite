// import {blackPawn} from "../Data/pieces.js";
import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

function globalStateRender(){
    
    globalState.forEach((row) => {
        row.forEach((element) => {
            if(element.highlight){
                const hightlightSpan = document.createElement("span");
                hightlightSpan.classList.add("highlight");
                document.getElementById(element.id).appendChild(hightlightSpan);
            }
            else if(element.highlight === null){
                const el =document.getElementById(element.id);
                const highlights = Array.from(el.getElementsByTagName("span"));
                highlights.forEach(element => {
                    el.removeChild(element);
                });
                // document.getElementById(element.id).innerHTML="";

            }
         if(element.piece != null){
         }else{
            console.log(element);
            const el =document.getElementById(element.id);
                const piece = Array.from(el.getElementsByClassName("piece"));
                piece.forEach((element) => {
                    el.removeChild(element);
                });
         }
        });
    });
}


function moveElement(piece, id) {
    const previous_position = piece.current_position;

    piece.current_position = id;

    const flatData = globalState.flat();
    flatData.forEach((el) => {
        if (el.id == previous_position) {
            delete el.piece; 
            console.log(el);
        }
        if (el.id == id) {
            el.piece = piece; 
            console.log(el);
        }
    });

    clearHightlight();

    const previousPieceElement = document.getElementById(previous_position);
    previousPieceElement.classList.remove("highlightYellow")
    const currentPieceElement = document.getElementById(id);

    if (currentPieceElement && previousPieceElement) {
        currentPieceElement.innerHTML = previousPieceElement.innerHTML; 
        previousPieceElement.innerHTML = ""; 
    }

    console.log(previousPieceElement);
}



function clearPreviousSelfHighlight(piece) {
    
    if (piece) {
        document.getElementById(piece.current_position).classList.remove("highlightYellow");
    }
}

function selfHighlight(piece) {
    
    document.getElementById(piece.current_position).classList.add("highlightYellow");
}


function initGameRender(data) {
    data.forEach((element) => {
        console.log(element);
        const rowEl = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color, "square");
            if (square.id[1] == 7) {
                square.piece = piece.blackPawn(square.id);
            }
            if (square.id == "h8" || square.id == "a8" ) {
                square.piece = piece.blackRook(square.id);
            }
            if (square.id == "b8" || square.id == "g8" ) {
                square.piece = piece.blackKnight(square.id);
            }
            if (square.id == "c8" || square.id == "f8" ) {
                square.piece = piece.blackBishop(square.id);
            }
            if (square.id == "d8" ) {
                square.piece = piece.blackQueen(square.id);
            }
            if (square.id == "e8" ) {
                square.piece = piece.blackKing(square.id);
            }

            if (square.id[1] == 2) {
                square.piece =piece.whitePawn(square.id);
            }
            if (square.id == "d1") {
                square.piece =piece.whiteQueen(square.id);
            }
            if (square.id == "e1") {
                square.piece =piece.whiteKing(square.id);
            }
            if (square.id == "h1" || square.id == "a1" ) {
                square.piece =piece.whiteRook(square.id);
            }
            if (square.id == "b1" || square.id == "g1" ) {
                square.piece =piece.whiteKnight(square.id);
            }
            if (square.id == "c1" || square.id == "f1" ) {
                square.piece =piece.whiteBishop(square.id);
            }

            rowEl.appendChild(squareDiv);
        });
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
    });

    pieceRender(data);
}

function pieceRender(data) {
    data.forEach(row => {
        row.forEach(square => {
            if (square.piece) {
                const squareEl = document.getElementById(square.id);
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");

                squareEl.appendChild(piece)
            }
        });
        
    });
}
function renderHighlight(squareId){
    
    const hightlightSpan = document.createElement("span");
    hightlightSpan.classList.add("highlight");
    document.getElementById(squareId).appendChild(hightlightSpan);
    
}

function clearHightlight(){
    const flatData = globalState.flat();
     flatData.forEach((el) => {

        // if(el.captureHighlight){
        //     document.getElementById(el.id).classList.remove("captureColor");
            
        // }


     if(el.highlight){
       
    el.highlight = null;
     }
     globalStateRender();
     });
    }

export { initGameRender,renderHighlight , clearHightlight , selfHighlight , clearPreviousSelfHighlight, moveElement ,globalStateRender};
