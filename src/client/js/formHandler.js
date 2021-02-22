const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('polarity_confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('subjectivity_confidence');
const excerpt = document.getElementById('excerpt');
const error_sec = document.querySelector('section.errors');
const error = document.getElementById('error');

function handleSubmit(event) {
    event.preventDefault()

    //Get input from form
    var url = document.querySelectorAll('input[name=test-url]')

    //check that input is a valid url
    if(Client.validURL(JSON.parse(JSON.stringify(url[0].value))))
    {
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: url[0].value})
        })
        .then(res => res.json())
        .then(function(res) {
            polarity.innerHTML = res.polarity
            subjectivity.innerHTML = res.subjectivity
            polConfidence.innerHTML = res.polarity_confidence
            subConfidence.innerHTML = res.subjectivity_confidence
            excerpt.innerHTML = res.text
        })

    }else{
        // Return error if an invalid url is queried
        const error = document.querySelector('section.errors #error');
        error.innerHTML = 'Invalid URL, try again'
        error_sec.style.display = "block";
        
    } 
}

module.exports = handleSubmit;
