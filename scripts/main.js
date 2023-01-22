if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(getPosition, getError);

function getPosition (position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);

    // Leaflet map
    var map = L.map('map').setView([lat, long], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.marker([lat, long]).addTo(map)
    //     .bindPopup('Hi')
    //     .openPopup();

        let geocoder = L.Control.geocoder({defaultMarkGeocode: false, position: 'topleft'}).on('markgeocode',function (e){
            hello();
            console.log(e);
            let pos = { lat: e.geocode.center.lat, lng: e.geocode.center.lng }
            console.log(pos);
        }).addTo(map);
        
}

function getError(error) {
    alert(error.code);
}

function hello (){
    alert('hi');
}
