import { Console } from "console";

//Sizes of wood in inches.
const twoByFourWidth = 3.5;
const postSize = 3.5;
const twoByFourLength = 96; //Eight feet in inches.

//Gerald's numbers
let distanceBetweenBoards = 16;


//Tracks extra posts needed
let extraPosts = 0;

// //Test variables for logic.
// let houseWidth = 8;
// let houseLength = 8;

//How many boards are needed on floor and roof?
function CalculateFloorAndRoofBoards(outerWallWidthInFeet:number)
{
    return ((outerWallWidthInFeet * 12)/twoByFourLength) * 2;
}
//Figure out how many additional posts are needed.
function CalculateExtraPostsNeeded(outerWallWidthInFeet:number)
{
    return Math.floor(outerWallWidthInFeet/20);  //Additional post needed every 20 feet.
}
//Calculate the inner wall size.
function CalculateInnerWallSize(outerWallWidthInFeet:number)
{
    let extraPosts = CalculateExtraPostsNeeded(outerWallWidthInFeet);
    return ((outerWallWidthInFeet * 12) - ((2 * postSize) + (2 * extraPosts)))
}
//Calculate boards needed inside wall.
function CalculateBoardsInsideWall(outerWallWidthInFeet:number)
{
    let distanceInsideWall = CalculateInnerWallSize(outerWallWidthInFeet);
    let boardsInsideWall = distanceInsideWall/16;
    return boardsInsideWall;
}
//Add boards in wall and roof and ceiling together
function CalcTotalBoards(longWallWidthInFeet:number, wideWallWidthInFeet:number)
{
   let longWallBoards = Math.ceil((CalculateBoardsInsideWall(longWallWidthInFeet) + CalculateFloorAndRoofBoards(longWallWidthInFeet))) * 2;
   console.log("Long wall boards: " + longWallBoards)
   let wideWallBoards = Math.ceil((CalculateBoardsInsideWall(wideWallWidthInFeet) + CalculateFloorAndRoofBoards(wideWallWidthInFeet))) * 2;
   console.log("Wide wall boards: " + wideWallBoards);
   let extraLongPosts = Math.ceil(CalculateExtraPostsNeeded(longWallWidthInFeet)) * 2;
   console.log("Long wall posts: " + extraLongPosts);
   let extraWidePosts = Math.ceil(CalculateExtraPostsNeeded(wideWallWidthInFeet)) * 2;
   console.log("Wide wall posts: " + extraWidePosts);
   let totalBoards = longWallBoards + wideWallBoards + 4;
   let totalPosts = extraLongPosts + extraWidePosts;
   return {
       totalBoards: totalBoards, 
       totalPosts: totalPosts
    };
}
//Account for waste.
function AccountForWaste(totalBoards:number)
{
    return Math.ceil(totalBoards * 1.1);
}

export default function BuildHouse(longWallWidthInFeet:number, wideWallWidthInFeet:number)
{
    let boardsAndPosts = CalcTotalBoards(longWallWidthInFeet, wideWallWidthInFeet);
    let totalBoardsPlusWaste = AccountForWaste(boardsAndPosts.totalBoards);
    let totalPostsPlusWaste = AccountForWaste(boardsAndPosts.totalPosts);
    console.log("Total boards and waste: " + totalBoardsPlusWaste);
    console.log("Total posts plus waste: " + (Number(totalPostsPlusWaste) + 4));
}