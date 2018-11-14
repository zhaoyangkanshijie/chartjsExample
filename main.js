var draw = function(chartID,data){
    var ctx = document.getElementById(chartID);
    var myChart = new Chart(ctx, data);
}
window.onload = function(){
    draw("bar1",bar1);
    draw("bubble1",bubble1);
    draw("line1",line1);
    draw("line2",line2);
    draw("radar1",radar1);
    draw("pie1",pie1);
    draw("doughnut1",doughnut1);
    draw("polarArea1",polarArea1);
    draw("scatter1",scatter1);
    draw("mix1",mix1);
}