Chart.defaults.global.defaultFontColor = "#fff";

var ctx = document.getElementById('lijnGrafiek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',

    // Voor de Acceleratie van onze chart dus we rekenen in km per uur
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: 'Aantal km per uur',
            hoverBackgroundColor: 'rgb(50,168,82)',
            backgroundColor: ['rgb(14,70,181)'],
            borderColor: 'rgb(255,255,255)',
            data: [27000, 28383, 28922, 26478, 27799, 28211],
           
            
        }],
    },

    // Configuration options go here
    options: {
        elements: {
                line: {
                    tension: 0,
                    }
        },
    }
});





var ctx = document.getElementById('barGrafiek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',

    // Afgelegen afstand per maand
    data: {
        labels: ['April', 'Mei', 'Juni', 'Juli', 'Augustus'],
        datasets: [{
            label: 'Afgelegen afstand per maand',
            backgroundColor: [
                'rgb(11, 156, 62)',
                'rgb(17, 93, 173)',
                'rgb(14, 105, 201)',
                'rgb(207, 45, 21)',
                'rgb(20, 181, 106)'
                ],
            hoverBackgroundColor: 'rgb(87, 230, 118)',
            borderColor: 'rgb(255, 255, 255)',
            data: [20.390122, 20.399999, 20.400121, 20.372790, 20.390126]
           
            
        }],
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('taartGrafiek').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Koolstofatomen', 'Trymephyheltaan', 'Aardgas', 'Olie', 'Wortelsap'],
        datasets: [{
            label: 'Brandstof',
            backgroundColor: [
                'rgb(101,39,171)',
                'rgb(156,23,54)',
                'rgb(143,94,39)',
                'rgb(59,85,112)',
                'rgb(250,147,12)'
                ],
            hoverBackgroundColor: 'rgb(31,117,207)',
            borderColor: 'rgb(255,255,255)',
            data: [20, 20, 20, 10, 30]
           
            
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('onderbroeken').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // Het percentage schone onderbroeken aan boord van het schip
    data: {
        labels: ['Schone onderbroeken','Vuile onderbroeken'],
        datasets: [{
            label: 'Aantal onderbroeken',
            backgroundColor: [
                'rgb(189, 236, 242)',
                'rgb(181, 168, 147)'
                ],
            hoverBackgroundColor: 'rgb(135, 99, 57)',
            borderColor: 'rgb(0,0,0)',
            data: [85, 15]
           
            
        }],
    },

    // Configuration options go here
    options: {}
});