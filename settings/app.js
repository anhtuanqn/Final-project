import { Database } from '../class/database.js'
const db = new Database

db.getDataForEdit("sách")

$(document).on("click", ".edit-btn", function() {
    var item = $(this).closest(".user-item");
    var name = item.find("li:eq(0)").text()
    var author = item.find("li:eq(1)").text()
    var publisher = item.find("li:eq(2)").text()
    var category = item.find("li:eq(3)").text()
    var desciption = item.find("li:eq(4)").text()
    var price = item.find("li:eq(5)").text()
    var url = item.find("li:eq(6)").text()
    item.find("li:eq(0)").html("<input type='text' class='form-control' value='" + name + "'>");
    item.find("li:eq(1)").html("<input type='text' class='form-control' value='" + author + "'>");
    item.find("li:eq(2)").html("<input type='text' class='form-control' value='" + publisher + "'>");
    item.find("li:eq(3)").html("<input type='text' class='form-control' value='" + category + "'>");
    item.find("li:eq(4)").html("<input type='text' class='form-control' value='" + desciption + "'>");
    item.find("li:eq(5)").html("<input type='text' class='form-control' value='" + price + "'>");
    item.find("li:eq(6)").html("<input type='text' class='form-control' value='" + url + "'>");
    $(this).text("Save").removeClass("edit-btn btn-warning").addClass("save-btn btn-success");
});

$(document).on("click", ".save-btn", function() {
    var item = $(this).closest(".user-item");
    var name = item.find("li:eq(0) input").val();
    var author = item.find("li:eq(1) input").val();
    var publisher = item.find("li:eq(2) input").val();
    var category = item.find("li:eq(3) input").val();
    var desciption = item.find("li:eq(4) input").val();
    var price = item.find("li:eq(5) input").val();
    var url = item.find("li:eq(6) input").val()
    var id = item.find("li:eq(7)").text()
    item.find("li:eq(0)").text(name);
    item.find("li:eq(1)").text(author);
    item.find("li:eq(2)").text(publisher);
    item.find("li:eq(3)").text(category)
    item.find("li:eq(4)").text(desciption)
    item.find("li:eq(5)").text(price);
    item.find("li:eq(6)").text(url);
    $(this).text("Edit").removeClass("save-btn btn-success").addClass("edit-btn btn-warning");
    db.updateData("sách", id, {
        name: name,
        author: author,
        price: price,
        publisher: publisher,
        desciption: desciption,
        url: url,
        category: category
    })
});

$(document).on("click", ".delete-btn", function() {
    var item = $(this).closest(".user-item");
    var id = item.find("li:eq(7)").text()
    $(this).closest('.content').remove();
    db.deleteDocs("sách", id)
});