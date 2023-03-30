/* -------------------------------------------------------------------------- */
/*                                  CHART JS                                  */
/* -------------------------------------------------------------------------- */





let myChart = document.querySelector('#myChart')

new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Purple', 'Orange'],
        datasets: [{
            label: 'Number of Votes',
            data: [15, 20, 18, 12],
            borderWidth: 1
        }]
    }
})

let otherChart = document.querySelector('#other-chart')

new Chart(otherChart, {
    type: 'line',
    data: {
        labels: ['Jeans', 'Sneakers', 'Shirts', 'Hoodies', 'Hats'],
        datasets: [{
            label: 'Number of sales',
            data: [96, 98, 88, 90, 86],
            borderColor: 'Red',
            pointHoverBorderWidth: 10
        }]
    }
})





let myDiv = $('<div>Click Here</div>')
let myUl = $('<ul></ul>')




$('body').append(myDiv)
$('body').append(myUl)
myDiv.on('click', function(){
    let li = $('<li></li>')
    let myText = $('#input1').val()
    li.text(myText)
    myUl.append(li)
    $('#input1').val('')
})

