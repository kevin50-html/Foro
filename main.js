/*
 * Plantilla de datos del foro.
 * Agrega, elimina o sustituye objetos dentro de los arreglos `subforums` y `topics`
 * para conectar estas vistas con tu origen de datos real (APIs, bases de datos, etc.).
 */

const subforums = [
    {
        category: "Bienvenida y Guías",
        icon: "fa-handshake-o",
        title: "Presentaciones",
        description: "Preséntate a la comunidad y conoce a otros miembros del foro.",
        stats: { posts: 132, topics: 45 },
        lastPost: {
            label: "Última publicación",
            url: "#",
            author: "MaríaP",
            authorUrl: "#",
            date: "05 Feb 2024"
        }
    },
    {
        category: "Bienvenida y Guías",
        icon: "fa-lightbulb-o",
        title: "Guías esenciales",
        description: "Recopilación de tutoriales para empezar y resolver dudas frecuentes.",
        stats: { posts: 268, topics: 64 },
        lastPost: {
            label: "Última publicación",
            url: "#",
            author: "EquipoForo",
            authorUrl: "#",
            date: "22 Ene 2024"
        }
    },
    {
        category: "Soporte Técnico",
        icon: "fa-life-ring",
        title: "Ayuda con errores",
        description: "Comparte mensajes de error y recibe apoyo de la comunidad.",
        stats: { posts: 512, topics: 120 },
        lastPost: {
            label: "Última publicación",
            url: "#",
            author: "CarlosR",
            authorUrl: "#",
            date: "14 Feb 2024"
        }
    },
    {
        category: "Soporte Técnico",
        icon: "fa-cogs",
        title: "Integraciones",
        description: "Discute APIs, SDKs y personalizaciones avanzadas.",
        stats: { posts: 198, topics: 53 },
        lastPost: {
            label: "Última publicación",
            url: "#",
            author: "DevNicolás",
            authorUrl: "#",
            date: "10 Feb 2024"
        }
    },
    {
        category: "Comunidad",
        icon: "fa-comments",
        title: "Charlas generales",
        description: "Conversaciones informales y anuncios de la comunidad.",
        stats: { posts: 742, topics: 205 },
        lastPost: {
            label: "Última publicación",
            url: "#",
            author: "LunaCode",
            authorUrl: "#",
            date: "18 Feb 2024"
        }
    },
    {
        category: "Comunidad",
        icon: "fa-trophy",
        title: "Proyectos destacados",
        description: "Comparte tus proyectos terminados y recibe retroalimentación.",
        stats: { posts: 321, topics: 88 },
        lastPost: {
            label: "Última publicación",
            url: "#",
            author: "IngridUX",
            authorUrl: "#",
            date: "09 Feb 2024"
        }
    }
];

const topics = [
    {
        statusIcon: "fa-fire",
        subject: "¿Vale la pena aprender Python en 2024?",
        subjectUrl: "#",
        starter: "LauraDev",
        starterUrl: "#",
        replies: 24,
        views: 1240,
        lastReplyDate: "12 Feb 2024",
        lastReplyAuthor: "JorgeD",
        lastReplyUrl: "#"
    },
    {
        statusIcon: "fa-rocket",
        subject: "Lanzamiento de la nueva API pública",
        subjectUrl: "#",
        starter: "EquipoForo",
        starterUrl: "#",
        replies: 8,
        views: 980,
        lastReplyDate: "16 Feb 2024",
        lastReplyAuthor: "MartaQA",
        lastReplyUrl: "#"
    },
    {
        statusIcon: "fa-book",
        subject: "Guía paso a paso para migrar tus datos",
        subjectUrl: "#",
        starter: "DataGeek",
        starterUrl: "#",
        replies: 15,
        views: 678,
        lastReplyDate: "11 Feb 2024",
        lastReplyAuthor: "AnalistaMX",
        lastReplyUrl: "#"
    },
    {
        statusIcon: "fa-life-ring",
        subject: "Error 504 al sincronizar integraciones externas",
        subjectUrl: "#",
        starter: "CarlosR",
        starterUrl: "#",
        replies: 5,
        views: 342,
        lastReplyDate: "19 Feb 2024",
        lastReplyAuthor: "SoporteAna",
        lastReplyUrl: "#"
    },
    {
        statusIcon: "fa-lock",
        subject: "Mantenimiento programado del 25 de febrero",
        subjectUrl: "#",
        starter: "Moderación",
        starterUrl: "#",
        replies: 3,
        views: 1570,
        lastReplyDate: "17 Feb 2024",
        lastReplyAuthor: "Moderación",
        lastReplyUrl: "#"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    renderSubforums();
    renderTopics();
});

