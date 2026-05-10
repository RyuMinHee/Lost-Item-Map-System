const itemForm = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");

itemForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = document.getElementById("itemType").value;
    const name = document.getElementById("itemName").value;
    const location = document.getElementById("itemLocation").value;
    const description = document.getElementById("itemDescription").value;

    if (name === "" || location === "") {
        alert("물건 이름과 장소를 입력하세요.");
        return;
    }

    if (itemList.children[0].textContent === "아직 등록된 물건이 없습니다.") {
        itemList.innerHTML = "";
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>[${type}] ${name}</strong><br>
        장소: ${location}<br>
        특징: ${description}
    `;

    itemList.appendChild(listItem);
    itemForm.reset();
});
