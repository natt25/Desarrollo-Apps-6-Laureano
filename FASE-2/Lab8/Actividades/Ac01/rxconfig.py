import reflex as rx

config = rx.Config(
    app_name="Ac01",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)