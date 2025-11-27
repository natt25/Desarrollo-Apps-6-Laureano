var admin = require("firebase-admin");
// var serviceAccount = require("./proyectoinicio.json");
var serviceAccount = require("./proyecto-lab13-firebase-adminsdk-fbsvc-5bac3bfd4c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://proyecto-lab13-default-rtdb.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");

usersRef.set({
  usuarios: {
    name: "carlos reyes",
    age: 28,
    salary: 2304.54
  }
});
