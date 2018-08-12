import Navigo from "navigo";

var changePage = function (html) {
    document.getElementsByTagName("main")[0].innerHTML = html;
};

var getTemplateHTML = function (template_id) {
    return document.getElementById(template_id).innerHTML;
};

var root = null;
var useHash = false; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router.on({
    'about': function () {
        changePage(getTemplateHTML("page-about"));
        document.getElementById("nav-about").parentElement.classList.add("active");
    },
    'blog': function () {
        changePage(getTemplateHTML("page-blog"));
        document.getElementById("nav-blog").parentElement.classList.add("active");
    },
    'blog/:id': function (params) {
        changePage(getTemplateHTML("page-blog"));
        document.getElementById("nav-blog").parentElement.classList.add("active");
    },
    'projects': function () {
        changePage(getTemplateHTML("page-blog"));
        document.getElementById("nav-projects").parentElement.classList.add("active");
    },
    'projects/:id': function (params) {
        changePage(getTemplateHTML("page-blog"));
        document.getElementById("nav-projects").parentElement.classList.add("active");
    },
    'contact': function (params) {
        changePage(getTemplateHTML("page-blog"));
        document.getElementById("nav-contact").parentElement.classList.add("active");
    },
    'search': function (params, query) {
        changePage(getTemplateHTML("page-blog"));
    },
    '*': function () {
        changePage(getTemplateHTML("page-about"));
        document.getElementById("nav-about").parentElement.classList.add("active");
    }
}).resolve();

router.notFound(function () {
    changePage(getTemplateHTML("page-about"));
});

var nav_links = document.getElementsByClassName("nav-link");
for (var i = 0; i < nav_links.length; ++i) {
    nav_links[i].onclick = function () {
        var nav_links = document.getElementsByClassName("nav-link");
        for (var j = 0; j < nav_links.length; ++j) {
            nav_links[j].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
    };
}
