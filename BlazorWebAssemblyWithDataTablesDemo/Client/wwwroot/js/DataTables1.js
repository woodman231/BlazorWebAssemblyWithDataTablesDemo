window.DataTables1 = {
    dataTable: null,
    buildDataTable: function () {
        this.dataTable = $("#dt1").DataTable({
            "columnDefs": [{
                "targets": 0,
                "render": function (data, type, row, meta) {
                    var dateValue = new Date(data);

                    if (type === 'display') {
                        return dateValue.toLocaleDateString();
                    }
                    else {
                        return dateValue.valueOf();
                    }
                }
            }],
        });
    },
    destroyDataTable: function () {
        if (this.dataTable) {
            this.dataTable.destroy();
        }        
    }
}