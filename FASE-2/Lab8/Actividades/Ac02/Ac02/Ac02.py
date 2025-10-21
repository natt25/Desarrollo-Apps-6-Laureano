import reflex as rx

# ---- Estado global (como en el PDF, pero a NIVEL DE CLASE) ----
class EstadoTareas(rx.State):
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    nueva_tarea: str = ""  # ← NUEVO: campo para controlar el input

    def agregar_tarea(self):
        texto = (self.nueva_tarea or "").strip()
        if not texto:
            return
        # Reasignar para que sea reactivo
        self.tareas = [*self.tareas, texto]
        # opcional: limpiar el input luego de agregar
        self.nueva_tarea = ""

# ---- Lista de tareas (mismo nombre que el PDF) ----
def lista_tareas():
    return rx.fragment(
        rx.heading("Lista de Tareas"),
        rx.el.ul(
            rx.foreach(EstadoTareas.tareas, lambda t: rx.el.li(t))
        ),
    )

# ---- Form para agregar tarea (mismo que el PDF) ----
def agregar_tarea():
    return rx.fragment(
        rx.input(
            placeholder="Agregar tarea...",
            value=EstadoTareas.nueva_tarea,                 # ← controlado por el estado
            on_change=EstadoTareas.set_nueva_tarea,         # ← escribe al estado
        ),
        rx.button(
            "Agregar",
            on_click=EstadoTareas.agregar_tarea,            # ← ya no pasa argumento
        ),
    )


# ---- Página ----
@rx.page(route="/", title="Lista de Tareas - Reflex")
def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Experiencia 02: Lista de Tareas con estado global", size="6"),
            agregar_tarea(),
            lista_tareas(),
            spacing="6",
            padding="4",
        ),
        min_h="90vh",
    )

# ---- App ----
app = rx.App()
app.add_page(index)
