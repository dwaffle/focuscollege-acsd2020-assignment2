//Sizes of wood in inches.
const twoByFourWidth = 3.5;
const postSize = 3.5;

//Gerald's numbers
let distanceBetweenBoards = 16;
const twoByFourLengh = 96; //Eight feet in inches.

//Calculate how many additional posts are needed.
function CalculateAdditionalPostsNeeded(outerWallWidthInFeet:number)
{
    let additionalPostsNeeded = Math.floor(outerWallWidthInFeet/20);  //Round down because we need one every 20 feet.  Email to Gerald is out asking for clarification.
    return additionalPostsNeeded;
}
//Calculates inner wall width.
function CalculateInnerWallWidth(outerWallWidthInFeet:number)
{
    let extraPosts = CalculateAdditionalPostsNeeded(outerWallWidthInFeet);
    //Accout for normal posts, then take out the extra posts if needed.  If not needed, extraPosts will be 0 * 3.5.
    let innerWallWidth = (outerWallWidthInFeet * 12) - (postSize * 2) - (extraPosts * postSize);  
    return innerWallWidth;
}