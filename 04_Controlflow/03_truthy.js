const useremail = "1234@gmail.com"
if (useremail) {
    console.log("got user email");
} else {
    console.log(" dont have user email");
}

// yha hamne condition ko true nhi likha lekin fir bi run ho rha because of truthy and falsey values mtlb hm inhe true ya false maan lete h 

// Falsy values 

false, 0, "", -0, Bigint 0n, Null, undefined, NaN

// truthy values

true, [], 1, "0", 'False', " ", {}, function(){}, 