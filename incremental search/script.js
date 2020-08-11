/* eslint-disable indent */
var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];

var input = $("#input");
var results = $("#results");

function search() {
    return function () {
        var matches = [];
        var value = input.val();
        var resultsHTML = "";

        if (value == "" || !value) {
            results.empty();
            return;
        }

        for (var i = 0; i < countries.length; i++) {
            if (
                !countries[i].toLowerCase().indexOf(value.toLowerCase()) &&
                matches.length < 4
            ) {
                matches.push(countries[i]);
            }
        }

        if (!matches.length) {
            resultsHTML = "no results";
        } else {
            matches.forEach(function (match) {
                resultsHTML += `<div class = 'country' > ${match}</div>`;
            });
        }
        results.html(resultsHTML);
    };
}

input.on("input", search());

results
    .on("mouseover", ".country", function () {
        $(this).addClass("highlight");
        // console.log($(this).find(".country"));
    })
    .on("mouseout", ".country", function () {
        $(this).removeClass("highlight");
    });

results.on("mousedown", function (e) {
    input.val(e.target.innerHTML.trim());
    results.empty();
});

input.on("keydown", function (e) {
    var currentResult = $(".country");

    switch (e.keyCode) {
        case 40:
            if (!currentResult.hasClass("highlight")) {
                currentResult.first().addClass("highlight");
            } else if (currentResult.last().hasClass("highlight")) {
                break;
            } else {
                $(".highlight")
                    .removeClass("highlight")
                    .next()
                    .addClass("highlight");
            }
            break;
        case 38:
            if (!currentResult.hasClass("highlight")) {
                currentResult.last().addClass("highlight");
            } else if (currentResult.first().hasClass("highlight")) {
                break;
            } else {
                $(".highlight")
                    .removeClass("highlight")
                    .prev()
                    .addClass("highlight");
            }
            break;
        case 13:
            input.val($(".highlight")[0].innerHTML.trim());
            results.empty();
            break;
        default:
            break;
    }
});

input.on("blur", function () {
    results.empty();
});

input.on("focus", search());
