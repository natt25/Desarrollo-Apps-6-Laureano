import reflex as rx

def contar_tareas_por_estado(tareas: list[dict]) -> dict:
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
    # Datos de ejemplo; reemplázalos por los tuyos si quieres
    tareas_en_progreso: list[dict] = [
        {"titulo": "API Login", "estado": "Pendiente"},
        {"titulo": "Diseño Header", "estado": "En Progreso"},
        {"titulo": "Unit tests", "estado": "Pendiente"},
    ]
    tareas_completadas: list[dict] = [
        {"titulo": "Setup Repo", "estado": "Completada"},
        {"titulo": "CI Básico", "estado": "Completada"},
    ]

    @rx.var
    def todas_las_tareas(self) -> list[dict]:
        # Unir todas para contar por estado
        return [*self.tareas_en_progreso, *self.tareas_completadas]

    # ---- Contadores reactivos (usan la función del PDF) ----
    @rx.var
    def pendientes_count(self) -> int:
        return contar_tareas_por_estado(self.todas_las_tareas).get("Pendiente", 0)

    @rx.var
    def en_progreso_count(self) -> int:
        return contar_tareas_por_estado(self.todas_las_tareas).get("En Progreso", 0)

    @rx.var
    def completadas_count(self) -> int:
        # Nota enunciado: la clave del ejemplo usa 'Completada' (singular)
        # Ajusta según tus datos: 'Completada' vs 'Completadas'
        return contar_tareas_por_estado(self.todas_las_tareas).get("Completada", 0)


# UI de columnas simple
def tarjeta_tarea(t: dict):
    return rx.el.div(
        rx.text(t.get("titulo", "")),
        style={
            "padding": "8px",
            "border": "1px solid #ddd",
            "borderRadius": "8px",
            "marginBottom": "8px",
        },
    )


def columna(nombre: str, items_var: rx.Var):
    return rx.el.div(
        rx.heading(nombre, size="5"),
        rx.el.div(
            rx.foreach(items_var, lambda t: tarjeta_tarea(t)),
        ),
        style={"width": "320px", "display": "flex", "flexDirection": "column", "gap": "8px"},
    )


# b) Mostrar contadores después de las columnas
def contadores_view():
    return rx.el.div(
        rx.el.div(rx.el.span("Pendientes: "),  rx.el.span(State.pendientes_count)),
        rx.el.div(rx.el.span("En Progreso: "), rx.el.span(State.en_progreso_count)),
        rx.el.div(rx.el.span("Completadas: "), rx.el.span(State.completadas_count)),
        style={"display": "flex", "gap": "16px", "marginTop": "16px", "fontWeight": 600},
    )


# Página
@rx.page(route="/", title="Kanban – Contadores por Estado")
def index() -> rx.Component:
    return rx.el.div(
        # ... Columnas Kanban ...
        rx.el.div(
            columna("En Progreso", State.tareas_en_progreso),
            columna("Completadas", State.tareas_completadas),
            style={"display": "flex", "gap": "24px"},
        ),
        # b) Contadores (usando la función del PDF vía propiedades reactivas)
        contadores_view(),
        style={"padding": "24px"},
        
    )


# App
app = rx.App()
app.add_page(index)
