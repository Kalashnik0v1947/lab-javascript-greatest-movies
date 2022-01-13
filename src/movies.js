// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let names = movies.map((name) => name.director);
  return names;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const results = movies.filter((element) => {
    return (
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    );
  });
  return results.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0) {
    return 0;
  }
return Math.round((movies.reduce((a,b) => a + (b.score ? b.score: 0), 0) / movies.length) * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore() {}
const dramaMoviesScore = (arr) => {
  let total = 0,
    len = 0;
  arr.forEach((element) => {
    if (element.genre.includes('Drama')) {
      total += element.score;
      len++;
    }
  });
  return len === 0 ? 0 : Math.round((total / len) * 100) / 100;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newArr = [...movies]
let byYear = newArr.sort(function(a, b) {
  
if (a.year < b.year) {
  return -1
} else if (a.year > b.year) {
  return 1
} else return a.title.localeCompare(b.title)

}) 
return byYear
}

  // let byYear = newArr.sort(function (a, b) {
  // return a.year - b.year})
  // byYear.sort((a,b) => {return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0})
  // return newArr
  // return (a.year < b.year) ? -1 : (a.year > b.year) ? 1 : a.title.localeCompare(b.title)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  return movies.map(element => element.title).sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newArr = [...movies]
  let time = newArr.map((element) => element.duration);
  return time;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
