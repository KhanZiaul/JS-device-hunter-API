const loadData = async () => {

    url = `https://openapi.programming-hero.com/api/phones?search=iphone`

    const res = await fetch(url);

    const datas = await res.json();

    showDatas(datas.data);
}

function showDatas(datas) {

    const showPhones = document.getElementById('showPhones');

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
                  <p class="mb-2">${data.slug}</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
        `;

        showPhones.appendChild(createDiv);

        console.group(data.slug);

    });

}

loadData();