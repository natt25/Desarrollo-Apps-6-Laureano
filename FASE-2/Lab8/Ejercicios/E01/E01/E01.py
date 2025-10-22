import reflex as rx

# =========================
# Estado (como en el enunciado)
# =========================
class State(rx.State):
    # a) Variable de estado booleana
    mostrar_solo_pendientes: bool = False

    # Datos de ejemplo (puedes reemplazar por los tuyos)
    tareas_en_progreso: list[dict] = [
        {"titulo": "API Login", "estado": "Pendiente"},
        {"titulo": "Diseño Header", "estado": "En Progreso"},
        {"titulo": "Unit tests", "estado": "Pendiente"},
    ]
    tareas_completadas: list[dict] = [
        {"titulo": "Setup Repo", "estado": "Completada"},
        {"titulo": "CI Básico", "estado": "Completada"},
    ]

    # b) Acción "Mostrar Pendientes"
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True

    # (Opcional) Botón para volver a ver todas
    def mostrar_todas(self):
        self.mostrar_solo_pendientes = False

    # --- Propiedades calculadas para filtrar de forma reactiva ---
    @rx.var
    def tareas_en_progreso_filtradas(self) -> list[dict]:
        if self.mostrar_solo_pendientes:
            return [t for t in self.tareas_en_progreso if t.get("estado") == "Pendiente"]
        return list(self.tareas_en_progreso)

    @rx.var
    def tareas_completadas_filtradas(self) -> list[dict]:
        if self.mostrar_solo_pendientes:
            # si solo quieres ver “Pendiente”, la columna Completadas quedará vacía
            return [t for t in self.tareas_completadas if t.get("estado") == "Pendiente"]
        return list(self.tareas_completadas)


# =========================
# c) UI (mismos nombres del ejemplo)
# =========================
def tarjeta_tarea(tarea: dict):
    # rx.div del enunciado -> en Reflex usamos rx.el.div
    return rx.el.div(
        rx.text(tarea.get("titulo", "")),
        # ... otros detalles de la tarea si quieres mostrarlos
        style={"padding": "8px", "border": "1px solid #ddd", "borderRadius": "8px", "marginBottom": "8px"},
    )


def columna_kanban(nombre: str, tareas_var: rx.Var):
    # En lugar de `if state.mostrar_solo_pendientes:` (Python),
    # ya dejamos listo el filtrado dentro de las propiedades calculadas del State,
    # así aquí solo renderizamos lo que nos llega.
    return rx.el.div(
        rx.heading(nombre, size="5"),
        rx.el.div(
            rx.foreach(
                tareas_var,
                lambda t: tarjeta_tarea(t),
            )
        ),
        style={"width": "320px", "gap": "12px", "display": "flex", "flexDirection": "column"},
    )


# =========================
# Página (equivalente a def index() del ejemplo)
# =========================
@rx.page(route="/", title="Kanban – Filtro de Pendientes")
def index() -> rx.Component:
    return rx.el.div(
        # Botones de filtro
        rx.el.div(
            rx.button("Mostrar Pendientes", on_click=State.mostrar_pendientes),
            rx.button("Mostrar Todas", on_click=State.mostrar_todas, variant="outline"),
            style={"display": "flex", "gap": "8px", "marginBottom": "16px"},
        ),
        # Columnas
        rx.el.div(
            columna_kanban("En Progreso", State.tareas_en_progreso_filtradas),
            columna_kanban("Completadas", State.tareas_completadas_filtradas),
            style={"display": "flex", "gap": "24px"},
        ),
        style={"padding": "24px"},
    )


# =========================
# App
# =========================
app = rx.App()
app.add_page(index)
