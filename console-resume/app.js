//MY NAME IN CAPS
var fullname = {
    firstAndLast: " Zachary Farmer"
};
var fullCap = fullname.firstAndLast.toUpperCase();
console.log("Name: " + fullCap);
//MY CAREER FIELD
var careerField = {
    career: 'Full Stack Web Developer ',
    field: ' Student'
};
console.log("Career: " + careerField.career + "/" + careerField.field);
//MY DESCRIPTION
var desc = {
    actual: " I like to learn, but this ish hard"
};
console.log("Description: " + desc.actual);
console.log("\n");
// MY INTERESTS LISTED BELOW
var myInterests = {
    intr1: "* Lifting weights",
    intr2: "* Playing video games",
    intr3: "* Listening to music",
    intr4: "* Aviation"
};
console.log("My interests:" + "\n" + myInterests.intr1 + "\n" + myInterests.intr2 + "\n" + myInterests.intr3 + "\n" + myInterests.intr4);
console.log("\n");
// MY PREVIOUS JOB EXPERIENCE LISTED BELOW
console.log("My Previous Experience" + "\n");
var companyName = ["USAF,", "South Eastern Freight Lines,", "Day Trader,"];
var jobTitle = ["Crew Chief,", "Truck Driver,", "Money Loser,"];
var jobDescription = ["Maintain KC-135 airframe", "Deliver packages", "Lose money on the reg"];
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + companyName, jobTitle, jobDescription);
}
displayPosition(companyName[0], jobTitle[0], jobDescription[0]);
displayPosition(companyName[1], jobTitle[1], jobDescription[1]);
displayPosition(companyName[2], jobTitle[2], jobDescription[2]);
console.log("\n");
// MY SKILLS DISPLAYED BELOW
console.log("My Skills:");
function displaySkills(skill, cool) {
    if (cool == true) {
        console.log("* BAM:" + skill);
    }
    else {
        console.log("* " + skill);
    }
}
;
displaySkills("Master Call of Duty player", true);
displaySkills("Breaking airplanes", false);
displaySkills("JavaScript newbie", true);
displaySkills("Long handstands", true);
displaySkills("Tortoise whisperer", true);
displaySkills("Mediocre chess player", false);
