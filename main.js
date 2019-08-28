console.log('hi');

const pies = [
    {
        name: 'Apple Pie',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382545039107.jpeg',
        instructors: 'Zoe',
        iceCream: 'Coffee'
    },
    { 
        name: 'Berry',
        img: 'https://images-gmi-pmc.edge-generalmills.com/808f7319-ed9b-41c7-8d35-959d83c868e8.jpg',
        instructors: 'Callan',
        iceCream: 'Vanilla'
    },
    { 
        name: 'Pumpkin',
        img: 'images/pumpkin.jpg',
        instructors: 'Michael',
        iceCream: 'none'
    },
    { 
        name: 'Pecan',
        img: 'https://images-gmi-pmc.edge-generalmills.com/165f3d2f-0610-40a6-abf8-478fb850be7c.jpg',
        instructors: 'Callan',
        iceCream: 'Chocolate'
    },
    { 
        name: 'Keylime',
        img: 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Key-Lime-Pie_EXPS_PPP18_32936_B05_15_2b.jpg',
        instructors: 'Zoe',
        iceCream: 'Chocolate'
    },
    { 
        name: 'Berry',
        img: 'https://www.simplyrecipes.com/wp-content/uploads/2007/05/rhubarb-berry-pie-horiz-a-1600.jpg',
        instructors: 'Michael',
        iceCream: 'Vanilla'
    }
]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const pieBuilder = (piesArray) => {
    for (let i =0; i < piesArray.length; i++){
        const dessert = piesArray[i];
        const domString = `
           <div class = "card">
                <h2>${dessert.name}</h2>
                <img src = ${dessert.img} alt ='Image of ${dessert.name}'>
                <p>${dessert.instructors}</p>
                <p>${dessert.iceCream}</p>
           </div>
        `
        printToDom(domString, 'pie-zone');
    }
}

//when you click on button this function will run
document.getElementById('my-button').addEventListener('click', () => { 
    console.log('💽');
});


pieBuilder(pies);

