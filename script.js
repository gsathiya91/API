function createBrew(brewList) {
  brewList.forEach(({ name, brewery_type, address_2, address_3, street, city, state, country, postal_code,
    website_url, phone }) => {


    document.querySelector(".brew-list").innerHTML += `
                      <div class = "brew-container">
                      <div><p class="brew-name">Brewery_Name: ${name}</p>
                      <p class="brew-type">Brewery_Type: ${brewery_type}</p>
                      <p class="address-1">Brewery_Address_1: ${street}, 
                                                    ${city},
                                                    ${postal_code}, 
                                                    ${state},
                                                    ${country}
                                                    </p>
                      <p class="address-2">Brewery_Address_2: ${address_2}</p>
                      <p class="address-3">Brewery_Address_3: ${address_3}</p>
                      <p class="url">Brewery's_URL: ${website_url}</p>
                      <p class="phone">Brewery_Phone number:${phone}</p>
                      </div>`;
  })
}
let brews = []
async function getBrew() {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries", { method: "GET" });
    const brewList = await data.json();
    return brewList
  }
  catch (error) {
    console.error("Error");
  }
}
console.log(brews)

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("change",async (e) => {
  const term = e.target.value
  const brewList = await getBrew()
  const filtereddata = brewList.filter(item=>term.includes(item.name))
  console.log(filtereddata)
  createBrew(filtereddata)
})

 getBrew().then(data=>createBrew(data))





// name, brewery_type, address_2, address_3,street, city, state, country, postal_code, website_url, phone





