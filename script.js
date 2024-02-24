let rowNum = 1;
function addRow(btn) {
    rowNum++;
    let row = `
      <tr id="row${rowNum}">
        <td><input type="text" class="form-control" name="name[]" placeholder="Enter name"></td>
        <td><input type="text" class="form-control" name="relation[]" placeholder="Enter relation name"></td>
        <td><input type="text" class="form-control" name="nid[]" placeholder="Enter NID number"></td>
        <td><input type="text" class="form-control" name="mobile[]" placeholder="Enter mobile number"></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteRow(${rowNum})" title="Remove this">-</button></td>
      </tr>
    `;
    document.getElementById("formTable").getElementsByTagName("tbody")[0].insertAdjacentHTML('beforeend', row);
    btn.parentNode.innerHTML = `<button type="button" class="btn btn-success" onclick="addRow(this)" title="Add another">+</button>`;
}

function deleteRow(rowId) {
    document.getElementById(`row${rowId}`).remove();
}