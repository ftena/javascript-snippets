function telephoneCheck(str) {
    let result = true;
    let invalidRegex = /[!$%^&*_+|~=`{}\[\]:";'<>?,.\/]/g;

    if(invalidRegex.test(str))
    {
        return false;
    } 

    let normalize = str.replace(/\s/g, ""); // remove spaces

    let regex = /^1?\([0-9]{3}\)[0-9]{7}$|^1?[0-9]{10}$|^1?\([0-9]{3}\)[0-9]{3}-?[0-9]{4}$|^1?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/g;
    result = regex.test(normalize);
    console.log(normalize + " " + result);
    return result;
}

telephoneCheck("1 555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("123**&!!asdf#");
telephoneCheck("(6054756961)");
telephoneCheck("1 456 789 4444");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("55 55-55-555-5");
telephoneCheck("2 757 622 7382");
telephoneCheck("(275) 762 27382");