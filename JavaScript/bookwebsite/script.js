URL = "./books.json";

async function fetchitems() {
  const response = await fetch(URL);
  const data = await response.json();
  const books = data.books;

  console.log(books);

  const container = document.getElementById("items");

  books.forEach((element) => {
    console.log(element);
    let item = document.createElement("div");
    item.innerHTML = `
            <div class="row border rounded shadow p-3 my-3"  >
                <div class="col-2">
                  <img
                    src="${element.image}"
                    alt="${element.title}"
                    class="object-fit-contain"
                    width="100px"
                  />
                </div>
                <div class="col-7 d-flex flex-column">
                  <label for="title" class="fs-2 fw-bold">${element.title}</label>
                  <label for="author" class="fs-5">${element.author}</label>
                  <label for="price" class="fs-4 text-danger my-4">${element.price}</label>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-primary form-control my-3">
                    Buy Now
                  </button>
                  <button type="button" class="btn btn-secondary form-control">
                    Add to Cart
                  </button>
                </div>
              </div>
    `;

    container.appendChild(item)
  });
}

fetchitems();
