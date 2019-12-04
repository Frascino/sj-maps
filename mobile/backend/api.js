const mapa = require('./mapa')
const djik = require('./djik')

//Const com todas as salas pré mapeadas
const classrooms = [
{tag: "Quadra", x: 6, y: 2},
{tag: "T04B", x: 3, y: 5},
{tag: "T03B", x: 6, y: 6},
{tag: "T02B", x: 6, y: 12},
{tag: "T01A", x: 6, y: 14},
{tag: "T02A", x: 6, y: 27},
{tag: "T03A", x: 6, y: 30},
{tag: "T04A", x: 6, y: 37},
{tag: "T05A", x: 6, y: 40},
{tag: "T06A", x: 6, y: 47},
{tag: "T07A", x: 6, y: 50},
{tag: "T08A", x: 20, y: 5},
{tag: "Psicologia", x: 11, y: 50},
{tag: "Teatro", x: 23, y:33}
]

module.exports = {
  generateRoute: function (startTag, finishTag){
  //Aqui seria lida a entrada do usuário para achar os pontos
  var s = classrooms.find(point => point.tag == startTag)
  var f = classrooms.find(point => point.tag == finishTag)


var matrix = mapa.load('map.txt')
console.log('Mapa carregado')
console.log("\n\n")
var points = mapa.findAllPoints(matrix)
console.log('Pontos encontrados')
points.push({"l": s.y, "c": s.x , "name": "start"})
points.push({"l": f.y, "c": f.x, "name": "finish"})
points.forEach(function(point){
  console.log(point)
  });
console.log("\n\n")

var dijkstraPoints = mapa.preparePointsForDijsktra(points,matrix)
console.log('Conexões encontradas')
dijkstraPoints.forEach(function(point){
  console.log(point)
  });
console.log("\n\n")

var formattedDijstraPoints = mapa.formatPointsForDijkstra(dijkstraPoints);
console.log('Conexões formatadas')
console.log(formattedDijstraPoints);
console.log("\n\n")

var result = djik.calculate(formattedDijstraPoints)
console.log('Dijkstra calculado')
console.log(result);
console.log("\n\n")

var frontResult = []
for(var currentPointPos = 0 ; currentPointPos < result.path.length-1 ; currentPointPos++){
  var point1 = points.find(point => point["name"] == result.path[currentPointPos])
  var point2 = points.find(point => point["name"] == result.path[currentPointPos+1])


  var fixLin;
  var fixCol;

  if (point1.c < point2.c){
    fixLin=point1.l;
    for (var i = point1.c; i < point2.c; i++){
      frontResult.push({x: i, y: fixLin});  
    }
  }else if(point1.c > point2.c){
    fixLin=point1.l;
    for (var i = point1.c; i > point2.c; i--){
      frontResult.push({x: i, y: fixLin});  
    }
  }else if (point1.l < point2.l){
    fixCol=point1.c;
    for (var i = point1.l; i < point2.l; i++){
      frontResult.push({x: fixCol, y: i});  
    }

  }else if (point1.l > point2.l){
    fixCol=point1.c;
    for (var i = point1.l; i > point2.l; i--){
      frontResult.push({x: fixCol, y: i});  
    }
  }
}
var finish = points.find(point => point["name"] == 'finish')
frontResult.push({x: finish.c, y: finish.l})
console.log('Front output')
frontResult.forEach(function(point){
console.log(point)
});
return frontResult;
}}