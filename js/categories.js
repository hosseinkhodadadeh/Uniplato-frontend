$(document).ready(function () {
    $.get("http://localhost/backend/index.php/categories/list", function (data) {
        if (data.status === 'ok') {
            $(data.categories).each(function (index, item) {
                var el = $("<div class='cat' data-id='" + item.id + "' data-counter='" + item.counter + "'>" + item.category + " (" + item.counter + ")</div>");
                el.click(function () {
                    $("#counterForm").show();
                    $("#txtCategoryId").val($(this).data('id'));
                    $("#txtCategoryCounter").val($(this).data('counter'));
                });
                $("#Cateorylist").append(el);
            });
        }
    });

});
