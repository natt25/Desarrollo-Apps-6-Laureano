const express = require("express");
const admin = require("firebase-admin");
const multer = require("multer");
const path = require("path");

//  1. INICIALIZAR FIREBASE ADMIN 
const serviceAccount = require("./proyecto-lab13-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Cambia por tu URL de Firestore / RTDB si quieres, pero para Storage
  // lo importante es el storageBucket:
  storageBucket: "TU_BUCKET.appspot.com"  // <-- CAMBIA ESTO
});

// Firestore
const db = admin.firestore();
// Storage
const bucket = admin.storage().bucket();

//  2. CONFIGURAR EXPRESS 
const app = express();
app.use(express.json());

// Multer para manejar archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });


//   RUTAS CRUD CON FIRESTORE
//   Colección: "usuarios"

// GET /usuarios -> lista todos
app.get("/usuarios", async (req, res) => {
  try {
    const snapshot = await db.collection("usuarios").get();
    const usuarios = [];
    snapshot.forEach(doc => {
      usuarios.push({ id: doc.id, ...doc.data() });
    });
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo usuarios" });
  }
});

// POST /usuarios -> crea uno nuevo
// Ejemplo body: { "nombre": "Juan", "edad": 25, "email": "juan@test.com" }
app.post("/usuarios", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection("usuarios").add(data);
    res.status(201).json({ id: docRef.id, ...data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creando usuario" });
  }
});

// GET /usuarios/:id -> obtiene un usuario por id
app.get("/usuarios/:id", async (req, res) => {
  try {
    const docRef = db.collection("usuarios").doc(req.params.id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo usuario" });
  }
});

// PUT /usuarios/:id -> actualiza un usuario
app.put("/usuarios/:id", async (req, res) => {
  try {
    const data = req.body;
    const docRef = db.collection("usuarios").doc(req.params.id);
    await docRef.update(data);
    res.json({ id: req.params.id, ...data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error actualizando usuario" });
  }
});

// DELETE /usuarios/:id -> elimina un usuario
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const docRef = db.collection("usuarios").doc(req.params.id);
    await docRef.delete();
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error eliminando usuario" });
  }
});


//   RUTA PARA SUBIR ARCHIVOS A STORAGE
//   y GUARDAR METADATOS EN FIRESTORE

// POST /upload  (campo de archivo: "file")
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se envió ningún archivo" });
    }

    const file = req.file;
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    const fileUpload = bucket.file(filename);

    // Subir a Firebase Storage desde buffer
    await fileUpload.save(file.buffer, {
      metadata: { contentType: file.mimetype }
    });

    // Hacer el archivo públicamente accesible (opcional)
    await fileUpload.makePublic();
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

    // Guardar metadatos en Firestore (colección "files")
    const docRef = await db.collection("files").add({
      originalName: file.originalname,
      storageName: filename,
      url: publicUrl,
      uploadDate: new Date()
    });

    res.status(201).json({
      message: "Archivo subido correctamente",
      fileId: docRef.id,
      url: publicUrl
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error subiendo archivo" });
  }
});


//   INICIAR SERVIDOR
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
