const loadData = async() =>{

    url = `https://openapi.programming-hero.com/api/phones?search=iphone`

    const res = await fetch(url);

    const data = await res.fetch();

    console.log(data);
}

loadData();