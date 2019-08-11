$(function () {
    "use strict";
    $("#btnPosts").on("click", getUser);

    function getUser() {
        let userId = $("#inputUserID").val();
        $("#dvPosts").html("");

        if (userId) {
            $.get("https://jsonplaceholder.typicode.com/users")
                .done(displyUserInfo)
                .fail(function (error) {
                    alert(error);
                });
        } else {
            alert("Please Enter User ID");
        }
    }

    function getUserPosts(userID) {
        $.get("https://jsonplaceholder.typicode.com/posts", {
                userId: userID
            })
            .done(displayUserPosts)
            .fail(function (error) {
                alert(error);
            });
    }

    function displyUserInfo(response) {
        let userId = $("#inputUserID").val();
        if (response) {
            let user = response.filter(ele => ele.id == userId)[0];
            if (user) {

                getUserPosts(user.id);
                $("#userId").html(user.id);
                $("#userName").html(user.name);
                $("#userEmail").html(user.email);
                $("#userPhone").html(user.phone);
                $("#userWebsite").html(user.website);
            } else {
                $("#userId").html("");
                $("#userName").html("");
                $("#userEmail").html("");
                $("#userPhone").html("");
                $("#userWebsite").html("");
            }

        }
    }

    function displayUserPosts(response) {
        let posts = $("<table>");

        if (response) {
            let head = $("<tr>");
            head.append($("<th>").html("ID"));
            head.append($("<th>").html("Title"));
            head.append($("<th>").html("Body"));
            posts.append(head);

            response.forEach(function (e) {
                let tr = $("<tr>");
                tr.append($("<td>").html(e.id));
                tr.append($("<td>").html(e.title));
                tr.append($("<td>").html(e.body));
                posts.append(tr);
            });

            $("#postDiv").append(posts);

        }
    }
});