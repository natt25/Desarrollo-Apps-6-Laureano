import reflex as rx

# --- Estado ---
class EstadoContador(rx.State):
    conteo: int = 0

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1

# --- UI del contador ---
def contador():
    return rx.fragment(
        rx.hstack(
            rx.button("Incrementar", on_click=EstadoContador.incrementar),
            rx.text(EstadoContador.conteo),
            rx.button("Disminuir", on_click=EstadoContador.disminuir),
        )
    )

# --- Página ---
@rx.page(route="/", title="Contador Simple - Reflex")
def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Experiencia 01: Contador con estado local", size="6"),
            contador(),
            spacing="6",
            padding="4",
        ),
        min_h="90vh",
    )

# --- App---
app = rx.App()
app.add_page(index)
