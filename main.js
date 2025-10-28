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
