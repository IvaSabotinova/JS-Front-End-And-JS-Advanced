function comments(input) {
    let users = {};
    let articles = {};

    for (const line of input) {
        if (line.includes('user')) {
            let userName = line.slice(5);
            if (!users.hasOwnProperty(userName)) {
                users[userName] = [];
            }
        }
        else if (line.includes('article')) {
            let articleName = line.slice(8);
            if (!articles.hasOwnProperty(articleName)) {
                articles[articleName] = [];
            }
        }
        else if (line.includes('posts on')) {
            let userName = line.split(' ')[0];
            let indexColon = line.indexOf(':');
            let articleName_ = line.split(' ')[3];
            let articleName = articleName_.slice(0, articleName_.length - 1);
            let articleTitle = line.slice(indexColon + 2).split(', ')[0];
            let articleContent = line.slice(indexColon + 2).split(', ')[1];
            if (users.hasOwnProperty(userName) && articles.hasOwnProperty(articleName)) {
                articles[articleName].push({ user: userName, title: articleTitle, content: articleContent });
            }
        }
    }

    let sortedArticles = Object.entries(articles).sort((a, b)=> b[1].length - a[1].length);

    for (const [articleName, comments] of sortedArticles) {
        console.log(`Comments on ${articleName}`);
        let sortedComments = comments.sort((a,b)=> a.user.localeCompare(b.user));
        for (const {user, title, content} of sortedComments) {
            console.log(`--- From user ${user}: ${title} - ${content}`);
        }
    }
 
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);

    comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);
