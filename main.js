function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center()

    webcam= createCapture(VIDEO)
    webcam.hide()

    classyfier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6WP9lggqM/model.json",model_loaded())
}

function model_loaded(){
    console.log("model loaded")
}

function draw(){
    image(webcam,0,0,300,300)
    classyfier.classify(webcam,gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("name_result").innerHTML= result[0].label
        percent=result[0].confidence*100
        document.getElementById("Accuracy_result").innerHTML= percent.toFixed(1)+" %"

    }
}