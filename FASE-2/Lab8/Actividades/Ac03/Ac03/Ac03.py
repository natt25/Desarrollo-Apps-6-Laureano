import re
import reflex as rx

# ---- Estado (mismo nombre que en el PDF) ----
class EstadoFormulario(rx.State):
    # Campos del PDF (a nivel de clase para usarlos en la UI)
    nombre: str = ""
    email: str = ""
    mensaje: str = ""

    # Feedback general
    feedback: str = ""
    feedback_color: str = "red"

    # Setters explícitos (evitan deprecation de auto-setters)
    def set_nombre(self, v: str): self.nombre = v
    def set_email(self, v: str): self.email = v
    def set_mensaje(self, v: str): self.mensaje = v

    # --- Validaciones de campos ---
    @staticmethod
    def _email_valido(email: str) -> bool:
        patron_email = r"^[^@\s]+@[^@\s]+\.[^@\s]+$"
        return bool(re.match(patron_email, (email or "").strip()))

    @staticmethod
    def _nombre_valido(nombre: str) -> bool:
        return bool((nombre or "").strip()) and len((nombre or "").strip()) >= 2

    @staticmethod
    def _mensaje_valido(msj: str) -> bool:
        return bool((msj or "").strip()) and len((msj or "").strip()) >= 5

    def enviar_formulario(self):
        # Valida cada campo
        if not self._nombre_valido(self.nombre):
            self.feedback = "Error: Nombre requerido (mín. 2 caracteres)."
            self.feedback_color = "red"
            try: rx.notify(self.feedback)
            except Exception: pass
            return

        if not self._email_valido(self.email):
            self.feedback = "Error: Dirección de correo electrónico no válida."
            self.feedback_color = "red"
            try: rx.notify(self.feedback)
            except Exception: pass
            return

        if not self._mensaje_valido(self.mensaje):
            self.feedback = "Error: Mensaje requerido (mín. 5 caracteres)."
            self.feedback_color = "red"
            try: rx.notify(self.feedback)
            except Exception: pass
            return

        # Éxito
        self.feedback = "Formulario enviado correctamente."
        self.feedback_color = "green"
        try: rx.notify(self.feedback)
        except Exception: pass

        # (Opcional) limpiar tras enviar
        # self.nombre = ""
        # self.email = ""
        # self.mensaje = ""

# ---- Componente (mismo nombre que en el PDF) ----
def formulario_contacto():
    # Botón deshabilitado si algún campo es inválido (opcional, ayuda UX)
    boton_deshabilitado = rx.cond(
        ~(EstadoFormulario.nombre) | ~(EstadoFormulario.email) | ~(EstadoFormulario.mensaje),
        True,
        False,
    )

    return rx.fragment(
        rx.heading("Formulario de Contacto"),
        rx.form(
            rx.input(
                placeholder="Nombre",
                value=EstadoFormulario.nombre,
                on_change=EstadoFormulario.set_nombre,
            ),
            rx.input(
                placeholder="Correo electrónico",
                value=EstadoFormulario.email,
                on_change=EstadoFormulario.set_email,
            ),
            # En Reflex: text_area (no textarea)
            rx.text_area(
                placeholder="Mensaje",
                value=EstadoFormulario.mensaje,
                on_change=EstadoFormulario.set_mensaje,
            ),
            rx.button("Enviar", type="submit", disabled=boton_deshabilitado),
            on_submit=EstadoFormulario.enviar_formulario,
            reset_on_submit=False,
        ),
        rx.text(EstadoFormulario.feedback, color=EstadoFormulario.feedback_color),
    )

# ---- Página y App (para ejecutar) ----
@rx.page(route="/", title="Formulario de Contacto - Reflex")
def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Experiencia 03: Formulario simple con validación", size="6"),
            formulario_contacto(),
            spacing="6",
            padding="4",
        ),
        min_h="90vh",
    )

app = rx.App()
app.add_page(index)
