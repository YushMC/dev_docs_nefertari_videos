// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nefertari: Editor de videos" /*
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
	  */,
      sidebar: [
        {
          label: "Guías de uso",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Instalación", slug: "guias/instalacion" },
            { label: "Primeros Pasos", slug: "guias/primeros-pasos" },
            { label: "Editar Videos", slug: "guias/editar-videos" },
          ],
        },
        {
          label: "Funcionalidades",
          autogenerate: { directory: "funcionalidades" },
        },
      ],
    }),
  ],
});
