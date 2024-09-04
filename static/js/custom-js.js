
// Form Validation

// First Name Validation

document.getElementById('firstname').addEventListener('blur', function() {

    const firstname = document.getElementById('firstname').value;
    if (firstname === "") {
        document.getElementById('firstname-error').innerText = "First name is required";

    } else {
        document.getElementById('firstname-error').innerText = "";

    }

})


// Last Name Validation
document.getElementById('lastname').addEventListener('blur', function() {
    const lastname = document.getElementById('lastname').value;
    if (lastname === "") {
        document.getElementById('lastname-error').innerText = "Last name is required";

    } else {
        document.getElementById('lastname-error').innerText = "";


    }
});

// Date of Birth Validation
document.getElementById('dateofbirth').addEventListener('blur', function() {
    const dateofbirth = document.getElementById('dateofbirth').value;
    if (dateofbirth === "") {
        document.getElementById('dateofbirth-error').innerText = "Date of Birth is required";

    } else {
        document.getElementById('dateofbirth-error').innerText = "";
    }
});

// Gender Validation

const male = document.getElementById('male').checked;
const female = document.getElementById('female').checked;
if (!male && !female) {
    document.getElementById('gender-error').innerText = "Gender is required";

} else {
    document.getElementById('gender-error').innerText = "";
}


// Blood Group Validation
document.getElementById('bloodgroup').addEventListener('blur', function() {
    const bloodgroup = document.getElementById('bloodgroup').value;
    if (bloodgroup === "") {
        document.getElementById('bloodgroup-error').innerText = "Blood Group is required";

    } else {
        document.getElementById('bloodgroup-error').innerText = "";
    }

});

// Marital Status Validation
document.getElementById('maritalstatus').addEventListener('blur', function() {
    const maritalstatus = document.getElementById('maritalstatus').value;
    if (maritalstatus === "") {
        document.getElementById('maritalstatus-error').innerText = "Marital status is required";

    } else {
        document.getElementById('maritalstatus-error').innerText = "";
    }
});


//Marriage Date Validation
document.getElementById('marriagedate').addEventListener('blur', function() {
    const marriagedate = document.getElementById('marriagedate').value;
    if (marriagedate === "") {
        document.getElementById('marriagedate-error').innerText = "Marriage Date is required";

    } else {
        document.getElementById('marriagedate-error').innerText = "";
    }

});


//Current Address Validation
document.getElementById('currentaddress').addEventListener('blur', function() {
    const currentaddress = document.getElementById('currentaddress').value;
    if (currentaddress === "") {
        document.getElementById('currentaddress-error').innerText = "Current Address is required";

    } else {
        document.getElementById('currentaddress-error').innerText = "";
    }
});


// Phone Number Validation
document.getElementById('phonenumber').addEventListener('blur', function() {
    const phonenumber = document.getElementById('phonenumber').value;
    const phoneRegex = /^[0-9]{10}$/;
    if (phonenumber === "") {
        document.getElementById('phonenumber-error').innerText = "Phone number is required";

    } else if (!phoneRegex.test(phonenumber)) {
        document.getElementById('phonenumber-error').innerText = "Please enter a valid 10-digit phone number";

    } else {
        document.getElementById('phonenumber-error').innerText = "";

    }
});

// Email Validation
document.getElementById('email').addEventListener('blur', function() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('email-error').innerText = "Email is required";

    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerText = "Please enter a valid email address";

    } else {
        document.getElementById('email-error').innerText = "";
    }
});

// Image Upload Validation
document.getElementById('uploadimage').addEventListener('blur', function() {
    const uploadimage = document.getElementById('uploadimage').files.length;
    if (uploadimage === 0) {
        document.getElementById('uploadimage-error').innerText = "Image upload is required";

    } else {
        document.getElementById('uploadimage-error').innerText = "";
    }
});


// Password Validation
document.getElementById('password').addEventListener('blur', function() {
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (password === "") {
        document.getElementById('password-error').innerText = "Password is required";

    } else if (!passwordRegex.test(password)) {
        document.getElementById('password-error').innerText = "Password must be at least 8 characters long, contain at least one letter, one number, and one special character";

    } else {
        document.getElementById('password-error').innerText = "";
    }
});


// Confirm Password Validation
document.getElementById('confirmpassword').addEventListener('blur', function() {
    const confirmpassword = document.getElementById('confirmpassword').value;
    if (confirmpassword === "") {
        document.getElementById('confirmpassword-error').innerText = "Please confirm your password";

    } else if (password !== confirmpassword) {
        document.getElementById('confirmpassword-error').innerText = "Passwords do not match";

    } else {
        document.getElementById('confirmpassword-error').innerText = "";
    }
});

