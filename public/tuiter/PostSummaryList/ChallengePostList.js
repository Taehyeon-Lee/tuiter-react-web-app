import ChallengePostItem from "./ChallengePostItem.js";
import challengePost from "./challengePost.js";



const PostSummaryList = () => {
    return(`
        <ul>
            ${
                challengePost.map(each => {
                    return(ChallengePostItem(each));
                }).join('')
            }
        </ul>
    `);
}
export default PostSummaryList;