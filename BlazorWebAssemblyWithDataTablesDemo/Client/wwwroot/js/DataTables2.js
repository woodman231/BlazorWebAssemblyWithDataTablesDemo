window.DataTables2 = {
    dataTable: null,
    buildDataTable: function (ajaxUrl) {
        this.dataTable = $("#dt2").DataTable({
            "ajax": {
                "url": ajaxUrl,
                "dataSrc": "",
            },
            "columns": [
                {
                    "data": "date",
                    "render": function (data, type, row, meta) {
                        var dateValue = new Date(data);

                        if (type === 'display') {                            
                            return dateValue.toLocaleDateString();
                        }
                        else {
                            return dateValue.valueOf();
                        }
                    }
                },
                { "data": "temperatureC" },
                { "data": "temperatureF" },
                { "data": "summary" },
            ]
        });
    },
    destroyDataTable: function () {
        if (this.dataTable) {
            this.dataTable.destroy();
        }
    },
    refreshDataTable: function () {
        if (this.dataTable) {
            this.dataTable.ajax.reload();
        }
    }
}