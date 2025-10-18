import reflex as rx

class EstadoContador(rx.State):
    """Estado local del contador."""
    conteo: int = 0

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1

    def reiniciar(self):
        self.conteo = 0


def contador() -> rx.Component:
    """Componente principal de la página (UI)."""
    return rx.vstack(
        rx.heading("Actividad 1 – Contador", size=3),
        rx.hstack(
            rx.button("-", on_click=EstadoContador.disminuir),
            rx.box(
                rx.text(lambda: f"{EstadoContador.conteo}", size="8"),
                padding="8px 18px",
                border_radius="10px",
                border="1px solid #e2e8f0",
                min_width="90px",
                text_align="center",
            ),
            rx.button("+", on_click=EstadoContador.incrementar),
            spacing="5",
            align="center",
        ),
        rx.button("Reiniciar", on_click=EstadoContador.reiniciar, color_scheme="gray"),
        spacing="6",
        align="center",
        padding="20px",
    )


# Declarar la app y registrar la página.
app = rx.App()
app.add_page(contador, route="/", title="Reflex – Actividad 1 (Contador)")

# Nota: ejecuta con `reflex run`.
