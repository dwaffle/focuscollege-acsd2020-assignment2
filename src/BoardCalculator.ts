//Sizes of wood in inches.
const twoByFourWidth = 3.5;
const postSize = 3.5;
const twoByFourLength = 96; //Eight feet in inches.

//Gerald's numbers
let distanceBetweenBoards = 16;


//Tracks extra posts needed
let extraPosts = 0;

//Test variables for logic.
let houseWidth = 16;
let houseLength = 24;

//Calculate how many additional posts are needed.
function CalculateAdditionalPostsNeeded(outerWallWidthInFeet:number)
{
    let additionalPostsNeeded = Math.floor(outerWallWidthInFeet/20) * 2;  //Round down because we need one every 20 feet.  Email to Gerald is out asking for clarification.
    return additionalPostsNeeded;
}

//Calculates inner wall width.
function CalculateInnerWallWidth(outerWallWidthInFeet:number)
{
    extraPosts = CalculateAdditionalPostsNeeded(outerWallWidthInFeet);
    console.log("Outer wall width in feet " + outerWallWidthInFeet);
    //Accout for normal posts, then take out the extra posts if needed.  If not needed, extraPosts will be 0 * 3.5.
    let innerWallWidth = (outerWallWidthInFeet * 12) - (postSize * 2);
    console.log("Inner wall width in inches: " + innerWallWidth);
    return innerWallWidth;
}

//Calculate boards required for inner wall.
function CalculateInnerWallBoards(outerWallWidthInFeet:number)
{
    console.log("Outer wall width: " + outerWallWidthInFeet);
    let totalBoards = CalculateInnerWallWidth(outerWallWidthInFeet)/16;
    console.log("Total boards: " + totalBoards);
    return totalBoards;
}

//Calculate floor boards needed.
function CalculateFloorAndCeilingBoards(outerWallWidthInFeet:number)
{
    let totalFloorBoards = (outerWallWidthInFeet * 12/twoByFourLength); //Account for both sides of house.
    return totalFloorBoards;
}

//Account for waste
function AccountForWaste(totalBoards:number)
{
    return Math.ceil(totalBoards * 1.1);
}

//Calculate total boards needed for house.
function AddUpBoards(outerLengthInFeet:number)
{
   let length = CalculateInnerWallWidth(outerLengthInFeet);
   let boardsOnTopAndBottom = CalculateFloorAndCeilingBoards(length);
   let totalBoards = boardsOnTopAndBottom + 1;
   return totalBoards;
}

function CalculateTotalBoards(houseWidthInFeet:number, houseLengthInFeet:number)
{
    let totalBoards = AddUpBoards(houseWidthInFeet) + AddUpBoards(houseLengthInFeet);
    console.log("Total boards required " + totalBoards)
    let boardsPlusWaste = AccountForWaste(totalBoards);
    console.log("Total boards + waste " + boardsPlusWaste);
    let postsPlusWaste = AccountForWaste(extraPosts);
    console.log("Total posts " + (extraPosts + 4));
    console.log("Total posts plus waste " + (postsPlusWaste + 4));
}

CalculateTotalBoards(houseWidth, houseLength);
