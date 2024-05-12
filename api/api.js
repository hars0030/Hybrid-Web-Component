const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document),
  wrapper = $("#wrapper");

fetch(`https://countriesnow.space/api/v0.1/countries`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`somethong is wrong`);
    }
    return res.json();
  })
  .then((data) => displayCountries(data))
  .catch((err) => console.log(err));

function displayCountries({ data }) {
  let df = new DocumentFragment();
  data.forEach((item) => {
    let divCountry = document.createElement("div");
    divCountry.innerHTML = `
    <h2 class="country">${item.country}</h2>
    `;
    const ul = document.createElement("ul");
    item.cities.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      ul.append(li);
    });
    divCountry.append(ul)
    df.append(divCountry);
  });
  wrapper.append(df);
}
