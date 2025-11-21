var arr = [
    { Team:"MI", Matches:14, Wins:10, Losses:4, Points:20, Captain:"Rohit Sharma", Image:"./images/mi.png" },
    { Team:"CSK", Matches:14, Wins:9, Losses:5, Points:18, Captain:"MS Dhoni", Image:"./images/csk.png" },
    { Team:"RCB", Matches:14, Wins:8, Losses:6, Points:16, Captain:"VIRAT KOHLI", Image:"./images/rcb.png" },
    { Team:"KKR", Matches:14, Wins:7, Losses:7, Points:14, Captain:"Eoin Morgan", Image:"./images/kkr.png" },
    { Team:"SRH", Matches:14, Wins:6, Losses:8, Points:12, Captain:"Kane Williamson", Image:"./images/srh.png" },
    { Team:"DC", Matches:14, Wins:5, Losses:9, Points:10, Captain:"Rishabh Pant", Image:"./images/dc.png" },
    { Team:"PBKS", Matches:14, Wins:4, Losses:10, Points:8, Captain:"Shreyes Iyer", Image:"./images/pbks.png" },
    { Team:"RR", Matches:14, Wins:3, Losses:11, Points:6, Captain:"Sanju Samson", Image:"./images/rr.png" },
    { Team:"LSG", Matches:14, Wins:2, Losses:12, Points:4, Captain:"KL Rahul", Image:"./images/lsg.png" }
];


var btn = document.getElementById("predict");
var box = document.querySelector(".box");
var details = document.getElementById("details");
var title = document.querySelector(".box h1");

btn.addEventListener("click", function () {
  var i = Math.floor(Math.random() * arr.length);
  var t = arr[i];
  title.innerText = t.Team + " will win the IPL 2024";
  details.classList.remove("show");
  setTimeout(function(){
    details.innerHTML = 
      "<div class='team-name'>" + t.Team + " — " + t.Captain + "</div>" +
      "<div class='stat-row'><span>Matches</span><span>" + t.Matches + "</span></div>" +
      "<div class='stat-row'><span>Wins</span><span>" + t.Wins + "</span></div>" +
      "<div class='stat-row'><span>Losses</span><span>" + t.Losses + "</span></div>" +
      "<div class='stat-row'><span>Points</span><span>" + t.Points + "</span></div>" +
      "<div class='caption'>Captain: " + t.Captain + "</div>";
    details.classList.add("show");
  }, 180);
});
