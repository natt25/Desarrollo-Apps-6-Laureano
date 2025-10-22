# Ac04/Ac04.py
import reflex as rx
import httpx

# 1) Llamada a una API pública simple (sin auth)
async def obtener_datos_api():
    url = "https://jsonplaceholder.typicode.com/todos?_limit=5"
    async with httpx.AsyncClient() as cliente:
        resp = await cliente.get(url, timeout=10)
        resp.raise_for_status()
        return resp.json()  # lista de dicts con 'title'

# 2) Estado (a nivel de clase para poder usar EstadoDatosAPI.datos en la UI)
class EstadoDatosAPI(rx.State):
    datos: list[dict] = []
    cargando: bool = False
    error: str = ""
    info: str = ""

    async def cargar_datos(self):
        self.cargando = True
        self.error = ""
        self.info = ""
        try:
            data = await obtener_datos_api()
            # Reasignar lista para disparar re-render
            self.datos = list(data)
            self.info = "Datos cargados correctamente."
        except Exception as e:
            self.datos = []
            self.error = f"Error al cargar: {e}"
        finally:
            self.cargando = False

# 3) Componente visual (como en el PDF, con ajustes mínimos)
def mostrar_datos_api():
    return rx.fragment(
        rx.button(
            rx.cond(EstadoDatosAPI.cargando, "Cargando...", "Cargar Datos"),
            on_click=EstadoDatosAPI.cargar_datos,
            disabled=EstadoDatosAPI.cargando,
        ),
        # Mensajes en pantalla (en vez de notify)
        rx.cond(EstadoDatosAPI.info, rx.text(EstadoDatosAPI.info, color="green"), rx.fragment()),
        rx.cond(EstadoDatosAPI.error, rx.text(EstadoDatosAPI.error, color="red"), rx.fragment()),
        # Lista de resultados: usar rx.el.ul + rx.foreach
        rx.el.ul(
            rx.foreach(
                EstadoDatosAPI.datos,
                # cada item es un dict con clave 'title'
                lambda item: rx.el.li(item["title"])
            )
        ),
    )

# 4) Página + App
@rx.page(route="/", title="Consumo de API - Reflex")
def index() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.heading("Experiencia 04: Consumo de una API externa", size="6"),
            mostrar_datos_api(),
            spacing="6",
            padding="4",
        ),
        min_h="90vh",
    )

app = rx.App()
app.add_page(index)
