var btnTranslate = document.querySelector("#btn-translate"); //reference to the button
var textInput = document.querySelector("#text-input");
var outputDiv  = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";
alert("You can only translate 5 times in 1 hour")

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    // alert("something wrong with sever..")
}


function clickEventHandler(){

    var inputText = textInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => { 
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickEventHandler);