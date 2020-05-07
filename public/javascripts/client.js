window.onload = function() {
    // Call the dataTables jQuery plugin
    $('#dataTable').DataTable();

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
}