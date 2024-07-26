import { globalState } from "../index.js";

function checkPieceOfOpponentOnElement(id,color){
    const flatArray = globalState.flat();
    const oppponentColor = color == "white" ? "BLACK" :"WHITE";
    for (let index = 0; index < flatArray.length; index++) {
        const element = flatArray[index];
        if(element.id==id){
            
            if(element.piece && element.piece.piece_name.includes(oppponentColor)){
                const el =document.getElementById(id);
                el.classList.add("captureColor");
                element.captureHighlight = true;

            }
            break;
        }
    }
    return false;
}
export{checkPieceOfOpponentOnElement};