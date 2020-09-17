$(document).ready(function () {
    $.get("http://localhost/backend/index.php/categories/list", function (data) {
        if (data.status === 'ok') {
            $(data.categories).each(function (index, item) {
                var el = $("<div class='cat' data-id='" + item.id + "' data-counter='" + item.counter + "'>" + item.category + " (" + item.counter + ")</div>");
                el.click(function () {
                    $("#counterForm").show();
                    $("#txtCategoryId").val($(this).data('id'));
                    $("#category_title").text('Category '+ item.category);
                    $("#txtCategoryCounter").val($(this).data('counter'));
                });
                $("#Cateorylist").append(el);
            });
        }
    });

    $('button').click(function (e) {

        var button_classes, value = +$('.counter').val();
        button_classes = $(e.currentTarget).prop('class');
        if (button_classes.indexOf('up_count') !== -1) {
            value = (value) + 1;
        } else {
            value = (value) - 1;
        }
        value = value < 0 ? 0 : value;
        $('.counter').val(value);
        $.post("http://localhost/backend/index.php/categories/save", {
            id: $("#txtCategoryId").val(),
            counter: value
        }).done(function (data) {
            if (data.status !== 'ok') {
                $("#alertBox").show().alert();
                window.setTimeout(function () {
                    $("#alertBox").hide();
                }, 3000)
            }
        }).fail(function () {
            $("#alertBox").show().alert();
            window.setTimeout(function () {
                $("#alertBox").hide();
            }, 3000)
        });

    });
    $('.counter').click(function () {
        $(this).focus().select();
    });

});