function renderSubforums() {
    const container = document.getElementById('subforums-container');
    if (!container) {
        return;
    }

    const grouped = subforums.reduce((map, forum) => {
        const category = forum.category || 'General';
        if (!map.has(category)) {
            map.set(category, []);
        }
        map.get(category).push(forum);
        return map;
    }, new Map());

    grouped.forEach((forums, category) => {
        const subforumElement = document.createElement('div');
        subforumElement.className = 'subforum';

        const titleElement = document.createElement('div');
        titleElement.className = 'subforum-title';
        titleElement.innerHTML = `<h1>${category}</h1>`;
        subforumElement.appendChild(titleElement);

        forums.forEach((forum, index) => {
            const row = document.createElement('div');
            row.className = 'subforum-row';
            const info = forum.lastPost || {};
            row.innerHTML = `
                <div class="subforum-icon subforum-column center">
                    <i class="fa ${forum.icon} center"></i>
                </div>
                <div class="subforum-description subforum-column">
                    <h4><a href="${forum.url || '#'}">${forum.title}</a></h4>
                    <p>${forum.description}</p>
                </div>
                <div class="subforum-stats subforum-column center">
                    <span>${forum.stats.posts} Mensajes | ${forum.stats.topics} Temas</span>
                </div>
                <div class="subforum-info subforum-column">
                    <b><a href="${info.url || '#'}">${info.label || 'Última publicación'}</a></b> por <a href="${info.authorUrl || '#'}">${info.author || 'Anónimo'}</a>
                    <br>el <small>${info.date || ''}</small>
                </div>
            `;
            subforumElement.appendChild(row);

            if (index < forums.length - 1) {
                const divider = document.createElement('hr');
                divider.className = 'subforum-devider';
                subforumElement.appendChild(divider);
            }
        });

        container.appendChild(subforumElement);
    });
}

function renderTopics() {
    const postsTable = document.querySelector('.posts-table');
    if (!postsTable) {
        return;
    }

    const existingRows = postsTable.querySelectorAll('.table-row');
    existingRows.forEach((row) => row.remove());

    topics.forEach((topic) => {
        const row = document.createElement('div');
        row.className = 'table-row';
        row.innerHTML = `
            <div class="status"><i class="fa ${topic.statusIcon}"></i></div>
            <div class="subjects">
                <a href="${topic.subjectUrl || '#'}">${topic.subject}</a>
                <br>
                <span>Iniciado por <b><a href="${topic.starterUrl || '#'}">${topic.starter}</a></b>.</span>
            </div>
            <div class="replies">
                ${topic.replies} respuestas <br> ${topic.views} vistas
            </div>

            <div class="last-reply">
                ${topic.lastReplyDate}
                <br>Por <b><a href="${topic.lastReplyUrl || '#'}">${topic.lastReplyAuthor}</a></b>
            </div>
        `;
        postsTable.appendChild(row);
    });
}

//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

async function loadPartials(){
    var includeElements = document.querySelectorAll('[data-include]');
    await Promise.all(Array.from(includeElements).map(async function(element){
        var partialName = element.getAttribute('data-include');
        if(!partialName){
            return;
        }
        try{
            var response = await fetch('partials/' + partialName + '.html');
            if(!response.ok){
                throw new Error('Failed to fetch partial: ' + partialName);
            }
            var content = await response.text();
            element.outerHTML = content;
        }catch(error){
            console.error("Error loading partial '" + partialName + "':", error);
        }
    }));
}

document.addEventListener('DOMContentLoaded', function(){
    loadPartials();
});
