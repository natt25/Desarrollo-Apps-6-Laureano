import reflex as rx

config = rx.Config(
    app_name="Ac02",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)