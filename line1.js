var line1 = {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7],
        datasets: [{
            backgroundColor: 'rgb(255, 255, 255)',//绘制双曲线的时候最好使用rgba,要不不透明的白色背景可以使得某些线条绘制不出来
            borderColor: 'rgb(255, 99, 132)',
            data: [1, 10, 2, 9, 5, 20, 45],
        }]
    },
    // 配置文件
    options: {
        //标题设置
        title:{
            display:true,
            text:'title',
        },
        //禁用动画
        animation:{
            duration:0,
        },
        hover:{
            animationDuration:0,
        },
        responsiveAnimationDuration: 0,
        //提示功能
        tooltips:{
            enable:false
        },
        //顶部的文字提示
        legend:{
            display:false,
        },
        //设置x,y轴网格线显示,标题等
        scales :{
            xAxes:[{
                //轴标题
                scaleLabel:{
                    display:true,
                    labelString:'x title',
                    fontColor:'#666'
                },
                //网格显示
                gridLines:{
                    display:true
                },
            }],
            yAxes:[{
                scaleLabel:{
                    display:true,
                    labelString:'y title'
                },
                gridLines:{
                    display:false
                },
            }],
        },
        //禁用赛尔曲线
        elements: {
            line: {
                tension: 0,
            }
        }
    }
};