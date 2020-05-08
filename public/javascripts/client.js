let editDialog = {
    title: null,
    description: null,
    author: null,
    date: null,
    saveButton: null
}

function fillTable() {
    // let postsTableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let postsTableBody = document.querySelector('#dataTable tbody');
    console.log(postsTableBody);

    fetch('/admin/dashboard')
        .then(res => res.json())
        .then(res => {
            let rows = '';
            for (const element of res) {
                rows += `<tr><td>${element.title}</td><td>${element.description}</td><td>${element.author}</td><td>${element.date}</td>`;
                rows += `<td><button class="btn btn-primary btn-block btn-edit" data-id="${element._id}" data-toggle="modal" href='#editModal'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
                rows += `<button class="btn btn-danger btn-block btn-delete" data-id="${element._id}" onclick="return confirm('Вы уверены?');"><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr>`;
            }
            postsTableBody.innerHTML = rows;


            // let editButtons = Array.from(document.getElementsByClassName('btn-edit'));
            // editButtons.forEach(element => {
            //     element.onclick = showEditDialog;
            // });
            // let deleteButtons = Array.from(document.getElementsByClassName('btn-delete'));
            // deleteButtons.forEach(element => {
            //     element.onclick = showDeleteDialog;
            // });
        })
        .catch(err => console.log(err));
}

window.onload = function() {

    // Call the dataTables jQuery plugin
    // $('#dataTable').DataTable();

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
    // ==============================================
    fillTable();
    // Edit =========================================
    editDialog.title = this.document.getElementById('postTitle');
    editDialog.description = this.document.getElementById('postDescription');
    editDialog.author = this.document.getElementById('postAuthor');
    editDialog.date = this.document.getElementById('postDate');
    // Save Btn
    editDialog.saveButton = this.document.getElementById('postSave');
    // editDialog.saveButton.onclick = saveProduct;
}