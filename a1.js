//THIS IS FOR THE DELAYED IMAGE 
setTimeout(function() {
    document.getElementById('delayedImage').style.display = 'block';
}, 10000); //10 seconds


function MarkToGrade() {

let input = document.getElementById("mark-input-box").value;
    //validation message
    let validationMessage = document.getElementById("validation-message");
     // result element
    let gradeResult = document.getElementById("grade-result");


    let mark = parseInt(input);

    try {
        
        // anythign that isnt a number
        if (isNaN(mark)) {
            throw "Please enter a number";
        }

        // negative numbers
        if (mark < 0) {
            throw "Please enter a postive number ";
        }

        // anyhing that isnt 0-100
        if (mark > 100) {
            throw "Please enter a number under 100 "
        }

        //calculations if there isnt any errors
        let grade = " ";

        if (mark >= 90) {
            grade = "A";
        } else if (mark >= 80) {
            grade = "B";
        } else if (mark >= 70) {
            grade = "C";
        } else if (mark >= 60) {
            grade = "D";
        } else if (mark >= 50) {
            grade = "E";
        } else {
            grade = "F";
        }

        gradeResult.innerHTML = grade;

    } catch (error) {
        
        validationMessage.innerHTML = error;
    }
}

//THIS IS FOR staff.html
//staff page
var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

//renders the table
function DisplayStaff() {
    let tbody = document.getElementById("staff-table-body");
    
    //to prevent errors
    if (!tbody) return; 

    tbody.innerHTML = "";

    //loop through every person in the list
    for (let i = 0; i < dataSet.length; i++) {
        let person = dataSet[i];
        
        //creates a new row <tr>
        let row = `<tr>
            <td>${person[0]}</td> <td>${person[1]}</td> <td>${person[2]}</td> <td>${person[3]}</td> <td>${person[4]}</td> <td>${person[5]}</td> </tr>`;

        //add the row to the table body
        tbody.innerHTML += row;
    }
}

    let nameAsc = false; //started false so first click becomes true 
    let salaryAsc = false;

    function SortByName() {
    //setting the direction
    nameAsc = !nameAsc;

    dataSet.sort(function(a, b) {
        if (nameA < nameB) {
            return nameAsc ? -1 : 1;
        }
        if (nameA > nameB) {
            return nameAsc ? 1 : -1;
        }
        return 0;
    });

//the table with the new order
    DisplayStaff();
}

    function SortBySalary() {
    salaryAsc = !salaryAsc;

    dataSet.sort(function(a, b) {
        //removing $ and , in order to reat these like numbers
        //a[5] would be the salary string
        let salaryA = parseInt(a[5].replace(/[$,]/g, ""));
        let salaryB = parseInt(b[5].replace(/[$,]/g, ""));

        if (salaryAsc) {
            return salaryA - salaryB; //asc
        } else {
            return salaryB - salaryA; //descending 
        }
    });

    DisplayStaff();
}

    //Initializing the table so i can view it before i have to press a button to make it load
    window.onload = function() {
    DisplayStaff();
};

//THIS IS FOR THE TEMPERATURE CONVERTER 

//conversion for Celcius box
function ConvertFromCelsius() {
    //grabs the valuje
    let valInput = document.getElementById("celsius").value;
    let c = parseFloat(valInput);

    //fahrenheit calculations 
    let f = (c * 1.8) + 32;
    //Kelvin calculations
    let k = c + 273.15;

    //fixed(2) so it remains clean and displaying results
    document.getElementById("fahrenheit").value = f.toFixed(2);
    document.getElementById("kelvin").value = k.toFixed(2);
}

//conversion for fahrenheit
function ConvertFromFahrenheit() {
    let valInput = document.getElementById("fahrenheit").value;
    let f = parseFloat(valInput);

    //updating celcius 
    let c = (f - 32) / 1.8;
    //upadting Kelvin
    let k = ((f - 32) / 1.8) + 273.15;

    document.getElementById("celsius").value = c.toFixed(2);
    document.getElementById("kelvin").value = k.toFixed(2);
}

//conversion for kelvin when the user types
function ConvertFromKelvin() {
    let valInput = document.getElementById("kelvin").value;
    let k = parseFloat(valInput);

    // updating celcius 
    let c = k - 273.15;
    //updating fahrenheit
    let f = ((k - 273.15) * 1.8) + 32;

    document.getElementById("celsius").value = c.toFixed(2);
    document.getElementById("fahrenheit").value = f.toFixed(2);
}