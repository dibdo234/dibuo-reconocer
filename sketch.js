var image =["sketch1.png","sketch2.png"];
function myimage(){
    random_number = Math.floor((Math.random() * image.length));
    sketch = image[random_number];
     document.getElementById("image").src = sketch ;
    }