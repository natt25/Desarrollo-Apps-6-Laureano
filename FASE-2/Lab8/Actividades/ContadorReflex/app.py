# ARCHIVO: app.py
# AUTOR: Natty (ChatGPT)
# FECHA: 2025-10-20
# DESCRIPCIÓN: Experiencia de práctica N°01 – Contador simple con estado local en Reflex.

import reflex as rx


class EstadoContador(rx.State):
    """Maneja el estado local del contador."""

    def __init__(self):
        super().__init__()
        self.conteo = 0

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1


def contador() -> rx.Component:
    """Componente UI del contador con botones y el valor visible."""
    return rx.center(
        rx.hstack(
            rx.button(
                "Incrementar",
                on_click=EstadoContador.incrementar,
            ),
            rx.text(EstadoContador.conteo, font_size="2xl", min_w="60px", text_align="center"),
            rx.button(
                "Disminuir",
                on_click=EstadoContador.disminuir,
            ),
            spacing="4",
        ),
        min_h="60vh",
    )


@rx.page(route="/", title="Contador – Reflex")
def index() -> rx.Component:
    return rx.vstack(
        rx.heading("Experiencia 01: Contador con estado local", size="6"),
        rx.text(
            "Demostración de manejo de estado local con rx.State (incrementar/disminuir).",
            color="gray",
        ),
        contador(),
        align_items="center",
        spacing="6",
        padding="6",
    )


# Opción de compilación por script (alternativa al comando `reflex run`).
# No es obligatorio ejecutarlo directamente; con `reflex run` basta.
if __name__ == "__main__":
    app = rx.App()
    app.add_page(index)
    app.compile()
