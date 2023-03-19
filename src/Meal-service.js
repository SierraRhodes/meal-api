export default class mealService {
    static foodCall(ingredient) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
    static detailedCall(id) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }
  }


  //www.themealdb.com/api/json/v1/1/lookup.php?i=52772