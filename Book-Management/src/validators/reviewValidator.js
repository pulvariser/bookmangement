const mongoose = require("mongoose")

const isValidReviewId = function(reviewId){
    try{
if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    return "Invalid Review ID" ;
  }
}
catch (error){
    return error.message
}
}
function isDate(date) {
  let regex =
    /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
}


const isValidBookId = function(bookId){
    try{
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
        return "Invalid Book ID" ;
      }
    }
catch (error){
    return error.message
}

}


const isValidate = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
  };

const isValidRating = function (rating) {
    try {

    if(!(typeof rating === "number" )){
          return "Rating is mandatory and should be a number"
      } 

      let regexForRating=/^(?:[1-5]|[1-5]|5)$/
      
      if(!regexForRating.test(rating) )
          return "Rating should be between 1 & 5"
        
    } 
    catch (error) {
      return error.message;
    }
  };
const isValidReviewedAt= function (reviewedAt) {
    try {
      if (!isValidate(reviewedAt)) {
        return "ReviewedAt is not given or invalid";
      }
  
      let date = isDate(reviewedAt);
  
      if (date == false) {
        return "Please provide valid date format YYYY-MM-DD !";
      }
    } catch (error) {
      return error.message;
    }
  };
module.exports = {isValidReviewedAt,isValidRating,isValidate,isValidReviewId,isValidBookId}

  
