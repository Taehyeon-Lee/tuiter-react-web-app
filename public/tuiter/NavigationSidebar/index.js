const NavigationSidebar = (active) => {
    let home,explore, notification, messages, bookmarks, lists, profile, more = null;
    if(active === 'home'){
        home = true;
    } else if(active === 'explore'){
        explore = true;
    }
    else if(active === 'notification'){
        notification = true;
    }
    else if(active === 'messages'){
        messages = true;
    }
    else if(active === 'bookmarks'){
        bookmark = true;
    }
    else if(active === 'lists'){
        lists = true;
    }
    else if(active === 'profile'){
        profile = true;
    }
    else if(active === 'more'){
         more = true;
    }


    return(`
        <div class="list-group">
            <a class="list-group-item" href="#">
            <i class="fab fa-twitter"></i></a>
            <a href="../HomeScreen/index.html"
            ${home ? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-home"></i>
                <span class="d-flex d-none d-xl-block ms-1"> Home</span>
            </a>
            <a href="../explore/index.html"
            ${explore? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-hashtag"></i>
                <span class="d-flex d-none d-xl-block ms-1">Explore</span>
            </a>
            <a href="#notification"
            ${notification? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-bell"></i>
                <span class="d-flex d-none d-xl-block ms-1">Notifications</span>
            </a>
            <a href="#Message"
            ${messages? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-envelope"></i>
                <span class="d-flex d-none d-xl-block ms-1">Messages</span>
            </a>
            <a href="#bookmarks"
            ${bookmarks? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-bookmark"></i>
                <span class="d-flex d-none d-xl-block ms-1">Bookmarks</span>
            </a>
            <a href="#list"
            ${lists? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-list"></i>
                <span class="d-flex d-none d-xl-block ms-1">Lists</span>
            </a>
            <a href="#profile"
            ${profile? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-user"></i>
                <span class="d-flex d-none d-xl-block ms-1">Profile</span>
            </a>
            <a href="#more"
            ${more? 'class="list-group-item list-group-item-action active d-flex align-items-center"' :
                'class="list-group-item list-group-item-action d-flex align-items-center"'}>
                <i class="fas fa-dot-circle"></i>
                <span class="d-flex d-none d-xl-block ms-1">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;
