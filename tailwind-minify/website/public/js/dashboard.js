document.addEventListener("DOMContentLoaded", (event) => {
    let stockStatusObj = document.getElementById("stockStatus");
    let salesStatusObj = document.getElementById("salesStatus");

    let commonCSS = ["text-white", "text-2xl", "font-semibold", "m-2", "p-3"]

    for (let index = 0; index < commonCSS.length; index++) {
        const className = commonCSS[index];
        stockStatusObj.classList.add(className);
        salesStatusObj.classList.add(className);
    }

    stockStatusObj.classList.add("bg-green-500");

    salesStatusObj.classList.add("bg-red-600");
    salesStatusObj.classList.add("rounded-full");
    salesStatusObj.classList.add("h-200");
    salesStatusObj.classList.add("w-200");
    salesStatusObj.classList.add("items-center");
    salesStatusObj.classList.add("justify-center");

});
