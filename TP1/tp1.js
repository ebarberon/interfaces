// Ej 1
    var matriz = [];
    var tamMatriz = 5;
    var maxNum = -100;
    var maxFilaPar = -100;
    var minFilaImpar = 101;
    var promFila = [];

    for(let x=0; x<tamMatriz; x++) {
        matriz[x] = [];

        var suma = 0;

        for(let y= 0; y<tamMatriz; y++) {
            matriz[x][y]= Math.floor(Math.random()*100);

            suma += matriz[x][y];

            if (matriz[x][y]>maxNum) {
                maxNum = matriz[x][y];
            }

            if ((x == 0 || x % 2 == 0) && matriz[x][y]>maxFilaPar) {
                maxFilaPar = matriz[x][y];
            }

            if (x % 2 == 1 && matriz[x][y]<minFilaImpar) {
                minFilaImpar = matriz[x][y];
            }
        }

        promFila[x] = suma / tamMatriz;

    }

    console.log(matriz);
    console.log(maxNum);
    console.log(maxFilaPar);
    console.log(minFilaImpar);
    console.log(promFila);


// Ej 2
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "Red";
    ctx.fillRect(20, 80, 20, 20);
    ctx.fillStyle = "Green";
    ctx.fillRect(40, 80, 20, 20);
    ctx.fillStyle = "Blue";
    ctx.fillRect(60, 80, 20, 20);
    ctx.fillStyle = "Black";
    ctx.fillRect(30, 60, 20, 20);
    ctx.fillStyle = "Purple";
    ctx.fillRect(50, 60, 20, 20);
    ctx.fillStyle = "Yellow";
    ctx.fillRect(40, 40, 20, 20);
    
    // Ej 3 y 4
    var canvas = document.getElementById("myCanvas1");
    var ctx = canvas.getContext("2d");
    let width = canvas.width;
    let heigth = canvas.height;
    
    let imageData = ctx.createImageData(width, heigth);
    
    let a = 255, r = 0, g = 0, b = 0;

    let x= 0, y = 0;
    
    drawRect0(imageData, a);
    
    ctx.putImageData(imageData, x, y) * 4;

    function drawRect0(imageData, a) {
        for(let x = 0; x < width; x++){
            for(let y = 0; y < heigth; y++){
                let color = (y * 255) / heigth;
                setPixel(imageData, x, y, color, color, color, a);
            }    
        }
    }

    function setPixel(imageData, x, y, r, g, b, a) {
        let index = (x + y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
    }

// Ej 5

    var canvas1 = document.getElementById("myCanvas2");
    var ctx = canvas1.getContext("2d");
    let width1 = canvas1.width;
    let heigth1 = canvas1.height;

    let imageData1 = ctx.createImageData(width1, heigth1);
    
    drawRect(imageData1, a);
    
    ctx.putImageData(imageData1, x, y) * 4;

    function drawRect(imageData1, a) {
        for(let x = 0; x < width1/2; x++){
            let r = 0, g = 0, b = 0;
            for(let y = 0; y < heigth1; y++){
                let r = (y * 255) / heigth1;
                let g = (y * 255) / heigth1;
                setPixel(imageData1, x, y, r, g, b, a);
            }    
        }
        for(let x = width1/2; x < width1; x++){
            let r = 255, g = 255, b = 0;
            for(let y = 0; y < heigth1; y++){
                let g = 255 - (255 / heigth1) * y;
                setPixel(imageData1, x, y, r, g, b, a);
            }    
        }

    }
