// show hide datas input initial value

let searchText = "";

// show limited data function

const loadData = async (searchInput) => {

    url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`

    const res = await fetch(url);

    const datas = await res.json();

    showDatas(datas.data);
}

// show limited datas innerHTML


function showDatas(datas) {

    const showPhones = document.getElementById('showPhones');

    const showBtn = document.getElementById('showBtn');

    if (datas.length > 10) {

        datas = datas.slice(0, 10);

        showBtn.classList.remove('hidden')
    }

    else {

        showBtn.classList.add('hidden')
    }

    const errorMessage = document.getElementById('error-message');

    if (datas.length === 0) {

        errorMessage.classList.remove('hidden');
    }

    else {

        errorMessage.classList.add('hidden');

    }

    showPhones.innerText = "";

    datas.forEach(data => {

        const createDiv = document.createElement('div');

        createDiv.classList.add('border-2');

        createDiv.classList.add('p-5');

        createDiv.classList.add('bg-sky-200');

        createDiv.classList.add('rounded-xl');

        createDiv.innerHTML = `
        <figure class="px-10 pt-10">
                  <img src= ${data.image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title mb-2"> ${data.phone_name}</h2>
                  <div class="card-actions">

                    <a onclick="showDetails('${data.slug}')" href="#phone-details-modal" class="btn btn-primary">Show Details</a>

                  </div>
        `;

        showPhones.appendChild(createDiv);

        console.group(data);

    });

    isSpinner(false);

}


// show hide datas innerHTML


function showHideDatas(datas) {

    const showPhones = document.getElementById('showPhones');

    const errorMessage = document.getElementById('error-message');

    if (datas.length === 0) {

        errorMessage.classList.remove('hidden');
    }

    else {

        errorMessage.classList.add('hidden');

    }

    showPhones.innerText = "";

    datas.forEach(data => {

        const createDiv = document.createElement('div');

        createDiv.classList.add('border-2');

        createDiv.classList.add('p-5');

        createDiv.classList.add('bg-sky-200');

        createDiv.classList.add('rounded-xl');

        createDiv.innerHTML = `
        <figure class="px-10 pt-10">
                  <img src= ${data.image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title mb-2"> ${data.phone_name}</h2>
                  <div class="card-actions">

                  <a onclick="showDetails('${data.slug}')" href="#phone-details-modal" class="btn btn-primary">Show Details</a>

                  </div>
        `;

        showPhones.appendChild(createDiv);

        console.group(data.slug);

    });

    isSpinner(false);

}

// modal function


function showDetails(showDetails) {



    url = `https://openapi.programming-hero.com/api/phone/${showDetails}`

    fetch(url)

        .then(res => res.json())

        .then(data => showModalData(data.data))

}

// modal innerTEXT

function showModalData(data) {

    document.getElementById('phoneName').innerText = data.name;

    document.getElementById('chipSet').innerText = data.mainFeatures.chipSet;

    document.getElementById('displaySize').innerText = data.mainFeatures.displaySize;

    document.getElementById('storage').innerText = data.mainFeatures.storage;

    document.getElementById('memory').innerText = data.mainFeatures.memory;

    console.log(data.name);

}


// get search input value

document.getElementById('search-button').addEventListener('click', function () {

    const searchInput = document.getElementById('search-input').value;

    searchText = searchInput;

    loadData(searchInput);

    isSpinner(true);

    document.getElementById('search-input').value = "";

});


// add enter key handler with search input

document.getElementById('search-input').addEventListener('keypress', function (e) {

    console.log(e);
    if (e.key === 'Enter') {

        const searchInput = document.getElementById('search-input').value;

        searchText = searchInput;

        loadData(searchInput);

    }
});


// show hide datas fuction

function showAll() {

    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(datas => showHideDatas(datas.data));

    document.getElementById('showBtn').classList.add('hidden');

}


// spinner function

const spinner = document.getElementById('spinner');

function isSpinner(isSpin) {

    if (isSpin) {

        spinner.classList.remove('hidden');
    }

    else {

        spinner.classList.add('hidden');
    }
}