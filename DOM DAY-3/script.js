
let form = document.createElement('form')
form.setAttribute('id', 'form')
document.body.append(form)

let div2 = document.createElement('div')
div2.setAttribute('class', 'form-group')
form.append(div2)

let h1 = document.createElement('h1')
h1.setAttribute('id', 'title')
h1.innerText = 'FORM'
div2.append(h1)



let h2 = document.createElement('p')
h2.setAttribute('id', 'description')
h2.innerText = 'Kindly fill this form given below and choose the favourite Food items of Minimum Two'
div2.append(h2)



let div3 = document.createElement('div')
div3.setAttribute('class', 'form-group')
form.append(div3)


let label = document.createElement('label')
label.setAttribute('for', 'first-name')
label.innerText = 'First Name: '
div3.append(label)


let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('id', 'first-name')
input.setAttribute('placeholder', 'Enter Your First Name')
input.required = true;
div3.append(input)

let br1 = document.createElement('br')
form.append(br1)
let br8 = document.createElement('br')
form.append(br8)


let div4 = document.createElement('div')
div4.setAttribute('class', 'form-group')
form.append(div4)


let label1 = document.createElement('label')
label1.setAttribute('for', 'last-name')
label1.innerText = 'Last Name: '
div4.append(label1)

let input1 = document.createElement('input')
input1.setAttribute('type', 'text')
input1.setAttribute('id', 'last-name')
input1.setAttribute('placeholder', 'Enter Your Last Name')
input1.required = true;
div4.append(input1)

let br2 = document.createElement('br')
form.append(br2)
let br9 = document.createElement('br')
form.append(br9)
//-----------------------------
let div5 = document.createElement('div')
div5.setAttribute('class', 'form-group')
div5.setAttribute('id', 'div5')
form.append(div5)

let label2 = document.createElement('p')
label2.setAttribute('for', 'address')
label2.innerText = 'Address:  '
div5.append(label2)

let input2 = document.createElement('textarea')
input2.setAttribute('type', 'text')
input2.setAttribute('id', 'address')
input2.setAttribute('placeholder', 'Enter Your Address')
input2.required = true;
div5.append(input2)

let br3 = document.createElement('br')
form.append(br3)
let br10 = document.createElement('br')
form.append(br10)
//---------------
let div6 = document.createElement('div')
div6.setAttribute('class', 'form-group')
form.append(div6)

let label3 = document.createElement('label')
label3.setAttribute('for', 'pincode')
label3.innerText = 'Pincode: '
div6.append(label3)

let input3 = document.createElement('input')
input3.setAttribute('type', 'text')
input3.setAttribute('id', 'pincode')
input3.setAttribute('placeholder', 'Enter Your Pincode')
input3.required = true;
div6.append(input3)

let br4 = document.createElement('br')
form.append(br4)
let br11 = document.createElement('br')
form.append(br11)

//-----------------------------------------------
let div7 = document.createElement('div')
div7.setAttribute('class', 'form-group')
form.append(div7)

let label4 = document.createElement('label')
label4.setAttribute('for', 'gender')
label4.innerText = 'Gender: '
div7.append(label4)


let br6 = document.createElement('br')
form.append(br6)

//---------------------------------------

let div8 = document.createElement('div')
div8.setAttribute('class', 'form-group')
form.append(div8)

let input4 = document.createElement('input')
input4.setAttribute('type', 'radio')
input4.setAttribute('name', 'gender')
input4.setAttribute('value', 'male')
input4.required = true;
div8.append(input4)


let label5 = document.createElement('label')
label5.innerText = 'Male'
div8.append(label5)



let input5 = document.createElement('input')
input5.setAttribute('type', 'radio')
input5.setAttribute('name', 'gender')
input5.setAttribute('value', 'female')
input5.required = true;
div8.append(input5)


let label6 = document.createElement('label')
label6.innerText = 'Female'
div8.append(label6)


let input6 = document.createElement('input')
input6.setAttribute('type', 'radio')
input6.setAttribute('name', 'gender')
input6.setAttribute('value', 'others')
input6.required = true;
div8.append(input6)


let label7 = document.createElement('label')
label7.innerText = 'Others'
div8.append(label7)


let br7 = document.createElement('br')
form.append(br7)
let br12 = document.createElement('br')
form.append(br12)

//----------------------------------

let div9 = document.createElement('div')
div9.setAttribute('class', 'form-group')
form.append(div9)



let label8 = document.createElement('label')
label8.setAttribute('for', 'food')
label8.innerText = 'Choice of Food: '
div9.append(label8)








let br14 = document.createElement('br')
form.append(br14)

let div10 = document.createElement('div')
div10.setAttribute('class', 'form-group')
form.append(div10)





let input7 = document.createElement('input')
input7.setAttribute('type', 'checkbox')
input7.setAttribute('name', 'food')
input7.setAttribute('value', 'Sushi')

div10.append(input7)


let label9 = document.createElement('label')
label9.innerText = 'Sushi'
div10.append(label9)





