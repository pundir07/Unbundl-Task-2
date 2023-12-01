const chocolates = [
    { id: 1, name: 'Dark Chocolate', price: 2.50, image: 'black.jpg' },
    { id: 2, name: 'Milk Chocolate', price: 2.00, image: 'milk-chocolate.jpg' },
    { id: 3, name: 'White Chocolate', price: 2.75, image: 'white-chocolate.jpg' },
    // Add more chocolate options as needed
];

const selectedItems = [];

function createChocolateOption(chocolate) {
    const option = document.createElement('div');
    option.classList.add('option');
    option.onclick = () => selectOption(chocolate);
    option.innerHTML = `
        <img src="${chocolate.image}" alt="${chocolate.name}">
        <p>${chocolate.name}</p>
        <p>$${chocolate.price.toFixed(2)}</p>
    `;
    return option;
}

function renderChocolateOptions() {
    const chocolateOptions = document.getElementById('chocolateOptions');
    chocolateOptions.innerHTML = '';
    chocolates.forEach(chocolate => {
        const option = createChocolateOption(chocolate);
        chocolateOptions.appendChild(option);
    });
}

function selectOption(chocolate) {
    if (selectedItems.length < 8) {
        selectedItems.push(chocolate);
        updateSelectedItems();
        calculateTotalPrice();
    } else {
        alert('You can only select up to 8 items.');
    }
}

function updateSelectedItems() {
    const selectedItemsContainer = document.getElementById('selectedItems');
    selectedItemsContainer.innerHTML = '';
    selectedItems.forEach(chocolate => {
        const item = document.createElement('div');
        item.innerHTML = `<img src="${chocolate.image}" alt="${chocolate.name}"> ${chocolate.name}`;
        selectedItemsContainer.appendChild(item);
    });
}

function calculateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = selectedItems.reduce((total, chocolate) => total + chocolate.price, 0);
    totalPriceElement.textContent = `Total Price: Rs${totalPrice.toFixed(2)}`;
}

// Initial setup
renderChocolateOptions();