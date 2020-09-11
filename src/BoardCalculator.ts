//Sizes of wood in inches.
const twoByFourWidth = 3.5;
const postSize = 3.5;

//Gerald's numbers
let distanceBetweenBoards = 16;
const twoByFourLength = 96; //Eight feet in inches.

//Tracks extra posts needed
let extraPosts = 0;

//Calculate how many additional posts are needed.
function CalculateAdditionalPostsNeeded(outerWallWidthInFeet:number)
{
    let additionalPostsNeeded = Math.floor(outerWallWidthInFeet/20);  //Round down because we need one every 20 feet.  Email to Gerald is out asking for clarification.
    return additionalPostsNeeded;
}

//Calculates inner wall width.
function CalculateInnerWallWidth(outerWallWidthInFeet:number)
{
    extraPosts = CalculateAdditionalPostsNeeded(outerWallWidthInFeet);
    //Accout for normal posts, then take out the extra posts if needed.  If not needed, extraPosts will be 0 * 3.5.
    let innerWallWidth = (outerWallWidthInFeet * 12) - (postSize * 2) - (extraPosts * postSize);  
    return innerWallWidth;
}

//Calculate boards required for inner wall.
function CalculateInnerWallBoards(outerWallWidthInFeet:number)
{
    let totalBoards = CalculateInnerWallWidth(outerWallWidthInFeet)/16;
    return totalBoards;
}

//Calculate floor boards needed.
function CalculateFloorBoards(outerWallWidthInFeet:number)
{
    let totalFloorBoards = outerWallWidthInFeet/twoByFourLength;
    return totalFloorBoards;
}

//Calculate ceiling boards.  Same as floor boards needed
function CalculateCeilingBoards(outerWallWidthInFeet:number)
{
    return CalculateFloorBoards(outerWallWidthInFeet);
}

//Calculate total boards needed for one wall
function CalculateWall(outerWallWidthInFeet:number)
{
    let totalBoardsNeeded = CalculateFloorBoards(outerWallWidthInFeet)
    + CalculateCeilingBoards(outerWallWidthInFeet)
    + CalculateInnerWallBoards(outerWallWidthInFeet);
    return totalBoardsNeeded;
}

//Calculate total boards needed for house.
function AddUpBoards(lengthOfHouseInFeet:number, widthOfHouseInFeet:number)
{
   let finishedHouse = CalculateWall(lengthOfHouseInFeet) * 2 + CalculateWall(widthOfHouseInFeet) * 2;
   console.log("The house requires " + finishedHouse + " boards");
   console.log("It also requires " + (extraPosts + 4) + " posts.");
}