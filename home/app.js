import { Database } from '../class/database.js'
const db = new Database

$(document).ready(() => {
    $("#test").click(function() {
        alert("Clicked")
        db.getData("sách truyện màu - thiếu nhi")
    });
})