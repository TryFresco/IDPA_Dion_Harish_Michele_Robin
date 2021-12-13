src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"

//call geocode

geocode();

function geocode() {

    var location = 'Hofmattstrasse 17 5622 Waltenschwil'

    axios.get(
        'https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters', {
            params: {
                address: location,
                key: 'AIzaSyDlybGsafucSFVqYa3Q4KYOSaYsA8dW5Sc'

            }
        }
    ).then(function(response) {
        //code if API request was successful
        console.log(response)
    })

    .catch(function(error) {
        //code if API ruequest or so fails
        console.log(error)
    })
}