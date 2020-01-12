module.exports = function(app, router) {
  //Initialize all new routes here.

  var signup = require("../routes/admin/controller/admincontroller");
  var signin = require("../routes/admin/controller/fetchadmin");
  var signin_student = require("../routes/students/controller/Fetchstudentcontroller");
  var Certificates_Save = require("../routes/certificates/controller/certificatesSave");
  var FetchCer = require("../routes/certificates/controller/certificatesfetchbyrollnum");
  var allCer = require("./certificates/controller/AllCertificates");
  var studentSignup = require("../routes/students/controller/PostStudent");

  router.route("/admin/signin").post(signin);
  router.route("/admin/signup").post(signup);
  router.route("/student/signin").post(signin_student);
  router.route("/student/signup").post(studentSignup);
  router.route("/student/certificate").get(FetchCer);
  router.route("/admin/certificates/issue").post(Certificates_Save);
  router.route("/admin/certificates").get(allCer);
};
