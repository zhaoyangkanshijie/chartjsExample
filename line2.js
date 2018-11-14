var line2 = {
    type: 'line', // line 表示是 曲线图，当然也可以设置其他的图表类型 如柱形图 : bar  或者其他
    data: {
        labels : ["January","February","March","April","May","June","July"], //按时间段 可以按星期，按月，按年
        datasets : [
            {
                label: "data1",  //当前数据的说明
                fill: true,  //是否要显示数据部分阴影面积块  false:不显示
                borderColor: "rgba(200,187,205,1)",//数据曲线颜色
                pointBackgroundColor: "#fff", //数据点的颜色
                data: [80, 90, 100, 30, 67, 59, 88],  //填充的数据
            },
            {
                label: "data2",  //当前数据的说明
                fill: true,  //是否要显示数据部分阴影面积块  false:不显示
                borderColor: "rgba(75,192,192,1)",//数据曲线颜色
                pointBackgroundColor: "#fff", //数据点的颜色
                data: [21, 34, 35, 50, 45, 21, 70],  //填充的数据
            }
        ]
    }
};