// Highest Qualification Validation
document.getElementById('highestqualification').addEventListener('blur', function() {
    const highestQualification = document.getElementById('highestqualification').value;
    if (highestQualification === "") {
        document.getElementById('qualification-error').innerText = "Highest Qualification is required";

    } else {
        document.getElementById('qualification-error').innerText = "";
    }
});

// Role Type Validation
document.getElementById('roletype').addEventListener('blur', function() {
    const roleType = document.getElementById('roletype').value;
    if (roleType === "") {
        document.getElementById('roletype-error').innerText = "Please select a Role Type";
    } else {
        document.getElementById('roletype-error').innerText = "";
    }
});
// PAN Number Validation
document.getElementById('pannumber').addEventListener('blur', function() {
    const panNumber = document.getElementById('pannumber').value;
    if (panNumber === "") {
        document.getElementById('pannumber-error').innerText = "PAN Number is required";

    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber)) {
        document.getElementById('pannumber-error').innerText = "Invalid PAN Number format";

    } else {
        document.getElementById('pannumber-error').innerText = "";
    }
});

// PAN Card Upload Validation
document.getElementById('uploadpan').addEventListener('blur', function() {
    const uploadPan = document.getElementById('uploadpan').files.length;
    if (uploadPan === 0) {
        document.getElementById('uploadpan-error').innerText = "Upload PAN Card is required";

    } else {
        document.getElementById('uploadpan-error').innerText = "";
    }
});
// Bank Name Validation
document.getElementById('bankname').addEventListener('blur', function() {
    const bankName = document.getElementById('bankname').value;
    if (bankName === "") {
        document.getElementById('bankname-error').innerText = "Bank Name is required";

    } else {
        document.getElementById('bankname-error').innerText = "";
    }
});
// Bank Account Number Validation
document.getElementById('bankaccountnumber').addEventListener('blur', function() {
    const bankAccountNumber = document.getElementById('bankaccountnumber').value;
    if (bankAccountNumber === "") {
        document.getElementById('bankaccountnumber-error').innerText = "Bank Account Number is required";

    } else if (!/^\d{9,18}$/.test(bankAccountNumber)) {
        document.getElementById('bankaccountnumber-error').innerText = "Invalid Bank Account Number";

    } else {
        document.getElementById('bankaccountnumber-error').innerText = "";
    }
});

// Bank IFSC Code Validation
document.getElementById('ifsccode').addEventListener('blur', function() {
    const ifscCode = document.getElementById('ifsccode').value;
    if (ifscCode === "") {
        document.getElementById('ifsccode-error').innerText = "Bank IFSC Code is required";

    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
        document.getElementById('ifsccode-error').innerText = "Invalid IFSC Code format";
    } else {
        document.getElementById('ifsccode-error').innerText = "";
    }
});

// Employee Name Validation
document.getElementById('employeename').addEventListener('blur', function() {
    const employeeName = document.getElementById('employeename').value;
    if (employeeName === "") {
        document.getElementById('employeename-error').innerText = "Employee Name is required";

    } else {
        document.getElementById('employeename-error').innerText = "";
    }
});

// Aadhar Number Validation
document.getElementById('aadharnumber').addEventListener('blur', function() {
    const aadharNumber = document.getElementById('aadharnumber').value;
    if (aadharNumber === "") {
        document.getElementById('aadharnumber-error').innerText = "Aadhar Number is required";

    } else if (!/^\d{12}$/.test(aadharNumber)) {
        document.getElementById('aadharnumber-error').innerText = "Invalid Aadhar Number format";
        isValid = false;
    } else {
        document.getElementById('aadharnumber-error').innerText = "";
    }
});

// Aadhar Card Upload Validation
document.getElementById('uploadaadharcard').addEventListener('blur', function() {
    const uploadAadharCard = document.getElementById('uploadaadharcard').files.length;
    if (uploadAadharCard === 0) {
        document.getElementById('uploadaadharcard-error').innerText = "Upload Aadhar Card is required";

    } else {
        document.getElementById('uploadaadharcard-error').innerText = "";
    }
});


// System IP Address Validation
document.getElementById('systemipaddress').addEventListener('blur', function() {
    const systemIpAddress = document.getElementById('systemipaddress').value;
    if (systemIpAddress === "") {
        document.getElementById('systemipaddresss-error').innerText = "System IP Address is required";

    } else if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(systemIpAddress)) {
        document.getElementById('systemipaddresss-error').innerText = "Invalid IP Address format";

    } else {
        document.getElementById('systemipaddresss-error').innerText = "";
    }
});