let input8 = document.createElement('input')
input8.setAttribute('type', 'checkbox')
input8.setAttribute('name', 'food')
input8.setAttribute('value', 'Pasta')

div10.append(input8)


let label10 = document.createElement('label')
label10.innerText = 'Pasta'
div10.append(label10)



let input9 = document.createElement('input')
input9.setAttribute('type', 'checkbox')
input9.setAttribute('name', 'food')
input9.setAttribute('value', 'Tocos')

div10.append(input9)


let label11 = document.createElement('label')
label11.innerText = 'Tocos'
div10.append(label11)


let input10 = document.createElement('input')
input10.setAttribute('type', 'checkbox')
input10.setAttribute('name', 'food')
input10.setAttribute('value', 'Pizza')

div10.append(input10)


let label12 = document.createElement('label')
label12.innerText = 'Pizza'
div10.append(label12)


let input11 = document.createElement('input')
input11.setAttribute('type', 'checkbox')
input11.setAttribute('name', 'food')
input11.setAttribute('value', 'Biryani')

div10.append(input11)


let label13 = document.createElement('label')
label13.innerText = 'Biryani'
div10.append(label13)




let br15 = document.createElement('br')
form.append(br15)
let br16 = document.createElement('br')
form.append(br16)
//----------------------

let div11 = document.createElement('div')
div11.setAttribute('class', 'form-group')
form.append(div11)


let label14 = document.createElement('label')
label14.setAttribute('for', 'State')
label14.innerText = 'State: '
div11.append(label14)

let input12 = document.createElement('input')
input12.setAttribute('type', 'text')
input12.setAttribute('id', 'State')
input12.setAttribute('placeholder', 'Enter Your State')
input12.required = true;
div11.append(input12)



let br17 = document.createElement('br')
form.append(br17)
let br18 = document.createElement('br')
form.append(br18)

//--------------------------

let div12 = document.createElement('div')
div12.setAttribute('class', 'form-group')
form.append(div12)

let label15 = document.createElement('label')
label15.setAttribute('for', 'Country')
label15.innerText = 'Country: '
div12.append(label15)

let input13 = document.createElement('input')
input13.setAttribute('type', 'text')
input13.setAttribute('id', 'Country')
input13.setAttribute('placeholder', 'Enter Your Country')
input13.required = true;
div12.append(input13)



let br19 = document.createElement('br')
form.append(br19)
let br20 = document.createElement('br')
form.append(br20)


//----------------------
let div13 = document.createElement('div')
div13.setAttribute('class', 'form-group')
form.append(div13)

let button = document.createElement('button')
button.setAttribute('type', 'button')
button.setAttribute('class', 'btn btn-primary')
button.setAttribute('id', 'submit')
button.setAttribute('onclick', 'addToTable()')
button.innerText = 'submit'
div13.append(button)


let br21 = document.createElement('br')
form.append(br21)
let br22 = document.createElement('br')
form.append(br22)

//--------------------------------------------------------------------

let div1 = document.createElement('div')
div1.setAttribute('class', 'form-group')
div1.setAttribute('id', 'div1')

document.body.append(div1)

let table = document.createElement('table')
table.setAttribute('id', 'datatable')
table.setAttribute('class', 'table')
table.setAttribute('border', '1')
div1.append(table)



let thead = document.createElement('thead')
table.append(thead)

let tr = document.createElement('tr')
thead.append(tr)



let th1 = document.createElement('th')
th1.innerText = 'First Name'
tr.append(th1)


let th2 = document.createElement('th')
th2.innerText = 'Last Name'
tr.append(th2)

let th3 = document.createElement('th')
th3.innerText = 'Address'
tr.append(th3)


let th4 = document.createElement('th')
th4.innerText = 'Pincode'
tr.append(th4)



let th5 = document.createElement('th')
th5.innerText = 'Gender'
tr.append(th5)

let th6 = document.createElement('th')
th6.innerText = 'Choice Of Food'
tr.append(th6)

let th7 = document.createElement('th')
th7.innerText = 'State'
tr.append(th7)

let th8 = document.createElement('th')
th8.innerText = 'Country'
tr.append(th8)

let tbody = document.createElement('tbody')
table.append(tbody)


function addToTable() {
    // Get form values
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var food = document.querySelectorAll('input[name="food"]:checked');
    var state = document.getElementById("State").value;
    var country = document.getElementById("Country").value;





    // Check if all fields are filled
    if (firstName === "" || lastName === "" || address === "" || pincode === "" || gender === null || food.length < 2 || state === "" || country === "") {
        alert("Please fill in all fields and select at least two food items.");
        return;
    }

    // Get the table and create a new row
    var table = document.getElementById("datatable");
    var newRow = table.insertRow(table.rows.length);

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    // Populate cells with form values
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender.value;
    cell6.innerHTML = Array.from(food).map(food => food.value).join(", ");
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    // Clear the form fields
    document.getElementById("form").reset();

}