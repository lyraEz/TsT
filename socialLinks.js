// Lista de redes sociais. Adicione novos itens aqui seguindo o mesmo formato:
// {
//   href: 'URL da rede',
//   label: 'Nome legível',
//   iconHTML: '<...>', // Marcação SVG ou elemento lucide para o ícone
//   hoverClass: 'classe tailwind opcional para hover'
// }
// Define a variável global socialLinks com a lista de redes sociais.
window.socialLinks = [
  {
    href: 'https://github.com/lyraez',
    label: 'GitHub',
    // Ícone original do GitHub em SVG. Manter estrutura para consistência visual.
    iconHTML: `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    hoverClass: 'hover:text-purple-300'
  },
  {
    href: 'https://www.youtube.com/@LyraEz',
    label: 'YouTube',
    iconHTML: `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
    hoverClass: 'hover:text-red-400'
  },
  {
    href: 'https://scriptblox.com/u/chead',
    label: 'ScriptBlox',
    // Para ícones lucide use um elemento i com o atributo data-lucide
    iconHTML: `<i data-lucide="square-terminal" class="w-5 h-5"></i>`,
    hoverClass: 'hover:text-blue-400'
  },
  {
    href: 'http://guns.lol/lyraEz',
    label: 'Guns',
    iconHTML: `<i data-lucide="crosshair" class="w-5 h-5"></i>`,
    hoverClass: 'hover:text-yellow-400'
  },
  {
    href: 'https://open.spotify.com/user/31wcgihwye4fqaomjd4dzsxewoxq',
    label: 'Spotify',
    // SVG personalizado para o logo do Spotify
    iconHTML: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.48-.84.66-1.32.36-3.3-2.04-8.28-2.64-12.18-1.44-.48.18-1.02-.12-1.2-.6-.18-.48.12-1.02.6-1.2 4.5-1.32 9.9-1.2 13.74 1.2.48.3.66.84.36 1.32zM19.2 9.9c-3.96-2.34-10.56-2.52-14.34-1.38-.6.18-1.26-.18-1.44-.78-.18-.6.18-1.26.78-1.44 4.38-1.32 11.64-1.08 16.26 1.68.6.36.78 1.14.42 1.74-.36.6-1.14.78-1.74.42z"/></svg>`,
    hoverClass: 'hover:text-green-400'
  }
];