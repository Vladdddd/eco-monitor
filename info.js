document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const addressId = urlParams.get('id');
    console.log("addressId:", addressId);

    fetch(`http://localhost:4444/addresses/${addressId}`)
        .then(response => response.json())
        .then(data => {
            const { _id, city, street, objects } = data;

            const citySpan = document.getElementById('city');
            citySpan.textContent = city;

            const streetSpan = document.getElementById('street');
            streetSpan.textContent = street;

    })
    .catch(error => console.error('Error getting data:', error));

    fetch(`http://localhost:4444/addresses/${addressId}/objects`)
    .then(response => response.json())
    .then(objects => {
        const objectsList = document.getElementById('objectsList');

        objects.forEach(object => {
            const listItem = document.createElement('li');
            listItem.textContent = object.name; 
            objectsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error getting data:', error));
            

   
})