const express = require('express');  // Importa el framework Express
const app = express();  // Crea la aplicación Express

app.use(express.json());  // Middleware para leer JSON en el body
app.use(express.urlencoded({ extended: true })); // Lee x-www-form-urlencoded

// "DB" en memoria (array de tareas)
let tasks = [
    { id: 1, title: 'Estudiar Node.js', done: false },
    { id: 2, title: 'Preparar exposición', done: false }
];

// Funcion para generar IDs incrementales
let nextId = 3;

// GET /api/tasks  -> Lista todas las tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);  // Devuelve el array completo de tareas
});

// GET /api/tasks/:id  -> Obtiene una tarea específica por ID
app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);    // Convierte el parámetro a número
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json(task);  // Devuelve la tarea encontrada
});

// POST /api/tasks  -> Crea una nueva tarea
app.post('/api/tasks', (req, res) => {
    const { title } = req.body;  
    if (!title) {
        return res.status(400).json({ message: 'El título es obligatorio' });
    }

    const newTask = {
        id: nextId++,
        title: title,
        done: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT /api/tasks/:id  -> Actualiza una tarea existente
app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, done } = req.body;  // Datos que se desean actualizar

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualiza solo si vienen valores en el body
    if (title !== undefined) {
        task.title = title;
    }
    if (done !== undefined) {
        task.done = done;
    }

    res.json(task);  // Devuelve la tarea actualizada
});

// DELETE /api/tasks/:id  -> Elimina una tarea por ID
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    const deleted = tasks.splice(index, 1); // Elimina la tarea del array

    res.json({ message: 'Tarea eliminada', task: deleted[0] });
});

// Levanta el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor de tareas escuchando en http://localhost:3000');
});
