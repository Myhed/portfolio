const xmlHttpRequest = new XMLHttpRequest();
const url = "https://app.dailynow.co/graphql?query=query+fetchBookmarks($params:+QueryPostInput)+%7B+bookmarks(params:+$params)+%7B+id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication+%7B+id,+name,+image+%7D,tags,bookmarked,read+%7D+%7D&variables=%7B%22params%22:%7B%22latest%22:%222020-01-13T10:28:20.923Z%22,%22page%22:0,%22pageSize%22:30%7D%7D"
xmlHttpRequest.open("GET", url, true);
xmlHttpRequest.setRequestHeader('access-control-allow-origin', 'zobi');
console.log(xmlHttpRequest.send())


