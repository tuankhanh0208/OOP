let myStore = new Store("Cửa hàng tạp hóa");
let currentIndex;
function showAll() {
    let list = myStore.listProduct;
    let str = ` <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th colspan="2">Action</th>
        </tr>`
    for (let i = 0; i < list.length; i++) {
        str += ` <tr>
            <th>${list[i].id}</th>
            <th>${list[i].name}</th>
            <th>${list[i].price}</th>
            <th>${list[i].img}</th>
            <th><button onclick="startEdit(${i})" >Sửa</button></th>
            <th><button onclick="remove(${i})" id="updateButton">Xóa</button></th>
        </tr>`
    }
    document.getElementById("table-product").innerHTML = str;
}
function add() {
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    let priceInput = document.getElementById("price").value;
    let imgInput = document.getElementById("img").value;
    let newProduct = new Product(idInput, nameInput, priceInput, imgInput);
    myStore.addProduct(newProduct);
    alert("Thêm thành công");
    showAll()
    clear()
}
function remove(index) {
    let isConfirm = confirm("bạn có muốn xoá không ?")
    if (confirm) {
        myStore.removeProduct(index);
        alert("xoá thành công");
        showAll();
    }
}
function startEdit(index) {
    let product = myStore.getOneProduct(index);
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("img").value = product.img;
    currentIndex = index;
    document.getElementById("btn").style.display = 'none';
    document.getElementById("updateButton").style.display = 'inline';
    // document.getElementById("updateButton").innerHTML;
    // document.getElementById("btn-save").innerHTML = `<button onclick="edit(${index})">Sửa</button>`;
    // document.addEventListener("DOMContentLoaded", function () {
    //     // Your code here
    //     document.getElementById("btn-save").innerHTML = `<button onclick="edit(${index})">Sửa</button>`;
    // });
    console.log(index);
}

function edit() {
    let newId = document.getElementById("id").value;
    console.log(newId);
    let newName = document.getElementById("name").value;
    console.log(newName);
    let newPrice = document.getElementById("price").value;
    console.log(newPrice);
    let newImage = document.getElementById("img").value;
    console.log(newImage);
    let updatedProduct = new Product(newId, newName, newPrice, newImage);
    // console.log(index);
    myStore.update(currentIndex, updatedProduct);

    alert("Sửa thành công");
    document.getElementById("btn").style.display = 'inline';
    document.getElementById("updateButton").style.display = 'none';
    showAll();
    clear();
}

function clear() {
    const clearId = document.getElementById("id").value = "";
    const clearName = document.getElementById("name").value = "";
    const clearPrice = document.getElementById("price").value = "";
    const clearImage = document.getElementById("img").value = "";
}