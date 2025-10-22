import reflex as rx

config = rx.Config(
    app_name="Ac03",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)