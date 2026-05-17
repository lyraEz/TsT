// Funções utilitárias para gerar elementos de forma dinâmica.
// Estes helpers recebem os dados e o container alvo e criam os
// elementos necessários. Isso mantém o HTML principal limpo e
// facilita a manutenção.

/**
 * Cria botões de redes sociais a partir de uma lista de links.
 * @param {Array} links Lista de objetos contendo href, label, iconHTML e hoverClass.
 * @param {HTMLElement} container Elemento onde os links serão inseridos.
 */
function createSocialLinks(links, container) {
  if (!container) return;
  container.innerHTML = '';
  // Remove a classe skeleton quando os links estiverem prontos para serem inseridos
  container.classList.remove('skeleton');
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    // Classes básicas de estilo, adicionando foco acessível e transições.
    a.className = [
      'interact',
      'p-3.5',
      'rounded-2xl',
      'social-btn',
      'hover:-translate-y-1',
      'shadow-lg',
      'transition',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-purple-500'
    ].join(' ');
    // Aplica classes de hover específicas, se definidas no objeto.
    if (link.hoverClass) {
      link.hoverClass.split(' ').forEach(cls => a.classList.add(cls));
    }
    // Atributo aria para leitores de tela.
    a.setAttribute('aria-label', link.label);
    // Inserção do ícone através de innerHTML permite reaproveitar
    // SVGs e elementos lucide definidos na configuração.
    a.innerHTML = link.iconHTML;
    container.appendChild(a);
  });
}

/**
 * Cria cartões de projetos a partir de uma lista de itens.
 * @param {Array} projects Lista de objetos contendo url, title, description e icon.
 * @param {HTMLElement} container Elemento onde os cards serão inseridos.
 */
function createProjectCards(projects, container) {
  if (!container) return;
  container.innerHTML = '';
  // Remove a classe skeleton quando os cards estiverem prontos para serem inseridos
  container.classList.remove('skeleton');
  projects.forEach(proj => {
    const a = document.createElement('a');
    a.href = proj.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = [
      'liquid-glass',
      'p-5',
      'interact',
      'group',
      'flex',
      'items-center',
      'gap-5',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-purple-500'
    ].join(' ');

    // Bloco do ícone
    const iconContainer = document.createElement('div');
    iconContainer.className = [
      'w-12',
      'h-12',
      'rounded-2xl',
      'bg-white/5',
      'border',
      'border-white/10',
      'flex',
      'items-center',
      'justify-center',
      'shrink-0',
      'group-hover:bg-purple-500/10',
      'group-hover:border-purple-500/30',
      'transition-colors',
      'shadow-inner',
      'blur-component'
    ].join(' ');
    const iconEl = document.createElement('i');
    // Utiliza lucide para os ícones; o atributo data-lucide indica qual ícone será renderizado.
    iconEl.setAttribute('data-lucide', proj.icon);
    iconEl.className = 'w-6 h-6 text-white/60 group-hover:text-purple-300 transition-colors';
    iconContainer.appendChild(iconEl);
    a.appendChild(iconContainer);

    // Bloco de texto
    const content = document.createElement('div');
    content.className = 'flex flex-col flex-1';
    const h3 = document.createElement('h3');
    h3.className = 'text-base font-bold text-white flex items-center gap-2';
    h3.textContent = proj.title;
    const p = document.createElement('p');
    p.className = 'text-white/50 text-xs mt-1';
    p.textContent = proj.description;
    content.appendChild(h3);
    content.appendChild(p);
    a.appendChild(content);

    // Ícone de seta
    const arrow = document.createElement('i');
    arrow.setAttribute('data-lucide', 'chevron-right');
    arrow.className = 'w-5 h-5 text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all';
    a.appendChild(arrow);

    // Atributo aria para acessibilidade
    a.setAttribute('aria-label', proj.title);
    container.appendChild(a);
  });
}

// Exposição global para uso em scripts que não utilizam módulos
if (typeof window !== 'undefined') {
  window.createSocialLinks = createSocialLinks;
  window.createProjectCards = createProjectCards;
}