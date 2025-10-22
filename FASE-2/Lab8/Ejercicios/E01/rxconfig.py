import reflex as rx

config = rx.Config(
    app_name="E01",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)