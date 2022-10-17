import PostSummaryList from "./PostSummaryList.js";

$('#wd-render-main-post').append(`
    <div class="container">
        <h1>Testing rendering main posts</h1>
        ${PostSummaryList()}
    </div>
`);