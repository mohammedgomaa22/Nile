    // const xValues = [100,200,300,400,500,600,700,800,900,1000];

    // new Chart("myChart", {
    // type: "line",
    // data: {
    //     labels: xValues,
    //     datasets: [{
    //     data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
    //     borderColor: "red",
    //     fill: false
    //     },{
    //     data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
    //     borderColor: "green",
    //     fill: false
    //     },{
    //     data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
    //     borderColor: "blue",
    //     fill: false
    //     }]
    // },
    // options: {
    //     legend: {display: false}
    // }
    // });

    // const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    // const yValues = [55, 49, 44, 20, 45];
    // const barColors = ["red", "green","gray","orange","gray"];

    // new Chart("myChart", {
    // type: "bar",
    // data: {
    //     labels: xValues,
    //     datasets: [{
    //     backgroundColor: barColors,
    //     data: yValues
    //     }]
    // },
    // // options: {...}
    // });

const xValues = ["يناير","فبراير","مارس","ابريل","مايو","يونيه","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر"];
const yValues = [3,7,8,7,9,7,8,10,9,11,11,12];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor:"#009688",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
        }]
    },
    // options:{...}
});

// ------------------------------------------

// Toggler Nav
const toggle = () => {
    const btn = document.querySelector(".toggle-nav");
    const sidebar = document.querySelector(".sidebar");
    // ------

    btn.addEventListener("click", () => {
        if (sidebar.classList.contains("translate-x-[250px]")) {
            sidebar.classList.replace("translate-x-[250px]", "translate-x-[0px]");
        } else {
            sidebar.classList.replace("translate-x-[0px]", "translate-x-[250px]");
        }
    })
};
toggle();