Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function (data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);

Classifier = ml5.imageClassifier('model.json', modelLoaded); ///Insert model source link in single quotes'' before model.json ///

function modelLoaded()
{
    console.log("model loaded!")
}

function check()
{
    img = document.getElementById('captured_image');
    Classifier.classify(img, gotResult);
}

function gotResult (error,results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}