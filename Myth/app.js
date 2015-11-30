var students = [
  {
    name: "Lucy",
    techSkills: 8,
    socialSkills: 7,
    timeMgmtSkills: 4
  },
  {
    name: "Linus",
    techSkills: 1,
    socialSkills: 5,
    timeMgmtSkills: 6
  },
  {
    name: "Schroeder",
    techSkills: 3,
    socialSkills: 4,
    timeMgmtSkills: 9
  },
  {
    name: "Pig-Pen",
    techSkills: 9,
    socialSkills: 3,
    timeMgmtSkills: 7
  },
  {
    name: "Little Red-Haired Girl",
    techSkills: 4,
    socialSkills: 6,
    timeMgmtSkills: 2
  }
];

var dataTechSkills = [];
for (var i = 0; i < students.length; i++) {
  dataTechSkills.push(students[i].techSkills)
}

var dataSocialSkills = [];
for (var i = 0; i < students.length; i++) {
  dataSocialSkills.push(students[i].socialSkills)
}

var dataTimeMgmtSkills = [];
for (var i = 0; i < students.length; i++) {
  dataTimeMgmtSkills.push(students[i].timeMgmtSkills)
}

console.log(dataTechSkills);
console.log(dataSocialSkills);
console.log(dataTimeMgmtSkills);

d3.select(".techSkillsChart")
.selectAll("div")
.data(dataTechSkills)
.enter().append("div")
.style("width", function(d) { return d * 10 + "px"; })
.text(function(d) { return d; });

d3.select(".socialSkillsChart")
.selectAll("div")
.data(dataSocialSkills)
.enter().append("div")
.style("width", function(d) { return d * 10 + "px"; })
.text(function(d) { return d; });

d3.select(".timeMgmtSkillsChart")
.selectAll("div")
.data(dataTimeMgmtSkills)
.enter().append("div")
.style("width", function(d) { return d * 10 + "px"; })
.text(function(d) { return d; });
