
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        data: [{
            type: "doughnut",
            startAngle: 30,
            innerRadius: 60,
            dataPoints: [
                { y: 60, },
                { y: 25,  },
                { y: 22,  },
                { y: 27, },
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(152,152,152,0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
        }]
    });
    chart.render();

}