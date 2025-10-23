import reflex as rx
from typing import List, Dict

# a) Función
def contar_tareas_por_estado(tareas: List[Dict]) -> Dict[str, int]:
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contadores:
            contadores[estado] += 1
        else:
            contadores[estado] = 1
    return contadores

# Estado del tablero
class State(rx.State):
    # Datos de ejemplo
    tareas_pendientes: List[Dict] = [
        {"id": 1, "titulo": "Analizar requerimientos", "estado": "Pendiente"},
        {"id": 2, "titulo": "Mockups iniciales",       "estado": "Pendiente"},
    ]
    tareas_en_progreso: List[Dict] = [
        {"id": 3, "titulo": "Diseño Header",           "estado": "En Progreso"},
    ]
    tareas_completadas: List[Dict] = [
        {"id": 4, "titulo": "Setup Repo",              "estado": "Completada"},
        {"id": 5, "titulo": "CI Básico",               "estado": "Completada"},
    ]

    # Form de alta
    nuevo_titulo: str = ""
    nuevo_estado: str = "Pendiente"   # valor por defecto
    next_id: int = 6                  # generador simple de IDs

    # ----- Setters explícitos -----
    def set_nuevo_titulo(self, v: str): self.nuevo_titulo = v
    def set_nuevo_estado(self, v: str): self.nuevo_estado = v

    # ----- Alta: coloca la tarea en la columna correspondiente -----
    def agregar_tarea(self):
        titulo = (self.nuevo_titulo or "").strip()
        estado = (self.nuevo_estado or "").strip()
        if not titulo:
            return

        tarea = {"id": self.next_id, "titulo": titulo, "estado": estado}
        self.next_id += 1

        if estado == "Pendiente":
            self.tareas_pendientes = [*self.tareas_pendientes, tarea]
        elif estado == "En Progreso":
            self.tareas_en_progreso = [*self.tareas_en_progreso, tarea]
        elif estado == "Completada":
            self.tareas_completadas = [*self.tareas_completadas, tarea]
        else:
            # fallback
            self.tareas_en_progreso = [*self.tareas_en_progreso, tarea]

        # limpiar campo título tras agregar
        self.nuevo_titulo = ""

    # ----- Baja: elimina por id en cualquiera de las 3 listas -----
    def eliminar_tarea(self, tarea_id: int):
        self.tareas_pendientes  = [t for t in self.tareas_pendientes  if t["id"] != tarea_id]
        self.tareas_en_progreso = [t for t in self.tareas_en_progreso if t["id"] != tarea_id]
        self.tareas_completadas = [t for t in self.tareas_completadas if t["id"] != tarea_id]

    # ----- Unión para contadores -----
    @rx.var
    def todas_las_tareas(self) -> List[Dict]:
        return [*self.tareas_pendientes, *self.tareas_en_progreso, *self.tareas_completadas]

    # ----- Contadores reactivos -----
    @rx.var
    def pendientes_count(self) -> int:
        return contar_tareas_por_estado(self.todas_las_tareas).get("Pendiente", 0)

    @rx.var
    def en_progreso_count(self) -> int:
        return contar_tareas_por_estado(self.todas_las_tareas).get("En Progreso", 0)

    @rx.var
    def completadas_count(self) -> int:
        return contar_tareas_por_estado(self.todas_las_tareas).get("Completada", 0)

# UI: tarjeta + botón Eliminar
def tarjeta_tarea(t: Dict):
    return rx.el.div(
        rx.hstack(
            rx.text(t.get("titulo", "")),
            rx.button(
                "Eliminar",
                on_click=lambda: State.eliminar_tarea(t["id"]),
                size="1",
                variant="outline",
            ),
            justify="between",
            width="100%",
        ),
        style={
            "padding": "10px",
            "border": "1px solid #ddd",
            "borderRadius": "10px",
            "marginBottom": "10px",
        },
    )

# Columna Kanban
def columna(nombre: str, items_var: rx.Var):
    return rx.el.div(
        rx.heading(nombre, size="5"),
        rx.el.div(
            rx.foreach(items_var, lambda t: tarjeta_tarea(t)),
        ),
        style={
            "width": "360px",
            "display": "flex",
            "flexDirection": "column",
            "gap": "8px",
        },
    )

# Formulario
def form_alta():
    return rx.el.div(
        rx.hstack(
            rx.input(
                placeholder="Título de la tarea",
                value=State.nuevo_titulo,
                on_change=State.set_nuevo_titulo,
                width="360px",
            ),
            rx.el.select(
                rx.el.option("Pendiente",   value="Pendiente"),
                rx.el.option("En Progreso", value="En Progreso"),
                rx.el.option("Completada",  value="Completada"),
                value=State.nuevo_estado,
                on_change=State.set_nuevo_estado,
                style={"padding": "8px", "borderRadius": "8px"},
            ),
            rx.button("Agregar", on_click=State.agregar_tarea),
            style={"gap": "10px"},
        ),
        style={"marginBottom": "16px"},
    )

# Contadores
def contadores_view():
    return rx.el.div(
        rx.el.div(rx.hstack(rx.text("Pendientes: "),   rx.text(State.pendientes_count))),
        rx.el.div(rx.hstack(rx.text("En Progreso: "), rx.text(State.en_progreso_count))),
        rx.el.div(rx.hstack(rx.text("Completadas: "), rx.text(State.completadas_count))),
        style={"display": "flex", "gap": "24px", "marginTop": "16px", "fontWeight": 600},
    )


# Página
@rx.page(route="/", title="Kanban – Contadores + ABM")
def index() -> rx.Component:
    return rx.el.div(
        rx.heading("Tablero Kanban", size="6"),
        form_alta(),
        rx.el.div(
            columna("Pendientes",   State.tareas_pendientes),
            columna("En Progreso",  State.tareas_en_progreso),
            columna("Completadas",  State.tareas_completadas),
            style={"display": "flex", "gap": "24px", "flexWrap": "wrap"},
        ),
        contadores_view(),
        style={"padding": "24px"},
    )

# App
app = rx.App()
app.add_page(index)