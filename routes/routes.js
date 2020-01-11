module.exports = function(app,router){
//Initialize all new routes here.

var signup = require("../routes/admin/controller/admincontroller")
var signin = require("../routes/admin/controller/fetchadmin");
var signin_student = require("../routes/students/controller/Fetchstudentcontroller");
var Certificates_Save = require("../routes/certificates/controller/certificatesSave");
var FetchCer = require("../routes/certificates/controller/certificatesfetchbyrollnum");
var allCer = require("./certificates/controller/AllCertificates");
var studentSignup = require("./students/controller/PostStudent");

    router.route('/signin').get(signin);
    router.route("/signup").post(signup);
    router.route('/student').get(signin_student);
    router.route('/SignupStudent').post(studentSignup);
    router.route('/Certificates').post(Certificates_Save);
    router.route("/Rollnumber").get(FetchCer);
    router.route('/AllCertificates').get(allCer);
}